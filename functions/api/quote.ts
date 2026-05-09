import type { EventContext } from '@cloudflare/workers-types';

// CORS headers for all responses
const getCorsHeaders = (origin: string) => ({
  'Access-Control-Allow-Origin': origin,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
});

// Allowed origins
const allowedOrigins = [
  'https://rendetalje.dk',
  'https://www.rendetalje.dk',
  'http://localhost:3000',
  'http://localhost:8788',
];

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 3;
const MAX_BODY_BYTES = 25_000;
const MAX_FIELD_LENGTHS = {
  name: 120,
  phone: 40,
  email: 254,
  type: 80,
  address: 180,
  city: 120,
  size: 20,
  frequency: 80,
  date: 120,
  description: 2_000,
};
const ALLOWED_TYPES = new Set([
  'fast',
  'flytte',
  'hoved',
  'erhverv',
  'andet',
  'Fast rengøring',
  'Flytterengøring',
  'Hovedrengøring',
  'Erhvervsrengøring',
]);
const rateLimitHits = new Map<string, number[]>();

type HeaderReader = {
  get(name: string): string | null;
};

function getClientIp(headers: HeaderReader): string {
  return headers.get('CF-Connecting-IP') ||
    headers.get('X-Forwarded-For')?.split(',')[0]?.trim() ||
    'unknown';
}

function isRateLimited(headers: HeaderReader): boolean {
  // Prevent memory leak in long-lived isolate
  if (rateLimitHits.size > 1000) {
    rateLimitHits.clear();
  }

  const key = getClientIp(headers);
  const now = Date.now();
  const recentHits = (rateLimitHits.get(key) || []).filter((hit) => now - hit < RATE_LIMIT_WINDOW_MS);

  if (recentHits.length >= RATE_LIMIT_MAX_REQUESTS) {
    rateLimitHits.set(key, recentHits);
    return true;
  }

  recentHits.push(now);
  rateLimitHits.set(key, recentHits);
  return false;
}

function isAllowedOrigin(origin: string | null): boolean {
  return !origin || allowedOrigins.includes(origin);
}

function getString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function getValidationError(data: QuoteData): string | null {
  if (getString(data.companyWebsite)) {
    return 'Invalid submission';
  }

  for (const [field, maxLength] of Object.entries(MAX_FIELD_LENGTHS)) {
    const value = data[field];
    if (typeof value === 'string' && value.length > maxLength) {
      return `Field too long: ${field}`;
    }
  }

  if (!getString(data.name) || !getString(data.phone) || !getString(data.email) || !getString(data.type)) {
    return 'Missing required fields';
  }

  if (!EMAIL_REGEX.test(getString(data.email))) {
    return 'Invalid email format';
  }

  if (!ALLOWED_TYPES.has(getString(data.type))) {
    return 'Invalid service type';
  }

  return null;
}

// Input sanitization to prevent XSS
function sanitizeInput(input: unknown): unknown {
  if (typeof input !== 'string') return input;
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

interface QuoteData {
  name?: string;
  phone?: string;
  email?: string;
  type?: string;
  address?: string;
  city?: string;
  size?: string;
  frequency?: string;
  date?: string;
  description?: string;
  [key: string]: unknown;
}

// Environment variables type
type Env = {
  RESEND_API_KEY?: string;
  QUOTE_DESTINATION_EMAIL?: string;
  FROM_EMAIL?: string;
};

// Sanitize all object values recursively
function sanitizeValue(value: unknown): unknown {
  if (typeof value === 'string') {
    return sanitizeInput(value);
  } else if (Array.isArray(value)) {
    return value.map(sanitizeValue);
  } else if (value !== null && typeof value === 'object') {
    const sanitized: Record<string, unknown> = {};
    for (const key in value as Record<string, unknown>) {
      sanitized[key] = sanitizeValue((value as Record<string, unknown>)[key]);
    }
    return sanitized;
  }
  return value;
}

function sanitizeObject(obj: Record<string, unknown>): QuoteData {
  return sanitizeValue(obj) as QuoteData;
}

// Simple email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Main handler - handles all methods
export async function onRequest(context: EventContext<Env, string, unknown>): Promise<Response> {
  const request = context.request;
  const origin = request.headers.get('Origin');
  const corsHeaders = getCorsHeaders(origin && allowedOrigins.includes(origin) ? origin : 'https://rendetalje.dk');

  // Handle OPTIONS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  // Only allow POST
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  if (!isAllowedOrigin(origin)) {
    return new Response(JSON.stringify({ error: 'Forbidden origin' }), {
      status: 403,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  if (!request.headers.get('Content-Type')?.toLowerCase().includes('application/json')) {
    return new Response(JSON.stringify({ error: 'Unsupported media type' }), {
      status: 415,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  if (isRateLimited(request.headers)) {
    return new Response(JSON.stringify({ error: 'For mange forespørgsler. Prøv igen om lidt.' }), {
      status: 429,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  try {
    // Parse JSON safely — SyntaxError → 400, not 500
    // Also limit body size to prevent abuse
    const contentLength = request.headers.get('Content-Length');
    if (contentLength && parseInt(contentLength) > MAX_BODY_BYTES) {
      return new Response(JSON.stringify({ error: 'Request body too large' }), {
        status: 413,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
    let rawData: Record<string, unknown>;
    try {
      rawData = await request.json() as Record<string, unknown>;
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Prevent unhandled 500 crashes if rawData is null or not an object
    if (!rawData || typeof rawData !== 'object' || Array.isArray(rawData)) {
      return new Response(JSON.stringify({ error: 'Invalid JSON payload format' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    const data = sanitizeObject(rawData);
    
    const validationError = getValidationError(data);
    if (validationError) {
      const status = validationError === 'Invalid submission' ? 400 : 422;
      return new Response(JSON.stringify({ error: validationError }), {
        status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    const name = getString(data.name);
    const phone = getString(data.phone);
    const email = getString(data.email);
    const type = getString(data.type);
    const RESEND_API_KEY = context.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: 'Email service is not configured' }), {
        status: 503,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Prevent header injection by removing CRLF from inputs used in subject safely
    const safeName = name.replace(/[\r\n]/g, '');
    const safeType = type.replace(/[\r\n]/g, '');

    // Hent miljøvariabler fra Cloudflare
    const DESTINATION_EMAIL = context.env.QUOTE_DESTINATION_EMAIL || 'info@rendetalje.dk';
    const FROM_EMAIL = context.env.FROM_EMAIL || 'info@rendetalje.dk';

    if (!EMAIL_REGEX.test(DESTINATION_EMAIL) || !EMAIL_REGEX.test(FROM_EMAIL)) {
      return new Response(JSON.stringify({ error: 'Email service is misconfigured' }), {
        status: 503,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    if (getString(data.address).toLowerCase().includes('http') || getString(data.description).toLowerCase().includes('[url=')) {
      return new Response(JSON.stringify({ error: 'Invalid submission' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // HTML skabelon til emailen
    const emailHtml = `
      <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto;">
        <h2 style="color: #16a34a;">Ny forespørgsel fra Rendetalje.dk</h2>
        <p>Du har modtaget en ny henvendelse via hjemmesidens kontaktformular.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Navn:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${name}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Telefon:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${phone}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${email}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Adresse:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.address || '-'}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Postnr/By:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.city || '-'}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Opgavetype:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${type}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Størrelse:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.size ? data.size + ' m²' : '-'}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Frekvens:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.frequency || '-'}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Ønsket dato:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.date || '-'}</td></tr>
        </table>
        
        <h3 style="margin-top: 20px;">Beskrivelse:</h3>
        <p style="background: #f8fafc; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${data.description || 'Ingen beskrivelse angivet.'}</p>
      </div>
    `;

    // Send email via Resend API with 15s timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: `Rendetalje <${FROM_EMAIL}>`,
        to: DESTINATION_EMAIL,
        subject: `Ny forespørgsel: ${safeType} - ${safeName}`,
        html: emailHtml,
        reply_to: email
      }),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error('Kunne ikke sende email via Resend');
    }

    // Send auto-reply to the customer (non-blocking — wrapped in try/catch)
    try {
      const autoReplyHtml = `
        <div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="background: #16a34a; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 24px;">Rendetalje</h1>
            <p style="color: #e6f7e6; margin: 5px 0 0; font-size: 14px;">Rengøring i Aarhus</p>
          </div>
          <div style="background: #fff; padding: 30px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 8px 8px;">
            <p style="font-size: 16px; margin-top: 0;">Hej ${safeName},</p>
            <p>Tak for din forespørgsel om <strong>${safeType}</strong>.</p>
            <p>Vi har modtaget dine oplysninger og vender tilbage inden for 2 timer i dagtimerne med et uforpligtende tilbud eller for at aftale nærmere.</p>
            <p>Hvis du har brug for akut hjælp, er du velkommen til at ringe på <strong>22 65 02 26</strong>.</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 25px 0;" />
            <p style="font-size: 14px; color: #666; margin-bottom: 5px;">Med venlig hilsen</p>
            <p style="font-size: 15px; color: #16a34a; font-weight: bold; margin: 0;">Rendetalje</p>
            <p style="font-size: 13px; color: #666; margin: 2px 0;">Rendetalje</p>
            <p style="font-size: 13px; color: #666; margin: 2px 0;">T: 22 65 02 26</p>
          </div>
        </div>
      `;

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: `Rendetalje <${FROM_EMAIL}>`,
          to: email,
          subject: 'Vi har modtaget din forespørgsel — Rendetalje',
          html: autoReplyHtml,
        }),
      });
    } catch {
      // Auto-reply failure should not break the main flow — silently ignored
    }

    return new Response(JSON.stringify({ success: true, message: 'Email sendt succesfuldt' }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: 'Der opstod en serverfejl' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
}

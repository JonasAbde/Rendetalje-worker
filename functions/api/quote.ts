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

// In-memory rate limiter configuration
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;
const MAX_MAP_SIZE = 1000; // Prevent memory leak

interface RateLimitInfo {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitInfo>();

// Main handler - handles all methods
export async function onRequest(context: EventContext<Env, string, unknown>): Promise<Response> {
  const request = context.request;
  const origin = request.headers.get('Origin') || 'https://rendetalje.dk';
  const corsHeaders = getCorsHeaders(allowedOrigins.includes(origin) ? origin : 'https://rendetalje.dk');

  // Handle OPTIONS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  // Rate Limiting (apply after OPTIONS preflight)
  const clientIp = request.headers.get('CF-Connecting-IP') || 'unknown';
  const now = Date.now();

  // Cleanup if the map gets too big
  if (rateLimitMap.size > MAX_MAP_SIZE) {
    rateLimitMap.clear();
  }

  let rateInfo = rateLimitMap.get(clientIp);

  if (!rateInfo || now > rateInfo.resetTime) {
    // New window
    rateInfo = { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS };
    rateLimitMap.set(clientIp, rateInfo);
  } else {
    // Existing window
    rateInfo.count += 1;
    if (rateInfo.count > MAX_REQUESTS_PER_WINDOW) {
      return new Response(JSON.stringify({ error: 'Too many requests, please try again later.' }), {
        status: 429,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
          'Retry-After': String(Math.ceil((rateInfo.resetTime - now) / 1000))
        }
      });
    }
    rateLimitMap.set(clientIp, rateInfo);
  }

  // Only allow POST
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  try {
    const rawData = await request.json() as Record<string, unknown>;
    const data = sanitizeObject(rawData);
    
    // Basic validation
    if (!data.name || !data.phone || !data.email || !data.type) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    if (!EMAIL_REGEX.test(data.email)) {
      return new Response(JSON.stringify({ error: 'Invalid email format' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Prevent header injection by removing CRLF from inputs used in subject safely
    const safeName = typeof data.name === 'string' ? data.name.replace(/[\r\n]/g, '') : '';
    const safeType = typeof data.type === 'string' ? data.type.replace(/[\r\n]/g, '') : '';

    // Hent miljøvariabler fra Cloudflare
    const RESEND_API_KEY = context.env.RESEND_API_KEY;
    const DESTINATION_EMAIL = context.env.QUOTE_DESTINATION_EMAIL || 'info@rendetalje.dk';
    const FROM_EMAIL = context.env.FROM_EMAIL || 'info@rendetalje.dk';

    // HTML skabelon til emailen
    const emailHtml = `
      <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto;">
        <h2 style="color: #16a34a;">Ny forespørgsel fra Rendetalje.dk</h2>
        <p>Du har modtaget en ny henvendelse via hjemmesidens kontaktformular.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Navn:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.name}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Telefon:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.phone}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.email}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Adresse:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.address || '-'}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Postnr/By:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.city || '-'}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Opgavetype:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.type}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Størrelse:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.size ? data.size + ' m²' : '-'}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Frekvens:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.frequency || '-'}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Ønsket dato:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.date || '-'}</td></tr>
        </table>
        
        <h3 style="margin-top: 20px;">Beskrivelse:</h3>
        <p style="background: #f8fafc; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${data.description || 'Ingen beskrivelse angivet.'}</p>
      </div>
    `;

    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ success: true, message: 'Simulated success (Missing API Key)' }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Send email via Resend API
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
        reply_to: data.email
      })
    });

    if (!response.ok) {
      throw new Error('Kunne ikke sende email via Resend');
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

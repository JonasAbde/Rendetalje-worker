import type { Env, QuoteData } from '../types';

const allowedOrigins = [
  'https://rendetalje.dk',
  'https://www.rendetalje.dk',
  'http://localhost:3000',
  'http://localhost:8788',
];

const getCorsHeaders = (origin: string) => ({
  'Access-Control-Allow-Origin': origin,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
});

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

function sanitizeObject(obj: Record<string, unknown>): QuoteData {
  const sanitized: QuoteData = {};
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === 'string') {
      sanitized[key] = sanitizeInput(value) as string;
    } else {
      sanitized[key] = value;
    }
  }
  return sanitized;
}

export async function handleQuoteRequest(request: Request, env: Env): Promise<Response> {
  const origin = request.headers.get('Origin') || 'https://rendetalje.dk';
  const corsHeaders = getCorsHeaders(allowedOrigins.includes(origin) ? origin : 'https://rendetalje.dk');

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

    // Email format validation to prevent header injection in reply_to
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(JSON.stringify({ error: 'Invalid email format' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Strip CRLF to prevent header injection in subject
    const safeName = data.name.replace(/[\r\n]/g, '');
    const safeType = data.type.replace(/[\r\n]/g, '');

    const RESEND_API_KEY = env.RESEND_API_KEY;
    const DESTINATION_EMAIL = env.QUOTE_DESTINATION_EMAIL || 'info@rendetalje.dk';
    const FROM_EMAIL = env.FROM_EMAIL || 'info@rendetalje.dk';

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

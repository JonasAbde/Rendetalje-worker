import { handleQuoteRequest } from './api/quote';

export interface Env {
  QUOTE_DESTINATION_EMAIL?: string;
  CONTACT_DESTINATION_EMAIL?: string;
  TURNSTILE_SECRET_KEY?: string;
  PUBLIC_SITE_URL?: string;
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const url = new URL(request.url);
    
    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // API Routes
    if (url.pathname === '/api/quote' && request.method === 'POST') {
      return handleQuoteRequest(request, env, corsHeaders);
    }

    // Return 404 for unknown API routes
    return new Response(JSON.stringify({ error: 'Not found' }), {
      status: 404,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
    });
  },
};

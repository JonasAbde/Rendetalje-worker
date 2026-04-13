import type { Env } from './types';
import { handleQuoteRequest } from './handlers/quote';

export interface WorkerCtx {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

export default {
  async fetch(request: Request, env: Env, ctx: WorkerCtx): Promise<Response> {
    const url = new URL(request.url);
    
    // Handle favicon.ico - redirect to logo.png
    if (url.pathname === '/favicon.ico') {
      return Response.redirect('https://rendetalje.dk/logo.png', 301);
    }
    
    // Route handling
    if (url.pathname === '/api/quote' || url.pathname === '/quote') {
      return handleQuoteRequest(request, env);
    }
    
    // Fallback for unmatched routes
    return new Response('Not Found', { status: 404 });
  },
};

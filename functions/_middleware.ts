/**
 * Cloudflare Pages middleware
 * - Redirects www.rendetalje.dk → rendetalje.dk (301 permanent)
 */

export async function onRequest(context: {
  request: Request;
  next: () => Promise<Response>;
  env: Record<string, string>;
}): Promise<Response> {
  const { request, next } = context;
  const url = new URL(request.url);

  // Redirect www to non-www (canonical domain)
  if (url.hostname === 'www.rendetalje.dk') {
    return Response.redirect(
      `https://rendetalje.dk${url.pathname}${url.search}`,
      301,
    );
  }

  // Pass through all other requests
  return next();
}

## 2026-05-02 - Secure Random Number Generation for Booking References
**Vulnerability:** The application was using `Math.random()` to generate the random portion of booking references (e.g., `REN-260502-123`). `Math.random()` is not cryptographically secure and produces predictable outputs.
**Learning:** For any sensitive or outward-facing identifiers that require randomness, we must use the Web Crypto API (`crypto.getRandomValues()`) instead of `Math.random()`. `Math.random()` is acceptable for non-security contexts like animations (e.g., confetti particles).
**Prevention:** Always use `crypto.getRandomValues()` with typed arrays (like `Uint32Array`) when generating random identifiers, tokens, or references.

## 2024-05-04 - [Fix XSS Type Confusion and Email Header Injection]
**Vulnerability:** Type Confusion XSS in API sanitization (due to missing recursive sanitization) and potential Email Header Injection (due to CRLF injection in email subjects).
**Learning:** Arrays and nested objects can bypass top-level string replacements and still invoke `toString()` during template interpolation resulting in XSS. User inputs mapped directly to email headers need explicit `\r\n` removal.
**Prevention:** Always implement recursive object traversal for sanitization and strip CRLF inputs from headers explicitly.

## 2024-05-06 - [Add In-Memory Rate Limiting to Cloudflare Pages Functions]
**Vulnerability:** Missing rate limiting on sensitive API endpoints (like quote generation) can lead to abuse, spam, and DoS attacks.
**Learning:** Cloudflare Workers isolates are generally short-lived, but they can persist state between requests. Simple in-memory maps are effective for basic rate limiting across the same isolate instance. However, without a size cap, these maps could cause memory leaks if left unchecked. Rate limiting checks should also always happen *after* handling CORS `OPTIONS` preflight requests so preflights don't accidentally consume limit quotas.
**Prevention:** Implement Map-based memory structures with size limit checks (`if (map.size > MAX) map.clear();`) for simple per-isolate IP throttling. Apply this consistently to endpoints handling form submissions or API actions.

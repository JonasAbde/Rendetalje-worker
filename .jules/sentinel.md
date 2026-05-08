## 2026-05-02 - Secure Random Number Generation for Booking References
**Vulnerability:** The application was using `Math.random()` to generate the random portion of booking references (e.g., `REN-260502-123`). `Math.random()` is not cryptographically secure and produces predictable outputs.
**Learning:** For any sensitive or outward-facing identifiers that require randomness, we must use the Web Crypto API (`crypto.getRandomValues()`) instead of `Math.random()`. `Math.random()` is acceptable for non-security contexts like animations (e.g., confetti particles).
**Prevention:** Always use `crypto.getRandomValues()` with typed arrays (like `Uint32Array`) when generating random identifiers, tokens, or references.

## 2024-05-04 - [Fix XSS Type Confusion and Email Header Injection]
**Vulnerability:** Type Confusion XSS in API sanitization (due to missing recursive sanitization) and potential Email Header Injection (due to CRLF injection in email subjects).
**Learning:** Arrays and nested objects can bypass top-level string replacements and still invoke `toString()` during template interpolation resulting in XSS. User inputs mapped directly to email headers need explicit `\r\n` removal.
**Prevention:** Always implement recursive object traversal for sanitization and strip CRLF inputs from headers explicitly.

## 2024-05-08 - [In-Memory Rate Limiting on Cloudflare Workers]
**Vulnerability:** Missing rate limiting on the `/api/quote` email endpoint allowed unrestricted POST requests, opening the possibility for email spam/abuse and potential resource exhaustion.
**Learning:** In Cloudflare Workers/Pages Functions, the client IP can be identified via the `CF-Connecting-IP` header. In-memory `Map` objects are suitable for basic rate-limiting within an isolate but preflight `OPTIONS` requests should not be counted. Since local environments may omit this header, bypassing the check locally avoids globally sharing the limit. Isolates can be long-lived, so maps must incorporate a cleanup mechanism (like clearing at >1000 entries) to prevent memory leaks.
**Prevention:** Always implement rate limiting on unauthenticated POST endpoints using `CF-Connecting-IP`. Check limits after CORS preflight, skip when IP is absent (for local dev), and bound the `Map` size to prevent memory leaks.

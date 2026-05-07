## 2026-05-02 - Secure Random Number Generation for Booking References
**Vulnerability:** The application was using `Math.random()` to generate the random portion of booking references (e.g., `REN-260502-123`). `Math.random()` is not cryptographically secure and produces predictable outputs.
**Learning:** For any sensitive or outward-facing identifiers that require randomness, we must use the Web Crypto API (`crypto.getRandomValues()`) instead of `Math.random()`. `Math.random()` is acceptable for non-security contexts like animations (e.g., confetti particles).
**Prevention:** Always use `crypto.getRandomValues()` with typed arrays (like `Uint32Array`) when generating random identifiers, tokens, or references.

## 2024-05-04 - [Fix XSS Type Confusion and Email Header Injection]
**Vulnerability:** Type Confusion XSS in API sanitization (due to missing recursive sanitization) and potential Email Header Injection (due to CRLF injection in email subjects).
**Learning:** Arrays and nested objects can bypass top-level string replacements and still invoke `toString()` during template interpolation resulting in XSS. User inputs mapped directly to email headers need explicit `\r\n` removal.
**Prevention:** Always implement recursive object traversal for sanitization and strip CRLF inputs from headers explicitly.

## 2024-05-07 - Add Rate Limiting to Quote API
**Vulnerability:** Missing rate limiting on the `/api/quote` email endpoint, which could allow an attacker to exhaust the Resend API quota.
**Learning:** Cloudflare Pages Functions run in isolates. In-memory rate limiting using a `Map` works per-isolate but needs a size limit (e.g. > 1000 entries) to avoid memory leaks. Also, `CF-Connecting-IP` isn't always present in local dev environments, requiring conditionally skipped limits to prevent blocking local development.
**Prevention:** Add an in-memory rate limiter with a maximum size check and ensure `CF-Connecting-IP` is present before tracking limits.

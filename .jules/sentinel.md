## 2026-05-02 - Secure Random Number Generation for Booking References
**Vulnerability:** The application was using `Math.random()` to generate the random portion of booking references (e.g., `REN-260502-123`). `Math.random()` is not cryptographically secure and produces predictable outputs.
**Learning:** For any sensitive or outward-facing identifiers that require randomness, we must use the Web Crypto API (`crypto.getRandomValues()`) instead of `Math.random()`. `Math.random()` is acceptable for non-security contexts like animations (e.g., confetti particles).
**Prevention:** Always use `crypto.getRandomValues()` with typed arrays (like `Uint32Array`) when generating random identifiers, tokens, or references.

## 2024-05-04 - [Fix XSS Type Confusion and Email Header Injection]
**Vulnerability:** Type Confusion XSS in API sanitization (due to missing recursive sanitization) and potential Email Header Injection (due to CRLF injection in email subjects).
**Learning:** Arrays and nested objects can bypass top-level string replacements and still invoke `toString()` during template interpolation resulting in XSS. User inputs mapped directly to email headers need explicit `\r\n` removal.
**Prevention:** Always implement recursive object traversal for sanitization and strip CRLF inputs from headers explicitly.

## 2026-05-18 - [Fix JSON Parsing Unhandled Exception and Map Memory Leak]
**Vulnerability:** A missing type check for JSON payloads returned by `request.json()` caused 500 Internal Server errors when iterating over objects like `null` or `Array`, and a missing mechanism to clean up the `rateLimitHits` Map caused infinite memory growth resulting in a DoS vulnerability.
**Learning:** Type validation is necessary for payloads parsed through `request.json()`, and in-memory Map rate limiters need a time-throttled cleanup mechanism.
**Prevention:** Verify JSON payload types `if (!data || typeof data !== 'object' || Array.isArray(data))` before destructuring/object iteration. Use a time-throttled approach like `if (Date.now() - lastCleanupTime > interval)` to selectively clean up Map rate limiters without introducing high CPU utilization vulnerabilities.

## 2026-05-27 - [Fix IP Spoofing via X-Forwarded-For in Rate Limiter]
**Vulnerability:** The application's rate limiter was falling back to the `X-Forwarded-For` header to determine the client's IP address when `CF-Connecting-IP` was missing (e.g., during local testing). This allowed malicious users to trivially bypass rate limits by spoofing their IP address via custom `X-Forwarded-For` headers.
**Learning:** Cloudflare Pages Functions natively inject the trusted client IP into the `CF-Connecting-IP` header. User-supplied headers like `X-Forwarded-For` are unverified and must never be used for security controls or rate limiting.
**Prevention:** Rely exclusively on `CF-Connecting-IP` for IP-based security controls in Cloudflare Workers/Pages Functions. If the header is absent (e.g., local development), default securely to a shared bucket like `'unknown'` rather than trusting potentially spoofed headers or using random UUIDs.

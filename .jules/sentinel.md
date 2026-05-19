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

## 2026-05-19 - [Fix Rate Limiting IP Spoofing Vulnerability]
**Vulnerability:** The rate limiter's `getClientIp` function fell back to the `X-Forwarded-For` header if `CF-Connecting-IP` was missing. Because `X-Forwarded-For` is a standard HTTP header that can be easily manipulated by clients, attackers could spoof their IP address on every request to entirely bypass the rate limit.
**Learning:** In edge environments like Cloudflare Workers, only rely on platform-provided, verified headers (like `CF-Connecting-IP`) to identify clients for security controls. Never trust client-provided headers like `X-Forwarded-For` or `True-Client-IP` for authentication, authorization, or rate limiting purposes unless you control the proxy layer that sets them.
**Prevention:** Remove all fallbacks to `X-Forwarded-For` in `getClientIp` and explicitly depend on `CF-Connecting-IP` or fallback to `'unknown'` in local environments.

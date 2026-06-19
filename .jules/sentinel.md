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

## 2026-06-25 - [Fix IP Spoofing in Rate Limiter]
**Vulnerability:** IP Spoofing and rate limit bypass via `X-Forwarded-For`. The `getClientIp` function fell back to `X-Forwarded-For` when `CF-Connecting-IP` was not present, allowing an attacker to bypass rate limiting simply by setting an arbitrary `X-Forwarded-For` header.
**Learning:** Cloudflare Pages Functions retrieve the client's IP via `CF-Connecting-IP`. Falling back to `X-Forwarded-For` is a security risk because attackers can control the `X-Forwarded-For` header, allowing them to circumvent IP-based protections like rate limits.
**Prevention:** Rely exclusively on `CF-Connecting-IP` in Cloudflare environments. Never use `X-Forwarded-For` or random fallback IDs (like UUIDs) for security controls to prevent spoofing or limit bypass. Fail securely into a shared bucket like 'unknown' if no valid IP is present.

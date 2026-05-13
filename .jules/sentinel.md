## 2026-05-02 - Secure Random Number Generation for Booking References
**Vulnerability:** The application was using `Math.random()` to generate the random portion of booking references (e.g., `REN-260502-123`). `Math.random()` is not cryptographically secure and produces predictable outputs.
**Learning:** For any sensitive or outward-facing identifiers that require randomness, we must use the Web Crypto API (`crypto.getRandomValues()`) instead of `Math.random()`. `Math.random()` is acceptable for non-security contexts like animations (e.g., confetti particles).
**Prevention:** Always use `crypto.getRandomValues()` with typed arrays (like `Uint32Array`) when generating random identifiers, tokens, or references.

## 2024-05-04 - [Fix XSS Type Confusion and Email Header Injection]
**Vulnerability:** Type Confusion XSS in API sanitization (due to missing recursive sanitization) and potential Email Header Injection (due to CRLF injection in email subjects).
**Learning:** Arrays and nested objects can bypass top-level string replacements and still invoke `toString()` during template interpolation resulting in XSS. User inputs mapped directly to email headers need explicit `\r\n` removal.
**Prevention:** Always implement recursive object traversal for sanitization and strip CRLF inputs from headers explicitly.

## 2024-05-13 - [Fix Rate Limiter Memory Leak and Bypass Risk]
**Vulnerability:** The in-memory `rateLimitHits` Map in Cloudflare Pages Functions (which run in long-lived isolates) grew unboundedly for every unique IP. This caused memory exhaustion (OOM), leading the isolate to restart and flush the Map, effectively bypassing rate limits for all current users during high-traffic bursts.
**Learning:** In long-lived serverless isolates, global state (like Maps) persists across requests. A lack of size bounds leads to memory leaks, and naive solutions like calling `map.clear()` when full cause a reset of rate limit data for all users, introducing a bypass vulnerability during peak abuse.
**Prevention:** Always implement a bounded map check that selectively removes expired entries instead of clearing the entire map or letting it grow infinitely.

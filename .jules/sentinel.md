## 2026-05-02 - Secure Random Number Generation for Booking References
**Vulnerability:** The application was using `Math.random()` to generate the random portion of booking references (e.g., `REN-260502-123`). `Math.random()` is not cryptographically secure and produces predictable outputs.
**Learning:** For any sensitive or outward-facing identifiers that require randomness, we must use the Web Crypto API (`crypto.getRandomValues()`) instead of `Math.random()`. `Math.random()` is acceptable for non-security contexts like animations (e.g., confetti particles).
**Prevention:** Always use `crypto.getRandomValues()` with typed arrays (like `Uint32Array`) when generating random identifiers, tokens, or references.

## 2024-05-04 - [Fix XSS Type Confusion and Email Header Injection]
**Vulnerability:** Type Confusion XSS in API sanitization (due to missing recursive sanitization) and potential Email Header Injection (due to CRLF injection in email subjects).
**Learning:** Arrays and nested objects can bypass top-level string replacements and still invoke `toString()` during template interpolation resulting in XSS. User inputs mapped directly to email headers need explicit `\r\n` removal.
**Prevention:** Always implement recursive object traversal for sanitization and strip CRLF inputs from headers explicitly.
## 2024-05-12 - [Unhandled JSON Type Vulnerability & Memory Leak]
**Vulnerability:** Unhandled JSON null/array types causing 500 crashes and potential DoS; unbounded Map memory leak in rate limiter.
**Learning:** `typeof null === 'object'` in JavaScript allows null payloads to masquerade as objects, bypassing simplistic validation and causing subsequent logic to throw exceptions. Long-lived Cloudflare Worker isolates need map bound management to prevent gradual memory exhaustion.
**Prevention:** Explicitly verify JSON parse results are non-null, non-array objects before property access; enforce size limits and `clear()` bounds on long-lived stateful objects like rate limiting Maps.

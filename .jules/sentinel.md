## 2026-05-02 - Secure Random Number Generation for Booking References
**Vulnerability:** The application was using `Math.random()` to generate the random portion of booking references (e.g., `REN-260502-123`). `Math.random()` is not cryptographically secure and produces predictable outputs.
**Learning:** For any sensitive or outward-facing identifiers that require randomness, we must use the Web Crypto API (`crypto.getRandomValues()`) instead of `Math.random()`. `Math.random()` is acceptable for non-security contexts like animations (e.g., confetti particles).
**Prevention:** Always use `crypto.getRandomValues()` with typed arrays (like `Uint32Array`) when generating random identifiers, tokens, or references.

## 2024-05-04 - [Fix XSS Type Confusion and Email Header Injection]
**Vulnerability:** Type Confusion XSS in API sanitization (due to missing recursive sanitization) and potential Email Header Injection (due to CRLF injection in email subjects).
**Learning:** Arrays and nested objects can bypass top-level string replacements and still invoke `toString()` during template interpolation resulting in XSS. User inputs mapped directly to email headers need explicit `\r\n` removal.
**Prevention:** Always implement recursive object traversal for sanitization and strip CRLF inputs from headers explicitly.

## 2024-05-14 - Prevent TypeErrors from parsed untrusted JSON and memory leaks in rate limiters
**Vulnerability:**
1. The `request.json()` in Cloudflare Workers can return `null`, arrays, or scalar values. Passing these directly into functions that expect objects (like `sanitizeObject`) without type-checking leads to unhandled `TypeError`s, causing the endpoint to crash and return 500.
2. The global `rateLimitHits` Map lacked bounds checking. An attacker could flood the endpoint with spoofed IPs, filling the map until the isolate hits the memory limit (OOM) and crashes, creating a Denial of Service (DoS) condition.
**Learning:** We must rigorously validate that incoming JSON payloads are non-null objects before destructuring or iterating over them. Additionally, in-memory stores like rate limit Maps in long-lived environments require bounds limits and cleanup routines to prevent memory exhaustion, and clearing the entire map blindly allows rate-limit bypass.
**Prevention:**
1. Check `!rawData || typeof rawData !== 'object' || Array.isArray(rawData)` immediately after `request.json()`.
2. Implement size limits on `Map` structures and selectively garbage collect expired entries to maintain bounds without discarding active restrictions.

## 2026-05-02 - Secure Random Number Generation for Booking References
**Vulnerability:** The application was using `Math.random()` to generate the random portion of booking references (e.g., `REN-260502-123`). `Math.random()` is not cryptographically secure and produces predictable outputs.
**Learning:** For any sensitive or outward-facing identifiers that require randomness, we must use the Web Crypto API (`crypto.getRandomValues()`) instead of `Math.random()`. `Math.random()` is acceptable for non-security contexts like animations (e.g., confetti particles).
**Prevention:** Always use `crypto.getRandomValues()` with typed arrays (like `Uint32Array`) when generating random identifiers, tokens, or references.

## 2024-05-04 - [Fix XSS Type Confusion and Email Header Injection]
**Vulnerability:** Type Confusion XSS in API sanitization (due to missing recursive sanitization) and potential Email Header Injection (due to CRLF injection in email subjects).
**Learning:** Arrays and nested objects can bypass top-level string replacements and still invoke `toString()` during template interpolation resulting in XSS. User inputs mapped directly to email headers need explicit `\r\n` removal.
**Prevention:** Always implement recursive object traversal for sanitization and strip CRLF inputs from headers explicitly.

## 2026-05-09 - [Fix Memory Leak & JSON 500 crashes in API route]
**Vulnerability:** The `isRateLimited` function used an unbounded `Map` to store hits which could grow indefinitely in Cloudflare Workers' long-lived isolates, causing a Denial of Service memory leak. The `/api/quote` route also accepted arbitrary JSON including `null` or arrays resulting in unhandled `TypeError` exceptions triggering 500 server crashes.
**Learning:** In-memory stores without cleanup logic are a memory leak vector in persistent serverless environments. JSON parsers return `null` for `"null"` payloads and arrays for `"[1,2]"` payloads, bypassing typical `Record<string, unknown>` types leading to `typeof null === 'object'` bugs.
**Prevention:** Always cap the size of memory cache Maps and use explicit `typeof payload === 'object' && payload !== null && !Array.isArray(payload)` checks.

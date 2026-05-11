## 2026-05-02 - Secure Random Number Generation for Booking References
**Vulnerability:** The application was using `Math.random()` to generate the random portion of booking references (e.g., `REN-260502-123`). `Math.random()` is not cryptographically secure and produces predictable outputs.
**Learning:** For any sensitive or outward-facing identifiers that require randomness, we must use the Web Crypto API (`crypto.getRandomValues()`) instead of `Math.random()`. `Math.random()` is acceptable for non-security contexts like animations (e.g., confetti particles).
**Prevention:** Always use `crypto.getRandomValues()` with typed arrays (like `Uint32Array`) when generating random identifiers, tokens, or references.

## 2024-05-04 - [Fix XSS Type Confusion and Email Header Injection]
**Vulnerability:** Type Confusion XSS in API sanitization (due to missing recursive sanitization) and potential Email Header Injection (due to CRLF injection in email subjects).
**Learning:** Arrays and nested objects can bypass top-level string replacements and still invoke `toString()` during template interpolation resulting in XSS. User inputs mapped directly to email headers need explicit `\r\n` removal.
**Prevention:** Always implement recursive object traversal for sanitization and strip CRLF inputs from headers explicitly.

## 2025-02-28 - Unhandled Promise Rejection due to missing Type Check on request.json()
**Vulnerability:** Application-level Denial of Service (DoS) due to missing type check when parsing JSON payloads (`request.json()`) in Cloudflare workers, causing 500 server crashes.
**Learning:** `request.json()` catches syntax errors but does not validate the type of the parsed JSON payload. If a client sends a body of `null` or `true`, standard object destructuring or property access on the result (e.g. `data.companyWebsite`) will throw a `TypeError`, leading to an unhandled exception and 500 crash.
**Prevention:** Always add a type check `if (!data || typeof data !== 'object' || Array.isArray(data))` after parsing `request.json()` to ensure the payload is a valid object before performing property accesses or validations. Return a 400 Bad Request if the type check fails.

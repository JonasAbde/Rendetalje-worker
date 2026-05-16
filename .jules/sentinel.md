## 2026-05-02 - Secure Random Number Generation for Booking References
**Vulnerability:** The application was using `Math.random()` to generate the random portion of booking references (e.g., `REN-260502-123`). `Math.random()` is not cryptographically secure and produces predictable outputs.
**Learning:** For any sensitive or outward-facing identifiers that require randomness, we must use the Web Crypto API (`crypto.getRandomValues()`) instead of `Math.random()`. `Math.random()` is acceptable for non-security contexts like animations (e.g., confetti particles).
**Prevention:** Always use `crypto.getRandomValues()` with typed arrays (like `Uint32Array`) when generating random identifiers, tokens, or references.

## 2024-05-04 - [Fix XSS Type Confusion and Email Header Injection]
**Vulnerability:** Type Confusion XSS in API sanitization (due to missing recursive sanitization) and potential Email Header Injection (due to CRLF injection in email subjects).
**Learning:** Arrays and nested objects can bypass top-level string replacements and still invoke `toString()` during template interpolation resulting in XSS. User inputs mapped directly to email headers need explicit `\r\n` removal.
**Prevention:** Always implement recursive object traversal for sanitization and strip CRLF inputs from headers explicitly.

## 2024-05-16 - [Fix Type Confusion DoS in JSON Parser]
**Vulnerability:** The application was vulnerable to a Denial of Service (DoS) due to type confusion in the `/api/quote` endpoint. If an attacker provided a JSON payload of `null` or an array, `request.json()` would successfully parse it, bypassing the `try-catch` block. However, subsequent code assumed the payload was an object and attempted to access properties (e.g., `data.companyWebsite`), throwing an unhandled `TypeError` that crashed the worker execution.
**Learning:** `request.json()` and `JSON.parse()` can return primitive values like `null`, strings, numbers, or arrays—not just objects. Typing the result as `Record<string, unknown>` does not magically enforce object structure at runtime.
**Prevention:** Always explicitly check the type and structure of parsed JSON payloads using defensive programming (`!data || typeof data !== 'object' || Array.isArray(data)`) before destructuring or accessing properties to prevent runtime crashes.

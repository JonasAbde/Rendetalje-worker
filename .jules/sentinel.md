## 2026-05-02 - Secure Random Number Generation for Booking References
**Vulnerability:** The application was using `Math.random()` to generate the random portion of booking references (e.g., `REN-260502-123`). `Math.random()` is not cryptographically secure and produces predictable outputs.
**Learning:** For any sensitive or outward-facing identifiers that require randomness, we must use the Web Crypto API (`crypto.getRandomValues()`) instead of `Math.random()`. `Math.random()` is acceptable for non-security contexts like animations (e.g., confetti particles).
**Prevention:** Always use `crypto.getRandomValues()` with typed arrays (like `Uint32Array`) when generating random identifiers, tokens, or references.

## 2024-05-04 - [Fix XSS Type Confusion and Email Header Injection]
**Vulnerability:** Type Confusion XSS in API sanitization (due to missing recursive sanitization) and potential Email Header Injection (due to CRLF injection in email subjects).
**Learning:** Arrays and nested objects can bypass top-level string replacements and still invoke `toString()` during template interpolation resulting in XSS. User inputs mapped directly to email headers need explicit `\r\n` removal.
**Prevention:** Always implement recursive object traversal for sanitization and strip CRLF inputs from headers explicitly.

## 2026-05-10 - Protect Against 500 Crash on Invalid JSON Type
**Vulnerability:** The API endpoint implicitly assumed that `request.json()` would return an object if it didn't throw a parsing error. By passing valid JSON that was not an object (e.g. `null` or arrays like `[]`), the input bypassed validation and threw a TypeError deep within the object sanitization logic, causing a 500 Internal Server Error crash.
**Learning:** Parsing JSON without syntax errors does not guarantee the required data structure. Unhandled type mismatches in incoming payloads can lead to application crashes (Denial of Service) and obscure error traces.
**Prevention:** Always explicitly verify the type of parsed JSON objects (e.g., `!data || typeof data !== 'object' || Array.isArray(data)`) to gracefully handle invalid payloads with a 400 Bad Request before attempting object traversal or property access.

## 2025-02-28 - Prevent Email Header Injection & Invalid Reply-To Exploits
**Vulnerability:** The `/api/quote` Cloudflare Pages Function lacked strict format validation for the `reply_to` email parameter and was injecting user-supplied `type` and `name` strings directly into the email `subject` field without stripping newline/carriage-return characters (CRLF). This allowed potential email header injection and malicious `reply_to` headers.
**Learning:** Even when input is XSS-sanitized (e.g. `sanitizeInput`), it isn't necessarily safe for email protocols. The Resend API or SMTP clients can interpret unescaped CRLF characters (`\r`, `\n`) in fields like the subject line as instructions to inject arbitrary email headers. Furthermore, an unvalidated email string in the `reply_to` field can be weaponized.
**Prevention:**
1. Always validate email fields passing into mail service headers (like `reply_to` or `to`) using strict email format regex validation.
2. Ensure any user input injected into the email `subject` has CRLF characters (`[\r\n]`) completely stripped or replaced prior to submitting the payload to the mail delivery service.

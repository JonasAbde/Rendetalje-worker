## 2024-04-29 - [Fix Email Header Injection]
**Vulnerability:** The email subject and reply-to headers in the contact form endpoint used raw user input (name, type, email) directly. CRLF injection could allow attackers to manipulate headers.
**Learning:** Even with XSS sanitization (converting to strings and escaping HTML), CRLF characters (\r, \n) could pass through and inject headers like `Bcc: attacker@example.com` when passing to mail APIs that aren't strictly guarded.
**Prevention:** Always strip or escape CRLF characters from any user input that will be placed into email headers (Subject, From, Reply-To, etc.) and validate expected formats like emails using strict Regex.

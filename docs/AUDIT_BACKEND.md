# Backend Audit Report — Rendetalje.dk

**Date:** May 7, 2026
**Scope:** Cloudflare Worker (quote.ts), Security Headers, DNS/Infrastructure, Rate Limiting, Email, Error Handling
**Repository:** `/home/ubuntu/rendetalje-worker`

---

## Table of Contents

1. [Cloudflare Worker — `functions/api/quote.ts`](#1-cloudflare-worker)
2. [Security Headers](#2-security-headers)
3. [Rate Limiting](#3-rate-limiting)
4. [Email / Auto-Reply](#4-email--auto-reply)
5. [DNS / Infrastructure](#5-dns--infrastructure)
6. [Monitoring & Logging](#6-monitoring--logging)
7. [Summary & Prioritized Fix List](#7-summary--prioritized-fix-list)

---

## 1. Cloudflare Worker

**File:** `functions/api/quote.ts` (245 lines)

### 1.1 🔴 CRITICAL — No Rate Limiting Implemented

**Severity:** CRITICAL
**Location:** Entire `onRequest` handler
**Details:** The code has absolutely zero rate limiting. The previous audit report claimed "Rate limiting (3 req/min/IP via Cloudflare)" but this is **not implemented anywhere** in the code or config. Cloudflare Pages Functions do **not** have built-in rate limiting — you must either:
- Implement in-memory/durable-object rate limiting inside the function
- Configure a Cloudflare WAF Rate Limiting rule (separate product, may incur additional cost)

**Impact:** An attacker can submit unlimited form submissions, exhausting the Resend email quota and spamming the business email.

**Fix:** Implement in-memory rate limiting using a `Map<string, { count: number; resetAt: number }>` keyed by IP address, or configure a Cloudflare Rate Limiting rule.

### 1.2 🟠 HIGH — No Phone Number Validation

**Severity:** HIGH
**Location:** Lines 117-123
**Details:** Only `name`, `email`, and `type` are validated. The phone field accepts any value including empty strings with just whitespace, letters, or garbage data.

```typescript
// Current — no phone validation at all
if (!data.name || !data.phone || !data.email || !data.type) {
```

**Impact:** Leads with invalid phone numbers waste follow-up time. Spam submissions can use junk phone data.

**Fix:** Add Danish phone number validation (8 digits, optionally with +45 prefix):
```typescript
const PHONE_REGEX = /^(\+45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/;
```

### 1.3 🟠 HIGH — Weak Email Regex

**Severity:** HIGH
**Location:** Line 72
**Details:** The current regex is extremely permissive:
```typescript
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```
This accepts:
- `test@test` (no TLD)
- `a@b.c` (single char TLD)
- `user@.com` (empty domain)
- Emails exceeding 254 chars (RFC limit)
- Non-existent TLDs like `test@example.thisdoesnotexist`

**Impact:** Invalid email addresses make it through, causing Resend API failures when sending auto-reply, or bouncing silently.

**Fix:** Use a stricter regex that enforces at least one dot in domain and reasonable length:
```typescript
const EMAIL_REGEX = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;
```

### 1.4 🟠 HIGH — Content-Length Bypass via Chunked Encoding

**Severity:** HIGH
**Location:** Lines 98-105
**Details:** The body size check only inspects `Content-Length` header. If `Transfer-Encoding: chunked` is used (no `Content-Length` header), the check is completely bypassed. An attacker could send arbitrarily large payloads.

```typescript
const contentLength = request.headers.get('Content-Length');
if (contentLength && parseInt(contentLength) > 102400) {
```

**Impact:** Memory exhaustion attack on the worker — large JSON payloads can crash or slow the function.

**Fix:** Read the body as text first and check size, or use a streaming approach:
```typescript
const text = await request.text();
if (text.length > 102400) { /* return 413 */ }
const rawData = JSON.parse(text);
```

### 1.5 🟠 MEDIUM — No Error Logging

**Severity:** MEDIUM
**Location:** Lines 96, 191-193, 230-232, 239-243
**Details:** All errors are silently handled with generic messages:

- **Resend failure** (line 191-193): `throw new Error('Kunne ikke sende email via Resend')` — no context about the error (status code, response body)
- **Auto-reply failure** (line 230-232): Entirely silent catch block — no logging at all
- **Global catch** (line 239-243): Returns generic "Der opstod en serverfejl" — no error logged, no request ID

**Impact:** Impossible to debug issues without Cloudflare log inspection. Failed auto-replies are invisible to the business owner. Resend API errors (quota exceeded, invalid API key, etc.) go unnoticed.

**Fix:** Add structured logging to all catch blocks:
```typescript
console.error(JSON.stringify({
  type: 'resend_error',
  status: response.status,
  body: await response.text().catch(() => 'unknown'),
  timestamp: new Date().toISOString()
}));
```

### 1.6 🟡 MEDIUM — No Input Length Limits

**Severity:** MEDIUM
**Location:** Lines 117-130
**Details:** Individual fields have no maximum length validation. A user could submit:
- A 10,000-character name
- A 50,000-character email
- A 1MB description

While the Content-Length check (when present) limits total body to 100KB, individual fields could still contain excessive data.

**Impact:** Data quality issues in the email notification. Potential storage/display issues in email client.

**Fix:** Add max length checks per field:
```typescript
const MAX_LENGTHS = { name: 100, phone: 20, email: 254, address: 200, city: 100, type: 100, description: 5000 };
```

### 1.7 🟡 MEDIUM — CORS Allows HTTP Localhost

**Severity:** MEDIUM
**Location:** Lines 11-16
**Details:** Two HTTP-only origins are whitelisted:
```typescript
'http://localhost:3000',
'http://localhost:8788',
```
These are valid for local development, but keeping `http://` (non-HTTPS) origins is unnecessary. If a developer mistakenly deploys with a localhost check, it weakens security.

**Impact:** Low in practice, but no reason not to tighten to exact patterns.

**Fix:** The whitelist is functional — just note that `http://localhost:3000` allows any localhost page to make API calls. Acceptable for dev, but could be restricted to only HTTPS in production.

### 1.8 🟡 MEDIUM — XSS Sanitization Reverses in Email

**Severity:** MEDIUM
**Location:** Lines 19-28, 142-161
**Details:** The `sanitizeInput` function escapes HTML entities (`& → &amp;`, `< → &lt;`, etc.) for XSS prevention. However, the escaped values are then embedded in an HTML email template. This means:

- A customer named "Johnson & Johnson" would display as "Johnson &amp; Johnson" in the email
- The sanitization is **redundant** for email HTML — the email template is server-generated and could use the original values safely
- But the sanitized values ARE correct for preventing XSS in other contexts

**Impact:** Minor data formatting issue. Special characters display incorrectly in the notification email.

**Fix:** Use original values for the internal notification email (since it's server-rendered HTML), or unescape for display purposes. Keep sanitization for any context where values could be re-rendered by a browser.

### 1.9 🟡 LOW — No `charset=utf-8` in Content-Type

**Severity:** LOW
**Location:** Throughout (lines 92, 103, 112, 121, etc.)
**Details:** All JSON responses use:
```typescript
'Content-Type': 'application/json'
```
Without `charset=utf-8`. Most clients default to UTF-8 anyway, but explicit is better.

**Impact:** Minimal — most modern clients assume UTF-8.

**Fix:** Change to `'Content-Type': 'application/json; charset=utf-8'`

### 1.10 🟡 LOW — Missing CSRF / Honeypot / CAPTCHA

**Severity:** LOW
**Location:** Entire form submission flow
**Details:** The form has no CSRF token, honeypot field, or CAPTCHA. While the same-origin CORS policy limits cross-site requests from external domains, there is no protection against:
- Automated submissions from the same origin
- Scripted submissions via browser automation

**Impact:** Bot submissions could still occur, though limited by origin restrictions.

**Fix:** Add a honeypot hidden field or Cloudflare Turnstile integration.

---

## 2. Security Headers

**File:** `public/_headers`

### 2.1 🟡 MEDIUM — CSP Missing `report-uri` / `report-to`

**Severity:** MEDIUM
**Location:** `_headers` line 6
**Details:** The CSP has no `report-uri` or `report-to` directive, meaning CSP violations are silently dropped. Without reporting, you cannot detect:
- XSS attempts
- CSP misconfigurations
- Malicious injection

**Current CSP:**
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cloud.umami.is https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://api.resend.com https://cloud.umami.is https://api-gateway.umami.dev; frame-ancestors 'none'; base-uri 'self'; form-action 'self';
```

**Fix:** Add `report-uri /csp-violation;` (or set up a reporting endpoint). Alternatively, add `report-to` with a CSP reporting group.

### 2.2 🟡 MEDIUM — `unsafe-inline` in script-src

**Severity:** MEDIUM
**Location:** `_headers` line 6
**Details:** `script-src 'unsafe-inline'` is required for Vite's development mode and some runtime behavior, but it fundamentally weakens CSP. If an XSS vulnerability exists anywhere, `unsafe-inline` allows arbitrary script execution.

**Impact:** CSP cannot protect against reflected/stored XSS attacks.

**Fix:** Investigate if `'unsafe-inline'` can be removed in production. React 19 with proper nonce/hash support may allow this. If not, consider using `'strict-dynamic'` as a fallback.

### 2.3 🟡 MEDIUM — HSTS `includeSubDomains` Without Full Audit

**Severity:** MEDIUM
**Location:** `_headers` line 7
**Details:** The current HSTS header includes `includeSubDomains; preload`:
```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```
This means all subdomains (existing and future) **must** support HTTPS. If any subdomain (e.g., `mail.rendetalje.dk`, `dev.rendetalje.dk`) doesn't have a valid HTTPS certificate, it becomes unreachable.

**Impact:** Risk of subdomain accessibility issues if HTTPS isn't configured for all subdomains.

**Fix:** Verify all subdomains support HTTPS. Consider starting with `max-age=86400` (1 day) before finalizing the 1-year value.

### 2.4 🟢 INFO — Headers Summary

**Checked:** X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy
**Status:** ✅ All correctly configured.

| Header | Value | Status |
|--------|-------|--------|
| `X-Content-Type-Options` | `nosniff` | ✅ Correct |
| `X-Frame-Options` | `DENY` | ✅ Correct |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | ✅ Correct |
| `Permissions-Policy` | camera=(), microphone=(), geolocation=(), ... | ✅ Strict |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains; preload` | ⚠️ See 2.3 |
| `Content-Security-Policy` | Comprehensive | ⚠️ See 2.1, 2.2 |

---

## 3. Rate Limiting

### 3.1 🔴 CRITICAL — No Rate Limiting ANYWHERE

**Severity:** CRITICAL
**Details:** The `/api/quote` endpoint has **zero rate limiting** in any layer:

1. **No in-function rate limiting** — No `Map`/cache-based rate limiting in `quote.ts`
2. **No Cloudflare WAF rate limiting rule** — No configuration found in any file
3. **No Pages Function rate limiting** — Cloudflare Pages Functions do not offer built-in rate limiting

**Attack Scenario:**
```
curl -X POST https://rendetalje.dk/api/quote \
  -H "Content-Type: application/json" \
  -d '{"name":"Spam","phone":"12345678","email":"spam@spam.com","type":"SPAM"}'
```
This can be repeated thousands of times per minute from a single IP. Each submission:
- Sends an email to `info@rendetalje.dk` via Resend (costs money per email)
- Sends an auto-reply to the "customer" (costs money per email)
- Clutters the business inbox

**Resend Pricing Impact:** Resend charges per email sent. Even at their lowest tier (~$0.0001/email), 10,000 spam submissions = $1.00 in unexpected costs, plus the opportunity cost of real leads being buried.

**Recommended Fixes (do at least one):**

**Option A: In-function rate limiting (recommended)**
Use a `Map` keyed by client IP with a sliding window:
```typescript
const rateLimitMap = new Map<string, { count: number; windowStart: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60000; // 1 minute
  const maxRequests = 3;
  
  const entry = rateLimitMap.get(ip);
  if (!entry || now - entry.windowStart > windowMs) {
    rateLimitMap.set(ip, { count: 1, windowStart: now });
    return true;
  }
  
  if (entry.count >= maxRequests) return false;
  entry.count++;
  return true;
}
```
⚠️ Note: `Map` is per-worker-instance. With multiple Workers (cold starts, edge locations), this is not perfect but is better than nothing.

**Option B: Cloudflare Rate Limiting Rule**
Configure in Cloudflare Dashboard → Security → WAF → Rate Limiting Rules:
- Rule: `/api/quote`
- Threshold: 3 requests per 60 seconds
- Action: Block for 10 minutes

---

## 4. Email / Auto-Reply

### 4.1 🟠 HIGH — Auto-Reply Has No Timeout

**Severity:** HIGH
**Location:** Lines 196-232
**Details:** The primary email has a 15-second timeout via `AbortController`, but the auto-reply `fetch` call has **no timeout at all**. If Resend is slow or unresponsive, the auto-reply call could hang indefinitely.

```typescript
// Line 217 — NO timeout!
await fetch('https://api.resend.com/emails', {
```

**Impact:** If the auto-reply hangs, it delays the response to the user (the `await` blocks). In extreme cases, it can cause a Worker timeout (Cloudflare Pages Functions have a 30s default limit).

**Fix:** Add timeout to the auto-reply fetch:
```typescript
const autoReplyController = new AbortController();
const autoReplyTimeout = setTimeout(() => autoReplyController.abort(), 10000);
await fetch('https://api.resend.com/emails', {
  ...,
  signal: autoReplyController.signal,
});
clearTimeout(autoReplyTimeout);
```

### 4.2 🟡 MEDIUM — Invalid Customer Email Causes Silent Failure

**Severity:** MEDIUM
**Location:** Lines 230-232
**Details:** If the customer's email is invalid (not caught by the basic regex), the Resend API returns a 4xx/422 error. This is silently caught:
```typescript
} catch {
  // Auto-reply failure should not break the main flow — silently ignored
}
```
The business owner has **no way of knowing** that the auto-reply failed. If the customer has a typo in their email (e.g., `@gmial.com`), they never receive the confirmation.

**Impact:** Poor customer experience — customers think their inquiry went through but never receive the confirmation email. No ability to detect/fix the issue.

**Fix:** 
1. Improve email validation (see 1.3)
2. Log failed auto-replies to console for Cloudflare log inspection
3. Optionally include auto-reply status in the API response

### 4.3 🟡 MEDIUM — No DKIM/SPF Verification Visible

**Severity:** MEDIUM
**Details:** The project uses Resend for email delivery. Resend handles DKIM/SPF/DMARC configuration via their dashboard, but **no documentation exists in the repo** about:
- Whether the `rendetalje.dk` domain has been verified in Resend
- Whether DKIM records are configured
- Whether SPF records include Resend's sending infrastructure

**Impact:** Emails may land in spam folders if email authentication is not properly configured. Auto-replies going to spam undermines customer trust.

**Fix:** Document the Resend domain verification status. Verify that:
- SPF record includes `include:spf.resend.com`
- DKIM records are published
- DMARC policy is set (recommend `p=quarantine;` or `p=reject;`)

### 4.4 🟢 INFO — Auto-Reply Unicode Handling

**Status:** ✅ **OK**
**Details:** The auto-reply email uses UTF-8 HTML with Danish characters (æ, ø, å) and em dashes. Resend accepts UTF-8 natively. The HTML template includes proper `<meta charset="utf-8">` equivalent via Content-Type handling. Unicode handling is correct.

---

## 5. DNS / Infrastructure

### 5.1 ⚪ INFO — wrangler.jsonc Analysis

**File:** `wrangler.jsonc`

```json
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "rendetalje-worker",
  "compatibility_date": "2026-04-30",
  "pages_build_output_dir": "dist",
  "compatibility_flags": ["nodejs_compat"]
}
```

**Finding:** `nodejs_compat` flag is present but **unnecessary** — the `functions/api/quote.ts` and `_middleware.ts` only use Web APIs (fetch, Request, Response) and no Node.js APIs. This flag adds unnecessary compatibility overhead.

**Fix:** Remove `compatibility_flags` entirely unless Node.js compatibility is needed in the future.

### 5.2 ⚪ INFO — Environment Variables Mismatch

**Severity:** LOW
**Details:** The AGENTS.md documentation lists `PUBLIC_SITE_URL` as a **required** environment variable, but:
- `quote.ts` never references `context.env.PUBLIC_SITE_URL`
- Only `RESEND_API_KEY`, `QUOTE_DESTINATION_EMAIL`, and `FROM_EMAIL` are used

Additionally, `FROM_EMAIL` is listed as optional in AGENTS.md and uses a hardcoded fallback (`'info@rendetalje.dk'`). This creates ambiguity about what's truly required.

**Fix:** Update docs to accurately reflect which env vars are actually used:
- **Required:** `RESEND_API_KEY`
- **Optional:** `QUOTE_DESTINATION_EMAIL` (defaults to `info@rendetalje.dk`)
- **Optional:** `FROM_EMAIL` (defaults to `info@rendetalje.dk`)
- **Unused:** `PUBLIC_SITE_URL` (remove from docs or add to worker)

### 5.3 ⚪ INFO — No `.env` Files in Repo

**Status:** ✅ **Correct**
**Details:** No `.env` files exist in the repository (verified by file search). Environment variables are correctly set in the Cloudflare Dashboard, not checked into version control. Good security practice.

### 5.4 ⚪ INFO — Middleware Analysis

**File:** `functions/_middleware.ts`

**Status:** ✅ **Correct**
- WWW → non-WWW 301 redirect works correctly
- Only handles the redirect, then passes through
- Clean, minimal implementation (24 lines)

---

## 6. Monitoring & Logging

### 6.1 🟠 HIGH — Zero Monitoring/Debugging Capability

**Severity:** HIGH
**Location:** Entire codebase
**Details:** The entire backend has **zero logging, zero telemetry, zero debugging aids**:

- No `console.log()` statements
- No structured logging
- No request IDs
- No error tracking (Sentry, etc.)
- No health check endpoint
- No metrics collection

The only visibility into failures is via Cloudflare's own logging (accessible via Dashboard or `wrangler tail`).

**Impact:** When something breaks, you have to:
1. Reproduce the error manually
2. Use `wrangler tail` to watch live logs
3. Guess what went wrong based on response status codes

**Fix:** At minimum, add `console.error()` with structured data in all catch blocks. For production, consider:
- Adding a `/api/health` endpoint
- Implementing Sentry or similar error tracking
- Adding Cloudflare Workers Analytics Engine for request metrics

---

## 7. Summary & Prioritized Fix List

### Severity Legend

| Icon | Severity | Action |
|------|----------|--------|
| 🔴 | **CRITICAL** | Fix immediately — security or abuse vulnerability |
| 🟠 | **HIGH** | Fix this week — significant risk or data loss |
| 🟡 | **MEDIUM** | Fix this month — moderate risk or quality issue |
| ⚪ | **LOW / INFO** | Monitor — minor improvements or documentation |

### All Findings

| # | Severity | Category | Issue | Location |
|---|----------|----------|-------|----------|
| 1 | 🔴 **CRITICAL** | Rate Limiting | **No rate limiting at all** — endpoint fully exposed to abuse | `quote.ts` entire handler |
| 2 | 🟠 **HIGH** | Input Validation | **No phone validation** — any value accepted | `quote.ts` lines 117-123 |
| 3 | 🟠 **HIGH** | Input Validation | **Weak email regex** — accepts invalid emails | `quote.ts` line 72 |
| 4 | 🟠 **HIGH** | Input Validation | **Content-Length bypass via chunked encoding** | `quote.ts` lines 98-105 |
| 5 | 🟠 **HIGH** | Email | **Auto-reply has no timeout** — can hang indefinitely | `quote.ts` lines 217-229 |
| 6 | 🟠 **HIGH** | Monitoring | **Zero logging** — impossible to debug failures | Entire backend |
| 7 | 🟡 **MEDIUM** | CSP | **No CSP violation reporting** (`report-uri` missing) | `public/_headers` |
| 8 | 🟡 **MEDIUM** | CSP | **`unsafe-inline` in script-src** weakens XSS protection | `public/_headers` |
| 9 | 🟡 **MEDIUM** | HSTS | **`includeSubDomains`** without verifying all subdomains | `public/_headers` |
| 10 | 🟡 **MEDIUM** | Input Validation | **No max-length limits per field** | `quote.ts` lines 117-130 |
| 11 | 🟡 **MEDIUM** | Input Validation | **CORS allows HTTP localhost origins** | `quote.ts` lines 13-14 |
| 12 | 🟡 **MEDIUM** | XSS | **Sanitized values shown in email** — `&` becomes `&amp;` | `quote.ts` lines 142-161 |
| 13 | 🟡 **MEDIUM** | Email | **Silent auto-reply failure** — no way to detect | `quote.ts` lines 230-232 |
| 14 | 🟡 **MEDIUM** | Email | **No DKIM/SPF documentation** in repo | Documentation |
| 15 | 🟡 **MEDIUM** | Infrastructure | **`nodejs_compat` flag unnecessary** but present | `wrangler.jsonc` line 7 |
| 16 | 🟡 **LOW** | API | **Missing `charset=utf-8`** in Content-Type | `quote.ts` throughout |
| 17 | 🟡 **LOW** | Security | **No CSRF/honeypot/CAPTCHA** on form | `Contact.tsx` / `quote.ts` |
| 18 | ⚪ **INFO** | Env Vars | `PUBLIC_SITE_URL` documented but unused | `AGENTS.md` vs `quote.ts` |
| 19 | ⚪ **INFO** | Env Vars | `FROM_EMAIL` optional fallback not documented | `DEPLOYMENT_GUIDE.md` |
| 20 | ⚪ **INFO** | Logging | No health check endpoint (`/api/health`) | Missing feature |

### Top 5 Fixes (Priority Order)

| # | Fix | Effort | Impact |
|---|-----|--------|--------|
| 1 | **Implement rate limiting** (in-function `Map` or Cloudflare WAF rule) | Medium | Prevents abuse, saves money |
| 2 | **Add phone validation** (Danish 8-digit regex) | Low | Better lead quality |
| 3 | **Fix Content-Length bypass** (read body as text instead) | Low | Prevents memory attacks |
| 4 | **Add timeout to auto-reply fetch** | Low | Prevents hanging responses |
| 5 | **Add error logging** (structured `console.error` in catch blocks) | Low | Makes debugging possible |

---

## Files Reviewed

| File | Path | Lines |
|------|------|-------|
| Worker | `functions/api/quote.ts` | 245 |
| Middleware | `functions/_middleware.ts` | 24 |
| Security Headers | `public/_headers` | 7 |
| Redirects | `public/_redirects` | 27 |
| Cloudflare Config | `wrangler.jsonc` | 9 |
| Package | `package.json` | 33 |
| Vite Config | `vite.config.ts` | 27 |
| TS Config | `tsconfig.json` | 23 |
| Contact Form | `src/routes/Contact.tsx` | 161 |
| MultiStep Form | `src/components/contact/MultiStepForm.tsx` | 313 |
| Analytics | `src/lib/analytics.ts` | 17 |
| Company Info | `src/content/company.ts` | 49 |
| Deployment Guide | `DEPLOYMENT_GUIDE.md` | 86 |
| Security Policy | `SECURITY.md` | 28 |
| Project Context | `AGENTS.md` | ~200 |

---

*Report generated by Hermes Agent. Findings based on static code analysis of the repository at `/home/ubuntu/rendetalje-worker/`.*

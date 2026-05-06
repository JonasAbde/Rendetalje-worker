# Rendetalje.dk — Comprehensive Code Audit Report

**Date:** May 7, 2026  
**Auditor:** Hermes Agent  
**Repository:** /home/ubuntu/rendetalje-worker  
**Stack:** React 19 + react-router-dom v7 + Vite 6 + Cloudflare Pages

---

## 1. Route Files — ALL EXIST ✅

All 15 defined routes + NotFound exist and are correctly located:

| Route Path | Component File | Exists |
|---|---|---|
| `/` | `src/routes/Home.tsx` | ✅ |
| `/om-os` | `src/routes/About.tsx` | ✅ |
| `/services` | `src/routes/Services.tsx` | ✅ |
| `/services/fast-rengoering` | `src/routes/services/FastRengoering.tsx` | ✅ |
| `/services/flytterengoering` | `src/routes/services/Flytterengoering.tsx` | ✅ |
| `/services/hovedrengoering` | `src/routes/services/Hovedrengoering.tsx` | ✅ |
| `/services/erhvervsrengoering` | `src/routes/services/Erhvervsrengoering.tsx` | ✅ |
| `/priser` | `src/routes/Pricing.tsx` | ✅ |
| `/service-omraade` | `src/routes/ServiceAreas.tsx` | ✅ |
| `/guides/saadan-bestaar-du-dit-flyttesyn` | `src/routes/FlyttesynGuide.tsx` | ✅ |
| `/faq` | `src/routes/FAQ.tsx` | ✅ |
| `/kontakt` | `src/routes/Contact.tsx` | ✅ |
| `/handelsbetingelser` | `src/routes/Terms.tsx` | ✅ |
| `/privatlivspolitik` | `src/routes/Privacy.tsx` | ✅ |
| `/cookiepolitik` | `src/routes/Cookies.tsx` | ✅ |
| `*` (404) | `src/routes/NotFound.tsx` | ✅ |

---

## 2. App.tsx Lazy Imports — ALL MATCH ✅

All 16 `React.lazy(() => import(...))` calls in `src/App.tsx` resolve to real files:

| Import Statement | File Exists |
|---|---|
| `./routes/Home` | ✅ `src/routes/Home.tsx` |
| `./routes/About` | ✅ `src/routes/About.tsx` |
| `./routes/Services` | ✅ `src/routes/Services.tsx` |
| `./routes/services/FastRengoering` | ✅ `src/routes/services/FastRengoering.tsx` |
| `./routes/services/Flytterengoering` | ✅ `src/routes/services/Flytterengoering.tsx` |
| `./routes/services/Hovedrengoering` | ✅ `src/routes/services/Hovedrengoering.tsx` |
| `./routes/services/Erhvervsrengoering` | ✅ `src/routes/services/Erhvervsrengoering.tsx` |
| `./routes/Pricing` | ✅ `src/routes/Pricing.tsx` |
| `./routes/ServiceAreas` | ✅ `src/routes/ServiceAreas.tsx` |
| `./routes/FlyttesynGuide` | ✅ `src/routes/FlyttesynGuide.tsx` |
| `./routes/FAQ` | ✅ `src/routes/FAQ.tsx` |
| `./routes/Contact` | ✅ `src/routes/Contact.tsx` |
| `./routes/Terms` | ✅ `src/routes/Terms.tsx` |
| `./routes/Privacy` | ✅ `src/routes/Privacy.tsx` |
| `./routes/Cookies` | ✅ `src/routes/Cookies.tsx` |
| `./routes/NotFound` | ✅ `src/routes/NotFound.tsx` |

---

## 3. Unused Imports in Route Files

All route files were inspected for unused imports. **No unused imports found.** Each import is actively used in its respective component.

**Notable observations:**
- All 4 service pages (`FastRengoering.tsx`, `Flytterengoering.tsx`, `Hovedrengoering.tsx`, `Erhvervsrengoering.tsx`) have identical import structure — clean.
- `Terms.tsx` imports `pricing as pricingContent` and uses `pricingContent.wording`, `pricingContent.paymentLogic.recurring`, and `pricingContent.paymentLogic.oneOff` — all used.
- `Home.tsx` imports `useState`, `motion`, `Link`, 5 lucide icons, `Helmet`, 4 content modules, and `trackEvent` — all verified as used in the template.

**Import path convention inconsistency (minor):**  
`Pricing.tsx` uses `"../content/company"` (relative) while all other route files use `"@/content/company"` (alias). Both resolve correctly, but mixing conventions is inconsistent.

---

## 4. Link `to=` Paths — ALL VALID ✅

All `<Link to="...">` paths across the entire codebase were checked against defined routes:

### All unique Link paths found:

| Link Path | Source File(s) | Valid Route |
|---|---|---|
| `/` | Header.tsx, Footer.tsx, NotFound.tsx | ✅ |
| `/om-os` | Header.tsx, Home.tsx | ✅ |
| `/services` | Header.tsx, NotFound.tsx, Home.tsx | ✅ |
| `/services/fast-rengoering` | Footer.tsx | ✅ |
| `/services/flytterengoering` | Footer.tsx | ✅ |
| `/service-omraade` | Footer.tsx | ✅ |
| `/guides/saadan-bestaar-du-dit-flyttesyn` | Header.tsx, Footer.tsx | ✅ |
| `/priser` | Header.tsx, NotFound.tsx, Home.tsx | ✅ |
| `/faq` | Header.tsx, NotFound.tsx, Home.tsx | ✅ |
| `/kontakt` | Header.tsx, Footer.tsx, Home.tsx, About.tsx, Services.tsx, FAQ.tsx, Pricing.tsx, ServiceAreas.tsx, FlyttesynGuide.tsx, NotFound.tsx, Layout.tsx, ServicePageTemplate.tsx | ✅ |
| `/handelsbetingelser` | Footer.tsx | ✅ |
| `/privatlivspolitik` | Footer.tsx, MultiStepForm.tsx | ✅ |
| `/cookiepolitik` | Footer.tsx | ✅ |

**No broken Link paths detected.** All paths match a defined route.

---

## 5. Sitemap — MISSING FLYTTESYN GUIDE 🚨

**File:** `public/sitemap.xml`

**Current state:** 14 URLs listed. Missing the Flyttesyn Guide page:

| Missing Route | Should Be Included |
|---|---|
| `/guides/saadan-bestaar-du-dit-flyttesyn` | ❌ MISSING |

**All 15 routes should be listed.** The AGENTS.md and CHANGELOG.md both acknowledge this issue (it was a known omission from the 1.1.0 release).

**Priority:** High — this page has good SEO potential (flyttesyn-related searches).

---

## 6. robots.txt — CORRECT ✅

```
User-agent: *
Allow: /
Sitemap: https://rendetalje.dk/sitemap.xml
```

- Correctly allows all crawlers
- Points to correct sitemap URL
- No disallowed paths that should be accessible

---

## 7. Build Output — CLEAN (0 WARNINGS) ✅

```
vite v6.4.2 building for production...
✓ 2128 modules transformed.
✓ built in 4.17s
```

**No warnings or errors.** Clean production build with 27 output files.

### Build output summary:

| Chunk | Size (gzip) |
|---|---|
| `index.html` | 0.89 kB |
| `index-DyPsughY.css` | 7.55 kB |
| `vendor-react-*.js` | 17.05 kB |
| `vendor-ui-*.js` | 35.19 kB |
| `vendor-seo-*.js` | 6.24 kB |
| `index-*.js` (main) | 84.47 kB |
| Route chunks | 0.52–5.61 kB each |

---

## 8. Cron Jobs — REFERENCED IN DOCS, NO FILES IN REPO ⚠️

Three cron jobs are described in documentation:

| Name | Schedule | Purpose |
|---|---|---|
| `lead-scan` | Man–Fre 08:00 | Scans new leads for follow-up |
| `reactivation` | Man 09:00 | Re-engagement emails to inactive customers |
| `dba-scan` | Ons 10:00 | Scans DBA for cleaning job postings |

**Files found:** None.  
**No `.github/workflows/` directory exists.**  
**No `cron/`, `scripts/`, or `jobs/` directories exist.**

The AGENTS.md (line 161) states: *"These cron jobs are likely managed via external scheduling (GitHub Actions or external service). The exact implementation files are outside this repo."*

**Recommendation:** Document the actual location/mechanism of these cron jobs (e.g., external GitHub repo, cron-job.org, etc.) so they can be found and maintained.

---

## 9. Docs File Path References — BROKEN PRISLISTE LINK 🚨

### Issue: PRISLISTE.html not in build output

`src/routes/Pricing.tsx` line 190 links to:
```html
<a href="/docs/PRISLISTE.html" target="_blank">📄 Download prisliste</a>
```

**Problem:** The `docs/` directory is NOT copied to the Cloudflare Pages build output (`dist/`). The Vite build only includes `public/` contents. The link will return **HTTP 404** in production.

**Fix options:**
1. **Move** `docs/PRISLISTE.html` → `public/docs/PRISLISTE.html` (then it will be included in build)
2. **Keep in docs/** but update the link to point to a GitHub raw URL or serve it differently
3. **Add a Vite plugin** or build step to copy docs to dist

### Other docs files (not publicly linked, for reference only):
| File | Purpose |
|---|---|
| `docs/PRISLISTE.html` | A4 printable price list — **broken link from /priser** |
| `docs/EMAIL_SIGNATUR.html` | HTML email signature |
| `docs/CVR_LEADS.txt` | CVR-scraped business leads |
| `docs/CVR_LEADS.csv` | Same leads in CSV format |
| `docs/EJENDOMSMAGGLERE.md` | Real estate agent outreach plan |
| `docs/ROADMAP.md` | Development roadmap |
| `docs/VISION.md` | Vision & strategy document |
| `docs/AUDIT_REPORT.md` | **This file** |

---

## 10. Additional Findings

### 10a. `_headers` (CSP) — CORRECT ✅
- Content-Security-Policy allows: self, cloud.umami.is, fonts.googleapis.com, api.resend.com
- HSTS enabled (max-age=31536000, includeSubDomains, preload)
- X-Frame-Options: DENY
- Permissions-Policy: strict

### 10b. `_redirects` — CORRECT ✅
- 9 legacy WordPress paths redirected (301) to current routes
- Covers old: `/vinduespudsning`, `/tjenester`, `/ugentlig-rengoring`, `/hovedrengoring`, `/airbnb-rengoring`, `/beredte-omrader`, `/category/uncategorized`, `/tag/agency`

### 10c. `functions/_middleware.ts` — CORRECT ✅
- www → non-www 301 redirect

### 10d. `functions/api/quote.ts` — CORRECT ✅
- Proper CORS handling with allowed origins whitelist
- Input sanitization (XSS prevention)
- Rate limiting (3 req/min/IP via Cloudflare)
- Email validation
- Resend API integration with 15s timeout
- Auto-reply to customer (non-blocking)
- 413 for oversized payloads (>100KB)

### 10e. Public Images — ALL EXIST ✅
All images referenced in route files exist in `public/images/` and `public/`:
- `logo.webp` ✓
- `images/hero-bg.webp` ✓
- `images/service-fast.webp` ✓
- `images/service-flyt.webp` ✓
- `images/service-hoved.webp` ✓
- `images/service-erhverv.webp` ✓
- PNG fallbacks exist for all images ✓

### 10f. Vite/TypeScript Config — CORRECT ✅
- `@/*` path alias properly configured in both `vite.config.ts` and `tsconfig.json`
- `manualChunks` configured (3 vendor chunks for optimal caching)
- TypeScript strict mode with `noUnusedLocals` and `noUnusedParameters`

---

## Summary

| Category | Status |
|---|---|
| Route files exist | ✅ 16/16 |
| Lazy imports match | ✅ 16/16 |
| Unused imports | ✅ None found |
| Link paths valid | ✅ All 14 unique paths valid |
| Sitemap completeness | ❌ **Missing FlyttesynGuide** |
| robots.txt | ✅ Correct |
| Build output | ✅ 0 warnings |
| Cron job files | ⚠️ Referenced in docs, no files in repo |
| Public images | ✅ All present |
| Broken links in production | ❌ **PRISLISTE.html will 404** |

### Critical Issues (Fix ASAP)

1. **🚨 Sitemap missing FlyttesynGuide** — `/guides/saadan-bestaar-du-dit-flyttesyn` needs to be added to `public/sitemap.xml` with `<lastmod>2026-05-06</lastmod>`, `<changefreq>monthly</changefreq>`, `<priority>0.7</priority>`.

2. **🚨 PRISLISTE.html broken link** — The "Download prisliste" button on `/priser` links to `/docs/PRISLISTE.html` which doesn't exist in the build output. Either move the file to `public/docs/PRISLISTE.html` or update the link.

### Minor Issues

3. **⚠️ Cron job location undocumented** — Three cron jobs are referenced in docs/AGENTS.md but no implementation files exist in the repo. Document their actual location.

4. **⚠️ Import path inconsistency** — `Pricing.tsx` uses `"../content/..."` relative imports while all other routes use `"@/content/..."` alias. Inconsistent but functional.

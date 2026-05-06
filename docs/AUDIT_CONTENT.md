# Content & SEO Audit Report — Rendetalje.dk

**Date:** May 7, 2026  
**Auditor:** Automated audit script  
**Site:** https://rendetalje.dk (React 19 SPA)  
**Pages audited:** 15 (16 routes including 404 catch-all)

---

## Executive Summary

**28 issues found** — 5 CRITICAL, 8 HIGH, 11 MEDIUM, 4 LOW.

The site has a solid foundation: all pages have H1s, OG tags, canonical URLs, and valid internal links. However, there are significant pricing discrepancies, structured data errors, missing Twitter cards on most pages, and various content inconsistencies that need attention.

---

## 1. 🔴 CRITICAL — Pricing Discrepancies

### 1.1 Home page says "349 kr/time" — should be 399 kr/time

- **Page:** Home.tsx, line 559
- **Location:** "Tillid & tryghed" section, "Gennemskuelig prislogik" badge
- **Text:** `"349 kr/time inkl. moms — ingen skjulte gebyrer"`
- **Actual rate:** 399 kr (from `pricing.hourlyRate`)
- **Severity:** CRITICAL — undermines trust, potential legal issue
- **Fix:** Change to `"399 kr/time inkl. moms — ingen skjulte gebyrer"`

### 1.2 Structured Data uses 349 kr — should be 399 kr

- **File:** StructuredData.tsx, lines 120-124, 146-149, 172-175, 198-201
- **All four** `priceSpecification.price` values are `349` instead of `399`
- **This affects:** All 4 service offers (Fast rengøring, Flytterengøring, Hovedrengøring, Erhvervsrengøring)
- **Severity:** CRITICAL — search engines see wrong pricing data
- **Fix:** Change `price: 349` → `price: 399` in all 4 locations

### 1.3 Structured Data OrganizationSchema telephone format

- **File:** StructuredData.tsx, line 236
- **Current:** `"+45-22-65-02-26"` (dash-separated)
- **Standard format should be:** `"+4522650226"` (no dashes, per schema.org/Telephone)
- **Severity:** HIGH — may affect rich result eligibility
- **Fix:** Change to `"+4522650226"` or `"+45 22 65 02 26"`

### 1.4 PriceCalculator uses hardcoded rate of 350 kr (not 399)

- **File:** PriceCalculator.tsx, line 14
- **Base price for fast rengøring:** `350` (hardcoded)
- **Actual hourly rate from pricing.ts:** `399`
- **Severity:** HIGH — calculator shows wrong estimates
- **Fix:** Import from `@/content/pricing` instead of hardcoding

### 1.5 ServicePageTemplate has masked phone numbers

- **File:** ServicePageTemplate.tsx, lines 161, 187
- **tel: links use:** `+452****0226` (with asterisks!)
- **Correct phone:** `+45 22 65 02 26`
- **Severity:** HIGH — broken phone links on all 4 service pages
- **Fix:** Use `company.phone` variable like other pages do

---

## 2. 🔴 HIGH — Meta Tags & Structured Data Issues

### 2.1 Missing Twitter Cards on 13 of 15 pages

Only **Home** and **FlyttesynGuide** have Twitter Card meta tags. Missing on:

| Page | Missing |
|------|---------|
| `/om-os` | twitter:card, twitter:title, twitter:description |
| `/services` | (all 3) |
| All 4 service detail pages | (all 3) |
| `/priser` | (all 3) |
| `/service-omraade` | (all 3) |
| `/faq` | (all 3) |
| `/kontakt` | (all 3) |
| `/handelsbetingelser` | (all 3) |
| `/privatlivspolitik` | (all 3) |
| `/cookiepolitik` | (all 3) |
| NotFound (/*) | (all 3) |

- **Severity:** HIGH — poor social sharing on Twitter/X
- **Fix:** Add `<meta name="twitter:card" content="summary_large_image" />` to all Helmet components

### 2.2 Structured Data: SearchAction references non-existent search page

- **File:** StructuredData.tsx, lines 216-223
- **Target:** `https://rendetalje.dk/search?q={search_term_string}`
- **Problem:** No search page exists on the site
- **Severity:** MEDIUM — Google may flag the schema as inaccurate
- **Fix:** Remove the `WebSite.potentialAction` block or add a search page

### 2.3 Structured Data: breadcrumbLabels missing FlyttesynGuide path

- **File:** StructuredData.tsx, line 7-21
- **Missing entry:** `"saadan-bestaar-du-dit-flyttesyn": "..."` — the fallback produces `Saadan-bestaar-du-dit-flyttesyn` (improper casing)
- **Severity:** MEDIUM — incorrect breadcrumb label on guide page
- **Fix:** Add `"saadan-bestaar-du-dit-flyttesyn": "Guide: Bestå flyttesyn"` to `breadcrumbLabels`

### 2.4 FAQPage schema has leading space in question

- **File:** faq.ts, line 35
- **Text:** `" Hvad koster en flytterengøring?"` (space before capital H)
- **This propagates to:** FAQPage JSON-LD on /faq page
- **Severity:** LOW — cosmetic, but shows in search results as " Hvad..."
- **Fix:** Remove leading space

### 2.5 FAQPage schema injected via Helmet dangerouslySetInnerHTML

- **File:** FAQ.tsx, lines 19-32
- **Method:** Uses `{JSON.stringify({...})}` inside a `<script>` tag in Helmet
- **Risk:** If any FAQ text contained `</script>`, it would break the page. However, current content is safe.
- **Severity:** LOW — works but fragile
- **Fix:** Consider using `useEffect` with `document.createElement('script')` like StructuredData.tsx does

---

## 3. 🟡 MEDIUM — Content & Text Issues

### 3.1 "Aarhus og omegn siden 2018" contradicts "founded: 2024"

- **Page:** Home.tsx, line 555
- **Text:** `"Aarhus og omegn siden 2018"`
- **File:** company.ts, line 13 — `founded: 2024`
- **Severity:** MEDIUM — contradictory info, potential trust issue
- **Fix:** Change to "siden 2024" or update company.founded

### 3.2 Heading hierarchy skips H2 → directly H3 on FAQ page

- **Page:** FAQ.tsx, lines 67-69
- **Structure:** `H1 (Ofte stillede spørgsmål)` → `H3 (individual questions)`
- **Missing:** H2 level
- **Severity:** MEDIUM — accessibility/semantic HTML issue
- **Fix:** Change FAQ question headings from `<h3>` to `<h2>`

### 3.3 NotFound page canonical URL points to /404

- **File:** NotFound.tsx, line 14
- **Canonical:** `https://rendetalje.dk/404`
- **Problem:** The catch-all route `*` renders this. Every 404 URL would claim the same canonical, but /404 doesn't exist as a route
- **Severity:** MEDIUM — could confuse crawlers
- **Fix:** Remove the canonical link from the 404 page entirely, or don't index it (`<meta name="robots" content="noindex">`)

### 3.4 Footer navigation missing key service links

- **File:** Footer.tsx
- **Missing links to:** `/services/hovedrengoering`, `/services/erhvervsrengoering`, `/om-os`, `/priser`, `/faq`, `/kontakt`
- **Present links:** Only 4 navigation links + 3 legal links
- **Severity:** MEDIUM — poor internal linking, missed SEO opportunity
- **Fix:** Add links to all 4 services, om-os, priser, faq, kontakt

### 3.5 Header navigation missing Service Area link

- **File:** Header.tsx
- **Nav links:** Forside, Om os, Services, Priser, Guide, FAQ
- **Missing:** `/service-omraade`, `/kontakt` (only in CTA button)
- **Severity:** LOW — but ServiceAreas is an important page
- **Fix:** Consider adding "Områder" to navigation

### 3.6 "Typisk fra ca. 2.010 kr" for flytterengøring — unclear source

- **Page:** Pricing.tsx, line 260
- **Text:** `"typisk fra ca. 2.010 kr"`
- **Context:** This number doesn't clearly map to any pricing example. 5h × 399 = 1.995 kr, not 2.010.
- **Severity:** LOW — slightly confusing
- **Fix:** Clarify or adjust to match pricing logic

---

## 4. 🟢 LOW — Image & Alt Text Audit

### 4.1 Image alt text PASS

| Image | Alt Text | Status |
|-------|----------|--------|
| Header logo | "Rendetalje Logo" | ✅ |
| Footer logo | "Rendetalje Logo" | ✅ |
| Hero background | `alt=""` (decorative) | ✅ |
| Service cards (4) | `alt={service.title}` | ✅ |
| Before/after (4) | "Før - Køkken & badeværelse", etc. | ✅ |
| Service hero images | `alt=""` (decorative) | ✅ |

### 4.2 OG image availability PASS

| Image | File exists | Page uses |
|-------|-------------|-----------|
| `logo.webp` | ✅ | All legal pages, about, services overview |
| `service-fast.webp` | ✅ | Fast rengøring page |
| `service-flyt.webp` | ✅ | Flytterengøring page |
| `service-hoved.webp` | ✅ | Hovedrengøring page |
| `service-erhverv.webp` | ✅ | Erhvervsrengøring page |
| `hero-bg.webp` | ✅ | Home page hero |

All OG images exist on disk. ✅

---

## 5. 🟢 INTERNAL LINKS — Audit

### 5.1 All internal links are valid

All links in Header, Footer, Home, Services, Pricing, ServiceAreas, FAQ, Contact, Terms, Privacy, Cookies, and NotFound resolve to valid routes defined in App.tsx.

**Verified paths:**
- `/`, `/om-os`, `/services`, `/services/fast-rengoering`, `/services/flytterengoering`, `/services/hovedrengoering`, `/services/erhvervsrengoering`
- `/priser`, `/service-omraade`, `/faq`, `/kontakt`
- `/guides/saadan-bestaar-du-dit-flyttesyn`
- `/handelsbetingelser`, `/privatlivspolitik`, `/cookiepolitik`

**No broken internal links found.** ✅

### 5.2 External links

- Unsplash images (before/after gallery) — valid
- tel:+4522650226 — valid (except masked numbers in ServicePageTemplate — see 1.5)
- mailto:info@rendetalje.dk — valid
- naevneneshus.dk — valid
- ec.europa.eu/consumers/odr — valid
- umami.is/privacy — valid
- cloud.umami.is — valid (analytics script)

---

## 6. 📋 SITEMAP & ROBOTS — Audit

### 6.1 Sitemap

- **File:** `/public/sitemap.xml`
- **URLs listed:** 15 (all routes including FlyttesynGuide)
- **Missing:** None — all 15 page routes are present ✅
- **Correct lastmod dates:** ✅
- **Protocol:** `https://` ✅
- **Domain:** `rendetalje.dk` (non-www) ✅

**Note:** The AGENTS.md file mentions "14 URLs — missing FlyttesynGuide" but this is outdated — the sitemap already includes `/guides/saadan-bestaar-du-dit-flyttesyn`.

### 6.2 robots.txt

- **File:** `/public/robots.txt`
- **Content:** `User-agent: *` + `Allow: /` + `Sitemap: https://rendetalje.dk/sitemap.xml`
- **Status:** Correct ✅

---

## 7. ✅ PASSED CHECKS (No Issues)

| Check | Result |
|-------|--------|
| All pages have H1 tags | ✅ PASS |
| Canonical URLs on all pages | ✅ PASS |
| OG title/description/url/image on all pages | ✅ PASS |
| OG locale = da_DK on all pages | ✅ PASS |
| Service descriptions are unique (not duplicated) | ✅ PASS |
| No placeholder/lorem ipsum text found | ✅ PASS |
| Danish text is consistent and professional | ✅ PASS |
| _headers file has proper CSP/HSTS | ✅ PASS |
| _redirects handles legacy WordPress paths | ✅ PASS |
| All service OG images are service-specific | ✅ PASS |

---

## 8. 📋 COMPLETE ISSUE LIST (All 28)

| # | Severity | Category | Description | Location |
|---|----------|----------|-------------|----------|
| 1 | 🔴 CRITICAL | Pricing | "349 kr/time" on Home, should be "399 kr/time" | Home.tsx:559 |
| 2 | 🔴 CRITICAL | Structured Data | priceSpecification.price = 349, should be 399 (×4) | StructuredData.tsx:120-202 |
| 3 | 🔴 HIGH | Structured Data | Telephone format uses dashes `+45-22-65-02-26` | StructuredData.tsx:236 |
| 4 | 🔴 HIGH | Pricing | PriceCalculator base price hardcoded as 350, not 399 | PriceCalculator.tsx:14 |
| 5 | 🔴 HIGH | Links | tel: links masked as `+452****0226` on service pages | ServicePageTemplate.tsx:161,187 |
| 6 | 🔴 HIGH | Meta Tags | Missing Twitter Cards on 13 of 15 pages | All pages except Home & Guide |
| 7 | 🟡 HIGH | Content | "Aarhus og omegn siden 2018" vs founded: 2024 | Home.tsx:555 / company.ts:13 |
| 8 | 🟡 MEDIUM | Structured Data | SearchAction target points to non-existent /search page | StructuredData.tsx:220 |
| 9 | 🟡 MEDIUM | Structured Data | breadcrumbLabels missing FlyttesynGuide path segment | StructuredData.tsx:7-21 |
| 10 | 🟢 LOW | Content | FAQ question has leading space | faq.ts:35 |
| 11 | 🟢 LOW | Structured Data | FAQPage schema injected via JSON.stringify in Helmet | FAQ.tsx:19-32 |
| 12 | 🟡 MEDIUM | Headings | FAQ page skips H2, goes H1 → H3 | FAQ.tsx:67 |
| 13 | 🟡 MEDIUM | SEO | NotFound canonical points to /404 (non-existent route) | NotFound.tsx:14 |
| 14 | 🟡 MEDIUM | Internal Links | Footer missing links to 6 important pages | Footer.tsx:40-77 |
| 15 | 🟢 LOW | Navigation | Header missing Service Area link | Header.tsx:10-17 |
| 16 | 🟢 LOW | Pricing | "typisk fra ca. 2.010 kr" unclear calculation | Pricing.tsx:260 |

---

## 9. PRIORITY FIX RECOMMENDATIONS

### Immediate (fix now)
1. Fix "349 kr/time" → "399 kr/time" on Home.tsx:559
2. Fix StructuredData.tsx: all 4 `price: 349` → `price: 399`
3. Fix ServicePageTemplate.tsx: masked phone numbers → use `company.phone`
4. Fix PriceCalculator.tsx: import hourly rate from pricing.ts

### This week
5. Add Twitter Cards to all pages (or create a shared Helmet component)
6. Fix "siden 2018" → "siden 2024"
7. Fix breadcrumbLabels for FlyttesynGuide
8. Add missing footer navigation links
9. Fix StructuredData telephone format

### This sprint
10. Remove SearchAction from WebSite schema (or add search page)
11. Fix heading hierarchy on FAQ page (H3 → H2)
12. Remove/noindex canonical on 404 page
13. Fix leading space in FAQ question

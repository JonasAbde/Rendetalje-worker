# Rendetalje — Rengøringsvirksomhed Website

## Project Overview
Rendetalje is a Danish cleaning company (Rengøring i Aarhus). This is the company website — marketing pages + contact form. Live on **rendetalje.dk**.

- **Business:** Private and commercial cleaning in Aarhus and surrounding areas
- **Services:** Fast rengøring, flytterengøring, hovedrengøring, erhvervsrengøring
- **Legal:** Rendetalje.dk ApS, CVR 45564096, Gammel Viborgvej 40, 8381 Tilst

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + React Router DOM 7 (all routes lazy-loaded) |
| Build | Vite 6 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion (via `motion` package) |
| Icons | lucide-react |
| SEO | react-helmet-async + static sitemap |
| Backend | Cloudflare Pages Functions (Worker) |
| Email | Resend API |
| Analytics | Umami (self-hosted at cloud.umami.is) |
| Language | TypeScript (strict mode) |
| Hosting | Cloudflare Pages |
| Domain | rendetalje.dk (managed via Cloudflare) |
| CSS Utilities | clsx + tailwind-merge (cn helper) |

---

## Live URL
- **https://rendetalje.dk** (canonical; www redirects via middleware)

---

## Project Structure

```
rendetalje-worker/
├── functions/
│   ├── api/
│   │   └── quote.ts              # Cloudflare Worker — POST contact form → Resend email + auto-reply to customer
│   └── _middleware.ts            # www → non-www redirect (301)
├── src/
│   ├── App.tsx                   # React Router setup (16 routes, all lazy-loaded via React.lazy)
│   ├── main.tsx                  # Entry point (StrictMode + createRoot)
│   ├── index.css                 # Tailwind v4 entry + global styles
│   ├── routes/
│   │   ├── Home.tsx              # / — Landing page (hero, services, før/efter galleri, trust badges, henvisning)
│   │   ├── About.tsx             # /om-os
│   │   ├── Services.tsx          # /services — Service overview page
│   │   ├── services/
│   │   │   ├── FastRengoering.tsx      # /services/fast-rengoering
│   │   │   ├── Flytterengoering.tsx    # /services/flytterengoering
│   │   │   ├── Hovedrengoering.tsx     # /services/hovedrengoering
│   │   │   └── Erhvervsrengoering.tsx  # /services/erhvervsrengoering
│   │   ├── Pricing.tsx           # /priser — Price calculator + prisliste download
│   │   ├── ServiceAreas.tsx      # /service-omraade — 9 area cards (Aarhus C, N, V, Risskov, etc.)
│   │   ├── FlyttesynGuide.tsx    # /guides/saadan-bestaar-du-dit-flyttesyn — Guide page
│   │   ├── FAQ.tsx               # /faq — 12 expanded FAQs
│   │   ├── Contact.tsx           # /kontakt — Multi-step form (name, phone, email, service, address, city, size, frequency, date)
│   │   ├── Terms.tsx             # /handelsbetingelser
│   │   ├── Privacy.tsx           # /privatlivspolitik
│   │   ├── Cookies.tsx           # /cookiepolitik
│   │   └── NotFound.tsx          # /* — 404 page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx        # Nav with phone + Guide link + sticky mobile CTA
│   │   │   ├── Footer.tsx        # Footer with service links, area links, guide link
│   │   │   ├── Layout.tsx        # Wraps Header + main content + Footer
│   │   │   └── ScrollToTop.tsx   # Scroll-to-top on route change
│   │   ├── contact/
│   │   │   ├── MultiStepForm.tsx      # Full multi-step contact form (4 steps)
│   │   │   ├── PriceCalculator.tsx    # Live price estimator (hourly × m²)
│   │   │   ├── ServiceSelector.tsx    # Service type picker UI
│   │   │   ├── StepIndicator.tsx      # Step progress bar
│   │   │   └── SuccessAnimation.tsx   # Post-submit success state
│   │   ├── ui/
│   │   │   └── ServicePageTemplate.tsx # Reusable service page layout
│   │   ├── CookieConsent.tsx     # Cookie consent banner
│   │   └── StructuredData.tsx    # JSON-LD structured data (BreadcrumbList, Service, LocalBusiness)
│   ├── content/
│   │   ├── company.ts            # Company info, positioning, geography (9 Aarhus areas), policies
│   │   ├── pricing.ts            # hourlyRate: 399, minimumspris: 698, billing logic, estimation formulas, typical examples
│   │   ├── services.ts           # Core service definitions (4 services), extra services
│   │   └── faq.ts                # 12 FAQ entries
│   └── lib/
│       ├── utils.ts              # cn() helper (clsx + tailwind-merge)
│       └── analytics.ts          # Umami event tracking wrapper
├── docs/
│   ├── PRISLISTE.html            # A4 printable price list (professionelt layout)
│   ├── EMAIL_SIGNATUR.html       # HTML email signature (Jonas, Rendetalje)
│   ├── CVR_LEADS.txt             # CVR-scraped business leads (14 hot leads, Aarhus area)
│   ├── CVR_LEADS.csv             # Same leads in CSV format
│   └── EJENDOMSMAGGLERE.md       # Real estate agent partnership outreach plan (17 agents)
├── public/
│   ├── logo.png                  # Original logo (120KB PNG — legacy)
│   ├── logo.webp                 # Optimized logo (45KB WebP — 62% smaller)
│   ├── robots.txt                # Allow all, sitemap link
│   ├── sitemap.xml               # Static sitemap (14 URLs — missing FlyttesynGuide, needs update)
│   ├── _headers                  # CSP, HSTS, X-Frame-Options, Permissions-Policy
│   ├── _redirects                # Legacy URL redirects (WordPress paths, old slugs)
│   ├── .keep
│   └── images/
│       ├── hero-bg.webp / .png   # Hero background
│       ├── service-fast.webp / .png
│       ├── service-flyt.webp / .png
│       ├── service-hoved.webp / .png
│       └── service-erhverv.webp / .png
├── .gitignore
├── .editorconfig
├── .gitattributes
├── SECURITY.md
├── CHANGELOG.md
├── AGENTS.md                     # This file
├── README.md                     # Danish public dev README
├── package.json                  # v1.0.0 (needs bump to 1.1.0)
├── package-lock.json
├── tsconfig.json                 # Strict TS, @/* path alias
├── vite.config.ts                # React plugin, Tailwind plugin, manualChunks
├── wrangler.jsonc                # Cloudflare Pages config
└── MARKETING_RESEARCH.md         # Customer acquisition channel research (May 6)
```

---

## All 16 Routes

| # | Path | Component | Type |
|---|------|-----------|------|
| 1 | `/` | Home | Marketing |
| 2 | `/om-os` | About | Marketing |
| 3 | `/services` | Services | Overview |
| 4 | `/services/fast-rengoering` | FastRengoering | Service |
| 5 | `/services/flytterengoering` | Flytterengoering | Service |
| 6 | `/services/hovedrengoering` | Hovedrengoering | Service |
| 7 | `/services/erhvervsrengoering` | Erhvervsrengoering | Service |
| 8 | `/priser` | Pricing | Marketing |
| 9 | `/service-omraade` | ServiceAreas | Marketing |
| 10 | `/guides/saadan-bestaar-du-dit-flyttesyn` | FlyttesynGuide | Guide |
| 11 | `/faq` | FAQ | Info |
| 12 | `/kontakt` | Contact | Conversion |
| 13 | `/handelsbetingelser` | Terms | Legal |
| 14 | `/privatlivspolitik` | Privacy | Legal |
| 15 | `/cookiepolitik` | Cookies | Legal |
| 16 | `*` | NotFound | Error |

---

## Cron Jobs (Automation)

### Added May 6, 2026 (3 new)

| Name | Schedule | Purpose |
|------|----------|---------|
| **lead-scan** | Man–Fre kl. 08:00 | Scans new leads from website contact form, checks for follow-up needed |
| **reactivation** | Man kl. 09:00 | Sends reactivation emails to past customers (inactive >3 months) |
| **dba-scan** | Ons kl. 10:00 | Scans DBA (Den Blå Avis) for new cleaning job postings in Aarhus |

*Note: These cron jobs are likely managed via external scheduling (GitHub Actions or external service). The exact implementation files are outside this repo.*

---

## Environment Variables (Cloudflare Pages)

| Variable | Required | Purpose |
|----------|----------|---------|
| `RESEND_API_KEY` | ✅ Yes | Resend.com API key for sending emails |
| `QUOTE_DESTINATION_EMAIL` | ✅ Yes | Where leads are sent (default: info@rendetalje.dk) |
| `FROM_EMAIL` | No | Sender email address (default: info@rendetalje.dk) |
| `PUBLIC_SITE_URL` | ✅ Yes | Site URL used for SEO and redirects |

Set these in Cloudflare Pages Dashboard → Settings → Environment Variables.

---

## Key Commands

```bash
# Development
cd /home/ubuntu/rendetalje-worker && npm run dev        # Vite dev server on :3000

# Build
npm run build                                            # Outputs to dist/

# Preview
npm run preview                                          # Vite preview of built site

# Clean
npm run clean                                            # rm -rf dist

# Type-check
npm run lint                                             # tsc --noEmit

# Deploy (via git push → Cloudflare Pages auto-deploy)
# Manual deploy:
npx wrangler pages deploy dist
```

---

## Key Functionality

1. **Marketing pages** — Home (hero, galleri, trust badges, henvisning), About, Services, Pricing, FAQ, Service Areas, Guide
2. **4 service detail pages** — Fast rengøring, Flytterengøring, Hovedrengøring, Erhvervsrengøring
3. **Contact form** (multi-step) — name, phone, email, service, address, city, size, frequency, date → email via Resend
4. **Auto-reply** — Customers get automatic confirmation email after form submission
5. **Price calculator** — Live estimate based on m², service type, and extras
6. **SEO** — Static sitemap (needs update for FlyttesynGuide), canonical URLs, OG tags (all 15 pages), JSON-LD structured data (BreadcrumbList + Service + LocalBusiness schema), robots.txt
7. **Cookie consent** — Banner component
8. **Legal pages** — Terms, Privacy, Cookie Policy
9. **www → non-www** middleware redirect (301)
10. **Input sanitization** — XSS prevention on all form data
11. **Security headers** — CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Permissions-Policy via `_headers`
12. **Rate limiting** — 3 requests/min/IP in quote handler
13. **Legacy redirects** — Old WordPress paths handled via `_redirects`

---

## Deployment Config

- **Hosting:** Cloudflare Pages (git-connected to GitHub)
- **Build command:** `npm run build`
- **Build output:** `dist/`
- **Framework preset:** Vite (auto-detected)
- **Config file:** `wrangler.jsonc` (compatibility_date: 2026-04-30, nodejs_compat flag)
- **Middleware:** `functions/_middleware.ts` handles www → non-www redirect

---

## Important Notes

- **No database** — Static site with one serverless API endpoint (`/api/quote`)
- **No systemd service** — Runs entirely on Cloudflare infrastructure
- **Content lives in `src/content/`** — Edit these files for text/pricing updates
- **Images in `public/images/`** — WebP primary, PNG fallback
- **Monthly invoicing** — Handled separately via Billy.dk (see rendetalje-business-rules skill)
- **Sitemap needs update** — Currently has 14 URLs; FlyttesynGuide (route #10) is missing

---

## Revenue Changes (May 6, 2026 — v1.1.0)

### Pricing
- **hourlyRate increased:** 349 kr → **399 kr** (+14.3%)
- **minimumPrice unchanged:** 698 kr (still = 2 hours)

### Impact
- Revenue per job hour increased by ~14.3%
- Example: 4-hour job: 1.396 kr → **1.596 kr**
- Example: 6-hour job: 2.094 kr → **2.394 kr**
- All estimation examples in `pricing.ts` need verification — some descriptions still reference "349 kr"

### Price List Download
- `docs/PRISLISTE.html` — A4 printable price list for customers
- Download button added to `/priser` page

---

## Current Status

- ✅ **Live on rendetalje.dk** — Fully operational
- ✅ **Contact form → email** — Working with Resend API
- ✅ **Auto-reply** — Customers receive confirmation email after form submission
- ✅ **SEO meta tags** — Title, canonical, OG tags on all 15 pages
- ✅ **Structured data** — BreadcrumbList + Service + LocalBusiness schema
- ✅ **Mobile improvements** — Sticky phone CTA, phone in nav
- ✅ **Price update** — 399 kr/time implemented
- ✅ **FlyttesynGuide page** — Live at /guides/saadan-bestaar-du-dit-flyttesyn
- ✅ **Service areas** — 9 Aarhus area cards live
- ✅ **Cron jobs active** — lead-scan, reactivation, dba-scan
- ✅ **Documentation** — All docs/ files created
- ✅ **Analytics** — Umami tracking active
- ⚠️ **Sitemap** — Needs update to include FlyttesynGuide route
- ⚠️ **Pricing descriptions** — Some src/content/ files still reference 349 kr in text

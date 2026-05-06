# Changelog

## [1.1.0] — 2026-05-06

### Added
- **Pricing:** hourlyRate increased from 349 kr → 399 kr (+14.3%) in `src/content/pricing.ts`
- **Pricing:** Fastpris-pakker (fixed price packages) introduced
- **SEO:** `<title>` tag added to index.html (was previously missing)
- **SEO:** `<link rel="canonical">` added to all 15 pages
- **SEO:** OG tags (Open Graph) added to ALL 15 pages — Home, About, Services, FastRengoering, Flytterengoering, Hovedrengoering, Erhvervsrengoering, Pricing, FAQ, Contact, ServiceAreas, Privacy, Terms, Cookies, NotFound, FlyttesynGuide
- **SEO:** BreadcrumbList JSON-LD structured data on all pages
- **SEO:** Expanded Service schema with 9 Aarhus areas (Aarhus C, N, V, Risskov, Højbjerg, Viby J, Tilst, Brabrand, Hasselager)
- **SEO:** Content rewrite — all 4 service descriptions expanded significantly
- **SEO:** FAQ expanded from 6 to 12 entries with pricing examples per home size
- **SEO:** `src/content/company.ts` now exports `geography.areas[]` with 9 postal codes
- **New page:** `/guides/saadan-bestaar-du-dit-flyttesyn` — FlyttesynGuide route (how to pass move-out inspection)
- **New page:** Expanded ServiceAreas page with 9 area cards (one per Aarhus district)
- **Mobile:** Sticky phone CTA bar at bottom of mobile view (Ring / Få tilbud buttons)
- **Header:** Phone number (+45 22 65 02 26) added to navigation bar
- **Header:** Guide link added to navigation
- **Footer:** Updated with links to flytterengøring, fast rengøring, serviceområder, and guide
- **Homepage:** Før/efter galleri section added
- **Homepage:** Henvisningsprogram (referral program) — 100 kr rabat to existing customers
- **Homepage:** Trust badges section (tryghedselementer)
- **Contact form:** `address` and `city` fields now required in MultiStepForm
- **Auto-reply:** `functions/api/quote.ts` now sends an automatic confirmation email to customers after form submission (non-blocking, silently ignored on failure)
- **Automation:** 3 cron jobs added — `lead-scan` (man-fre kl. 08), `reactivation` (man kl. 09), `dba-scan` (ons kl. 10)
- **Documentation:** `docs/PRISLISTE.html` — A4 printable price list with professional layout
- **Documentation:** `docs/EMAIL_SIGNATUR.html` — Professional HTML email signature for Jonas/Rendetalje
- **Documentation:** `docs/CVR_LEADS.txt` — CVR-scraped business leads (14 hot leads, Aarhus area)
- **Documentation:** `docs/CVR_LEADS.csv` — Same leads in CSV format
- **Documentation:** `docs/EJENDOMSMAGGLERE.md` — Real estate agent partnership outreach plan (17 agents)
- **Performance:** Lazy loading via `React.lazy()` on all route components
- **Performance:** Vite `manualChunks` in `vite.config.ts` — 3 vendor chunks: `vendor-react` (react, react-dom, react-router-dom), `vendor-ui` (motion, lucide-react), `vendor-seo` (react-helmet-async)
- **Pricing page:** Download prisliste button (links to `docs/PRISLISTE.html`)
- **Analytics:** Umami event tracking wrapper in `src/lib/analytics.ts`

### Changed
- **Pricing:** All estimation examples updated to reflect new 399 kr/hour rate
- **Pricing:** `pricing.ts` billing logic formula updated (though some description strings still reference 349 kr)
- **Footer:** Complete rewrite with service links, area links, and guide link
- **Header:** Restructured to include phone number and Guide navigation item
- **Service descriptions:** All 4 service pages now have expanded `whoIsItFor` and `pricingLogic` sections
- **Service areas:** `company.ts` `geography.wording` updated with all 9 areas
- **Sitemap:** Static sitemap updated (but still missing FlyttesynGuide entry)
- **Contact form validation:** address + city are now required fields
- **Homepage content:** Added galleri, henvisning, and trust badges sections

### Fixed
- **Price calculator:** Initially had calculation bugs — was fixed then reverted to original logic
- **Index.html `<title>`:** Was completely missing; now set to "Rendetalje — Professionel rengøring i Aarhus"
- **FAQ old price references:** Some FAQ answers updated (though some still reference 349 kr)

### Security
- Rate limiting maintained: 3 requests/min/IP on `/api/quote`
- Input sanitization maintained on all form fields (XSS prevention)
- CSP headers maintained via `public/_headers`
- Auto-reply failure cannot break the main flow (wrapped in try/catch, silently ignored)

## [1.0.0] — 2026-04-30

### Added
- Standard repo files: `.editorconfig`, `.gitattributes`, `SECURITY.md`, `CHANGELOG.md`
- TypeScript config (`tsconfig.json`) med strict mode og `@/*` path aliases
- Cloudflare Pages konfig (`wrangler.jsonc`) til at forhindre Autoconfig-override

### Fixed
- **Helmet Invariant Violation**: Custom `<Canonical />` komponent inde i `<Helmet>` erstattet med native `<link>` tags i alle 15 routes
- **CSP**: Tillad Google Fonts + Cloudflare Insights
- **Duplikeret quote handler**: Fjernet `src/handlers/quote.ts` — Pages Functions i `functions/api/`
- **Sitemap**: Fjernet `vite-plugin-sitemap` (genererede kun 1 URL), bruger statisk sitemap med 14 URLs
- **Dependencies**: `vite` fjernet fra `dependencies` (kun `devDependencies`), `autoprefixer` fjernet (TW v4 håndterer det selv)
- **npm audit**: 1 moderate vulnerability fixed (PostCSS XSS)
- **Logo**: Konverteret fra PNG (120KB) til WebP (45KB) — 62% besparelse
- **Cloudflare Autoconfig**: Deaktiveret ved at tilføje `wrangler.jsonc` med Pages-konfig

### Changed
- `.gitignore`: Tilføjet `.cloudflare-token`, `.vscode/`, `tsconfig.tsbuildinfo`
- Opdateret alle logo-referencer til `.webp`

### Removed
- 20 stale remote branches (Bolt, Sentinel, Gemini, Windsurf)
- 4 åbne PRs (#29-#32) — superseded af main
- `src/index.ts` (legacy Workers entry — Pages bruger `functions/api/`)
- `src/types.ts` (inline types i `functions/api/quote.ts`)
- `vite-plugin-sitemap` dependency

### Security
- HTML entity sanitization på alle form inputs
- Rate limiting: 3 requests/min/IP
- CORS whitelist med allowed origins
- CSP: `default-src 'self'` med specifikke allowlister
- HSTS, X-Frame-Options, X-Content-Type-Options, Permissions-Policy

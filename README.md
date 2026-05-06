# Rendetalje — Hjemmeside

Professionel hjemmeside for **Rendetalje.dk**, et rengøringsfirma i Aarhus. Bygget med React, Vite og Cloudflare Pages.

**Live:** [https://rendetalje.dk](https://rendetalje.dk)

---

## Teknisk Stack

| Lag | Teknologi |
|-----|-----------|
| Frontend | React 19 + React Router DOM 7 |
| Byggeværktøj | Vite 6 |
| Styling | Tailwind CSS v4 |
| Animationer | Framer Motion (`motion`) |
| Ikoner | lucide-react |
| SEO | react-helmet-async + statisk sitemap |
| Backend/API | Cloudflare Pages Functions (Workers) |
| Email | Resend API |
| Analytics | Umami (cloud.umami.is) |
| Sprog | TypeScript (strict mode) |
| Hosting | Cloudflare Pages |
| Domæne | rendetalje.dk (Cloudflare DNS) |
| CSS Hjælper | clsx + tailwind-merge (`cn()`) |

---

## Projektstruktur

```
rendetalje-worker/
├── functions/
│   ├── api/
│   │   └── quote.ts                  # Worker — modtager kontaktformular → sender email via Resend + auto-svar til kunde
│   └── _middleware.ts                # www → non-www redirect (301)
├── src/
│   ├── App.tsx                       # React Router setup (16 routes, alle lazy-loaded)
│   ├── main.tsx                      # Entry point
│   ├── index.css                     # Tailwind v4 + globale styles
│   ├── routes/
│   │   ├── Home.tsx                  # Forside (hero, services, galleri, trust badges, henvisning)
│   │   ├── About.tsx                 # Om os
│   │   ├── Services.tsx              # Services oversigt
│   │   ├── services/
│   │   │   ├── FastRengoering.tsx    # Fast rengøring
│   │   │   ├── Flytterengoering.tsx  # Flytterengøring
│   │   │   ├── Hovedrengoering.tsx   # Hovedrengøring
│   │   │   └── Erhvervsrengoering.tsx# Erhvervsrengøring
│   │   ├── Pricing.tsx               # Priser (prisberegner + download prisliste)
│   │   ├── ServiceAreas.tsx          # Serviceområder (9 områdekort)
│   │   ├── FlyttesynGuide.tsx        # Guide: Sådan består du dit flyttesyn
│   │   ├── FAQ.tsx                   # Ofte stillede spørgsmål (12 stk.)
│   │   ├── Contact.tsx               # Kontakt (multi-step formular)
│   │   ├── Terms.tsx                 # Handelsbetingelser
│   │   ├── Privacy.tsx               # Privatlivspolitik
│   │   ├── Cookies.tsx               # Cookiepolitik
│   │   └── NotFound.tsx              # 404-side
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx            # Navigation med telefon + Guide link + sticky CTA (mobil)
│   │   │   ├── Footer.tsx            # Footer med service-/område-/guide-links
│   │   │   ├── Layout.tsx            # Layout wrapper (Header + indhold + Footer)
│   │   │   └── ScrollToTop.tsx       # Scroll til top ved routing
│   │   ├── contact/
│   │   │   ├── MultiStepForm.tsx     # Multi-step kontaktformular (4 trin)
│   │   │   ├── PriceCalculator.tsx   # Live prisberegner
│   │   │   ├── ServiceSelector.tsx   # Vælger til servicetype
│   │   │   ├── StepIndicator.tsx     # Trinindikator
│   │   │   └── SuccessAnimation.tsx  # Succesbesked efter indsendelse
│   │   ├── ui/
│   │   │   └── ServicePageTemplate.tsx # Genbrugelig service-side skabelon
│   │   ├── CookieConsent.tsx         # Cookie-banner
│   │   └── StructuredData.tsx        # JSON-LD (BreadcrumbList, Service, LocalBusiness)
│   ├── content/
│   │   ├── company.ts                # Virksomhedsinfo, positionering, geografi (9 områder), politikker
│   │   ├── pricing.ts                # Priser (399 kr/time, minimum 698 kr), estimatformler, eksempler
│   │   ├── services.ts               # Servicebeskrivelser (4 services), ekstra services
│   │   └── faq.ts                    # 12 FAQ
│   └── lib/
│       ├── utils.ts                  # cn() hjælper
│       └── analytics.ts              # Umami event tracking
├── docs/
│   ├── PRISLISTE.html                # A4 printbar prisliste
│   ├── EMAIL_SIGNATUR.html           # HTML email signatur
│   ├── CVR_LEADS.txt                 # CVR-scrapede leads (14 hot leads)
│   ├── CVR_LEADS.csv                 # Samme leads i CSV
│   └── EJENDOMSMAGGLERE.md           # Ejendomsmægler-partnerskabsplan (17 kontorer)
├── public/
│   ├── logo.png                      # Logo (original)
│   ├── logo.webp                     # Logo (optimeret, 62% mindre)
│   ├── robots.txt                    # Tillad alle, sitemap-link
│   ├── sitemap.xml                   # Statisk sitemap (14 URLs)
│   ├── _headers                      # CSP, HSTS, sikkerheds-headers
│   ├── _redirects                    # Redirects fra gamle URL'er
│   └── images/
│       ├── hero-bg.webp / .png
│       ├── service-fast.webp / .png
│       ├── service-flyt.webp / .png
│       ├── service-hoved.webp / .png
│       └── service-erhverv.webp / .png
├── .gitignore
├── .editorconfig
├── .gitattributes
├── SECURITY.md
├── CHANGELOG.md                      # Versionshistorik
├── AGENTS.md                         # AI agent kontekstfil
├── package.json                      # v1.0.0
├── tsconfig.json                     # TypeScript strict
├── vite.config.ts                    # Vite + React + Tailwind + manualChunks
├── wrangler.jsonc                    # Cloudflare Pages konfig
└── MARKETING_RESEARCH.md             # Kundeanskaffelsesstrategi
```

---

## Alle 16 Routes

| Sti | Side | Type |
|-----|------|------|
| `/` | Forside | Marketing |
| `/om-os` | Om os | Marketing |
| `/services` | Services | Oversigt |
| `/services/fast-rengoering` | Fast rengøring | Service |
| `/services/flytterengoering` | Flytterengøring | Service |
| `/services/hovedrengoering` | Hovedrengøring | Service |
| `/services/erhvervsrengoering` | Erhvervsrengøring | Service |
| `/priser` | Priser | Marketing |
| `/service-omraade` | Serviceområder | Marketing |
| `/guides/saadan-bestaar-du-dit-flyttesyn` | Guide: Flyttesyn | Guide |
| `/faq` | FAQ | Info |
| `/kontakt` | Kontakt | Konvertering |
| `/handelsbetingelser` | Handelsbetingelser | Legal |
| `/privatlivspolitik` | Privatlivspolitik | Legal |
| `/cookiepolitik` | Cookiepolitik | Legal |
| `*` | 404 (ikke fundet) | Error |

---

## Nøglekommandoer

```bash
# Udvikling
npm run dev                  # Starter på http://localhost:3000

# Byg
npm run build                # Output i dist/

# Preview
npm run preview              # Preview af bygget site

# Ryd
npm run clean                # Sletter dist/

# Tjek types
npm run lint                 # tsc --noEmit

# Deploy (Cloudflare Pages — auto via git push)
git push origin main

# Manual deploy
npx wrangler pages deploy dist
```

---

## Deployment (Cloudflare Pages)

1. Forbind dit GitHub repository til Cloudflare Pages
2. Framework preset: **Vite** (auto-detekteres)
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Konfigurationsfil: `wrangler.jsonc`

### Miljøvariabler (Cloudflare Pages → Settings → Environment Variables)

| Variabel | Påkrævet | Formål |
|----------|----------|--------|
| `RESEND_API_KEY` | ✅ Ja | Resend.com API-nøgle |
| `QUOTE_DESTINATION_EMAIL` | ✅ Ja | Modtager email for leads (f.eks. info@rendetalje.dk) |
| `FROM_EMAIL` | Nej | Afsender email (default: info@rendetalje.dk) |
| `PUBLIC_SITE_URL` | ✅ Ja | Websitets URL |

---

## Version

**Nuværende version:** 1.1.0 (2026-05-06)

Se [CHANGELOG.md](./CHANGELOG.md) for komplet versionshistorik.

### v1.1.0 Højdepunkter (Maj 2026)
- **Prisændring:** Timepris 349 kr → **399 kr** (+14,3%)
- **SEO:** Titel, canonical, OG-tags på alle 15 sider + struktureret data (BreadcrumbList, Service)
- **Ny guide:** /guides/saadan-bestaar-du-dit-flyttesyn
- **Mobile:** Sticky CTA (Ring/Få tilbud), telefon i header
- **Automation:** 3 cron jobs (lead-scan, reactivation, dba-scan) + auto-svar ved kontakt
- **Performance:** Lazy loading + Vite manualChunks
- **Dokumentation:** Prisliste, email signatur, CVR leads, ejendomsmæglerplan

---

## Noter

- **Ingen database** — Rent statisk site med ét API endpoint
- **Indhold** redigeres i `src/content/` (company.ts, pricing.ts, services.ts, faq.ts)
- **Billeder** i `public/images/` — WebP primært, PNG som fallback
- **Fakturering** håndteres separat via Billy.dk
- **Sitemap** mangler FlyttesynGuide — bør opdateres

# Rendetalje — Rengøringsvirksomhed Website

## Project Overview
Rendetalje is a Danish cleaning company (Rengøring i Aarhus). This is the company website — marketing pages + contact form. Live on rendetalje.dk.

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Framework | React 19 + React Router DOM 7 (lazy-loaded routes) |
| Build | Vite 6 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion (via `motion` package) |
| Icons | lucide-react |
| SEO | react-helmet-async + vite-plugin-sitemap |
| Backend | Cloudflare Pages Functions (Worker) |
| Email | Resend API |
| Language | TypeScript |
| Hosting | Cloudflare Pages |

## Live URL
- https://rendetalje.dk

## Project Structure
```
rendetalje-worker/
├── functions/api/quote.ts       # Cloudflare Worker — handles POST contact form → email (Resend)
├── src/
│   ├── App.tsx                  # React Router setup (15 routes, all lazy-loaded)
│   ├── main.tsx                 # Entry point
│   ├── routes/                  # Home, About, Contact, FAQ, Pricing, Services, Legal pages
│   │   └── services/            # Fast, Flytte, Hoved, Erhvervs rengøring
│   ├── components/
│   │   ├── layout/ (Header, Footer, Layout, ScrollToTop)
│   │   ├── contact/ (MultiStepForm, PriceCalculator, etc.)
│   │   └── ui/ (ServicePageTemplate)
│   ├── content/                 # All text/pricing/services/company info
│   │   ├── company.ts, pricing.ts, services.ts, faq.ts
│   ├── lib/utils.ts
│   └── types.ts
├── public/ (logo, robots.txt, sitemap.xml)
├── wrangler.toml                # Cloudflare config
├── vite.config.ts
├── package.json
```

## Key Commands
```bash
# Dev
cd /home/ubuntu/rendetalje-worker && npm run dev

# Build
npm run build

# Deploy (Cloudflare Pages — auto via git)
# Or manual: npx wrangler pages deploy dist

# API dev
npx wrangler pages dev
```

## Key Functionality
1. **Marketing pages** — Home, About, Services, Pricing, FAQ, Service Areas, Contact
2. **4 service pages** — Regular, Move-in/out, Deep, Commercial cleaning
3. **Contact form** (multi-step) — name, phone, email, service, address, size, frequency, date → email via Resend
4. **Price calculator** component
5. **SEO** — Sitemap, canonical URLs, structured data, robots.txt
6. **Cookie consent** component
7. **Legal pages** — Terms, Privacy, Cookie Policy
8. **Input sanitization** — XSS prevention on form data

## Deploy Config
- **Hosting:** Cloudflare Pages (git-connected)
- **Build:** `npm run build`, output `dist/`
- **Env vars required:** `QUOTE_DESTINATION_EMAIL`, `RESEND_API_KEY`, `PUBLIC_SITE_URL`

## Important Notes
- No database — static site with one serverless API endpoint
- No systemd service — runs on Cloudflare infrastructure
- Content lives in `src/content/` — edit there for text/pricing updates
- Monthly invoicing handled separately (see rendetalje-business-rules skill)

## Current Status
- ✅ Live on rendetalje.dk
- ✅ Contact form → email working
- ✅ Monthly invoicing: 7 sent + 5 klar (#1288-#1292, 16.578 kr)

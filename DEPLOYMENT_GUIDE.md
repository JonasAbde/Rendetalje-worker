# Rendetalje Deployment Guide

## Status: ✅ ALT FIXET

### Hvad blev løst
- **Worker-konflikt** — `rendetalje.dk` fjernet fra `rendetalje-worker` (blokerede Pages)
- **Pages aktiveret** — `rendetalje.dk` nu custom domain på Cloudflare Pages projekt `rendetalje`
- **DNS opdateret** — CNAME `@ → rendetalje.pages.dev` tilføjet automatisk

---

## Arkitektur

```
rendetalje.dk (Cloudflare Pages)
├── React app (static files)
├── /api/quote → functions/api/quote.ts (Pages Functions)
└── /kontakt, /services/* → SPA routing (fallback to index.html)
```

**Før:** Worker-only (kun API, ingen hjemmeside)  
**Efter:** Pages med Functions (hjemmeside + API)

---

## Deploy kommando

```bash
npm run build
npx wrangler pages deploy dist --project-name rendetalje
```

---

## Filstruktur

| Fil | Formål |
|-----|--------|
| `functions/api/quote.ts` | Kontaktformular API (email via Resend) |
| `src/routes/Contact.tsx` | Kontaktformular frontend |
| `dist/` | Build output (deployes til Pages) |
| `wrangler.toml` | Pages config (`pages_build_output_dir = "dist"`) |

---

## Fejl der er løst

| Fejl | Årsag | Løsning |
|------|-------|---------|
| 405 Method Not Allowed | Worker brugte `onRequestPost` eksport | Omskrev til `onRequest` med method-check |
| 404 på /kontakt | Worker serve kun API, ikke SPA | Migreret til Pages med SPA fallback |
| 404 på /favicon.ico | Browsers auto-requester .ico | Tilføjet redirect til logo.png |
| CORS fejl | Hardcoded origin | Dynamisk origin whitelist |

---

## DNS Status

- **rendetalje.dk** → CNAME → rendetalje.pages.dev ✅
- **www.rendetalje.dk** → CNAME → rendetalje.pages.dev ✅

Cloudflare viser "Initializing" (op til 48 timer, typisk få minutter).

---

## Miljøvariabler (Cloudflare Dashboard)

Sæt disse i Pages projektet:
- `RESEND_API_KEY` — API nøgle fra Resend
- `QUOTE_DESTINATION_EMAIL` — Hvor mails sendes til (default: info@rendetalje.dk)
- `FROM_EMAIL` — Afsender email (default: info@rendetalje.dk)

---

## Test kommando

```bash
# Test API
curl -X POST https://rendetalje.dk/api/quote \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","phone":"12345678","email":"test@test.com","type":"Test"}'
```

---

*Sidst opdateret: 13. april 2026*

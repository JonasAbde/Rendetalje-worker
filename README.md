# Rendetalje Next-Gen Website

Dette repository indeholder den nye, konverteringsoptimerede hjemmeside for Rendetalje.dk. Siden er bygget med fokus på tillid, hastighed og en klar "Få et tilbud"-struktur.

## Teknisk Stack
- **Frontend:** React, Vite, React Router, Tailwind CSS, Framer Motion
- **Backend/API:** Cloudflare Pages Functions (Workers)
- **Hosting:** Cloudflare Pages
- **Email Afsendelse:** Resend API

## Projektstruktur
- `/src/content/`: Al tekst, priser, services og virksomhedsinfo er samlet her. Ret i disse filer for at opdatere indholdet på siden.
- `/src/routes/`: Siderne (Forside, Om os, Services, Priser, Kontakt, etc.).
- `/src/components/`: Genbrugelige UI-komponenter og layout (Header, Footer).
- `/functions/api/`: Cloudflare Worker endpoints (f.eks. `/api/quote` til kontaktformularen).
- `/public/`: Statiske filer som logo (`logo.png`).

## Udvikling (Lokalt)

1. Installer afhængigheder:
   ```bash
   npm install
   ```

2. Start udviklingsserveren:
   ```bash
   npm run dev
   ```

## Deployment (Cloudflare Pages)

Projektet er klargjort til deployment på Cloudflare Pages.

1. Forbind dit GitHub repository til Cloudflare Pages.
2. Vælg framework preset: **Vite** (eller React).
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Tilføj miljøvariabler (Environment Variables) i Cloudflare dashboardet:
   - `QUOTE_DESTINATION_EMAIL`: Den email, leads skal sendes til (f.eks. `info@rendetalje.dk`).
   - `RESEND_API_KEY`: Din API nøgle fra Resend.com til at sende emails.
   - `PUBLIC_SITE_URL`: Hjemmesidens URL.

API-kald til `/api/quote` håndteres automatisk af Cloudflare Pages Functions via filen i `/functions/api/quote.ts`.

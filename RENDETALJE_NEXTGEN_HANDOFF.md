# Rendetalje Next-Gen Website Handoff v1

Repo: `jonasabde/rendetalje-worker`  
Deployment target: Cloudflare (Workers + static frontend)  
Status: Build-ready handoff  
Owner: Jonas / Rendetalje

## 1. Goal
Build a modern, high-trust service website for Rendetalje that converts visitors into qualified quote requests.

This is not a discount cleaning site.  
This is a professional local service brand focused on detail, clear agreements, and stable quality.

Primary conversion goal:
- User submits “Få et tilbud” form

Secondary goals:
- User calls
- User emails
- User understands service, pricing logic, geography, and process without confusion

## 2. Locked business facts
Use these as source-of-truth in v1:

- Company: Rendetalje
- Address: Gammel Viborgvej 40, 8381 Tilst
- CVR: 45564096
- Phone: +45 22 65 02 26
- Email: info@rendetalje.dk
- Domain: rendetalje.dk

## 3. Positioning
Primary positioning:

> Professionel rengøring i Aarhus og omegn med fokus på detaljen, klare aftaler og stabil kvalitet.

Brand promise:

> Vi møder op, gør arbejdet ordentligt og kommunikerer klart.

Tone:
- direct
- calm
- trustworthy
- professional
- local

Avoid:
- corporate fluff
- discount language
- exaggerated claims
- vague “premium” copy without substance

## 4. Public geography wording
Use this exact public wording:

> Vi hjælper kunder i Aarhus og omegn. Ved større eller faste opgaver kører vi også uden for Aarhus efter aftale.

## 5. Core services
Lock these service categories in v1:

1. Fast rengøring
2. Flytterengøring
3. Hovedrengøring
4. Erhvervsrengøring

Optional extra services to mention inside service detail pages:
- ovn
- køleskab/fryser
- skabe/skuffer
- indvendige vinduer
- afkalkning
- fokusområder efter aftale

## 6. Pricing foundation
Lock these:

- Hourly rate: 349 kr/time inkl. moms
- Minimum price: 698 kr inkl. moms

Public pricing logic:
- fast price when possible
- estimate when necessary
- clear logic always

Public wording:

> Vores timepris er 349 kr. inkl. moms, og minimumsprisen er 698 kr. inkl. moms. Den endelige pris afhænger af opgavens type, størrelse og niveau. Ved større eller mere særlige opgaver giver vi et konkret tilbud på forhånd.

Payment logic:
- Recurring/fixed clients: typically monthly combined invoice
- One-off / move-out cleaning: payment within 24 hours after completed task unless otherwise agreed

## 7. Equipment and products
Lock this as standard:

> Vi medbringer selv udstyr og svanemærkede rengøringsprodukter.

## 8. Access model
Use this wording:

> Adgang aftales altid inden første besøg. Det kan ske ved, at du er hjemme, via nøgleboks, via aftalt nøgleplacering eller ved at vi opbevarer et nøglesæt efter aftale. Hvis adgangsforhold ændres, skal det meddeles inden næste planlagte besøg.

## 9. Complaint / fix policy
Use this wording:

> Hvis du ikke er tilfreds med resultatet, skal du kontakte os hurtigst muligt på telefon eller mail. Vi gennemgår forholdene og aftaler en konkret udbedring, hvis der er noget, der skal rettes.

## 10. Cancellation / changes wording
Use this wording:

> Afbud eller ændringer bedes meddelt hurtigst muligt og helst pr. telefon på +45 22 65 02 26. Ved ændringer samme dag skal du ringe.

## 11. Product strategy
Site strategy is quote-first, not full instant booking.

Primary CTA:
- Få et tilbud

Secondary CTAs:
- Ring til os
- Send en forespørgsel
- Se vores services

Do not build a heavy checkout flow in v1.  
Do not build misleading instant booking for variable work.

## 12. Sitemap
Lock this sitemap:

- `/`
- `/om-os`
- `/services`
- `/services/fast-rengoering`
- `/services/flytterengoering`
- `/services/hovedrengoering`
- `/services/erhvervsrengoering`
- `/priser`
- `/faq`
- `/kontakt`
- `/handelsbetingelser`
- `/privatlivspolitik`
- `/cookiepolitik`

## 13. Homepage structure
### Hero
**H1**  
Professionel rengøring i Aarhus med fokus på detaljen

**Subcopy**  
Vi hjælper private og mindre virksomheder med fast rengøring, flytterengøring og hovedrengøring — med klare aftaler, stabil kvalitet og et resultat, vi kan stå inde for.

**Primary CTA**  
Få et tilbud

**Secondary CTA**  
Se vores services

### Trust strip
Short items:
- Klare aftaler
- Svanemærkede produkter
- Fast rengøring og engangsopgaver
- Aarhus og omegn

### Service overview
4 cards:
- Fast rengøring
- Flytterengøring
- Hovedrengøring
- Erhvervsrengøring

### Why choose us
3–4 blocks:
- Fokus på detaljen
- Klar kommunikation
- Stabil kvalitet
- Lokal service

### Pricing logic preview
Short explanation + CTA to `/priser`

### Process section
1. Send din forespørgsel
2. Vi vurderer opgaven
3. Du får pris eller næste skridt
4. Vi udfører arbejdet som aftalt

### Local area section
Short text about Aarhus and surrounding areas

### FAQ preview
4–6 short questions

### Final CTA block
Få et tilbud / Ring til os

## 14. About page
Purpose:
- trust
- seriousness
- local identity

Core copy:

> Hos Rendetalje handler rengøring ikke bare om at komme hurtigt igennem. Det handler om at levere et ordentligt resultat, skabe tryghed for kunden og holde et stabilt niveau fra gang til gang. Vi hjælper private hjem og mindre virksomheder i Aarhus og omegn med rengøringsløsninger, der er til at stole på — med fokus på detaljen, klare aftaler og professionel udførelse.

## 15. Service page template
Every service page should follow this structure:

1. Hero with clear H1
2. Short intro
3. What is typically included
4. Who it is for
5. How pricing is evaluated
6. How the process works
7. Service-specific FAQ
8. CTA to quote form

### Fast rengøring page focus
- stable recurring cleaning
- weekly / bi-weekly / by agreement
- private homes and selected business clients

### Flytterengøring page focus
- move-in / move-out cleaning
- quote-first
- price depends on size and condition

### Hovedrengøring page focus
- deeper one-off cleaning
- buildup / reset / first-time thorough cleaning

### Erhvervsrengøring page focus
- offices, showroom, small businesses
- clear scope
- recurring schedule
- monthly combined invoicing

## 16. Prices page
Structure:
- intro to pricing model
- hourly rate + minimum price
- typical examples or ranges
- factors that affect price
- CTA

Must include:
- 349 kr/time inkl. moms
- minimum 698 kr inkl. moms
- quote-first for larger/variable jobs

Avoid:
- fake “from” prices without explanation
- cluttered tables
- unclear exclusions

## 17. FAQ v1
Include these questions:

1. Hvordan beregner I prisen?
2. Medbringer I selv udstyr og rengøringsmidler?
3. Skal jeg være hjemme under rengøringen?
4. Kører I kun i Aarhus?
5. Tilbyder I fast rengøring?
6. Hvad gør jeg, hvis jeg ikke er tilfreds?

## 18. Contact / quote form
Fields:
- name
- phone
- email
- address
- postalCode
- city
- serviceType
- squareMeters
- frequency
- desiredDateOrWindow
- description
- imageUpload (optional, later if not in v1)

Submit CTA:
- Send forespørgsel

Success state:
- thank you message
- promise of quick follow-up
- show phone + email

## 19. Footer
Use this exact footer content:

Rendetalje  
Professionel rengøring med fokus på detaljen.  
Fast rengøring, flytterengøring, hovedrengøring og erhvervsrengøring i Aarhus og omegn.

Gammel Viborgvej 40, 8381 Tilst  
CVR 45564096  
+45 22 65 02 26  
info@rendetalje.dk

Footer links:
- Services
- Priser
- FAQ
- Kontakt
- Handelsbetingelser
- Privatlivspolitik
- Cookiepolitik

## 20. UI / design direction
Visual direction:
- clean
- light
- modern
- high trust
- strong readability
- one main accent color
- generous whitespace

Avoid:
- discount aesthetics
- visual noise
- too many colors
- fake luxury style
- over-animated interface

Recommended feel:
- polished local service brand
- simple premium utility
- mobile-first

## 21. Recommended stack for this repo
Target repo: `jonasabde/rendetalje-worker`  
Target platform: Cloudflare

Recommended app direction:
- React
- Vite
- React Router
- Tailwind CSS
- optional shadcn/ui for primitives
- Cloudflare Workers for backend/API endpoints
- Cloudflare Pages or Workers static asset serving depending on final setup

## 22. Recommended repo structure
Suggested structure:

```text
/
  src/
    app/
    components/
    routes/
    content/
    lib/
    styles/
  public/
  worker/
    api/
    utils/
  docs/
  package.json
  wrangler.toml
  vite.config.ts
  tailwind.config.ts
  tsconfig.json
  README.md
```

Suggested route/component split:
- `src/routes/home.tsx`
- `src/routes/about.tsx`
- `src/routes/services.tsx`
- `src/routes/service-fast.tsx`
- `src/routes/service-moveout.tsx`
- `src/routes/service-deep.tsx`
- `src/routes/service-business.tsx`
- `src/routes/prices.tsx`
- `src/routes/faq.tsx`
- `src/routes/contact.tsx`
- `src/routes/terms.tsx`
- `src/routes/privacy.tsx`
- `src/routes/cookies.tsx`

## 23. Content architecture recommendation
Keep structured content in code/content files, not spread across components.

Suggested content modules:
- `src/content/company.ts`
- `src/content/services.ts`
- `src/content/faq.ts`
- `src/content/pricing.ts`
- `src/content/areas.ts`
- `src/content/legal.ts`

This makes it easy to revise copy later without refactoring component logic.

## 24. Worker/API scope for v1
v1 backend scope:
- `POST /api/quote`
- optional `POST /api/contact`
- simple spam protection / honeypot / rate limit later
- send or forward lead to email destination later

Expected quote payload:
- name
- phone
- email
- address
- postalCode
- city
- serviceType
- squareMeters
- frequency
- desiredDateOrWindow
- description
- images? (later)
- sourcePage
- submittedAt

## 25. Cloudflare notes
Prepare repo for Cloudflare deployment later.

Need:
- `wrangler.toml` in repo
- environment variable strategy
- production-safe form handling
- no server assumptions tied to Node-only hosting

Suggested env placeholders:
- `QUOTE_DESTINATION_EMAIL`
- `TURNSTILE_SECRET_KEY` (later if added)
- `PUBLIC_SITE_URL`

If frontend and worker stay in one repo, keep deployment simple and avoid premature platform complexity.

## 26. SEO direction
Primary search intents:
- rengøring Aarhus
- fast rengøring Aarhus
- flytterengøring Aarhus
- hovedrengøring Aarhus
- erhvervsrengøring Aarhus

Rules:
- unique H1 per page
- strong local wording
- proper title/description per route
- services as real pages, not only homepage sections
- future schema support for LocalBusiness and FAQ

## 27. Build priorities
### P0
- homepage
- services overview
- fast cleaning page
- move-out cleaning page
- prices page
- contact / quote page
- footer
- legal pages baseline

### P1
- about page
- faq page
- deep cleaning page
- business cleaning page
- better local SEO copy
- testimonials/cases structure

### P2
- image upload in form
- smarter quote qualification
- analytics/events
- mini pricing helper

## 28. Acceptance criteria for v1
The build is good enough when:
- homepage clearly explains offer in under 10 seconds
- CTA path to quote is obvious on mobile and desktop
- services are split into real pages
- legal/footer/company info is complete
- pricing logic is clear and non-confusing
- contact/quote form is short but useful
- site feels trustworthy and modern
- repo is structured cleanly for Cloudflare deployment

## 29. Things to avoid
Do not build:
- a generic cleaning marketplace look
- a discount/cheap aesthetic
- instant booking for variable jobs
- giant walls of text in hero sections
- too many CTA variants
- overcomplicated backend for v1
- hidden or unclear company information

## 30. Final product direction
Rendetalje next-gen should feel like a modern, local, high-trust service brand that makes it very easy to understand the offer, request a quote, and trust the company.

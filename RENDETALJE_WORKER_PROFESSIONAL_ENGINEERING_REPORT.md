# Rendetalje Worker - Professional Engineering Report

**Repository:** `jonasabde/rendetalje-worker`  
**Target platform:** Cloudflare  
**Report type:** Engineering handoff + implementation report  
**Prepared for:** Jonas / Rendetalje  
**Status:** Ready for execution

## 1. Executive summary

This report defines the next-generation implementation direction for the Rendetalje website inside the repository `jonasabde/rendetalje-worker`.

The product should be built as a modern, high-trust, quote-first service website for a local cleaning company. The implementation should prioritize clarity, conversion, maintainability, and Cloudflare deployment readiness over unnecessary complexity.

The v1 objective is to launch a polished marketing and conversion website that:
- clearly explains the business in under 10 seconds
- presents real service pages
- communicates pricing logic without confusion
- exposes complete company information and legal pages
- captures qualified quote requests through a short structured form
- remains easy to extend later with stronger lead handling, analytics, testimonials, and operational tooling

## 2. Business objective

Primary business objective:  
Convert local traffic into qualified quote requests.

Secondary objectives:
- improve trust and professionalism versus low-trust local competitors
- reduce repetitive pre-sales clarification by explaining service, area, price logic, and process upfront
- create a clean foundation for future SEO, CRM, and workflow integrations

## 3. Product thesis

Rendetalje should not be presented as a cheap marketplace cleaner.  
It should be presented as a serious local service brand with:
- clear agreements
- reliable communication
- stable quality
- detail-oriented execution

That means the website must feel structured, calm, modern, and useful.

## 4. Locked business facts

These values are locked for v1 and should be treated as source-of-truth unless Jonas explicitly changes them.

- Company name: Rendetalje
- Address: Gammel Viborgvej 40, 8381 Tilst
- CVR: 45564096
- Phone: +45 22 65 02 26
- Email: info@rendetalje.dk
- Domain: rendetalje.dk

## 5. Locked positioning

Public positioning statement:  
**Professionel rengøring i Aarhus og omegn med fokus på detaljen, klare aftaler og stabil kvalitet.**

Brand promise:  
**Vi møder op, gør arbejdet ordentligt og kommunikerer klart.**

## 6. Locked service and pricing model

Core services:
- Fast rengøring
- Flytterengøring
- Hovedrengøring
- Erhvervsrengøring

Pricing model:
- Hourly rate: 349 kr/time inkl. moms
- Minimum price: 698 kr inkl. moms
- Fixed price where suitable
- Estimate where scope varies

Public geography wording:  
**Vi hjælper kunder i Aarhus og omegn. Ved større eller faste opgaver kører vi også uden for Aarhus efter aftale.**

Standard equipment wording:  
**Vi medbringer selv udstyr og svanemærkede rengøringsprodukter.**

## 7. v1 product scope

Included in v1:
- homepage
- services overview page
- 4 individual service pages
- prices page
- FAQ page
- contact / quote page
- legal pages
- footer with complete business info
- lightweight quote API
- Cloudflare-ready repo structure

Not required in v1:
- account area
- dynamic customer portal
- instant booking engine
- complex CMS
- advanced pricing calculator
- image upload if it slows launch materially

## 8. Recommended technical architecture

Recommended stack:
- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- simple component primitives
- Cloudflare Worker endpoints for forms

Recommended structure:

```text
/src
  /components
  /routes
  /content
  /lib
  /styles
  /types
/worker
  /api
  /utils
/public
/docs
```

Key principle:  
Keep business copy and page content in dedicated content modules, not buried inside JSX trees.

## 9. Recommended route map

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

## 10. Recommended source files

Suggested implementation files:

```text
/src/routes/home.tsx
/src/routes/about.tsx
/src/routes/services.tsx
/src/routes/service-fast.tsx
/src/routes/service-moveout.tsx
/src/routes/service-deep.tsx
/src/routes/service-business.tsx
/src/routes/prices.tsx
/src/routes/faq.tsx
/src/routes/contact.tsx
/src/routes/terms.tsx
/src/routes/privacy.tsx
/src/routes/cookies.tsx

/src/content/company.ts
/src/content/services.ts
/src/content/pricing.ts
/src/content/faq.ts
/src/content/areas.ts
/src/content/legal.ts

/worker/api/quote.ts
/worker/api/contact.ts
/worker/utils/validation.ts
/worker/utils/response.ts
```

## 11. Quote API scope

The first backend endpoint should be a structured quote submission endpoint.

Recommended endpoint:  
`POST /api/quote`

Suggested payload:
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
- sourcePage
- submittedAt

Validation requirements:
- required fields must be enforced
- email format validated
- phone basic validation
- string length limits
- sanitize payload before logging or forwarding

## 12. Content and UX strategy

The site should be quote-first, not instant-booking-first.

Primary CTA across the website:  
**Få et tilbud**

Supporting CTAs:
- Ring til os
- Se vores services
- Send forespørgsel

Important UX rules:
- homepage must explain what Rendetalje does immediately
- mobile experience must be first-class
- page sections must be short, structured, and scannable
- legal and company details must be easy to find
- form must be short but useful

## 13. Homepage specification

Required homepage structure:
1. Hero
2. Trust strip
3. Service overview cards
4. Why choose us
5. Pricing logic preview
6. Process section
7. Local area section
8. FAQ preview
9. Final CTA block

Locked hero copy:

**H1:** Professionel rengøring i Aarhus med fokus på detaljen  
**Subcopy:** Vi hjælper private og mindre virksomheder med fast rengøring, flytterengøring og hovedrengøring — med klare aftaler, stabil kvalitet og et resultat, vi kan stå inde for.  
**Primary CTA:** Få et tilbud  
**Secondary CTA:** Se vores services

## 14. Design direction

Visual direction should be:
- clean
- bright
- calm
- trustworthy
- readable
- mobile-first

Avoid:
- clutter
- discount styling
- visual chaos
- over-animation
- fake luxury

Recommendation:  
Use a restrained local-service visual system with strong spacing, clear hierarchy, and an obvious CTA rhythm.

## 15. Legal and operational copy requirements

The legal pages should reflect the actual business model, not generic filler.

Required operational wording to preserve:
- access is agreed before first visit
- cancellations/changes should be communicated quickly, ideally by phone
- dissatisfaction should lead to concrete review and remediation
- fixed customers are typically invoiced monthly
- one-off jobs may require faster payment timing

## 16. Cloudflare deployment readiness

The repo should be prepared early for Cloudflare deployment even if deployment happens later.

Required files/settings to establish:
- `wrangler.toml`
- environment variable strategy
- worker entrypoint or adapter plan
- static asset serving approach
- deployment-safe routing assumptions

Suggested environment variables:
- `QUOTE_DESTINATION_EMAIL`
- `PUBLIC_SITE_URL`
- `TURNSTILE_SECRET_KEY` (optional later)
- `CONTACT_DESTINATION_EMAIL` (optional)

## 17. Suggested implementation phases

### Phase 1 - Foundation
- initialize app structure
- add route map
- add content modules
- implement header/footer/layout
- implement homepage

### Phase 2 - Conversion pages
- build service pages
- build prices page
- build FAQ page
- build contact/quote page

### Phase 3 - API and legal
- add Worker quote endpoint
- validate payloads
- add legal pages
- wire form submission + success state

### Phase 4 - Quality pass
- mobile polish
- accessibility pass
- metadata pass
- empty/error/loading states
- copy tightening

### Phase 5 - Cloudflare prep
- wrangler configuration
- build validation
- route validation
- env docs
- production sanity check

## 18. Acceptance criteria

The implementation is acceptable when:
- a first-time visitor understands the offer fast
- the quote CTA is obvious on both desktop and mobile
- each service exists as a real page
- the pricing page is understandable and not misleading
- the quote form collects enough detail to be useful
- legal pages and footer are complete
- the repo remains clean and extensible
- the site is deployment-ready for Cloudflare without re-architecture

## 19. Risks to avoid

High-risk mistakes:
- building instant booking for services with highly variable scope
- scattering content across components without structure
- overbuilding backend complexity before launch
- shipping vague or incomplete company/legal information
- making the design look cheap or improvised
- hiding pricing logic instead of explaining it

## 20. Recommended next technical step

Immediate next step for engineering:  
Create the initial scaffold in `jonasabde/rendetalje-worker` with:
- route shell
- content modules
- shared layout
- homepage
- quote form stub
- worker endpoint placeholder
- wrangler config draft

## 21. Final conclusion

Rendetalje next-gen should launch as a clean, conversion-focused, Cloudflare-ready service website with strong local trust, clear pricing logic, proper legal grounding, and a structured repo that can grow without being rebuilt.

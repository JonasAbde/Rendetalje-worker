# Rendetalje Worker

A modern, high-trust service website for Rendetalje - a professional cleaning company in Aarhus, Denmark.

## Tech Stack

- **React** 18 - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icons
- **Cloudflare Workers** - API endpoints

## Project Structure

```
/src
  /components      # React components
  /content         # Content modules (company, services, pricing, etc.)
  /routes          # Page components
  /styles          # Global styles
  /types           # TypeScript types
  /lib             # Utility functions

/worker
  /api             # Worker API endpoints
  index.ts         # Worker entry point

/public            # Static assets
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format

# Check formatting
npm run format:check
```

## Cloudflare Deployment

```bash
# Deploy worker
npm run deploy

# Dev worker locally
npm run dev:worker
```

## Environment Variables

Set these in Cloudflare:

- `QUOTE_DESTINATION_EMAIL` - Where quote submissions are sent
- `CONTACT_DESTINATION_EMAIL` - Where contact forms are sent
- `TURNSTILE_SECRET_KEY` - Optional spam protection
- `PUBLIC_SITE_URL` - Production site URL

## Pages

- `/` - Homepage
- `/om-os` - About
- `/services` - Services overview
- `/services/fast-rengoering` - Regular cleaning
- `/services/flytterengoering` - Move-out cleaning
- `/services/hovedrengoering` - Deep cleaning
- `/services/erhvervsrengoering` - Commercial cleaning
- `/priser` - Pricing
- `/faq` - FAQ
- `/kontakt` - Contact / Quote form
- `/handelsbetingelser` - Terms
- `/privatlivspolitik` - Privacy policy
- `/cookiepolitik` - Cookie policy

## API Endpoints

- `POST /api/quote` - Submit quote request

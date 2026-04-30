# Changelog

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

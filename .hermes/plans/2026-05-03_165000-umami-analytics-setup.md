# Plan: Umami Analytics — Install on VPS + Integrate with Rendetalje.dk

**Dato:** 2026-05-03
**Status:** Plan (ingen eksekvering)
**Goal:** Erstat Plausible.io cloud med self-hosted Umami på VPS, så vi får gratis event-tracking med goals.

---

## Context / Assumptions

- **VPS:** OVH, Ubuntu 24.04, IP 57.128.215.250
- **DNS:** Cloudflare (nameservers: fonzie/irma.ns.cloudflare.com)
- **Cloudflare token:** Eksisterer på `/home/ubuntu/.hermes/cloudflare-rendetalje-token` — kan administrere DNS for rendetalje.dk
- **Nginx:** Aktiv, kører med 3 sites (foodtruck, vipps-webhook, webtjek) — kan tilføje et nyt
- **PostgreSQL:** Kører, accepterer connections
- **Node.js:** v24.15.0
- **Website:** rendetalje-worker repo på GitHub, deploy via Cloudflare Pages (git push)
- **Nuværende analytics:** `<script defer data-domain="rendetalje.dk" src="https://plausible.io/js/script.js">` i `index.html`

### Umami valgt frem for
- Plausible cloud (€9/md)
- GoatCounter (mindre modent, færre features)
- Cloudflare Web Analytics (ingen custom events)

---

## Proposed Approach

1. Installer Umami direkte (uden Docker) via npm
2. PostgreSQL database + user oprettes på eksisterende PostgreSQL-instans
3. Umami kører som systemd service bag Nginx reverse proxy
4. DNS record `stats.rendetalje.dk` oprettes via Cloudflare API → peger på VPS
5. SSL via Cloudflare (Full — vores nuværende opsætning)
6. Script-tag i `index.html` skiftes fra plausible.io til `stats.rendetalje.dk`
7. Goals oprettes via Umami API efter installation
8. CSP i `public/_headers` opdateres til at tillade `stats.rendetalje.dk`

---

## Step-by-Step Plan

### Step 1: PostgreSQL — database + user

```bash
sudo -u postgres psql -c "CREATE DATABASE umami;"
sudo -u postgres psql -c "CREATE USER umami WITH PASSWORD '<generer_password>';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE umami TO umami;"
sudo -u postgres psql -d umami -c "GRANT ALL ON SCHEMA public TO umami;"
```

Password gemmes i `/home/ubuntu/.hermes/secrets/umami-db-password`
Database URL: `postgresql://umami:<password>@localhost:5432/umami`

**Risiko:** PostgreSQL kører kun på localhost — ingen eksponering.

### Step 2: Installer Umami

```bash
cd /opt
sudo git clone https://github.com/umami-software/umami.git
cd umami
sudo git checkout v2.17.0  # specifik version
sudo chown -R ubuntu:ubuntu /opt/umami
npm install
```

Byg frontend + kør database migration.

**Risiko:** Umami v2 kræver Node 18+ — vi har v24, så OK.

### Step 3: Konfigurer Umami

Opret `/opt/umami/.env`:

```
DATABASE_URL=postgresql://umami:<password>@localhost:5432/umami
HOSTNAME=127.0.0.1
PORT=3001
```

Umami kører på localhost:3001 — kun tilgængelig via Nginx.

### Step 4: Build + Database migration

```bash
cd /opt/umami
npm run build
npx dotenv -- npx prisma migrate deploy
npx dotenv -- npx tsx scripts/seed.ts  # opretter default admin
```

Default admin: `admin` / `umami` — skiftes straks efter første login.

### Step 5: Systemd service

Opret `/etc/systemd/system/umami.service`:

```ini
[Unit]
Description=Umami Analytics
After=network.target postgresql.service

[Service]
Type=simple
User=ubuntu
WorkingDirectory=/opt/umami
ExecStart=/usr/bin/npm run start
Restart=always
RestartSec=5
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now umami
```

### Step 6: Nginx reverse proxy

Opret `/etc/nginx/sites-available/stats.rendetalje.dk`:

```nginx
server {
    listen 80;
    server_name stats.rendetalje.dk;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name stats.rendetalje.dk;

    # Cloudflare SSL — bruger vores eksisterende cert eller Cloudflare Full
    ssl_certificate /etc/nginx/ssl/cloudflare.crt;
    ssl_certificate_key /etc/nginx/ssl/cloudflare.key;

    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

**Bemærk:** SSL opsætning afhænger af vores nuværende cert-setup — kan være Cloudflare Origin CA eller Let's Encrypt. Skal verificeres under udførsel.

```bash
sudo ln -s /etc/nginx/sites-available/stats.rendetalje.dk /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

### Step 7: Cloudflare DNS record

Brug Cloudflare API token til at oprette A record:

```
Type: A
Name: stats
Content: 57.128.215.250
Proxied: true (orange cloud — Cloudflare proxy)
TTL: Auto
```

### Step 8: Initial setup — admin password + site

1. Log ind på `https://stats.rendetalje.dk` — default `admin` / `umami`
2. Skift admin password
3. Tilføj site: `rendetalje.dk` (domain)
4. Kopiér tracking-scriptet (det er identisk i struktur med Plausible's)

### Step 9: Opdater rendetalje-worker index.html

Skift script-tag i `index.html`:

```diff
- <script defer data-domain="rendetalje.dk" src="https://plausible.io/js/script.js"></script>
+ <script defer data-domain="rendetalje.dk" src="https://stats.rendetalje.dk/script.js"></script>
```

Opdatér CSP i `public/_headers`:

```diff
- script-src 'self' 'unsafe-inline' https://plausible.io https://static.cloudflareinsights.com
+ script-src 'self' 'unsafe-inline' https://stats.rendetalje.dk https://static.cloudflareinsights.com
```

### Step 10: Opret goals via Umami API

Umami har et REST API til goals. Efter login kan jeg hente et token og oprette:

```
POST /api/sites/:id/events
{
    "name": "CTA Click"
}
```

Alle 5 goals:
- `CTA Click`
- `Quick Quote Submit`
- `Contact Form Submit`
- `Form Error`
- `Price Calculator Used`

### Step 11: Verifikation

1. `systemctl status umami` — kører?
2. `curl -s http://127.0.0.1:3001/health` — svarer?
3. Browser: `https://stats.rendetalje.dk` — dashboard loader?
4. `npm run build` i rendetalje-worker — OK?
5. Browser: `https://rendetalje.dk` — ingen console errors?
6. Custom events sendes — tjek i Umami dashboard live view

---

## Files der ændres

| Fil | Ændring |
|-----|---------|
| `/opt/umami/.env` | **NY** — database URL + port |
| `/etc/systemd/system/umami.service` | **NY** — systemd service |
| `/etc/nginx/sites-available/stats.rendetalje.dk` | **NY** — Nginx config |
| `/etc/nginx/sites-enabled/stats.rendetalje.dk` | **NY** — symlink |
| `/home/ubuntu/rendetalje-worker/index.html` | **ÆNDRING** — script src fra plausible.io → stats.rendetalje.dk |
| `/home/ubuntu/rendetalje-worker/public/_headers` | **ÆNDRING** — CSP opdateret |
| `/home/ubuntu/.hermes/secrets/umami-db-password` | **NY** — database password |
| `~/.hermes/cloudflare-rendetalje-token` | **BRUGES** — til DNS record |

---

## Tests / Validation

| Test | Forventet |
|------|-----------|
| `curl localhost:3001` | HTML svarer |
| `systemctl is-active umami` | `active` |
| Browser: stats.rendetalje.dk | Dashboard loader |
| `npm run build` (i rendetalje-worker) | 0 fejl |
| Browser: rendetalje.dk console | 0 errors |
| Umami dashboard live | Events vises ved interaktion |

---

## Risks, Tradeoffs, Open Questions

### Risks
| Risiko | Sandsynlighed | Mitigation |
|--------|---------------|------------|
| PostgreSQL password i plaintext på disk | Medium | Filen er chmod 600, kun Hermes har adgang |
| Umami v2 API ændringer | Lav | Lock til specifik version |
| Node.js memory leak | Lav | systemd restart ved crash |
| Ingen backup af Umami database | Medium | Overvej om data er kritisk — hvis ja, tilføj pg_dump cron |

### Tradeoffs
| Valg | Rationale |
|------|-----------|
| Umami over Plausible | Gratis, self-hosted, samme event-model |
| Direkte installation (ikke Docker) | PostgreSQL allerede installeret — undgår Docker overhead |
| Cloudflare proxy (orange cloud) | Skjuler VPS IP, SSL gratis, caching |
| stats.rendetalje.dk subdomæne | Ryddig, skiller analytics fra website |

### Open Questions (skal afklares før eksekvering)

1. **SSL cert** — bruger vi Cloudflare Origin CA eller Let's Encrypt på VPS? Skal verificeres i eksisterende Nginx config.
2. **Umami admin adgang** — skal Jonas have en email + password sat op, eller kun local admin?
3. **Data retention** — Umami gemmer ubegrænset som default. Skal vi sætte en grænse?
4. **Backup** — skal Umami data backup'es, eller er det okay at miste analytics ved VPS-nedbrud?

---

## Deployment order

```
1. PostgreSQL database + user
2. Installer Umami (git clone + npm install)
3. Konfigurer .env
4. Build + database migration
5. Systemd service
6. Verificér localhost:3001
7. Nginx reverse proxy
8. Cloudflare DNS record
9. Verificér stats.rendetalje.dk
10. Initial setup (admin password + site creation)
11. Opdater index.html + CSP i rendetalje-worker
12. Build + push rendetalje-worker
13. Opret goals via Umami API
14. End-to-end verifikation
```

---

## Efter planen

Når Umami er oppe og goals er skabt:
- Fjern `plausible.io` fra CSP helt
- Opdater handoff-filen med den nye analytics-infrastruktur
- Slet Plausible script hvis ingen konto var aktiv (spildt HTTP request)

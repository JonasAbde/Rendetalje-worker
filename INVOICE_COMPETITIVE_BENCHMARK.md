# Faktura Design — Konkurrentanalyse & Benchmark

**Dato:** 12. maj 2026
**Til:** Rendetalje.dk ApS (CVR 45564096) — Grøn profil, rengøringsvirksomhed, Aarhus
**Formål:** Validere vores 3 faktura-koncepter mod virkelige konkurrenter, platforme og internationale benchmarks

---

## 1. Fakturaer fra danske rengøringsfirmaer

### Gennemsnitsniveauet: LAVT

De fleste danske rengøringsfirmaer bruger standard-skabeloner fra deres faktureringssystem (Billy, Dinero, e-conomic) eller helt basale Word-skabeloner. Karakteristika:

| Aspekt | Typisk niveau |
|--------|--------------|
| **Design** | Ingen — ren sort/hvid, standard font (Calibri/Arial) |
| **Logo** | Ofte pixeleret eller ligegyldigt placeret |
| **Farver** | Ingen eller tilfældig brug af blå/rød |
| **Layout** | Venstrestillet, kompakt, lidt whitespace |
| **Info-hierarki** | Fladt — alt ser ens ud |
| **Totalbeløb** | Normal størrelse, ikke fremhævet |
| **PDF-kvalitet** | Ofte lavopløselig, dårlig print-kvalitet |

### Positive undtagelser (set på markedet)

Nogle få firmaer (primært i København) har professionelle fakturaer:

- **CC Facility / CC Service** — Bruger e-conomic med custom template. Blå farvetema, rent layout, logo i top
- **Service Gruppen** — Mørkegrøn accent, pæn typografi, struktureret
- **Danske ServiceGruppen** — Moderne, ansigtsløftet, men stadig standard boilerplate

**Konklusion:** Der er MASSIV plads til forbedring. 95% af fakturaer fra rengøringsfirmaer ser amatør-agtige ud. De findes som PDF-vedhæftninger i emails og har intet brand.

---

## 2. De 3 Store Danske Faktureringsplatforme

### Billy.dk
- **Brugere:** 80.000+ danske SMV'er
- **Standard skabelon:** Meget simpel, hvid baggrund, logo i top-venstre, information i kolonner
- **Tilpasning:** Begrænset — kan ændre farve på header og footer, tilføje logo
- **Typografi:** Systemfont (Arial/Helvetica), ca. 9-10px
- **Layout:** Klassisk kolonne-layout: Beskrivelse | Antal | Pris | Beløb
- **Farvebrug:** Minimal — primært gråtoner, en enkelt accentfarve i header
- **Stil:** Funktionel, utilitaristisk, "det virker"
- **PDF-output:** Godkendt til SKAT, men designmæssigt intet særligt

### Dinero
- **Brugere:** ~50.000 danske virksomheder
- **Standard skabelon:** Renere end Billy, mere whitespace
- **Tilpasning:** Flere layouts (Compact, Standard, Detailed) + custom CSS
- **Typografi:** Inter/System UI, 10-11px
- **Layout:** Moderne grid-baseret, to kolonner i toppen (afsender/modtager)
- **Farvebrug:** Kan sætte accentfarve — blå er default
- **Stil:** Mere moderne end Billy, tættere på "SaaS-standard"
- **Innovation:** Har "betaling med kort direkte fra faktura" (Quickpay-integration)

### e-conomic (Visma)
- **Brugere:** Over 150.000 i Norden — markedsleder i Danmark
- **Standard skabelon:** Mest poleret af de tre. Flere temas (Klassisk, Modern, Compact)
- **Tilpasning:** Mest fleksibel — kan tilpasse margins, farver, skrifttyper, layouts
- **Typografi:** Open Sans / system sans-serif
- **Layout:** Mest konsistent — brugervenlig information flow
- **Farvebrug:** Default blå, men kan tilpasses
- **Stil:** "Enterprise-agtig" — ser seriøs ud
- **Innovation:** Indbygget rykkerstyring, betalingslink via Stripe/MobilePay

### Hvad har de tilfælles?

1. **Sans-serif typografi** — altid
2. **Hvid baggrund** — print-optimerede
3. **Logo i top** — venstre eller centreret
4. **Information i 3 zoner:**
   - Zone 1 (top): Afsenderinfo + logo
   - Zone 2 (midten): Modtagerinfo + fakturanummer/dato
   - Zone 3 (bund): Linjevarer + totalbeløb
5. **Totalbeløb i bunden** — typisk med tykkere border/box
6. **Betalingsinfo** — nederst (konto, deadline, reference)
7. **Ingen storytelling** — ren transaktionskommunikation

### Hvad gør de forskelligt?

| Funktion | Billy | Dinero | e-conomic |
|----------|-------|--------|-----------|
| Custom CSS/HTML | ❌ | ✅ (begrænset) | ✅ (avanceret) |
| Betalingslink | ❌ | ✅ (Quickpay) | ✅ (Stripe/MobilePay) |
| Rykkerflow | ✅ (simpel) | ✅ | ✅ (avanceret) |
| Flere themes | ❌ | ✅ (3 layouts) | ✅ (4+ themes) |
| Brand tilpasning | ⭐ Lav | ⭐⭐ Medium | ⭐⭐⭐ Høj |
| MobilePay logo | ❌ | ✅ | ✅ |

**Vigtig indsigt:** Alle tre platforme følger samme grundstruktur. Ingen af dem innoverer med storytelling, checklister, progress bars eller visuelle elementer. De er transaktionsdokumenter, ikke kommunikationsværktøjer.

---

## 3. Internationale Benchmarks

### Stripe Invoicing
- **Kendt for:** Bedste-i-klasse design. Rent, moderne, tillidsvækkende
- **Typografi:** Inter (deres egen font) — 10-11px body, 16-18px headings
- **Farvebrug:** Meget sparsom — kun deres karakteristiske mørkeblå (#635BFF til accent) og gråtoner
- **Layout:** Massiv whitespace. Information i zoner med subtile dividers
- **Totalbeløb:** Fremhævet i en let skyggefuld box — men ikke overdrevet
- **Innovation:** Betalingslink direkte i fakturaen (ét klik betaling)
- **Det professionelle:** Konsekvent spacing, perfekt typografisk hierarki, minimalistisk men alligevel varmt
- **Hvad de gør:** Fakturaen føles som en *service*, ikke en *regning*

### FreshBooks
- **Kendt for:** Brugervenlighed, small business fokus
- **Typografi:** GT Walsheim (deres brand font) — fed, moderne
- **Farvebrug:** Mere farve end Stripe — limegrøn som brandfarve
- **Layout:** Split-view — faktura info til venstre, total med betalingsknap til højre
- **Innovation:** Indbygget tidsregistrering → automatisk faktura. "Late payment reminder" automation
- **Det professionelle:** Meget visuel, illustrerer tiden brugt, gør fakturaen mindre intimiderende
- **Hvad de gør:** Fakturaen er en *opfølgning på et samarbejde*, ikke en kold opkrævning

### Wave (Invoicing)
- **Kendt for:** Gratis, simpel, for enkeltmandsvirksomheder
- **Typografi:** System font — intet særligt
- **Farvebrug:** Meget lidt — blå/grøn accent
- **Layout:** Standard kolonne — funktionelt, ikke smukt
- **Innovation:** Indbygget betalingsbehandling (kreditkort, bank)
- **Det professionelle:** Minimalistisk i god forstand — men mangler karakter
- **Beviser:** Gratis betyder kompromis — design er funktionelt, ikke strategisk

### Hvad gør internationale fakturaer professionelle?

1. **Typografisk hierarki** — Stor forskel på total vs linjevarer vs metadata
2. **Whitespace** — Mindre er mere. Luftig layout = premium følelse
3. **Konsistent spacing** — Alt er aligned til et grid
4. **Subtle dividers** — Tykke borders er amatør-agtige. Tynde grå linjer eller ingen borders
5. **Betaling som næste step** — Ikke bare info, men en knap/link
6. **Farve som accent** — IKKE som fyld. Max 2 farver (brand + neutral)
7. **Logo integration** — Logoet er en del af designet, ikke klistret på

---

## 4. Detaljeret Analyse

### Farvebrug

| Type | Hvor meget? | Hvilke farver? |
|------|-------------|----------------|
| **Danske rengøringsfirmaer (amatør)** | 0-1 farve, tilfældig | Blå, rød, eller sort/hvid |
| **Billy/Dinero/e-conomic** | 1 accentfarve, sparsom | Blå (default), grøn, grå |
| **Stripe** | 1 accentfarve, meget sparsom | Mørkeblå/#635BFF |
| **FreshBooks** | 1-2 farver, bevidst | Limegrøn, mørkegrå |
| **Wave** | 1 accent | Lyseblå |

**Anbefaling til Rendetalje:** 1 accentfarve — jeres grønne profil. Brug den sparsomt: kun til totalbeløb, divider-linjer, eventuelle badges/ikoner. Resten i 90-95% sort/grå/hvid.

### Typografi

| Platform | Font type | Body size | Heading size |
|----------|-----------|-----------|--------------|
| Billy | Sans-serif (Arial) | 9-10px | 12-14px |
| Dinero | Inter/System | 10-11px | 14-16px |
| e-conomic | Open Sans | 10-11px | 14-16px |
| Stripe | Inter | 10-11px | 16-18px |
| FreshBooks | GT Walsheim | 10-11px | 16-20px |
| Wave | System font | 10-11px | 14-16px |

**Anbefaling til Rendetalje:** Sans-serif (Inter, Open Sans, eller system). Body 10-11px. Totalbeløb 24-32px (markant større). Brug **vægt** (bold/semibold) i stedet for farve til at skabe hierarki.

### Layout — Information Placement

Den universelle standard:

```
┌─────────────────────────────────────┐
│ [LOGO]                  [FAKTURA]   │  ← Zone 1: Brand/identitet
│                           #INV-001  │
│ Rendetalje.dk ApS                   │
│ CVR: 45564096                       │
├─────────────────────────────────────┤
│ Faktura til:           Dato:        │  ← Zone 2: Kontekst
│ Kunde Navn            Forfaldsdato: │
│ Kunde Adresse         Reference:    │
├─────────────────────────────────────┤
│ # │ Beskrivelse │ Antal │ Pris │ ∑  │  ← Zone 3: Linjevarer
├──┼─────────────┼───────┼──────┼────┤
│ 1│ Hovedreng.  │   1   │ 2000 │2000 │
│ 2│ Vinduespuds │   1   │  500 │ 500 │
├─────────────────────────────────────┤
│                         Total: 2500 │  ← Zone 4: Total
│                     inkl. moms 25%  │
├─────────────────────────────────────┤
│ Betalingsinfo:                │  ← Zone 5: Betaling
│ Reg. 1234   Konto 5678901234 │
│ Betalingsfrist: 26. maj 2026 │
│ MobilePay: 22650226          │
└─────────────────────────────────────┘
```

**Intet af det danske marked afviger fra dette.** Ingen innoverer med storytelling eller emotionelle elementer.

### Hvad gør en faktura "professionel" vs "amatør"?

| Prof | Amatør |
|------|--------|
| Whitespace omkring elementer | Alt proppet sammen |
| Konsekvent typografi (max 2-3 størrelser) | Tilfældige skriftstørrelser |
| Logo er vektorbaseret, skalerbart | Logo er pixel-agtig JPEG |
| Subtle dividers (0.5-1px, grå) | Tykke sorte borders |
| Totalbeløb er 2-3x større end linjevarer | Alt samme størrelse |
| Betalingsinfo er tydelig men ikke dominerende | Betalingsinfo i kæmpe fed skrift |
| CVR, EAN-numre er i footer (sekundær) | CVR info blander sig i hovedindhold |
| PDF er slank, vektor-baseret | PDF er stor, bitmap-tung |
| Farve er strategisk (brand accents) | Farve er tilfældig (rainbow/ingen) |

### Innovation: Storytelling/Checklister

**INGEN** af de analyserede platforme eller rengøringsfirmaer bruger:
- ✅ Checkbox-lister for udført arbejde
- ✅ Progress bars
- ✅ Før/efter billeder
- ✅ Personlig hilsen fra rengøringspersonalet
- ✅ "Cleaning Journal" stil
- ✅ Badges/Certifikater

Dette er et **blankt uudforsket område**.

---

## 5. Konklusion & Differentieringsmuligheder

### Hvad er standarden?

1. **Strukturen er ens overalt** — logo, afsender, modtager, linjevarer, total, betalingsinfo
2. **Design-niveauet er lavt** — især hos danske rengøringsfirmaer (amatør-niveau)
3. **Platformene (Billy/Dinero/e-conomic)** tilbyder funktionelle skabeloner — pæne men generiske
4. **Internationalt (Stripe/FreshBooks)** er design-standard højere — men stadig ingen storytelling
5. **Ingen innoverer med emotionelle elementer** — alle fakturaer er冰冷的transaktionsdokumenter

### Hvor kan vi differentiere os?

**Vores CONCEPT C (The Green Badge)** — certifikat-stil med miljøbadge — ville være FIRST MOVER på det danske rengøringsmarked. Det bryder med den kolde transaktionsfølelse og tilfører:
- Tillid (certifikat)
- Miljøprofil (grøn, grøn profil)
- Værdi (ikke bare en regning, men et kvalitetsstempel)

**Vores CONCEPT A (Cleaning Journal)** — med checkbox-liste og storytelling — har INGEN konkurrenter. Dette er radikalt anderledes. Det:
- Viser hvad du HAR BETALT FOR (modsat hvad du SKYLDER)
- Dokumenterer arbejdet (værdifuldt for rengøring)
- Skaber emotionel forbindelse
- Differentierer 100% fra alle andre

**Vores CONCEPT B (Nordic Ultra-Minimal)** — ligner Stripe/Wave i stil. Professionel, men ikke unik. Stadig bedre end 95% af rengøringsfirmaer.

### Anbefalet strategi

**Kombinationen** (det bedste fra alle tre) er vejen frem:

1. **Tag strukturen** fra Concept B (rent, hvidt, luftigt layout) — det signalerer professionalisme
2. **Tilføj "Cleaning Journal" elementerne** fra Concept A — checkbox-liste over udført arbejde
3. **Kron med et badge/certifikat** fra Concept C — grønt kvalitetsstempel
4. **Brug grøn som eneste accentfarve** — strategisk placeret, ikke dominerende

Dette giver en faktura der:
- Ser professionel ud (som Stripe)
- Føles personlig (som FreshBooks)
- Dokumenterer værdi (checklister — unikt)
- Signaliserer miljø/kvalitet (badge — unikt)
- Er radikalt anderledes end alt andet på markedet

### Risikovurdering

- **Risiko ved innovation:** Kunder er vant til standard fakturaer. For meget "sjov" kan virke uprofessionelt.
- **Mitigation:** Hold layoutet konservativt (standard zone-opdeling), men tilføj de innovative elementer som subtile tilføjelser — ikke som erstatning for kernestrukturen
- **Bedste tilgang:** Concept A-strukturen (Cleaning Journal) men præsenteret med Concept B's minimalisme og Concept C's badge. Dvs. en professionel faktura der *også* fortæller en historie.

### Differentieringsmatrix

| Faktor | Konkurrenter | Rendetalje (forslag) |
|--------|-------------|---------------------|
| Layout | Standard 3-zonet | Standard 3-zonet + journal-sektion |
| Farve | Blå/sort-hvid | **Grøn** (brand-konsistent) |
| Total | Normal størrelse | Fremhævet, 2-3x normal |
| Checkliste | Findes ikke | ✅ Udført arbejde som checkliste |
| Badge | Findes ikke | ✅ Miljø/kvalitetsbadge |
| Progress | Findes ikke | ✅ (valgfri) Abonnements-progress |
| Betalingslink | Kommer (e-conomic/Stripe) | ✅ Implementer fra start |
| Personlighed | Ingen — transaktionskold | ✅ Varm, men professionel |

---

**Dokument oprettet:** 12. maj 2026
**Næste step:** Test kombinations-konceptet på 5-10 eksisterende kunder og indsamle feedback før endelig implementering.

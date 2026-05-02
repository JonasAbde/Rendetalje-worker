# Cleanup Plan — Dokumenter + Drift + Payroll + Vipps + 2026

**Status:** PLAN ONLY — no actions executed  
**Scope:** Rendetalje root-level folders  

---

## A. Dokumenter — foreslået omstrukturering

### Nye undermapper (skal oprettes)

| Mappe | Target parent | Begrundelse |
|-------|---------------|-------------|
| `Dokumenter/Sheets/` | `1XlBe9URNq_YBWY2XDsSuN2eS9QstyOYE` | Saml 4 drifts-sheets |
| `Dokumenter/Serviceaftaler/` | `1XlBe9URNq_YBWY2XDsSuN2eS9QstyOYE` | Saml kontrakter |
| `Dokumenter/Branding/` | `1XlBe9URNq_YBWY2XDsSuN2eS9QstyOYE` | Logo, visuelt |
| `Dokumenter/Internt/` | `1XlBe9URNq_YBWY2XDsSuN2eS9QstyOYE` | README, interne docs |
| `Dokumenter/Arkiv/` | `1XlBe9URNq_YBWY2XDsSuN2eS9QstyOYE` | Gamle arkiverede data |

Total: **5 nye mapper** at oprette.

### Filer der skal flyttes

| Source fil | ID | Target mappe | Action | Status |
|------------|----|-------------|--------|--------|
| Rendetalje - April 2026 Fakturering | Sheet (ID: sheet itself) | Dokumenter/Sheets/ | MOVE_FILE | ✅ READY_TO_MOVE |
| Rendetalje - Kundebaser & Økonomi | Sheet (ID: sheet itself) | Dokumenter/Sheets/ | MOVE_FILE | ✅ READY_TO_MOVE |
| Rendetalje - Operationsbase | Sheet (ID: sheet itself) | Dokumenter/Sheets/ | MOVE_FILE | ✅ READY_TO_MOVE |
| Rendetalje - Kunder (GAMMEL 2025 - arkiveret) | Sheet (ID: sheet itself) | Dokumenter/Arkiv/ | MOVE_FILE | ✅ READY_TO_MOVE |
| Rendetalje LOGO.png | `1hBWyfRVohhwv5sX8ITnUGvw9rT520HK6` | Dokumenter/Branding/ | MOVE_FILE | ✅ READY_TO_MOVE |
| rendetalje-automation-README.md | `1HzIx_glJ9HQqRqpGe0aqV0LkPPop_GAt` | Dokumenter/Internt/ | MOVE_FILE | ✅ READY_TO_MOVE |
| Better_Developers_Aftaleudkast_Tirsdag.pdf | `1SxKWNQtsi_xKnz77sMsLCyNPjp5KU2-1` | Dokumenter/Serviceaftaler/ | MOVE_FILE | ✅ READY_TO_MOVE |

**Total: 7 filer at flytte.**

### Dokumenter - Arkiv (stubs) — særlig vurdering

| Eksisterende undermappe | ID | Problem |
|-------------------------|----|---------|
| `Dokumenter - Arkiv (stubs)` | `15jh_kRKmS1pXtv5V6iZIQBWnbePHe6q5` | Indeholder 4 interne stubs: Noter Tanja, Vidensoversigt, Handoff, Worker Report |

**Forslag:** Behold den eksisterende Arkiv-mappe uændret. De 4 filer deri er relevante interne dokumenter og kan blive. Opret en ny `Dokumenter/Arkiv/` mappe til fremtidig arkivering.

**Alternativ:** Omdøb eksisterende `Dokumenter - Arkiv (stubs)` → `Dokumenter/Arkiv/` (kræver omdøbning — IKKE i denne plan).

**Status:** ❓ **NEEDS_JONAS_REVIEW** — to arkiv-mapper kan skabe forvirring

---

## B. Drift — behold struktur

| Nuværende | Handling | Status |
|-----------|----------|--------|
| `Drift/Status Hub/` (`1Hd010g3QBNE0TLE3kU4-M7IikSkenKcI`) | ✅ Beholdes urørt | ✅ |
| rendetalje-ops.md dublet (`1BUCgx-lWF05VHTVMxISRIZHUbSyc6q4Q`) | ⚠️ Dublet — foreslå flyt til `Dokumenter/Arkiv/Dubletter/` senere | ❓ NEEDS_JONAS_REVIEW |

**1 dublet:** `rendetalje-ops.md` findes i Status Hub med to forskellige file IDs (`1tzAbgUFnz5w9YKEOTHdKuXYlqTM4bYE3` og `1BUCgx-lWF05VHTVMxISRIZHUbSyc6q4Q`). Den ene bør flyttes til Arkiv/Dubletter ved næste cleanup.

---

## C. Payroll — tom på rodniveau

| Nuværende mappe | ID | Forslag | Status |
|-----------------|----|---------|--------|
| `Rendetalje — Payroll` | `1WfmFU-7iuz6hon81sV4ImTWU5YrDZQAz` | **Behold** indtil payroll-system er aktivt. Slet ikke — den er oprettet med vilje. | ❓ NEEDS_JONAS_REVIEW |

**Mulig fremtid:** Når payroll er aktiv, kan mappen flyttes til `Drift/Payroll/` for at rydde op på rodniveau.

---

## D. Vipps - Mobilepay — behold

| Nuværende mappe | ID | Forslag | Status |
|-----------------|----|---------|--------|
| `Vipps - Mobilepay` | `12D9_FOqaGbSg8PgnHcb3Mhgg2hyR44kc` | **Behold** som den er. Perioderapport (29 KB) er korrekt placeret. | ✅ BEHOLD |

**Fremtidig struktur** (når flere betalingsfiler akkumuleres):
```
Betalinger/
├── MobilePay/     (nuværende Vipps - Mobilepay opdeles)
└── Vipps/
```
Ikke relevant endnu — kun 1 fil.

---

## E. 2026 — tom

| Nuværende | ID | Forslag | Status |
|-----------|----|---------|--------|
| `2026/` | `1EcUna98l-Ls_tdF2JkmTb-9P1HZM9JrD` | **Slet eller arkivér** senere. Helt tom + tom 04/ undermappe. | ❓ NEEDS_JONAS_REVIEW |
| `2026/04/` | `1R3gSzKy00_niLR7kF0W5kKh3-FSBEqBk` | **Slet** senere. Tom undermappe. | ❓ NEEDS_JONAS_REVIEW |

---

## F. Samlet handlingsliste (når godkendt)

### Step 1: Opret 5 mapper
```
Dokumenter/Sheets/         → parent: 1XlBe9URNq_YBWY2XDsSuN2eS9QstyOYE
Dokumenter/Serviceaftaler/ → parent: 1XlBe9URNq_YBWY2XDsSuN2eS9QstyOYE
Dokumenter/Branding/       → parent: 1XlBe9URNq_YBWY2XDsSuN2eS9QstyOYE
Dokumenter/Internt/        → parent: 1XlBe9URNq_YBWY2XDsSuN2eS9QstyOYE
Dokumenter/Arkiv/          → parent: 1XlBe9URNq_YBWY2XDsSuN2eS9QstyOYE
```

### Step 2: Flyt 7 filer
| Fra (Dokumenter rod) | Til |
|-----------------------|-----|
| 4 sheets | Sheets/ |
| 1 arkiveret sheet | Arkiv/ |
| LOGO.png | Branding/ |
| README.md | Internt/ |
| Aftaleudkast.pdf | Serviceaftaler/ |

### Step 3: Ingen sletning. Ingen mails. Ingen omdøbning.

---

## Summary

| Kategori | Antal | Status |
|----------|-------|--------|
| Nye mapper at oprette | 5 | 🔧 Planlagt |
| Filer at flytte | 7 | 🔧 Planlagt |
| Beholdes urørt | Drift/Status Hub, Vipps - Mobilepay | ✅ |
| NEEDS_JONAS_REVIEW | Dublet, Arkiv-stubs, Payroll, 2026 | ❓ |
| 0 handlinger udført | ✅ | |

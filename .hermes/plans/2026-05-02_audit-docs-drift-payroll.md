# Documents / Drift / Payroll / MobilePay / 2026 Audit

**Dato:** 2026-05-02  
**Status:** AUDIT ONLY — 0 actions  

---

## 1. Executive Status

| Mappe | ID | Filer | Status |
|-------|----|-------|--------|
| ✅ **Dokumenter** | `1XlBe9URNq_YBWY2XDsSuN2eS9QstyOYE` | 7 + 4 i arkiv | Blandet men funktionel |
| ✅ **Drift** | `1GTQpwzZaIFnYQofkM6AaR0hkDdDfRjnb` | 0 + 5 i Status Hub | Status Hub OK, resten tom |
| 🕳️ **Rendetalje — Payroll** | `1WfmFU-7iuz6hon81sV4ImTWU5YrDZQAz` | 0 | **TOM** |
| 🟡 **Vipps - Mobilepay** | `12D9_FOqaGbSg8PgnHcb3Mhgg2hyR44kc` | 1 | Minimal — 29 KB rapport |
| 🕳️ **2026** | `1EcUna98l-Ls_tdF2JkmTb-9P1HZM9JrD` | 0 + tom 04/ | **TOM** |

---

## 2. Dokumenter — detaljeret

| Fil | ID | Type | Skal være |
|-----|----|------|-----------|
| Rendetalje - Kundebaser & Økonomi | Sheet | SHEET | Behold i Dokumenter/ eller flyt til Sheets/ |
| Rendetalje - April 2026 Fakturering | Sheet | SHEET | Behold i Dokumenter/ eller flyt til Sheets/ |
| Rendetalje - Operationsbase | Sheet | SHEET | Behold i Dokumenter/ eller flyt til Sheets/ |
| Rendetalje - Kunder (GAMMEL 2025 - arkiveret) | Sheet | SHEET | Behold i Dokumenter/ eller flyt til Arkiv/ |
| Better_Developers_Aftaleudkast_Tirsdag.pdf | `1SxKWNQtsi_xKnz77sMsLCyNPjp5KU2-1` | SERVICEAFTALE | Kan blive eller flyttes til Serviceaftaler/ |
| Rendetalje LOGO.png | `1hBWyfRVohhwv5sX8ITnUGvw9rT520HK6` | BRANDING | Kan blive eller flyttes til Branding/ |
| rendetalje-automation-README.md | `1HzIx_glJ9HQqRqpGe0aqV0LkPPop_GAt` | INTERNAL_DOC | Behold |

### Undermappe: Dokumenter - Arkiv (stubs)
| Fil | ID | Størrelse |
|-----|----|-----------|
| Noter – Flytterengøring Tanja (ikke foretaget) | `1mR0Rs6JCAklM_kJsRN1SvEj0ov6DD6hN` | 2 KB |
| Rendetalje - Intern Vidensoversigt | `1E8tDMJqDf5TeTkLY9SInRXF3IFCVKq_R` | 8 KB |
| Rendetalje Next-Gen Handoff v1 | `1bq58bBg6t_vBfFJqBjDCq9zqa3USG5Ai` | 10 KB |
| Rendetalje Worker - Professional Engineering Report | `1VlI2yJHAj6I1OOvYGSQ2PxqVhL3_Jr7E` | 8 KB |

Alle 4 er markdown/interne docs — bør være i `Internt/` eller `Arkiv/`.

---

## 3. Drift — detaljeret

### Status Hub (5 filer)
| Fil | ID | Størrelse | Note |
|-----|----|-----------|------|
| Rendetalje — Maanedsrapport April 2026.txt | `169WQQBMd6ytLxqIkKwYd3ohQdW-ewC6R` | 4 KB | ✅ Korrekt |
| Status Hub — reference.txt | `1UCKv26QNASNaC4I_0kuGwA6aC0NmSCvb` | 1 KB | ✅ Korrekt |
| rendetalje-ops.md | `1tzAbgUFnz5w9YKEOTHdKuXYlqTM4bYE3` | 22 KB | ✅ Korrekt (flyttet fra Kontoudtog) |
| rendetalje-ops.md | `1BUCgx-lWF05VHTVMxISRIZHUbSyc6q4Q` | 22 KB | ⚠️ **DUBLET** — samme indhold som ovenfor |
| rendetalje-skills.md | `1iGOgAfKE5uzpzM_QX3lhtb5hpYb4hJ58` | 25 KB | ✅ Korrekt (flyttet fra Kontoudtog) |

**Problem:** `rendetalje-ops.md` findes i dublet — samme fil, to forskellige file IDs. Den ene bør slettes/arkiveres.

---

## 4. Payroll, Vipps-Mobilepay, 2026

| Mappe | Problem | Anbefaling |
|-------|---------|------------|
| **Rendetalje — Payroll** | 🕳️ Helt tom | Opret struktur eller slet. Foreslå: `Drift/Payroll/` i stedet for rodniveau |
| **Vipps - Mobilepay** | 🟡 Kun 1 fil (29 KB) | Mappenavnet antyder to systemer i én mappe. Overvej at splitte til `Betalinger/Vipps/` + `Betalinger/MobilePay/` |
| **2026/04** | 🕳️ Tom | Slet eller arkivér. 2026-mappen på rodniveau virker overflødig — årsmapper kan lægges under Drift/ hvis nødvendigt |

---

## 5. Foreslået ny struktur

```
Rendetalje/
├── Aktive kunder/        (14 mapper — ✅ klar)
├── Tidligere kunder/     (1 mappe — ✅ klar)
├── Fakturaer/            (✅ klar)
├── Kontoudtog/           (✅ 17 korrekte, ⏸️ 4 Foodtruck)
├── Gamle leads/          (🔴 5,6 GB, næste spor)
├── Dokumenter/
│   ├── Sheets/           ← Kundebaser, Fakturering, Operationsbase
│   ├── Serviceaftaler/   ← Better_Developers_Aftaleudkast
│   ├── Branding/         ← Rendetalje LOGO.png
│   ├── Internt/          ← README, Vidensoversigt, Handoff, Worker Report
│   └── Arkiv/            ← GAMMEL 2025, Noter Tanja
├── Drift/
│   ├── Status Hub/       ← Månedsrapport, reference (✅ klar)
│   ├── Payroll/          ← (erstat tom Rendetalje — Payroll)
│   └── Automation/       ← (fremtidig)
├── Betalinger/
│   ├── MobilePay/        ← (flyt Vipps - Mobilepay herind)
│   └── Vipps/            ← (split)
└── 2026/                 ← (slet hvis tom)
```

---

## 6. Top problemer

| # | Problem | Kategori | Anbefaling |
|---|---------|----------|------------|
| 1 | **Dokumenter har blandet indhold** — sheets, logo, kontrakt, README i rod | P2 | Opret Sheets/, Serviceaftaler/, Branding/, Internt/ |
| 2 | **rendetalje-ops.md dublet** i Status Hub | P2 | Slet den ene |
| 3 | **Rendetalje — Payroll tom** på rodniveau | P2 | Slet eller genbrug som Drift/Payroll/ |
| 4 | **2026/04 tom** på rodniveau | P2 | Slet tom mappe |
| 5 | **Vipps - Mobilepay** navn antyder to systemer i én mappe | P3 | Overvej Betalinger/ struktur |
| 6 | **Dokumenter - Arkiv (stubs)** indhold burde være i Internt/ | P3 | Flyt ved næste cleanup |

**READY_TO_MOVE:** Ingen — alle nuværende placeringer er funktionelle.
**NEEDS_JONAS_REVIEW:** Omstrukturering af Dokumenter kræver godkendelse.

---

## 7. Hvilke mapper bør oprettes senere

| Mappe | Parent | Begrundelse |
|-------|--------|-------------|
| `Dokumenter/Sheets/` | `1XlBe9URNq_YBWY2XDsSuN2eS9QstyOYE` | Saml 4 sheets |
| `Dokumenter/Serviceaftaler/` | `1XlBe9URNq_YBWY2XDsSuN2eS9QstyOYE` | Saml kontrakter |
| `Dokumenter/Branding/` | `1XlBe9URNq_YBWY2XDsSuN2eS9QstyOYE` | Logo, visuelt materiale |
| `Dokumenter/Internt/` | `1XlBe9URNq_YBWY2XDsSuN2eS9QstyOYE` | README, docs |
| `Drift/Payroll/` | `1GTQpwzZaIFnYQofkM6AaR0hkDdDfRjnb` | Erstat tom Payroll på rod |

---

## Summary

| Måling | Værdi |
|--------|-------|
| Mapper med indhold | Dokumenter, Drift, Vipps |
| Tomme mapper | Payroll, 2026, 2026/04 |
| Filer i alt på tværs | 12 + 4 stubs |
| Dubletter | 1 (rendetalje-ops.md ×2) |
| READY_TO_MOVE | 0 — alle funktionelle |
| NEEDS_JONAS_REVIEW | Dokumenter-omstrukturering |
| 0 handlinger udført | ✅ |

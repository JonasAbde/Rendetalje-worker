# Payroll Validation Plan — April 2026

**Dato:** 2026-05-02
**Status:** PLAN ONLY — 0 actions performed
**Mål:** Hjælp Jonas med at validere April Events før eventuel payroll

---

## A. Better Developers — 5 events, Jonas skal beslutte

Alle 5 Better Developers events er markeret **NEEDS_JONAS_REVIEW** fordi det er erhvervskunde og usikkert om teamet er FB Rengøring (Souha/Manal á 90 kr/t) eller Jonas+Rawan (særskilt sats).

### Event IDs

| # | Dato | Titel | On-site | Wh | Est. payroll | Calendar Event ID |
|---|------|-------|:-------:|:--:|:-----------:|-------------------|
| 1 | 01-04-2026 | Erhvervsrengøring #2 - Better Developers | 1,5h × 2 | 3,0 | 270 kr | `op4me541o70r2e1ho5op` |
| 2 | 08-04-2026 | Erhvervsrengøring #3 - Better Developers | 1,5h × 2 | 3,0 | 270 kr | `gncris1ncjikpl1acakp` |
| 3 | 15-04-2026 | Erhvervsrengøring #4 - Better Developers | 1,5h × 2 | 3,0 | 270 kr | `hubaek7aa2br7a83cncq` |
| 4 | 22-04-2026 | Erhvervsrengøring #5 - Better Developers | 1,5h × 2 | 3,0 | 270 kr | `39mm6anrv8monivfi7j2` |
| 5 | 29-04-2026 | Erhvervsrengøring #6 - Better Developers | 1,5h × 2 | 3,0 | 270 kr | `9ttrb219qpbgrjp5190vbrsh98` |

**Total:** 5 events, 7,5 on-site timer, 15,0 worker-hours, **1.350 kr estimeret**

### Jonas' valgmuligheder

| Mulighed | Betydning | Payroll impact |
|----------|-----------|----------------|
| **FB_RENGORING_TEAM_ESTIMATED** | Souha/Manal á 90 kr/t | 1.350 kr — behold nuværende estimat |
| **JONAS_RAWAN_INTERNAL** | Jonas+Rawan udfører opgaven | Kræver Rawans sats — slet ikke 90 kr/t |
| **OTHER** | Andet team/sats | Manuel indtastning |

---

## B. Staff names — 31 FB events

Alle 31 FB Rengøring events har staff names = `UNKNOWN_FB_TEAM (Souha/Manal)`.

### Jonas' valgmuligheder

| Mulighed | Handling |
|----------|----------|
| **LAD STÅ** | Accepter UNKNOWN_FB_TEAM. Souha/Manal er udskiftelige og samme sats (90 kr/t). Ingen grund til at splitte. |
| **SPLIT SOUHA/MANAL** | Kræver at Jonas noterer pr. event hvem der var på stedet. 31 events × manuelt review. |

**Anbefaling:** Lad stå som UNKNOWN_FB_TEAM. Medmindre Souha og Manal har forskellige satser, er splittet unødvendigt arbejde.

---

## C. Rawan — JONAS_RAWAN_INTERNAL

Rawan må ikke automatisk behandles som FB Rengøring.

### Jonas skal opgive

| Spørgsmål | Svar (skal udfyldes af Jonas) |
|-----------|-------------------------------|
| Hvad er Rawans lønsats? | _____ kr/time |
| Hvilke events udfører Jonas+Rawan? | _____ (evt. Better Developers) |
| Skal Rawan have fast månedsløn i stedet for timeløn? | Ja / Nej |

---

## D. Cancelled event — Pernille Molin

| Event | On-site | Wh | Payroll | Status |
|-------|:-------:|:--:|:-------:|--------|
| Hovedrengøring - Pernille Molin (24-04-2026) | 1,5h | 0 | 0 kr | **CANCELLED ✅** |

**Bekræft:** Er 0 kr payroll korrekt? (Forventet: ja)

---

## E. Summary consistency check

| Måling | Summary | Events sum | Match |
|--------|:-------:|:----------:|:-----:|
| Total on-site hours | 62,5 | 62,5 * | ✅ |
| Total worker-hours | 125,0 | 125,0 | ✅ |
| FB payroll | 9.900 kr | 9.900 kr | ✅ |
| Better Devs payroll | 1.350 kr | 1.350 kr | ✅ |
| Total payroll | 11.250 kr | 11.250 kr | ✅ |

*\*) Summary ekskluderer cancelled event (1,5h) fra on-site total. Korrekt.*

**REVIEW_NOTE:** Cancelled event (Pernille Molin, 1,5h) er ekskluderet fra Summary totaler. Payroll = 0 kr. Dette er korrekt.

---

## F. Komplet liste over Jonas' beslutninger

| # | Beslutning | Type | Antal berørt |
|---|-----------|------|:-----------:|
| 1 | Better Developers: FB Rengøring eller Jonas+Rawan? | Choice | 5 events |
| 2 | Staff names: Lad UNKNOWN stå eller split Souha/Manal? | Choice | 31 events |
| 3 | Rawans lønsats | Input | 1 |
| 4 | Rawans rolle: fast månedsløn eller timeløn? | Choice | 1 |
| 5 | Bekræft Pernille Molin = 0 kr | Confirm | 1 event |
| 6 | Godkend Summary totals | Confirm | 1 |

---

## G. Valideringsrækkefølge (anbefalet)

1. ✅ **Step 0 — Bekræft cancelled** (Pernille, 0 kr) — laveste risiko
2. ✅ **Step 1 — Better Developers** (5 events) — størst impact på estimatet
3. ✅ **Step 2 — Rawans sats** — påkrævet hvis Better Devs = Jonas+Rawan
4. ✅ **Step 3 — Staff names** — 31 events, kun relevant hvis split nødvendigt
5. ✅ **Step 4 — Godkend Summary**

Efter godkendelse:
- Opdater April Events kolonner med Jonas' beslutninger
- Genberegn payroll
- Skift status fra ESTIMATE_NOT_FINAL til VALIDATED

---

## Summary

| Kategori | Værdi |
|----------|-------|
| Total events | 37 |
| Kræver Jonas-afklaring | 5 (Better Developers) |
| Kan godkendes uden review | 31 (FB Rengøring) |
| Cancelled (0 kr) | 1 |
| Konsistent | ✅ (payroll-tal matcher) |
| 0 actions performed | ✅ |

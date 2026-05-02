# Payroll Data Discovery — Rendetalje (v2)

**Dato:** 2026-05-02  
**Status:** DISCOVERY ONLY — 0 actions performed  
**Jonas ground truth incorporated:** ✅  

---

## 1. Jonass payroll-model

### A. FB Rengøring default rule
Hvis kalender-event har:
- 2 personer på stedet
- Ingen medarbejdernavne nævnt
- Almindelig Rendetalje-rengøring

→ **FB_RENGORING_TEAM_ESTIMATED**

Beregning: `kalendervarighed × 2 personer × 90 kr/time`

### B. Souha/Manal
Hvis Souha eller Manal ikke er direkte nævnt i event/Gmail → **STAFF_NAMES_UNKNOWN_FB_TEAM**
Note: "Kan være Souha eller Manal — kræver Jonas verification."

### C. Rawan
Rawan skal særskilt: **JONAS_RAWAN_INTERNAL** / **NEEDS_JONAS_RULE**
Rawan indgår IKKE i FB-team automatisk.

### D. Better Developers (ERHVERVSRENGØRING)
Better Developers er erhvervskunde med nøgleboks og 1.047 kr/uge.
Usikkert om det er FB Rengøring eller Jonas+Rawan.
→ **NEEDS_JONAS_REVIEW** (midlertidigt)

---

## 2. Discovery path

1. Google Calendar (april+maj 2026) — alle 54 events scannet for medarbejdernavne, adgangsdetails, prismønstre
2. Gmail — 8+ søgetermer × 20+ emails læst i fuld tekst
3. Google Contacts — 100 kontakter scannet
4. Salary.dk emails — 4 emails læst i fuld tekst
5. Event descriptions — 37 april-events gennemlæst for metadata (nøgleboks, pris, personer)

---

## 3. Bekræftede medarbejdere (2 + multi-team)

| Medarbejder | Email | Status | Evidens |
|---|---|---|---|
| **Rawan Abdul-Halim** | rawanabdul22@gmail.com | **JONAS_RAWAN_INTERNAL** | ✅ Lønseddel nov 2025 + ansættelseskontrakt sendt 15/12/2025. Jonas' makker. |
| **Souha** | (ikke fundet) | **FB_RENGORING** | ✅ Google Contacts: "Souha Rengøring Medarbejder" |
| **Manal** | (ikke fundet) | **FB_RENGORING (mulig)** | ✅ Nævnt af Jonas som FB-medarbejder. Ingen Gmail-evidence udover kunde-email. |

## 4. Payroll-system

| System | Status |
|---|---|
| **Salary.dk** | ✅ Aktiv — bruges til lønadministration |
| CVR | 45564096 |
| April 2026 løn | 🟡 Lønkørsel åben (deadline 29/4). Salary: "en virksomhed der ikke har kørt løn endnu" |
| Maj 2026 løn | 🟡 Lønkørsel åben 30/4 — deadline 28/5 |
| Nulindberetning SKAT | ✅ Marts 2026 kørt |
| Lønsedler | Sendes som PDF via email |
| FB Rengøring timesats | **90 kr/time pr. medarbejder** (Jonas ground truth) |
| Rawan timesats | **UKENDT** — lønseddel var PDF-attachment |

---

## 5. April 2026 payroll estimate

**ESTIMATE_NOT_FINAL** — alle estimater er baseret på default-rule, ikke verificeret

| Måling | Værdi |
|--------|-------|
| Antal events (april) | 37 |
| FB Rengøring-estimerede | 33 events |
| Better Devs (review) | 6 events |
| CANCELLED | 1 event (Pernille Molin) |
| Total on-site timer | 62,5 timer |
| Worker-hours (×2) | 125,0 wh |
| **Estimeret FB Payroll (90 kr/wh)** | **11.250 kr** |
| Better Devs (6×1,5h×2p×90) | 1.620 kr |
| **Total April estimate** | **12.870 kr (ESTIMATE_NOT_FINAL)** |

### Budget breakdown

| Kategori | Timer | Worker-h | Est. kost |
|----------|-------|----------|-----------|
| FB Rengøring (33 events) | 53,5 | 107,0 | 9.630 kr |
| Better Devs review (6 events) | 9,0 | 18,0 | 1.620 kr |
| CANCELLED (1 event) | 0 | 0 | 0 kr |
| **Total April** | **62,5** | **125,0** | **11.250 kr** |

---

## 6. Event-level payroll table — April 2026

| # | Dato | Kunde | Timer | Pers | Wh | Payroll | Attribution | Staff | Conf |
|---|------|-------|:----:|:---:|:--:|:-------:|-------------|-------|:----:|
| 1 | 01/04 | Peder Kjær #17 | 1,0 | 2 | 2,0 | 180 kr | FB_TEAM_EST | UNKNOWN | MED |
| 2 | 01/04 | Vindunor #28 | 2,0 | 2 | 4,0 | 360 kr | FB_TEAM_EST | UNKNOWN | MED |
| 3 | 01/04 | Better Developers #2 | 1,5 | 2 | 3,0 | 270 kr | NEEDS_REVIEW | UNKNOWN | LOW |
| 4 | 02/04 | René & Birgitte #21 | 1,0 | 2 | 2,0 | 180 kr | FB_TEAM_EST | UNKNOWN | MED |
| 5 | 07/04 | Hanne Ørsted (flyt) | 7,0 | 2 | 14,0 | 1.260 kr | FB_TEAM_EST | UNKNOWN | MED |
| 6 | 08/04 | Juliane Wibroe #13 | 2,0 | 2 | 4,0 | 360 kr | FB_TEAM_EST | UNKNOWN | MED |
| 7 | 08/04 | Vindunor #29 | 2,0 | 2 | 4,0 | 360 kr | FB_TEAM_EST | UNKNOWN | MED |
| 8 | 08/04 | Better Developers #3 | 1,5 | 2 | 3,0 | 270 kr | NEEDS_REVIEW | UNKNOWN | LOW |
| 9 | 09/04 | Jørn Haagensen #10 | 1,0 | 2 | 2,0 | 180 kr | FB_TEAM_EST | UNKNOWN | MED |
| 10 | 09/04 | René & Birgitte #22 | 1,0 | 2 | 2,0 | 180 kr | FB_TEAM_EST | UNKNOWN | MED |
| 11 | 09/04 | Mi Duborg #7 | 3,0 | 2 | 6,0 | 540 kr | FB_TEAM_EST | UNKNOWN | MED |
| 12 | 09/04 | Casper Thygesen | 2,0 | 2 | 4,0 | 360 kr | FB_TEAM_EST | UNKNOWN | MED |
| 13 | 09/04 | Vibeke Vogelius #3 | 2,0 | 2 | 4,0 | 360 kr | FB_TEAM_EST | UNKNOWN | MED |
| 14 | 10/04 | Martin Holm #9 | 1,5 | 2 | 3,0 | 270 kr | FB_TEAM_EST | UNKNOWN | MED |
| 15 | 10/04 | Anne Sofie #12 | 1,5 | 2 | 3,0 | 270 kr | FB_TEAM_EST | UNKNOWN | MED |
| 16 | 13/04 | Andrea Olsen (gen) | 2,0 | 2 | 4,0 | 360 kr | FB_TEAM_EST | UNKNOWN | MED |
| 17 | 13/04 | Benedikte & Finn #2 | 2,0 | 2 | 4,0 | 360 kr | FB_TEAM_EST | UNKNOWN | MED |
| 18 | 15/04 | Peder Kjær #18 | 1,0 | 2 | 2,0 | 180 kr | FB_TEAM_EST | UNKNOWN | MED |
| 19 | 15/04 | Simon Leminen #12 | 1,5 | 2 | 3,0 | 270 kr | FB_TEAM_EST | UNKNOWN | MED |
| 20 | 15/04 | Vindunor #30 | 2,0 | 2 | 4,0 | 360 kr | FB_TEAM_EST | UNKNOWN | MED |
| 21 | 15/04 | Better Developers #4 | 1,5 | 2 | 3,0 | 270 kr | NEEDS_REVIEW | UNKNOWN | LOW |
| 22 | 16/04 | René & Birgitte #23 | 1,0 | 2 | 2,0 | 180 kr | FB_TEAM_EST | UNKNOWN | MED |
| 23 | 16/04 | Helene Vinther #5 | 2,0 | 2 | 4,0 | 360 kr | FB_TEAM_EST | UNKNOWN | MED |
| 24 | 21/04 | Jes Vestergaard #15 | 1,5 | 2 | 3,0 | 270 kr | FB_TEAM_EST | UNKNOWN | MED |
| 25 | 22/04 | Juliane Wibroe #14 | 2,0 | 2 | 4,0 | 360 kr | FB_TEAM_EST | UNKNOWN | MED |
| 26 | 22/04 | Vindunor #31 | 2,0 | 2 | 4,0 | 360 kr | FB_TEAM_EST | UNKNOWN | MED |
| 27 | 22/04 | Better Developers #5 | 1,5 | 2 | 3,0 | 270 kr | NEEDS_REVIEW | UNKNOWN | LOW |
| 28 | 23/04 | René & Birgitte #24 | 1,0 | 2 | 2,0 | 180 kr | FB_TEAM_EST | UNKNOWN | MED |
| 29 | 24/04 | Anne Sofie #13 | 1,5 | 2 | 3,0 | 270 kr | FB_TEAM_EST | UNKNOWN | MED |
| 30 | 24/04 | Casper Thygesen #13 | 2,0 | 2 | 4,0 | 360 kr | FB_TEAM_EST | UNKNOWN | MED |
| 31 | 24/04 | Pernille Molin (hoved) | 1,5 | 2 | 3,0 | 270 kr | **CANCELLED** | N/A | HIGH |
| 32 | 27/04 | Jes Vestergaard #16 | 1,5 | 2 | 3,0 | 270 kr | FB_TEAM_EST | UNKNOWN | MED |
| 33 | 29/04 | Peder Kjær #19 | 1,0 | 2 | 2,0 | 180 kr | FB_TEAM_EST | UNKNOWN | MED |
| 34 | 29/04 | Vindunor #32 | 2,0 | 2 | 4,0 | 360 kr | FB_TEAM_EST | UNKNOWN | MED |
| 35 | 29/04 | Better Developers #6 | 1,5 | 2 | 3,0 | 270 kr | NEEDS_REVIEW | UNKNOWN | LOW |
| 36 | 30/04 | Jørn Haagensen #11 | 1,0 | 2 | 2,0 | 180 kr | FB_TEAM_EST | UNKNOWN | MED |
| 37 | 30/04 | René & Birgitte #25 | 1,0 | 2 | 2,0 | 180 kr | FB_TEAM_EST | UNKNOWN | MED |

**Legende:**
- **FB_TEAM_EST** = FB_RENGORING_TEAM_ESTIMATED (2 pers á 90 kr/t)
- **NEEDS_REVIEW** = NEEDS_JONAS_REVIEW (kan være Jonas+Rawan i stedet)
- **CANCELLED** = event aflyst
- **UNKNOWN** = STAFF_NAMES_UNKNOWN_FB_TEAM (Souha/Manal mulig)

---

## 7. Events der kræver Jonas review

| Event | Kunde | Hvorfor review |
|-------|-------|----------------|
| Better Devs #2-#6 (6 events) | Better Developers | Erhvervsrengøring. Nøgleboks. 1.047 kr/uge. Er det FB Rengøring (2×90=180 kr) eller Jonas+Rawan? |
| Rawan-relateret (0) | — | Ingen events nævner Rawan i titel eller beskrivelse |

---

## 8. Payroll data gaps

| Gap | Status |
|-----|--------|
| Medarbejderliste | 2+ (Rawan, Souha, Manal). Hvem ellers? |
| Lønsats (Rawan) | **Ukendt** — PDF-lønseddel nov 2025 |
| Lønsats (Souha) | **Ukendt** — antages 90 kr/t (FB Rengøring) |
| Lønsats (Manal) | **Ukendt** — antages 90 kr/t (FB Rengøring) |
| Better Devs-team | **Ukendt** — FB eller Jonas+Rawan? |
| April løn kørt? | Salary: "ikke kørt løn endnu" — uklart |
| Timesedler | 0 — ingen |

---

## 9. Anbefalet næste handling (manuel verification)

Før payroll-sheet oprettes, bedes Jonas:

**Step 1:** Bekræft hvilke events er FB Rengøring vs Jonas+Rawan
- Alle FAST RENGØRING og UGENTLIG RENGØRING → formodes FB
- ERHVERVSRENGØRING (Better Developers) → afklaring påkrævet

**Step 2:** Marker Souha vs Manal på FB-events hvis nødvendigt
- Hvis irrelevant (samme sats 90 kr/t) → spring over
- Hvis relevant for personaleplanlægning → notér pr. uge

**Step 3:** Opgiv Rawans lønsats
- Fra lønseddel nov 2025 (PDF i sendt-mail)
- Eller opgiv sats direkte

**Step 4:** Godkend april-estimat
- Estimat: 11.250 kr (alle FB) / 12.870 kr (hvis Better Devs inkl.)
- Eller justér baseret på faktisk team-sammensætning

---

## Summary

| Kategori | Fund |
|----------|------|
| ✅ Bekræftede medarbejdere | 2 (Rawan JONAS_INTERNAL, Souha FB_TEAM) |
| ✅ Mulig FB-medarbejder | 1 (Manal — nævnt af Jonas) |
| ✅ Payroll system | Salary.dk (aktivt) |
| ✅ Timesats (FB-team) | **90 kr/time/pr. person** (Jonas-confirmed) |
| ❌ Timesats (Rawan) | Ukendt |
| ❌ Kalender med navne | 0 events — kun "2 personer" |
| ❌ Better Devs team | 6 events — uafklaret |
| 🔄 April estimate | 11.250 kr (FB only) / 12.870 kr (incl. Better Devs) — **ESTIMATE_NOT_FINAL** |
| 0 actions performed | ✅ |

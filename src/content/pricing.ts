export const pricing = {
  hourlyRate: 399,
  minimumPrice: 698,
  currency: "kr",
  taxIncluded: true,

  // ============================================
  // CORE BILLING LOGIC
  // ============================================

  billingLogic: {
    formula: "Pris = fakturerbare arbejdstimer × 399 kr",
    workHours: "Fakturerbare arbejdstimer = antal medarbejdere × tid på stedet",
    example1: "1 person × 2 timer = 2 arbejdstimer = 698 kr",
    example2: "2 personer × 1,5 time = 3 arbejdstimer = 1.047 kr",
    example3: "2 personer × 2 timer = 4 arbejdstimer = 1.396 kr",
    example4: "2 personer × 3 timer = 6 arbejdstimer = 2.094 kr",
  },

  // ============================================
  // MINIMUM HOURS PER JOB TYPE
  // Calibrated from 372 Rendetalje core jobs 2025-2026
  // ============================================

  minHours: {
    standard: 1.0,
    deep: 2.0,
    moveOut: 3.0,
    commercial: 1.0,
  },

  // ============================================
  // ESTIMATION FORMULAS
  // ============================================

  estimation: {
    standard: "m² / 25 timer",
    deep: "(m² / 20) + 1-3 timer",
    moveOut: "(m² / 18) + 2-4 timer",
    extras: {
      oven: "+0,5 time",
      fridge: "+0,5 time",
      windows: "+1 time pr. 30 m²",
      cabinets: "+0,5 time",
      descaling: "+1-2 timer",
    },
  },

  // ============================================
  // DEFAULT ESTIMATES (when m² is unknown)
  // Based on historical Q1-Q3 intervals from 372 Rendetalje jobs
  // ============================================

  defaultEstimates: {
    standard: { hours: "1.0-2.0", price: "399-698 kr", note: "Historisk median 2.0h" },
    deep: { hours: "2.0-4.5", price: "698-1.571 kr", note: "Historisk median 3.0h, Q1-Q3 3.0-5.0h" },
    moveOut: { hours: "2.5-7.0", price: "873-2.443 kr", note: "Historisk median 5.0h, Q1-Q3 4.0-7.0h" },
    commercial: { hours: "1.0-2.0", price: "399-698 kr", note: "Historisk median 1.5h" },
    firstCleaning: { multiplier: 1.3, note: "Første gang tager ca. 30% længere" },
  },

  // ============================================
  // TYPICAL PRICES BY HOME SIZE
  // Based on real customer data from Aarhus-area jobs
  // ============================================

  typicalExamples: {
    standard: [
      { label: "2-værelses lejlighed (50-65 m²)", hours: "2,0", price: "698 kr", frequency: "Ugentlig eller 14. dag" },
      { label: "3-værelses lejlighed (70-85 m²)", hours: "2,5", price: "873 kr", frequency: "Ugentlig eller 14. dag" },
      { label: "Rækkehus 100 m²", hours: "3,0", price: "1.047 kr", frequency: "Ugentlig" },
      { label: "Villa 120-140 m²", hours: "3,5", price: "1.222 kr", frequency: "Ugentlig" },
      { label: "Større villa 150+ m²", hours: "4,0-5,0", price: "1.396-1.745 kr", frequency: "Ugentlig" },
    ],
    deep: [
      { label: "2-værelses lejlighed (50-65 m²)", hours: "3,0-4,5", price: "1.047-1.571 kr", note: "+ evt. tilvalg" },
      { label: "3-værelses lejlighed (70-85 m²)", hours: "4,0-6,0", price: "1.396-2.094 kr", note: "+ evt. tilvalg" },
      { label: "Villa 120-140 m²", hours: "6,0-9,0", price: "2.094-3.141 kr", note: "+ evt. tilvalg" },
    ],
    moveOut: [
      { label: "1-værelses/studiebolig (25-40 m²)", hours: "3,0-4,0", price: "1.047-1.396 kr", note: "Inkl. basis hvidevarer" },
      { label: "2-værelses lejlighed (50-65 m²)", hours: "4,0-6,0", price: "1.396-2.094 kr", note: "Inkl. basis hvidevarer" },
      { label: "3-værelses lejlighed (70-85 m²)", hours: "5,0-7,0", price: "1.745-2.443 kr", note: "Inkl. basis hvidevarer" },
      { label: "Villa 120-140 m²", hours: "7,0-10,0", price: "2.443-3.490 kr", note: "Inkl. basis hvidevarer" },
    ],
    commercial: [
      { label: "Kontor 50 m² (1 gang/uge)", hours: "2,0", price: "698 kr", frequency: "Ugentlig" },
      { label: "Kontor 100 m² (2 gange/uge)", hours: "4,0", price: "1.396 kr", frequency: "2 gange om ugen" },
      { label: "Showroom 150 m²", hours: "aftales", price: "Efter aftale", note: "Individuel vurdering" },
    ],
  },

  // ============================================
  // PRICE CALCULATOR INFO
  // ============================================

  calculator: {
    available: true,
    description:
      "Vores prisberegner giver dig et øjeblikkeligt estimat baseret på boligtype, størrelse, rengøringstype og eventuelle tilvalg. Estimatet tager udgangspunkt i vores timepris på 399 kr. inkl. moms og de historiske data fra over 370 udførte opgaver.",
    howToUse:
      "Vælg rengøringstype (fast rengøring, hovedrengøring, flytterengøring eller erhvervsrengøring), indtast din boligs størrelse i m², vælg eventuelle tilvalg, og beregneren giver dig et estimat med det samme. Ved fast rengøring viser beregneren også prisen for første rengøring (ca. 30% mere) og efterfølgende besøg.",
  },

  // ============================================
  // RECURRING CLEANING PHASES
  // ============================================

  recurring: {
    firstCleaning: {
      description: "Første rengøring tager typisk 30% længere end efterfølgende besøg, da der skal indhentes efterslæb og etableres en grundstandard.",
    },
    ongoing: {
      description: "Efterfølgende besøg er vedligeholdelse — antal timer fastlægges efter aftale baseret på boligens størrelse og behov.",
    },
  },

  // ============================================
  // RISK BUFFERS
  // ============================================

  riskBuffer: {
    moveOut: 0.25,
    deep: 0.20,
    conditionMultiplier: {
      normal: 1.0,
      poor: 1.3,
      unknown: 1.15,
    },
  },

  firstCleaningMultiplier: 1.3,

  // ============================================
  // VALIDATION
  // ============================================

  validation: {
    warnIfPriceBelowMinimum: true,
    warnIfM2unknown: true,
    warnIfConditionUnknown: true,
    stopIfDeepWithoutM2: true,
    stopIfMoveOutWithoutCondition: true,
    confidenceThreshold: 0.5,
  },

  // ============================================
  // WORDING
  // ============================================

  wording:
    "Vores timepris er 399 kr inkl. moms, og minimumsprisen er 698 kr inkl. moms (svarende til 2 timer). Vi estimerer først opgaven ud fra type, størrelse, tilstand, frekvens og eventuelle tilvalg. Den endelige pris beregnes derefter ud fra de faktiske fakturerbare arbejdstimer. Når flere medarbejdere er på opgaven samtidig, regnes den samlede arbejdstid sammen. Hvis to medarbejdere arbejder 2 timer på stedet, svarer det til 4 arbejdstimer i alt. Ved fast rengøring skelner vi typisk mellem første grundige rengøring og efterfølgende vedligeholdelse. Prisberegneren giver derfor et estimat — og ved større eller mere særlige opgaver giver vi altid et konkret tilbud på forhånd.",

  estimateNote:
    "Dette er et estimat baseret på forventet samlet arbejdstid. Den endelige pris afhænger af faktisk omfang, tilstand og eventuelle ekstra behov på opgaven. Ved hoved- og flytterengøring kan omfanget variere afhængigt af boligens stand og eventuelle ekstraopgaver (ovn, køleskab, vinduer, kalk).",

  paymentLogic: {
    recurring: "Typisk månedlig samlet faktura.",
    oneOff: "Senest 24 timer efter udført opgave medmindre andet er aftalt.",
  },
};

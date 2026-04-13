export const pricing = {
  hourlyRate: 349,
  minimumPrice: 698,
  currency: "kr",
  taxIncluded: true,
  // Core pricing logic from Drive docs
  billingLogic: {
    formula: "Pris = fakturerbare arbejdstimer × 349 kr",
    workHours: "Fakturerbare arbejdstimer = antal medarbejdere × tid på stedet",
    example1: "1 person × 2 timer = 2 arbejdstimer = 698 kr",
    example2: "2 personer × 2 timer = 4 arbejdstimer = 1.396 kr",
    example3: "2 personer × 3 timer = 6 arbejdstimer = 2.094 kr",
  },
  // Estimation formula for calculator
  estimation: {
    standard: "m² / 25 timer",
    deep: "(m² / 20) + 1-2 timer",
    moveOut: "(m² / 18) + 2-3 timer",
    extras: {
      oven: "+0,5 time",
      fridge: "+0,5 time",
      windows: "+1 time pr. 30 m²",
    },
  },
  // Recurring cleaning breakdown
  recurring: {
    firstCleaning: {
      hours: 4,
      price: 1396,
      description: "Første grundige rengøring tager længere tid for at bygge niveauet op",
    },
    ongoing: {
      hours: 2,
      weeklyPrice: 698,
      description: "Derefter lavere og mere stabilt tidsforbrug ved fast vedligeholdelse",
    },
  },
  wording:
    "Vores timepris er 349 kr inkl. moms, og minimumsprisen er 698 kr inkl. moms (svarende til 2 timer). Vi estimerer først opgaven ud fra type, størrelse, tilstand, frekvens og eventuelle tilvalg. Den endelige pris beregnes derefter ud fra de faktiske fakturerbare arbejdstimer. Når flere medarbejdere er på opgaven samtidig, regnes den samlede arbejdstid sammen. Hvis to medarbejdere arbejder 2 timer på stedet, svarer det til 4 arbejdstimer i alt. Ved fast rengøring skelner vi typisk mellem første grundige rengøring og efterfølgende vedligeholdelse. Prisberegneren giver derfor et estimat — og ved større eller mere særlige opgaver giver vi altid et konkret tilbud på forhånd.",
  estimateNote:
    "Dette er et estimat baseret på forventet samlet arbejdstid. Den endelige pris afhænger af faktisk omfang, tilstand og eventuelle ekstra behov på opgaven. Især flytterengøring kan variere og har historisk været undervurderet.",
  paymentLogic: {
    recurring: "Typisk månedlig samlet faktura.",
    oneOff: "Senest 24 timer efter udført opgave medmindre andet er aftalt.",
  },
};

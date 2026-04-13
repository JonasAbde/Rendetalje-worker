export const pricing = {
  hourlyRate: 349,
  minimumPrice: 698,
  currency: 'kr',
  vat: 'inkl. moms',
  
  logic: {
    fast: 'Fastpris når opgavens omfang er klart og aftalt på forhånd.',
    estimate: 'Estimat når opgavens omfang varierer og skal vurderes på stedet.',
    quote: 'Tilbud ved større eller særlige opgaver hvor scope skal defineres.',
  },
  
  paymentTerms: {
    recurring: 'Faste kunder faktureres typisk månedligt med samlet faktura.',
    oneOff: 'Engangsopgaver og flytterengøring betales senest 24 timer efter udført arbejde, med mindre andet er aftalt.',
  },
} as const;

export const pricingExamples = [
  {
    title: 'Fast rengøring – lille lejlighed',
    description: '1,5-2 timer hver anden uge',
    price: 'Fra ~525 kr. pr. gang',
  },
  {
    title: 'Fast rengøring – større hjem',
    description: '3-4 timer ugentligt',
    price: 'Fra ~1.050 kr. pr. gang',
  },
  {
    title: 'Flytterengøring – 2-værelses',
    description: '4-6 timer afhængigt af stand',
    price: 'Estimat: 1.400-2.100 kr.',
  },
  {
    title: 'Hovedrengøring – standard hus',
    description: '3-5 timer dyb rengøring',
    price: 'Estimat: 1.050-1.750 kr.',
  },
  {
    title: 'Erhvervsrengøring – kontor',
    description: 'Efter aftale omfang og frekvens',
    price: 'Individuelt tilbud',
  },
] as const;

export const pricingFactors = [
  'Boligens eller lokalets størrelse',
  'Nuværende rengøringsniveau og stand',
  'Særlige ønsker eller fokusområder',
  'Frekvens ved faste aftaler',
  'Adgangsforhold og parkering',
] as const;

export const publicPricingText = `Vores timepris er 349 kr. inkl. moms, og minimumsprisen er 698 kr. inkl. moms. Den endelige pris afhænger af opgavens type, størrelse og niveau. Ved større eller mere særlige opgaver giver vi et konkret tilbud på forhånd.` as const;

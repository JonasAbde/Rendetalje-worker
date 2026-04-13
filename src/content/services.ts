import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'fast-rengoering',
    slug: 'fast-rengoering',
    name: 'Fast rengøring',
    shortDescription: 'Stabil og pålidelig rengøring med faste aftaler.',
    description: 'Vores fast rengøring er til dig, der vil have et rent hjem eller kontor uden at skulle tænke på det. Vi aftaler en fast rytme — ugentligt, hver anden uge eller efter behov — og sørger for, at kvaliteten holdes stabil over tid.',
    included: [
      'Støvsugning og gulvvask',
      'Overfladerengøring',
      'Badeværelser og køkken',
      'Aftørring af dørkarme og kontaktflader',
      'Tømning af affald',
    ],
    targetAudience: 'Private hjem og mindre virksomheder, der ønsker et fast samarbejde med en stabil rengøringspartner.',
    pricingNote: 'Fastpris aftales ud fra omfang og frekvens. Timepris 349 kr. inkl. moms, minimum 698 kr.',
    frequency: 'Ugentligt, hver anden uge eller efter aftale',
  },
  {
    id: 'flytterengoering',
    slug: 'flytterengoering',
    name: 'Flytterengøring',
    shortDescription: 'Grundig rengøring ved fraflytning eller indflytning.',
    description: 'En grundig flytterengøring sikrer, at boligen er klar til overdragelse — eller at du kommer godt fra start i dit nye hjem. Vi arbejder systematisk igennem alle rum og sørger for, at ingenting glemmes.',
    included: [
      'Alle rum rengøres grundigt',
      'Køkken med skabe, skuffer og hvidevarer udvendigt',
      'Badeværelse med sanitet og fliser',
      'Gulve vaskes eller støvsuges',
      'Indvendige vinduer, karme og vindueskummer',
      'Afkalkning efter behov',
    ],
    targetAudience: 'Private der flytter, udlejere og ejendomsmæglere.',
    pricingNote: 'Prisen afhænger af boligens størrelse og stand. Vi giver et konkret tilbud på forhånd.',
  },
  {
    id: 'hovedrengoering',
    slug: 'hovedrengoering',
    name: 'Hovedrengøring',
    shortDescription: 'Dybdegående rengøring for et frisk pust.',
    description: 'Når hverdagsrengøringen ikke længere er nok, eller når du har brug for en grundig opfriskning, er vores hovedrengøring løsningen. Vi går i dybden med områder, som normalt overses.',
    included: [
      'Dyb rengøring af køkken og badeværelser',
      'Ovn, køleskab og fryser indvendigt efter aftale',
      'Skabe og skuffer indvendigt efter aftale',
      'Afkalkning af vandhaner og brusehoveder',
      'Indvendige vinduer og karme',
      'Støvning af vanskeligt tilgængelige steder',
    ],
    targetAudience: 'Private hjem der har brug for en grundig genstart eller forberedelse til særlige begivenheder.',
    pricingNote: 'Timepris 349 kr. inkl. moms, typisk 3-6 timer afhængigt af boligens størrelse.',
  },
  {
    id: 'erhvervsrengoering',
    slug: 'erhvervsrengoering',
    name: 'Erhvervsrengøring',
    shortDescription: 'Professionel rengøring til kontorer og butikker.',
    description: 'Vi hjælper mindre virksomheder med at holde et præsentabelt og hygiejnisk arbejdsmiljø. Aftalen tilpasses jeres behov — om det er dagligt, ugentligt eller efter behov.',
    included: [
      'Kontorlokaler og fællesarealer',
      'Mødelokaler og reception',
      'Køkken og pauserum',
      'Toiletter og badefaciliteter',
      'Støvsugning og gulvvask',
      'Aftørring af overflader',
    ],
    targetAudience: 'Mindre kontorer, showrooms, klinikker og butikker i Aarhus-området.',
    pricingNote: 'Månedlig fakturering ved faste aftaler. Timepris 349 kr. inkl. moms.',
    frequency: 'Dagligt, ugentligt eller efter aftale',
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find(s => s.slug === slug);

export const extraServices = [
  'Ovn rengøring',
  'Køleskab og fryser',
  'Skabe og skuffer',
  'Indvendige vinduer',
  'Afkalkning',
  'Fokusområder efter aftale',
] as const;

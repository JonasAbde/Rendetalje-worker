import { Home, ArrowRight, Sparkles, Building2 } from "lucide-react";

export const coreServices = [
  {
    id: "fast-rengoering",
    title: "Fast rengøring",
    desc: "Stabil vedligeholdelse af dit hjem. Ugentlig, hver 14. dag eller efter aftale.",
    icon: Home,
    path: "/services/fast-rengoering",
    focus: [
      "Stabil vedligeholdelse",
      "Ugentlig / hver 14. dag / efter aftale",
      "Private hjem og udvalgte erhverv",
    ],
    includes: [
      "Støvsugning af alle gulve og tæpper",
      "Gulvvask i alle rum",
      "Aftørring af overflader (borde, hylder, karme)",
      "Rengøring af badeværelse og toilet",
      "Rengøring af køkken (udvendigt)",
      "Pudsning af spejle",
      "Tømning af skraldespande",
      "Fjernelse af spindelvæv",
    ],
    whoIsItFor:
      "Fast rengøring passer perfekt til private hjem og udvalgte erhverv, der ønsker en stabil og pålidelig rengøringsløsning. Vi kommer typisk ugentligt eller hver 14. dag, men vi tilpasser frekvensen efter dine behov.",
    pricingLogic:
      "Prisen for fast rengøring afhænger af boligens størrelse, antal rum og den ønskede frekvens. Vores timepris er 349 kr. inkl. moms, og minimumsprisen er 698 kr. inkl. moms. Vi aftaler ofte en fast pris pr. gang, når vi har vurderet opgaven, så du altid ved, hvad det koster.",
    process: [
      {
        step: "Forespørgsel",
        desc: "Du udfylder vores formular med information om din bolig og dine ønsker.",
      },
      {
        step: "Vurdering & Tilbud",
        desc: "Vi vurderer opgaven og giver dig et konkret tilbud på en fast aftale.",
      },
      {
        step: "Første besøg",
        desc: "Vi aftaler adgangsforhold og gennemfører den første rengøring.",
      },
      {
        step: "Fast rytme",
        desc: "Vi kommer fast som aftalt. Betaling sker typisk via en månedlig samlet faktura.",
      },
    ],
    faqs: [
      {
        q: "Skal jeg være hjemme?",
        a: "Nej, det behøver du ikke. Vi aftaler adgang via nøgleboks, aftalt nøgleplacering eller ved at vi opbevarer et nøglesæt.",
      },
      {
        q: "Hvad hvis jeg skal aflyse en gang?",
        a: "Afbud eller ændringer bedes meddelt hurtigst muligt og helst pr. telefon. Ved ændringer samme dag skal du ringe.",
      },
      {
        q: "Medbringer I selv udstyr?",
        a: "Ja, vi medbringer altid vores eget udstyr og svanemærkede rengøringsprodukter.",
      },
    ],
  },
  {
    id: "flytterengoering",
    title: "Flytterengøring",
    desc: "Grundig rengøring ved aflevering eller overtagelse af bolig.",
    icon: ArrowRight,
    path: "/services/flytterengoering",
    focus: [
      "Grundig aflevering/overtagelse",
      "Pris afhænger af størrelse og omfang",
      "Typisk tilbud først",
    ],
    includes: [
      "Støvsugning og gulvvask i alle rum",
      "Aftørring af alle flader, døre og karme",
      "Rengøring af skabe og skuffer (indvendigt og udvendigt)",
      "Grundig rengøring af badeværelse inkl. afkalkning",
      "Rengøring af køkken inkl. ovn og køleskab",
      "Rengøring af paneler og stikkontakter",
      "Fjernelse af spindelvæv",
      "Pudsning af indvendige vinduer (kan tilvælges)",
    ],
    whoIsItFor:
      "Flytterengøring er for dig, der står over for en fraflytning og vil sikre dit depositum, eller dig der overtager en ny bolig og vil starte på en frisk i et helt rent hjem.",
    pricingLogic:
      "Prisen afhænger af boligens størrelse og omfanget af rengøringen (f.eks. om der er meget kalk, eller om hvidevarer skal renses i dybden). Vi giver typisk et konkret tilbud på forhånd baseret på dine oplysninger. Vores timepris er 349 kr. inkl. moms.",
    process: [
      {
        step: "Forespørgsel",
        desc: "Du udfylder formularen med boligens størrelse og hvornår rengøringen skal udføres.",
      },
      {
        step: "Tilbud",
        desc: "Vi giver dig et konkret tilbud baseret på opgavens omfang.",
      },
      {
        step: "Udførelse",
        desc: "Vi møder op på den aftalte dag og udfører en grundig flytterengøring.",
      },
      {
        step: "Afslutning",
        desc: "Du modtager en faktura med betalingsfrist senest 24 timer efter udført opgave.",
      },
    ],
    faqs: [
      {
        q: "Giver I garanti for at udlejer godkender?",
        a: "Vi leverer en professionel og grundig rengøring. Hvis der mod forventning er mangler i forhold til det aftalte, udbedrer vi det naturligvis.",
      },
      {
        q: "Skal boligen være helt tømt?",
        a: "Ja, for at vi kan udføre en komplet flytterengøring, skal boligen være tømt for møbler og inventar.",
      },
      {
        q: "Rengør I også ovn og køleskab?",
        a: "Ja, rengøring af hvidevarer er typisk en fast del af en flytterengøring, men vi aftaler altid det præcise omfang på forhånd.",
      },
    ],
  },
  {
    id: "hovedrengoering",
    title: "Hovedrengøring",
    desc: "En dybdegående rengøring, når der er brug for at komme helt i bund.",
    icon: Sparkles,
    path: "/services/hovedrengoering",
    focus: [
      "Mere grundig gennemgang",
      "Bruges ved ophobet behov eller opstart",
    ],
    includes: [
      "Grundig støvsugning og gulvvask",
      "Aftørring af alle overflader, paneler og karme",
      "Dybdegående rengøring af badeværelse og afkalkning",
      "Rengøring af køkken, inkl. udvendige flader og vask",
      "Aftørring af døre og stikkontakter",
      "Fjernelse af spindelvæv i alle kroge",
      "Flytning af lette møbler for at støvsuge bagved",
      "Mulighed for tilvalg af ovn, køleskab og indvendige vinduer",
    ],
    whoIsItFor:
      "Hovedrengøring er ideelt for dig, der har et ophobet rengøringsbehov, ønsker en frisk start, eller som opstart på en fast rengøringsaftale. Det er også populært op til højtider eller store fester.",
    pricingLogic:
      "Da en hovedrengøring er mere tidskrævende end en almindelig vedligeholdelsesrengøring, afhænger prisen af boligens tilstand og størrelse. Vi arbejder ud fra vores timepris på 349 kr. inkl. moms, og vi giver gerne et estimat eller et konkret tilbud på forhånd.",
    process: [
      {
        step: "Forespørgsel",
        desc: "Du beskriver dine behov og boligens størrelse i vores formular.",
      },
      {
        step: "Estimat",
        desc: "Vi vurderer opgaven og giver et estimat på tidsforbrug og pris.",
      },
      {
        step: "Udførelse",
        desc: "Vi kommer og udfører en grundig hovedrengøring med fokus på detaljen.",
      },
      {
        step: "Opfølgning",
        desc: "Vi sikrer os, at du er tilfreds med resultatet. Betaling sker efterfølgende.",
      },
    ],
    faqs: [
      {
        q: "Hvad er forskellen på hovedrengøring og fast rengøring?",
        a: "En hovedrengøring går mere i dybden. Vi tager f.eks. paneler, døre, og afkalker mere grundigt, hvor fast rengøring er vedligeholdelse.",
      },
      {
        q: "Kan jeg vælge specifikke fokusområder?",
        a: "Ja, vi tilpasser altid hovedrengøringen efter dine ønsker. Hvis du f.eks. vil have ekstra fokus på køkkenet, aftaler vi bare det.",
      },
      {
        q: "Medbringer I selv udstyr?",
        a: "Ja, vi medbringer altid vores eget udstyr og svanemærkede rengøringsprodukter.",
      },
    ],
  },
  {
    id: "erhvervsrengoering",
    title: "Erhvervsrengøring",
    desc: "Klare aftaler og fast rytme for kontorer og mindre virksomheder.",
    icon: Building2,
    path: "/services/erhvervsrengoering",
    focus: [
      "Kontorer, showroom, mindre virksomheder",
      "Klare aftaler og fast rytme",
      "Månedlig samlet faktura giver mening",
    ],
    includes: [
      "Støvsugning og gulvvask af kontorarealer",
      "Aftørring af skriveborde og frie overflader",
      "Rengøring af personalekøkken og kantine",
      "Rengøring og desinficering af toiletter",
      "Tømning af skraldespande og papirkurve",
      "Aftørring af mødelokaler",
      "Fjernelse af kaffepletter og lignende",
      "Fleksible løsninger efter virksomhedens behov",
    ],
    whoIsItFor:
      "Vores erhvervsrengøring henvender sig til mindre og mellemstore virksomheder i Aarhus og omegn, der ønsker en pålidelig rengøringspartner, som leverer stabil kvalitet uden at forstyrre arbejdsdagen.",
    pricingLogic:
      "Prisen for erhvervsrengøring afhænger af lokalernes størrelse, antal medarbejdere og den ønskede frekvens (f.eks. dagligt, ugentligt eller to gange om ugen). Vi udarbejder altid et konkret, skræddersyet tilbud til erhvervskunder.",
    process: [
      {
        step: "Kontakt",
        desc: "Du kontakter os med information om jeres lokaler og behov.",
      },
      {
        step: "Besigtigelse",
        desc: "Vi kommer gerne ud og besigtiger lokalerne for at give et præcist tilbud.",
      },
      {
        step: "Aftale",
        desc: "Vi indgår en klar aftale om frekvens, opgaver og adgangsforhold.",
      },
      {
        step: "Fast rytme",
        desc: "Vi udfører rengøringen som aftalt. Fakturering sker typisk månedligt.",
      },
    ],
    faqs: [
      {
        q: "Kan I gøre rent uden for åbningstid?",
        a: "Ja, vi aftaler adgangsforhold og tidspunkter, der passer jer bedst, så vi ikke forstyrrer jeres arbejde.",
      },
      {
        q: "Hvordan foregår betalingen?",
        a: "For faste erhvervskunder kører vi typisk med en månedlig samlet faktura.",
      },
      {
        q: "Bruger I miljøvenlige produkter?",
        a: "Ja, vi bruger svanemærkede rengøringsprodukter, hvilket sikrer et godt indeklima for jeres medarbejdere.",
      },
    ],
  },
];

export const extraServices = [
  "Ovn",
  "Køleskab/fryser",
  "Skabe/skuffer",
  "Indvendige vinduer",
  "Afkalkning",
  "Fokusområder efter aftale",
];

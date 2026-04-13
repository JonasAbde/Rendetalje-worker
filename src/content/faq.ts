import type { FAQItem } from '../types';

export const faqItems: FAQItem[] = [
  {
    question: 'Hvordan beregner I prisen?',
    answer: 'Vores timepris er 349 kr. inkl. moms med en minimumspris på 698 kr. Den endelige pris afhænger af opgavens type, størrelse og niveau. Ved faste aftaler laver vi en fastpris baseret på omfang og frekvens. Ved større eller særlige opgaver giver vi et konkret tilbud på forhånd.',
  },
  {
    question: 'Medbringer I selv udstyr og rengøringsmidler?',
    answer: 'Ja, vi medbringer selv alt nødvendigt udstyr og svanemærkede rengøringsprodukter. Du skal ikke sørge for noget.',
  },
  {
    question: 'Skal jeg være hjemme under rengøringen?',
    answer: 'Nej, det er ikke nødvendigt. Vi aftaler altid adgang inden første besøg — det kan ske ved nøgleboks, aftalt nøgleplacering, eller at vi opbevarer et nøglesæt efter aftale. Hvis adgangsforhold ændres, skal det meddeles inden næste planlagte besøg.',
  },
  {
    question: 'Kører I kun i Aarhus?',
    answer: 'Vi hjælper kunder i Aarhus og omegn. Ved større eller faste opgaver kører vi også uden for Aarhus efter aftale.',
  },
  {
    question: 'Tilbyder I fast rengøring?',
    answer: 'Ja, vi tilbyder fast rengøring med ugentlige, hver anden uge eller månedlige besøg. Vi aftaler et fast tidspunkt og en fast pris, så du kan stole på, at det bliver gjort ordentligt hver gang.',
  },
  {
    question: 'Hvad gør jeg, hvis jeg ikke er tilfreds?',
    answer: 'Hvis du ikke er tilfreds med resultatet, skal du kontakte os hurtigst muligt på telefon eller mail. Vi gennemgår forholdene og aftaler en konkret udbedring, hvis der er noget, der skal rettes.',
  },
  {
    question: 'Hvordan betaler jeg?',
    answer: 'Faste kunder faktureres typisk månedligt med en samlet faktura. Ved engangsopgaver og flytterengøring betales senest 24 timer efter udført arbejde, med mindre andet er aftalt.',
  },
  {
    question: 'Hvad sker der ved afbud?',
    answer: 'Afbud eller ændringer bedes meddelt hurtigst muligt og helst pr. telefon på +45 22 65 02 26. Ved ændringer samme dag skal du ringe.',
  },
];

export const faqPreviewItems = faqItems.slice(0, 4);

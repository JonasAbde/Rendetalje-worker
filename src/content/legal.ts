import { company } from './company';

export const termsContent = {
  title: 'Handelsbetingelser',
  lastUpdated: '2024',
  sections: [
    {
      title: '1. Generelt',
      content: `Disse handelsbetingelser gælder for alle aftaler indgået mellem ${company.name} og kunden vedrørende rengøringsydelser.`,
    },
    {
      title: '2. Tilbud og aftale',
      content: `Alle tilbud er gældende i 30 dage, med mindre andet er angivet. En aftale er først bindende, når begge parter har accepteret vilkårene skriftligt eller via e-mail.`,
    },
    {
      title: '3. Priser og betaling',
      content: `Vores timepris er ${company.phone} inkl. moms med en minimumspris på 698 kr. inkl. moms. Faste kunder faktureres typisk månedligt. Engangsopgaver betales senest 24 timer efter udført arbejde, med mindre andet er aftalt. Ved for sen betaling pålægges rente og gebyr efter gældende lovgivning.`,
    },
    {
      title: '4. Afbud og ændringer',
      content: `Afbud eller ændringer bedes meddelt hurtigst muligt og helst pr. telefon på ${company.phone}. Ved afbud senere end 24 timer før det planlagte besøg forbeholder vi os ret til at fakturere for op til 2 timers arbejde.`,
    },
    {
      title: '5. Adgang',
      content: `Adgang aftales altid inden første besøg. Det kan ske ved, at kunden er hjemme, via nøgleboks, via aftalt nøgleplacering eller ved at vi opbevarer et nøglesæt efter aftale. Hvis adgangsforhold ændres, skal det meddeles inden næste planlagte besøg.`,
    },
    {
      title: '6. Klager og reklamation',
      content: `Hvis kunden ikke er tilfreds med resultatet, skal der reklameres hurtigst muligt — helst inden for 24 timer efter udført arbejde. Vi gennemgår forholdene og aftaler en konkret udbedring, hvis der er noget, der skal rettes.`,
    },
    {
      title: '7. Ansvar',
      content: `${company.name} er ansvarlig for skader forvoldt under rengøring, når der kan påvises forsømmelighed fra vores side. Skader skal anmeldes skriftligt senest 48 timer efter udført arbejde.`,
    },
    {
      title: '8. Aftalens ophør',
      content: `Faste aftaler kan opsiges med 14 dages varsel, med mindre andet er aftalt skriftligt.`,
    },
  ],
  contact: `Har du spørgsmål til vores handelsbetingelser, er du velkommen til at kontakte os på ${company.phone} eller ${company.email}.`,
};

export const privacyContent = {
  title: 'Privatlivspolitik',
  lastUpdated: '2024',
  sections: [
    {
      title: '1. Dataansvarlig',
      content: `${company.name}
${company.address}
CVR: ${company.cvr}
E-mail: ${company.email}
Telefon: ${company.phone}`,
    },
    {
      title: '2. Hvilke data indsamler vi?',
      content: `Vi indsamler følgende personoplysninger, når du kontakter os eller beder om et tilbud:
- Navn
- Adresse
- Telefonnummer
- E-mailadresse
- Oplysninger om din bolig eller virksomhed (størrelse, type rengøring etc.)

Vi indsamler kun de oplysninger, der er nødvendige for at kunne levere vores ydelser.`,
    },
    {
      title: '3. Formål med behandling',
      content: `Vi behandler dine personoplysninger til følgende formål:
- At kunne kontakte dig vedrørende dit tilbud eller din aftale
- At planlægge og udføre rengøringsopgaver
- At sende fakturaer og anden relevant kommunikation
- At overholde lovgivningsmæssige krav`,
    },
    {
      title: '4. Opbevaring',
      content: `Vi opbevarer dine personoplysninger så længe det er nødvendigt for at opfylde formålet, eller så længe det kræves af lovgivningen. Når en aftale ophører, slettes eller anonymiseres dine oplysninger efter regnskabslovens krav (typisk 5 år for regnskabsmateriale).`,
    },
    {
      title: '5. Dine rettigheder',
      content: `Du har følgende rettigheder i henhold til databeskyttelsesforordningen (GDPR):
- Ret til indsigt i dine oplysninger
- Ret til berigtigelse af unøjagtige oplysninger
- Ret til sletning af dine oplysninger (visse undtagelser gælder)
- Ret til begrænsning af behandling
- Ret til dataportabilitet
- Ret til at gøre indsigelse mod behandling`,
    },
    {
      title: '6. Deling med tredjeparter',
      content: `Vi deler ikke dine personoplysninger med tredjeparter, med mindre det er nødvendigt for at levere vores ydelser (f.eks. bogføring) eller påkrævet af lovgivningen.`,
    },
    {
      title: '7. Cookies',
      content: `Vores website anvender kun teknisk nødvendige cookies. Vi indsamler ikke oplysninger til markedsføringsformål via cookies.`,
    },
    {
      title: '8. Kontakt',
      content: `Har du spørgsmål til vores privatlivspolitik eller ønsker at udøve dine rettigheder, kan du kontakte os på ${company.email}.`,
    },
  ],
};

export const cookiesContent = {
  title: 'Cookiepolitik',
  lastUpdated: '2024',
  sections: [
    {
      title: 'Hvad er cookies?',
      content: `Cookies er små tekstfiler, som gemmes på din computer eller mobilenhed, når du besøger en hjemmeside. De bruges til at huske dine præferencer og forbedre din oplevelse.`,
    },
    {
      title: 'Hvilke cookies bruger vi?',
      content: `Vi bruger kun teknisk nødvendige cookies, som er essentielle for at hjemmesiden kan fungere korrekt. Disse cookies:
- Husker dine præferencer under besøget
- Sikrer hjemmesidens grundlæggende funktionalitet
- Indsamler ikke personlige oplysninger til markedsføring`,
    },
    {
      title: 'Tredjepartscookies',
      content: `Vi bruger ikke cookies fra tredjeparter til tracking, analyse eller markedsføringsformål.`,
    },
    {
      title: 'Sådan administrerer du cookies',
      content: `Du kan slette eller blokere cookies via din browsers indstillinger. Bemærk at hvis du deaktiverer cookies, kan visse funktioner på hjemmesiden ikke fungere korrekt.`,
    },
    {
      title: 'Kontakt',
      content: `Har du spørgsmål til vores cookiepolitik, kan du kontakte os på ${company.email}.`,
    },
  ],
};

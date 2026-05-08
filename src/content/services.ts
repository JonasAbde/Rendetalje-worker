import { Home, ArrowRight, Sparkles, Building2 } from "lucide-react";

export const coreServices = [
  {
    id: "fast-rengoering",
    title: "Fast rengøring",
    desc: "Få professionel fast rengøring Aarhus med stabil kvalitet — vi kommer ugentligt, hver 14. dag eller efter aftale. Som erfarent rengøringsfirma Aarhus sikrer vi, at dit hjem altid står rent og indbydende. Perfekt til travle familier og professionelle, der vil have mere tid til dét, der betyder noget.",
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
      "Fast rengøring i Aarhus er perfekt til dig, der ønsker et rent hjem uden at bruge din egen tid på rengøringen. Vi hjælper private hjem i hele Aarhus-området — både lejligheder i Aarhus C og Aarhus N, rækkehuse i Risskov, villaer i Højbjerg og parcelhuse i Viby J og Tilst. Uanset om du bor alene på 50 m² i Aarhus C eller er en familie på 4 i et 140 m² hus i Brabrand, skræddersyr vi en fast rengøringsordning der passer til jer. Typisk kommer vi ugentligt eller hver 14. dag, men vi tilpasser også frekvensen efter særlige behov — f.eks. hver 3. uge eller en gang om måneden. Mange af vores kunder i Aarhus og omegn værdsætter den tryghed det giver, at have en fast aftale med et pålideligt rengøringsfirma. Vi sørger for adgang via nøgleboks eller aftalt placering, så du ikke behøver at være hjemme. Efter den første grundrengøring etablerer vi en standard, og herefter holder vi dit hjem rent med jævn vedligeholdelse. Det giver dig ro i hverdagen og mere tid til familie, arbejde og fritid.",
    pricingLogic:
      "Prisen for fast rengøring afhænger af boligens størrelse, antal rum og den ønskede frekvens. Vores timepris er 399 kr. inkl. moms, og minimumsprisen er 698 kr. inkl. moms (svarende til 2 timer). Eksempler på typiske priser: En 2-værelses lejlighed på 60 m² i Aarhus C koster typisk 698 kr. pr. gang (ca. 2 timer). En 3-værelses lejlighed på 85 m² i Aarhus N koster omkring 873-1.047 kr. pr. gang (2,5-3 timer). Et hus på 120 m² i Risskov eller Højbjerg koster omkring 1.047-1.396 kr. pr. gang (3-4 timer). Ved den første rengøring lægger vi ca. 30% ekstra tid, da der skal indhentes efterslæb. Herefter fastlægger vi en fast pris pr. gang, så du altid ved, hvad det koster. Betaling sker månedligt på samlet faktura.",
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
    areas: [
      { city: "Aarhus C", text: "Bor du i en studiebolig på Frederiksbjerg eller en ejerlejlighed ved Vennelystparken? Vores faste rengøring i Aarhus C holder din bolig i topform med jævn ugentlig eller 14-dages service." },
      { city: "Aarhus N", text: "Fast rengøring i Aarhus N er ideel til både studieboliger og familieboliger i områder som Trøjborg og Universitetsparken. Vi sikrer, at dit hjem altid står rent og indbydende." },
      { city: "Aarhus V", text: "Fra lejligheder i Hasle til rækkehuse ved Brabrandstien — vores faste rengøring i Aarhus V tilpasser sig din boligtype og dine behov." },
      { city: "Risskov", text: "Villaer og parcelhuse i Risskov kræver løbende vedligeholdelse. Vores faste rengøring i Risskov sikrer, at både stue, køkken og badeværelse altid er klar til hverdagen." },
      { city: "Højbjerg", text: "Fast rengøring i Højbjerg til villaer og parcelhuse — vi kommer fast hver uge eller hver 14. dag og holder dit hjem skinnende rent, så du kan fokusere på familien." },
      { city: "Viby J", text: "Vores faste rengøring i Viby J dækker alt fra lejligheder ved Viby Torv til parcelhuse i de rolige villaveje. Få en fast aftale, der passer til din hverdag." },
      { city: "Tilst", text: "Som lokalt rengøringsfirma med base i Tilst er vi hurtigt hos dig. Fast rengøring i Tilst til både rækkehuse, parcelhuse og lejligheder." },
      { city: "Brabrand", text: "Fast rengøring i Brabrand er perfekt til familier i rækkehuse og parcelhuse. Vi tilpasser frekvensen, så det passer ind i jeres travle hverdag." },
      { city: "Hasselager", text: "Få en pålidelig fast rengøring i Hasselager til dit parcelhus eller rækkehus. Vi kommer som aftalt og sikrer en stabil, høj kvalitet hver gang." },
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
      {
        q: "Hvor hurtigt kan I starte?",
        a: "Vi kan typisk starte inden for 1-2 uger, ofte hurtigere afhængigt af din adresse og vores nuværende kapacitet i dit område.",
      },
      {
        q: "Hvad gør I ved særlige ønsker som ekstra gulvvask eller køkken?",
        a: "Vi tilpasser altid opgaverne efter dine ønsker. Bare sig til, så lægger vi det ind i vores faste plan for dit hjem.",
      },
    ],
  },
  {
    id: "flytterengoering",
    title: "Flytterengøring",
    desc: "Grundig flytterengøring Aarhus der sikrer dit depositum ved fraflytning. Vores professionelle flytterengøring dækker alle rum, hvidevarer og karme. Få et konkret tilbud på flytterengøring pris til din bolig i Aarhus og omegn.",
    icon: ArrowRight,
    path: "/services/flytterengoering",
    focus: [
      "Grundig aflevering/overtagelse",
      "Sikrer dit depositum",
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
      "Flytterengøring i Aarhus er for dig, der skal fraflytte en lejlighed i Aarhus C, Aarhus N eller Aarhus V og vil være sikker på at få hele dit depositum retur. Det er også for dig, der har købt et hus i Risskov, Højbjerg eller Viby J og vil starte på en frisk i et skinnende rent hjem. Mange boligselskaber og udlejere i Aarhus-området stiller krav om professionel rengøring ved fraflytning, og vores grundige flytterengøring lever op til selv de strengeste standarder. Vi ved, at en flytteproces kan være stressende — derfor gør vi det nemt for dig. Du giver os blot boligens størrelse og adresse, så giver vi et konkret tilbud på forhånd. Boligen skal være tømt for møbler og personlige ejendele, så vi kan komme til alle hjørner og overflader. Vi tager os af resten: fra afkalkning af badeværelse til rengøring af ovn, køleskab, skabe og skuffer. Resultatet er en bolig, der står helt klar til overlevering — uanset om du flytter fra en studiebolig på 40 m² i Aarhus C eller en 4-værelses lejlighed i Tilst.",
    pricingLogic:
      "Prisen for flytterengøring afhænger af boligens størrelse, stand og omfang — f.eks. om der er meget kalk på badeværelset, eller om hvidevarer skal renses i dybden. Vi giver altid et konkret tilbud på forhånd baseret på dine oplysninger. Vores timepris er 399 kr. inkl. moms. Eksempler på typiske priser: En 1-værelses studiebolig på 35 m² i Aarhus C koster typisk 1.047-1.396 kr. (3-4 timer). En 3-værelses lejlighed på 80 m² i Aarhus N koster typisk 1.745-2.443 kr. (5-7 timer). Et hus på 120 m² i Risskov eller Højbjerg koster typisk 2.443-3.141 kr. (7-9 timer). Tilvalg af indvendige vinduer lægger ca. 1 time pr. 30 m² gulvareal. Den endelige pris beregnes ud fra de faktiske arbejdstimer, og du modtager faktura senest 24 timer efter udført opgave.",
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
    areas: [
      { city: "Aarhus C", text: "Skal du fraflytte en lejlighed i Aarhus C og vil være sikker på at få hele dit depositum retur? Vores flytterengøring i Aarhus C dækker alt fra studieboliger på Frederiksbjerg til større ejerlejligheder ved Vennelystparken." },
      { city: "Aarhus N", text: "Flytterengøring i Aarhus N til studieboliger og familielejligheder i områder som Trøjborg og Universitetsparken. Vi sikrer, at boligen står helt klar til overlevering." },
      { city: "Aarhus V", text: "Når du fraflytter en lejlighed i Aarhus V, er en professionel flytterengøring vejen til at få dit depositum tilbage. Vi gør grundigt rent i alle rum inklusiv hvidevarer." },
      { city: "Risskov", text: "Flytterengøring i Risskov til villaer og parcelhuse — vi sikrer en komplet rengøring, så du kan overdrage dit hus til nye ejere i skinnende stand." },
      { city: "Højbjerg", text: "Skal du fraflytte et hus i Højbjerg? Vores flytterengøring i Højbjerg omfatter alle rum, paneler, hvidevarer og vinduer — intet overlades til tilfældighederne." },
      { city: "Viby J", text: "Få professionel flytterengøring i Viby J til både lejligheder og parcelhuse. Vi giver et fast tilbud på forhånd, så du ved præcis, hvad det koster." },
      { city: "Tilst", text: "Som lokalt rengøringsfirma med base i Tilst udfører vi flytterengøring i hele området — fra lejligheder til parcelhuse med garanti for et grundigt resultat." },
      { city: "Brabrand", text: "Flytterengøring i Brabrand til rækkehuse og parcelhuse. Vi tager os af rengøringen, så du kan koncentrere dig om selve flytningen." },
      { city: "Hasselager", text: "Book professionel flytterengøring i Hasselager og vær sikker på at bestå dit flyttesyn. Vi rengør alle rum grundigt inklusiv ovn, køleskab og skabe." },
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
      {
        q: "Hvor lang tid tager en flytterengøring?",
        a: "Det afhænger af boligens størrelse og stand. En 2-værelses lejlighed tager typisk 4-5 timer, mens et hus på 120 m² kan tage 7-9 timer med 2 medarbejdere.",
      },
      {
        q: "Hvad hvis udlejer ikke godkender rengøringen?",
        a: "Hvis der er specifikke punkter udlejer påpeger, som var en del af aftalen, udbedrer vi det uden ekstra beregning. Vi står inde for vores arbejde.",
      },
    ],
  },
  {
    id: "hovedrengoering",
    title: "Hovedrengøring",
    desc: "En dybdegående hovedrengøring Aarhus der kommer i alle kroge — paneler, døre, karme og afkalkning. Få en komplet rengøring af dit hjem med svanemærkede produkter. Perfekt som opstart på en fast ordning eller før højtider og fester.",
    icon: Sparkles,
    path: "/services/hovedrengoering",
    focus: [
      "Dybdegående gennemgang af hele boligen",
      "Perfekt til opstart eller ophobet behov",
      "Afkalkning, paneler og detaljer",
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
      "Hovedrengøring i Aarhus er ideelt for dig, der har brug for en ekstra grundig rengøring af dit hjem — måske fordi der er ophobet støv og snavs, eller fordi du ønsker en frisk start i en ny bolig. Vi udfører hovedrengøring i hele Aarhus-området: lejligheder i Aarhus C og Aarhus V, rækkehuse i Brabrand, villaer i Højbjerg og parcelhuse i Tilst og Hasselager. Mange af vores kunder bruger hovedrengøring som opstart på en fast rengøringsordning — den første grundige gennemgang sikrer, at den efterfølgende vedligeholdelse kan holdes på et lavere timeforbrug. Hovedrengøring er også populæt op til jul, påske eller andre højtider, hvor man ønsker at have skinnende rent hjem til gæster. Det er ligeledes en perfekt løsning, hvis du har haft en periode med travlhed, hvor rengøringen er blevet nedprioriteret, og du har brug for professionel hjælp til at komme ajour. Vi går i dybden med alle rum — paneler, døre, karme, lister og stikkontakter bliver tørret af, og badeværelset bliver afkalket grundigt.",
    pricingLogic:
      "Da en hovedrengøring er mere tidskrævende end almindelig vedligeholdelse, afhænger prisen af boligens størrelse, stand og omfang. Vores timepris er 399 kr. inkl. moms. Eksempler på typiske priser: En 2-værelses lejlighed på 60 m² i Aarhus C koster typisk 1.047-1.571 kr. (3-4,5 timer). En 4-værelses lejlighed på 100 m² i Aarhus N koster typisk 1.745-2.443 kr. (5-7 timer). Et hus på 130 m² i Højbjerg eller Risskov koster typisk 2.443-3.490 kr. (7-10 timer). Tilvalg af ovn og køleskab lægger ca. 0,5 time hver, og indvendige vinduer lægger ca. 1 time pr. 30 m². Vi giver dig gerne et estimat eller konkret tilbud på forhånd, så du ved, hvad du har i vente.",
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
    areas: [
      { city: "Aarhus C", text: "Trænger din lejlighed i Aarhus C til en grundig omgang? Vores hovedrengøring i Aarhus C dækker paneler, døre, karme og afkalkning — perfekt til både studieboliger og større lejligheder." },
      { city: "Aarhus N", text: "Hovedrengøring i Aarhus N til både gamle lejligheder med paneler og lister samt nyere familieboliger. Vi fjerner ophobet støv og giver dit hjem en frisk start." },
      { city: "Aarhus V", text: "Få en komplet hovedrengøring i Aarhus V — vi går i dybden med alle rum, afkalker badeværelset og rengør køkkenet grundigt. Perfekt op til højtider eller som opstart på fast rengøring." },
      { city: "Risskov", text: "Villaer i Risskov fortjener en grundig hovedrengøring mindst et par gange om året. Vi rengør alle rum i dybden inklusiv paneler, lister og svært tilgængelige steder." },
      { city: "Højbjerg", text: "Hovedrengøring i Højbjerg til parcelhuse og villaer — vi sørger for, at dit hjem står skinnende rent fra kælder til kvist. Perfekt inden gæster eller efter en travl periode." },
      { city: "Viby J", text: "Vores hovedrengøring i Viby J er ideel til både lejligheder og huse. Vi går i dybden med alle overflader og sikrer et resultat, du kan mærke og se." },
      { city: "Tilst", text: "Som lokalt rengøringsfirma i Tilst tilbyder vi grundig hovedrengøring til parcelhuse og rækkehuse. Perfekt som engangsydelse eller forberedelse til en fast ordning." },
      { city: "Brabrand", text: "Hovedrengøring i Brabrand til familier der har brug for en grundig rengøring. Vi kommer og giver dit hjem en frisk start med fokus på detaljen." },
      { city: "Hasselager", text: "Book en professionel hovedrengøring i Hasselager når der trænger til en ekstra grundig omgang. Vi rengør alle rum med svanemærkede produkter." },
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
      {
        q: "Hvor lang tid tager en hovedrengøring?",
        a: "Det afhænger af boligens størrelse og tilstand. En standard 80 m² lejlighed tager typisk 4-6 timer, mens et større hus kan tage 8-10 timer.",
      },
      {
        q: "Kan jeg få en hovedrengøring som engangsydelse?",
        a: "Ja, absolut. Mange booker en hovedrengøring som engangsydelse — f.eks. op til jul, efter en fest eller når der bare trænger til en grundig omgang.",
      },
    ],
  },
  {
    id: "erhvervsrengoering",
    title: "Erhvervsrengøring",
    desc: "Pålidelig erhvervsrengøring Aarhus til kontorer, showrooms og mindre virksomheder. Vi tilpasser os jeres åbningstider og sikrer et rent og sundt arbejdsmiljø. Faste aftaler med klar kommunikation og månedlig faktura.",
    icon: Building2,
    path: "/services/erhvervsrengoering",
    focus: [
      "Kontorer, showroom, mindre virksomheder",
      "Kan udføres før/efter arbejdstid",
      "Månedlig samlet faktura",
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
      "Vores erhvervsrengøring henvender sig til mindre og mellemstore virksomheder i Aarhus og omegn, der ønsker en pålidelig rengøringspartner. Vi gør rent hos kontorvirksomheder i Aarhus C, showrooms i Aarhus N, klinikker i Risskov og mindre produktionslokaler i Viby J og Tilst. Vi forstår, at jeres arbejdsplads skal være ren og indbydende for både medarbejdere og kunder — derfor lægger vi vægt på stabil kvalitet og diskretion. Vi tilpasser os jeres åbningstider og kan udføre rengøringen om aftenen, tidligt om morgenen eller i weekenden, så vi ikke forstyrrer jeres daglige drift. Uanset om I har brug for rengøring dagligt, to gange om ugen eller ugentligt, laver vi en skræddersyet aftale. Vi bruger udelukkende svanemærkede produkter, hvilket sikrer et godt indeklima og minimal belastning af miljøet. Fakturering sker månedligt på samlet faktura, så I har fuldt overblik over jeres udgifter til rengøring.",
    pricingLogic:
      "Prisen for erhvervsrengøring afhænger af lokalernes størrelse, antal medarbejdere og den ønskede frekvens. Vores timepris er 399 kr. inkl. moms. Eksempler: Et kontor på 50 m² i Aarhus C med 1 ugentlig rengøring koster typisk 698-1.047 kr. pr. gang (2-3 timer). Et kontor på 100 m² i Aarhus N med 2 gange om ugen koster typisk 1.396-1.745 kr. pr. gang (4-5 timer). Et showroom på 150 m² i Viby J med daglig rengøring aftales individuelt. Vi udarbejder altid et konkret, skræddersyet tilbud til erhvervskunder efter en uforpligtende besigtigelse af lokalerne. Så kender I prisen på forhånd.",
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
    areas: [
      { city: "Aarhus C", text: "Har du kontorlokaler i Aarhus C, der har brug for regelmæssig rengøring? Vores erhvervsrengøring i Aarhus C sikrer et rent og professionelt miljø for dine medarbejdere og kunder." },
      { city: "Aarhus N", text: "Erhvervsrengøring i Aarhus N til kontorer, showrooms og klinikker i områder som Trøjborg og Universitetsparken. Vi tilpasser os jeres åbningstider." },
      { city: "Aarhus V", text: "Vi tilbyder erhvervsrengøring i Aarhus V til mindre virksomheder og kontorfællesskaber. Fleksible aftaler med rengøring før eller efter arbejdstid." },
      { city: "Risskov", text: "Klinikker, praksis og kontorer i Risskov får professionel erhvervsrengøring med fokus på hygiejne og diskretion. Vi kommer uden for åbningstid." },
      { city: "Højbjerg", text: "Erhvervsrengøring i Højbjerg til kontorer og showrooms. Vi sikrer et sundt og rent arbejdsmiljø med svanemærkede produkter og faste ugentlige aftaler." },
      { city: "Viby J", text: "Få pålidelig erhvervsrengøring i Viby J til kontorlokaler og mindre produktionsarealer. Vi laver en skræddersyet aftale baseret på jeres specifikke behov." },
      { city: "Tilst", text: "Som lokalt rengøringsfirma med base i Tilst tilbyder vi erhvervsrengøring til virksomheder i området. Hurtig respons og fleksible aftaler." },
      { city: "Brabrand", text: "Erhvervsrengøring i Brabrand til kontorer, værksteder og showrooms. Vi tilpasser rengøringen efter jeres åbningstider og behov." },
      { city: "Hasselager", text: "Vi udfører erhvervsrengøring i Hasselager til mindre og mellemstore virksomheder. Faste aftaler med månedlig faktura og stabil kvalitet." },
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
      {
        q: "Hvor ofte bør vi få gjort rent?",
        a: "Det afhænger af jeres behov og antal medarbejdere. De fleste kontorer klarer sig med 1-2 gange om ugen. Vi anbefaler gerne en frekvens efter et uforpligtende besøg.",
      },
      {
        q: "Kan I håndtere særlige ønsker som desinficering eller ekstra rengøring?",
        a: "Ja, vi tilpasser os jeres behov. Har I brug for ekstra desinficering af toiletter eller rengøring af personalekøkken, lægger vi det ind i aftalen.",
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

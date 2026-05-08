import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  CreditCard,
  FileText,
} from "lucide-react";

import { company } from "@/content/company";
import { pricing } from "@/content/pricing";

export default function RengoeringPriser() {
  return (
    <div className="flex flex-col">
      <Helmet>
        <link
          rel="canonical"
          href="https://rendetalje.dk/guides/hvad-koster-rengoering"
        />
        <title>
          Hvad koster rengøring i Aarhus? | Prisguide 2026 | {company.name}
        </title>
        <meta
          name="description"
          content="Få overblik over priser på rengøring i Aarhus: timepris 399 kr, minimumspris 698 kr. Lær hvad flytterengøring, fast rengøring og hovedrengøring koster — inkl. servicefradrag og depositumsguide."
        />
        <meta
          property="og:title"
          content={`Hvad koster rengøring i Aarhus? | Prisguide 2026 | ${company.name}`}
        />
        <meta
          property="og:description"
          content="Få overblik over priser på rengøring i Aarhus: timepris, servicefradrag og typiske priser på flytterengøring, fast rengøring og hovedrengøring."
        />
        <meta
          property="og:url"
          content="https://rendetalje.dk/guides/hvad-koster-rengoering"
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://rendetalje.dk/logo.webp" />
        <meta property="og:locale" content="da_DK" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Hvad koster rengøring i Aarhus? | Prisguide 2026 | ${company.name}`}
        />
        <meta
          name="twitter:description"
          content="Få overblik over priser på rengøring i Aarhus."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 pt-24 pb-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-green-900/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(22,163,74,0.15),transparent_50%)]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/50 text-green-300 text-sm font-medium mb-6 border border-green-700/50"
            >
              <FileText className="w-4 h-4" />
              Prisguide
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]"
            >
              Hvad koster rengøring i Aarhus? Komplet prisguide 2026
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl"
            >
              Få et gennemskueligt overblik over priser på rengøring i Aarhus.
              Vi gennemgår timepriser, typiske priser for forskellige ydelser og
              hvordan du sparer penge.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/kontakt"
                className="inline-flex h-14 items-center justify-center rounded-full bg-green-600 px-8 text-base font-medium text-white transition-colors hover:bg-green-700"
              >
                Få et tilbud på rengøring <ArrowRight size={20} className="ml-2" />
              </Link>
              <a
                href={`tel:${company.phone.replace(/\s+/g, "")}`}
                className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 transition-colors hover:bg-slate-50"
              >
                <Phone size={20} className="mr-2" />
                Ring til os — {company.phone}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timepris Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <CreditCard className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Timepris for rengøring i Aarhus
              </h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Hos Rendetalje arbejder vi med en gennemskuelig timepris på{" "}
              <strong className="text-slate-900">{pricing.hourlyRate} kr. inkl. moms</strong>.
              Det betyder, at du altid ved, hvad du betaler for, og at prisen
              afspejler den tid, opgagen faktisk tager.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Vi har en minimumspris på <strong className="text-slate-900">{pricing.minimumPrice} kr. inkl. moms</strong>,
              hvilket svarer til cirka 2 timers arbejde. Det sikrer, at selv små
              opgaver kan udføres med den grundighed og kvalitet, vi står for.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Sammenlignet med andre rengøringsfirmaer i Aarhus ligger vores
              timepris i den konkurrencedygtige ende. Nogle discountfirmaer
              tilbyder lavere timepriser men tager ofte tillæg for udstyr,
              transport eller rengøringsmidler — hos os er alt inkluderet i
              timeprisen. Vi medbringer svanemærkede produkter og professionelt
              udstyr uden ekstra beregning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Price Overview */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
              Typiske priser på rengøring i Aarhus
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Priserne nedenfor er vejledende og baseret på typiske opgaver. Den
              endelige pris afhænger af boligens størrelse, stand og særlige
              ønsker.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Fast rengøring */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Fast rengøring
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  2-værelses lejlighed 60 m² (Aarhus C): fra 698 kr/gang
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  3-værelses lejlighed 85 m² (Aarhus N): 873–1.047 kr/gang
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  Hus 120 m² (Risskov/Højbjerg): 1.047–1.396 kr/gang
                </li>
              </ul>
              <p className="text-xs text-slate-500">
                Pris pr. besøg. Ugentligt eller hver 14. dag.
              </p>
            </motion.div>

            {/* Flytterengøring */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Flytterengøring
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  Studiebolig 35 m² (Aarhus C): 1.047–1.396 kr
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  3-værelses 80 m² (Aarhus N): 1.745–2.443 kr
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  Hus 120 m² (Risskov/Højbjerg): 2.443–3.141 kr
                </li>
              </ul>
              <p className="text-xs text-slate-500">
                Inkl. hvidevarer, skabe og skuffer. Tilbud før opstart.
              </p>
            </motion.div>

            {/* Hovedrengøring */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Hovedrengøring
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  2-værelses 60 m² (Aarhus C): 1.047–1.571 kr
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  4-værelses 100 m² (Aarhus N): 1.745–2.443 kr
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  Hus 130 m² (Højbjerg/Risskov): 2.443–3.490 kr
                </li>
              </ul>
              <p className="text-xs text-slate-500">
                Dybdegående rengøring. Afkalkning, paneler og detaljer.
              </p>
            </motion.div>

            {/* Erhvervsrengøring */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Erhvervsrengøring
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  Kontor 50 m² (Aarhus C): 698–1.047 kr/gang
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  Kontor 100 m² (Aarhus N): 1.396–1.745 kr/gang
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  Showroom 150 m²: aftales individuelt
                </li>
              </ul>
              <p className="text-xs text-slate-500">
                Skræddersyet tilbud efter besigtigelse. Månedlig faktura.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Servicefradrag Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">
              Servicefradrag — få skattefradrag for rengøring
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Vidste du, at du kan få <strong className="text-slate-900">servicefradrag (tidligere håndværkerfradrag)</strong>{" "}
              for rengøring i hjemmet? Det betyder, at du reelt set betaler
              mindre, end hvad fakturaen lyder på.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Servicefradraget dækker arbejdsløn inkl. moms for almindelig
              rengøring i hjemmet. I 2026 kan du få fradrag for op til 17.500
              kr. pr. person pr. år for serviceydelser (rengøring, børnepasning
              mv.). Det giver en skatteværdi på op til cirka 4.550 kr. pr. person.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              For et par, der begge udnytter fradraget, kan den samlede
              besparelse være op mod 9.100 kr. om året. Det gør fast rengøring
              endnu mere overkommeligt for familier i Aarhus.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Fradraget trækkes direkte i skatten via din årsopgørelse — du skal
              blot gemme fakturaerne fra os og indberette beløbet. Hvis du har
              spørgsmål til servicefradrag, er du velkommen til at ringe til os.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Depositum Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">
              Flytterengøring og depositum — undgå at betale dobbelt
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Når du flytter fra en lejebolig i Aarhus, er det typisk
              udlejer/beboerklagenævnet der afgør, om rengøringen er
              tilstrækkelig. Hvis den ikke lever op til standarden, kan udlejer
              tilbageholde en del af dit depositum til at dække udgiften til en
              professionel rengøring.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Problemet er, at udlejer ofte får en højere pris end hvad du selv
              ville have betalt. Derfor kan det bedst betale sig at booke
              professionel flytterengøring på forhånd — så har du fuld kontrol
              over prisen og kvaliteten.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Hos Rendetalje giver vi dig altid et fast tilbud på forhånd, så du
              ved præcis, hvad du betaler. Vores flytterengøring er målrettet
              det danske flyttesyn, og vi har erfaring med at bestå selv de
              strengeste gennemgange — både hos private udlejere og store
              boligselskaber i Aarhus.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Typisk koster en flytterengøring af en 2-værelses lejlighed på 60
              m² i Aarhus C omkring 1.571–1.745 kr. Til sammenligning kan
              udlejer tilbageholde 3.000–5.000 kr. af dit depositum, hvis de
              selv skal hyre en dyrere rengøring. Så en investering i en
              professionel flytterengøring betaler sig som regel mere end
              dobbelt tilbage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Price comparison */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">
              Hvad påvirker prisen på rengøring?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Prisen for rengøring afhænger af flere faktorer. Her er de
              vigtigste:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-900">Boligens størrelse:</strong>{" "}
                  <span className="text-slate-600">
                    Jo flere kvadratmeter, desto mere tid kræver rengøringen. En
                    stor villa i Risskov tager naturligvis længere tid end en
                    studiebolig i Aarhus C.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-900">Stand og tilstand:</strong>{" "}
                  <span className="text-slate-600">
                    Hvis der er ophobet snavs, kalk eller fedt, kræver det mere
                    tid og dermed en højere pris. En grundig førstegangsrengøring
                    tager typisk 30% længere tid end efterfølgende besøg.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-900">Frekvens:</strong>{" "}
                  <span className="text-slate-600">
                    Ved faste aftaler (ugentligt eller hver 14. dag) kan vi
                    optimere tidsforbruget, fordi der ikke skal indhentes
                    efterslæb. Det giver en mere stabil og forudsigelig pris.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-900">Tilvalg:</strong>{" "}
                  <span className="text-slate-600">
                    Ønsker du ekstra ydelser som indvendige vinduer, ovnrengøring
                    eller køleskab? Det lægger typisk 0,5–1 time pr. ekstra
                    opgave til prisen.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-900">Adgangsforhold:</strong>{" "}
                  <span className="text-slate-600">
                    Hvis vi skal have adgang via nøgleboks eller særlige
                    arrangementer, har det sjældent betydning for prisen — vi
                    opkræver ikke transporttillæg inden for Aarhus-området.
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FAQ - Price */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 text-center">
              Ofte stillede spørgsmål om priser
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Hvorfor er der en minimumspris?
                </h3>
                <p className="text-slate-600">
                  Minimumsprisen på 698 kr. dækker 2 timers arbejde. Det sikrer,
                  at vi kan udføre en grundig rengøring og at opgaven er
                  økonomisk rentabel for os at køre til. For meget små opgaver
                  anbefaler vi at samle flere ydelser eller booke en
                  hovedrengøring i stedet.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Er transport inkluderet i prisen?
                </h3>
                <p className="text-slate-600">
                  Ja, transport inden for Aarhus-området er inkluderet i vores
                  timepris. Vi opkræver ikke ekstra for kørsel til Aarhus C,
                  Aarhus N, Aarhus V, Risskov, Højbjerg, Viby J, Tilst,
                  Brabrand eller Hasselager.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Kan jeg få et fast tilbud på forhånd?
                </h3>
                <p className="text-slate-600">
                  Ja, vi giver altid et fast tilbud eller et præcist estimat
                  inden vi går i gang. For flytterengøring og hovedrengøring
                  modtager du et konkret tilbud baseret på dine oplysninger om
                  boligens størrelse og stand.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Hvordan fungerer servicefradrag?
                </h3>
                <p className="text-slate-600">
                  Du betaler det fulde beløb til os og får fradraget på din
                  årsopgørelse via Skat. Du skal blot indberette beløbet du har
                  betalt for rengøring, og Skat trækker automatisk fradraget fra
                  i din skat. Gem fakturaerne fra os som dokumentation.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Betaler jeg før eller efter rengøringen?
                </h3>
                <p className="text-slate-600">
                  For engangsopgaver betaler du efter udført arbejde. Du
                  modtager en faktura senest 24 timer efter opgaven er udført.
                  For faste aftaler kører vi månedlig faktura, så du har fuldt
                  overblik over dine udgifter.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-green-600 text-white text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Få et uforpligtende tilbud på rengøring
          </h2>
          <p className="text-xl text-green-100 mb-10">
            Udfyld vores formular eller ring til os. Vi vender tilbage med et
            konkret tilbud baseret på dine behov.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/kontakt"
              className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-green-600 transition-colors hover:bg-slate-50"
            >
              Få et tilbud
            </Link>
            <a
              href={`tel:${company.phone.replace(/\s+/g, "")}`}
              className="inline-flex h-14 items-center justify-center rounded-full bg-transparent border-2 border-white px-8 text-base font-medium text-white transition-colors hover:bg-white/10"
            >
              Ring til os — {company.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

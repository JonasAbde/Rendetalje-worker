import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  Lightbulb,
  ListChecks,
  FileText,
  Sparkles,
} from "lucide-react";

import { company } from "@/content/company";

const checklist = [
  { item: "Ovn — aftagelige dele rengøres, indersiden affedtes" },
  { item: "Køleskab — tøes af, rengøres ind- og udvendigt" },
  { item: "Emhætte — filtre afvaskes eller skiftes" },
  { item: "Komfur & kogeplader — affedtes grundigt" },
  { item: "Mikrobølgeovn — rengøres indvendigt" },
  { item: "Skabe & skuffer — tømmes og aftørres indvendigt" },
  { item: "Vinduer — pudses både ind- og udvendigt, karme tørres af" },
  { item: "Gulve — støvsuges og vaskes, hjørner og fodpaneler med" },
  { item: "Vægge — pletvaskes, især ved kontakter og dørhåndtag" },
  { item: "Badeværelse — kalk fjernes, fliser tørres af, toilet rengøres" },
  { item: "Loft & lamper — støv fjernes fra lofter og armaturer" },
  { item: "Paneler & lister — støvtørres hele vejen rundt" },
];

const tips = [
  {
    title: "Tag før-billeder",
    desc: "Fotografer alle rum inden du flytter ind og igen inden fraflytning. Det er din dokumentation, hvis udlejer klager.",
  },
  {
    title: "Book professionel rengøring",
    desc: "En professionel rengøringsvirksomhed som Rendetalje ved præcis, hvad der kræves for at bestå et flyttesyn. Vi har set alle faldgruberne før.",
  },
  {
    title: "Giv dig tid",
    desc: "Start i god tid. En grundig flytterengøring tager 4-8 timer afhængigt af boligens størrelse og stand.",
  },
  {
    title: "Aflever nøgler korrekt",
    desc: "Få kvittering for nøgleaflevering, og sørg for at lejeindestående-formularen er udfyldt korrekt.",
  },
];

const reasons = [
  {
    reason: "Manglende rengøring",
    desc: "Støv, snavs og rod er den hyppigste årsag til, at udlejer tilbageholder depositum.",
  },
  {
    reason: "Kalk på badeværelset",
    desc: "Kalkaflejringer på fliser, glas og armaturer bliver næsten altid påtalt ved synet.",
  },
  {
    reason: "Fedtet køkken",
    desc: "Emhætte, komfur og skabslåger med fedtfilm er en sikker rød kugle hos inspektøren.",
  },
  {
    reason: "Støvede hjørner og paneler",
    desc: "Glemte lister, top af skabe og bag radiatorer afslører en overfladisk rengøring.",
  },
];

export default function FlyttesynGuide() {
  return (
    <div className="flex flex-col">
      <Helmet>
        <link
          rel="canonical"
          href="https://rendetalje.dk/guides/saadan-bestaar-du-dit-flyttesyn"
        />
        <title>
          Sådan består du dit flyttesyn | Guide | {company.name}
        </title>
        <meta
          name="description"
          content="Få den komplette guide til at bestå dit flyttesyn i Aarhus. Lær hvad udlejer kigger efter, få en detaljeret tjekliste og få professionel flytterengøring."
        />
        <meta
          property="og:title"
          content={`Sådan består du dit flyttesyn | Guide | ${company.name}`}
        />
        <meta
          property="og:description"
          content="Få den komplette guide til at bestå dit flyttesyn i Aarhus. Lær hvad udlejer kigger efter, få en detaljeret tjekliste og få professionel flytterengøring."
        />
        <meta
          property="og:url"
          content="https://rendetalje.dk/guides/saadan-bestaar-du-dit-flyttesyn"
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://rendetalje.dk/logo.webp" />
        <meta property="og:locale" content="da_DK" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Sådan består du dit flyttesyn | Guide | ${company.name}`}
        />
        <meta
          name="twitter:description"
          content="Få den komplette guide til at bestå dit flyttesyn i Aarhus."
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
              Guide & Tjekliste
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]"
            >
              Sådan består du dit flyttesyn — komplet guide
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl"
            >
              Få styr på dit flyttesyn i Aarhus. Vi guider dig igennem, hvad
              udlejer kigger efter, og hvordan du sikrer dig hele dit
              depositum.
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
                Få et uforpligtende tilbud på flytterengøring{" "}
                <ArrowRight size={20} className="ml-2" />
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

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Hvorfor er flyttesynet så vigtigt?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Når du flytter fra en lejebolig i Aarhus, skal der typisk
              afholdes et flyttesyn sammen med udlejer eller en
              ejendomsadministrator. Formålet er at vurdere boligens stand og
              sammenholde den med indflytningsrapporten.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Hvis boligen ikke er rengjort tilstrækkeligt, kan udlejer
              tilbageholde en del af — eller hele — dit depositum. I værste
              fald kan du blive pålagt at betale for en professionel
              rengøring efterfølgende, ofte til en højere pris end hvis du
              selv havde booket den.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Hos {company.name} hjælper vi dig med at undgå den situation.
              Vores flytterengøring er målrettet netop det danske flyttesyn,
              og vi ved præcis, hvad der skal til for at bestå — første gang.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why landlords fail tenants */}
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
              Hvorfor fejler lejere flyttesynet?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Erfaringen viser, at det oftest er de samme ting, der går igen,
              når udlejer påtaler mangler ved fraflytning.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {r.reason}
                </h3>
                <p className="text-sm text-slate-600">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <ListChecks className="w-5 h-5 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Komplet tjekliste til flyttesynet
              </h2>
            </div>
            <p className="text-lg text-slate-600 mb-10 max-w-3xl">
              Brug denne tjekliste til at sikre, at du ikke overser noget.
              Kryds af efterhånden som du gør rent — eller overlad det hele
              til os.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {checklist.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100"
              >
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-slate-700">{c.item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
              Tips til at bestå flyttesynet
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Få styr på detaljerne med disse gode råd fra vores erfarne
              rengøringspersonale.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tips.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-5">
                  <span className="text-green-700 font-bold text-lg">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {t.title}
                </h3>
                <p className="text-slate-600">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Get a quote */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-green-50 rounded-3xl p-8 md:p-12 border border-green-100 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Få et uforpligtende tilbud på flytterengøring
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Vi kommer ud til din bolig i Aarhus, giver en fast pris og
              sikrer, at du består dit flyttesyn — eller du betaler ikke.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/kontakt"
                className="inline-flex h-14 items-center justify-center rounded-full bg-green-600 px-8 text-base font-medium text-white transition-colors hover:bg-green-700"
              >
                Få et uforpligtende tilbud{" "}
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <a
                href={`tel:${company.phone.replace(/\s+/g, "")}`}
                className="inline-flex h-14 items-center justify-center rounded-full border-2 border-green-600 px-8 text-base font-medium text-green-600 transition-colors hover:bg-green-100"
              >
                <Phone size={20} className="mr-2" />
                Ring til os — {company.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-green-600 text-white text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Klar til at booke din flytterengøring?
          </h2>
          <p className="text-xl text-green-100 mb-10">
            Ring eller skriv til os, så finder vi en løsning, der passer til
            dig og din bolig i Aarhus.
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
              <Phone size={20} className="mr-2" />
              Ring til os
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

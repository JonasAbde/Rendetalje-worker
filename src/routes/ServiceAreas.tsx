import { motion } from "motion/react";
import { MapPin, Phone, ArrowRight, CheckCircle2, Navigation } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { company } from "@/content/company";

const serviceAreas = [
  {
    name: "Aarhus C",
    postalCode: "8000",
    description:
      "Aarhus Centrum er hjerte af byen med tæt bebyggelse af lejligheder, ungdomsboliger og studerende. Her er der stor efterspørgsel på flytterengøring, da mange unge flytter til og fra byen hvert semester.",
    popular: "Flytterengøring og hovedrengøring",
  },
  {
    name: "Aarhus N",
    postalCode: "8200",
    description:
      "Universitetsområdet med kollegier, nyere lejlighedskomplekser og villakvarterer. Vi udfører både fast rengøring for travle studerende og familier samt grundige flytterengøringer ved semesterstart.",
    popular: "Fast rengøring og flytterengøring",
  },
  {
    name: "Aarhus V",
    postalCode: "8210",
    description:
      "Brabrand-området med parcelhuskvarterer, rækkehuse og større boligforeninger. Populært blandt børnefamilier, der sætter pris på stabil og pålidelig hjemmerengøring.",
    popular: "Fast rengøring og hovedrengøring",
  },
  {
    name: "Risskov",
    postalCode: "8240",
    description:
      "Strandkvarteret nord for Aarhus med store villaer, rækkehuse og lejligheder. Risskov er kendt for sine større boliger med havestuer og moderne køkkener, der kræver grundig pleje.",
    popular: "Fast rengøring og hovedrengøring",
  },
  {
    name: "Højbjerg",
    postalCode: "8270",
    description:
      "Eksklusivt villakvarter med skovområder og dyre boliger. Vi hjælper både med løbende vedligehold og dybdegående rengøring i Højbjergs mange større hjem.",
    popular: "Fast rengøring og erhvervsrengøring",
  },
  {
    name: "Viby J",
    postalCode: "8260",
    description:
      "Stor bydel med en blanding af lejligheder, rækkehuse og parcelhuse. Viby J har et bredt udvalg af boligtyper, og vi udfører alt fra hurtig rengøring til omfattende flytterengøring.",
    popular: "Flytterengøring og fast rengøring",
  },
  {
    name: "Tilst",
    postalCode: "8381",
    description:
      "Vores hjembase og et område med billigere boliger, tæt på motorvej og med gode forbindelser til resten af Aarhus. Her betjener vi mange familier og pendlere.",
    popular: "Fast rengøring og hovedrengøring",
  },
  {
    name: "Brabrand",
    postalCode: "8220",
    description:
      "Børnefamiliekvarter med parcelhuse, tæt på Årslev Engsø og naturskønne omgivelser. Vi tilbyder pålidelig hjemmerengøring til de lokale familier.",
    popular: "Fast rengøring og hovedrengøring",
  },
  {
    name: "Hasselager",
    postalCode: "8361",
    description:
      "Nybyggeri og moderne parcelhuse, populært blandt børnefamilier og førstegangskøbere. Her er der især brug for grundig rengøring i de nyere boliger.",
    popular: "Fast rengøring og hovedrengøring",
  },
];

export default function ServiceAreas() {
  return (
    <div className="flex flex-col">
      <Helmet>
        <link rel="canonical" href="https://rendetalje.dk/service-omraade" />
        <title>
          Serviceområder — {company.name} dækker hele Aarhus
        </title>
        <meta
          name="description"
          content="Rendetalje tilbyder professionel rengøring i hele Aarhus — Aarhus C, Aarhus N, Aarhus V, Risskov, Højbjerg, Viby J, Tilst, Brabrand og Hasselager. Få et tilbud i dag."
        />
        <meta
          property="og:title"
          content={`Serviceområder — ${company.name} dækker hele Aarhus`}
        />
        <meta
          property="og:description"
          content="Rendetalje tilbyder professionel rengøring i hele Aarhus — Aarhus C, Aarhus N, Aarhus V, Risskov, Højbjerg, Viby J, Tilst, Brabrand og Hasselager."
        />
        <meta
          property="og:url"
          content="https://rendetalje.dk/service-omraade"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://rendetalje.dk/logo.webp" />
        <meta property="og:locale" content="da_DK" />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 pt-24 pb-28">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-green-900/30" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/50 text-green-300 text-sm font-medium mb-6 border border-green-700/50"
            >
              <Navigation className="w-4 h-4" />
              Serviceområder
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
            >
              Serviceområder — {company.name} dækker hele Aarhus
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-slate-300 leading-relaxed"
            >
              Med base i Tilst kører vi til alle hjørner af Aarhus. Uanset om
              du bor i centrum, ved stranden i Risskov eller i nybyggeriet i
              Hasselager — så er vi klar til at hjælpe dig.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Områder vi betjener
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Vi dækker alle større bydele i Aarhus.
              <span className="text-green-600 font-medium">
                {" "}Ingen transporttillæg
              </span>{" "}
              inden for byen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-green-200 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">
                      {area.name}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {area.postalCode}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {area.description}
                </p>
                <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span className="text-xs text-slate-500">
                    Populært: {area.popular}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-green-600 text-white text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">
            Klar til at få et tilbud?
          </h2>
          <p className="text-xl text-green-100 mb-10">
            Uanset om du er i Aarhus C, Tilst eller et af de omkringliggende
            områder, så er vi klar til at hjælpe dig med professionel
            rengøring.
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

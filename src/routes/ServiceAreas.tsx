import { motion } from "motion/react";
import { MapPin, Phone, ArrowRight, CheckCircle2, Navigation } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { company } from "../content/company";

const serviceAreas = [
  {
    name: "Aarhus C",
    postalCodes: ["8000", "8210"],
    description: "Midtbyen, Frederiksbjerg, Vesterbro, Trøjborg",
    travelTime: "0-15 min",
  },
  {
    name: "Risskov",
    postalCodes: ["8240"],
    description: "Vejlby, Risskov, Vejlby-Risskov",
    travelTime: "10-20 min",
  },
  {
    name: "Tilst",
    postalCodes: ["8381", "8382"],
    description: "Vores hjembase - Tilst, Kasted, Hvilsted",
    travelTime: "0 min",
    isHome: true,
  },
  {
    name: "Viby J",
    postalCodes: ["8260"],
    description: "Viby, Rårsup, Ormslev",
    travelTime: "15-25 min",
  },
  {
    name: "Højbjerg",
    postalCodes: ["8270"],
    description: "Højbjerg, Skåde, Frederikshøj",
    travelTime: "20-30 min",
  },
  {
    name: "Brabrand",
    postalCodes: ["8220", "8229"],
    description: "Brabrand, Gellerup, Skejby",
    travelTime: "15-25 min",
  },
  {
    name: "Tranbjerg",
    postalCodes: ["8310"],
    description: "Tranbjerg, Mårslet, Beder-Malling",
    travelTime: "25-35 min",
  },
  {
    name: "Egå",
    postalCodes: ["8250"],
    description: "Egå, Skæring, Mejlby",
    travelTime: "20-30 min",
  },
];

const nearbyAreas = [
  { name: "Odder", description: "Ved større opgaver eller faste aftaler" },
  { name: "Lystrup", description: "Erhvervsrengøring efter aftale" },
  { name: "Skanderborg", description: "Ved faste aftaler" },
  { name: "Horsens", description: "Kun større erhvervsopgaver" },
];

export default function ServiceAreas() {
  return (
    <div className="flex flex-col">
      <Helmet>
<link rel="canonical" href="https://rendetalje.dk/service-omraade" />
        <title>{`Serviceområde | ${company.name} - Rengøring i Aarhus og omegn`}</title>
        <meta
          name="description"
          content={`Vi tilbyder rengøring i hele Aarhus og omegn. Tilst, Risskov, Viby, Højbjerg, Brabrand, Tranbjerg, Egå og mange flere områder. Kontakt os for et tilbud.`}
        />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-50 pt-24 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6"
            >
              <Navigation className="w-4 h-4" />
              Lokaleksperter i Aarhus
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
            >
              Vi kører i hele Aarhus og omegn
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-slate-600 leading-relaxed"
            >
              Med base i Tilst dækker vi hele Aarhus-området. Jo tættere du er på 
              vores base, desto hurtigere kan vi være hos dig.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Hvor vi kører</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Vi tilbyder rengøring i følgende områder. 
              <span className="text-green-600 font-medium"> Ingen transporttillæg</span> inden for Aarhus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative p-6 rounded-2xl border-2 transition-all hover:shadow-lg ${
                  area.isHome
                    ? "border-green-600 bg-green-50"
                    : "border-slate-200 hover:border-green-300 bg-white"
                }`}
              >
                {area.isHome && (
                  <div className="absolute -top-3 left-4 px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-full">
                    Vores base
                  </div>
                )}
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    area.isHome ? "bg-green-200" : "bg-slate-100"
                  }`}>
                    <MapPin className={`w-5 h-5 ${area.isHome ? "text-green-700" : "text-slate-600"}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{area.name}</h3>
                    <p className="text-sm text-slate-500">{area.postalCodes.join(", ")}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-3">{area.description}</p>
                <div className="flex items-center gap-2 text-sm">
                  <Navigation className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-500">{area.travelTime} fra base</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Også i omegnen</h2>
              <p className="text-lg text-slate-600 mb-8">
                Ved større opgaver eller faste rengøringsaftaler kører vi også gerne 
                uden for Aarhus. Vi vurderer hver opgave individuelt.
              </p>
              <ul className="space-y-4">
                {nearbyAreas.map((area) => (
                  <li key={area.name} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900">{area.name}</span>
                      <span className="text-slate-600"> — {area.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Er du i tvivl om vi kører til dig?
              </h3>
              <p className="text-slate-600 mb-6">
                Kontakt os og fortæl hvor du bor. Vi finder en løsning, også hvis du 
                ligger lidt uden for vores normale område.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={`tel:${company.phone.replace(/\s+/g, "")}`}
                  className="flex items-center justify-center gap-2 py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Ring til os
                </a>
                <Link
                  to="/kontakt"
                  className="flex items-center justify-center gap-2 py-3 border-2 border-slate-300 text-slate-700 font-medium rounded-xl hover:border-slate-400 transition-colors"
                >
                  Skriv til os
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-green-600 text-white text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Klar til at få et tilbud?</h2>
          <p className="text-xl text-green-100 mb-10">
            Uanset om du er i Tilst, Aarhus C eller et af de omkringliggende områder, 
            så er vi klar til at hjælpe dig.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-green-600 transition-colors hover:bg-slate-50"
          >
            Få et tilbud
          </Link>
        </div>
      </section>
    </div>
  );
}

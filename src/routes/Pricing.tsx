import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { company } from "@/content/company";
import { pricing } from "@/content/pricing";

export default function Pricing() {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Priser | {company.name}</title>
        <meta
          name="description"
          content="Gennemskuelige priser på professionel rengøring. Vores timepris er 349 kr. inkl. moms."
        />
      </Helmet>

      <section className="relative overflow-hidden bg-slate-50 pt-24 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
            >
              Gennemskuelige priser
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-slate-600 leading-relaxed"
            >
              Vi tror på klare aftaler og ingen skjulte overraskelser. Vores
              prislogik er enkel, så du altid ved, hvad du betaler for.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            {/* Prislogik */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Vores prisfundament
              </h2>
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-slate-900">
                    {pricing.hourlyRate} {pricing.currency}
                  </span>
                  <span className="text-slate-600">/ time inkl. moms</span>
                </div>
                <p className="text-sm text-slate-500 mb-6">
                  Minimumspris: {pricing.minimumPrice} {pricing.currency} inkl.
                  moms (svarende til 2 timer)
                </p>

                <ul className="space-y-4">
                  {[
                    "Fast pris når det giver mening",
                    "Estimat når opgaven varierer",
                    "Klar logik altid",
                    "Ingen skjulte overraskelser",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-slate-600 leading-relaxed">
                {pricing.wording}
              </p>
            </div>

            {/* Hvad påvirker prisen */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Hvad påvirker prisen?
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Boligens størrelse",
                    desc: "Antal kvadratmeter og rum har naturligvis betydning for tidsforbruget.",
                  },
                  {
                    title: "Opgavens type",
                    desc: "En flytterengøring eller hovedrengøring tager længere tid end en fast vedligeholdelsesrengøring.",
                  },
                  {
                    title: "Niveau og tilstand",
                    desc: "Er der meget kalk på badeværelset, eller er der behov for ekstra grundig aftørring?",
                  },
                  {
                    title: "Tilvalg",
                    desc: "Rengøring af ovn, køleskab eller indvendige vinduer lægges oveni den normale tid.",
                  },
                ].map((factor, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-1.5 bg-green-600 rounded-full mt-1.5 mb-1"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">
                        {factor.title}
                      </h3>
                      <p className="text-slate-600">{factor.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Betaling */}
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Betaling for faste kunder
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {pricing.paymentLogic.recurring}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Engangsopgaver & Flytterengøring
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {pricing.paymentLogic.oneOff}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Få en præcis pris på din opgave
            </h2>
            <Link
              to="/kontakt"
              className="inline-flex h-14 items-center justify-center rounded-full bg-green-600 px-8 text-base font-medium text-white transition-colors hover:bg-green-700"
            >
              Få et tilbud <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

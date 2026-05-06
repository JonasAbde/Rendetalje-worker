import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

import { company } from "../content/company";
import { pricing } from "../content/pricing";
// PriceCalculator is rendered inside the contact form instead of here,
// as it requires service type/size/frequency state that isn't available on this page

export default function Pricing() {
  return (
    <div className="flex flex-col">
      <Helmet>
        <link rel="canonical" href="https://rendetalje.dk/priser" />
        <title>{`Priser | ${company.name}`}</title>
        <meta
          name="description"
          content="Gennemskuelige priser på professionel rengøring i Aarhus. Timepris 399 kr. inkl. moms — fast rengøring, flytterengøring og hovedrengøring."
        />
        <meta name="keywords" content="rengøring pris Aarhus, privat rengøring pris, flytterengøring pris Aarhus, hvad koster rengøring" />
        <meta property="og:title" content={`Priser | ${company.name}`} />
        <meta property="og:description" content="Gennemskuelige priser på professionel rengøring i Aarhus. Timepris 399 kr. inkl. moms — fast rengøring, flytterengøring og hovedrengøring." />
        <meta property="og:url" content="https://rendetalje.dk/priser" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://rendetalje.dk/logo.webp" />
        <meta property="og:locale" content="da_DK" />
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

      {/* Fastpris-pakker */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Fastpris-pakker
            </h2>
            <p className="text-lg text-slate-600">
              Vælg den pakke der passer bedst til dit behov — eller kontakt os for et skræddersyet tilbud
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Lille */}
            <div className="relative flex flex-col bg-white rounded-3xl border border-slate-200 shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">Lille</h3>
                <p className="text-sm text-slate-500">Anbefales til studier / 1-værelses</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-green-600">698 kr</span>
                <span className="text-slate-500 text-sm ml-1">inkl. moms</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  2 timers rengøring
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  Støvsugning, gulvvask, overflader
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  Badeværelse
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-500 italic">
                  ⭐ Populær hos studerende
                </li>
              </ul>
              <Link
                to="/kontakt"
                className="flex w-full h-12 items-center justify-center rounded-full bg-green-600 px-6 text-sm font-medium text-white transition-colors hover:bg-green-700"
              >
                Få tilbud
              </Link>
            </div>

            {/* Mellem — Most Popular */}
            <div className="relative flex flex-col bg-white rounded-3xl border-2 border-green-500 shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                Mest populær
              </div>
              <div className="mb-6 mt-2">
                <h3 className="text-xl font-bold text-slate-900 mb-1">Mellem</h3>
                <p className="text-sm text-slate-500">Perfekt til 2-3 værelses</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-green-600">1.047 kr</span>
                <span className="text-slate-500 text-sm ml-1">inkl. moms</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  3 timers rengøring
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  Det hele + køkken + paneler
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  Inkl. støvsugning, gulvvask, overflader
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  Badeværelse
                </li>
              </ul>
              <Link
                to="/kontakt"
                className="flex w-full h-12 items-center justify-center rounded-full bg-green-600 px-6 text-sm font-medium text-white transition-colors hover:bg-green-700"
              >
                Få tilbud
              </Link>
            </div>

            {/* Stor */}
            <div className="relative flex flex-col bg-white rounded-3xl border border-slate-200 shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">Stor</h3>
                <p className="text-sm text-slate-500">Til villaer og store hjem</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-green-600">1.745 kr</span>
                <span className="text-slate-500 text-sm ml-1">inkl. moms</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  5 timers rengøring
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  Det hele + skabe + vinduer mulighed
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  Inkl. støvsugning, gulvvask, overflader
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  Badeværelse og køkken
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-500 italic">
                  ⭐ Bedste værdi for pengene
                </li>
              </ul>
          <Link
            to="/kontakt"
            className="flex w-full h-12 items-center justify-center rounded-full bg-green-600 px-6 text-sm font-medium text-white transition-colors hover:bg-green-700"
          >
            Få tilbud
          </Link>
            </div>
          </div>

          <p className="text-xs text-slate-400 text-center mt-8 max-w-xl mx-auto">
            Priserne er vejledende. Den endelige pris fastsættes ved et konkret tilbud baseret på
            størrelse, stand, adgang og eventuelle tilvalg.
          </p>

          <div className="mt-10 text-center">
            <p className="text-slate-600 mb-4">
              Download vores prisliste og gem til senere
            </p>
            <a
              href="/docs/PRISLISTE.html"
              target="_blank"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white border-2 border-green-600 px-6 text-sm font-medium text-green-600 transition-colors hover:bg-green-50"
            >
              📄 Download prisliste
            </a>
          </div>
        </div>
      </section>

      {/* Typical Price Examples */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Typiske priseksempler
              </h2>
              <p className="text-lg text-slate-600">
                Vejledende priser baseret på erfaring. Prisen er et estimat, ikke et bindende tilbud.
              </p>
            </div>

            <div className="overflow-hidden bg-white rounded-3xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left py-4 px-6 font-semibold text-slate-900">Opgavetype</th>
                    <th className="text-left py-4 px-6 font-semibold text-slate-900">Estimeret pris</th>
                    <th className="text-left py-4 px-6 font-semibold text-slate-900">Bemærkning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 px-6 font-medium text-slate-900">Fast rengøring — lille bolig</td>
                    <td className="py-4 px-6 text-slate-700">ca. 698 — 1.047 kr</td>
                    <td className="py-4 px-6 text-slate-500 text-xs">2-3 arbejdstimer pr. besøg</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 px-6 font-medium text-slate-900">Fast rengøring — almindelig bolig</td>
                    <td className="py-4 px-6 text-slate-700">ca. 1.047 — 1.396 kr</td>
                    <td className="py-4 px-6 text-slate-500 text-xs">3-4 arbejdstimer pr. besøg</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 px-6 font-medium text-slate-900">Hovedrengøring</td>
                    <td className="py-4 px-6 text-slate-700">typisk fra ca. 1.396 kr</td>
                    <td className="py-4 px-6 text-slate-500 text-xs">Afhænger af boligens stand</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 px-6 font-medium text-slate-900">Flytterengøring</td>
                    <td className="py-4 px-6 text-slate-700">typisk fra ca. 2.010 kr</td>
                    <td className="py-4 px-6 text-slate-500 text-xs">Afhænger af stand og omfang</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-slate-400 text-center mt-4">
              Priserne er vejledende. Den endelige pris fastsættes ved et konkret tilbud baseret på
              størrelse, stand, adgang, ønsket niveau og eventuelle tilvalg.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Logic */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            {/* Prislogik - Sådan beregner vi prisen */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Sådan beregner vi prisen
              </h2>

              {/* Core pricing card */}
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

                <div className="border-t border-slate-200 pt-6 mt-6">
                  <h3 className="font-semibold text-slate-900 mb-3">Faktureringslogikken</h3>
                  <div className="space-y-2 text-sm text-slate-700">
                    <p><strong>{pricing.billingLogic.formula}</strong></p>
                    <p className="text-slate-600">{pricing.billingLogic.workHours}</p>
                  </div>
                  <div className="mt-4 p-3 bg-white rounded-xl border border-slate-200">
                    <p className="text-xs text-slate-500 mb-2">Eksempler:</p>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• {pricing.billingLogic.example1}</li>
                      <li>• {pricing.billingLogic.example2}</li>
                      <li>• {pricing.billingLogic.example3}</li>
                      <li>• {pricing.billingLogic.example4}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Estimate vs Final Price */}
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 mb-6">
                <h3 className="font-semibold text-slate-900 mb-3">Estimat vs. endelig pris</h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  <strong>Prisberegneren viser et estimat af forventede arbejdstimer.</strong>
                  Den endelige pris beregnes ud fra de faktiske fakturerbare arbejdstimer.
                </p>
                <p className="text-sm text-slate-600">
                  Især flytterengøring kan variere — vores data viser at den historisk har været
                  undervurderet med 20-67%. Derfor giver vi altid et konkret tilbud på forhånd
                  ved større eller mere særlige opgaver.
                </p>
              </div>

              {/* Recurring cleaning breakdown */}
              <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                <h3 className="font-semibold text-slate-900 mb-3">Fast rengøring — to faser</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Tilbagevendende rengøring varierer efter kundens behov. Første gang kræver altid ekstra:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 border border-green-200">
                    <p className="text-xs text-green-700 font-medium mb-1">FØRSTE GANG</p>
                    <p className="text-sm font-bold text-slate-900 mb-1">
                      Ekstra tid for at få standen til tops
                    </p>
                    <p className="text-xs text-slate-600">
                      {pricing.recurring.firstCleaning.description}
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-green-200">
                    <p className="text-xs text-green-700 font-medium mb-1">DEREFTER</p>
                    <p className="text-sm font-bold text-slate-900 mb-1">
                      Vedligeholdelse efter dit ønske
                    </p>
                    <p className="text-xs text-slate-600">
                      {pricing.recurring.ongoing.description}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed mt-6">
                {pricing.wording}
              </p>
            </div>

            {/* Estimatlogikken - Hvordan vi estimerer */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Sådan estimerer vi
              </h2>
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 mb-8">
                <p className="text-sm text-slate-600 mb-4">
                  Vi estimerer først opgaven ud fra type, størrelse og tilvalg:
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="text-slate-700">Standard rengøring</span>
                    <span className="font-mono text-slate-900">{pricing.estimation.standard}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="text-slate-700">Hovedrengøring (dyb)</span>
                    <span className="font-mono text-slate-900">{pricing.estimation.deep}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="text-slate-700">Flytterengøring</span>
                    <span className="font-mono text-slate-900">{pricing.estimation.moveOut}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <p className="text-xs text-slate-500 mb-2">Tilvalg (ekstra tid):</p>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="bg-white rounded-lg p-2 text-center border border-slate-200">
                      <p className="font-medium text-slate-700">Ovn</p>
                      <p className="text-slate-500">{pricing.estimation.extras.oven}</p>
                    </div>
                    <div className="bg-white rounded-lg p-2 text-center border border-slate-200">
                      <p className="font-medium text-slate-700">Køleskab</p>
                      <p className="text-slate-500">{pricing.estimation.extras.fridge}</p>
                    </div>
                    <div className="bg-white rounded-lg p-2 text-center border border-slate-200">
                      <p className="font-medium text-slate-700">Vinduer</p>
                      <p className="text-slate-500">{pricing.estimation.extras.windows}</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Hvad påvirker prisen?
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Boligens størrelse",
                    desc: "m² er kun base. Antal kvadratmeter og rum har naturligvis betydning for tidsforbruget.",
                  },
                  {
                    title: "Opgavens type",
                    desc: "Flytterengøring og hovedrengøring kræver ekstra tid på grund af niveau og grundighed.",
                  },
                  {
                    title: "Rumkompleksitet og tilstand",
                    desc: "Meget kalk, snavs eller ekstra grundig aftørring påvirker det samlede tidsforbrug.",
                  },
                  {
                    title: "Tilvalg er reelle tidsdrivere",
                    desc: "Ovn, køleskab og vinduer lægges som konkret ekstra tid — ikke bare små tillæg.",
                  },
                ].map((factor, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-1.5 bg-green-600 rounded-full mt-1.5 mb-1 shrink-0"></div>
                    <div>
                      <h4 className="text-base font-semibold text-slate-900 mb-1">
                        {factor.title}
                      </h4>
                      <p className="text-slate-600 text-sm">{factor.desc}</p>
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

          {/* Important clarification box */}
          <div className="mt-12 mb-12 bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
            <h3 className="font-semibold text-slate-900 mb-2">Vigtigt at forstå</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Når flere medarbejdere er på opgaven samtidig, beregnes prisen ud fra den samlede arbejdstid —
              ikke kun hvor længe opgaven varer på adressen. Det betyder at "2 timer på stedet" med 2 medarbejdere
              bliver til 4 arbejdstimer og dermed en pris på 1.396 kr, ikke 698 kr.
            </p>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Få et præcist tilbud på din opgave
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Prisberegneren viser et estimat baseret på forventet samlet arbejdstid.
              Kontakt os for et konkret tilbud tilpasset dine specifikke behov.
            </p>
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

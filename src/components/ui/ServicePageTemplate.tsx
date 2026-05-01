import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle2, HelpCircle } from "lucide-react";

interface FAQ {
  q: string;
  a: string;
}

interface ServicePageProps {
  title: string;
  intro: string;
  image?: string;
  includes: string[];
  whoIsItFor: string;
  pricingLogic: string;
  process: { step: string; desc: string }[];
  faqs: FAQ[];
}

export default function ServicePageTemplate({
  title,
  intro,
  image,
  includes,
  whoIsItFor,
  pricingLogic,
  process,
  faqs,
}: ServicePageProps) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 pt-24 pb-24">
        {image && (
          <div className="absolute inset-0">
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40" />
          </div>
        )}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-slate-300 leading-relaxed"
            >
              {intro}
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Hvad ydelsen omfatter */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Hvad ydelsen typisk omfatter
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hvem ydelsen passer til */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Hvem ydelsen passer til
                </h2>
                <p className="text-slate-600 leading-relaxed">{whoIsItFor}</p>
              </div>

              {/* Hvordan pris vurderes */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Hvordan pris vurderes
                </h2>
                <p className="text-slate-600 leading-relaxed">{pricingLogic}</p>
              </div>

              {/* Hvordan processen fungerer */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-8">
                  Sådan fungerer processen
                </h2>
                <div className="space-y-8">
                  {process.map((step, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center font-bold text-lg border border-green-100">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                          {step.step}
                        </h3>
                        <p className="text-slate-600">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              {faqs.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-8">
                    Ofte stillede spørgsmål
                  </h2>
                  <div className="space-y-6">
                    {faqs.map((faq, i) => (
                      <div
                        key={i}
                        className="bg-slate-50 rounded-2xl p-6 border border-slate-100"
                      >
                        <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-start gap-3">
                          <HelpCircle className="h-6 w-6 text-green-600 shrink-0" />
                          {faq.q}
                        </h3>
                        <p className="text-slate-600 ml-9">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sticky Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-green-600 rounded-3xl p-8 text-white shadow-lg">
                <h3 className="text-2xl font-bold mb-4">
                  Klar til at få et tilbud?
                </h3>
                <p className="text-green-100 mb-8">
                  Udfyld vores formular med detaljer om din opgave, så vender vi
                  tilbage med en pris eller for at aftale nærmere.
                </p>
                <Link
                  to="/kontakt"
                  className="flex w-full h-14 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-green-600 transition-colors hover:bg-slate-50"
                >
                  Få et tilbud
                </Link>
                <p className="mt-6 text-sm text-green-200 text-center">
                  Eller ring til os på{" "}
                  <a
                    href="tel:+4522650226"
                    className="text-white hover:underline"
                  >
                    +45 22 65 02 26
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

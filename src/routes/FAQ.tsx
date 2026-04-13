import { motion } from "motion/react";
import { HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { company } from "@/content/company";
import { faqs } from "@/content/faq";

export default function FAQ() {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>FAQ | {company.name}</title>
        <meta
          name="description"
          content="Få svar på de mest almindelige spørgsmål om vores rengøringsservices, priser og praktiske forhold."
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
              Ofte stillede spørgsmål
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-slate-600 leading-relaxed"
            >
              Her finder du svar på de mest almindelige spørgsmål om vores
              services, priser og praktiske forhold.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-start gap-4">
                  <HelpCircle className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-slate-600 ml-10 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-green-50 rounded-3xl p-8 md:p-12 border border-green-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Fandt du ikke svar på dit spørgsmål?
            </h2>
            <p className="text-slate-600 mb-8">
              Du er altid velkommen til at kontakte os direkte. Vi sidder klar
              til at hjælpe dig.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/kontakt"
                className="inline-flex h-12 items-center justify-center rounded-full bg-green-600 px-8 text-sm font-medium text-white transition-colors hover:bg-green-700"
              >
                Skriv til os
              </Link>
              <a
                href={`tel:${company.phone.replace(/\s+/g, "")}`}
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 transition-colors hover:bg-slate-50"
              >
                Ring {company.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

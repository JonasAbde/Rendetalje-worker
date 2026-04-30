import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

import { company } from "@/content/company";
import { coreServices, extraServices } from "@/content/services";

export default function Services() {
  return (
    <div className="flex flex-col">
      <Helmet>
<link rel="canonical" href="https://rendetalje.dk/services" />
        <title>Services | {company.name}</title>
        <meta
          name="description"
          content="Vi tilbyder professionel rengøring med fokus på detaljen til både private og erhverv i Aarhus og omegn."
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
              Vores Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-slate-600 leading-relaxed"
            >
              Vi tilbyder professionel rengøring med fokus på detaljen til både
              private og erhverv i Aarhus og omegn.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {coreServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="flex flex-col p-8 rounded-3xl bg-slate-50 border border-slate-100"
                >
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-6 text-green-600">
                    <Icon size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-slate-600 mb-8 flex-grow">
                    {service.desc}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.focus.map((feature, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-3 text-sm text-slate-700"
                      >
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={service.path}
                    className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 transition-colors hover:bg-slate-50 w-full sm:w-auto self-start"
                  >
                    Læs mere
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="bg-green-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Ekstra ydelser og tilvalg
              </h2>
              <p className="text-green-100 mb-8 text-lg">
                Har du brug for lidt ekstra fokus på specifikke områder? Vi
                tilbyder en række tilvalg, der kan aftales i forbindelse med din
                rengøring.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {extraServices.map((service, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-300 shrink-0" />
                    <span className="text-sm font-medium">{service}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link
                  to="/kontakt"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-green-600 transition-colors hover:bg-slate-50"
                >
                  Få et skræddersyet tilbud
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

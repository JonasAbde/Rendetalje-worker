import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Home as HomeIcon,
  Building2,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { company, positioning, geography } from "@/content/company";
import { pricing } from "@/content/pricing";
import { coreServices } from "@/content/services";
import { faqs } from "@/content/faq";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>{company.name} | Professionel rengøring i Aarhus</title>
        <meta name="description" content={positioning.primary} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 pt-24 pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]"
            >
              Professionel rengøring i Aarhus med fokus på detaljen
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-xl text-slate-600 leading-relaxed max-w-2xl"
            >
              Vi hjælper private og mindre virksomheder med fast rengøring,
              flytterengøring og hovedrengøring — med klare aftaler, stabil
              kvalitet og et resultat, vi kan stå inde for.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/kontakt"
                className="inline-flex h-14 items-center justify-center rounded-full bg-green-600 px-8 text-base font-medium text-white transition-colors hover:bg-green-700"
              >
                Få et tilbud
              </Link>
              <Link
                to="/services"
                className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 transition-colors hover:bg-slate-50"
              >
                Se vores services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-y border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-y-6 md:grid-cols-4 gap-x-8">
            {[
              "Klare aftaler",
              "Svanemærkede produkter",
              "Fast rengøring og engangsopgaver",
              "Aarhus og omegn",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                <span className="text-sm font-medium text-slate-700">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Vores ydelser
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Vi tilbyder skræddersyede løsninger til både private og erhverv.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link
                  key={i}
                  to={service.path}
                  className="group block p-8 rounded-3xl bg-slate-50 hover:bg-green-50 transition-colors border border-slate-100 hover:border-green-100"
                >
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-6 text-green-600 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6">{service.desc}</p>
                  <span className="inline-flex items-center text-sm font-medium text-green-600">
                    Læs mere{" "}
                    <ArrowRight
                      size={16}
                      className="ml-1 group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Hvorfor vælge {company.name}?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Det her er ikke en discount-rengøring. Det er en professionel
                lokal servicevirksomhed med fokus på detaljen, klare aftaler og
                stabil kvalitet.
              </p>
              <Link
                to="/om-os"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100"
              >
                Læs mere om os
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  title: "Fokus på detaljen",
                  desc: "Vi springer ikke over hvor gærdet er lavest.",
                },
                {
                  title: "Klar kommunikation",
                  desc: "Du ved altid hvad du får, og hvad det koster.",
                },
                {
                  title: "Stabil kvalitet",
                  desc: "Samme høje standard hver gang vi besøger dig.",
                },
                {
                  title: "Lokal service",
                  desc: "Vi dækker Aarhus og omegn med stolthed.",
                },
              ].map((feature, i) => (
                <div key={i}>
                  <ShieldCheck className="h-8 w-8 text-green-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Logic */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
            Gennemskuelige priser
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10">
            {pricing.wording}
          </p>
          <Link
            to="/priser"
            className="inline-flex items-center text-green-600 font-medium hover:text-green-700"
          >
            Se vores priser og logik <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-16 text-center">
            Sådan fungerer det
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-slate-200 -z-10"></div>
            {[
              {
                step: "01",
                title: "Send forespørgsel",
                desc: "Udfyld vores formular med detaljer om opgaven.",
              },
              {
                step: "02",
                title: "Vi vurderer",
                desc: "Vi gennemgår din opgave og vender hurtigt tilbage.",
              },
              {
                step: "03",
                title: "Du får pris",
                desc: "Du modtager en pris eller vi aftaler næste skridt.",
              },
              {
                step: "04",
                title: "Vi udfører",
                desc: "Vi møder op og udfører arbejdet som aftalt.",
              },
            ].map((item, i) => (
              <div key={i} className="relative text-center">
                <div className="w-16 h-16 mx-auto bg-white border-2 border-green-600 text-green-600 rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-sm">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Area */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
            Lokal service i Aarhus
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {geography.wording}
          </p>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Ofte stillede spørgsmål
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.slice(0, 4).map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/faq"
              className="inline-flex items-center text-green-600 font-medium hover:text-green-700"
            >
              Se alle spørgsmål og svar <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-green-600 text-white text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Klar til at få et tilbud?
          </h2>
          <p className="text-xl text-green-100 mb-10">
            Udfyld vores formular, så vender vi tilbage hurtigst muligt med en
            løsning, der passer til dig.
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
              Ring til os
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

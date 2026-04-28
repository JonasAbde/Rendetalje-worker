import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Canonical from "@/components/Canonical";
import { company, positioning, geography, policies } from "@/content/company";

export default function About() {
  return (
    <div className="flex flex-col">
      <Helmet>
      <Canonical path="/om-os" />
        <title>Om {company.name} | Professionel rengøring</title>
        <meta
          name="description"
          content="Hos Rendetalje handler rengøring ikke bare om at komme hurtigt igennem. Det handler om at levere et ordentligt resultat og skabe tryghed for kunden."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 pt-24 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
            >
              Om {company.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-slate-600 leading-relaxed"
            >
              Hos {company.name} handler rengøring ikke bare om at komme hurtigt
              igennem. Det handler om at levere et ordentligt resultat, skabe
              tryghed for kunden og holde et stabilt niveau fra gang til gang.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Hvem vi er
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Vi hjælper private hjem og mindre virksomheder i Aarhus og
                  omegn med rengøringsløsninger, der er til at stole på — med
                  fokus på detaljen, klare aftaler og professionel udførelse.
                </p>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {positioning.promise}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Hvad vi tror på
                </h2>
                <ul className="space-y-4">
                  {[
                    "Kvalitet over kvantitet i alt hvad vi gør.",
                    "Gennemsigtighed i priser og aftaler — ingen skjulte gebyrer.",
                    "Respekt for dit hjem og din arbejdsplads.",
                    "Brug af svanemærkede produkter for et bedre indeklima og miljø.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-slate-600 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Hvordan vi arbejder
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Vores proces er bygget op omkring tillid og klare linjer.{" "}
                  {policies.equipment}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {policies.access}
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Hvor vi kører
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {geography.wording}
                </p>
                <Link
                  to="/kontakt"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-green-600 px-8 text-sm font-medium text-white transition-colors hover:bg-green-700"
                >
                  Få et tilbud på din opgave
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

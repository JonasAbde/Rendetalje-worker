import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import Canonical from "@/components/Canonical";
import { company } from "@/content/company";

export default function Cookies() {
  return (
    <div className="flex flex-col">
      <Helmet>
      <Canonical path="/cookiepolitik" />
        <title>Cookiepolitik | {company.name}</title>
        <meta
          name="description"
          content="Information om vores brug af cookies."
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
              Cookiepolitik
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-slate-600 leading-relaxed"
            >
              Information om vores brug af cookies.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
            <h2>Hvad er en cookie?</h2>
            <p>
              En cookie er en lille tekstfil, der lagres i din browser for at
              kunne genkende din computer ved tilbagevendende besøg. Der er
              ingen personlige oplysninger gemt i vores cookies, og de kan ikke
              indeholde virus.
            </p>

            <h2>Sådan bruger vi cookies</h2>
            <p>
              Vi bruger cookies til at forbedre din oplevelse på vores
              hjemmeside, vurdere brugen af de enkelte elementer på hjemmesiden
              og til at understøtte markedsføringen af vores services.
            </p>

            <h2>Nødvendige cookies</h2>
            <p>
              Disse cookies er nødvendige for, at hjemmesiden kan fungere og kan
              ikke slås fra i vores systemer. De er normalt kun indstillet som
              svar på handlinger foretaget af dig, f.eks. indstilling af dine
              personlige præferencer, indlogning eller udfyldning af formularer.
            </p>

            <h2>Statistik og analyse</h2>
            <p>
              Vi indsamler anonymiseret statistik om brugen af vores hjemmeside
              for at kunne optimere indhold og navigation.
            </p>

            <h2>Sådan sletter eller blokerer du cookies</h2>
            <p>
              Du kan altid afvise cookies på din computer ved at ændre
              indstillingerne i din browser. Hvor du finder indstillingerne
              afhænger af, hvilken browser du anvender. Du skal dog være
              opmærksom på, at hvis du gør det, er der mange funktioner og
              services, du ikke kan bruge, fordi de forudsætter, at hjemmesiden
              kan huske de valg, du foretager.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

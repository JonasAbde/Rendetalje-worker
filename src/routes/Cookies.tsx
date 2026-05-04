import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

import { company } from "@/content/company";

export default function Cookies() {
  return (
    <div className="flex flex-col">
      <Helmet>
<link rel="canonical" href="https://rendetalje.dk/cookiepolitik" />
        <title>{`Cookiepolitik | ${company.name}`}</title>
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

            <h2>Cookies på denne hjemmeside</h2>
            <p>
              Rendetalje.dk sætter som udgangspunkt ingen HTTP-cookies. Vi
              bruger udelukkende din browsers localStorage til at gemme dine
              cookie-præferencer. Hvis du giver samtykke til analyse, indlæses
              Plausible Analytics, som heller ikke bruger cookies.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-3 border border-slate-200">Navn</th>
                    <th className="text-left p-3 border border-slate-200">Type</th>
                    <th className="text-left p-3 border border-slate-200">Formål</th>
                    <th className="text-left p-3 border border-slate-200">Opbevaring</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-slate-200 font-mono text-xs">
                      rendetalje_cookie_consent
                    </td>
                    <td className="p-3 border border-slate-200">localStorage</td>
                    <td className="p-3 border border-slate-200">
                      Gemmer dine cookie-præferencer (nødvendig)
                    </td>
                    <td className="p-3 border border-slate-200">
                      Indtil du sletter dine browserdata
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Umami Analytics</h2>
            <p>
              Vi bruger{" "}
              <a
                href="https://umami.is/privacy"
                className="text-green-600 hover:underline"
              >
                Umami Cloud
              </a>{" "}
              til at indsamle anonymiseret statistik om brugen af vores
              hjemmeside. Umami er et privatlivsvenligt analyseværktøj, der
              <strong> ikke </strong> bruger cookies og ikke indsamler
              personhenførbare oplysninger (ingen IP-adresser gemmes, ingen
              browsingdata på tværs af sites). Dataene bruges udelukkende til at
              forstå, hvilke sider der besøges, og hvordan hjemmesiden kan
              forbedres. Der sendes kun anonyme data som sidevisninger,
              klik på knapper og interaktion med prisberegneren — vi
              tracker <strong>ikke</strong> navn, email, telefon, adresse
              eller fritekst fra formularer.
            </p>

            <h2>Samtykke og tilbagetrækning</h2>
            <p>
              Når du besøger Rendetalje.dk første gang, vises et cookie-banner,
              hvor du kan vælge mellem at acceptere alle, afvise alle eller
              tilpasse dine indstillinger. Dit valg gemmes i din browsers
              localStorage. Du kan til enhver tid ændre dine indstillinger ved
              at klikke på cookie-ikonet nederst til venstre på siden. Hvis du
              ønsker at trække dit samtykke tilbage, kan du gøre det via samme
              ikon — dine præferencer nulstilles, og banneret vises igen.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

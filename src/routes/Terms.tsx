import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

import { company, policies } from "@/content/company";
import { pricing as pricingContent } from "@/content/pricing";

export default function Terms() {
  return (
    <div className="flex flex-col">
      <Helmet>
<link rel="canonical" href="https://rendetalje.dk/handelsbetingelser" />
        <title>Handelsbetingelser | {company.name}</title>
        <meta
          name="description"
          content="Læs vores handelsbetingelser for at forstå rammerne for vores samarbejde."
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
              Handelsbetingelser
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-slate-600 leading-relaxed"
            >
              Læs vores handelsbetingelser for at forstå rammerne for vores
              samarbejde.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
            <h2>1. Generelle oplysninger</h2>
            <p>
              {company.legalName}
              <br />
              {company.address}
              <br />
              {company.postalCode} {company.city}
              <br />
              CVR: {company.cvr}
              <br />
              Telefon: {company.phone}
              <br />
              Email: {company.email}
            </p>

            <h2>2. Priser og betaling</h2>
            <p>{pricingContent.wording}</p>
            <p>
              <strong>Faste kunder:</strong>{" "}
              {pricingContent.paymentLogic.recurring}
            </p>
            <p>
              <strong>Engangsopgaver:</strong>{" "}
              {pricingContent.paymentLogic.oneOff}
            </p>

            <h2>3. Adgangsforhold</h2>
            <p>{policies.access}</p>

            <h2>4. Afbud og ændringer</h2>
            <p>{policies.cancellation}</p>

            <h2>5. Reklamation og udbedring</h2>
            <p>{policies.complaint}</p>

            <h2>6. Udstyr og materialer</h2>
            <p>{policies.equipment}</p>

            <h2>7. Forsikring</h2>
            <p>
              Rendetalje.dk ApS har en erhvervsansvarsforsikring og en
              kaskoforsikring på alt udstyr. Skader forårsaget under
              rengøringen dækkes af vores forsikring. Dokumentation for
              forsikringsforhold kan fremsendes efter anmodning.
            </p>

            <h2>8. Ansvarsbegrænsning</h2>
            <p>
              Rendetalje.dk ApS påtager sig intet ansvar for skader, der er
              opstået som følge af manglende oplysning om særlige forhold ved
              boligen eller genstande, herunder skrøbelige eller værdifulde
              genstande, der ikke er gjort opmærksom på forud for rengøringen.
              Erstatning for tabte eller beskadigede genstande begrænses til
              genstandens dokumenterede dagsværdi og erstattes ikke ud over
              forsikringens dækning. Vi påtager os ikke ansvar for indirekte
              tab eller driftstab.
            </p>

            <h2>9. Force Majeure</h2>
            <p>
              Rendetalje.dk ApS er ikke ansvarlig for manglende opfyldelse af
              aftaler, hvis dette skyldes omstændigheder uden for vores kontrol,
              herunder strejke, lockout, krig, terror, brand, ekstreme
              vejrforhold, nedbrud af IT-systemer, svigt i el- eller
              telekommunikation eller anden lignende begivenhed, som vi ikke
              med rimelighed kunne have forudset eller afværget.
            </p>

            <h2>10. Tvisteløsning og klageadgang</h2>
            <p>
              Eventuelle klager vedrørende vores ydelser bedes rettet til os
              hurtigst muligt på telefon {company.phone} eller mail{" "}
              {company.email}. Hvis vi ikke kan løse tvisten i mindelighed,
              kan du indbringe klagen for:
            </p>
            <ul>
              <li>
                <strong>Center for Klageløsning</strong> — Nævnenes Hus,
                Toldboden 2, 8800 Viborg. Forbrugertvister kan indbringes via{" "}
                <a
                  href="https://naevneneshus.dk"
                  className="text-green-600 hover:underline"
                >
                  naevneneshus.dk
                </a>
                .
              </li>
              <li>
                <strong>EU's Online Dispute Resolution (ODR)</strong> — For
                forbrugere bosat i EU kan klager indbringes via{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  className="text-green-600 hover:underline"
                >
                  ec.europa.eu/consumers/odr
                </a>
                .
              </li>
            </ul>
            <p>
              Ved retssager mod virksomheder henvises til almindelige danske
              retsregler med værneting i Aarhus.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

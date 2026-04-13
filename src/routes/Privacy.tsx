import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { company } from "@/content/company";

export default function Privacy() {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Privatlivspolitik | {company.name}</title>
        <meta
          name="description"
          content="Sådan behandler vi dine personoplysninger."
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
              Privatlivspolitik
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-slate-600 leading-relaxed"
            >
              Sådan behandler vi dine personoplysninger.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
            <h2>1. Dataansvarlig</h2>
            <p>
              {company.name} er dataansvarlig for behandlingen af de
              personoplysninger, som vi modtager om dig. Du finder vores
              kontaktoplysninger her:
            </p>
            <p>
              {company.name}
              <br />
              {company.address}
              <br />
              {company.postalCode} {company.city}
              <br />
              CVR nr.: {company.cvr}
              <br />
              Telefon: {company.phone}
              <br />
              Email: {company.email}
            </p>

            <h2>2. Formål med behandlingen</h2>
            <p>Vi behandler dine personoplysninger til følgende formål:</p>
            <ul>
              <li>At kunne levere vores rengøringsydelser til dig.</li>
              <li>
                At kunne kommunikere med dig vedrørende tilbud, aftaler og
                fakturering.
              </li>
              <li>
                At overholde bogføringsloven og andre retlige forpligtelser.
              </li>
            </ul>

            <h2>3. Kategorier af personoplysninger</h2>
            <p>Vi behandler almindelige personoplysninger, herunder:</p>
            <ul>
              <li>Navn, adresse, telefonnummer og e-mailadresse.</li>
              <li>Oplysninger om din bolig (størrelse, adgangsforhold).</li>
              <li>Fakturerings- og betalingsoplysninger.</li>
            </ul>

            <h2>4. Opbevaring af dine personoplysninger</h2>
            <p>
              Vi opbevarer dine personoplysninger så længe det er nødvendigt for
              at opfylde de formål, de er indsamlet til. Oplysninger relateret
              til fakturering opbevares i 5 år i henhold til bogføringsloven.
            </p>

            <h2>5. Dine rettigheder</h2>
            <p>
              Du har efter databeskyttelsesforordningen en række rettigheder i
              forhold til vores behandling af oplysninger om dig. Hvis du vil
              gøre brug af dine rettigheder, skal du kontakte os.
            </p>
            <ul>
              <li>Ret til at se oplysninger (indsigtsret)</li>
              <li>Ret til berigtigelse (rettelse)</li>
              <li>Ret til sletning</li>
              <li>Ret til begrænsning af behandling</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

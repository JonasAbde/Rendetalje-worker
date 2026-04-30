import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

import { company } from "@/content/company";

export default function Privacy() {
  return (
    <div className="flex flex-col">
      <Helmet>
<link rel="canonical" href="https://rendetalje.dk/privatlivspolitik" />
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
              Du har efter databeskyttelsesforordningen (GDPR) en række rettigheder i
              forhold til vores behandling af oplysninger om dig. Du kan gøre brug af
              dine rettigheder ved at kontakte os på telefon {company.phone} eller
              email {company.email}.
            </p>
            <ul>
              <li>
                <strong>Ret til indsigt (Art. 15):</strong> Du har ret til at få
                bekræftet, om vi behandler personoplysninger om dig, og i så fald
                adgang til oplysningerne.
              </li>
              <li>
                <strong>Ret til berigtigelse (Art. 16):</strong> Du har ret til at få
                urigtige personoplysninger om dig rettet.
              </li>
              <li>
                <strong>Ret til sletning ("retten til at blive glemt", Art. 17):</strong>{" "}
                Du har under visse omstændigheder ret til at få slettet
                personoplysninger om dig.
              </li>
              <li>
                <strong>Ret til begrænsning af behandling (Art. 18):</strong> Du har
                under visse omstændigheder ret til at få begrænset vores behandling
                af dine personoplysninger.
              </li>
              <li>
                <strong>Ret til dataportabilitet (Art. 20):</strong> Du har ret til
                at modtage dine personoplysninger i et struktureret, almindeligt
                anvendt og maskinlæsbart format.
              </li>
              <li>
                <strong>Ret til indsigelse (Art. 21):</strong> Du har ret til at gøre
                indsigelse mod vores behandling af dine personoplysninger.
              </li>
              <li>
                <strong>Ret til at trække samtykke tilbage:</strong> Du kan til enhver
                tid trække dit samtykke til behandling af personoplysninger tilbage.
                Dette påvirker ikke lovligheden af behandlingen før tilbagetrækningen.
              </li>
            </ul>

            <h2>6. Retlig grundlag (Art. 6)</h2>
            <p>Vi behandler dine personoplysninger på følgende retlige grundlag:</p>
            <ul>
              <li>
                <strong>Art. 6, stk. 1, litra b (kontrakt):</strong> Behandling er
                nødvendig for at kunne indgå eller opfylde en kontrakt med dig om
                rengøringsydelser.
              </li>
              <li>
                <strong>Art. 6, stk. 1, litra c (retslig forpligtelse):</strong>{" "}
                Behandling er nødvendig for at overholde vores forpligtelser ifølge
                bogføringsloven og skattelovgivningen.
              </li>
              <li>
                <strong>Art. 6, stk. 1, litra f (berettiget interesse):</strong>{" "}
                Behandling er nødvendig for vores berettigede interesser i at kunne
                svare på henvendelser via kontaktformularen.
              </li>
              <li>
                <strong>Art. 6, stk. 1, litra a (samtykke):</strong> Hvis du giver
                samtykke via cookiebanneret til brug af ikke-nødvendige cookies.
              </li>
            </ul>

            <h2>7. Databehandlere og tredjeparter</h2>
            <p>
              Vi bruger følgende databehandlere (underleverandører) til behandling af
              personoplysninger:
            </p>
            <ul>
              <li>
                <strong>Resend (email-service):</strong> Bruges til at sende emails
                fra kontaktformularen. Resend er etableret i USA og overholder
                EU-U.S. Data Privacy Framework.
              </li>
              <li>
                <strong>Cloudflare (hosting):</strong> Bruges til at hoste hjemmesiden
                og sikre mod DDoS-angreb.
              </li>
            </ul>
            <p>
              Vi har indgået databehandlingsaftaler med alle vores databehandlere for
              at sikre, at de behandler oplysninger i overensstemmelse med GDPR.
            </p>

            <h2>8. Cookies og tracking</h2>
            <p>
              Vi bruger cookies på vores hjemmeside. Du kan læse mere om vores brug
              af cookies i vores{" "}
              <a href="/cookiepolitik" className="text-green-600 hover:underline">
                cookiepolitik
              </a>
              . Du kan til enhver tid ændre dine cookie-indstillinger ved at klikke
              på cookie-ikonet nederst til venstre på siden.
            </p>

            <h2>9. Klage til Datatilsynet</h2>
            <p>
              Hvis du ønsker at klage over vores behandling af dine personoplysninger,
              har du ret til at indgive en klage til Datatilsynet:
            </p>
            <p>
              Datatilsynet
              <br />
              Carl Jacobsens Vej 35
              <br />
              2500 Valby
              <br />
              Telefon: 33 19 32 00
              <br />
              Email: dt@datatilsynet.dk
              <br />
              Website: www.datatilsynet.dk
            </p>

            <h2>10. Opdateringer af privatlivspolitikken</h2>
            <p>
              Vi kan opdatere denne privatlivspolitik fra tid til anden. Den aktuelle
              version vil altid være tilgængelig på denne side. Sidst opdateret:
              13. april 2025.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

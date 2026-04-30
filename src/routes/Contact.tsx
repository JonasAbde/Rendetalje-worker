import React, { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Helmet } from "react-helmet-async";

import { company } from "@/content/company";
import MultiStepForm from "@/components/contact/MultiStepForm";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setError(null);

    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Noget gik galt. Prøv venligst igen.");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Der opstod en fejl. Prøv venligst igen.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      <Helmet>
<link rel="canonical" href="https://rendetalje.dk/kontakt" />
        <title>Kontakt & Tilbud | {company.name}</title>
        <meta
          name="description"
          content="Få et uforpligtende tilbud på rengøring. Udfyld vores formular, så vender vi tilbage hurtigst muligt."
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
              Få et tilbud
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-slate-600 leading-relaxed"
            >
              Udfyld formularen nedenfor, så vender vi tilbage hurtigst muligt
              med en pris eller for at aftale nærmere.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Kontaktinformation
                </h2>
                <p className="text-slate-600 mb-8">
                  Har du spørgsmål, eller vil du hellere tale med os direkte? Du
                  er altid velkommen til at ringe eller skrive.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Telefon</h3>
                    <a
                      href={`tel:${company.phone.replace(/\s+/g, "")}`}
                      className="text-slate-600 hover:text-green-600 transition-colors"
                    >
                      {company.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <a
                      href={`mailto:${company.email}`}
                      className="text-slate-600 hover:text-green-600 transition-colors"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Adresse</h3>
                    <p className="text-slate-600">
                      {company.address}
                      <br />
                      {company.postalCode} {company.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <MultiStepForm
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                isSubmitted={isSubmitted}
                error={error}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

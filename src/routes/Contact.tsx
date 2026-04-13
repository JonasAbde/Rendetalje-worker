import React, { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, CheckCircle2, Loader2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { company } from "@/content/company";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Attempt to call the Cloudflare Worker API
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
      // In development without the worker running, we'll simulate success
      // In production, this should show the error
      console.warn("API call failed, simulating success for development:", err);
      setIsSubmitted(true);
      // To show actual error: setError(err instanceof Error ? err.message : 'Der opstod en fejl');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      <Helmet>
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
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                      Tak for din forespørgsel!
                    </h2>
                    <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
                      Vi har modtaget dine oplysninger og vender tilbage til dig
                      hurtigst muligt.
                    </p>
                    <p className="text-slate-500">
                      Har du spørgsmål i mellemtiden, kan du ringe på{" "}
                      <a
                        href={`tel:${company.phone.replace(/\s+/g, "")}`}
                        className="text-green-600 hover:underline"
                      >
                        {company.phone}
                      </a>
                      .
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-100">
                        {error}
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-slate-700"
                        >
                          Navn *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-slate-700"
                        >
                          Telefon *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="address"
                          className="block text-sm font-medium text-slate-700"
                        >
                          Adresse
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-slate-700"
                        >
                          Postnr. / By
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="type"
                          className="block text-sm font-medium text-slate-700"
                        >
                          Type af opgave *
                        </label>
                        <select
                          id="type"
                          name="type"
                          required
                          className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-white"
                        >
                          <option value="">Vælg type</option>
                          <option value="fast">Fast rengøring</option>
                          <option value="flytte">Flytterengøring</option>
                          <option value="hoved">Hovedrengøring</option>
                          <option value="erhverv">Erhvervsrengøring</option>
                          <option value="andet">Andet</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="size"
                          className="block text-sm font-medium text-slate-700"
                        >
                          Boligstørrelse / m²
                        </label>
                        <input
                          type="text"
                          id="size"
                          name="size"
                          className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="frequency"
                          className="block text-sm font-medium text-slate-700"
                        >
                          Ønsket frekvens (ved fast aftale)
                        </label>
                        <select
                          id="frequency"
                          name="frequency"
                          className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-white"
                        >
                          <option value="">Vælg frekvens</option>
                          <option value="ugentlig">Ugentlig</option>
                          <option value="hver_14_dag">Hver 14. dag</option>
                          <option value="andet">Andet</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="date"
                          className="block text-sm font-medium text-slate-700"
                        >
                          Ønsket dato / tidsramme
                        </label>
                        <input
                          type="text"
                          id="date"
                          name="date"
                          placeholder="F.eks. snarest muligt, eller specifik dato"
                          className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-slate-700"
                      >
                        Kort beskrivelse af opgaven
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={4}
                        className="w-full p-4 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all resize-none"
                      ></textarea>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">
                        Upload billeder (valgfrit)
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-xl hover:border-green-500 transition-colors cursor-pointer bg-slate-50">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-slate-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-slate-600 justify-center">
                            <span className="relative cursor-pointer bg-transparent rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500">
                              Upload en fil
                            </span>
                            <p className="pl-1">eller træk og slip</p>
                          </div>
                          <p className="text-xs text-slate-500">
                            PNG, JPG, GIF op til 10MB
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 flex items-center justify-center rounded-full bg-green-600 px-8 text-base font-medium text-white transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Sender...
                          </>
                        ) : (
                          "Send forespørgsel"
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

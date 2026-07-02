import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

import { company, positioning, geography, seoKeywords } from "@/content/company";
import { pricing } from "@/content/pricing";
import { coreServices } from "@/content/services";
import { faqs } from "@/content/faq";
import { trackEvent } from "@/lib/analytics";

type FormState = "idle" | "submitting" | "submitted" | "error";

const serviceTypes = [
  { id: "fast", label: "Fast rengøring" },
  { id: "flytte", label: "Flytterengøring" },
  { id: "hoved", label: "Hovedrengøring" },
  { id: "erhverv", label: "Erhverv" },
  { id: "andet", label: "Andet" },
];

// ⚡ Bolt: Moved static image map outside of the component to prevent
// redundant object allocation and garbage collection on every render/iteration.
// Impact: Reduces memory overhead and slightly speeds up rendering of the services list.
const SERVICE_IMAGE_MAP: Record<string, string> = {
  "fast-rengoering": "/images/service-fast.webp",
  "flytterengoering": "/images/service-flyt.webp",
  "hovedrengoering": "/images/service-hoved.webp",
  "erhvervsrengoering": "/images/service-erhverv.webp",
};

function QuickQuoteForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [serviceType, setServiceType] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, type: serviceType, description: message, companyWebsite }),
      });
      if (!response.ok) throw new Error("Noget gik galt");
      setFormState("submitted");
      trackEvent("Quick Quote Submit", { form: "quick_quote", service_type: serviceType, source: "homepage" });
    } catch {
      setFormState("error");
      trackEvent("Form Error", { form: "quick_quote", step: "0", error_type: "api_error" });
    }
  };

  if (formState === "submitted") {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <CheckCircle2 className="h-16 w-16 text-green-600 mb-4" />
        <p className="text-xl font-semibold text-slate-900">Tak!</p>
        <p className="text-slate-600">Vi vender tilbage inden for 24 timer.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="quick-company-website">Website</label>
        <input
          id="quick-company-website"
          type="text"
          value={companyWebsite}
          onChange={(e) => setCompanyWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Service type selector */}
      <div>
        <p className="text-sm font-medium text-slate-700 mb-3">Hvilken type rengøring?</p>
        <div className="flex flex-wrap gap-2">
          {serviceTypes.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setServiceType(s.id)}
              disabled={formState === "submitting"}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                serviceType === s.id
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white text-slate-700 border-slate-300 hover:border-green-400"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Navn"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={formState === "submitting"}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <input
          type="tel"
          placeholder="Telefon"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          disabled={formState === "submitting"}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={formState === "submitting"}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>
      <textarea
        placeholder="Fortæl kort om opgaven (valgfri)"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={3}
        disabled={formState === "submitting"}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-600 resize-none"
      />
      <button
        type="submit"
        disabled={formState === "submitting" || serviceType === ""}
        className="w-full h-12 rounded-full bg-green-600 px-8 text-base font-medium text-white transition-colors hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {formState === "submitting" ? "Sender..." : "Send forespørgsel"}
      </button>
      {formState === "error" && (
        <p className="text-sm text-red-600 text-center">
          Noget gik galt. Prøv igen, eller kontakt os på {company.phone}.
        </p>
      )}
    </form>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <Helmet>
        <link rel="canonical" href="https://rendetalje.dk/" />
        <title>{`${company.name} | Professionel rengøring i Aarhus`}</title>
        <meta name="description" content={positioning.primary} />
        <meta name="keywords" content={seoKeywords.join(", ")} />
        <meta property="og:title" content={`${company.name} | Professionel rengøring i Aarhus`} />
        <meta property="og:description" content={positioning.primary} />
        <meta property="og:url" content="https://rendetalje.dk" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://rendetalje.dk/logo.webp" />
        <meta property="og:locale" content="da_DK" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${company.name} | Professionel rengøring i Aarhus`} />
        <meta name="twitter:description" content={positioning.primary} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 pt-24 pb-32">
        {/* Hero background image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.webp"
            alt=""
            loading="eager"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]"
            >
              Professionel rengøring i Aarhus med fokus på detaljen
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl"
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
                onClick={() => trackEvent("CTA Click", { location: "hero", target: "/kontakt" })}
                className="inline-flex h-14 items-center justify-center rounded-full bg-green-600 px-8 text-base font-medium text-white transition-colors hover:bg-green-700"
              >
                Få et tilbud
              </Link>
              <Link
                to="/services"
                onClick={() => trackEvent("CTA Click", { location: "hero", target: "/services" })}
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

      {/* Quick Quote Form */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Rengøringsfirma i Aarhus med lokal dækning
              </h2>
              <div className="mt-5 space-y-4 text-base leading-7 text-slate-600">
                <p>
                  Rendetalje hjælper private hjem og virksomheder med rengøring
                  i Aarhus og omegn. Vi udfører fast rengøring, flytterengøring,
                  hovedrengøring og erhvervsrengøring med klare aftaler og
                  stabil kvalitet.
                </p>
                <p>
                  Vi har base i Tilst og kører blandt andet til Aarhus C,
                  Aarhus N, Aarhus V, Risskov, Højbjerg, Viby J, Brabrand og
                  Hasselager. Det gør det nemt at få professionel rengøring
                  uden lange svartider eller uklare transporttillæg.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900">
                Populære søgninger vi matcher
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {seoKeywords.slice(0, 8).map((keyword) => (
                  <Link
                    key={keyword}
                    to={
                      keyword.includes("flytte")
                        ? "/services/flytterengoering"
                        : keyword.includes("hoved")
                          ? "/services/hovedrengoering"
                          : keyword.includes("erhverv")
                            ? "/services/erhvervsrengoering"
                            : "/services/fast-rengoering"
                    }
                    className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200 transition-colors hover:text-green-700 hover:ring-green-200"
                  >
                    {keyword}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Quote Form */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Få et hurtigt tilbud
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Udfyld nedenfor, så vender vi tilbage indenfor 24 timer
            </p>
          </div>
          <QuickQuoteForm />
        </div>
      </section>

      {/* Price Block */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-50 rounded-3xl p-8 md:p-12 border border-green-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Gennemskuelige priser
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-green-600">{pricing.hourlyRate} kr</span>
                    <span className="text-slate-600">/time inkl. moms</span>
                  </div>
                  <p className="text-slate-600">
                    Minimumspris: {pricing.minimumPrice} kr inkl. moms
                  </p>
                  <p className="text-slate-600">
                    Typiske private rengøringer ligger ofte mellem 698 og 1.400 kr pr. besøg
                  </p>
                  <p className="text-sm text-slate-500">
                    Endelig pris afhænger af størrelse, stand, adgang, ønsket niveau og tilvalg
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <Link
                    to="/kontakt"
                    onClick={() => trackEvent("CTA Click", { location: "price_block", target: "/kontakt" })}
                    className="inline-flex h-14 items-center justify-center rounded-full bg-green-600 px-8 text-base font-medium text-white transition-colors hover:bg-green-700"
                  >
                    Få et tilbud <ArrowRight size={20} className="ml-2" />
                  </Link>
                  <Link
                    to="/priser"
                    onClick={() => trackEvent("CTA Click", { location: "price_block", target: "/priser" })}
                    className="inline-flex h-14 items-center justify-center rounded-full border-2 border-green-600 px-8 text-base font-medium text-green-600 transition-colors hover:bg-green-50"
                  >
                    Se priser
                  </Link>
                </div>
              </div>
            </div>
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
              const imgSrc = SERVICE_IMAGE_MAP[service.id];
              return (
                <Link
                  key={i}
                  to={service.path}
                  className="group block rounded-3xl bg-slate-50 hover:bg-green-50 transition-colors border border-slate-100 hover:border-green-100 overflow-hidden"
                >
                  {imgSrc && (
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={imgSrc}
                        alt={service.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-8 pt-6">
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
                  </div>
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
                onClick={() => trackEvent("CTA Click", { location: "why_choose_us", target: "/om-os" })}
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

      {/* Before/After Gallery */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Før og efter rengøring
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Se hvordan en grundig gennemgang løfter de rum, der bliver brugt
              mest i hverdagen.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                image: "/images/before-after-kitchen-bath.webp",
                label: "Køkken og badeværelse",
                description: "Afkalkning, aftørring af fronter og grundig rengøring af de flader, hvor snavs hurtigt sætter sig.",
              },
              {
                image: "/images/before-after-living-surfaces.webp",
                label: "Stue og overflader",
                description: "Støv, pletter og daglig brug fjernes, så rummet føles roligt, rent og klar til brug igen.",
              },
            ].map((pair, i) => (
              <article
                key={i}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                aria-label={`Før og efter: ${pair.label}`}
              >
                <figure className="relative bg-slate-100">
                  <div className="absolute inset-x-0 top-3 z-10 grid grid-cols-2 px-3">
                    <span className="justify-self-start rounded-full bg-slate-950/75 px-3 py-1 text-xs font-semibold text-white">
                      Før
                    </span>
                    <span className="justify-self-start rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                      Efter
                    </span>
                  </div>
                  <img
                    src={pair.image}
                    alt={`Før og efter rengøring: ${pair.label}`}
                    loading="lazy"
                    className="h-72 w-full object-cover"
                  />
                </figure>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {pair.label}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {pair.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              to="/kontakt"
              onClick={() => trackEvent("CTA Click", { location: "before_after", target: "/kontakt" })}
              className="inline-flex h-12 items-center justify-center rounded-full bg-green-600 px-7 text-sm font-semibold text-white transition-colors hover:bg-green-700"
            >
              Book et uforpligtende tilbud
            </Link>
          </div>
        </div>
      </section>

      {/* Referral Program */}
      <section className="py-24 bg-green-600 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Anbefal os og få 200 kr rabat
          </h2>
          <p className="text-xl text-green-100 mb-4">
            Kender du nogen der kunne bruge professionel rengøring? Anbefal os
            til en ven, kollega eller nabo — så får <strong className="text-white">I begge 200 kr i rabat</strong>{" "}
            på næste besøg.
          </p>
          <p className="text-green-200 mb-10">
            Sig du har sendt dem vores vej, så klarer vi resten. Rabatten
            gælder både dig der anbefaler og den nye kunde.
          </p>
          <a
            href={`tel:${company.phone.replace(/\s+/g, "")}`}
            className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-green-600 transition-colors hover:bg-slate-50"
          >
            Ring og hør mere — {company.phone}
          </a>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🛡️", title: "CVR-registreret", desc: "Rendetalje.dk ApS — 45564096" },
              { icon: "🧹", title: "Svanemærkede produkter", desc: "Miljøvenlig rengøring" },
              { icon: "📋", title: "Ansvarsforsikring", desc: "Fuld forsikringsdækning" },
              { icon: "⭐", title: "Klare aftaler", desc: "Ingen skjulte gebyrer" },
            ].map((badge, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-3xl mb-3">{badge.icon}</span>
                <h3 className="font-semibold text-slate-900 text-sm mb-1">{badge.title}</h3>
                <p className="text-xs text-slate-500">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Discount */}
      <section className="py-16 bg-amber-50 border-y border-amber-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">🎓 Studerende i Aarhus?</h3>
              <p className="text-slate-700">
                Vi tilbyder <strong className="text-amber-700">10% rabat</strong> på første rengøring
                til studerende. Fra 628 kr for en 2-timers rengøring.
              </p>
            </div>
            <a
              href={`tel:${company.phone.replace(/\s+/g, "")}`}
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-amber-600 px-8 text-sm font-medium text-white transition-colors hover:bg-amber-700"
            >
              Ring og book — {company.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Price Match Guarantee */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 text-slate-700 text-center">
            <span className="text-2xl">🏆</span>
            <p className="text-sm">
              <strong>Prisgaranti:</strong> Find et billigere skriftligt tilbud på samme opgave?
              Vi matcher prisen.{" "}
              <a href={`tel:${company.phone.replace(/\s+/g, "")}`} className="text-green-600 hover:underline font-medium">
                Ring 22 65 02 26
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Credentials */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-12 text-center">
            Tillid & tryghed
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "CVR-registreret", desc: "Rendetalje.dk ApS — CVR 45564096" },
              { title: "Lokal service", desc: "Aarhus og omegn" },
              { title: "Svanemærkede produkter", desc: "Miljømærket rengøring uden unødig kemi" },
              { title: "Klare aftaler", desc: "Du ved altid hvad du får, og hvad det koster" },
              { title: "Fast & engangsopgaver", desc: "Både løbende rengøring og enkeltstående opgaver" },
              { title: "Gennemskuelig prislogik", desc: "349 kr/time inkl. moms — ingen skjulte gebyrer" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
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
              onClick={() => trackEvent("CTA Click", { location: "final_cta", target: "/kontakt" })}
              className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-green-600 transition-colors hover:bg-slate-50"
            >
              Få et tilbud
            </Link>
            <a
              href={`tel:${company.phone.replace(/\s+/g, "")}`}
              onClick={() => trackEvent("CTA Click", { location: "final_cta", target: "phone" })}
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

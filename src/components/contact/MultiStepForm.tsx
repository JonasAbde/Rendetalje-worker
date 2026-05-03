import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Loader2, ChevronLeft } from "lucide-react";
import StepIndicator from "./StepIndicator";
import ServiceSelector from "./ServiceSelector";
import SuccessAnimation from "./SuccessAnimation";

const FORM_DRAFT_KEY = "rendetalje_contact_draft";

interface MultiStepFormProps {
  onSubmit: (data: FormData) => Promise<void>;
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
}

interface FormData {
  type: string;
  date: string;
  description: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
}

export default function MultiStepForm({
  onSubmit,
  isSubmitting,
  isSubmitted,
  error,
}: MultiStepFormProps) {
  const [step, setStep] = useState(0);
  const [gdprAccepted, setGdprAccepted] = useState(false);
  const [formData, setFormData] = useState<FormData>(() => {
    // Restore draft from sessionStorage on mount
    try {
      const draft = sessionStorage.getItem(FORM_DRAFT_KEY);
      if (draft) {
        const parsed = JSON.parse(draft);
        return { ...{ type: "", date: "", description: "", name: "", phone: "", email: "", address: "", city: "" }, ...parsed };
      }
    } catch {}
    return { type: "", date: "", description: "", name: "", phone: "", email: "", address: "", city: "" };
  });

  // Persist form draft to sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem(FORM_DRAFT_KEY, JSON.stringify(formData));
    } catch {}
  }, [formData]);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 1) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    await onSubmit(data);
    // Clear draft on successful submit
    try { sessionStorage.removeItem(FORM_DRAFT_KEY); } catch {}
  };

  // Validation for each step
  const canProceed = () => {
    switch (step) {
      case 0:
        return formData.type !== "";
      case 1:
        return (
          formData.name !== "" &&
          formData.phone !== "" &&
          formData.email !== "" &&
          gdprAccepted
        );
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
        <SuccessAnimation name={formData.name || "dig"} />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
      <StepIndicator currentStep={step} totalSteps={2} />

      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl border border-red-100">
          {error}
        </div>
      )}

      <form onSubmit={step === 1 ? handleSubmit : (e) => e.preventDefault()}>
        <AnimatePresence mode="wait">
          {/* Step 1: Service Selection */}
          {step === 0 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ServiceSelector
                selected={formData.type}
                onSelect={(value) => updateField("type", value)}
              />

              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="h-14 px-8 rounded-full bg-green-600 text-white font-medium transition-colors hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Næste: Kontaktoplysninger →
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Contact Info + Details */}
          {step === 1 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-green-50 rounded-xl p-4 mb-2">
                <p className="text-sm text-green-800">
                  <strong>Du er der næsten!</strong> Udfyld dine kontaktoplysninger, så vi kan ringe dig op med et tilbud.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                    Navn *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    required
                    className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                    Telefon *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    required
                    className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  required
                  className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="address" className="block text-sm font-medium text-slate-700">
                    Adresse / Område (valgfri)
                  </label>
                  <input
                    id="address"
                    type="text"
                    value={formData.address}
                    onChange={(e) => updateField("address", e.target.value)}
                    placeholder="F.eks. Gammel Viborgvej 40"
                    className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="city" className="block text-sm font-medium text-slate-700">
                    Postnr. / By
                  </label>
                  <input
                    id="city"
                    type="text"
                    value={formData.city}
                    onChange={(e) => updateField("city", e.target.value)}
                    placeholder="F.eks. 8381 Tilst"
                    className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="block text-sm font-medium text-slate-700">
                  Kort beskrivelse af opgaven (valgfri)
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => updateField("description", e.target.value)}
                  rows={3}
                  placeholder="Fortæl kort om din opgave"
                  className="w-full p-4 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all resize-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="date" className="block text-sm font-medium text-slate-700">
                  Ønsket tidspunkt (valgfri)
                </label>
                <input
                  id="date"
                  type="text"
                  value={formData.date}
                  onChange={(e) => updateField("date", e.target.value)}
                  placeholder="F.eks. snarest muligt, eller en specifik dato"
                  className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                />
              </div>

              {/* GDPR checkbox */}
              <div className="mb-6">
                <label htmlFor="gdpr" className="flex items-start gap-3 cursor-pointer">
                  <input id="gdpr" type="checkbox" checked={gdprAccepted} onChange={(e) => setGdprAccepted(e.target.checked)} required className="mt-1 w-4 h-4 rounded border-slate-300 text-green-600 focus:ring-green-500" />
                  <span className="text-sm text-slate-600">Jeg accepterer at Rendetalje må kontakte mig omkring mit tilbud. Læs vores <Link to="/privatlivspolitik" className="text-green-600 hover:underline">privatlivspolitik</Link>.</span>
                </label>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 pt-2">
                <span className="inline-flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  CVR 45564096 · Etableret 2018
                </span>
                <span>|</span>
                <span>Ingen binding · Gratis opstart</span>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={handleBack}
                  className="h-14 px-6 rounded-full border-2 border-slate-300 text-slate-700 font-medium hover:border-slate-400 transition-colors flex items-center gap-2"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Tilbage
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !canProceed()}
                  className="h-14 px-8 rounded-full bg-green-600 text-white font-medium transition-colors hover:bg-green-700 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sender...
                    </>
                  ) : (
                    "Få mit uforpligtende tilbud →"
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}

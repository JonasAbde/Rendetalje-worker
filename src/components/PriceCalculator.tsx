import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calculator, ArrowRight, Home, Sparkles, ArrowRightLeft, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { pricing } from "../content/pricing";

type ServiceType = "fast" | "hoved" | "flytter" | "erhverv";

interface CalculatorState {
  serviceType: ServiceType;
  squareMeters: number;
  frequency: "weekly" | "biweekly" | "monthly" | "once";
  extraOven: boolean;
  extraFridge: boolean;
  extraWindows: boolean;
}

const serviceIcons: Record<ServiceType, typeof Home> = {
  fast: Home,
  hoved: Sparkles,
  flytter: ArrowRightLeft,
  erhverv: Building2,
};

// Estimation formula based on Drive docs:
// Standard: m² / 25
// Deep cleaning (hoved): (m² / 20) + 1-2 hours
// Move-out (flytter): (m² / 18) + 2-3 hours
const serviceHourCalculators: Record<ServiceType, (m2: number) => number> = {
  fast: (m2) => m2 / 25,
  hoved: (m2) => m2 / 20 + 1.5, // +1-2 hours, using 1.5 as average
  flytter: (m2) => m2 / 18 + 2.5, // +2-3 hours, using 2.5 as average
  erhverv: (m2) => m2 / 25, // Same as standard for commercial
};

// Note: Frequency affects ongoing maintenance pricing, not initial estimate
// First cleaning always takes more time than ongoing maintenance
const frequencyLabels: Record<string, string> = {
  weekly: "Ugentlig vedligeholdelse",
  biweekly: "Hver 14. dag",
  monthly: "Månedlig vedligeholdelse",
  once: "Engangsopgave",
};

export function PriceCalculator() {
  const [state, setState] = useState<CalculatorState>({
    serviceType: "fast",
    squareMeters: 100,
    frequency: "biweekly",
    extraOven: false,
    extraFridge: false,
    extraWindows: false,
  });

  const [showResult, setShowResult] = useState(false);

  const calculateEstimate = () => {
    // Calculate base hours based on service type and m²
    const baseHours = Math.max(2, serviceHourCalculators[state.serviceType](state.squareMeters));

    // Add extra hours for add-ons (from Drive docs)
    let extraHours = 0;
    if (state.extraOven) extraHours += 0.5; // +0.5 hour
    if (state.extraFridge) extraHours += 0.5; // +0.5 hour
    if (state.extraWindows) extraHours += 1; // +1 hour (0.5-1 hour per 30m², using 1 as average)

    const totalHours = baseHours + extraHours;
    const estimatedPrice = Math.round(totalHours * pricing.hourlyRate);

    // For recurring services: show both first cleaning (higher) and ongoing (lower)
    const isRecurring = state.frequency !== "once";
    const firstCleaningHours = totalHours * 1.5; // First cleaning takes ~50% more time
    const firstCleaningPrice = Math.round(firstCleaningHours * pricing.hourlyRate);

    // Min/max range for estimate (±20% for uncertainty)
    const minPrice = Math.max(pricing.minimumPrice, Math.round(estimatedPrice * 0.8));
    const maxPrice = Math.round(estimatedPrice * 1.2);

    return {
      hours: Math.round(totalHours * 10) / 10,
      firstHours: Math.round(firstCleaningHours * 10) / 10,
      minPrice,
      maxPrice,
      firstPrice: firstCleaningPrice,
      isRecurring,
      frequencyLabel: frequencyLabels[state.frequency],
    };
  };

  const result = calculateEstimate();
  const Icon = serviceIcons[state.serviceType];

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
            <Calculator className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Prisberegner</h3>
            <p className="text-sm text-slate-600">Få et estimat på forventede arbejdstimer og pris</p>
          </div>
        </div>

        {/* Service Type */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-3">Type rengøring</label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { id: "fast", label: "Fast rengøring", icon: Home },
              { id: "hoved", label: "Hovedrengøring", icon: Sparkles },
              { id: "flytter", label: "Flytterengøring", icon: ArrowRightLeft },
              { id: "erhverv", label: "Erhverv", icon: Building2 },
            ].map((service) => (
              <button
                key={service.id}
                onClick={() => {
                  setState({ ...state, serviceType: service.id as ServiceType });
                  setShowResult(false);
                }}
                className={`flex items-center gap-2 p-3 rounded-xl border-2 transition-all ${
                  state.serviceType === service.id
                    ? "border-green-600 bg-green-50 text-green-700"
                    : "border-slate-200 hover:border-slate-300 text-slate-600"
                }`}
              >
                <service.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{service.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Square Meters */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-3">
            Størrelse: {state.squareMeters} m²
          </label>
          <input
            type="range"
            min="30"
            max="300"
            step="10"
            value={state.squareMeters}
            onChange={(e) => {
              setState({ ...state, squareMeters: parseInt(e.target.value) });
              setShowResult(false);
            }}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-600"
          />
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>30 m²</span>
            <span>300 m²</span>
          </div>
        </div>

        {/* Frequency */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-3">Frekvens</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { id: "weekly", label: "Ugentlig", discount: "-10%" },
              { id: "biweekly", label: "Hver 14. dag", discount: "" },
              { id: "monthly", label: "Månedlig", discount: "" },
              { id: "once", label: "Engang", discount: "" },
            ].map((freq) => (
              <button
                key={freq.id}
                onClick={() => {
                  setState({ ...state, frequency: freq.id as typeof state.frequency });
                  setShowResult(false);
                }}
                className={`relative p-3 rounded-xl border-2 transition-all ${
                  state.frequency === freq.id
                    ? "border-green-600 bg-green-50 text-green-700"
                    : "border-slate-200 hover:border-slate-300 text-slate-600"
                }`}
              >
                <span className="text-sm font-medium">{freq.label}</span>
                {freq.discount && (
                  <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">
                    {freq.discount}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Extras */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-3">Tilvalg</label>
          <div className="space-y-2">
            {[
              { id: "extraOven", label: "Ovn rens (+30 min)", price: "~175 kr" },
              { id: "extraFridge", label: "Køleskab rens (+30 min)", price: "~175 kr" },
              { id: "extraWindows", label: "Indvendige vinduer (+1 time)", price: "~349 kr" },
            ].map((extra) => (
              <label
                key={extra.id}
                className="flex items-center justify-between p-3 rounded-xl border-2 border-slate-200 hover:border-green-300 cursor-pointer transition-all"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={state[extra.id as keyof CalculatorState] as boolean}
                    onChange={(e) => {
                      setState({ ...state, [extra.id]: e.target.checked });
                      setShowResult(false);
                    }}
                    className="w-5 h-5 rounded border-slate-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm font-medium text-slate-700">{extra.label}</span>
                </div>
                <span className="text-sm text-slate-500">{extra.price}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Worker explanation */}
        <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
          <p className="text-sm text-blue-800">
            <strong>Sådan beregnes prisen:</strong> Når flere medarbejdere er på opgaven samtidig,
            beregnes prisen ud fra den samlede arbejdstid — ikke kun hvor længe opgaven varer på adressen.
            <br /><br />
            Eksempel: 2 personer × 2 timer på stedet = 4 arbejdstimer = 1.396 kr
          </p>
        </div>

        {/* Calculate Button */}
        <button
          onClick={() => setShowResult(true)}
          className="w-full py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
        >
          Få et estimat
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Result */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 pt-6 border-t border-slate-200"
            >
              <div className="bg-green-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <Icon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Estimeret pris</p>
                    <p className="text-3xl font-bold text-slate-900">
                      {result.minPrice.toLocaleString("da-DK")} - {result.maxPrice.toLocaleString("da-DK")} kr
                    </p>
                  </div>
                </div>

                {result.isRecurring && (
                  <div className="mb-4 p-3 bg-white rounded-xl border border-green-200">
                    <p className="text-sm font-medium text-slate-700 mb-2">Fast rengøring:</p>
                    <div className="space-y-1 text-sm">
                      <p className="flex justify-between">
                        <span className="text-slate-600">Første grundige rengøring:</span>
                        <span className="font-medium">ca. {result.firstPrice.toLocaleString("da-DK")} kr ({result.firstHours} timer)</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-slate-600">Derefter {result.frequencyLabel.toLowerCase()}:</span>
                        <span className="font-medium">ca. {(result.minPrice + result.maxPrice) / 2 / 2} kr/uge</span>
                      </p>
                    </div>
                  </div>
                )}

                <div className="space-y-2 text-sm text-slate-600">
                  <p>Estimeret arbejdstid: ca. {result.hours} timer</p>
                  <p>Timepris: {pricing.hourlyRate} kr inkl. moms | Minimum: {pricing.minimumPrice} kr</p>
                  <div className="mt-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-xs text-yellow-800">
                      <strong>Dette er et estimat baseret på forventet samlet arbejdstid.</strong>
                      <br />
                      Den endelige pris afhænger af faktisk omfang, tilstand og eventuelle ekstra behov på opgaven.
                      Især flytterengøring kan variere og har historisk været undervurderet.
                    </p>
                  </div>
                </div>
                <Link
                  to="/kontakt"
                  className="mt-4 block w-full py-3 bg-green-600 text-white text-center font-medium rounded-xl hover:bg-green-700 transition-colors"
                >
                  Få et præcist tilbud
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

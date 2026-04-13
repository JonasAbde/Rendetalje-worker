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

const serviceMultipliers: Record<ServiceType, number> = {
  fast: 1,
  hoved: 1.8,
  flytter: 2.2,
  erhverv: 1.2,
};

const frequencyMultipliers: Record<string, number> = {
  weekly: 0.9,
  biweekly: 1,
  monthly: 1.3,
  once: 1,
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
    const baseHours = Math.max(2, state.squareMeters / 35);
    const serviceMult = serviceMultipliers[state.serviceType];
    const freqMult = frequencyMultipliers[state.frequency];
    
    let extraHours = 0;
    if (state.extraOven) extraHours += 0.5;
    if (state.extraFridge) extraHours += 0.5;
    if (state.extraWindows) extraHours += 1;

    const totalHours = (baseHours * serviceMult * freqMult) + extraHours;
    const estimatedPrice = Math.round(totalHours * pricing.hourlyRate);
    const minPrice = Math.max(pricing.minimumPrice, estimatedPrice - 200);
    const maxPrice = estimatedPrice + 300;

    return { hours: Math.round(totalHours * 10) / 10, minPrice, maxPrice };
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
            <p className="text-sm text-slate-600">Få et estimat på din rengøring</p>
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

        {/* Calculate Button */}
        <button
          onClick={() => setShowResult(true)}
          className="w-full py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
        >
          Beregn pris
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
                <div className="space-y-2 text-sm text-slate-600">
                  <p>Estimeret tid: ca. {result.hours} timer</p>
                  <p>Timepris: {pricing.hourlyRate} kr inkl. moms</p>
                  <p className="text-xs text-slate-500">
                    * Dette er et estimat. Få et præcist tilbud ved at kontakte os.
                  </p>
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

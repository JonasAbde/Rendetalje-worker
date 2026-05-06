import { useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { trackEvent } from "@/lib/analytics";

interface PriceCalculatorProps {
  type: string;
  size: string;
  frequency: string;
  onSizeChange: (value: string) => void;
  onFrequencyChange: (value: string) => void;
}

const basePrices: Record<string, number> = {
  fast: 399,
  flytte: 399,
  hoved: 399,
  erhverv: 399,
  andet: 399,
};

const perSqmRates: Record<string, number> = {
  fast: 18,
  flytte: 28,
  hoved: 22,
  erhverv: 14,
  andet: 20,
};

const frequencyDiscounts: Record<string, number> = {
  ugentlig: 0.15,
  hver_14_dag: 0.10,
  månedlig: 0.05,
  "": 0,
};

const frequencyLabels: Record<string, string> = {
  ugentlig: "Ugentlig",
  hver_14_dag: "Hver 14. dag",
  månedlig: "Månedlig",
};

export default function PriceCalculator({
  type,
  size,
  frequency,
  onSizeChange,
  onFrequencyChange,
}: PriceCalculatorProps) {
  const sizeNum = parseInt(size) || 0;
  const hasTracked = useRef(false);

  const estimate = useMemo(() => {
    const base = basePrices[type] || 400;
    const perSqm = perSqmRates[type] || 20;
    const sizeCost = sizeNum * perSqm;
    const subtotal = base + sizeCost;
    const discount = subtotal * (frequencyDiscounts[frequency] || 0);
    const total = subtotal - discount;

    return {
      min: Math.round(total * 0.85),
      max: Math.round(total * 1.15),
    };
  }, [type, sizeNum, frequency]);

  // Track first complete calculator interaction
  useEffect(() => {
    if (type && sizeNum > 0 && frequency && !hasTracked.current) {
      hasTracked.current = true;
      const sizeRange =
        sizeNum <= 50 ? "0-50" : sizeNum <= 100 ? "51-100" : sizeNum <= 150 ? "101-150" : sizeNum <= 200 ? "151-200" : "200+";
      trackEvent("Price Calculator Used", {
        service_type: type,
        size_range: sizeRange,
        frequency,
        estimated_price_range: `${estimate.min}-${estimate.max} kr`,
      });
    }
  }, [type, sizeNum, frequency, estimate.min, estimate.max]);

  return (
    <div className="space-y-6">
      {/* Size input */}
      <div className="space-y-3">
        <label htmlFor="size" className="block text-sm font-medium text-slate-700">
          Ca. størrelse (m²)
        </label>
        <div className="flex items-center gap-4">
          <input
            id="size"
            type="range"
            min="0"
            max="300"
            value={sizeNum}
            onChange={(e) => onSizeChange(e.target.value)}
            className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-600"
          />
          <div className="w-24">
            <input
              type="number"
              value={size}
              onChange={(e) => onSizeChange(e.target.value)}
              placeholder="m²"
              className="w-full h-12 px-3 rounded-xl border border-slate-300 text-center font-semibold"
            />
          </div>
        </div>
        <p className="text-xs text-slate-500">
          {sizeNum > 0 ? `${sizeNum} m²` : "Vælg størrelse for prisestimat"}
        </p>
      </div>

      {/* Frequency selector */}
      <div className="space-y-3">
        <label id="frequency-label" className="block text-sm font-medium text-slate-700">
          Ønsket frekvens
        </label>
        <div className="grid grid-cols-3 gap-3" role="radiogroup" aria-labelledby="frequency-label">
          {Object.entries(frequencyLabels).map(([value, label]) => (
            <button
              key={value}
              type="button"
              role="radio"
              aria-checked={frequency === value}
              onClick={() => onFrequencyChange(value)}
              className={`py-3 px-4 rounded-xl border-2 text-sm font-medium transition-all ${
                frequency === value
                  ? "border-green-500 bg-green-50 text-green-700"
                  : "border-slate-200 hover:border-slate-300 text-slate-600"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        {frequency && (
          <p className="text-xs text-green-600 font-medium">
            Du sparer {Math.round(frequencyDiscounts[frequency] * 100)}% ved {frequencyLabels[frequency].toLowerCase()} rengøring
          </p>
        )}
      </div>

      {/* Price estimate */}
      <AnimatePresence mode="wait">
        {estimate.min > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200"
          >
            <div className="text-center">
              <p className="text-sm text-slate-600 mb-2">Estimeret pris</p>
              <motion.div
                key={estimate.min}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="text-4xl font-bold text-green-700 mb-2"
              >
                {estimate.min.toLocaleString("da-DK")} - {estimate.max.toLocaleString("da-DK")} kr
              </motion.div>
              <p className="text-sm text-slate-500">
                Få en fast pris når vi ringer dig op
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trust signal */}
      <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
        <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="font-medium">Vi ringer dig op inden for 2 timer i dagtimerne</span>
      </div>
    </div>
  );
}

import { motion } from "motion/react";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const steps = [
  { label: "Vælg service", icon: "1" },
  { label: "Detaljer & pris", icon: "2" },
  { label: "Kontakt", icon: "3" },
];

export default function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="w-full mb-8">
      {/* Progress bar */}
      <div className="relative h-2 bg-slate-200 rounded-full overflow-hidden mb-6">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* Step labels */}
      <div className="flex justify-between items-center">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          const isFuture = index > currentStep;

          return (
            <motion.div
              key={index}
              className={`flex flex-col items-center gap-2 ${
                isFuture ? "opacity-50" : ""
              }`}
              initial={false}
              animate={{ scale: isActive ? 1.05 : 1 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                  isCompleted
                    ? "bg-green-500 text-white"
                    : isActive
                    ? "bg-green-600 text-white shadow-lg shadow-green-200"
                    : "bg-slate-200 text-slate-500"
                }`}
              >
                {isCompleted ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  step.icon
                )}
              </div>
              <span
                className={`text-xs font-medium ${
                  isActive ? "text-green-600" : "text-slate-500"
                }`}
              >
                {step.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

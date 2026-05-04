import { motion } from "motion/react";
import { CalendarCheck, Boxes, Sparkles, Building2, HelpCircle } from "lucide-react";

interface ServiceSelectorProps {
  selected: string;
  onSelect: (value: string) => void;
}

const services = [
  {
    id: "fast",
    label: "Fast rengøring",
    description: "Ugentlig eller hver 14. dag",
    icon: CalendarCheck,
    color: "bg-blue-50 border-blue-200 hover:border-blue-400",
    activeColor: "bg-blue-100 border-blue-500 ring-2 ring-blue-300",
  },
  {
    id: "flytte",
    label: "Flytterengøring",
    description: "Grundig rengøring ved fraflytning",
    icon: Boxes,
    color: "bg-orange-50 border-orange-200 hover:border-orange-400",
    activeColor: "bg-orange-100 border-orange-500 ring-2 ring-orange-300",
  },
  {
    id: "hoved",
    label: "Hovedrengøring",
    description: "Deep clean af hele hjemmet",
    icon: Sparkles,
    color: "bg-green-50 border-green-200 hover:border-green-400",
    activeColor: "bg-green-100 border-green-500 ring-2 ring-green-300",
  },
  {
    id: "erhverv",
    label: "Erhvervsrengøring",
    description: "Kontorer, klinikker, butikker",
    icon: Building2,
    color: "bg-purple-50 border-purple-200 hover:border-purple-400",
    activeColor: "bg-purple-100 border-purple-500 ring-2 ring-purple-300",
  },
  {
    id: "andet",
    label: "Andet",
    description: "Fortæl os om din opgave",
    icon: HelpCircle,
    color: "bg-slate-50 border-slate-200 hover:border-slate-400",
    activeColor: "bg-slate-100 border-slate-500 ring-2 ring-slate-300",
  },
];

export default function ServiceSelector({ selected, onSelect }: ServiceSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 id="service-selector-label" className="text-lg font-semibold text-slate-900 mb-6">
        Hvilken type rengøring har du brug for?
      </h3>
      
      <div role="radiogroup" aria-labelledby="service-selector-label" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isSelected = selected === service.id;
          
          return (
            <motion.button
              key={service.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelect(service.id)}
              className={`relative p-6 rounded-2xl border-2 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500 ${
                isSelected ? service.activeColor : service.color
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                  isSelected ? "bg-white" : "bg-white/80"
                }`}>
                  <Icon className="w-6 h-6 text-slate-700" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 mb-1">
                    {service.label}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {service.description}
                  </p>
                </div>
              </div>
              
              {isSelected && (
                <motion.div
                  className="absolute top-3 right-3 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Trust signal */}
      <motion.p
        className="text-center text-sm text-slate-500 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="inline-flex items-center gap-1">
          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          500+ tilfredse kunder i Aarhus
        </span>
      </motion.p>
    </div>
  );
}

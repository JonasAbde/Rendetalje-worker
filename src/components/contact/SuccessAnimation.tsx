import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Phone, ClipboardList, BadgeCheck } from "lucide-react";

interface SuccessAnimationProps {
  name: string;
}

function generateBookingRef() {
  const date = new Date();
  const year = date.getFullYear().toString().slice(-2);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  // Security Enhancement: Use cryptographically secure random values for identifiers
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  const random = (array[0] % 900) + 100;
  return `REN-${year}${month}${day}-${random}`;
}

export default function SuccessAnimation({ name }: SuccessAnimationProps) {
  const [bookingRef] = useState(generateBookingRef());
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
  }, []);

  // Simple confetti particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 0.5,
    color: ["#16a34a", "#22c55e", "#4ade80", "#86efac", "#fbbf24"][Math.floor(Math.random() * 5)],
  }));

  return (
    <div className="relative overflow-hidden">
      {/* Confetti */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: p.color,
                left: `${p.x}%`,
                top: -10,
              }}
              initial={{ y: -10, opacity: 1 }}
              animate={{
                y: [0, 400],
                x: [0, (Math.random() - 0.5) * 200],
                rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
                opacity: [1, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random(),
                delay: p.delay,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      )}

      <motion.div
        className="text-center py-12 relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Success icon */}
        <motion.div
          className="w-24 h-24 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-green-200"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        >
          <CheckCircle2 className="w-12 h-12 text-white" />
        </motion.div>

        {/* Thank you message */}
        <motion.h2
          className="text-3xl font-bold text-slate-900 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Tak {name}!
        </motion.h2>

        <motion.p
          className="text-lg text-slate-600 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Vi har modtaget din forespørgsel og ringer dig op snarest
        </motion.p>

        {/* Booking reference */}
        <motion.div
          className="inline-flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-sm text-slate-500">Din reference:</span>
          <span className="font-mono font-semibold text-slate-700">{bookingRef}</span>
        </motion.div>

        {/* What happens next */}
        <motion.div
          className="bg-slate-50 rounded-2xl p-6 mb-8 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="font-semibold text-slate-900 mb-4 text-center">Hvad sker der nu?</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-slate-900">Vi ringer inden for 2 timer</p>
                <p className="text-sm text-slate-500">I dagtimerne mandag-fredag</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <ClipboardList className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-slate-900">Vi gennemgår detaljerne</p>
                <p className="text-sm text-slate-500">Størrelse, ønsker og tidsplan</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <BadgeCheck className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-slate-900">Du får en fast pris</p>
                <p className="text-sm text-slate-500">Uforpligtende og skræddersyet</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="inline-flex items-center gap-1">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            CVR 45564096
          </span>
          <span>|</span>
          <span>Etableret 2018</span>
          <span>|</span>
          <span>Ingen binding</span>
        </motion.div>
      </motion.div>
    </div>
  );
}

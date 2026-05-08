import { motion } from "motion/react";
import { MapPin } from "lucide-react";

interface Area {
  city: string;
  text: string;
}

interface AreaServiceGridProps {
  areas: Area[];
  serviceTitle: string;
}

export default function AreaServiceGrid({
  areas,
  serviceTitle,
}: AreaServiceGridProps) {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            {serviceTitle} i hele Aarhus-området
          </h2>
          <p className="text-slate-600 max-w-3xl">
            Vi dækker hele Aarhus-området med professionel rengøring. Se hvad vi
            tilbyder i netop dit område.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <motion.div
              key={area.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-6 hover:border-green-100 hover:bg-green-50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {area.city}
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {area.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

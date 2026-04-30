import { motion } from "motion/react";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { company } from "@/content/company";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-[calc(100vh-300px)]">
      <Helmet>
<link rel="canonical" href="https://rendetalje.dk/404" />
        <title>Side ikke fundet | {company.name}</title>
        <meta
          name="description"
          content="Den side du leder efter findes ikke. Gå tilbage til forsiden eller se vores ydelser."
        />
      </Helmet>

      <section className="flex-grow flex items-center justify-center py-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* 404 Illustration */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <Search className="w-16 h-16 text-slate-400" />
              </div>
              <h1 className="text-8xl font-bold text-slate-200 mb-4">404</h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Siden blev ikke fundet
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
                Beklager, men den side du leder efter findes ikke. Den kan være
                flyttet, omdøbt eller eksisterer ikke længere.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => navigate(-1)}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-700 border border-slate-300 rounded-xl font-medium hover:bg-slate-50 transition-colors w-full sm:w-auto"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Gå tilbage
                </button>

                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-colors w-full sm:w-auto"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Gå til forsiden
                </Link>
              </div>
            </motion.div>

            {/* Helpful Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-slate-200"
            >
              <p className="text-sm text-slate-500 mb-4">
                Måske kan du finde det du søger her:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/services"
                  className="px-4 py-2 bg-slate-50 text-slate-600 rounded-lg text-sm hover:bg-slate-100 transition-colors"
                >
                  Vores ydelser
                </Link>
                <Link
                  to="/priser"
                  className="px-4 py-2 bg-slate-50 text-slate-600 rounded-lg text-sm hover:bg-slate-100 transition-colors"
                >
                  Priser
                </Link>
                <Link
                  to="/kontakt"
                  className="px-4 py-2 bg-slate-50 text-slate-600 rounded-lg text-sm hover:bg-slate-100 transition-colors"
                >
                  Kontakt os
                </Link>
                <Link
                  to="/faq"
                  className="px-4 py-2 bg-slate-50 text-slate-600 rounded-lg text-sm hover:bg-slate-100 transition-colors"
                >
                  FAQ
                </Link>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8"
            >
              <p className="text-sm text-slate-500">
                Har du brug for hjælp? Kontakt os på{" "}
                <a
                  href={`tel:${company.phone.replace(/\s+/g, "")}`}
                  className="text-green-600 hover:underline"
                >
                  {company.phone}
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

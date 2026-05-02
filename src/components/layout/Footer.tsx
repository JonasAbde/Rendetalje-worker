import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src="/logo.webp" alt="Rendetalje Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-slate-600 mb-6 max-w-md leading-relaxed">
              Professionel rengøring med fokus på detaljen. Fast rengøring,
              flytterengøring, hovedrengøring og erhvervsrengøring i Aarhus og
              omegn.
            </p>
            <div className="space-y-2 text-slate-600">
              <p>Gammel Viborgvej 40, 8381 Tilst</p>
              <p>{company.legalName} · CVR {company.cvr}</p>
              <p>
                <a
                  href="tel:+4522650226"
                  className="hover:text-green-600 transition-colors"
                >
                  +45 22 65 02 26
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@rendetalje.dk"
                  className="hover:text-green-600 transition-colors"
                >
                  info@rendetalje.dk
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-6">
              Navigation
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/services"
                  className="text-slate-600 hover:text-green-600 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/priser"
                  className="text-slate-600 hover:text-green-600 transition-colors"
                >
                  Priser
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-slate-600 hover:text-green-600 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/kontakt"
                  className="text-slate-600 hover:text-green-600 transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-6">
              Information
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/handelsbetingelser"
                  className="text-slate-600 hover:text-green-600 transition-colors"
                >
                  Handelsbetingelser
                </Link>
              </li>
              <li>
                <Link
                  to="/privatlivspolitik"
                  className="text-slate-600 hover:text-green-600 transition-colors"
                >
                  Privatlivspolitik
                </Link>
              </li>
              <li>
                <Link
                  to="/cookiepolitik"
                  className="text-slate-600 hover:text-green-600 transition-colors"
                >
                  Cookiepolitik
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} Rendetalje. Alle rettigheder
            forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  );
}

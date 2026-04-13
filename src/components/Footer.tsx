import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { company } from '../content/company';

const footerLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Priser', href: '/priser' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'Handelsbetingelser', href: '/handelsbetingelser' },
  { label: 'Privatlivspolitik', href: '/privatlivspolitik' },
  { label: 'Cookiepolitik', href: '/cookiepolitik' },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-padding py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src="/logo.png"
                alt="Rendetalje"
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professionel rengøring med fokus på detaljen.
              Fast rengøring, flytterengøring, hovedrengøring og erhvervsrengøring i Aarhus og omegn.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brand-light flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{company.address}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-brand-light flex-shrink-0" />
                <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="text-gray-300 hover:text-white">
                  {company.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-brand-light flex-shrink-0" />
                <a href={`mailto:${company.email}`} className="text-gray-300 hover:text-white">
                  {company.email}
                </a>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-4">CVR: {company.cvr}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-3">
              {footerLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Juridisk</h4>
            <ul className="space-y-3">
              {footerLinks.slice(4).map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} {company.name}. Alle rettigheder forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  );
}

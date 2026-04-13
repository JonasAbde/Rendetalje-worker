import { Link } from 'react-router-dom';
import { ArrowRight, Check, Phone } from 'lucide-react';
import { getServiceBySlug } from '../content/services';
import { company } from '../content/company';

export function ServiceFast() {
  const service = getServiceBySlug('fast-rengoering');
  
  if (!service) return null;

  return (
    <>
      {/* Header */}
      <section className="bg-brand-50 py-16">
        <div className="container-padding max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{service.name}</h1>
            <p className="text-xl text-gray-600">{service.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-padding max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              {service.description}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Hvad er typisk inkluderet?</h2>
            <ul className="space-y-3 mb-8">
              {service.included.map((item) => (
                <li key={item} className="flex items-start">
                  <Check className="w-5 h-5 text-brand mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Hvem er det til?</h2>
            <p className="text-gray-700 mb-8">{service.targetAudience}</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Hvordan aftaler vi prisen?</h2>
            <p className="text-gray-700 mb-8">{service.pricingNote}</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Hvordan fungerer det?</h2>
            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <ol className="space-y-4">
                <li className="flex">
                  <span className="font-bold text-brand mr-3">1.</span>
                  <span className="text-gray-700">Du sender en forespørgsel med dine ønsker til frekvens og omfang.</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-brand mr-3">2.</span>
                  <span className="text-gray-700">Vi besigtiger boligen/lokalet og aftaler en fastpris.</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-brand mr-3">3.</span>
                  <span className="text-gray-700">Vi starter på det aftalte tidspunkt og holder et stabilt niveau.</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-brand mr-3">4.</span>
                  <span className="text-gray-700">Du får én samlet faktura månedligt.</span>
                </li>
              </ol>
            </div>

            {/* Service FAQ */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Ofte stillede spørgsmål</h2>
            <div className="space-y-6 mb-12">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Hvor ofte kan jeg få gjort rent?</h3>
                <p className="text-gray-600">Vi tilbyder ugentlig, hver anden uge eller månedlig rengøring — efter hvad der passer dig bedst.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Skal jeg være hjemme?</h3>
                <p className="text-gray-600">Nej, vi aftaler altid adgang inden første besøg. Det kan ske via nøgleboks, nøgleplacering eller at vi opbevarer et nøglesæt.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Hvad hvis jeg ikke er tilfreds?</h3>
                <p className="text-gray-600">Kontakt os hurtigst muligt, så gennemgår vi forholdene og aftaler en konkret udbedring.</p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-brand-50 p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Klar til fast rengøring?</h3>
              <p className="text-gray-600 mb-6">
                Få et uforpligtende tilbud på fast rengøring til dit hjem eller kontor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/kontakt" className="btn-primary">
                  Få et tilbud
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href={`tel:${company.phone.replace(/\s/g, '')}`}
                  className="btn-secondary"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {company.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

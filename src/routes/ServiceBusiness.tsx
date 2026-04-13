import { Link } from 'react-router-dom';
import { ArrowRight, Check, Phone } from 'lucide-react';
import { getServiceBySlug } from '../content/services';
import { company } from '../content/company';

export function ServiceBusiness() {
  const service = getServiceBySlug('erhvervsrengoering');
  
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
                  <span className="text-gray-700">Du sender en forespørgsel med lokalets størrelse og behov.</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-brand mr-3">2.</span>
                  <span className="text-gray-700">Vi besigtiger lokalerne og aftaler scope og frekvens.</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-brand mr-3">3.</span>
                  <span className="text-gray-700">Vi laver en fast aftale med klare forventninger.</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-brand mr-3">4.</span>
                  <span className="text-gray-700">I får én samlet faktura månedligt.</span>
                </li>
              </ol>
            </div>

            {/* Service FAQ */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Ofte stillede spørgsmål</h2>
            <div className="space-y-6 mb-12">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Kan I komme uden for normal arbejdstid?</h3>
                <p className="text-gray-600">Ja, vi kan aftale rengøring uden for kontortid, så det ikke forstyrrer jeres arbejde. Det aftales fra sag til sag.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Medbringer I selv udstyr?</h3>
                <p className="text-gray-600">Ja, vi medbringer alt nødvendigt udstyr og svanemærkede rengøringsprodukter.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Hvad hvis vi har specielle sikkerhedskrav?</h3>
                <p className="text-gray-600">Vi respekterer alle sikkerheds- og fortrolighedskrav. Fortæl os om jeres behov, så indretter vi os efter dem.</p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-brand-50 p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Klar til erhvervsrengøring?</h3>
              <p className="text-gray-600 mb-6">
                Lad os tage en snak om jeres behov. Vi tilbyder en uforpligtende besigtigelse.
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

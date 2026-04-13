import { Link } from 'react-router-dom';
import { ArrowRight, Check, Phone } from 'lucide-react';
import { pricing, pricingExamples, pricingFactors, publicPricingText } from '../content/pricing';
import { company } from '../content/company';

export function Prices() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-50 py-16">
        <div className="container-padding max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Priser</h1>
          <p className="text-xl text-gray-600">Transparent prissætning uden skjulte gebyrer.</p>
        </div>
      </section>

      {/* Main Pricing */}
      <section className="section-padding bg-white">
        <div className="container-padding max-w-4xl mx-auto">
          <div className="bg-brand-50 rounded-2xl p-8 md:p-12 mb-12">
            <div className="text-center mb-8">
              <div className="text-5xl md:text-6xl font-bold text-brand mb-2">
                {pricing.hourlyRate} kr
              </div>
              <p className="text-gray-600">/time inkl. moms</p>
            </div>
            <div className="text-center text-lg text-gray-700 mb-8">
              Minimumspris: <span className="font-bold">{pricing.minimumPrice} kr</span> inkl. moms
            </div>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              {publicPricingText}
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Hvordan fastsætter vi prisen?</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Fastpris</h3>
              <p className="text-gray-600 text-sm">{pricing.logic.fast}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Estimat</h3>
              <p className="text-gray-600 text-sm">{pricing.logic.estimate}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Tilbud</h3>
              <p className="text-gray-600 text-sm">{pricing.logic.quote}</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Eksempler på priser</h2>
          <div className="space-y-4 mb-12">
            {pricingExamples.map((example) => (
              <div key={example.title} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-gray-900">{example.title}</h3>
                  <p className="text-gray-600 text-sm">{example.description}</p>
                </div>
                <div className="mt-2 md:mt-0 md:text-right">
                  <span className="font-bold text-brand">{example.price}</span>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Hvad påvirker prisen?</h2>
          <ul className="space-y-3 mb-12">
            {pricingFactors.map((factor) => (
              <li key={factor} className="flex items-start">
                <Check className="w-5 h-5 text-brand mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{factor}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Betalingsbetingelser</h2>
          <div className="space-y-4 mb-12">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Faste kunder</h3>
              <p className="text-gray-600">{pricing.paymentTerms.recurring}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Engangsopgaver</h3>
              <p className="text-gray-600">{pricing.paymentTerms.oneOff}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-brand-50 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Få et konkret tilbud</h3>
            <p className="text-gray-600 mb-6">
              Priserne ovenfor er vejledende. Kontakt os for et præcist tilbud baseret på din specifikke opgave.
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
      </section>
    </>
  );
}

import { Link } from 'react-router-dom';
import { ArrowRight, Check, Phone } from 'lucide-react';
import { getServiceBySlug } from '../content/services';
import { company } from '../content/company';

export function ServiceDeep() {
  const service = getServiceBySlug('hovedrengoering');
  
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

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Hvordan beregnes prisen?</h2>
            <p className="text-gray-700 mb-8">{service.pricingNote}</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Hvordan fungerer det?</h2>
            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <ol className="space-y-4">
                <li className="flex">
                  <span className="font-bold text-brand mr-3">1.</span>
                  <span className="text-gray-700">Du beskriver din bolig og hvad du har brug for.</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-brand mr-3">2.</span>
                  <span className="text-gray-700">Vi giver et estimat på forventet tidsforbrug.</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-brand mr-3">3.</span>
                  <span className="text-gray-700">Vi aftaler et tidspunkt og eventuelle særlige fokusområder.</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-brand mr-3">4.</span>
                  <span className="text-gray-700">Vi udfører hovedrengøringen grundigt og systematisk.</span>
                </li>
              </ol>
            </div>

            {/* Service FAQ */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Ofte stillede spørgsmål</h2>
            <div className="space-y-6 mb-12">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Hvad er forskellen på almindelig og hovedrengøring?</h3>
                <p className="text-gray-600">Hovedrengøring går dybere — vi rengør skabe og skuffer indvendigt, ovne og køleskabe, afkalker og får fat på støv og snavs, der ophober sig over tid.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Skal jeg være hjemme?</h3>
                <p className="text-gray-600">Det er op til dig. Mange kunder foretrækker at være hjemme første gang, så vi kan gennemgå ønsker sammen. Derefter kan vi arbejde selvstændigt.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Hvor lang tid tager det?</h3>
                <p className="text-gray-600">Typisk 3-6 timer afhængigt af boligens størrelse og stand. Vi giver et præcist estimat inden vi starter.</p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-brand-50 p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Klar til en grundig rengøring?</h3>
              <p className="text-gray-600 mb-6">
                Få et estimat på hovedrengøring af din bolig. Jo flere detaljer, jo bedre.
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

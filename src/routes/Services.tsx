import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { services } from '../content/services';
import { extraServices } from '../content/services';

export function Services() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-50 py-16">
        <div className="container-padding max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Vores services</h1>
          <p className="text-xl text-gray-600">
            Professionel rengøring til private og virksomheder i Aarhus og omegn.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-padding max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Typisk inkluderet:</h3>
                  <ul className="space-y-1">
                    {service.included.slice(0, 4).map((item) => (
                      <li key={item} className="flex items-center text-gray-600">
                        <Check className="w-4 h-4 text-brand mr-2 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center text-brand font-medium hover:text-brand-dark"
                >
                  Læs mere om {service.name.toLowerCase()}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-padding max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ekstra services efter aftale</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {extraServices.map((service) => (
              <span key={service} className="bg-white px-4 py-2 rounded-full text-gray-700">
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-padding max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Er du i tvivl om, hvad du har brug for?</h2>
          <p className="text-gray-600 mb-8">
            Kontakt os for en uforpligtende snak om din rengøringsopgave. 
            Vi hjælper med at finde den rigtige løsning.
          </p>
          <Link to="/kontakt" className="btn-primary">
            Få et tilbud
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}

import { Link } from 'react-router-dom';
import { ArrowRight, Check, MapPin, Phone } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';
import { services } from '../content/services';
import { company, whyChooseUs, trustItems } from '../content/company';
import { faqPreviewItems } from '../content/faq';
import { processSteps } from '../content/process';
import { publicPricingText } from '../content/pricing';
import { areas } from '../content/areas';

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 to-white section-padding">
        <div className="container-padding max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Professionel rengøring i Aarhus med fokus på detaljen
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Vi hjælper private og mindre virksomheder med fast rengøring, flytterengøring og hovedrengøring — 
              med klare aftaler, stabil kvalitet og et resultat, vi kan stå inde for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakt" className="btn-primary text-lg">
                Få et tilbud
              </Link>
              <Link to="/services" className="btn-secondary text-lg">
                Se vores services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="container-padding max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center text-gray-700">
                <Check className="w-5 h-5 text-brand mr-2 flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-padding max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Vores services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Vi tilbyder professionel rengøring til både private og virksomheder. 
              Vælg den løsning, der passer til dine behov.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary">
              Se alle services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-padding max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hvorfor vælge os?</h2>
            <p className="text-gray-600">Det skal være nemt at få gjort rent ordentligt.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="section-padding bg-white">
        <div className="container-padding max-w-6xl mx-auto">
          <div className="bg-brand-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Transparent prissætning</h2>
                <p className="text-gray-600 mb-6">{publicPricingText}</p>
                <Link to="/priser" className="btn-primary">
                  Se vores priser
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-center mb-4">
                  <span className="text-4xl font-bold text-brand">349 kr</span>
                  <span className="text-gray-500">/time inkl. moms</span>
                </div>
                <div className="text-center text-gray-600">
                  Minimumspris: <span className="font-semibold">698 kr</span> inkl. moms
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-padding max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sådan kommer du i gang</h2>
            <p className="text-gray-600">Fire enkle skridt fra forespørgsel til færdigt arbejde.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.number} className="relative">
                <span className="text-5xl font-bold text-brand-100 absolute -top-4 -left-2">
                  {step.number}
                </span>
                <div className="relative pt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Area */}
      <section className="section-padding bg-gray-50">
        <div className="container-padding max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Vi kører i Aarhus og omegn</h2>
              <p className="text-gray-600 mb-6">{areas.description}</p>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-brand mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{company.address}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {areas.cities.slice(0, 8).map((city) => (
                <span key={city} className="bg-white px-4 py-2 rounded-full text-gray-700 text-sm">
                  {city}
                </span>
              ))}
              <span className="bg-white px-4 py-2 rounded-full text-gray-500 text-sm">+ flere</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-white">
        <div className="container-padding max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ofte stillede spørgsmål</h2>
          </div>
          <div className="space-y-6">
            {faqPreviewItems.map((item) => (
              <div key={item.question} className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/faq" className="btn-secondary">
              Se alle FAQ
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-brand">
        <div className="container-padding max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Klar til at få gjort rent?
          </h2>
          <p className="text-brand-100 mb-8 text-lg">
            Få et uforpligtende tilbud på din rengøringsopgave. Vi vender tilbage hurtigt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-brand bg-white rounded-lg hover:bg-gray-100 transition-colors">
              Få et tilbud
            </Link>
            <a
              href={`tel:${company.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              {company.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

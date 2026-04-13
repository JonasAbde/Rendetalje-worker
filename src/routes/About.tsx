import { Check } from 'lucide-react';
import { company, aboutContent, trustItems } from '../content/company';
import { positioning } from '../content/company';

export function About() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-50 py-16">
        <div className="container-padding max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Om Rendetalje</h1>
          <p className="text-xl text-gray-600">{positioning.promise}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-padding max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              {aboutContent.intro}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Det står vi for</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center">
                  <Check className="w-5 h-5 text-brand mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Kontakt</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong className="text-gray-900">{company.name}</strong>
                </p>
                <p className="text-gray-700">{company.address}</p>
                <p className="text-gray-700">CVR: {company.cvr}</p>
                <p className="text-gray-700">
                  Telefon:{' '}
                  <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="text-brand hover:underline">
                    {company.phone}
                  </a>
                </p>
                <p className="text-gray-700">
                  Email:{' '}
                  <a href={`mailto:${company.email}`} className="text-brand hover:underline">
                    {company.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

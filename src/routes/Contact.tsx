import { QuoteForm } from '../components/QuoteForm';
import { company } from '../content/company';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-50 py-16">
        <div className="container-padding max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Kontakt os</h1>
          <p className="text-xl text-gray-600">
            Få et uforpligtende tilbud eller stil os dine spørgsmål.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-padding max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kontaktoplysninger</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Telefon</h3>
                    <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-brand">
                      {company.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a href={`mailto:${company.email}`} className="text-gray-600 hover:text-brand">
                      {company.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Adresse</h3>
                    <p className="text-gray-600">{company.address}</p>
                    <p className="text-gray-500 text-sm">CVR: {company.cvr}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Åbningstider</h3>
                    <p className="text-gray-600">Man–Fre: 08:00–17:00</p>
                    <p className="text-gray-500 text-sm">Lør–Søn: Efter aftale</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">Hurtigst svar</h3>
                <p className="text-gray-600 text-sm">
                  For akutte henvendelser eller hurtigste svar, ring direkte på{' '}
                  <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="text-brand font-medium">
                    {company.phone}
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Quote Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Få et tilbud</h2>
              <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

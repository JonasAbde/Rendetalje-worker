import { useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';
import type { QuoteFormData } from '../types';
import { services } from '../content/services';
import { company } from '../content/company';

const INITIAL_FORM_DATA: QuoteFormData = {
  name: '',
  phone: '',
  email: '',
  address: '',
  postalCode: '',
  city: '',
  serviceType: '',
  squareMeters: '',
  frequency: '',
  desiredDateOrWindow: '',
  description: '',
  sourcePage: '',
  submittedAt: '',
};

export function QuoteForm() {
  const [formData, setFormData] = useState<QuoteFormData>(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const payload = {
      ...formData,
      sourcePage: window.location.pathname,
      submittedAt: new Date().toISOString(),
    };

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData(INITIAL_FORM_DATA);
      } else {
        throw new Error('Der opstod en fejl. Prøv igen senere.');
      }
    } catch {
      setError('Der opstod en fejl ved afsendelse. Ring venligst direkte på ' + company.phone);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Tak for din forespørgsel!</h3>
        <p className="text-gray-600 mb-6">
          Vi har modtaget din henvendelse og vender tilbage hurtigst muligt.
        </p>
        <p className="text-gray-600">
          Har du brug for akut hjælp? Ring til os på{' '}
          <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="text-brand font-medium">
            {company.phone}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Navn <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand"
            placeholder="Dit fulde navn"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefon <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand"
            placeholder="+45 12 34 56 78"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand"
            placeholder="din@email.dk"
          />
        </div>

        {/* Service Type */}
        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
            Type af rengøring <span className="text-red-500">*</span>
          </label>
          <select
            id="serviceType"
            name="serviceType"
            required
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand"
          >
            <option value="">Vælg type</option>
            {services.map((service) => (
              <option key={service.id} value={service.slug}>
                {service.name}
              </option>
            ))}
            <option value="andet">Andet / Usikker</option>
          </select>
        </div>
      </div>

      {/* Address */}
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
          Adresse <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="address"
          name="address"
          required
          value={formData.address}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand"
          placeholder="Vejnavn og husnummer"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Postal Code */}
        <div>
          <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
            Postnr. <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            required
            pattern="[0-9]{4}"
            value={formData.postalCode}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand"
            placeholder="8000"
          />
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
            By <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand"
            placeholder="Aarhus"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Square Meters */}
        <div>
          <label htmlFor="squareMeters" className="block text-sm font-medium text-gray-700 mb-1">
            Størrelse (kvm)
          </label>
          <input
            type="text"
            id="squareMeters"
            name="squareMeters"
            value={formData.squareMeters}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand"
            placeholder="F.eks. 85 kvm"
          />
        </div>

        {/* Frequency */}
        <div>
          <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-1">
            Ønsket frekvens
          </label>
          <select
            id="frequency"
            name="frequency"
            value={formData.frequency}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand"
          >
            <option value="">Vælg frekvens</option>
            <option value="ugentligt">Ugentligt</option>
            <option value="hver-anden-uge">Hver anden uge</option>
            <option value="maanedligt">Månedligt</option>
            <option value="engang">Engangsopgave</option>
            <option value="usikker">Usikker / Vil drøfte</option>
          </select>
        </div>
      </div>

      {/* Desired Date */}
      <div>
        <label htmlFor="desiredDateOrWindow" className="block text-sm font-medium text-gray-700 mb-1">
          Ønsket tidspunkt
        </label>
        <input
          type="text"
          id="desiredDateOrWindow"
          name="desiredDateOrWindow"
          value={formData.desiredDateOrWindow}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand"
          placeholder="F.eks. Snarest muligt, om 2 uger, dato..."
        />
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Beskrivelse af opgaven
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand resize-none"
          placeholder="Beskriv kort din opgave, særlige ønsker eller spørgsmål..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sender...
          </>
        ) : (
          'Send forespørgsel'
        )}
      </button>
    </form>
  );
}

import { company } from '../content/company';

export function StructuredData() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name,
    description: 'Professionel rengøring med fokus på detaljen. Fast rengøring, flytterengøring, hovedrengøring og erhvervsrengøring i Aarhus og omegn.',
    url: `https://${company.domain}`,
    telephone: company.phone.replace(/\s/g, ''),
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Gammel Viborgvej 40',
      addressLocality: 'Tilst',
      postalCode: '8381',
      addressCountry: 'DK',
    },
    areaServed: {
      '@type': 'City',
      name: 'Aarhus',
    },
    serviceType: [
      'Fast rengøring',
      'Flytterengøring',
      'Hovedrengøring',
      'Erhvervsrengøring',
    ],
    priceRange: '$$',
    openingHours: ['Mo-Fr 08:00-17:00'],
    paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
    currenciesAccepted: 'DKK',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}

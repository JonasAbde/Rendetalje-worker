export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  included: string[];
  targetAudience: string;
  pricingNote: string;
  frequency?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  postalCode: string;
  city: string;
  serviceType: string;
  squareMeters: string;
  frequency: string;
  desiredDateOrWindow: string;
  description: string;
  sourcePage: string;
  submittedAt: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  submittedAt: string;
}

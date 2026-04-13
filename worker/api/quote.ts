import type { Env } from '../index';
import type { QuoteFormData } from '../../src/types';

export async function handleQuoteRequest(
  request: Request,
  env: Env,
  corsHeaders: Record<string, string>
): Promise<Response> {
  try {
    const body = await request.json() as QuoteFormData;

    // Validation
    const validationError = validateQuotePayload(body);
    if (validationError) {
      return new Response(
        JSON.stringify({ error: validationError }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Sanitize payload
    const sanitizedPayload = sanitizePayload(body);

    // Log the submission (in production, send email or store in database)
    console.log('Quote submission received:', sanitizedPayload);

    // Here you would typically:
    // 1. Send email notification to QUOTE_DESTINATION_EMAIL
    // 2. Store in database/CRM
    // 3. Send confirmation to customer

    // For now, we return success
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Tak for din forespørgsel. Vi vender tilbage hurtigst muligt.' 
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error handling quote request:', error);
    
    return new Response(
      JSON.stringify({ error: 'Der opstod en fejl. Prøv igen senere.' }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
}

function validateQuotePayload(payload: QuoteFormData): string | null {
  // Required fields
  if (!payload.name || payload.name.trim().length < 2) {
    return 'Navn skal være mindst 2 tegn.';
  }

  if (!payload.phone || !isValidPhone(payload.phone)) {
    return 'Indtast et gyldigt telefonnummer.';
  }

  if (!payload.email || !isValidEmail(payload.email)) {
    return 'Indtast en gyldig email-adresse.';
  }

  if (!payload.address || payload.address.trim().length < 5) {
    return 'Indtast en gyldig adresse.';
  }

  if (!payload.postalCode || !/^\d{4}$/.test(payload.postalCode)) {
    return 'Indtast et gyldigt 4-cifret postnummer.';
  }

  if (!payload.city || payload.city.trim().length < 2) {
    return 'Indtast en gyldig by.';
  }

  if (!payload.serviceType) {
    return 'Vælg en type rengøring.';
  }

  // String length limits
  if (payload.name.length > 100) {
    return 'Navn må maksimalt være 100 tegn.';
  }

  if (payload.email.length > 100) {
    return 'Email må maksimalt være 100 tegn.';
  }

  if (payload.description && payload.description.length > 1000) {
    return 'Beskrivelse må maksimalt være 1000 tegn.';
  }

  return null;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone: string): boolean {
  // Basic phone validation - allows Danish formats
  const phoneRegex = /^[\d\s\+\-\(\)]{8,20}$/;
  return phoneRegex.test(phone);
}

function sanitizePayload(payload: QuoteFormData): QuoteFormData {
  return {
    ...payload,
    name: sanitizeString(payload.name),
    phone: sanitizeString(payload.phone),
    email: sanitizeString(payload.email).toLowerCase(),
    address: sanitizeString(payload.address),
    postalCode: sanitizeString(payload.postalCode),
    city: sanitizeString(payload.city),
    serviceType: sanitizeString(payload.serviceType),
    squareMeters: payload.squareMeters ? sanitizeString(payload.squareMeters) : '',
    frequency: payload.frequency ? sanitizeString(payload.frequency) : '',
    desiredDateOrWindow: payload.desiredDateOrWindow ? sanitizeString(payload.desiredDateOrWindow) : '',
    description: payload.description ? sanitizeString(payload.description) : '',
    sourcePage: payload.sourcePage ? sanitizeString(payload.sourcePage) : '',
    submittedAt: payload.submittedAt,
  };
}

function sanitizeString(str: string): string {
  // Remove potentially dangerous characters
  return str
    .replace(/[<>]/g, '')
    .trim();
}

export interface Env {
  RESEND_API_KEY?: string;
  QUOTE_DESTINATION_EMAIL?: string;
  FROM_EMAIL?: string;
}

export interface QuoteData {
  name?: string;
  phone?: string;
  email?: string;
  type?: string;
  address?: string;
  city?: string;
  size?: string;
  frequency?: string;
  date?: string;
  description?: string;
  [key: string]: unknown;
}

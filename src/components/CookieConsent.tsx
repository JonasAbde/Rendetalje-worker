import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CONSENT_KEY = 'cookie-consent';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50 bg-white rounded-xl shadow-2xl border border-gray-200 p-6">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-gray-900">Cookie-indstillinger</h3>
        <button
          onClick={declineCookies}
          className="text-gray-400 hover:text-gray-600"
          aria-label="Luk"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Vi bruger cookies til at forbedre din oplevelse på vores hjemmeside. 
        Læs mere i vores{' '}
        <a href="/cookiepolitik" className="text-brand hover:underline">
          cookiepolitik
        </a>
        .
      </p>
      <div className="flex gap-3">
        <button
          onClick={declineCookies}
          className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Afvis
        </button>
        <button
          onClick={acceptCookies}
          className="flex-1 px-4 py-2 text-sm font-medium text-white bg-brand rounded-lg hover:bg-brand-dark transition-colors"
        >
          Accepter
        </button>
      </div>
    </div>
  );
}

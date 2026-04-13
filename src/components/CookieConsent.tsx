import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Cookie, Shield, Settings } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const CONSENT_KEY = 'rendetalje_cookie_consent';

const defaultPreferences: CookiePreferences = {
  necessary: true, // Always required
  functional: false,
  analytics: false,
  marketing: false,
  timestamp: new Date().toISOString(),
};

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    // Check if user has already given consent
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      setIsVisible(true);
    } else {
      setPreferences(JSON.parse(stored));
    }
  }, []);

  const saveConsent = (newPreferences: CookiePreferences) => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(newPreferences));
    setPreferences(newPreferences);
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    });
  };

  const handleAcceptSelected = () => {
    saveConsent({
      ...preferences,
      timestamp: new Date().toISOString(),
    });
  };

  const handleRejectAll = () => {
    saveConsent({
      necessary: true, // Always required
      functional: false,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    });
  };

  const handleWithdrawConsent = () => {
    localStorage.removeItem(CONSENT_KEY);
    setIsVisible(true);
  };

  const togglePreference = (key: keyof Omit<CookiePreferences, 'timestamp'>) => {
    if (key === 'necessary') return; // Cannot toggle necessary
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isVisible) {
    // Show a small floating button to allow changing consent
    return (
      <button
        onClick={handleWithdrawConsent}
        className="fixed bottom-4 left-4 z-40 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
        title="Administrer cookies"
        aria-label="Administrer cookies"
      >
        <Cookie className="w-5 h-5 text-slate-600" />
      </button>
    );
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-2xl"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Cookie className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold text-slate-900">Vi bruger cookies</h3>
                </div>
                <p className="text-slate-600 text-sm mb-2">
                  Vi bruger cookies for at forbedre din oplevelse, analysere trafik og vise relevant indhold. 
                  Du kan til enhver tid ændre dine præferencer ved at klikke på cookie-ikonet nederst til venstre.
                </p>
                <a 
                  href="/cookiepolitik" 
                  className="text-green-600 text-sm hover:underline inline-flex items-center gap-1"
                >
                  Læs vores cookiepolitik
                </a>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Luk cookie banner"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            {/* Cookie Categories */}
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-slate-400" />
                  <div>
                    <p className="font-medium text-slate-900">Nødvendige cookies</p>
                    <p className="text-xs text-slate-500">Kræves for at hjemmesiden fungerer</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    className="w-4 h-4 text-green-600 rounded border-slate-300 cursor-not-allowed"
                  />
                  <span className="text-xs text-slate-400">Påkrævet</span>
                </div>
              </div>

              {showDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <div>
                      <p className="font-medium text-slate-900">Funktionelle cookies</p>
                      <p className="text-xs text-slate-500">Gemmer dine præferencer og indstillinger</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={() => togglePreference('functional')}
                      className="w-4 h-4 text-green-600 rounded border-slate-300 focus:ring-green-500"
                    />
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <div>
                      <p className="font-medium text-slate-900">Analytics cookies</p>
                      <p className="text-xs text-slate-500">Hjælper os med at forbedre hjemmesiden</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={() => togglePreference('analytics')}
                      className="w-4 h-4 text-green-600 rounded border-slate-300 focus:ring-green-500"
                    />
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <div>
                      <p className="font-medium text-slate-900">Marketing cookies</p>
                      <p className="text-xs text-slate-500">Bruges til målrettet markedsføring</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={() => togglePreference('marketing')}
                      className="w-4 h-4 text-green-600 rounded border-slate-300 focus:ring-green-500"
                    />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Accepter alle
              </button>
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 bg-white text-slate-700 border border-slate-300 rounded-lg font-medium hover:bg-slate-50 transition-colors"
              >
                Afvis alle
              </button>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="px-4 py-2 text-slate-600 hover:text-slate-900 transition-colors inline-flex items-center gap-2"
              >
                <Settings className="w-4 h-4" />
                {showDetails ? 'Skjul indstillinger' : 'Indstillinger'}
              </button>
              {showDetails && (
                <button
                  onClick={handleAcceptSelected}
                  className="px-4 py-2 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-900 transition-colors"
                >
                  Gem valg
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Hook to check if analytics/marketing cookies are allowed
export function useCookieConsent() {
  const [consent, setConsent] = useState<CookiePreferences | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored) {
      setConsent(JSON.parse(stored));
    }
  }, []);

  const hasConsent = (type: keyof Omit<CookiePreferences, 'timestamp'>) => {
    return consent?.[type] ?? false;
  };

  return { consent, hasConsent };
}

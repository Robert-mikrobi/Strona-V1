import { useState, useEffect } from 'react';
import { Cookie, ShieldCheck, Settings, ChevronDown, ChevronUp, Check, X } from 'lucide-react';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  functional: boolean;
}

interface CookieBannerProps {
  onOpenPrivacyPolicy: () => void;
  forceOpen?: boolean;
  onCloseForceOpen?: () => void;
}

const STORAGE_KEY = 'sige_cookie_consent_v1';

export default function CookieBanner({
  onOpenPrivacyPolicy,
  forceOpen = false,
  onCloseForceOpen,
}: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: true,
    functional: true,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem(STORAGE_KEY);
    if (!savedConsent) {
      // Small delay for smooth arrival
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 700);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(savedConsent);
        setPreferences(parsed);
      } catch {
        // ignore fallback
      }
    }
  }, []);

  useEffect(() => {
    if (forceOpen) {
      setIsVisible(true);
      setShowCustomizer(true);
    }
  }, [forceOpen]);

  const handleSaveConsent = (customPrefs: CookiePreferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customPrefs));
    setPreferences(customPrefs);
    setIsVisible(false);
    setShowCustomizer(false);
    if (onCloseForceOpen) {
      onCloseForceOpen();
    }
  };

  const handleAcceptAll = () => {
    handleSaveConsent({
      essential: true,
      analytics: true,
      functional: true,
    });
  };

  const handleAcceptEssentialOnly = () => {
    handleSaveConsent({
      essential: true,
      analytics: false,
      functional: false,
    });
  };

  if (!isVisible) return null;

  return (
    <aside
      id="cookie-consent-banner"
      aria-label="Zgoda na pliki cookies"
      className="fixed bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xl z-50 animate-fade-in"
    >
      <div className="bg-slate-900/95 border border-slate-700/80 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl shadow-black/60 text-slate-200">
        
        {/* Top Header */}
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-700/80 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
            <Cookie className="w-5 h-5" />
          </div>

          <div className="space-y-1 flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white font-['Space_Grotesk'] flex items-center gap-1.5">
                <span>Pliki Cookies & Prywatność</span>
                <span className="text-[10px] uppercase font-bold px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                  RODO
                </span>
              </h3>

              {forceOpen && onCloseForceOpen && (
                <button
                  type="button"
                  onClick={onCloseForceOpen}
                  className="text-slate-400 hover:text-white p-1 rounded"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Nasza strona wykorzystuje pliki cookies w celu zapewnienia prawidłowego działania konfiguratora teletechnicznego oraz analizy ruchu. Szanujemy Twoją prywatność zgodnie z art. 173 Prawa Telekomunikacyjnego i RODO.
            </p>
          </div>
        </div>

        {/* Customization Details (Toggled) */}
        {showCustomizer && (
          <div className="mt-4 pt-3 border-t border-slate-800 space-y-2.5 text-xs">
            
            {/* Essential */}
            <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between gap-3">
              <div>
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <span>Ciasteczka Niezbędne (Techniczne)</span>
                  <span className="text-[9px] bg-slate-800 text-slate-300 px-1.5 py-0.2 rounded">Wymagane</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Gwarantują bezpieczeństwo sesji, rendering komponentów i zapamiętanie zgody.
                </div>
              </div>
              <input
                type="checkbox"
                checked={true}
                disabled
                className="w-4 h-4 rounded text-cyan-600 bg-slate-800 border-slate-700 cursor-not-allowed opacity-80"
              />
            </div>

            {/* Analytics */}
            <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between gap-3">
              <div>
                <div className="font-semibold text-white">Ciasteczka Analityczne</div>
                <div className="text-[11px] text-slate-400">
                  Pomagają mierzyć wydajność i szybkość ładowania elementów strony.
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences((prev) => ({ ...prev, analytics: e.target.checked }))
                  }
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-600"></div>
              </label>
            </div>

            {/* Functional */}
            <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between gap-3">
              <div>
                <div className="font-semibold text-white">Ciasteczka Funkcjonalne</div>
                <div className="text-[11px] text-slate-400">
                  Zapamiętują wybrane parametry w kalkulatorze hotelowym.
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.functional}
                  onChange={(e) =>
                    setPreferences((prev) => ({ ...prev, functional: e.target.checked }))
                  }
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-600"></div>
              </label>
            </div>

          </div>
        )}

        {/* Action Buttons & Links */}
        <div className="mt-4 pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 text-xs">
          
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenPrivacyPolicy}
              className="text-cyan-400 hover:underline text-[11px] text-left"
            >
              Polityka Prywatności i Cookies
            </button>

            <button
              type="button"
              onClick={() => setShowCustomizer(!showCustomizer)}
              className="text-slate-400 hover:text-slate-200 text-[11px] inline-flex items-center gap-1"
            >
              <Settings className="w-3 h-3" />
              <span>{showCustomizer ? 'Zwiń opcje' : 'Dostosuj'}</span>
              {showCustomizer ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          </div>

          <div className="flex items-center gap-2">
            {showCustomizer ? (
              <button
                type="button"
                onClick={() => handleSaveConsent(preferences)}
                className="w-full sm:w-auto px-3.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold shadow-md transition-colors"
              >
                Zapisz wybrane
              </button>
            ) : (
              <button
                type="button"
                onClick={handleAcceptEssentialOnly}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition-colors"
              >
                Tylko niezbędne
              </button>
            )}

            <button
              type="button"
              onClick={handleAcceptAll}
              className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold shadow-md shadow-cyan-600/20 transition-all"
            >
              Akceptuj wszystkie
            </button>
          </div>

        </div>

      </div>
    </aside>
  );
}

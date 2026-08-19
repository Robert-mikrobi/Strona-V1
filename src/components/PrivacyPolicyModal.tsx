import { useEffect } from 'react';
import { X, Shield, Lock, FileText, CheckCircle2, Mail, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCookieSettings?: () => void;
}

export default function PrivacyPolicyModal({
  isOpen,
  onClose,
  onOpenCookieSettings,
}: PrivacyPolicyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="privacy-policy-modal"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div className="bg-slate-900 border border-slate-800 w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-800 text-cyan-400 flex items-center justify-center">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <h2 id="privacy-modal-title" className="text-base sm:text-lg font-bold text-white font-['Space_Grotesk']">
                Polityka Prywatności i Plików Cookies
              </h2>
              <p className="text-[11px] text-slate-400">
                Zgodna z RODO / GDPR oraz Ustawą Prawo Telekomunikacyjne
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Zamknij okno"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="px-6 py-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed custom-scrollbar">
          
          {/* Section 1: Administrator */}
          <div className="space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-cyan-900/60 text-cyan-400 text-xs flex items-center justify-center font-mono">1</span>
              Administrator Danych Osobowych
            </h3>
            <p className="text-slate-300 pl-7">
              Administratorem Twoich danych osobowych jest <strong>{COMPANY_INFO.name}</strong>, prowadzący działalność gospodarczą pod marką <strong>{COMPANY_INFO.brandName}</strong>. 
              W sprawach związanych z przetwarzaniem danych osobowych możesz skontaktować się bezpośrednio pod adresem e-mail:{' '}
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-cyan-400 hover:underline font-semibold">
                {COMPANY_INFO.email}
              </a>.
            </p>
          </div>

          {/* Section 2: Cel i podstawa przetwarzania */}
          <div className="space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-cyan-900/60 text-cyan-400 text-xs flex items-center justify-center font-mono">2</span>
              Cele i Podstawa Prawna Przetwarzania
            </h3>
            <div className="pl-7 space-y-2">
              <p>Dane osobowe zbierane za pośrednictwem strony (np. formularza kontaktowego lub bezpośredniego kontaktu mailowego/telefonicznego) przetwarzane są w celu:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-400">
                <li>
                  <strong>Odpowiedzi na zapytanie ofertowe lub techniczne</strong> — na podstawie art. 6 ust. 1 lit. b RODO (podjęcie działań przed zawarciem umowy na żądanie osoby, której dane dotyczą) lub art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes Administratora polegający na obsłudze korespondencji B2B).
                </li>
                <li>
                  <strong>Realizacji projektów, wdrożeń i umów serwisowych (SLA)</strong> — art. 6 ust. 1 lit. b RODO.
                </li>
                <li>
                  <strong>Wypełnienia obowiązków prawnych (księgowość, podatki)</strong> — art. 6 ust. 1 lit. c RODO.
                </li>
                <li>
                  <strong>Zapewnienia bezpieczeństwa i stabilności strony</strong> — art. 6 ust. 1 lit. f RODO.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3: Prawa użytkownika */}
          <div className="space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-cyan-900/60 text-cyan-400 text-xs flex items-center justify-center font-mono">3</span>
              Prawa Osoby, Której Dane Dotyczą
            </h3>
            <div className="pl-7 space-y-2">
              <p>Zgodnie z RODO przysługuje Ci prawo do:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Dostępu do swoich danych oraz otrzymania ich kopii</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Sprostowania (poprawiania) nieprawidłowych danych</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Usunięcia danych ("prawo do bycia zapomnianym")</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Ograniczenia przetwarzania lub wniesienia sprzeciwu</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 pt-1">
                Masz również prawo do wniesienia skargi do organu nadzorczego: <strong>Prezesa Urzędu Ochrony Danych Osobowych (UODO)</strong>, ul. Stawki 2, 00-193 Warszawa.
              </p>
            </div>
          </div>

          {/* Section 4: Polityka Cookies */}
          <div className="space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-cyan-900/60 text-cyan-400 text-xs flex items-center justify-center font-mono">4</span>
              Pliki Cookies (Ciasteczka)
            </h3>
            <div className="pl-7 space-y-2">
              <p>
                Serwis internetowy marki <strong>SIGE</strong> wykorzystuje pliki cookies (niewielkie pliki tekstowe zapisywane w pamięci Twojego urządzenia) w celu:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-400">
                <li><strong>Niezbędne (Techniczne)</strong>: umożliwiające poprawne wyświetlanie interfejsu, bezpieczeństwo sesji oraz zapis Twoich preferencji dotyczących zgody na ciasteczka. Te pliki nie wymagają zgody.</li>
                <li><strong>Analityczne / Wydajnościowe (opcjonalne)</strong>: pomagające zrozumieć, w jaki sposób użytkownicy korzystają ze strony, co pozwala na optymalizację szybkości i wygody obsługi.</li>
                <li><strong>Funkcjonalne (opcjonalne)</strong>: ułatwiające zapamiętanie wybranych ustawień konfiguratora teletechnicznego.</li>
              </ul>
              {onOpenCookieSettings && (
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenCookieSettings();
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <span>Zmień swoje ustawienia plików cookies</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Section 5: Bezpieczeństwo i Poufność */}
          <div className="space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-cyan-900/60 text-cyan-400 text-xs flex items-center justify-center font-mono">5</span>
              Poufność Danych Technicznych i Bezpieczeństwo (NDA)
            </h3>
            <p className="text-slate-300 pl-7">
              Wszelkie dane dotyczące architektury sieci hotelowej, schematów stacji czołowych, planów budowlanych i parametrów obiektów powierzane podczas konsultacji są traktowane jako <strong>tajemnica przedsiębiorstwa</strong> i chronione przed dostępem osób trzecich. Na życzenie inwestora podpisujemy umowę o zachowaniu poufności (NDA) przed przystąpieniem do audytu.
            </p>
          </div>

          {/* Section 6: Okres przechowywania */}
          <div className="space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-cyan-900/60 text-cyan-400 text-xs flex items-center justify-center font-mono">6</span>
              Okres Przechowywania Danych
            </h3>
            <p className="text-slate-300 pl-7">
              Dane z formularza kontaktowego przechowywane są przez okres niezbędny do udzielenia odpowiedzi, przygotowania oferty lub przez czas trwania negocjacji handlowych, a po nawiązaniu współpracy — przez czas wymagany przepisami prawa podatkowego lub do przedawnienia roszczeń.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between shrink-0">
          <div className="text-[11px] text-slate-500">
            Ostatnia aktualizacja: Sierpień 2026 r.
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow-md transition-colors cursor-pointer"
          >
            Rozumiem i zamykam
          </button>
        </div>
      </div>
    </div>
  );
}

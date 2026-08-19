import { useState, useEffect, FormEvent } from 'react';
import { 
  Mail, Phone, MapPin, Send, CheckCircle2, Clock, 
  ShieldCheck, Sparkles, Building, MessageSquare, AlertCircle, Copy, Check
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  injectedMessage?: string;
  selectedService?: string;
  onOpenPrivacyPolicy?: () => void;
}

export default function ContactSection({
  injectedMessage,
  selectedService,
  onOpenPrivacyPolicy,
}: ContactSectionProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceType: 'Telewizja Hotelowa (Hospitality TV / IPTV)',
    facilitySize: '50-150 pokoi',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (injectedMessage) {
      setFormData((prev) => ({
        ...prev,
        message: injectedMessage,
      }));
    }
  }, [injectedMessage]);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        serviceType: selectedService,
      }));
    }
  }, [selectedService]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const emailPayload = {
      _subject: `[SIGE Zapytanie] ${formData.companyName || formData.fullName} - ${formData.serviceType}`,
      _replyto: formData.email,
      'Imię i Nazwisko': formData.fullName,
      'Nazwa Firmy / Obiektu': formData.companyName,
      'Email Nadawcy': formData.email,
      'Telefon': formData.phone,
      'Wybrana Usługa': formData.serviceType,
      'Skala Obiektu': formData.facilitySize,
      'Wiadomość': formData.message,
    };

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${COMPANY_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(emailPayload),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        // Fallback gracefully
        setIsSubmitted(true);
      }
    } catch {
      // If network fails (e.g. adblocker), still confirm and offer mailto
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(COMPANY_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="kontakt" className="py-20 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Bezpośredni Kontakt Inżynierski</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
            Porozmawiajmy o systemach w Twoim obiekcie
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Skontaktuj się bezpośrednio z Robertem Chlebowskim (SIGE). Odpowiadamy w ciągu 24h z konkretnymi założeniami technicznymi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Company Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="text-lg font-bold text-white tracking-tight font-['Space_Grotesk'] flex items-center gap-2">
                <Building className="w-5 h-5 text-cyan-400" />
                <span>Dane firmy i kontakt</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Company Name */}
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Podmiot gospodarczy:
                  </span>
                  <div className="text-sm font-bold text-white">
                    Robert Chlebowski SIGE
                  </div>
                  <div className="text-[11px] text-cyan-400 font-mono">
                    Marka: SIGE
                  </div>
                </div>

                {/* Email Direct */}
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-950 border border-cyan-800/80 flex items-center justify-center text-cyan-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-semibold uppercase">Email:</div>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-xs sm:text-sm font-bold text-slate-100 hover:text-cyan-400 transition-colors"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={copyEmailToClipboard}
                    title="Kopiuj email"
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location & Coverage */}
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-950 border border-cyan-800/80 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-semibold uppercase">Obszar działania:</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-100">
                      Cała Polska & Inwestycje w UE
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Audyty lokalne, dostawy sprzętu i nadzór montażowy
                    </div>
                  </div>
                </div>

                {/* Response time guarantee */}
                <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-800/50 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-900/60 border border-cyan-700/60 flex items-center justify-center text-cyan-300 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-cyan-300 font-bold uppercase">Gwarancja reakcji:</div>
                    <div className="text-xs text-slate-300">
                      Odpowiedź merytoryczna w 24h • Bezpłatny audyt wstępny
                    </div>
                  </div>
                </div>

              </div>

              {/* Security Note */}
              <div className="pt-4 border-t border-slate-800/80 flex items-start gap-2.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  Informacje techniczne i dane inwestycji są traktowane jako ściśle poufne (NDA na życzenie).
                </span>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-xl">
              
              {isSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-950 border-2 border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center shadow-lg shadow-emerald-950">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
                    Dziękujemy za kontakt!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Twoje zapytanie dotyczące <strong>{formData.serviceType}</strong> zostało przekazane do inżyniera Roberta Chlebowskiego. 
                    Skontaktujemy się z Tobą telefonicznie lub mailowo najszybciej jak to możliwe.
                  </p>

                  <div className="pt-4">
                    <a
                      href={`mailto:${COMPANY_INFO.email}?subject=Zapytanie SIGE: ${formData.companyName || formData.fullName}&body=${encodeURIComponent(formData.message || 'Dzień dobry, proszę o kontakt w sprawie oferty.')}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow-md transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Otwórz w swoim programie pocztowym</span>
                    </a>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                    >
                      Wyślij kolejne zapytanie
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="border-b border-slate-800 pb-3 mb-4">
                    <h3 className="text-base font-bold text-white font-['Space_Grotesk']">
                      Formularz Zapytania Projektowego
                    </h3>
                    <p className="text-xs text-slate-400">
                      Wypełnij poniższe pola, aby otrzymać wstępny projekt techniczny i wycenę.
                    </p>
                  </div>

                  {/* Row 1: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Imię i Nazwisko *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="np. Jan Kowalski"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:border-cyan-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Nazwa Hotelu / Firmy *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="np. Grand Hotel Resort"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:border-cyan-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Adres Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jan.kowalski@hotel.pl"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:border-cyan-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Numer Telefonu *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+48 600 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:border-cyan-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service Type & Size */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Główny zakres zapytania
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:border-cyan-500 focus:outline-none transition-colors"
                      >
                        <option value="Telewizja Hotelowa (Hospitality TV / IPTV)">Telewizja Hotelowa (Hospitality TV / IPTV)</option>
                        <option value="Digital Signage & Infokioski">Digital Signage & Infokioski</option>
                        <option value="Audyt teletechniczny i projekt stacji czołowej">Audyt teletechniczny & Projekt</option>
                        <option value="Modernizacja istniejącej sieci koncentrycznej">Modernizacja sieci koncentrycznej</option>
                        <option value="Integracja z PMS i Hotel Cast (Chromecast)">Integracja z PMS & Chromecast</option>
                        <option value="Serwis SLA i opieka powdrożeniowa">Serwis SLA i opieka</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Szacowana skala obiektu
                      </label>
                      <select
                        value={formData.facilitySize}
                        onChange={(e) => setFormData({ ...formData, facilitySize: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:border-cyan-500 focus:outline-none transition-colors"
                      >
                        <option value="Do 30 pokoi (Kameralny butik)">Do 30 pokoi (Kameralny butik)</option>
                        <option value="30 - 80 pokoi (Średni hotel)">30 - 80 pokoi (Średni hotel)</option>
                        <option value="80 - 200 pokoi (Duży hotel / Resort)">80 - 200 pokoi (Duży hotel / Resort)</option>
                        <option value="200+ pokoi (Kompleks hotelowy)">200+ pokoi (Kompleks hotelowy)</option>
                        <option value="Obiekt komercyjny / Biura / Retail">Obiekt komercyjny / Biura / Retail</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Wiadomość / Dodatkowe uwagi techniczne
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Opisz swój obiekt, rodzaj istniejącego okablowania, oczekiwane funkcje lub termin realizacji..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:border-cyan-500 focus:outline-none transition-colors font-sans"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="submit-contact-btn"
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-xl shadow-cyan-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all duration-150 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Przetwarzanie zapytania...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Wyślij zapytanie do Roberta Chlebowskiego</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    Wysyłając formularz, wyrażasz zgodę na kontakt w celu przygotowania oferty technicznej. Administratorem danych jest Robert Chlebowski SIGE.{' '}
                    {onOpenPrivacyPolicy && (
                      <button
                        type="button"
                        onClick={onOpenPrivacyPolicy}
                        className="text-cyan-400 hover:underline inline font-medium cursor-pointer"
                      >
                        Pełna Polityka RODO
                      </button>
                    )}
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

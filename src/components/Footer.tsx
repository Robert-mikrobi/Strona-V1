import { Mail, Shield, ChevronUp, ArrowUp, Lock, Cookie } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import Logo from './Logo';

interface FooterProps {
  onOpenPrivacyPolicy?: () => void;
  onOpenCookieSettings?: () => void;
}

export default function Footer({ onOpenPrivacyPolicy, onOpenCookieSettings }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <Logo size="lg" />
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              <strong>Robert Chlebowski SIGE</strong> — Profesjonalne projektowanie i wdrożenia systemów telewizji hotelowej (Hospitality TV / IPTV) oraz rozwiązań Digital Signage dla sektora hotelarskiego i biznesu.
            </p>
            <div className="text-[11px] text-slate-400">
              Niezależny integrator technologii: Samsung, LG, Philips, Teleste, TRIAX, BrightSign.
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Nawigacja
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#o-nas" className="hover:text-cyan-400 transition-colors">O firmie SIGE</a></li>
              <li><a href="#uslugi" className="hover:text-cyan-400 transition-colors">Telewizja Hotelowa (IPTV)</a></li>
              <li><a href="#digital-signage" className="hover:text-cyan-400 transition-colors">Digital Signage & Ekrany</a></li>
              <li><a href="#kalkulator" className="hover:text-cyan-400 transition-colors">Kalkulator Założeń</a></li>
              <li><a href="#technologie" className="hover:text-cyan-400 transition-colors">Obsługiwane Technologie</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">Częste Pytania (FAQ)</a></li>
              <li><a href="#kontakt" className="hover:text-cyan-400 transition-colors">Kontakt i Wycena</a></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Kontakt & RODO
            </h4>
            <div className="space-y-1 text-xs text-slate-400">
              <p className="font-semibold text-slate-200">Robert Chlebowski</p>
              <p>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-cyan-400 hover:underline">
                  {COMPANY_INFO.email}
                </a>
              </p>
              <p className="pt-2 text-[11px] text-slate-400">
                Godziny pracy: Pon - Pt: 8:00 - 18:00
              </p>
              <div className="pt-2 flex flex-col gap-1 text-[11px]">
                {onOpenPrivacyPolicy && (
                  <button
                    type="button"
                    onClick={onOpenPrivacyPolicy}
                    className="text-left text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    Polityka Prywatności i RODO
                  </button>
                )}
                {onOpenCookieSettings && (
                  <button
                    type="button"
                    onClick={onOpenCookieSettings}
                    className="text-left text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    Ustawienia plików cookies
                  </button>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© {new Date().getFullYear()} Robert Chlebowski SIGE. Wszelkie prawa zastrzeżone.</span>
            {onOpenPrivacyPolicy && (
              <button
                type="button"
                onClick={onOpenPrivacyPolicy}
                className="hover:text-cyan-400 underline underline-offset-2 transition-colors cursor-pointer"
              >
                Prywatność i Cookies
              </button>
            )}
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Projektowanie Systemów Multimedialnych</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              <span>Do góry</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

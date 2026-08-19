import { 
  ShieldCheck, Award, Users, Cpu, Wrench, CheckCircle, 
  Sparkles, Layers, Target, Clock, Terminal, Check
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { SigeLogoIcon } from './Logo';

export default function AboutSection() {
  return (
    <section id="o-nas" className="py-20 bg-slate-950/80 relative border-t border-slate-900 overflow-hidden">
      {/* Glow ambient background */}
      <div className="absolute -left-40 top-1/3 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand & Founder Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>O firmie Robert Chlebowski SIGE</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] leading-tight">
              Inżynieria systemów obrazu, telewizji hotelowej i Digital Signage
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Firma <strong>Robert Chlebowski SIGE</strong> to niezależna pracownia inżynieryjno-integratorska, 
              specjalizująca się w kompleksowym projektowaniu, doborze technologii, montażu i serwisie 
              specjalistycznych systemów telewizji hotelowej (Hospitality TV) oraz profesjonalnych nośników Digital Signage.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Dla hoteli telewizja to nie tylko rozrywka – to kluczowy punkt styku gościa z marką hotelu, 
              narzędzie generowania dodatkowego przychodu (Up-selling, Room Service, SPA) oraz wymóg standardów 
              sieciowych. Podobnie ekrany Digital Signage organizują ruch gości konferencyjnych, 
              prezentują dynamiczne cenniki i budują nowoczesny wizerunek obiektu.
            </p>

            {/* Core Values / Differentiators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Bezkompromisowa Stabilność</span>
                </div>
                <p className="text-xs text-slate-400">
                  Hotele pracują 24/7/365. Dobieramy wyłącznie sprzęt klasy komercyjnej z certyfikacją pracy ciągłej.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>Bezpośredni Nadzór Autorski</span>
                </div>
                <p className="text-xs text-slate-400">
                  Każdy projekt prowadzony jest bezpośrednio przez inżyniera z pełną odpowiedzialnością za efekt.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <Wrench className="w-4 h-4 text-amber-400" />
                  <span>Elastyczność Technologiczna</span>
                </div>
                <p className="text-xs text-slate-400">
                  Nie faworyzujemy jednego producenta. Dobieramy LG, Samsung, Philips lub stacje czołowe pod budżet i sieć.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>Wsparcie i Monitoring SLA</span>
                </div>
                <p className="text-xs text-slate-400">
                  Zapewniamy zdalny monitoring stacji czołowych i natychmiastową asystę w przypadku awarii sygnału.
                </p>
              </div>
            </div>

            {/* Checklist */}
            <div className="pt-2 space-y-2">
              {[
                'Pełna zgodność z protokołami PMS (Oracle Opera, Micros Fidelio, KWHotel, ProHott, Chart)',
                'Bezpieczeństwo sieciowe gości (VLAN per Room, automatyczne czyszczenie haseł streamingu)',
                'Własne zaplecze pomiarowe do analizy sygnałów RF (DVB-T2/C/S2) i sieci IP Multicast',
                'Projekty wykonawcze dla biur architektonicznych i generalnych wykonawców'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                  <div className="w-4 h-4 rounded-full bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Founder & Engineering Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl relative">
              
              <div className="absolute top-4 right-4 text-[10px] uppercase font-mono px-2 py-1 rounded bg-slate-800 text-cyan-400 border border-slate-700">
                PROJEKTANT SYSTEMÓW
              </div>

              {/* Founder Header Profile */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <SigeLogoIcon className="w-16 h-16 shadow-lg shadow-cyan-600/30" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
                    Robert Chlebowski
                  </h3>
                  <p className="text-xs text-cyan-400 font-semibold">SIGE • sige.tech</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Inżynier & Integrator Systemów Multimedialnych</p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="border-l-2 border-cyan-500 pl-4 my-4 text-xs sm:text-sm text-slate-300 italic">
                „W hotelu każda minuta braku sygnału TV lub błędnej informacji na ekranie to bezpośrednie niezadowolenie gościa. Dlatego każdy projekt traktuję z najwyższą dbałością o redundancję, ergonomię pilota i czystość sygnału.”
              </blockquote>

              {/* Credentials / Metrics */}
              <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Specjalizacja główna:</span>
                  <span className="font-semibold text-white">Hospitality IPTV & Digital Signage</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Standardy ekranów:</span>
                  <span className="font-semibold text-white">LG Pro:Centric, Samsung LYNK, Philips</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Stacje czołowe:</span>
                  <span className="font-semibold text-white">Teleste, WISI, TRIAX, Johansson</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">Zasięg projektów:</span>
                  <span className="font-semibold text-cyan-300">Polska & Inwestycje w UE</span>
                </div>
              </div>

              {/* Quick direct contact prompt */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="text-[11px] text-slate-400">
                  Bezpośredni kontakt z inżynierem:
                </div>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 hover:underline"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

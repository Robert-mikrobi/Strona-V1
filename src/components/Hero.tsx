import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Tv, PhoneCall, Cpu, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import InteractiveDevicePreview from './InteractiveDevicePreview';

interface HeroProps {
  onExploreCalculator: () => void;
  onContactClick: () => void;
}

export default function Hero({ onExploreCalculator, onContactClick }: HeroProps) {
  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-blue-600/10 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Company Badge & Category */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-4xl mx-auto mb-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-semibold shadow-lg shadow-cyan-950/50 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Robert Chlebowski • SIGE</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">15+ lat doświadczenia inżynieryjnego</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-['Space_Grotesk']">
            Projektowanie i wdrożenia systemów <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Telewizji Hotelowej & Digital Signage
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl font-normal leading-relaxed">
            Dostarczamy certyfikowane, stabilne i bezpieczne rozwiązania multimedialne dla hoteli, 
            resortów, obiektów konferencyjnych oraz przestrzeni komercyjnych. Od audytu okablowania, 
            przez stacje czołowe IPTV i casting gości, po dynamiczne ekrany reklamowe CMS.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 w-full sm:w-auto">
            <button
              onClick={onContactClick}
              id="hero-primary-cta"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-xl shadow-cyan-600/30 hover:shadow-cyan-600/50 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Umów bezpłatny audyt i wycenę</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreCalculator}
              id="hero-secondary-cta"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Kalkulator założeń technicznych</span>
            </button>
          </div>

          {/* Quick Trust Highlights */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Samsung LYNK & LG Pro:Centric</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Bezpieczny Hotel Cast (VLAN)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Integracja z Opera / Fidelio / KWHotel</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Stacje czołowe DVB-T2 / S2 / IP</span>
            </div>
          </div>
        </div>

        {/* Live Interactive Simulator */}
        <div className="mt-8">
          <InteractiveDevicePreview />
        </div>

        {/* Stats Strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
          <div className="text-center p-2">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk'] text-cyan-400">
              {COMPANY_INFO.experienceYears}+ lat
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Doświadczenia inżynieryjnego
            </div>
          </div>

          <div className="text-center p-2">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk'] text-cyan-400">
              {COMPANY_INFO.completedScreens}
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Skonfigurowanych ekranów i punktów
            </div>
          </div>

          <div className="text-center p-2">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk'] text-cyan-400">
              {COMPANY_INFO.hotelClients}
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Obsłużonych obiektów i hoteli
            </div>
          </div>

          <div className="text-center p-2">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk'] text-cyan-400">
              {COMPANY_INFO.uptimeSla}
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Niezawodności stacji czołowych
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

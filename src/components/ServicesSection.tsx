import { useState } from 'react';
import { 
  Tv, LayoutGrid, FileCheck, ShieldCheck, Check, ArrowUpRight, 
  Layers, Radio, MonitorPlay, Wifi, Lock, Zap, Server, ChevronDown, ChevronUp
} from 'lucide-react';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForInquiry: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectServiceForInquiry }: ServicesSectionProps) {
  const [expandedService, setExpandedService] = useState<string | null>('hotel-tv');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Tv':
        return <Tv className="w-6 h-6 text-cyan-400" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-6 h-6 text-cyan-400" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-cyan-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
      default:
        return <Layers className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="uslugi" className="py-20 bg-slate-950 relative border-t border-slate-900">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <span>Kompleksowa Oferta Inżynieryjna</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
            Projektowanie i wdrożenia systemów multimedialnych
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Dostarczamy kompletny łańcuch wartości: od pomiarów teletechnicznych i doboru stacji czołowych, 
            poprzez konfigurację oprogramowania IPTV i CMS, aż po autoryzowany montaż i serwis.
          </p>
        </div>

        {/* 4 Pillar Service Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {SERVICES_DATA.map((service: ServiceItem) => {
            const isExpanded = expandedService === service.id;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`rounded-2xl transition-all duration-200 border p-6 sm:p-8 flex flex-col justify-between ${
                  isExpanded
                    ? 'bg-slate-900/90 border-cyan-500/40 shadow-xl shadow-cyan-950/30 ring-1 ring-cyan-500/20'
                    : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Card Header: Icon & Tags */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-center shadow-inner">
                      {getIcon(service.iconName)}
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 justify-end">
                      {service.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300 text-[11px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Long Description (always or conditionally shown) */}
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {service.longDesc}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 border-t border-slate-800/80 pt-4 mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                      Kluczowe możliwości & komponenty:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer CTA Button */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-mono">
                    Standard branżowy: Hospitality Grade
                  </span>
                  
                  <button
                    onClick={() => onSelectServiceForInquiry(service.title)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-800/80 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <span>Zapytaj o tę usługę</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner on Cabling & Modernization */}
        <div id="digital-signage" className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/40 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider">
              <Server className="w-4 h-4" />
              <span>Modernizacja bez kucia ścian</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Posiadasz stary kabel koncentryczny w obiekcie?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Projektujemy stacje hybrydowe (DVB-T2/C + Wi-Fi Interactive), które pozwalają uruchomić 
              interaktywne funkcje hotelowe i casting bez wymiany istniejącego okablowania koncentrycznego.
            </p>
          </div>

          <button
            onClick={() => onSelectServiceForInquiry('Audyt i modernizacja istniejącej sieci koncentrycznej')}
            className="shrink-0 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold border border-slate-700 transition-colors"
          >
            Zamów bezpłatny audyt sieci
          </button>
        </div>

      </div>
    </section>
  );
}

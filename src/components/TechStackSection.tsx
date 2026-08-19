import { Cpu, Server, Radio, Shield, Laptop, Monitor, CheckCircle } from 'lucide-react';
import { TECHNOLOGIES_DATA } from '../data/content';

export default function TechStackSection() {
  return (
    <section id="technologie" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Ekosystem Sprzętowy & Oprogramowanie</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
            Obsługiwane technologie i certyfikowane standardy
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Współpracujemy z wiodącymi światowymi producentami sprzętu komercyjnego oraz twórcami oprogramowania hotelowego.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TECHNOLOGIES_DATA.map((tech, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 hover:bg-slate-900 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-cyan-400 border border-slate-700">
                    {tech.badge || 'Standard'}
                  </span>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">
                  {tech.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {tech.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>Zgodność ze standardami branżowymi</span>
              </div>
            </div>
          ))}
        </div>

        {/* PMS Integration Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-800 flex items-center justify-center shrink-0">
              <Server className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Integracje z systemami PMS</h4>
              <p className="text-xs text-slate-400">
                Oracle Opera, Micros Fidelio, KWHotel, ProHott, Chart, DM Plaza, LSI Software i protokoły FIAS.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-300">
            <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700">Oracle FIAS</span>
            <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700">KWHotel API</span>
            <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700">ProHott Sync</span>
            <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700">Fidelio PMS</span>
          </div>
        </div>

      </div>
    </section>
  );
}

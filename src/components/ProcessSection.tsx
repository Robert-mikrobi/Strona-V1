import { Search, FileText, Wrench, Settings, Headphones, ArrowRight } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      step: '01',
      title: 'Audyt & Analiza Teletechniczna',
      desc: 'Wizja lokalna, pomiary poziomów sygnałów RF/IP, weryfikacja istniejącego okablowania i analiza potrzeb obiektu.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Koncepcja & Projekt Wykonawczy',
      desc: 'Dobór stacji czołowej, specyfikacja ekranów, schemat blokowy sieci, bilans mocy i kalkulacja przepustowości VLAN.',
      icon: FileText,
    },
    {
      step: '03',
      title: 'Dostawa & Montaż Sprzętu',
      desc: 'Dostawa profesjonalnych telewizorów i nośników Signage, montaż uchwytów VESA oraz budowa szafy RACK stacji czołowej.',
      icon: Wrench,
    },
    {
      step: '04',
      title: 'Konfiguracja, Szablony & PMS',
      desc: 'Programowanie kanałów, wdrożenie brandingu graficznego Welcome Screen, konfiguracja Castingu i spięcie z PMS.',
      icon: Settings,
    },
    {
      step: '05',
      title: 'Szkolenie & Serwis SLA 24/7',
      desc: 'Instruktaż dla recepcji i działu technicznego, dokumentacja powykonawcza i objęcie obiektu dedykowanym wsparciem.',
      icon: Headphones,
    },
  ];

  return (
    <section className="py-20 bg-slate-900/40 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <span>Metodologia Realizacji</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
            Jak przebiega wdrożenie z SIGE?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Od pierwszej rozmowy technicznej po wieloletnie wsparcie – dbamy o każdy detal instalacji.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative p-5 rounded-2xl bg-slate-950/80 border border-slate-800/90 flex flex-col justify-between hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-extrabold text-cyan-400 px-2 py-1 rounded bg-slate-900 border border-slate-800">
                      Krok {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-cyan-950/50 border border-cyan-800/60 flex items-center justify-center text-cyan-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-900 text-[10px] text-slate-500 font-medium">
                  {index < steps.length - 1 ? 'Następny etap ➔' : 'Gwarancja & SLA'}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

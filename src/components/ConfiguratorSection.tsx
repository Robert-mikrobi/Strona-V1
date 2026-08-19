import { useState } from 'react';
import { 
  Calculator, Check, Sparkles, Tv, Layers, ArrowRight, ShieldCheck, 
  Cpu, Building, Server, Sliders, RefreshCw
} from 'lucide-react';

interface ConfiguratorProps {
  onApplyConfiguration: (configSummary: string) => void;
}

export default function ConfiguratorSection({ onApplyConfiguration }: ConfiguratorProps) {
  const [facilityType, setFacilityType] = useState('hotel_4_5');
  const [roomsCount, setRoomsCount] = useState(80);
  const [cablingType, setCablingType] = useState('lan_cat6');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'pms_integration',
    'guest_casting',
    'welcome_screen',
  ]);
  const [signageCount, setSignageCount] = useState(4);

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Compute recommended architecture
  const getArchitectureRecommendation = () => {
    let headendType = '';
    let tvSoftware = '';
    let estimatedLeadTime = '';

    if (cablingType === 'lan_cat6' || cablingType === 'fiber') {
      headendType = 'Stacja Czołowa IPTV Multicast (IGMP Snooping) z bramką DVB-T2/S2 do IP';
      tvSoftware = 'Smart Hospitality IP (LG Pro:Centric Direct lub Samsung LYNK Cloud)';
    } else if (cablingType === 'coax') {
      headendType = 'Stacja czołowa DVB-C/DVB-T2 z transmodulacją satelitarną + sieć hybrydowa Wi-Fi';
      tvSoftware = 'Hospitality DVB + kanał informacyjny generowany ze stacji';
    } else {
      headendType = 'Hybrydowa stacja czołowa IP/RF z redundancją zasilaczy';
      tvSoftware = 'Centralne zarządzanie CMS ze stacji';
    }

    if (roomsCount <= 40) {
      estimatedLeadTime = '2-3 tygodnie od zatwierdzenia projektu';
    } else if (roomsCount <= 150) {
      estimatedLeadTime = '3-5 tygodni z etapowaniem montażu';
    } else {
      estimatedLeadTime = 'Indywidualny harmonogram inwestycji';
    }

    return {
      headendType,
      tvSoftware,
      estimatedLeadTime,
      totalScreens: roomsCount + signageCount,
    };
  };

  const arch = getArchitectureRecommendation();

  const handleSendToInquiry = () => {
    const summary = `[ZAPYTANIE Z KONFIGURATORA SIGE.TECH]
• Obiekt: ${facilityType}
• Liczba pokoi/punktów TV: ${roomsCount}
• Liczba ekranów Signage: ${signageCount}
• Istniejące okablowanie: ${cablingType}
• Wybrane moduły: ${selectedFeatures.join(', ')}
• Rekomendowana architektura: ${arch.headendType} | Oprogramowanie: ${arch.tvSoftware}`;

    onApplyConfiguration(summary);
  };

  return (
    <section id="kalkulator" className="py-20 bg-slate-900/60 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interaktywny Konfigurator Systemu</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
            Dobierz architekturę dla Twojego obiektu
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Wybierz parametry obiektu, aby natychmiast otrzymać rekomendację techniczną stacji czołowej i oprogramowania.
          </p>
        </div>

        {/* Two Columns: Configurator Inputs & Live Output Spec Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Left Column */}
          <div className="lg:col-span-7 bg-slate-950/90 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
            
            {/* Step 1: Facility Type */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                1. Typ obiektu / profil działalności:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'hotel_4_5', label: 'Hotel 4★ / 5★' },
                  { id: 'hotel_butik', label: 'Hotel Butikowy' },
                  { id: 'aparthotel', label: 'Aparthotel / Pokoje' },
                  { id: 'resort_spa', label: 'Resort & SPA / Sanatorium' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFacilityType(item.label)}
                    className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                      facilityType === item.label
                        ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300 shadow-md shadow-cyan-950'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Rooms Count Slider */}
            <div className="space-y-3 border-t border-slate-800/80 pt-5">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  2. Liczba pokoi / punktów telewizyjnych:
                </label>
                <span className="text-sm font-extrabold text-cyan-400 font-mono px-3 py-1 bg-slate-900 rounded-lg border border-slate-800">
                  {roomsCount} pokoi
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={350}
                step={5}
                value={roomsCount}
                onChange={(e) => setRoomsCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>10 (Butik)</span>
                <span>100 (Średni hotel)</span>
                <span>350+ (Resort)</span>
              </div>
            </div>

            {/* Step 3: Cabling Infrastructure */}
            <div className="space-y-3 border-t border-slate-800/80 pt-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                3. Istniejące okablowanie w obiekcie:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'lan_cat6', title: 'Skrętka Ethernet (kat. 5e/6/6A)', desc: 'Pełne IPTV Multicast' },
                  { id: 'coax', title: 'Kabel koncentryczny (RG-6)', desc: 'DVB-T2/C + Wi-Fi Interactive' },
                  { id: 'fiber', title: 'Światłowód (GPON / FTTH)', desc: 'Sieć wielousługowa 10Gb' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCablingType(item.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      cablingType === item.id
                        ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300 shadow-md'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-100">{item.title}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Digital Signage Screens Slider */}
            <div className="space-y-3 border-t border-slate-800/80 pt-5">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  4. Ekrany Digital Signage (Lobby, Sale, Restauracja):
                </label>
                <span className="text-sm font-extrabold text-cyan-400 font-mono px-3 py-1 bg-slate-900 rounded-lg border border-slate-800">
                  {signageCount} ekranów
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={30}
                step={1}
                value={signageCount}
                onChange={(e) => setSignageCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
            </div>

            {/* Step 5: Required Features */}
            <div className="space-y-3 border-t border-slate-800/80 pt-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                5. Pożądane moduły i integracje:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { id: 'welcome_screen', label: 'Welcome Screen z nazwiskiem gościa' },
                  { id: 'guest_casting', label: 'Hotel Cast (Chromecast / AirPlay VLAN)' },
                  { id: 'pms_integration', label: 'Integracja z PMS (Opera, Fidelio, KWHotel)' },
                  { id: 'spa_ordering', label: 'Room Service & rezerwacja SPA przez TV' },
                  { id: 'conf_doors', label: 'Panele drzwiowe sal konferencyjnych' },
                  { id: 'sla_support', label: 'Zdalny monitoring i serwis SLA 24/7' },
                ].map((feat) => {
                  const active = selectedFeatures.includes(feat.id);
                  return (
                    <div
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-2.5 rounded-lg border flex items-center gap-2.5 cursor-pointer text-xs transition-all ${
                        active
                          ? 'bg-slate-900 border-cyan-500/70 text-slate-100'
                          : 'bg-slate-950 border-slate-800/80 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center border ${
                          active
                            ? 'bg-cyan-600 border-cyan-500 text-white'
                            : 'border-slate-700 bg-slate-900'
                        }`}
                      >
                        {active && <Check className="w-3 h-3" />}
                      </div>
                      <span>{feat.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Engineering Blueprint & Specs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-cyan-500/40 p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
                  <Cpu className="w-4 h-4" />
                  <span>Rekomendacja Inżynierska</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">SIGE-SPEC v2.4</span>
              </div>

              {/* Total points summary */}
              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">Łączna liczba punktów:</div>
                  <div className="text-2xl font-extrabold text-white font-['Space_Grotesk']">
                    {arch.totalScreens} ekranów
                  </div>
                </div>
                <div className="text-right text-xs text-slate-400">
                  <div>Pokoje: <span className="text-cyan-400 font-bold">{roomsCount}</span></div>
                  <div>Signage: <span className="text-cyan-400 font-bold">{signageCount}</span></div>
                </div>
              </div>

              {/* Blueprint details */}
              <div className="space-y-3 text-xs">
                <div className="space-y-1">
                  <div className="text-slate-400 font-medium">Sugerowana Stacja Czołowa:</div>
                  <div className="font-semibold text-slate-200 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                    {arch.headendType}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-slate-400 font-medium">Oprogramowanie Hospitality / CMS:</div>
                  <div className="font-semibold text-cyan-300 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                    {arch.tvSoftware}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-slate-400 font-medium">Szacowany czas realizacji:</div>
                  <div className="font-semibold text-slate-200 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                    {arch.estimatedLeadTime}
                  </div>
                </div>
              </div>

              {/* Selected modules count */}
              <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-800/60 flex items-center gap-2 text-xs text-cyan-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Aktywne moduły funkcjonalne: {selectedFeatures.length} pozycji</span>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleSendToInquiry}
                id="btn-apply-config"
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-xl shadow-cyan-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01]"
              >
                <span>Prześlij tę specyfikację do bezpłatnej wyceny</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-slate-400">
                Przycisk przeniesie Cię do formularza kontaktowego z automatycznie załączonymi parametrami.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

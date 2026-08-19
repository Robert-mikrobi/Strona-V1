import { useState, useEffect } from 'react';
import { 
  Tv, LayoutGrid, Wifi, Cast, Clock, Utensils, Info, Sparkles, 
  Volume2, ShieldCheck, ChevronRight, Calendar, MapPin, Coffee,
  Wine, CheckCircle, Bell, Compass, AlertCircle
} from 'lucide-react';

export default function InteractiveDevicePreview() {
  const [activeMode, setActiveMode] = useState<'hotel_tv' | 'signage'>('hotel_tv');
  const [tvTab, setTvTab] = useState<'welcome' | 'casting' | 'services' | 'channels'>('welcome');
  const [signageScreen, setSignageScreen] = useState<'lobby' | 'conference' | 'menu'>('lobby');
  const [currentTime, setCurrentTime] = useState('14:30');
  const [orderedItem, setOrderedItem] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="interactive-showcase" className="relative w-full max-w-5xl mx-auto">
      {/* Mode Selector Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="inline-flex p-1 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-lg">
          <button
            onClick={() => setActiveMode('hotel_tv')}
            id="tab-mode-hotel-tv"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeMode === 'hotel_tv'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Tv className="w-4 h-4" />
            <span>Interaktywna Telewizja Hotelowa (IPTV)</span>
          </button>

          <button
            onClick={() => setActiveMode('signage')}
            id="tab-mode-signage"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeMode === 'signage'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            <span>Ekran Digital Signage & CMS</span>
          </button>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-slate-400">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Interaktywny symulator interfejsu (kliknij elementy)</span>
        </div>
      </div>

      {/* Frame of TV / Commercial Display */}
      <div className="relative rounded-2xl bg-slate-900/90 p-2 sm:p-4 border-2 border-slate-700/80 shadow-2xl shadow-cyan-950/40 glow-cyan">
        {/* TV Top Bar with Camera/Sensor Indicator */}
        <div className="flex items-center justify-between px-3 py-1 mb-2 text-[10px] text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-700"></span>
            <span className="text-slate-400 font-semibold tracking-wider">
              {activeMode === 'hotel_tv' ? 'HOSPITALITY TV OS • ROOM 304' : 'SIGNAGE PLAYER • LOBBY ZONE A'}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-cyan-400 font-bold">sige.tech Engine</span>
            <span>4K UHD 60Hz</span>
          </div>
        </div>

        {/* Display Screen Content Area */}
        <div className="relative w-full aspect-[16/9] min-h-[340px] sm:min-h-[420px] rounded-xl overflow-hidden bg-slate-950 text-white border border-slate-800 shadow-inner flex flex-col justify-between select-none">
          
          {/* ===================== MODE 1: HOTEL TV ===================== */}
          {activeMode === 'hotel_tv' && (
            <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
              {/* Background ambient aesthetic hotel photo simulation */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500 via-blue-900 to-slate-950 pointer-events-none" />

              {/* TV Header */}
              <div className="relative z-10 flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-600/30 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold text-xs">
                    GRAND
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold tracking-tight text-slate-100">
                      GRAND HOTEL RESORT & SPA
                    </h4>
                    <p className="text-[10px] text-slate-400">Witamy w pokoju 304 (VLAN #304 isolated)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                    <Wifi className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-[11px]">Guest-WiFi: Connected</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="font-mono text-[11px]">{currentTime} | 21°C Słonecznie</span>
                  </div>
                </div>
              </div>

              {/* Dynamic View inside TV depending on tab */}
              <div className="relative z-10 my-auto py-2">
                {tvTab === 'welcome' && (
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
                      <Sparkles className="w-3 h-3" />
                      <span>Personalizowane powitanie PMS</span>
                    </div>
                    <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                      Dzień dobry, <span className="text-cyan-400">Szanowny Gościu!</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-xl line-clamp-2">
                      Życzymy wspaniałego pobytu. Zapraszamy do strefy Wellness & SPA (piętro -1) oraz do naszej restauracji a la carte.
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <button
                        onClick={() => setTvTab('casting')}
                        className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-cyan-600/30 transition-colors"
                      >
                        <Cast className="w-3.5 h-3.5" />
                        <span>Połącz telefon (Casting)</span>
                      </button>
                      <button
                        onClick={() => setTvTab('services')}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors"
                      >
                        <Utensils className="w-3.5 h-3.5 text-amber-400" />
                        <span>Zamów Room Service</span>
                      </button>
                    </div>
                  </div>
                )}

                {tvTab === 'casting' && (
                  <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl flex flex-col sm:flex-row items-center gap-4">
                    <div className="w-24 h-24 bg-white p-2 rounded-lg flex flex-col items-center justify-center shrink-0 shadow-lg">
                      <div className="w-full h-full border-2 border-slate-950 border-dashed rounded flex items-center justify-center">
                        <span className="text-[10px] text-slate-950 font-mono font-bold text-center">QR CODE CASTING</span>
                      </div>
                    </div>
                    <div className="text-left space-y-1">
                      <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>Bezpieczny Hotel Cast (VLAN Protected)</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-white">
                        Oglądaj Netflix, YouTube, HBO i Spotify ze swojego smartfona
                      </h4>
                      <p className="text-xs text-slate-300">
                        Zeskanuj kod QR aparatem telefonu. Połączenie jest szyfrowane i ograniczone wyłącznie do tego pokoju.
                      </p>
                      <div className="text-[10px] text-slate-400 pt-1">
                        PIN sesji: <span className="text-cyan-300 font-mono font-bold">8492</span> (Wygasa po wymeldowaniu)
                      </div>
                    </div>
                  </div>
                )}

                {tvTab === 'services' && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                        <Utensils className="w-4 h-4 text-amber-400" />
                        <span>Room Service & Usługi Hotelowe</span>
                      </h4>
                      {orderedItem && (
                        <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                          <CheckCircle className="w-3 h-3" /> Wysłano do kuchni: {orderedItem}
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <div 
                        onClick={() => setOrderedItem('Zestaw Śniadaniowy Premium (55 PLN)')}
                        className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 cursor-pointer transition-all hover:bg-slate-800/80"
                      >
                        <div className="text-xs font-bold text-slate-100 flex items-center justify-between">
                          <span>Śniadanie do łóżka</span>
                          <span className="text-cyan-400">55 zł</span>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1">Jajecznica, pieczywo, świeży sok, kawa</p>
                      </div>

                      <div 
                        onClick={() => setOrderedItem('Masaż Relaksacyjny SPA 60min (220 PLN)')}
                        className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 cursor-pointer transition-all hover:bg-slate-800/80"
                      >
                        <div className="text-xs font-bold text-slate-100 flex items-center justify-between">
                          <span>Masaż Relaksacyjny</span>
                          <span className="text-cyan-400">220 zł</span>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1">Strefa SPA, piętro -1, rezerwacja na 18:00</p>
                      </div>

                      <div 
                        onClick={() => setOrderedItem('Pranie ekspresowe / Prasowanie')}
                        className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 cursor-pointer transition-all hover:bg-slate-800/80"
                      >
                        <div className="text-xs font-bold text-slate-100 flex items-center justify-between">
                          <span>Usługi pralnicze</span>
                          <span className="text-cyan-400">Wycena</span>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1">Odbiór odzieży z pokoju w 15 minut</p>
                      </div>
                    </div>
                  </div>
                )}

                {tvTab === 'channels' && (
                  <div className="space-y-2">
                    <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                      <Tv className="w-4 h-4 text-cyan-400" />
                      <span>Lista kanałów DVB-T2 / DVB-S2 / IPTV (Stacja Czołowa SIGE)</span>
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      {[
                        { num: '01', name: 'Hotel Info HD', tag: 'Kanał Własny' },
                        { num: '02', name: 'TVP 1 HD', tag: 'DVB-T2' },
                        { num: '03', name: 'TVN HD', tag: 'DVB-T2' },
                        { num: '04', name: 'Polsat HD', tag: 'DVB-T2' },
                        { num: '05', name: 'BBC News HD', tag: 'Satelita' },
                        { num: '06', name: 'CNN International', tag: 'Satelita' },
                        { num: '07', name: 'Eurosport 1 HD', tag: 'Sport' },
                        { num: '08', name: 'Canal+ Sport', tag: 'Sport' },
                      ].map((ch) => (
                        <div key={ch.num} className="p-2 rounded bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] font-bold text-cyan-400">{ch.num}</span>
                            <span className="font-medium text-slate-200 text-[11px]">{ch.name}</span>
                          </div>
                          <span className="text-[9px] text-slate-500">{ch.tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* TV Bottom Navigation Bar */}
              <div className="relative z-10 flex items-center justify-between bg-slate-900/95 backdrop-blur-md rounded-xl p-1.5 border border-slate-800">
                <div className="flex items-center gap-1 overflow-x-auto">
                  <button
                    onClick={() => setTvTab('welcome')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                      tvTab === 'welcome' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Powitanie</span>
                  </button>
                  <button
                    onClick={() => setTvTab('casting')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                      tvTab === 'casting' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Cast className="w-3.5 h-3.5" />
                    <span>Chromecast</span>
                  </button>
                  <button
                    onClick={() => setTvTab('services')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                      tvTab === 'services' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Utensils className="w-3.5 h-3.5" />
                    <span>Hotel & SPA</span>
                  </button>
                  <button
                    onClick={() => setTvTab('channels')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                      tvTab === 'channels' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Tv className="w-3.5 h-3.5" />
                    <span>Telewizja (EPG)</span>
                  </button>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-[10px] text-slate-500 font-mono pr-2">
                  <span>Pilot: [▲][▼][OK]</span>
                </div>
              </div>
            </div>
          )}

          {/* ===================== MODE 2: DIGITAL SIGNAGE ===================== */}
          {activeMode === 'signage' && (
            <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-6 bg-slate-950">
              {/* Signage Sub-View Switcher */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                  <span className="text-xs font-bold text-slate-200">SIGE CLOUD SIGNAGE CMS LIVE</span>
                </div>
                <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800">
                  <button
                    onClick={() => setSignageScreen('lobby')}
                    className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors ${
                      signageScreen === 'lobby' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Lobby Infokiosk
                  </button>
                  <button
                    onClick={() => setSignageScreen('conference')}
                    className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors ${
                      signageScreen === 'conference' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Sala Konferencyjna
                  </button>
                  <button
                    onClick={() => setSignageScreen('menu')}
                    className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors ${
                      signageScreen === 'menu' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Menu Board Restauracji
                  </button>
                </div>
              </div>

              {/* Signage Content Dynamic */}
              <div className="my-auto py-2">
                {signageScreen === 'lobby' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="md:col-span-2 space-y-2 bg-gradient-to-r from-blue-950/60 to-slate-900 p-4 rounded-xl border border-blue-800/40">
                      <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>WYDARZENIA DZISIAJ W OBIEKCIE</span>
                      </div>
                      <div className="space-y-1.5 text-xs">
                        <div className="p-2 rounded bg-slate-950/60 border border-slate-800 flex justify-between items-center">
                          <div>
                            <p className="font-bold text-white">Konferencja Tech Summit 2026</p>
                            <p className="text-[10px] text-slate-400">Sala Rubinowa A+B • 09:00 - 17:00</p>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] border border-emerald-800">W trakcie</span>
                        </div>
                        <div className="p-2 rounded bg-slate-950/60 border border-slate-800 flex justify-between items-center">
                          <div>
                            <p className="font-bold text-white">Bankiet Wieczorny & Live Music</p>
                            <p className="text-[10px] text-slate-400">Restauracja Panorama • 19:30</p>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 text-[10px] border border-cyan-800">Zaplanowane</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 bg-slate-900/90 p-3 rounded-xl border border-slate-800 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                          <Compass className="w-3.5 h-3.5" />
                          <span>Wayfinding / Nawigacja</span>
                        </div>
                        <div className="text-[11px] text-slate-300 space-y-1 mt-2">
                          <div className="flex justify-between border-b border-slate-800 pb-1">
                            <span>Recepcja Główna</span>
                            <span className="text-cyan-400 font-bold">➔ Poziom 0</span>
                          </div>
                          <div className="flex justify-between border-b border-slate-800 pb-1">
                            <span>Sale Konferencyjne</span>
                            <span className="text-cyan-400 font-bold">➔ Poziom +1</span>
                          </div>
                          <div className="flex justify-between">
                            <span>SPA & Basen</span>
                            <span className="text-cyan-400 font-bold">➔ Poziom -1</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono text-center">
                        Dotknij ekranu aby wyświetlić mapę 3D
                      </div>
                    </div>
                  </div>
                )}

                {signageScreen === 'conference' && (
                  <div className="bg-slate-900/90 border-2 border-emerald-500/50 p-4 rounded-xl flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-extrabold text-[11px] uppercase tracking-wider">
                          SALA ZAJĘTA
                        </span>
                        <span className="text-xs text-slate-400 font-mono">14:00 - 16:30</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-white">
                        SALA AMBASADORSKA A
                      </h3>
                      <p className="text-xs text-cyan-300 font-medium">
                        Spotkanie Zarządu & Prezentacja Roczna
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Kolejna rezerwacja: 17:00 (Warsztaty Marketingowe)
                      </p>
                    </div>

                    <div className="hidden sm:flex flex-col items-center justify-center p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">
                      <Calendar className="w-5 h-5 text-cyan-400 mb-1" />
                      <span className="text-[10px] text-slate-300 font-semibold">Sync MS 365</span>
                      <span className="text-[9px] text-slate-500">Auto-update</span>
                    </div>
                  </div>
                )}

                {signageScreen === 'menu' && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-gradient-to-r from-amber-950/40 to-slate-900 p-2 rounded-lg border border-amber-800/30">
                      <div className="flex items-center gap-2">
                        <Coffee className="w-4 h-4 text-amber-400" />
                        <span className="text-xs font-bold text-amber-200">MENU LUNCHOWE (12:00 - 17:00)</span>
                      </div>
                      <span className="text-[10px] text-slate-400">Ceny aktualizowane zdalnie przez CMS</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                      <div className="p-2 rounded bg-slate-900 border border-slate-800">
                        <div className="font-bold text-white flex justify-between">
                          <span>Krem z borowików</span>
                          <span className="text-amber-400">28 zł</span>
                        </div>
                        <p className="text-[10px] text-slate-400">Z oliwą truflową i grzankami</p>
                      </div>
                      <div className="p-2 rounded bg-slate-900 border border-slate-800">
                        <div className="font-bold text-white flex justify-between">
                          <span>Polędwiczka Sous-Vide</span>
                          <span className="text-amber-400">62 zł</span>
                        </div>
                        <p className="text-[10px] text-slate-400">Purée z pasternaku, sos z leśnych owoców</p>
                      </div>
                      <div className="p-2 rounded bg-slate-900 border border-slate-800 col-span-2 sm:col-span-1">
                        <div className="font-bold text-white flex justify-between">
                          <span>Sernik z białą czekoladą</span>
                          <span className="text-amber-400">24 zł</span>
                        </div>
                        <p className="text-[10px] text-slate-400">Malinowe coulis, mięta</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Signage Bottom News Ticker */}
              <div className="flex items-center gap-2 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800 text-[11px]">
                <span className="px-1.5 py-0.5 rounded bg-cyan-600 text-white font-bold text-[9px] uppercase">
                  KOMUNIKAT
                </span>
                <span className="text-slate-300 truncate">
                  Zapraszamy do strefy SPA & Wellness w godzinach 08:00 - 22:00. Pytania prosimy kierować do recepcji (nr tel. 100).
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

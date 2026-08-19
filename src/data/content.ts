import { ServiceItem, TechnologyItem, FAQItem, CaseStudyItem } from '../types';

export const COMPANY_INFO = {
  name: 'Robert Chlebowski SIGE',
  brandName: 'sige.tech',
  tagline: 'Projektowanie i wdrożenia systemów telewizji hotelowej oraz Digital Signage',
  owner: 'Robert Chlebowski',
  email: 'robert.chlebowski@sige.tech',
  phone: '+48 600 000 000', // editable / placeholder with clean UI
  location: 'Polska / Projekty w całym kraju i UE',
  experienceYears: 15,
  completedScreens: '12 000+',
  hotelClients: '180+',
  uptimeSla: '99.9%',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'hotel-tv',
    title: 'Systemy Telewizji Hotelowej (Hospitality TV / IPTV)',
    shortDesc: 'Kompleksowe projektowanie i wdrożenia telewizji interaktywnej dla hoteli, resortów i aparthoteli.',
    longDesc: 'Dostarczamy certyfikowane systemy telewizji hotelowej dopasowane do obiektów od kameralnych butików po wielotysięczne kompleksy resortowe. Integrujemy rozwiązania w oparciu o sieci IP (IPTV), klasyczne koncentryczne (DVB-T2/C z kanałami informacyjnymi) oraz technologie hybrydowe.',
    iconName: 'Tv',
    tags: ['IPTV', 'Samsung LYNK', 'LG Pro:Centric', 'Philips CMND', 'Smart Hospitality'],
    features: [
      'Personalizowany ekran powitalny (Welcome Screen) w języku gościa z integracją PMS',
      'Interaktywny informator hotelowy, room service, menu restauracji i rezerwacja zabiegów SPA',
      'Bezpieczny Hotel Casting (Google Cast / Apple AirPlay) z izolacją sieciową pokoju (VLAN)',
      'Centralne zarządzanie listą kanałów, blokada menu serwisowego, zdalny upload firmware',
      'Stacje czołowe DVB-T2/S2 do IP/RF z obsługą polskich i zagranicznych pakietów satelitarnych',
      'Zgodność z rygorystycznymi standardami globalnych sieci hotelowych'
    ]
  },
  {
    id: 'digital-signage',
    title: 'Rozwiązania Digital Signage & Infokioski',
    shortDesc: 'Wielostrefowe systemy komunikacji wizualnej, dynamiczne menu boardy i ekrany informacyjne.',
    longDesc: 'Projektujemy i wdrażamy systemy Digital Signage oparte na nowoczesnych platformach CMS. Od pojedynczych ekranów powitalnych w lobby, przez totemy dotykowe, po rozproszone sieci nośników reklamowych w całych obiektach komercyjnych.',
    iconName: 'LayoutGrid',
    tags: ['Cloud CMS', 'Menu Boards', 'Wayfinding', 'Totemy Dotykowe', 'Panele Sal'],
    features: [
      'Elektroniczne tablice informacyjne w lobby, recepcji, windach i strefach konferencyjnych',
      'Interaktywne totemy wayfinding ułatwiające orientację w dużych obiektach i galeriach',
      'Dynamiczne cyfrowe Menu Boardy (automatyczne przełączanie menu śniadaniowego/obiadowego)',
      'Systemy rezerwacji sal konferencyjnych z panelami LED przy drzwiach (sync MS 365 / Google)',
      'Centralne zarządzanie harmonogramem wyświetlania i natychmiastowe alerty bezpieczeństwa',
      'Ekrany o podwyższonej jasności (High Brightness) pracujące 24/7'
    ]
  },
  {
    id: 'audit-design',
    title: 'Audyt Techniczny & Projektowanie Instalacji',
    shortDesc: 'Inżynieryjna analiza okablowania, dobór stacji czołowych i projekt wykonawczy instalacji teletechnicznych.',
    longDesc: 'Każdy udany system zaczyna się od precyzyjnego projektu. Badamy stan istniejącej infrastruktury (skrętka kat. 5e/6/6A, sieć koncentryczna RG-6/RG-11, światłowody GPON/FTTH) i dobieramy architekturę, która maksymalizuje niezawodność przy optymalnym budżecie.',
    iconName: 'FileCheck',
    tags: ['Audyt RF/IP', 'Stacje Czołowe', 'Projekty Teletechniczne', 'Optymalizacja Kosztów'],
    features: [
      'Pomiary poziomów sygnału RF, tłumienności sieci i przepustowości sieci Ethernet',
      'Dobór stacji czołowych DVB-T2/S2/IP (Teleste, WISI, TRIAX, Johansson)',
      'Koncepcja i schematy blokowe dla architektów i generalnych wykonawców',
      'Dobór profesjonalnych ekranów komercyjnych (Hospitality Display vs Consumer TV)',
      'Kalkulacja pasma i segmentacja VLAN dla stabilnej transmisji multicast/unicast'
    ]
  },
  {
    id: 'integration-support',
    title: 'Integracje PMS, Wdrożenia i Serwis SLA',
    shortDesc: 'Pełna integracja z oprogramowaniem recepcyjnym, uruchomienie i gwarantowany czas reakcji.',
    longDesc: 'Łączymy telewizję i ekrany z wiodącymi systemami zarządzania hotelem (PMS). Po wdrożeniu zapewniamy profesjonalne wsparcie techniczne, zdalny monitoring pracy stacji czołowej oraz prewencyjne przeglądy okresowe.',
    iconName: 'ShieldCheck',
    tags: ['Fidelio / Opera', 'KWHotel', 'ProHott', 'Chart', 'Wsparcie SLA 24/7'],
    features: [
      'Dwukierunkowa integracja z PMS: powitanie gościa, podgląd rachunku, express check-out',
      'Automatyczne czyszczenie danych prywatnych i sesji streamingowych po wymeldowaniu',
      'Precyzyjny montaż ścienny na atestowanych uchwytach VESA z zabezpieczeniem antykradzieżowym',
      'Szkolenia personelu technicznego i recepcji z obsługi systemów CMS',
      'Dedykowane pakiety wsparcia serwisowego z gwarantowanym czasem reakcji SLA'
    ]
  }
];

export const TECHNOLOGIES_DATA: TechnologyItem[] = [
  { name: 'Samsung LYNK Cloud / REACH', category: 'hotel_tv', description: 'Zaawansowana platforma zarządzania treściami i urządzeniami dla ekranów hotelowych Samsung.', badge: 'Partner Solution' },
  { name: 'LG Pro:Centric Direct / V', category: 'hotel_tv', description: 'Ekosystem interaktywnej telewizji hotelowej z bogatymi szablonami UI i wsparciem IoT.', badge: 'Hospitality Certified' },
  { name: 'Philips CMND & Control', category: 'hotel_tv', description: 'Zdalne zarządzanie, konfiguracja i aktualizacja floty telewizorów Philips z systemem Android TV.', badge: 'Android Hospitality' },
  { name: 'Google Cast for Hotels', category: 'hotel_tv', description: 'Bezpieczne przesyłanie multimediów z telefonów gości na ekran TV bez logowania na urządzeniu.', badge: 'Guest Casting' },
  { name: 'DVB-T2 / DVB-C / IPTV Stacje Czołowe', category: 'hardware', description: 'Profesjonalne transmodulatory i bramki IP (Teleste, Johansson, WISI, TRIAX) dla stabilnego odbioru.', badge: 'Infrastruktura' },
  { name: 'BrightSign & Cloud Signage CMS', category: 'signage', description: 'Niezawodne odtwarzacze sprzętowe i chmurowe platformy dystrybucji treści digital signage.', badge: 'Signage Player' },
  { name: 'Integracje PMS (Opera, Fidelio, KWHotel)', category: 'pms', description: 'Bezpośrednia komunikacja systemów TV z bazą gości w systemie hotelowym.', badge: 'PMS Protocol' },
  { name: 'Sieci GPON / FTTH / VLAN Isolation', category: 'hardware', description: 'Projektowanie bezpiecznej architektury sieciowej gwarantującej prywatność i ciągłość strumienia.', badge: 'Network Security' }
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    title: 'Kompleks Resort & SPA w górach',
    clientType: 'Hotel 4-gwiazdkowy / 160 pokoi + 3 restauracje',
    screensCount: '190 ekranów Hospitality TV + 12 ekranów Digital Signage',
    solution: 'Wdrożenie stacji czołowej IPTV, dedykowanego interfejsu gościa z rezerwacją SPA oraz totemów informacyjnych w lobby i strefie basenowej.',
    description: 'Wymiana przestarzałej instalacji analogowej na pełną sieć IPTV w oparciu o istniejące okablowanie strukturalne, eliminując konieczność kosztownych remontów.',
    results: [
      'Wzrost zamówień usług SPA i gastronomii przez TV o 28%',
      '100% zadowolenia gości z funkcji bezpiecznego castingu Netflix/YouTube',
      'Centralne zarządzanie wszystkimi ekranami z jednego panelu w recepcji'
    ]
  },
  {
    title: 'Aparthotel miejski w centrum Warszawy',
    clientType: 'Sieć nowoczesnych apartamentów / 85 lokali',
    screensCount: '95 ekranów Samsung Hospitality z LYNK Cloud',
    solution: 'Pełna automatyzacja powitania gościa, przewodnik po mieście, dynamiczne kody QR do rezerwacji śniadań i zamków kodowych.',
    description: 'Zdalne zarządzanie obiektem bez stałej recepcji 24h dzięki integracji TV z systemem self-checkin.',
    results: [
      'Automatyczny self-service i ograniczenie zapytań do infolinii o 40%',
      'Zdalna konfiguracja kanałów i parametrów bez wchodzenia do apartamentów',
      'Brak zgłoszeń awarii sygnału po modernizacji stacji'
    ]
  },
  {
    title: 'Centrum Konferencyjno-Targowe & Hotel Biznesowy',
    clientType: 'Obiekt MICE / 120 pokoi + 8 sal konferencyjnych',
    screensCount: '140 ekranów TV + 16 paneli drzwiowych + 4 infokioski wayfinding',
    solution: 'System rezerwacji sal konferencyjnych zsynchronizowany z kalendarzami korporacyjnymi, cyfrowa nawigacja po salach i branding dla grup biznesowych.',
    description: 'Błyskawiczna personalizacja ekranów pod logotypy i agendy konkretnych konferencji w kilka kliknięć.',
    results: [
      'Płynna rotacja grup i zero pomyłek przy wejściach do sal',
      'Prestiżowy wizerunek nowoczesnego centrum biznesowego',
      'Oszczędność czasu personelu na drukowanie potykaczy i plakatów'
    ]
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Czy musimy wymieniać całe okablowanie w hotelu, aby wdrożyć nowoczesną telewizję?',
    answer: 'Nie zawsze! Nowoczesne technologie pozwalają na wdrożenie zaawansowanych funkcji telewizji hotelowej zarówno na nowej skrętce komputerowej (kat. 5e/6 w architekturze IPTV), jak i na istniejącej sieci koncentrycznej (DVB-T2/C z wykorzystaniem technologii DOCSIS, EoC lub telewizorów z wbudowanym Wi-Fi do funkcji interaktywnych). Podczas audytu dobieramy rozwiązanie optymalne kosztowo bez konieczności kucia ścian.',
    category: 'Technologia'
  },
  {
    question: 'Czym różni się telewizor hotelowy (Hospitality) od zwykłego telewizora konsumenckiego?',
    answer: 'Telewizory Hospitality (np. Samsung LYNK, LG Pro:Centric, Philips CMND) posiadają specjalne oprogramowanie i procesory komercyjne. Umożliwiają: blokadę menu serwisowego i regulacji głośności (aby gość nie rozstroił TV), centralne programowanie listy kanałów, personalizację ekranu powitalnego, integrację z PMS, bezpieczne usuwanie haseł i historii po wymeldowaniu oraz certyfikowane zasilacze przystosowane do pracy ciągłej.',
    category: 'Sprzęt'
  },
  {
    question: 'Jak działa funkcja przesyłania filmów z telefonu gościa (Casting / AirPlay)?',
    answer: 'Stosujemy rozwiązania klasy hotelowej z bezpieczną separacją sieciową (VLAN Isolation per Room). Gość skanuje kod QR wyświetlony na ekranie TV w swoim pokoju i może przesyłać multimedia (Netflix, YouTube, Spotify, HBO Max) wyłącznie na swój telewizor. Sąsiednie pokoje nie widzą jego urządzenia, a dane sesji są automatycznie kasowane po wyrejestrowaniu.',
    category: 'Funkcje'
  },
  {
    question: 'Jak wygląda proces aktualizacji treści na ekranach Digital Signage?',
    answer: 'Wszystkie nośniki podłączone są do intuicyjnego panelu chmurowego (CMS). Możesz zmieniać treści, wgrywać nowe spoty wideo, aktualizować cenniki i harmonogramy z dowolnego komputera lub telefonu w kilka sekund. Możliwa jest także automatyzacja (np. automatyczna zmiana menu śniadaniowego o godzinie 11:00 na menu lunchowe).',
    category: 'Signage'
  },
  {
    question: 'Czy oferujecie wsparcie po zakończeniu wdrożenia?',
    answer: 'Tak. Robert Chlebowski SIGE oferuje kompleksowe umowy serwisowe (SLA) obejmujące zdalny monitoring stacji czołowych, regularne aktualizacje oprogramowania, doradztwo techniczne oraz szybką reakcję serwisową w przypadku awarii sprzętowych.',
    category: 'Współpraca'
  }
];

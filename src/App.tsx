import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ConfiguratorSection from './components/ConfiguratorSection';
import TechStackSection from './components/TechStackSection';
import ProcessSection from './components/ProcessSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';

export default function App() {
  const [injectedInquiryMessage, setInjectedInquiryMessage] = useState<string>('');
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string>('');
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState<boolean>(false);
  const [forceOpenCookieSettings, setForceOpenCookieSettings] = useState<boolean>(false);

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyConfiguration = (configSummary: string) => {
    setInjectedInquiryMessage(configSummary);
    handleScrollToSection('kontakt');
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForInquiry(serviceName);
    setInjectedInquiryMessage(`Dzień dobry, proszę o przygotowanie oferty oraz specyfikacji technicznej dla usługi: ${serviceName}.`);
    handleScrollToSection('kontakt');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 bg-grid-pattern relative selection:bg-cyan-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenConsultation={() => handleScrollToSection('kontakt')} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section with Headline, CTAs, and Live Interactive Device Simulator */}
        <Hero
          onExploreCalculator={() => handleScrollToSection('kalkulator')}
          onContactClick={() => handleScrollToSection('kontakt')}
        />

        {/* 2. About Us: Robert Chlebowski SIGE */}
        <AboutSection />

        {/* 3. Core Services: Hotel TV (IPTV), Digital Signage, Audits & SLA */}
        <ServicesSection onSelectServiceForInquiry={handleSelectService} />

        {/* 4. Interactive Scope & Architecture Configurator */}
        <ConfiguratorSection onApplyConfiguration={handleApplyConfiguration} />

        {/* 5. Technologies & Hardware Ecosystem */}
        <TechStackSection />

        {/* 6. Implementation Process Workflow */}
        <ProcessSection />

        {/* 7. FAQ */}
        <FAQSection />

        {/* 8. Contact Section with Interactive Form & Robert Chlebowski SIGE details */}
        <ContactSection
          injectedMessage={injectedInquiryMessage}
          selectedService={selectedServiceForInquiry}
          onOpenPrivacyPolicy={() => setIsPrivacyPolicyOpen(true)}
        />
      </main>

      {/* Footer with Legal & Cookie triggers */}
      <Footer
        onOpenPrivacyPolicy={() => setIsPrivacyPolicyOpen(true)}
        onOpenCookieSettings={() => setForceOpenCookieSettings(true)}
      />

      {/* Cookie Consent Banner */}
      <CookieBanner
        onOpenPrivacyPolicy={() => setIsPrivacyPolicyOpen(true)}
        forceOpen={forceOpenCookieSettings}
        onCloseForceOpen={() => setForceOpenCookieSettings(false)}
      />

      {/* Privacy Policy & GDPR/RODO Modal */}
      <PrivacyPolicyModal
        isOpen={isPrivacyPolicyOpen}
        onClose={() => setIsPrivacyPolicyOpen(false)}
        onOpenCookieSettings={() => setForceOpenCookieSettings(true)}
      />
    </div>
  );
}

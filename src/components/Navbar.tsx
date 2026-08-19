import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronRight, Shield, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import Logo from './Logo';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O nas', href: '#o-nas' },
    { name: 'Telewizja Hotelowa', href: '#uslugi' },
    { name: 'Digital Signage', href: '#digital-signage' },
    { name: 'Kalkulator', href: '#kalkulator' },
    { name: 'Technologie', href: '#technologie' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand SVG */}
          <a
            href="#"
            id="brand-logo"
            className="flex items-center group focus:outline-none"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="px-3.5 py-1.5 text-xs xl:text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/90 rounded-full transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action & Direct Contact */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              id="header-email-btn"
              className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-lg hover:bg-slate-900/80 transition-colors border border-transparent hover:border-slate-800"
              title={COMPANY_INFO.email}
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden xl:inline">{COMPANY_INFO.email}</span>
              <span className="xl:hidden">Email</span>
            </a>

            <button
              onClick={() => {
                if (onOpenConsultation) {
                  onOpenConsultation();
                } else {
                  scrollTo('#kontakt');
                }
              }}
              id="header-consult-btn"
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2 text-xs xl:text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg shadow-md shadow-cyan-600/20 hover:shadow-cyan-600/40 hover:-translate-y-0.5 transition-all duration-150 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
              <span>Darmowa Wycena</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => {
                scrollTo('#kontakt');
              }}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-cyan-600 rounded-lg"
            >
              Kontakt
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label="Otwórz menu"
              className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-4 pt-3 pb-6 bg-slate-950 border-b border-slate-800 shadow-2xl max-h-[80vh] overflow-y-auto">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900 rounded-lg transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2.5">
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-2.5 px-4 py-2 text-xs text-slate-300 bg-slate-900/80 rounded-lg border border-slate-800"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <div className="text-[11px] text-slate-400 px-4">
              Robert Chlebowski SIGE • Niezawodne instalacje multimedialne
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scrollspy active section detection
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#071B35]/95 backdrop-blur-md shadow-lg shadow-black/10 py-3.5 border-b border-white/10'
          : 'bg-[#071B35]/80 backdrop-blur-sm py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Branding */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Amarwin Jasan - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-[#102C4E] border border-[#087BFF]/40 flex items-center justify-center font-bold text-white shadow-sm group-hover:border-[#087BFF] group-hover:shadow-[0_0_15px_rgba(8,123,255,0.35)] transition-all">
              <span>A</span>
              <span className="text-[#087BFF]">J</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white group-hover:text-white transition-colors leading-none">
                AMARWIN <span className="text-[#087BFF]">JASAN</span>
              </span>
              <span className="text-[10px] tracking-widest text-[#DCE7F2]/70 uppercase font-mono mt-0.5">
                Portfolio 2026
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-[#DCE7F2]/75 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#087BFF] rounded-full shadow-[0_0_8px_#087BFF]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="Amarwin_Jasan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-[#087BFF] hover:bg-[#0069e0] text-white text-sm font-semibold inline-flex items-center gap-2 shadow-sm hover:shadow-[0_4px_16px_rgba(8,123,255,0.35)] transition-all active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="/resume.pdf"
              download="Amarwin_Jasan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-[#087BFF] text-white text-xs font-semibold inline-flex items-center gap-1.5 shadow-sm"
              aria-label="Download Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#102C4E]/80 border border-white/10 text-white hover:text-[#087BFF] focus:outline-none focus:ring-2 focus:ring-[#087BFF]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden border-b border-white/10 bg-[#071B35]/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-[#087BFF]/15 text-[#087BFF] font-semibold border-l-4 border-[#087BFF]'
                        : 'text-[#DCE7F2] hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-[#087BFF]" />}
                  </a>
                );
              })}
            </div>

            <div className="pt-4 mt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href="/resume.pdf"
                download="Amarwin_Jasan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 px-4 rounded-xl bg-[#087BFF] text-white text-center font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:bg-[#0069e0] transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="https://www.weboclypse.site"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#102C4E] border border-white/10 text-[#DCE7F2] text-center font-medium text-xs flex items-center justify-center gap-1.5 hover:text-white transition-colors"
              >
                <span>Visit WEBOCLYPSE</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#087BFF]" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};


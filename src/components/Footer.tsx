import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { profileData } from '../data/profile';

const footerNavLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (href: string) => {
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
    <footer className="relative bg-[#071B35] text-white pt-16 pb-12 border-t border-white/10 overflow-hidden">
      {/* Subtle Electric Blue Curved Accents & Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-px bg-gradient-to-r from-transparent via-[#087BFF] to-transparent opacity-60" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#087BFF]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#102C4E] border border-[#087BFF]/50 flex items-center justify-center font-bold text-white shadow-sm">
                  <span>A</span>
                  <span className="text-[#087BFF]">J</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold tracking-tight text-white leading-none">
                    AMARWIN <span className="text-[#087BFF]">JASAN</span>
                  </span>
                  <span className="text-[10px] tracking-widest text-[#DCE7F2]/60 uppercase font-mono mt-0.5">
                    Personal Portfolio
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#DCE7F2]/80 leading-relaxed max-w-sm mb-6">
                "Building ideas. Creating solutions. Growing through technology."
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#102C4E] border border-white/10 hover:border-[#087BFF] hover:text-[#087BFF] text-[#DCE7F2] flex items-center justify-center transition-all hover:scale-105"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#102C4E] border border-white/10 hover:border-[#087BFF] hover:text-[#087BFF] text-[#DCE7F2] flex items-center justify-center transition-all hover:scale-105"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="w-9 h-9 rounded-lg bg-[#102C4E] border border-white/10 hover:border-[#087BFF] hover:text-[#087BFF] text-[#DCE7F2] flex items-center justify-center transition-all hover:scale-105"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#DCE7F2]/60 mb-4 font-mono">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2.5">
              {footerNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm text-[#DCE7F2]/80 hover:text-white transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Direct Contact & Resume */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#DCE7F2]/60 mb-4 font-mono">
                Connect Directly
              </h4>
              <p className="text-xs text-[#DCE7F2]/70 mb-2">{profileData.location}</p>
              <a
                href={`mailto:${profileData.email}`}
                className="text-xs text-[#087BFF] hover:underline block break-all font-mono mb-4"
              >
                {profileData.email}
              </a>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#102C4E] hover:bg-[#153863] border border-white/10 text-white text-xs font-semibold transition-all group"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-[#087BFF] transition-transform group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#DCE7F2]/60 gap-4">
          <p>© {currentYear} Amarwin Jasan. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, TypeScript &amp; Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
};

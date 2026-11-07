import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Boxes, TrendingUp, Sparkles, GraduationCap, Building2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { profileData } from '../data/profile';

const highlightCards = [
  {
    title: 'Software Development',
    description: 'Building websites, mobile applications, and software solutions.',
    icon: Code2,
    badge: 'Technical Craft'
  },
  {
    title: 'Product Building',
    description: 'Developing practical applications and exploring AI-powered solutions.',
    icon: Boxes,
    badge: 'Innovation'
  },
  {
    title: 'Media & Growth',
    description: 'Contributing to brand presence, digital communication, and growth initiatives.',
    icon: TrendingUp,
    badge: 'Impact & Strategy'
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="ABOUT ME"
          title="Beyond Code. Building Ideas."
          subtitle="A perspective combining engineering foundations, product thinking, and strategic brand growth."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Narrative Editorial Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 space-y-5 text-[#64748B] text-base sm:text-lg leading-relaxed"
          >
            {profileData.aboutStory.map((paragraph, index) => (
              <p
                key={index}
                className={index === 0 ? 'text-[#102C4E] font-medium text-lg sm:text-xl leading-relaxed' : ''}
              >
                {paragraph}
              </p>
            ))}

            {/* Quick Context Highlights */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#DCE7F2]">
              <div className="p-4 rounded-xl bg-[#DCE7F2]/40 border border-[#DCE7F2] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white text-[#087BFF] shadow-xs">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#102C4E]">CSE Student</h4>
                  <p className="text-xs text-[#64748B] mt-0.5">Dhaanish Chennai College</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#DCE7F2]/40 border border-[#DCE7F2] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white text-[#087BFF] shadow-xs">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#102C4E]">Founder &amp; Growth</h4>
                  <p className="text-xs text-[#64748B] mt-0.5">WEBOCLYPSE &amp; Kromaxzon</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Three Highlight Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-5">
            {highlightCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: idx * 0.12 }}
                  className="group relative p-6 sm:p-7 rounded-2xl bg-[#DCE7F2]/30 hover:bg-[#DCE7F2]/60 border border-[#DCE7F2] hover:border-[#087BFF]/50 transition-all duration-300 card-shadow hover:card-shadow-hover hover:-translate-y-1"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#DCE7F2] group-hover:border-[#087BFF]/40 text-[#087BFF] flex items-center justify-center shrink-0 shadow-sm transition-colors">
                      <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1.5">
                        <h3 className="text-lg sm:text-xl font-bold text-[#102C4E] group-hover:text-[#087BFF] transition-colors">
                          {card.title}
                        </h3>
                        <span className="text-[11px] font-semibold text-[#087BFF] uppercase tracking-wider bg-white px-2.5 py-0.5 rounded-full border border-[#087BFF]/20 shadow-xs">
                          {card.badge}
                        </span>
                      </div>
                      
                      <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};


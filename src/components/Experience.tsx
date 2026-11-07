import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Calendar } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { experienceData } from '../data/experience';

export const Experience: React.FC = () => {
  const [selectedExpId, setSelectedExpId] = useState<string>(experienceData[0].id);

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#F8FAFC] border-y border-[#DCE7F2]/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="TRACK RECORD"
          title="Professional Experience"
          subtitle="Leadership, media growth, and software engineering initiatives across startup and technology environments."
        />

        {/* Interactive Horizontal Timeline Bar (Responsive across Desktop and Mobile) */}
        <div className="mb-10 sm:mb-14">
          <div className="relative flex items-center justify-between pb-2 sm:pb-4 max-w-4xl mx-auto px-3 sm:px-6">
            {/* Horizontal Track Line */}
            <div className="absolute top-5 sm:top-6 left-6 right-6 h-0.5 sm:h-1 bg-[#DCE7F2] -translate-y-1/2 z-0" />
            
            {experienceData.map((exp, index) => {
              const isSelected = selectedExpId === exp.id;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedExpId(exp.id)}
                  className="relative z-10 flex flex-col items-center group focus:outline-none cursor-pointer"
                  aria-label={`Select experience ${index + 1}: ${exp.organization}`}
                  aria-pressed={isSelected}
                >
                  {/* Timeline Node */}
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#087BFF] text-white shadow-lg shadow-[#087BFF]/35 scale-110 ring-4 ring-white'
                        : 'bg-white text-[#102C4E] border-2 border-[#DCE7F2] group-hover:border-[#087BFF]/50 group-hover:text-[#087BFF]'
                    }`}
                  >
                    0{index + 1}
                  </div>
                  
                  {/* Organization label below node */}
                  <span
                    className={`mt-2 text-[11px] sm:text-xs font-semibold tracking-tight transition-colors text-center max-w-[75px] sm:max-w-none truncate sm:overflow-visible ${
                      isSelected ? 'text-[#087BFF] font-bold' : 'text-[#64748B] group-hover:text-[#102C4E]'
                    }`}
                  >
                    {exp.organization}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {experienceData.map((exp, index) => {
            // Dynamic selection: the active experience turns Dark Navy, while all others are clean White
            const isDark = selectedExpId === exp.id;

            return (
              <motion.div
                key={exp.id}
                onClick={() => setSelectedExpId(exp.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedExpId(exp.id);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Experience details for ${exp.organization}`}
                aria-pressed={isDark}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`relative rounded-2xl p-6 sm:p-8 transition-all duration-300 cursor-pointer select-none focus:outline-none ${
                  isDark
                    ? 'bg-[#071B35] text-white border-2 border-[#087BFF] shadow-2xl shadow-[#087BFF]/20 ring-4 ring-[#087BFF]/15 scale-[1.01]'
                    : 'bg-white text-[#102C4E] border border-[#DCE7F2] card-shadow hover:card-shadow-hover hover:border-[#087BFF]/40 hover:-translate-y-0.5'
                }`}
              >
                {/* Header Tag / Badge & Index */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full transition-colors ${
                        isDark
                          ? 'bg-[#087BFF]/25 text-[#087BFF] border border-[#087BFF]/40'
                          : 'bg-[#DCE7F2] text-[#087BFF] font-semibold'
                      }`}
                    >
                      EXPERIENCE 0{index + 1}
                    </span>
                    {exp.badge && (
                      <span
                        className={`text-xs font-medium px-2.5 py-0.5 rounded-full transition-colors ${
                          isDark ? 'bg-white/10 text-[#DCE7F2]' : 'bg-gray-100 text-[#64748B]'
                        }`}
                      >
                        {exp.badge}
                      </span>
                    )}
                  </div>

                  <span
                    className={`text-xs font-mono font-medium flex items-center gap-1.5 transition-colors ${
                      isDark ? 'text-[#DCE7F2]/80' : 'text-[#64748B]'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                </div>

                {/* Role & Organization */}
                <div className="mb-4">
                  <h3
                    className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                      isDark ? 'text-white' : 'text-[#102C4E]'
                    }`}
                  >
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`text-base font-semibold text-[#087BFF]`}
                    >
                      {exp.organization}
                    </span>
                    {exp.location && (
                      <span className={`text-xs transition-colors ${isDark ? 'text-[#DCE7F2]/60' : 'text-[#64748B]'}`}>
                        • {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p
                  className={`text-sm sm:text-base leading-relaxed mb-6 transition-colors ${
                    isDark ? 'text-[#DCE7F2]/90' : 'text-[#64748B]'
                  }`}
                >
                  "{exp.description}"
                </p>

                {/* Responsibility Highlights */}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <div className={`space-y-2.5 pt-4 border-t border-dashed transition-colors ${
                    isDark ? 'border-white/15' : 'border-gray-200'
                  }`}>
                    <h4
                      className={`text-xs font-bold uppercase tracking-wider font-mono mb-2 transition-colors ${
                        isDark ? 'text-[#DCE7F2]/60' : 'text-[#64748B]'
                      }`}
                    >
                      Key Responsibilities &amp; Focus
                    </h4>
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="w-4 h-4 mt-0.5 shrink-0 text-[#087BFF]"
                        />
                        <span
                          className={`text-xs sm:text-sm leading-snug transition-colors ${
                            isDark ? 'text-[#DCE7F2]' : 'text-[#102C4E]'
                          }`}
                        >
                          {resp}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Functional Website Link for WEBOCLYPSE */}
                {exp.websiteUrl && (
                  <div className={`mt-6 pt-4 border-t transition-colors ${
                    isDark ? 'border-white/15' : 'border-gray-100'
                  }`}>
                    <a
                      href={exp.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#087BFF] hover:bg-[#0069e0] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all group cursor-pointer"
                    >
                      <span>Visit Website</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

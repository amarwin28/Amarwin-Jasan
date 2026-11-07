import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, Building, BookOpen } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { educationData } from '../data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="ACADEMIC BACKGROUND"
          title="Education"
          subtitle="Formal computer science engineering foundations and academic milestones."
        />

        {/* Professional Vertical Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Track Line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-6 w-0.5 bg-[#DCE7F2] -translate-x-1/2" />

          <div className="space-y-8 sm:space-y-10">
            {educationData.map((item, index) => {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="relative pl-12 sm:pl-16 group"
                >
                  {/* Timeline Node Icon */}
                  <div className="absolute left-4 sm:left-6 -translate-x-1/2 top-1.5 w-8 h-8 rounded-full bg-white border-2 border-[#087BFF] text-[#087BFF] flex items-center justify-center shadow-md shadow-[#087BFF]/20 group-hover:scale-110 group-hover:bg-[#087BFF] group-hover:text-white transition-all">
                    <GraduationCap className="w-4 h-4" />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-[#DCE7F2] card-shadow hover:card-shadow-hover hover:border-[#087BFF]/40 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-[#102C4E]">
                        {item.degree}
                      </h3>
                      
                      {item.grade && (
                        <span className="w-fit px-3 py-1 rounded-full bg-[#087BFF]/15 text-[#087BFF] font-bold text-xs font-mono border border-[#087BFF]/25">
                          {item.grade}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-sm text-[#087BFF] font-semibold mb-3">
                      <Building className="w-4 h-4 text-[#64748B]" />
                      <span>{item.institution}</span>
                      {item.period && (
                        <span className="text-xs text-[#64748B] font-mono">
                          • {item.period}
                        </span>
                      )}
                    </div>

                    {item.details && item.details.length > 0 && (
                      <ul className="space-y-1.5 text-xs sm:text-sm text-[#64748B] pt-2 border-t border-[#DCE7F2]/60">
                        {item.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <span className="text-[#087BFF] font-bold mt-0.5">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
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


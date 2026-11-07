import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Wrench, CheckCircle, BrainCircuit } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { skillsData } from '../data/skills';

const categoryIcons: Record<string, React.ElementType> = {
  'Programming Languages': Code,
  'Frontend & Application Development': Layout,
  'Backend & APIs': Server,
  'Tools & Platforms': Wrench,
  'Core Competencies': BrainCircuit
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-[#F8FAFC] border-t border-[#DCE7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="TECHNICAL ARSENAL"
          title="Skills & Competencies"
          subtitle="Engineering stack, programming languages, cross-platform frameworks, and core methodologies."
        />

        {/* Skills Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillsData.map((group, index) => {
            const Icon = categoryIcons[group.category] || Code;
            const isWide = index === 0 || index === 1;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`p-6 sm:p-7 rounded-2xl bg-white border border-[#DCE7F2] card-shadow hover:card-shadow-hover hover:border-[#087BFF]/40 transition-all duration-300 ${
                  group.category === 'Core Competencies' ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Header with Icon */}
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#DCE7F2]/60 text-[#087BFF] flex items-center justify-center shrink-0 border border-[#DCE7F2]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#102C4E]">
                      {group.category}
                    </h3>
                  </div>
                </div>

                {group.description && (
                  <p className="text-xs text-[#64748B] mb-5 leading-relaxed">
                    {group.description}
                  </p>
                )}

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-[#DCE7F2]/40 hover:bg-[#DCE7F2]/80 text-[#102C4E] hover:text-[#087BFF] text-xs sm:text-sm font-semibold border border-[#DCE7F2] transition-colors flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#087BFF]" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


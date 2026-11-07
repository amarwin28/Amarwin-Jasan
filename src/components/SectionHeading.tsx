import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  center = false,
  light = false,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
      className={`mb-10 md:mb-14 ${center ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'} ${className}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full text-xs font-semibold tracking-wider uppercase ${
          light 
            ? 'bg-[#087BFF]/20 text-[#087BFF] border border-[#087BFF]/30' 
            : 'bg-[#DCE7F2]/60 text-[#087BFF] border border-[#087BFF]/20'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#087BFF]" />
          <span>{badge}</span>
        </div>
      )}
      
      <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight leading-tight ${
        light ? 'text-white' : 'text-[#102C4E]'
      }`}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={`mt-3 text-sm sm:text-base leading-relaxed ${
          light ? 'text-[#DCE7F2]/80' : 'text-[#64748B]'
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};


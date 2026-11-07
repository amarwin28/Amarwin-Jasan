import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Zap, Code, Users, Gamepad2, CheckCircle2 } from 'lucide-react';
import { achievementsData } from '../data/achievements';

const iconMap: Record<string, React.ElementType> = {
  Trophy,
  Award,
  Zap,
  Code,
  Users,
  Gamepad2
};

export const Achievements: React.FC = () => {
  return (
    <div className="mt-16 md:mt-24">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-lg bg-[#DCE7F2] text-[#087BFF] flex items-center justify-center font-bold">
          <Trophy className="w-4 h-4" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#102C4E]">
          Key Achievements &amp; Initiatives
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {achievementsData.map((item, index) => {
          const Icon = iconMap[item.iconName] || Trophy;
          const isWinner = item.title.includes('Winner');

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`p-5 rounded-2xl transition-all duration-300 border ${
                isWinner
                  ? 'bg-gradient-to-br from-[#071B35] to-[#102C4E] text-white border-[#087BFF]/50 shadow-lg shadow-[#087BFF]/10'
                  : 'bg-white text-[#102C4E] border-[#DCE7F2] card-shadow hover:card-shadow-hover hover:border-[#087BFF]/40'
              }`}
            >
              <div className="flex items-start gap-3.5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                    isWinner
                      ? 'bg-[#087BFF] text-white border-[#087BFF] shadow-sm'
                      : 'bg-[#DCE7F2]/60 text-[#087BFF] border-[#DCE7F2]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex-1">
                  <h4
                    className={`text-sm sm:text-base font-bold leading-snug mb-1 ${
                      isWinner ? 'text-white' : 'text-[#102C4E]'
                    }`}
                  >
                    {item.title}
                  </h4>

                  {item.context && (
                    <p
                      className={`text-xs leading-relaxed ${
                        isWinner ? 'text-[#DCE7F2]/80' : 'text-[#64748B]'
                      }`}
                    >
                      {item.context}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};


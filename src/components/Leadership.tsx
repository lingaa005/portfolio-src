import React from 'react';
import { motion } from 'motion/react';
import { profileData } from '../profileData';
import { Users, CheckCircle, Shield, Award, Sparkles, Star } from 'lucide-react';

export default function Leadership() {
  const leadership = profileData.leadership_experience;
  
  // We can also extract some leadership-focused achievements to enrich this section
  const leadershipAchievements = profileData.achievements.filter(ach => 
    ach.category.includes('Leadership') || 
    ach.category.includes('Speaker') || 
    ach.category.includes('Organizer') ||
    ach.title.includes('Associate') ||
    ach.title.includes('Speaker')
  );

  return (
    <div className="space-y-10 select-none">
      {/* Overview Block with an elegant quote or lead paragraph */}
      <div className="parchment-texture border border-amber-900/30 p-6 sm:p-8 rounded-lg relative overflow-hidden shadow-md">
        <div className="absolute top-2 right-4 text-stone-300 font-mono text-[9px] uppercase tracking-widest">
          Chronology Ledger // Sect-07
        </div>
        <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[#eedda0] via-[#b8862b] to-[#623f14] rounded-full border border-gold-400 p-0.5 flex items-center justify-center shrink-0 shadow-lg">
            <div className="w-full h-full bg-stone-900 rounded-full flex items-center justify-center text-[#f7eecf]">
              <Users className="w-6 h-6 text-gold-300" />
            </div>
          </div>
          
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-display font-bold text-lg text-stone-950 uppercase tracking-wide">
              Technical Orchestration & Team Governance
            </h4>
            <p className="font-serif italic text-stone-800 text-sm sm:text-base leading-relaxed max-w-2xl">
              "True leadership in system design does not lie in sovereign governance, but in empowering developers, aligning protocol coordinates, and fostering technical fluency across collaborative clusters."
            </p>
          </div>
        </div>
      </div>

      {/* Main Core Leadership Roles - Visualized as full-width robust ledger boards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {leadership.map((lead, idx) => {
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -4, shadow: "0 15px 30px rgba(0,0,0,0.5)" }}
              className="parchment-texture border border-amber-900/40 rounded-lg p-6 sm:p-8 relative overflow-hidden shadow flex flex-col justify-between"
            >
              {/* Ribbon Bookmark Detail */}
              <div className="absolute top-0 right-6 w-4 h-6 bg-gradient-to-b from-[#801010] to-[#4a0505] rounded-b-sm border-x border-red-950 shadow-inner z-10" />
              
              <div className="space-y-4">
                <div className="border-b border-amber-900/15 pb-3">
                  <span className="font-mono text-[10px] text-amber-800 tracking-wider uppercase block mb-1">
                    Leadership Mandate 0{idx + 1}
                  </span>
                  <h4 className="font-display font-black text-[#1c1511] text-lg sm:text-xl md:text-2xl tracking-wide uppercase leading-tight">
                    {lead.title}
                  </h4>
                </div>

                <ul className="space-y-3.5 pt-1">
                  {lead.activities.map((act, aIdx) => (
                    <li key={aIdx} className="flex gap-3 font-serif text-sm sm:text-base leading-relaxed italic text-stone-900">
                      <CheckCircle className="w-4 h-4 text-amber-800 shrink-0 mt-1 md:mt-0.5" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-6 pt-4 border-t border-dashed border-amber-900/20 text-[10px] font-mono text-stone-600 flex justify-between items-center">
                <span>VERIFIED SYSTEM // LEVEL_EXEC</span>
                <span>STATUS: ACCREDITED</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Auxiliary Communities & Public Speaking - Bringing the Achievements to Life */}
      {leadershipAchievements.length > 0 && (
        <div className="space-y-4 pt-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <h4 className="font-display text-sm sm:text-base text-amber-100 font-bold uppercase tracking-widest">
              Community Accolades & Technical Outspokenness
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {leadershipAchievements.map((ach, idx) => (
              <div
                key={idx}
                className="bg-[#171310] hover:bg-[#201a15] border border-amber-950/70 p-5 rounded-md flex flex-col justify-between transition-all duration-300 shadow-md group border-l-4 border-l-gold-500/60"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[9px] text-[#cca043] tracking-widest uppercase font-bold">
                      {ach.category}
                    </span>
                    <Star className="w-3.5 h-3.5 text-[#eedda0] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h5 className="font-display text-stone-100 text-sm font-semibold leading-snug group-hover:text-gold-200">
                    {ach.title}
                  </h5>
                </div>

                {ach.organization && (
                  <div className="mt-4 pt-2 border-t border-amber-950/40 text-[10px] font-mono text-[#e8dcc4]/50">
                    Host: {ach.organization}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

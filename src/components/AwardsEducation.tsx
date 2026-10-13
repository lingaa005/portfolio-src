import React from 'react';
import { profileData } from '../profileData';
import { Award, GraduationCap } from 'lucide-react';

export default function AwardsEducation() {
  const education = profileData.education;
  const achievements = profileData.achievements;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start select-none">
      
      {/* Column 1: Academic Charters (Cols 1-6) */}
      <div className="lg:col-span-6 space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="w-5 h-5 text-amber-500" />
          <h3 className="font-display text-lg text-amber-100 font-semibold uppercase tracking-widest">
            Academic Foundations
          </h3>
        </div>

        <div className="space-y-6">
          {education.map((edu, idx) => {
            return (
              <div
                key={idx}
                className="parchment-texture border border-amber-900/40 p-6 rounded-lg relative overflow-hidden shadow-md flex flex-col justify-between min-h-[160px]"
              >
                {/* Vintage stamp watermark background */}
                <div className="absolute -right-4 -bottom-4 text-stone-900/5 pointer-events-none font-display text-6xl">
                  {edu.year || (edu.duration ? edu.duration.end : '')}
                </div>

                <div>
                  <div className="flex justify-between items-start gap-3 border-b border-amber-900/10 pb-2 mb-3">
                    <h4 className="font-display font-bold text-base text-stone-900 pr-4">
                      {edu.institution}
                    </h4>
                    <span className="font-mono text-[9px] bg-stone-900/10 text-[#623f14] px-2 py-0.5 rounded uppercase font-semibold shrink-0">
                      {edu.location}
                    </span>
                  </div>

                  <p className="font-serif italic text-sm text-[#462c0e] font-medium mb-1">
                    {edu.degree || edu.qualification} {edu.field ? `— ${edu.field}` : ''}
                  </p>
                </div>

                <div className="flex justify-between items-center bg-[#2c1f16]/5 p-2 rounded-sm mt-3 border border-amber-900/10 text-xs text-stone-900 font-mono">
                  <span>
                    {edu.duration 
                      ? `Duration: ${edu.duration.start} - ${edu.duration.end}` 
                      : `Conferred: ${edu.year}`
                    }
                  </span>
                  
                  {edu.cgpa && (
                    <span className="font-bold text-[#b8862b]">
                      CGPA: {edu.cgpa} / 10.0
                    </span>
                  )}
                  {edu.percentage && (
                    <span className="font-bold text-[#b8862b]">
                      Mark: {edu.percentage}%
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Column 2: Milestones & Recognitions (Cols 7-12) */}
      <div className="lg:col-span-6 space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-amber-500" />
          <h3 className="font-display text-lg text-amber-100 font-semibold uppercase tracking-widest">
            Recognitions & Milestones
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {achievements.map((ach, idx) => {
            return (
              <div
                key={idx}
                className="bg-[#1a1512] hover:bg-[#251f1a] border border-amber-950 p-4 rounded flex items-center gap-4 transition-all duration-300 group shadow-md"
              >
                {/* Brass Plate Badge wrapper */}
                <div className="w-12 h-12 bg-gradient-to-br from-[#eedda0] via-[#b8862b] to-[#623f14] rounded-full border border-gold-400 p-0.5 flex items-center justify-center shrink-0 shadow-md">
                  <div className="w-full h-full bg-stone-900 rounded-full flex items-center justify-center text-[#f7eecf] font-display text-[10px] font-black italic">
                    KM
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[9px] text-[#cca043] tracking-widest uppercase block mb-0.5 font-bold">
                    {ach.category} {ach.organization ? `| ${ach.organization}` : ''}
                  </span>
                  <h4 className="font-display text-stone-100 text-sm font-semibold leading-tight group-hover:text-gold-200">
                    {ach.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}

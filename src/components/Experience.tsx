import React from 'react';
import { motion } from 'motion/react';
import { profileData } from '../profileData';
import { Calendar, Briefcase, Award, CheckCircle, ExternalLink } from 'lucide-react';

export default function Experience() {
  const experiences = profileData.professional_experience;

  return (
    <div className="relative pl-8 sm:pl-10 py-4">
      {/* The central Brass Spine timeline rod */}
      <div className="absolute top-0 bottom-0 left-[20px] sm:left-[28px] w-1 bg-gradient-to-b from-[#b8862b] via-[#623f14] to-[#1c1511]"></div>

      <div className="space-y-12">
        {experiences.map((exp, idx) => {
          return (
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              key={idx}
              className="relative"
            >
              {/* Connector Pin (Brass node) */}
              <div className="absolute left-[-24px] sm:left-[-24px] top-1 z-10 w-6 h-6 rounded-full bg-gradient-to-br from-[#eedda0] via-[#b8862b] to-[#462c0e] flex items-center justify-center shadow-lg border border-gold-400">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1c1511] border border-[#eedda0]"></div>
              </div>

              {/* Archived Record Body */}
              <div className="parchment-texture border border-amber-900/35 rounded-lg p-6 sm:p-8 flex flex-col md:flex-row gap-6 justify-between items-start relative overflow-hidden shadow-md">
                {/* Archive Docket ID at top corner */}
                <div className="absolute top-0 right-0 bg-[#3b2a1a]/95 text-[#f7eecf] font-mono text-[9px] px-3 py-1 rounded-bl uppercase tracking-widest border-l border-b border-amber-900/20">
                  TRANS-0{idx + 1} // {exp.duration.start}
                </div>

                {/* Left Side: Designation & Corp */}
                <div className="md:w-1/3 space-y-4">
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#cca043] font-bold block">
                      {exp.employment_type}
                    </span>
                    <h3 className="font-display font-black text-xl text-stone-900 leading-tight">
                      {exp.designation}
                    </h3>
                    <p className="font-serif italic text-lg text-[#623f14] font-medium">
                      {exp.organization}
                    </p>
                  </div>

                  {/* Dates block */}
                  <div className="flex items-center gap-2 bg-[#2c1f16]/5 border border-amber-900/10 px-3 py-1.5 rounded w-fit text-stone-800 font-mono text-xs">
                    <Calendar className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>
                      {exp.duration.start} — {exp.duration.end === "Present" || !exp.duration.end ? "Present" : exp.duration.end}
                    </span>
                  </div>

                  {/* Tech stack badges index */}
                  <div className="space-y-1.5">
                    <span className="font-mono text-[9px] uppercase text-stone-400 block tracking-widest">
                      Utilized Arsenal:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="bg-[#2c1f16] text-[#eedda0] border border-amber-950 px-2 py-0.5 rounded text-[10px] font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side: Log of Responsibilities */}
                <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-amber-900/15 pt-6 md:pt-0 md:pl-8 space-y-4">
                  <span className="font-mono text-[10px] uppercase text-amber-950 font-bold tracking-widest block">
                    Recorded Log of Operations:
                  </span>

                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2 text-stone-900 font-serif text-sm leading-relaxed">
                        <CheckCircle className="w-4.5 h-4.5 text-[#b8862b] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

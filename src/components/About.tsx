import React from 'react';
import { motion } from 'motion/react';
import { profileData } from '../profileData';
import { Compass, BookOpen, Quote, Shield } from 'lucide-react';

export default function About() {
  const summary = profileData.professional_summary;
  const profile = profileData.candidate_profile;

  return (
    <div className="parchment-texture border border-amber-800/40 p-6 sm:p-10 rounded-sm shadow-xl relative overflow-hidden select-none">
      {/* Decorative center grid lines and vintage stamps */}
      <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-amber-900/10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-amber-900/10 pointer-events-none" />

      {/* Decorative compass seal stamped onto the paper */}
      <div className="absolute top-8 right-8 text-[#b8862b]/10 select-none pointer-events-none transform rotate-12">
        <Compass className="w-32 h-32" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* Editorial column 1: Picture/Stat Block (Cols 1-4) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Portrait frame with vintage border */}
          <div className="relative group p-6 bg-[#e8deca] border border-amber-800/30 rounded-sm shadow-md overflow-hidden flex flex-col items-center justify-center">
            {/* Inner frame lines */}
            <div className="absolute inset-2 border border-amber-800/20" />
            
            {/* Retro engraving/etching overlay effect */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-stone-900/15 pointer-events-none" />
            
            <div className="text-center z-10 w-full">
              <Compass className="w-12 h-12 text-[#623f14] mx-auto mb-4 animate-subtle-spin opacity-80" />
              <span className="font-display font-medium text-amber-900 text-sm tracking-[0.2em] block mb-1">
                KASILINGAM MARUTHAMUTHU
              </span>
              <p className="font-mono text-[9px] text-[#2b221a]/70 uppercase tracking-widest pl-1">
                ESTD. TIRUVANNAMALAI
              </p>
              <div className="h-[1px] w-2/3 bg-amber-900/20 mx-auto my-3" />
              
              <div className="text-xs font-mono text-amber-950 leading-relaxed text-left space-y-2 max-w-[220px] mx-auto">
                <p>◆ PLACE: {profile.location.city}, {profile.location.state}</p>
                <p>◆ COUNTRY: {profile.location.country}</p>
                <p>◆ BASE: Python & Django Stack</p>
              </div>
            </div>
          </div>

          {/* Core Values Ledger card */}
          <div className="bg-[#ebd9bd]/50 border border-[#b8862b]/30 p-5 rounded-sm">
            <h4 className="font-display text-xs text-amber-950 font-semibold tracking-wider mb-3 uppercase flex items-center gap-2">
              <Quote className="w-4 h-4 text-amber-800" />
              <span>Architectural Values</span>
            </h4>
            
            <div className="space-y-3">
              <div className="flex gap-2.5 items-start">
                <Shield className="w-4 h-4 text-[#623f14] shrink-0 mt-0.5" />
                <p className="font-serif italic text-xs text-stone-900 leading-normal">
                  <strong>Resilience Over Features:</strong> Always build backend systems with robust circuit breakers and failovers to defend data boundaries.
                </p>
              </div>
              <div className="flex gap-2.5 items-start">
                <BookOpen className="w-4 h-4 text-[#623f14] shrink-0 mt-0.5" />
                <p className="font-serif italic text-xs text-stone-900 leading-normal">
                  <strong>Pristine Simplicity:</strong> Highly decoupled workflows with domain separation are significantly easier to scale and maintain.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial column 2: Narrative text block (Cols 5-12) */}
        <div className="lg:col-span-8 space-y-8 flex flex-col justify-between h-full">
          <div className="space-y-6">
            <div>
              
              <h3 className="font-display text-2xl sm:text-3xl text-stone-900 font-bold tracking-wide">
                Professional Summary
              </h3>
              <div className="h-0.5 w-24 bg-[#b8862b] mt-2 mb-4" />
            </div>

            {/* Highly readable, comfortable typography size and spacing */}
            <div className="text-stone-950 text-lg sm:text-xl lg:text-2xl font-serif font-medium leading-relaxed text-justify first-letter:text-6xl first-letter:font-bold first-letter:text-amber-900 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              {summary.overview}
            </div>
          </div>

          {/* Short Signature statement */}
          <div className="pt-8 border-t border-dashed border-amber-900/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-auto">
            <div className="font-serif italic text-sm text-stone-850">
              "Code grows obsolete rapidly. Sound architectural boundaries endure eternity."
            </div>
            
            <div className="flex flex-col items-end">
              <span className="font-display text-stone-900 text-lg font-bold italic tracking-wider">
                KASILINGAM.M
              </span>
              <span className="font-mono text-[8px] text-stone-500 uppercase tracking-widest block">
                Verification Ledger Approved
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

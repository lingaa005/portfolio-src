import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Compass, Star, ChevronDown, Award } from 'lucide-react';

interface DeskIntroProps {
  onOpen: () => void;
}

export default function DeskIntro({ onOpen }: DeskIntroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse positions (-0.5 to 0.5)
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    
    // Play sound or other effects if any, trigger final open after animation completes (1.6s)
    setTimeout(() => {
      localStorage.setItem('archive-viewed', 'true');
      onOpen();
    }, 1800);
  };

  return (
    <div id="desk-wrapper" className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden desk-background">
      {/* Dynamic Ambient Spotlight overlay */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
        style={{
          background: `radial-gradient(ellipse 65% 65% at ${50 + mousePos.x * 30}% ${50 + mousePos.y * 30}%, transparent 20%, rgba(0,0,0,0.85) 80%)`
        }}
      />

      {/* Floating dust particle effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-amber-200 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/2 left-2/3 w-1.5 h-1.5 bg-amber-100 rounded-full animate-float" style={{ animationDelay: '1.5s', animationDuration: '8s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-amber-300 rounded-full animate-float" style={{ animationDelay: '3s', animationDuration: '5s' }}></div>
        <div className="absolute top-1/3 left-3/4 w-2 h-2 bg-amber-200 rounded-full animate-float" style={{ animationDelay: '4.5s', animationDuration: '7s' }}></div>
      </div>

      {/* Intro Skip button */}
      <div className="absolute top-6 right-6 z-50">
        <button 
          id="skip-intro-btn"
          onClick={() => {
            localStorage.setItem('archive-viewed', 'true');
            onOpen();
          }}
          className="px-4 py-2 font-mono text-xs tracking-widest text-amber-100/60 uppercase transition-all duration-300 border border-amber-900/40 rounded bg-stone-900/80 hover:bg-gold-800 hover:text-amber-100 hover:border-gold-500 hover:shadow-[0_0_10px_rgba(184,134,43,0.3)] cursor-pointer"
        >
          Skip Presentation
        </button>
      </div>

      {/* Interactive Cinematic Desk Object */}
      <motion.div
        id="desk-interactive-container"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative flex flex-col items-center justify-center max-w-lg w-full px-4"
      >
        {/* Instruction Note Card floating in background */}
        <motion.div 
          className="mb-8 text-center"
          animate={{ opacity: isOpening ? 0 : 1, y: isOpening ? -20 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-display font-medium text-amber-500/80 tracking-[0.25em] text-xs uppercase block mb-1">
            Archival Transmittal
          </span>
          <p className="font-serif italic text-stone-400 text-sm">
            Hover to inspect. Crack the seal to unfold the architect's records.
          </p>
        </motion.div>

        {/* The Sealed Envelope Container */}
        <motion.div
          id="envelope-main-element"
          onClick={handleOpen}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            transformStyle: "preserve-3d",
          }}
          animate={isOpening ? {
            rotateX: 45,
            scale: 1.15,
            y: 80,
            opacity: [1, 1, 0.4, 0],
            filter: "blur(2px)",
          } : {
            rotateY: mousePos.x * 25,
            rotateX: -mousePos.y * 25,
            z: isHovered ? 40 : 0
          }}
          transition={isOpening ? { duration: 1.6, ease: "easeInOut" } : { type: "spring", stiffness: 100, damping: 20 }}
          className="relative w-full aspect-[1.4/1] sm:aspect-[1.5/1] bg-[#ece2cb] rounded-sm shadow-[0_30px_70px_rgba(0,0,0,0.85),_inset_0_0_15px_rgba(100,70,40,0.15)] flex flex-col justify-between p-5 sm:p-8 border border-amber-900/20 cursor-pointer overflow-hidden group select-none"
        >
          {/* Subtle paper lines/texture interior shadows on envelope */}
          <div className="absolute inset-0 parchment-texture opacity-45 mix-blend-multiply pointer-events-none" />
          
          {/* Envelope fold overlays */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            {/* Top flap line */}
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M 0,0 L 50,55 L 100,0" fill="none" stroke="#5c432d" strokeWidth="0.75" />
              <path d="M 0,100 L 50,45 L 100,100" fill="none" stroke="#5c432d" strokeWidth="0.75" />
            </svg>
          </div>

          {/* Letterhead address - calligraphic alignment */}
          <div className="z-10 flex justify-between items-start font-mono text-[9px] sm:text-[10px] text-stone-800/80 tracking-wider">
            <div className="flex items-center gap-1.5 uppercase">
              <Compass className="w-3.5 h-3.5 text-amber-800 animate-subtle-spin" />
              <span>Record ID: #799_2027</span>
            </div>
            <div className="text-right">
              <span>EST. TM-606601</span>
            </div>
          </div>

          <div className="z-10 flex flex-col items-center justify-center my-auto py-2">
            <div className="text-center px-2">
              <h2 className="font-display text-[#1c1511] font-bold text-sm sm:text-base md:text-xl tracking-[0.12em] sm:tracking-[0.2em] mb-1 uppercase break-words leading-tight">
                KASILINGAM MARUTHAMUTHU
              </h2>
              <p className="font-serif italic text-amber-900 text-[8px] sm:text-xs tracking-widest uppercase">
                SYSTEM DESIGN & BACKEND COMPILATION
              </p>
            </div>
          </div>

          {/* Recruiter stamp info */}
          <div className="z-10 flex justify-between items-end font-serif">
            <div className="text-left leading-relaxed">
              <p className="text-[10px] font-sans uppercase tracking-[0.15em] text-stone-500">Addressed To:</p>
              <p className="text-[#3b2a1a] font-semibold text-xs tracking-wide">The Engineering Guild</p>
              <p className="text-[10px] text-stone-600 italic">Distinguished Reviewers & Recruiters</p>
            </div>
            
            {/* Stamp marker */}
            <div className="w-10 h-10 border border-dashed border-amber-900/40 rounded flex items-center justify-center text-amber-900/60 p-1 select-none">
              <Star className="w-4 h-4 fill-amber-900/10" />
            </div>
          </div>

          {/* The Wax Seal sitting in the middle of envelope split */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div
              id="wax-seal-button"
              animate={isOpening ? {
                scale: [1, 1.2, 0.7],
                rotate: 25,
                opacity: [1, 0.9, 0],
              } : {
                scale: isHovered ? 1.08 : 1,
              }}
              transition={{ duration: 0.8 }}
              className="w-20 h-20 rounded-full wax-seal-bg flex items-center justify-center relative shadow-[0_10px_20px_rgba(0,0,0,0.6)] animate-seal-pulse"
            >
              {/* Outer wax drip texture with CSS */}
              <div className="absolute inset-0.5 rounded-full border border-red-400/30"></div>
              {/* Seal Ring */}
              <div className="w-14 h-14 rounded-full border-2 border-dashed border-red-950/20 flex items-center justify-center bg-red-950/10">
                {/* Monogram */}
                <span className="font-display font-black text-amber-100 tracking-tighter text-xl italic drop-shadow-[1px_2px_2px_rgba(0,0,0,0.8)] select-none">
                  KM
                </span>
              </div>
              
              {/* Crack overlay during opening */}
              {isOpening && (
                <div className="absolute inset-0 bg-transparent flex items-center justify-center">
                  <div className="w-full h-1 bg-red-950/80 rotate-45 transform scale-x-125"></div>
                  <div className="w-full h-1 bg-red-950/80 -rotate-45 transform scale-x-125"></div>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Out-sliding letter preview sheet (animates up and triggers zooming) */}
        <AnimatePresence>
          {isOpening && (
            <motion.div
              initial={{ y: 150, scale: 0.85, opacity: 0 }}
              animate={{ y: -80, scale: 1.05, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
              className="absolute inset-x-8 h-96 parchment-texture shadow-[0_20px_50px_rgba(0,0,0,0.9)] rounded border border-amber-800/40 p-6 flex flex-col justify-between"
            >
              <div className="border border-amber-900/30 p-4 h-full flex flex-col justify-between italic text-amber-950 text-center font-serif">
                <span className="text-[10px] tracking-widest font-mono uppercase block text-amber-800">
                  Transcribing System Mindset
                </span>
                
                <h3 className="font-display font-medium text-lg text-amber-950">
                  Accessing Complete Dossier
                </h3>
                
                <p className="text-sm leading-relaxed max-w-sm mx-auto my-4 text-stone-800/90 font-medium">
                  "Architecture is not only about structuring modules, but establishing a robust flow that endures high pressure with absolute reliability."
                </p>

                <div className="mt-2 flex items-center justify-center gap-1 text-gold-700 animate-pulse text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-600 inline-block"></span>
                  <span>Authenticating Guild Credentials...</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

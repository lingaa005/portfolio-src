/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Lock, 
  MapPin, 
  Mail, 
  Phone, 
  Compass, 
  BookOpen, 
  Briefcase, 
  Wrench, 
  FolderGit2, 
  Layers, 
  Award, 
  Printer, 
  ChevronRight, 
  RefreshCw, 
  Menu, 
  X,
  FileDown,
  Users,
  ExternalLink
} from 'lucide-react';

import { profileData } from './profileData';
import DeskIntro from './components/DeskIntro';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AwardsEducation from './components/AwardsEducation';
import Leadership from './components/Leadership';
import ContactForm from './components/ContactForm';

const specialities = [
  "Backend Engineering",
  "Distributed Systems",
  "API Architecture",
  "Cloud Infrastructure",
  "AI-Powered Applications",
  "System Design"
];

export default function App() {
  const [introOpened, setIntroOpened] = useState<boolean>(false);
  const [currentSpecialtyIndex, setCurrentSpecialtyIndex] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);
  const leadershipRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Load intro state
  useEffect(() => {
    const isViewed = localStorage.getItem('archive-viewed');
    if (isViewed === 'true') {
      setIntroOpened(true);
    }
  }, []);

  // Specialty rotation timing
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpecialtyIndex((prev) => (prev + 1) % specialities.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (!introOpened) return;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.pageYOffset / totalScroll);
      }

      // Check current section active state
      const scrollPos = window.pageYOffset + 240;
      
      const refs = [
        { id: 'hero', ref: heroRef },
        { id: 'about', ref: aboutRef },
        { id: 'experience', ref: experienceRef },
        { id: 'skills', ref: skillsRef },
        { id: 'projects', ref: projectsRef },
        { id: 'awards', ref: awardsRef },
        { id: 'leadership', ref: leadershipRef },
        { id: 'contact', ref: contactRef }
      ];

      for (const section of refs) {
        const el = section.ref.current;
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [introOpened]);

  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement | null>) => {
    setIsMobileMenuOpen(false);
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop - 85,
        behavior: 'smooth'
      });
    }
  };

  const handleResetArchive = () => {
    localStorage.removeItem('archive-viewed');
    setIntroOpened(false);
  };

  const printResume = () => {
    window.print();
  };

  if (!introOpened) {
    return <DeskIntro onOpen={() => setIntroOpened(true)} />;
  }

  const navItems = [
    { id: 'hero', label: 'Archival Ledger', icon: <Compass className="w-4 h-4" />, ref: heroRef },
    { id: 'about', label: 'The Architect', icon: <BookOpen className="w-4 h-4" />, ref: aboutRef },
    { id: 'experience', label: 'Journey Path', icon: <Briefcase className="w-4 h-4" />, ref: experienceRef },
    { id: 'skills', label: 'Engineering Arsenal', icon: <Wrench className="w-4 h-4" />, ref: skillsRef },
    { id: 'projects', label: 'Project Dossiers', icon: <FolderGit2 className="w-4 h-4" />, ref: projectsRef },
    { id: 'awards', label: 'Credentials', icon: <Award className="w-4 h-4" />, ref: awardsRef },
    { id: 'leadership', label: 'Leadership Chronicles', icon: <Users className="w-4 h-4" />, ref: leadershipRef },
    { id: 'contact', label: 'Correspondence', icon: <Mail className="w-4 h-4" />, ref: contactRef }
  ];

  return (
    <div className="min-h-screen desk-background text-[#e8dcc4] font-sans selection:bg-gold-800 selection:text-gold-100 flex flex-col justify-between overflow-x-hidden relative">
      
      {/* Decorative desktop edge lines */}
      <div className="fixed inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-800 via-gold-500 to-[#1a1a1a] z-50 shadow-sm"></div>
      
      {/* Ambient soft glow on sides represent elegant classic lamps */}
      <div className="fixed top-20 -left-64 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-20 -right-64 w-96 h-96 bg-gold-400/5 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* HEADER NAV RIBBON */}
      <header className="sticky top-0 z-40 bg-[#0d0d0d]/95 border-b border-gold-500/30 backdrop-blur-md px-4 sm:px-8 py-4 flex items-center justify-between shadow-md">
        {/* Logo Monogram */}
        <div 
          onClick={() => scrollToSection(heroRef)}
          className="flex items-center gap-2.5 cursor-pointer select-none group"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#eedda0] via-[#b8862b] to-[#462c0e] flex items-center justify-center p-0.5 border border-gold-400 group-hover:shadow-[0_0_12px_rgba(184,134,43,0.5)] transition-all duration-300">
            <span className="font-display font-black text-xs text-stone-900 italic">KM</span>
          </div>
          <div className="leading-tight text-left">
            <p className="font-display text-xs text-stone-100 font-bold tracking-[0.1em] uppercase group-hover:text-gold-200 transition-colors">
              KASILINGAM.M
            </p>
            <p className="font-mono text-[8px] text-stone-400 uppercase tracking-widest leading-none">
              Software Architect
            </p>
          </div>
        </div>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.ref)}
              className={`px-3 py-1.5 rounded text-xs font-mono tracking-wider transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                activeSection === item.id 
                  ? 'bg-gold-800 text-amber-100 shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)] border border-gold-600'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-900/40'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action button: lock seal and resume */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => setIsResumeModalOpen(true)}
            className="px-4.5 py-1.5 rounded brass-button text-xs font-mono font-bold tracking-wider text-stone-900 uppercase flex items-center gap-1.5 cursor-pointer"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume Ledger</span>
          </button>

          <button
            onClick={handleResetArchive}
            title="Lock Archive (View Seal Sequence)"
            className="p-1.5 rounded border border-amber-950 text-stone-400 hover:text-amber-500 hover:border-amber-700 transition-colors bg-stone-950/50 cursor-pointer"
          >
            <Lock className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu triggers */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setIsResumeModalOpen(true)}
            className="p-2 rounded bg-gold-800 text-amber-100 border border-gold-600"
          >
            <FileDown className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded border border-amber-950 text-stone-300 bg-stone-950/60"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* MOBILE NAV DROP DOWN */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 h-screen mt-[-1px] z-30 bg-[#0f0e0c]/98 border-b border-amber-950/90 py-6 px-6 sm:hidden flex flex-col justify-between"
          >
            <div className="space-y-3 pt-6">
              <span className="font-mono text-[9px] text-[#cca043] tracking-widest uppercase block mb-2 px-2">
                INDEX CHRONOLOGY
              </span>
              <div className="grid grid-cols-1 gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.ref)}
                    className={`px-4 py-3 rounded text-left font-mono text-sm uppercase tracking-wider flex items-center gap-3 ${
                      activeSection === item.id
                        ? 'bg-gold-800 text-stone-900 font-bold border border-gold-600'
                        : 'text-stone-300 hover:bg-stone-900/60'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4 pb-20">
              <button
                onClick={handleResetArchive}
                className="w-full py-2.5 rounded border border-amber-900/50 text-stone-400 font-mono text-xs uppercase flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" />
                <span>Lock & View Wax Seal</span>
              </button>
              <p className="text-center font-serif text-[10px] text-stone-600">
                KASILINGAM.M © 2026 Archive
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MECHANICAL BRASS SCROLL PROGRESS DEPTH METER */}
      <div className="fixed right-6 bottom-6 z-40 hidden md:flex flex-col items-center gap-2 select-none pointer-events-none">
        <span className="font-mono text-[8px] text-[#eedda0] tracking-widest uppercase">Depth Gauge</span>
        <div className="w-7 h-44 bg-stone-950 rounded-full border border-amber-900/40 p-1 relative shadow-lg">
          <div className="absolute inset-x-1 top-1 bottom-1 border border-dashed border-amber-950/60 rounded-full" />
          
          {/* Depth bar indicator */}
          <div 
            className="absolute bottom-1 inset-x-1.5 bg-gradient-to-t from-gold-900 via-gold-500 to-amber-200 rounded-full transition-all duration-100 shadow-[0_0_10px_rgba(184,134,43,0.4)]"
            style={{ height: `${Math.round(scrollProgress * 95)}%` }}
          />

          {/* Depth dial percent indicator reading like vintage pressure clock */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-stone-900 text-[#eedda0] font-mono text-[8px] border border-amber-800 px-1 rounded shadow-md z-10 font-bold">
            {Math.round(scrollProgress * 100)}%
          </div>
        </div>
      </div>

      {/* FLOATING INDEX CHECKLIST (CHRONICLE NAVIGATOR) (DESKTOP ONLY) */}
      <aside className="fixed left-6 top-1/4 z-10 hidden xl:flex flex-col gap-1.5 w-60 bg-[#1a1a1a]/95 h-auto rounded border border-gold-500/30 p-4 backdrop-blur-sm select-none">
        <div className="border-b border-gold-500/20 pb-2.5 mb-3 flex items-center gap-2">
          <Compass className="w-4.5 h-4.5 text-gold-500 animate-subtle-spin" />
          <span className="font-display font-semibold text-[#e8dcc4] text-xs tracking-wider uppercase">
            Scribe Index Chronology
          </span>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.ref)}
                className="w-full text-left font-mono text-[10px] uppercase tracking-wider py-1.5 px-2 rounded-sm flex items-center justify-between group transition-colors duration-200 cursor-pointer text-stone-400 hover:text-stone-100 hover:bg-stone-900/60"
              >
                <div className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'bg-gold-500 ring-2 ring-gold-800' 
                      : 'bg-stone-700 group-hover:bg-amber-800'
                  }`} />
                  <span className={isActive ? 'text-gold-200 font-bold' : ''}>{item.label}</span>
                </div>
                <span>{isActive ? '◆' : '➔'}</span>
              </button>
            );
          })}
        </nav>

        <div className="border-t border-gold-500/20 mt-4 pt-3 text-[9px] font-mono leading-relaxed text-[#e8dcc4]/50">
          <p>Coord: Tiruvannamalai, IN</p>
          <p className="italic">Database: PostgreSQL Ledger</p>
        </div>
      </aside>

      {/* MAIN CONTAINER FRAME */}
      <main className="relative z-10 max-w-4xl w-full mx-auto px-4 md:px-8 py-10 space-y-24 scroll-mt-20">
        
        {/* HERO SECTION DECK */}
        <section id="hero" ref={heroRef} className="scroll-mt-24">
          <div className="parchment-texture border border-amber-800/40 p-6 sm:p-12 rounded-sm shadow-2xl relative overflow-hidden flex flex-col justify-between align-stretch min-h-[500px]">
            {/* Watermarks */}
            <div className="absolute -left-12 -bottom-12 text-stone-900/5 select-none pointer-events-none transform -rotate-12">
              <Compass className="w-64 h-64" />
            </div>

            <div className="absolute top-4 right-4 text-stone-500 font-mono text-[9px] uppercase tracking-widest bg-stone-950/5 border border-amber-900/10 px-2 py-1 rounded">
              LIV-EST: {new Date().getFullYear()} // ACTIVE
            </div>

            <div className="space-y-4 text-center sm:text-left mt-8">
              <span className="font-mono text-xs sm:text-sm text-amber-800 tracking-[0.3em] uppercase block">
                The Sovereign Portfolio & Dossier Of
              </span>
              
              <h1 className="font-display font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-900 tracking-wide uppercase leading-none italic break-words">
                {profileData.candidate_profile.full_name}
              </h1>

              {/* ROTATING SPECIALIZATION BANNER */}
              <div className="h-10 sm:h-12 flex items-center justify-center sm:justify-start">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSpecialtyIndex}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -15, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="font-serif italic text-xl sm:text-2xl text-[#623f14] font-medium tracking-wide flex items-center gap-2 justify-center sm:justify-start"
                  >
                    <span>✦</span>
                    <span>{specialities[currentSpecialtyIndex]}</span>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="h-[1px] w-full bg-gradient-to-r from-amber-900/30 via-amber-900/10 to-transparent my-6" />

              <p className="font-serif text-stone-800 text-base sm:text-lg leading-relaxed max-w-2xl text-justify">
                "An archival record indexing production-grade backend engineering, microservices architectures, transactional safety bounds, and secure solution layouts."
              </p>
            </div>
            

            {/* Quick Hero Buttons (resemble engraved plaques) */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start items-center">
              <button
                _id="hero-view-projects"
                onClick={() => scrollToSection(projectsRef)}
                className="px-6 py-3 bg-[#2c1f16] text-[#eedda0] hover:bg-stone-950 font-mono text-xs uppercase tracking-widest rounded-sm shadow-md transition-all duration-300 border border-amber-900/40 flex items-center gap-2 cursor-pointer"
              >
                <span>View Project Dossiers</span>
                <ChevronRight className="w-4 h-4 text-amber-500" />
              </button>

              <button
                _id="hero-contact-correspondence"
                onClick={() => scrollToSection(contactRef)}
                className="px-6 py-3 bg-transparent text-[#2b221a] hover:bg-[#ebdcb9]/40 font-mono text-xs uppercase tracking-widest rounded-sm border border-[#2b221a]/30 transition-all duration-200 cursor-pointer"
              >
                <span>Write Correspondence</span>
              </button>

              <button
                _id="hero-download-resume"
                onClick={() => setIsResumeModalOpen(true)}
                className="px-5 py-2.5 bg-gradient-to-r from-[#eedda0]/20 to-transparent hover:from-[#eedda0]/40 text-[#462c0e] font-mono text-[11px] uppercase tracking-wider rounded border border-[#623f14]/30 transition-all duration-200 cursor-pointer flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Examine Resume Ledger</span>
              </button>
              <div className="z-10 bg-black/60 border border-[#b8862b]/20 p-4 rounded-sm flex items-center gap-3 backdrop-blur max-w-sm">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <div className="font-mono leading-none">
                <a 
                  href="/archive/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-bold text-[8.5px] text-[#eedda0] hover:text-[#eedda0]/80 hover:underline mt-1.5 flex items-center gap-1 uppercase tracking-wider"
                >
                  PROJECT ARCHIVE ACCESS <ExternalLink className="w-3 h-3 text-[8px]" />
                </a>
              </div>
            </div>
            </div>

            {/* Micro-Interaction Coordinates */}
            <div className="mt-12 pt-6 border-t border-amber-900/10 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-[#623f14] gap-2">
              <p className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-800" />
                <span>Base: {profileData.candidate_profile.location.city}, India</span>
              </p>
              <div className="flex gap-4">
                <span phoneto="+91 9486856337">Signal Index: +91 9486856337</span>
                <span>Email: kasilingamtvm@gmail.com</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT CHRONICLE SECTION */}
        <section id="about" ref={aboutRef} className="scroll-mt-24 space-y-6">
          <div className="text-center md:text-left space-y-2">
            <span className="font-mono text-xs text-amber-500/80 uppercase tracking-[0.2em]">Operational Scribe</span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-stone-100 tracking-wide uppercase">
              The Engineer Behind The Manuscript
            </h2>
          </div>
          <About />
        </section>

        {/* TIMELINE PATH SECTION */}
        <section id="experience" ref={experienceRef} className="scroll-mt-24 space-y-6">
          <div className="text-center md:text-left space-y-2">
            <span className="font-mono text-xs text-amber-500/80 uppercase tracking-[0.2em]">Verified Record Log</span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-stone-100 tracking-wide uppercase">
              Professional Journey
            </h2>
          </div>
          <Experience />
        </section>

        {/* TECHNICAL ARSENAL SECTION */}
        <section id="skills" ref={skillsRef} className="scroll-mt-24 space-y-6">
          <div className="text-center md:text-left space-y-2">
            <span className="font-mono text-xs text-amber-500/80 uppercase tracking-[0.2em]">Construct Catalog</span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-stone-100 tracking-wide uppercase">
              Engineering Arsenal
            </h2>
          </div>
          <Skills />
        </section>

        {/* PROJECT DOSSIERS SECTION */}
        <section id="projects" ref={projectsRef} className="scroll-mt-24 space-y-6">
          <div className="text-center md:text-left space-y-2">
            <span className="font-mono text-xs text-amber-500/80 uppercase tracking-[0.2em]">Archived Patents</span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-stone-100 tracking-wide uppercase">
              PROJECTS
            </h2>
          </div>
          <Projects />
        </section>

        {/* CREDENTIALS SECTION */}
        <section id="awards" ref={awardsRef} className="scroll-mt-24 space-y-6">
          <div className="text-center md:text-left space-y-2">
            <span className="font-mono text-xs text-amber-500/80 uppercase tracking-[0.2em]">Charters & Stamps</span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-stone-100 tracking-wide uppercase">
              Academic Foundations & Recognitions
            </h2>
          </div>
          <AwardsEducation />
        </section>

        {/* LEADERSHIP SECTION */}
        <section id="leadership" ref={leadershipRef} className="scroll-mt-24 space-y-6">
          <div className="text-center md:text-left space-y-2">
            <span className="font-mono text-xs text-amber-500/80 uppercase tracking-[0.2em]">Sovereign Commands</span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-stone-100 tracking-wide uppercase">
              Leadership Chronicles
            </h2>
          </div>
          <Leadership />
        </section>

        {/* CORRESPONDENCE SECTION */}
        <section id="contact" ref={contactRef} className="scroll-mt-24 space-y-6">
          <div className="text-center md:text-left space-y-2">
            <span className="font-mono text-xs text-amber-500/80 uppercase tracking-[0.2em]">Seal & Transmit</span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-stone-100 tracking-wide uppercase">
              Correspondence
            </h2>
          </div>
          <ContactForm />
        </section>

      </main>

      {/* FOOTER */}
      <footer className="relative mt-20 border-t border-gold-500/30 bg-[#1a1a1a] px-6 sm:px-12 py-10 z-10 text-[#e8dcc4]/50 font-mono text-xs select-none shadow-inner">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left space-y-1">
            <p className="font-display font-medium text-[#e8dcc4]/85">
              KASILINGAM.M — The Engineer's Archive
            </p>
            <p className="text-[10px] text-[#e8dcc4]/40">
              Interactive Archival Portfolio. Conceived with React 19, TS, and Tailwind CSS.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => scrollToSection(heroRef)}
              className="text-[#eedda0] hover:text-white transition-colors cursor-pointer"
            >
              Back to Ledger Head
            </button>
            <span className="text-stone-700">|</span>
            <button
              onClick={handleResetArchive}
              className="text-stone-400 hover:text-amber-500 transition-colors cursor-pointer"
            >
              Re-view Intro Seal
            </button>
          </div>
        </div>
      </footer>

      {/* ARCHIVAL RESUME LEDGER PRINTABLE MODAL */}
      <AnimatePresence>
        {isResumeModalOpen && (
          <div id="resume-ledger-modal" className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white text-stone-900 max-w-4xl w-full p-5 sm:p-10 my-6 sm:my-0 rounded shadow-2xl relative max-h-[90vh] overflow-y-auto print:border-none print:shadow-none print:p-0 print:max-h-none"
            >
              {/* Controls bar (Hidden during print) */}
              <div className="flex justify-between items-center mb-8 border-b border-stone-200 pb-4 print:hidden gap-4">
                <div className="flex items-center gap-2">
                  <Printer className="w-5 h-5 text-amber-800" />
                  <span className="font-sans font-bold text-sm tracking-wide text-stone-800 uppercase">
                    Official Transmittal Copy (Web Print Layout)
                  </span>
                </div>
                
                <div className="flex gap-3">
                  <button
                    id="print-ledger-btn"
                    onClick={printResume}
                    className="px-5 py-2 bg-stone-900 text-stone-100 hover:bg-stone-800 font-mono text-xs rounded uppercase tracking-wider cursor-pointer shadow font-bold"
                  >
                    <span>PRINT</span>
                  </button>
                  <button
                    id="close-ledger-btn"
                    onClick={() => setIsResumeModalOpen(false)}
                    className="p-2 border border-stone-300 hover:bg-stone-100 rounded text-stone-600 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Printable Resume Content - Sequential PDF-like linear ledger layout */}
              <div className="space-y-6 text-stone-900 font-sans print:text-black">
                
                {/* Header Name & Contact Info Centered */}
                <div className="text-center space-y-2 pb-4">
                  <h2 className="font-sans text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-stone-950 uppercase break-all">
                    KASILINGAM MARUTHAMUTHU
                  </h2>
                  
                  {/* Contact Row Info */}
                  <div className="flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-4 gap-y-1 text-[11px] sm:text-xs text-stone-700 font-medium pt-1">
                    <p>Tiruvannamalai, Tamil Nadu</p>
                    <span className="opacity-60">•</span>
                    <p>+91 9486856337</p>
                    <span className="opacity-60">•</span>
                    <p className="break-all">kasilingamtvm@gmail.com</p>
                  </div>
                  
                  {/* Digital Links Row */}
                  <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-x-4 gap-y-1 text-[11px] sm:text-xs text-stone-800 font-semibold pt-1 text-center font-mono">
                    <a href="https://www.linkedin.com/in/kasilingam-maruthamuthu" target="_blank" rel="noreferrer" className="hover:underline break-all">
                      linkedin.com/in/kasilingam-maruthamuthu
                    </a>
                    <span className="hidden sm:inline opacity-60">|</span>
                    <a href="https://www.github.com/lingaa005" target="_blank" rel="noreferrer" className="hover:underline break-all">
                      github.com/lingaa005
                    </a>
                  </div>
                </div>

                {/* 1. PROFESSIONAL SUMMARY Section */}
                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-stone-950 border-b-2 border-stone-900 pb-0.5">
                    Professional Summary
                  </h3>
                  <p className="text-xs text-stone-800 leading-relaxed text-justify">
                    Software Engineer and System Architect with experience in backend development, scalable API design, automation systems, and cloud-based applications. Skilled in building reliable software solutions, designing maintainable architectures, and developing products that solve real-world problems. Passionate about software engineering, system design, and scalable backend technologies.
                  </p>
                </div>

                {/* 2. TECHNICAL SKILLS Section */}
                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-stone-950 border-b-2 border-stone-900 pb-0.5">
                    Technical Skills
                  </h3>
                  <ul className="text-xs text-stone-800 pl-4 list-disc space-y-1">
                    <li><strong>Languages:</strong> Python, Java, C++, C,C#</li>
                    <li><strong>Frameworks:</strong> Django, Flask, Node.js, Express.js,.Net, ASP.NET Core, ML.NET</li>
                    <li><strong>Databases:</strong> PostgreSQL, MongoDB, MySQL</li>
                  </ul>
                </div>

                {/* 3. PROFESSIONAL EXPERIENCE Section */}
                <div className="space-y-4">
                  <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-stone-950 border-b-2 border-stone-900 pb-0.5">
                    Professional Experience
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Position 1 */}
                    <div>
                      <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                        <h4 className="font-bold text-xs text-stone-950">Software Developer</h4>
                        <span className="font-semibold text-xs text-stone-800">Nov 2025 – Feb 2026</span>
                      </div>
                      <p className="text-xs text-stone-600 italic font-medium">Viyuga Innovations</p>
                      <ul className="list-disc pl-5 mt-1 text-xs text-stone-800 space-y-1.5 leading-relaxed text-justify">
                        <li>
                          Designed and implemented scalable microservices using Django, PostgreSQL, and REST APIs. Built secure inter-service communication workflows, payment integrations, and asynchronous processing systems. Developed Docker-based deployment solutions following production-grade software architecture principles.
                        </li>
                      </ul>
                    </div>

                    {/* Position 2 */}
                    <div>
                      <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                        <h4 className="font-bold text-xs text-stone-950">Backend Developer</h4>
                        <span className="font-semibold text-xs text-stone-800">Dec 2024 – Jan 2025</span>
                      </div>
                      <p className="text-xs text-stone-600 italic font-medium">Chennai Port Authority</p>
                      <ul className="list-disc pl-5 mt-1 text-xs text-stone-800 space-y-1.5 leading-relaxed text-justify">
                        <li>
                          Designed and developed a Port Charges Calculator system for accurate charge computation. Built scalable APIs enabling seamless integration with existing port operations. Contributed to backend system design with focus on reliability and performance.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 4. PROJECTS Section */}
                <div className="space-y-4">
                  <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-stone-950 border-b-2 border-stone-900 pb-0.5">
                    Projects
                  </h3>
                  
                  <div className="space-y-3.5 text-xs text-stone-800">
                    <div>
                      <h4 className="font-bold text-stone-950">CleanSlate <span className="font-semibold text-stone-600">| System Architect</span></h4>
                      <ul className="list-disc pl-5 mt-1 leading-relaxed text-justify">
                        <li>Designed a secure, irreversible data-wiping solution that ensures complete data privacy while enabling the safe recycling, refurbishment, and reuse of electronic devices.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-stone-950">BLAP <span className="font-semibold text-stone-600">| System Architect & Android Developer</span></h4>
                      <ul className="list-disc pl-5 mt-1 leading-relaxed text-justify">
                        <li>Developed a voice-enabled email automation application that enables hands-free email sending and listening through voice commands, improving accessibility and productivity on mobile devices.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-stone-950">SocioScrape <span className="font-semibold text-stone-600">| System Architect & API Designer</span></h4>
                      <ul className="list-disc pl-5 mt-1 leading-relaxed text-justify">
                        <li>Built a social media monitoring and analysis platform for the Smart India Hackathon (NIA problem statement), transforming publicly available information into actionable insights for efficient pattern identification and information tracking.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 5. EDUCATION Section */}
                <div className="space-y-3">
                  <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-stone-950 border-b-2 border-stone-900 pb-0.5">
                    Education
                  </h3>
                  
                  <div className="space-y-3 text-xs text-stone-800">
                    <div>
                      <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                        <span className="font-bold text-stone-950">Rajalakshmi Engineering College</span>
                        <span className="font-semibold text-stone-800">2023 – 2027</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between text-stone-600 leading-normal gap-1">
                        <span>B.E./B.Tech Engineering — CGPA: 7.99</span>
                        <span className="font-medium">Chennai</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                        <span className="font-bold text-stone-950">Maharishi International Residential School</span>
                        <span className="font-semibold text-stone-800">2023</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between text-stone-600 leading-normal gap-1">
                        <span>Higher Secondary (Class XII) — 92.6%</span>
                        <span className="font-medium">Kanchipuram</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                        <span className="font-bold text-stone-950">Vignesh International School</span>
                        <span className="font-semibold text-stone-800">2021</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between text-stone-600 leading-normal gap-1">
                        <span>Secondary (Class X) — 83.8%</span>
                        <span className="font-medium">Tiruvannamalai</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6. ACHIEVEMENTS Section */}
                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-stone-950 border-b-2 border-stone-900 pb-0.5">
                    Achievements
                  </h3>
                  <ul className="list-disc pl-5 text-xs text-stone-800 space-y-1.5 leading-relaxed">
                    <li>Delivered a technical workshop on Git and GitHub as a guest lecturer.</li>
                    <li>Organized and conducted a Blockchain-focused technical event at the college symposium, representing the club.</li>
                    <li>Delivered a technical talk on Modern Blockchain as a guest lecturer for the open developer community Code Sapiens.</li>
                    <li>Served as a Technical Associate in the Blockchain Innovation Club, organizing and conducting three technical events.</li>
                    <li>Won SIH internal hackathon in my college in 2024, selected to second round for Smart India Hackathon 2024.</li>
                  </ul>
                </div>

                {/* 7. LEADERSHIP Section */}
                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-stone-950 border-b-2 border-stone-900 pb-0.5">
                    Leadership
                  </h3>
                  <ul className="list-disc pl-5 text-xs text-stone-800 space-y-1.5 leading-relaxed">
                    <li>Led internship project teams and served as Team Lead for Smart India Hackathon (SIH) projects.</li>
                    <li>Coordinated a major technical event and led the team that won the SIH Internal Hackathon 2024, advancing to the SIH 2024 second round.</li>
                  </ul>
                </div>

              </div>

              {/* Modal footer Close instructions */}
              <div className="mt-8 pt-4 border-t border-stone-200 text-right print:hidden">
                <button
                  id="modal-print-close"
                  onClick={() => setIsResumeModalOpen(false)}
                  className="px-5 py-2 bg-stone-900 hover:bg-stone-800 text-stone-100 font-mono text-xs rounded uppercase tracking-widest cursor-pointer"
                >
                  Return to Archive
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

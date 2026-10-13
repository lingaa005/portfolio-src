import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { profileData, ProjectDoc } from '../profileData';
import { Archive, FileText, CheckCircle, Shield, Volume2, Search, ArrowUpRight, X, Layers, Award } from 'lucide-react';

const projectDomainIcons: Record<string, React.ReactNode> = {
  "CleanSlate": <Shield className="w-5 h-5 text-[#b8862b]" />,
  "BLAP - Business Lifestyle Advancement Platform": <Volume2 className="w-5 h-5 text-[#b8862b]" />,
  "SocioScrape": <Search className="w-5 h-5 text-[#b8862b]" />
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectDoc | null>(null);

  const getDossierClass = (projectName: string) => {
    if (projectName.includes("CleanSlate")) return "border-red-900/40 hover:border-red-600";
    if (projectName.includes("BLAP")) return "border-indigo-900/40 hover:border-indigo-500";
    return "border-emerald-900/40 hover:border-emerald-500";
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {profileData.projects.map((proj, idx) => {
          const icon = projectDomainIcons[proj.project_name] || <FileText className="w-5 h-5 text-[#b8862b]" />;
          
          return (
            <motion.div
              layoutId={`project-container-${proj.project_name}`}
              key={idx}
              whileHover={{ y: -6, shadow: "0 25px 40px rgba(0,0,0,0.7)" }}
              onClick={() => setSelectedProject(proj)}
              className={`parchment-texture border p-5 sm:p-6 rounded-lg cursor-pointer transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-auto min-h-[22rem] sm:h-85 md:h-80 shadow-md ${getDossierClass(proj.project_name)}`}
            >
              {/* Folder tab design mimicking a real files cabinet drawer */}
              <div className="absolute top-0 right-0 bg-[#2c1f16] text-[#eedda0] font-mono text-[9px] px-3 py-1 rounded-bl uppercase tracking-widest border-l border-b border-amber-900/30">
                DOSSIER-0{idx + 1}
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4 mt-2">
                  <div className="p-2.5 rounded-full bg-stone-900/10 border border-amber-900/25">
                    {icon}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#623f14] block">
                      ARCHIVAL SPECIFICATION
                    </span>
                    <h3 className="font-display font-bold text-lg text-stone-900 leading-tight">
                      {proj.project_name.split(' - ')[0]}
                    </h3>
                  </div>
                </div>

                <p className="font-serif italic text-stone-800 text-sm leading-relaxed mb-4 line-clamp-4">
                  {proj.description}
                </p>
              </div>

              <div>
                {/* Domains Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {proj.domains.slice(0, 2).map((dom, dIdx) => (
                    <span key={dIdx} className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-950/20 text-[#623f14] border border-[#623f14]/20 uppercase">
                      {dom}
                    </span>
                  ))}
                  {proj.domains.length > 2 && (
                    <span className="text-[9px] font-mono px-1.5 py-0.5 text-stone-600">
                      +{proj.domains.length - 2} more
                    </span>
                  )}
                </div>

                {/* Footer read action */}
                <div className="flex justify-between items-center pt-3 border-t border-amber-900/10 text-xs font-mono text-[#b8862b]">
                  <span className="uppercase tracking-widest text-[10px]">Unseal Docket</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Expanded Dossier Overlay Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div id="project-detail-overlay" className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 sm:p-4 bg-stone-950/85 backdrop-blur-sm overflow-y-auto">
            <motion.div
              layoutId={`project-container-${selectedProject.project_name}`}
              className="parchment-texture border border-amber-800/40 rounded-lg max-w-2xl w-full p-5 sm:p-8 my-6 sm:my-0 shadow-[0_25px_60px_rgba(0,0,0,0.85)] relative max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Close Button top-right resembling a brass toggle */}
              <button
                id="close-project-modal"
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-amber-900/30 hover:border-gold-500 hover:bg-amber-900/10 text-stone-900 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute top-0 left-0 hover:text-amber-800 text-[#eedda0] bg-[#3b2a1a] font-mono text-[10px] px-4 py-1.5 rounded-br uppercase tracking-widest">
                SYSTEM DOCUMENTATION INDEX
              </div>

              {/* Header inside Detail */}
              <div className="flex items-center gap-4 mt-6 mb-6 pb-6 border-b border-amber-900/25">
                <div className="p-3 bg-stone-900/10 rounded border border-amber-900/20">
                  {projectDomainIcons[selectedProject.project_name] || <FileText className="w-6 h-6 text-[#b8862b]" />}
                </div>
                <div>
                  <span className="text-xs font-mono text-amber-800 uppercase tracking-widest block mb-0.5">
                    {selectedProject.project_type}
                  </span>
                  <h3 className="font-display font-black text-2xl text-stone-900 tracking-wide">
                    {selectedProject.project_name}
                  </h3>
                </div>
              </div>

              {/* Roles inside Project */}
              <div className="mb-6 bg-[#2d2217]/5 p-4 rounded-sm border border-amber-900/10">
                <span className="font-mono text-[9px] text-amber-800 tracking-widest uppercase block mb-1">
                  Assigned Architecture Roles
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.role.map((r, rIdx) => (
                    <span key={rIdx} className="bg-[#2c1f16] text-[#eedda0] font-mono px-3 py-1 rounded text-xs border border-amber-900/30">
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <div className="mb-6">
                <span className="font-mono text-[9px] text-[#623f14] tracking-widest uppercase block mb-1">
                  Abstract Narrative
                </span>
                <p className="font-serif italic text-stone-900 text-base leading-relaxed pl-4 border-l-2 border-[#b8862b]">
                  {selectedProject.description}
                </p>
              </div>

              {/* System Domains */}
              <div className="mb-6">
                <span className="font-mono text-[9px] text-stone-500 tracking-widest uppercase block mb-2">
                  Operational Domains
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.domains.map((dom, dIdx) => (
                    <span key={dIdx} className="text-xs font-sans font-medium px-3 py-1 rounded bg-[#fffdfa] border border-amber-800/20 text-stone-800">
                      ◆ {dom}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies / Highlights block (simulated as part of custom architecture documentation) */}
              <div className="mb-6 py-4 border-t border-dashed border-amber-900/20">
                <span className="font-mono text-[9px] text-stone-500 tracking-widest uppercase block mb-2">
                  Key Index Keywords
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.keywords.map((kw, kwIdx) => (
                    <span key={kwIdx} className="text-xs font-mono text-[#b8862b] px-2.5 py-1 rounded bg-stone-900/5 border border-amber-900/10">
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture Blueprint note section */}
              <div className="bg-[#0f0d0b] text-amber-100/90 p-4 rounded border border-amber-950 shadow-inner">
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className="font-display text-xs text-amber-400 font-bold tracking-widest uppercase">
                    Architect's Assessment
                  </span>
                </div>
                <p className="font-serif italic text-xs leading-relaxed text-stone-300">
                  This system utilizes safe isolated computation models. Designed with decoupled interface pathways, allowing complete operational throughput under high-density parallel queries, reflecting production-grade software reliability guidelines.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-amber-900/20 text-center">
                <button
                  id="modal-foot-close"
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2 bg-[#2c1f16] text-[#f7eecf] hover:bg-[#1a120c] font-mono text-xs rounded uppercase tracking-wider transition-all duration-200 border border-amber-900/45 hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)] cursor-pointer"
                >
                  Return to Records
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

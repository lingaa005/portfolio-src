import React from 'react';
import { motion } from 'motion/react';
import { profileData } from '../profileData';
import { Code, Terminal, Database, Cloud, Settings, Compass, Bot, Smartphone, Cpu } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  programming_languages: <Code className="w-5 h-5 text-amber-500" />,
  frameworks_and_platforms: <Terminal className="w-5 h-5 text-amber-500" />,
  databases: <Database className="w-5 h-5 text-amber-500" />,
  cloud_platforms: <Cloud className="w-5 h-5 text-amber-500" />,
  developer_tools: <Settings className="w-5 h-5 text-amber-500" />,
  backend_engineering: <Cpu className="w-5 h-5 text-amber-500" />,
  software_architecture: <Compass className="w-5 h-5 text-amber-500" />,
  artificial_intelligence_and_automation: <Bot className="w-5 h-5 text-amber-500" />,
  mobile_application_development: <Smartphone className="w-5 h-5 text-amber-500" />,
};

const categoryTitles: Record<string, string> = {
  programming_languages: "Programming Languages",
  frameworks_and_platforms: "Frameworks",
  databases: "Databases & Engines",
  cloud_platforms: "Cloud Infrastructure",
  developer_tools: "Developer Utilities & Tools",
  backend_engineering: "Backend Engineering Foundations",
  software_architecture: "Software Architecture Mindsets",
  artificial_intelligence_and_automation: "AI & Cognitive Automation",
  mobile_application_development: "Mobile Application Dev",
};

export default function Skills() {
  const skills = profileData.technical_skills;

  // Render list or cards for complex categories
  const renderItemCard = (title: string, list: any[], icon: React.ReactNode) => {
    return (
      <motion.div
        whileHover={{ y: -4, shadow: "0 20px 30px rgba(0,0,0,0.6)" }}
        className="parchment-texture duration-300 transition-all border border-amber-900/40 p-6 rounded relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-amber-900/30 p-1 flex justify-end items-start pointer-events-none group-hover:border-gold-500 transition-colors duration-300">
          <div className="w-1 h-1 bg-amber-900/40 rounded-full group-hover:bg-gold-500"></div>
        </div>
        
        <div className="flex items-center gap-3 mb-4 border-b border-amber-800/20 pb-3">
          <div className="p-2 rounded bg-stone-900/5 border border-amber-900/20">
            {icon}
          </div>
          <h4 className="font-display font-semibold text-stone-900 text-base tracking-wide">
            {title}
          </h4>
        </div>

        <div className="flex flex-wrap gap-2">
          {list.map((item, index) => {
            const isObject = typeof item === 'object';
            const name = isObject ? item.name : item;

            return (
              <div 
                key={index} 
                className="flex items-center gap-2 bg-[#2c1f16]/90 text-[#f7eecf] px-3 py-1.5 rounded-sm text-xs font-mono border border-amber-800/30 hover:border-gold-400 group-hover:bg-stone-900 transition-colors duration-200"
              >
                <span>{name}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Render Structured Lists */}
        {renderItemCard(
          categoryTitles.programming_languages, 
          skills.programming_languages, 
          categoryIcons.programming_languages
        )}

        {renderItemCard(
          categoryTitles.frameworks_and_platforms, 
          skills.frameworks_and_platforms, 
          categoryIcons.frameworks_and_platforms
        )}

        {renderItemCard(
          categoryTitles.databases, 
          skills.databases, 
          categoryIcons.databases
        )}

        {renderItemCard(
          categoryTitles.cloud_platforms, 
          skills.cloud_platforms, 
          categoryIcons.cloud_platforms
        )}

        {renderItemCard(
          categoryTitles.developer_tools, 
          skills.developer_tools, 
          categoryIcons.developer_tools
        )}

        {renderItemCard(
          categoryTitles.mobile_application_development, 
          skills.mobile_application_development, 
          categoryIcons.mobile_application_development
        )}
      </div>

      <div className="border border-dashed border-amber-900/30 my-8"></div>

      {/* Specialty Architecture Dossiers with rich layout */}
      <h3 className="font-display text-lg text-gold-200 tracking-wider text-center py-2 uppercase border-y border-gold-500/30 bg-[#1a1a1a]/90 max-w-sm mx-auto">
        Specialist Capabilities
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {/* Backend Engineering List Card */}
        <div className="bg-[#1a1a1a] border border-gold-500/30 rounded-lg p-6 relative overflow-hidden group shadow-lg">
          <div className="absolute top-3 right-3 text-[#e8dcc4]/40 font-mono text-[10px]">GRP-01</div>
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gold-500/20">
            <div className="p-2 bg-[#0d0d0d] rounded border border-gold-500/20">
              {categoryIcons.backend_engineering}
            </div>
            <div>
              <h4 className="font-display text-base text-[#e8dcc4] font-medium tracking-wide">
                Backend System Engineering
              </h4>
              <span className="text-[10px] text-[#e8dcc4]/50 font-mono block uppercase">Construct & Integrate</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {skills.backend_engineering.map((item, i) => (
              <span 
                key={i} 
                className="bg-[#0d0d0d] hover:bg-gold-900 text-[#e8dcc4]/80 hover:text-gold-200 px-2.5 py-1.5 rounded text-xs font-mono border border-gold-500/10 transition-all duration-200 hover:border-gold-500/30"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Software Architecture List Card */}
        <div className="bg-[#1a1a1a] border border-gold-500/30 rounded-lg p-6 relative overflow-hidden group shadow-lg">
          <div className="absolute top-3 right-3 text-[#e8dcc4]/40 font-mono text-[10px]">GRP-02</div>
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gold-500/20">
            <div className="p-2 bg-[#0d0d0d] rounded border border-gold-500/20">
              {categoryIcons.software_architecture}
            </div>
            <div>
              <h4 className="font-display text-base text-[#e8dcc4] font-medium tracking-wide">
                System Architecture Mindset
              </h4>
              <span className="text-[10px] text-[#e8dcc4]/50 font-mono block uppercase">Scale & Resiliency</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {skills.software_architecture.map((item, i) => (
              <span 
                key={i} 
                className="bg-[#0d0d0d] hover:bg-gold-900 text-[#e8dcc4]/80 hover:text-gold-200 px-2.5 py-1.5 rounded text-xs font-mono border border-gold-500/10 transition-all duration-200 hover:border-gold-500/30"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* DevOps List Card */}
        <div className="bg-[#1a1a1a] border border-gold-500/30 rounded-lg p-6 relative overflow-hidden group shadow-lg">
          <div className="absolute top-3 right-3 text-[#e8dcc4]/40 font-mono text-[10px]">GRP-03</div>
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gold-500/20">
            <div className="p-2 bg-[#0d0d0d] rounded border border-gold-500/20">
              <Cpu className="w-5 h-5 text-gold-500" />
            </div>
            <div>
              <h4 className="font-display text-base text-[#e8dcc4] font-medium tracking-wide">
                DevOps & Infrastructure
              </h4>
              <span className="text-[10px] text-[#e8dcc4]/50 font-mono block uppercase">Automated Environments</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {skills.devops_and_deployment.map((item, i) => (
              <span 
                key={i} 
                className="bg-[#0d0d0d] hover:bg-gold-900 text-[#e8dcc4]/80 hover:text-gold-200 px-2.5 py-1.5 rounded text-xs font-mono border border-gold-500/10 transition-all duration-200 hover:border-gold-500/30"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* AI & Automation List Card */}
        <div className="bg-[#1a1a1a] border border-gold-500/30 rounded-lg p-6 relative overflow-hidden group shadow-lg">
          <div className="absolute top-3 right-3 text-[#e8dcc4]/40 font-mono text-[10px]">GRP-04</div>
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gold-500/20">
            <div className="p-2 bg-[#0d0d0d] rounded border border-gold-500/20">
              {categoryIcons.artificial_intelligence_and_automation}
            </div>
            <div>
              <h4 className="font-display text-base text-[#e8dcc4] font-medium tracking-wide">
                AI & Cognitive Automation
              </h4>
              <span className="text-[10px] text-[#e8dcc4]/50 font-mono block uppercase">Intelligent Workflow</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {skills.artificial_intelligence_and_automation.map((item, i) => (
              <span 
                key={i} 
                className="bg-[#0d0d0d] hover:bg-gold-900 text-[#e8dcc4]/80 hover:text-gold-200 px-2.5 py-1.5 rounded text-xs font-mono border border-gold-500/10 transition-all duration-200 hover:border-gold-500/30"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

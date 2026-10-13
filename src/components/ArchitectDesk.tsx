import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GitBranch, Database, ShieldAlert, Cpu, Layers, Server, Activity, ArrowRight, CheckCircle2 } from 'lucide-react';

interface BlueprintNode {
  id: string;
  title: string;
  icon: React.ReactNode;
  subtitle: string;
  details: string[];
  philosophy: string;
}

export default function ArchitectDesk() {
  const [activeNode, setActiveNode] = useState<string>('gateway');

  const nodes: BlueprintNode[] = [
    {
      id: 'gateway',
      title: 'API Gateway & Security Rail',
      icon: <Layers className="w-5 h-5 text-sky-400" />,
      subtitle: 'Reverse proxy, routing, rate-limiting, and validation proxy.',
      philosophy: 'Never expose core domain structures directly to clients. The ingress layer handles request validation, rate limits, and SSL termination with stateless elasticity.',
      details: [
        'Domain-isolated routing with zero-trust token authentication',
        'Payload size constraints & query sanitization filters',
        'Asymmetric SSL keys managed in secure cloud parameters',
        'Intelligent routing based on path metrics to optimal service groups'
      ]
    },
    {
      id: 'services',
      title: 'Django & Python Microservices',
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      subtitle: 'Core business logic with strict domain separation.',
      philosophy: 'Code written for longevity must have clean, separated boundaries. Services communicate asynchronously to guarantee that isolated service crashes cannot bring down the primary cluster.',
      details: [
        'Strict domain separation avoiding database level cross-linking',
        'Lazy-initialized database connections to maximize connection efficiency',
        'Stateless operation allowing horizontal scale to infinity',
        'Pre-validated service-to-service communication pathways'
      ]
    },
    {
      id: 'database',
      title: 'PostgreSQL Relational DB Cluster',
      icon: <Database className="w-5 h-5 text-amber-500" />,
      subtitle: 'Durable structured database with query optimizing indexes.',
      philosophy: 'Data integrity is the non-negotiable bedrock of application engineering. Choose strong consistency models where transaction state transitions are auditable and atomic.',
      details: [
        'Advanced indexing (B-Tree & GIN) designed for query profiling',
        'Optimized connection pools avoiding standard overhead leaks',
        'Automated WAL archiving and instant transactional backups',
        'Row-level security parameters preventing lateral leak vulnerabilities'
      ]
    },
    {
      id: 'worker',
      title: 'Asynchronous Workflow Queues',
      icon: <GitBranch className="w-5 h-5 text-red-400" />,
      subtitle: 'Event bus processing background automated operations.',
      philosophy: 'Do not block the client thread with long-running tasks. Offload computations, emails, and integrations to background workers that retry on reliable exponential curves.',
      details: [
        'Task queues supporting retry bounds and error letter routing',
        'Throttled workers matching external API limit guidelines',
        'Idempotent task layouts avoiding double execution errors',
        'Health checkers killing stuck workers instantly'
      ]
    },
    {
      id: 'reliability',
      title: 'SRE Failure Recovery Pattern',
      icon: <ShieldAlert className="w-5 h-5 text-indigo-400" />,
      subtitle: 'Automated resilience checkpoints and API fail-safes.',
      philosophy: 'A system must be engineered to expect failure at every boundary. Use circuit breakers, fallbacks, and fast fail loops to maintain essential usability during system stress.',
      details: [
        'Active health probes validating deep connection availability',
        'Circuit breakers shedding heavy traffic from slow services',
        'Graceful degraded UI modes serving static fallback data',
        'Consolidated telemetry alerting before failure bounds are crossed'
      ]
    }
  ];

  const current = nodes.find(n => n.id === activeNode) || nodes[0];

  return (
    <div className="border border-gold-500/30 rounded-lg p-6 sm:p-8 grid-blueprint bg-[#0d0d0d] text-[#e8dcc4] shadow-[inset_0_0_40px_rgba(0,0,0,0.85)] relative overflow-hidden">
      {/* Decorative corners for alignment blueprint theme */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t font-mono text-[9px] border-l border-gold-500/20 p-1 text-[#e8dcc4]/30">TL</div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t font-mono text-[9px] border-r border-gold-500/20 p-1 text-right text-[#e8dcc4]/30">TR</div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b font-mono text-[9px] border-l border-gold-500/20 p-1 flex items-end text-[#e8dcc4]/30">BL</div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b font-mono text-[9px] border-r border-gold-500/20 p-1 flex items-end justify-end text-[#e8dcc4]/30">BR</div>

      {/* Grid Header Info */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gold-500/20 pb-6 mb-8 gap-4">
        <div>
          <span className="font-mono text-xs text-gold-500 uppercase tracking-[0.2em] block mb-1">
            System Design Architectural Blueprint
          </span>
          <h3 className="font-display text-xl sm:text-2xl text-[#e8dcc4] font-semibold tracking-wide">
            Interactive Topology Desks
          </h3>
        </div>
        <div className="flex items-center gap-4 bg-[#1a1a1a]/95 px-4 py-2 rounded border border-gold-500/20 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[#e8dcc4]/90">Stateless Core Node</span>
          </div>
          <div className="h-4 w-[1px] bg-gold-500/25"></div>
          <div>
            <span className="text-gold-500">Latency: </span>
            <span className="text-[#e8dcc4] font-bold">&lt; 45ms</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        {/* Interactive Blueprint Canvas Diagram (Cols 1-7) */}
        <div className="lg:col-span-7 flex flex-col justify-center items-center bg-stone-950/80 rounded border border-amber-950/60 p-6 self-stretch min-h-[400px]">
          <p className="font-mono text-[10px] text-amber-600/60 mb-6 uppercase tracking-widest">
            // Interactive Network Layout (Select node to inspect pipeline)
          </p>

          <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
            {/* Pulsating blueprint circular grids behind nodes */}
            <div className="absolute w-full h-full rounded-full border border-amber-900/10 pointer-events-none scale-90" />
            <div className="absolute w-2/3 h-2/3 rounded-full border border-dashed border-amber-800/10 pointer-events-none" />
            <div className="absolute w-1/3 h-1/3 rounded-full border border-amber-900/20 pointer-events-none" />

            {/* Connecting directional vector lines using clean CSS styling */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 2 L 10 5 L 0 8 z" fill="#b8862b" opacity="0.6" />
                  </marker>
                </defs>
                {/* Lines from gateway to other nodes */}
                <line x1="200" y1="80" x2="100" y2="180" stroke="#b8862b" strokeWidth="1" strokeDasharray="3 3" markerEnd="url(#arrow)" />
                <line x1="200" y1="80" x2="300" y2="180" stroke="#b8862b" strokeWidth="1" strokeDasharray="3 3" markerEnd="url(#arrow)" />
                {/* Service to database & worker */}
                <line x1="100" y1="180" x2="200" y2="300" stroke="#b8862b" strokeWidth="1.5" markerEnd="url(#arrow)" />
                <line x1="300" y1="180" x2="200" y2="300" stroke="#b8862b" strokeWidth="1.5" markerEnd="url(#arrow)" />
                {/* Recovery feedback query loop */}
                <line x1="200" y1="300" x2="200" y2="200" stroke="#b8862b" strokeWidth="1" strokeDasharray="4 4" markerEnd="url(#arrow)" />
              </svg>
            </div>

            {/* Ingress Gateway Node (Top Center) */}
            <button
              onClick={() => setActiveNode('gateway')}
              className={`absolute top-4 left-1/2 -translate-x-1/2 z-10 p-3.5 rounded-full border flex flex-col items-center transition-all duration-300 pointer-events-auto ${
                activeNode === 'gateway'
                  ? 'bg-amber-950/80 border-gold-300 shadow-[0_0_15px_rgba(184,134,43,0.6)] scale-110'
                  : 'bg-stone-900 border-stone-800 hover:border-amber-900 hover:scale-105'
              }`}
            >
              <Layers className={`w-6 h-6 ${activeNode === 'gateway' ? 'text-gold-300 animate-pulse' : 'text-stone-400'}`} />
              <span className="font-mono text-[9px] mt-1 text-stone-300 font-medium tracking-wider uppercase">Gateway</span>
            </button>

            {/* Core Services Node (Left Middle) */}
            <button
              onClick={() => setActiveNode('services')}
              className={`absolute top-1/2 -translate-y-1/2 left-4 z-10 p-3.5 rounded-full border flex flex-col items-center transition-all duration-300 pointer-events-auto ${
                activeNode === 'services'
                  ? 'bg-amber-950/80 border-gold-300 shadow-[0_0_15px_rgba(184,134,43,0.6)] scale-110'
                  : 'bg-stone-900 border-stone-800 hover:border-amber-900 hover:scale-105'
              }`}
            >
              <Cpu className={`w-6 h-6 ${activeNode === 'services' ? 'text-emerald-400 animate-pulse' : 'text-stone-400'}`} />
              <span className="font-mono text-[9px] mt-1 text-stone-300 font-medium tracking-wider uppercase">Django Backend</span>
            </button>

            {/* Worker Node (Right Middle) */}
            <button
              onClick={() => setActiveNode('worker')}
              className={`absolute top-1/2 -translate-y-1/2 right-4 z-10 p-3.5 rounded-full border flex flex-col items-center transition-all duration-300 pointer-events-auto ${
                activeNode === 'worker'
                  ? 'bg-amber-950/80 border-gold-300 shadow-[0_0_15px_rgba(184,134,43,0.6)] scale-110'
                  : 'bg-stone-900 border-stone-800 hover:border-amber-900 hover:scale-105'
              }`}
            >
              <GitBranch className={`w-6 h-6 ${activeNode === 'worker' ? 'text-red-400' : 'text-stone-400'}`} />
              <span className="font-mono text-[9px] mt-1 text-stone-300 font-medium tracking-wider uppercase">Async Queue</span>
            </button>

            {/* Recovery Monitor SRE Node (Center Middle) */}
            <button
              onClick={() => setActiveNode('reliability')}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 p-4 rounded-full border flex flex-col items-center transition-all duration-300 pointer-events-auto ${
                activeNode === 'reliability'
                  ? 'bg-amber-950/90 border-gold-300 shadow-[0_0_20px_rgba(184,134,43,0.7)] scale-115'
                  : 'bg-[#1a1512] border-amber-950/60 hover:border-amber-600'
              }`}
            >
              <ShieldAlert className={`w-5 h-5 ${activeNode === 'reliability' ? 'text-indigo-400' : 'text-amber-700/80'}`} />
              <span className="font-mono text-[8px] mt-0.5 text-stone-300 tracking-wider">RECOVERY</span>
            </button>

            {/* Database Node (Bottom Center) */}
            <button
              onClick={() => setActiveNode('database')}
              className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-10 p-3.5 rounded-full border flex flex-col items-center transition-all duration-300 pointer-events-auto ${
                activeNode === 'database'
                  ? 'bg-amber-950/80 border-gold-300 shadow-[0_0_15px_rgba(184,134,43,0.6)] scale-110'
                  : 'bg-stone-900 border-stone-800 hover:border-amber-900 hover:scale-105'
              }`}
            >
              <Database className={`w-6 h-6 ${activeNode === 'database' ? 'text-amber-500 animate-pulse' : 'text-stone-400'}`} />
              <span className="font-mono text-[9px] mt-1 text-stone-300 font-medium tracking-wider uppercase">Postgres DB</span>
            </button>
          </div>
        </div>

        {/* Selected Node Details Display Panel (Cols 8-12) */}
        <div className="lg:col-span-5 h-full flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1a1a1a] border border-gold-500/30 rounded p-6 shadow-md h-full flex flex-col"
            >
              {/* Header inside display */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded bg-[#0d0d0d] border border-gold-500/20">
                  {current.icon}
                </div>
                <div>
                  <h4 className="font-display font-medium text-lg text-gold-200">
                    {current.title}
                  </h4>
                  <span className="font-mono text-[10px] text-[#e8dcc4]/50 block uppercase tracking-widest">
                    ARCHITECT CODE BOUNDARY
                  </span>
                </div>
              </div>

              {/* Subheading */}
              <p className="font-sans text-xs text-[#e8dcc4]/80 italic mb-4 leading-relaxed pb-4 border-b border-gold-500/20">
                "{current.subtitle}"
              </p>

              {/* Approach Philosophy Quote */}
              <div className="mb-6">
                <span className="font-mono text-[9px] text-gold-500 tracking-widest uppercase block mb-1">
                  Design Mindset
                </span>
                <p className="font-serif italic text-sm text-[#e8dcc4]/90 leading-relaxed pl-3 border-l-2 border-gold-500">
                  {current.philosophy}
                </p>
              </div>

              {/* Key Implementation list items */}
              <div className="space-y-3 mt-auto">
                <span className="font-mono text-[9px] text-gold-500 tracking-widest uppercase block">
                  Implementation Strategies
                </span>
                <ul className="space-y-2">
                  {current.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#e8dcc4]/85">
                      <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                      <span className="leading-normal">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Quick toggle indicators helper in architecture section */}
          <div className="mt-4 flex justify-between gap-1 grid-cols-5 p-1 bg-stone-950 rounded border border-amber-950/40">
            {nodes.map(n => (
              <button
                key={n.id}
                onClick={() => setActiveNode(n.id)}
                className={`py-1.5 px-2 text-[9px] font-mono tracking-widest rounded transition-all duration-300 uppercase block w-full text-center cursor-pointer ${
                  activeNode === n.id
                    ? 'bg-gold-800 text-stone-100 shadow-sm'
                    : 'text-stone-500 hover:text-stone-300'
                }`}
              >
                {n.id.substring(0, 4)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

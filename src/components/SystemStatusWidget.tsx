'use client';

import { motion } from 'framer-motion';
import { Activity, Server, CheckCircle2 } from 'lucide-react';
import { playSound } from '@/utils/audioManager';

interface HealthService {
  name: string;
  runtime: string;
  status: 'operational' | 'degraded';
  latency: string;
  uptime: string;
}

const SERVICES: HealthService[] = [
  { name: 'Harpia Direct-Threaded JIT VM', runtime: 'Go 1.23 / Native AST Parser', status: 'operational', latency: '~0.08ms (benchmark)', uptime: 'Disponível' },
  { name: 'OpenClaude MCP Protocol Adapter', runtime: 'Node.js 22 / Bun 1.3+', status: 'operational', latency: '~1.2ms (local)', uptime: 'Disponível' },
  { name: 'monFinTrack Secure Finance API', runtime: 'Python 3.13 / FastAPI', status: 'operational', latency: '~0.42ms (cloud)', uptime: 'Disponível' },
  { name: 'MonFinTrack Gemini AI Advisor', runtime: 'Python 3.13 / GenAI SDK', status: 'operational', latency: '~2.1ms (API)', uptime: 'Disponível' },
];

export default function SystemStatusWidget() {
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto z-10 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="glass-cyber rounded-2xl p-6 border border-emerald-500/40 shadow-glow-cyan font-mono text-xs space-y-4"
        onMouseEnter={() => playSound('hover')}
      >
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-500/20 pb-3">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-400" />
            <span className="text-white font-bold text-sm">STATUS DOS SERVIÇOS &amp; ENGINE HEALTH</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-300 font-bold bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-500/40">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>TELEMETRIA SIMULADA // BENCHMARKS REAIS</span>
          </div>
        </div>

        {/* Grid of Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SERVICES.map((srv, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg bg-slate-950/90 border border-slate-800 hover:border-emerald-500/50 transition-colors flex items-center justify-between gap-2"
            >
              <div className="space-y-0.5">
                <p className="text-slate-200 font-bold flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-cyan-400" /> {srv.name}
                </p>
                <p className="text-[11px] text-slate-400">{srv.runtime}</p>
              </div>

              <div className="text-right space-y-0.5">
                <span className="text-[11px] text-emerald-300 font-bold flex items-center justify-end gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> {srv.latency}
                </span>
                <p className="text-[11px] text-slate-400">Status: {srv.uptime}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

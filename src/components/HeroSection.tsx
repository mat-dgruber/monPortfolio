'use client';

import { motion } from 'framer-motion';
import { Terminal, ArrowRight, Code, FileText } from 'lucide-react';
import { playSound } from '@/utils/audioManager';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-28 pb-16 z-10">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl text-center space-y-6"
      >
        {/* Professional Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/40 text-cyan-300 font-mono text-xs shadow-glow-cyan">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>ENGENHEIRO DE SOFTWARE PLENO &amp; PÓS IA APLICADA</span>
        </div>

        {/* Primary Clean H1 */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-sans">
          MATHEUS DINIZ <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-purple-400">
            GRUBER
          </span>
        </h1>

        {/* Subtitle with Sans-Serif readability */}
        <p className="text-base sm:text-xl text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
          Desenvolvendo sistemas de alta disponibilidade em <strong className="text-sky-300">Go</strong>,{' '}
          <strong className="text-cyan-300">TypeScript</strong> e <strong className="text-purple-300">Python</strong>. Criador da linguagem reativa{' '}
          <strong className="text-yellow-300">Harpia</strong> e integrador do agente autônomo <strong className="text-emerald-300">OpenClaude MCP</strong>.
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap justify-center gap-2 pt-2 font-mono text-xs text-slate-300">
          {['Clean Architecture', 'DDD', 'Compiladores JIT', 'Protocolo MCP', 'RAG & LLMs', 'Docker Compose', 'Angular / Next.js'].map(
            (tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded bg-slate-900/90 border border-slate-800 text-sky-300 hover:border-cyan-400 transition-colors"
              >
                #{tag}
              </span>
            )
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <a
            href="#projects"
            onClick={() => playSound('click')}
            className="px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-mono text-sm font-semibold shadow-glow-cyan hover:shadow-glow-blue transition-all flex items-center gap-2 group"
          >
            <span>VER PROJETOS DESTAQUE</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#terminal"
            onClick={() => playSound('command')}
            className="px-6 py-3 rounded-lg bg-slate-900 border border-sky-500/40 hover:border-cyan-400 text-cyan-300 font-mono text-sm font-semibold hover:shadow-glow-cyan transition-all flex items-center gap-2"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>TESTAR TERMINAL CLI</span>
          </a>

          <a
            href="https://github.com/mat-dgruber"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playSound('click')}
            className="p-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white transition-colors flex items-center justify-center"
            title="GitHub de Matheus Diniz"
          >
            <Code className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

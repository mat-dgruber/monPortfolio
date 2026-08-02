'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { UserCheck, ShieldCheck, Cpu, Code2, Brain } from 'lucide-react';
import { playSound } from '@/utils/audioManager';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto z-10 relative">
      <div className="text-center space-y-3 mb-16">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-sans flex items-center justify-center gap-3">
          <UserCheck className="w-8 h-8 text-cyan-400" /> Sobre Matheus Diniz
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
          Engenheiro de Software Pleno, especialista em IA Aplicada, compiladores nativos e arquiteturas resilientes.
        </p>
      </div>

      {/* Main Grid: Photo Card + Bio & Core Pillars */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Photo Card with Clean HUD Border */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 flex flex-col items-center"
        >
          <div className="relative group w-full max-w-sm">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-sky-500 via-cyan-400 to-purple-500 opacity-50 blur group-hover:opacity-80 transition-opacity duration-500" />

            <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-sky-500/40 shadow-glow-cyan">
              <Image
                src="/images/IMG_2250.jpg"
                alt="Foto de Matheus Diniz Gruber"
                width={400}
                height={480}
                priority
                className="w-full h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20" />

              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/90 backdrop-blur-md border border-sky-500/30 font-mono text-xs text-slate-200 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-cyan-300 font-bold">MATHEUS D. GRUBER</span>
                  <span className="text-[10px] text-emerald-400 font-bold">OPERACIONAL</span>
                </div>
                <p className="text-[10px] text-slate-400">Engenheiro de Software Pleno @ CPB</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bio Content & Core Pillars */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="glass-cyber rounded-2xl p-6 sm:p-8 border border-sky-500/30 space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-sans text-cyan-300">
              Transformando Desafios Complexos em Soluções Escaláveis
            </h3>

            <p className="text-sm text-slate-300 font-sans leading-relaxed">
              Residente em <strong>Tatuí, SP</strong>, integro a equipe de engenharia da <strong>Casa Publicadora Brasileira (CPB)</strong>. Possuo graduação em <strong>Análise e Desenvolvimento de Sistemas</strong> e Pós-Graduação em <strong>Engenharia de IA Aplicada</strong>.
            </p>

            <p className="text-sm text-slate-300 font-sans leading-relaxed">
              Minha atuação foca na modernização de sistemas legados enterprise, criação de linguagens de programação reativas (como a <strong>Harpia em Go</strong>) e desenvolvimento de ferramentas autônomas de IA integradas via protocolo <strong>MCP</strong>.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
              <div className="p-3 rounded-lg bg-slate-950 border border-sky-500/30 flex items-center gap-2 text-sky-300">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>Go, TypeScript &amp; Python Core</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-purple-500/30 flex items-center gap-2 text-purple-300">
                <Brain className="w-4 h-4 text-purple-400" />
                <span>Agentes autônomos &amp; MCP</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-yellow-500/30 flex items-center gap-2 text-yellow-300">
                <Cpu className="w-4 h-4 text-yellow-400" />
                <span>Compiladores &amp; Runtimes</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-emerald-500/30 flex items-center gap-2 text-emerald-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Arquitetura DDD &amp; Clean Code</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Qualitative Competency Matrix (Removed fake precise percentage numbers) */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Engenharia de Software (Go/TS)', status: 'Nível Especialista', border: 'border-sky-500/30' },
          { label: 'Agentes de IA & MCP Protocol', status: 'Nível Avançado', border: 'border-cyan-500/30' },
          { label: 'Compiladores & AST Parsers', status: 'Nível Avançado', border: 'border-purple-500/30' },
          { label: 'Clean Arch & DDD Enterprise', status: 'Nível Especialista', border: 'border-emerald-500/30' },
        ].map((item, index) => (
          <div
            key={index}
            className={`glass-cyber p-4 rounded-xl border ${item.border} space-y-1 hover:border-cyan-400 transition-colors font-mono`}
            onMouseEnter={() => playSound('hover')}
          >
            <p className="text-xs font-bold text-slate-200">{item.label}</p>
            <p className="text-[11px] text-cyan-300 font-semibold">{item.status}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

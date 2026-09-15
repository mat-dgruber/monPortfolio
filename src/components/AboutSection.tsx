'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { UserCheck, CheckCircle } from 'lucide-react';

const WORK_PRINCIPLES = [
  {
    title: 'Compreensão antes de ferramenta',
    desc: 'Entender a fundo o problema de negócio e restrições antes de selecionar a stack ou arquitetura.',
  },
  {
    title: 'Pragmatismo & Manutenibilidade',
    desc: 'Construir a solução mais enxuta e elegante que sustente evolução contínua sem débito técnico desnecessário.',
  },
  {
    title: 'IA Funcional e com Propósito',
    desc: 'Integrar modelos de linguagem e agentes quando eles realmente eliminam atritos operacionais e geram valor.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 px-4 sm:px-6 py-28 border-t border-slate-800/60">
      <div className="premium-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* Photo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="tech-card p-3 relative overflow-hidden"
        >
          <div className="relative overflow-hidden rounded-md border border-slate-800">
            <Image
              src="/images/IMG_2250.jpg"
              alt="Foto de Matheus Diniz Gruber"
              width={560}
              height={640}
              className="h-[460px] w-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-3 left-3 right-3 bg-[#080B11]/90 backdrop-blur-md border border-slate-800/90 rounded px-3 py-2 flex items-center justify-between text-[11px] font-mono text-slate-300">
              <span>MATHEUS DINIZ GRUBER</span>
              <span className="text-emerald-400">TATUÍ - SP // REMOTO</span>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-wider">
              <UserCheck className="h-3.5 w-3.5" />
              <span>PERFIL & ENGENHARIA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Visão de produto aliada à disciplina de arquitetura e código.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Atuo conectando arquitetura de software, engenharia de backend e frontend, design de interfaces e
              soluções com IA para materializar ideias complexas em plataformas estáveis, rápidas e orientadas a resultados.
            </p>
          </div>

          <div className="space-y-3">
            {WORK_PRINCIPLES.map((principle, index) => (
              <div
                key={principle.title}
                className="tech-card p-4 sm:p-5 flex items-start gap-3.5"
              >
                <span className="font-mono text-xs font-bold text-emerald-400 mt-0.5">
                  0{index + 1}
                </span>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-white tracking-tight">
                    {principle.title}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

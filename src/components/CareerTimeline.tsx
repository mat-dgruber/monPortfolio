'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { playSound } from '@/utils/audioManager';

interface CareerEvent {
  role: string;
  company: string;
  period: string;
  type: 'work' | 'education';
  description: string;
  skills: string[];
}

const CAREER_JOURNEY: CareerEvent[] = [
  {
    role: 'Engenheiro de Software Pleno',
    company: 'Casa Publicadora Brasileira (CPB)',
    period: 'Fev 2026 — Presente',
    type: 'work',
    description: 'Engenharia de software ativa, modernização de sistemas legados enterprise e arquitetura de novas aplicações em Go, TypeScript e Python.',
    skills: ['Go', 'TypeScript', 'Python', 'Clean Architecture', 'DDD'],
  },
  {
    role: 'Pós-Graduação em Engenharia de IA Aplicada',
    company: 'UNIPDS / Anhanguera',
    period: 'Concluído',
    type: 'education',
    description: 'Especialização em arquitetura de soluções com Inteligência Artificial, RAG, integração de LLMs e automação de agentes.',
    skills: ['IA Aplicada', 'LLMs', 'RAG', 'Agentes Autônomos'],
  },
  {
    role: 'Analista de Sistemas Júnior',
    company: 'Casa Publicadora Brasileira (CPB)',
    period: 'Dez 2024 — Fev 2026',
    type: 'work',
    description: 'Suporte especializado a sistemas ERP, PDVs e banco de dados relacionais (SQL de alta complexidade) para 20+ filiais no Brasil.',
    skills: ['SQL Avançado', 'ERP & PDV', 'Suporte Enterprise'],
  },
  {
    role: 'Graduação em Análise e Desenvolvimento de Sistemas',
    company: 'Universidade Cruzeiro do Sul',
    period: 'Concluído',
    type: 'education',
    description: 'Formação superior focada em engenharia de software, estrutura de dados, orientação a objetos e desenvolvimento web.',
    skills: ['Engenharia de Software', 'Estrutura de Dados', 'Web Dev'],
  },
  {
    role: 'Assistente & Estagiário de TI',
    company: 'Casa Publicadora Brasileira (CPB)',
    period: 'Jan 2023 — Dez 2024',
    type: 'work',
    description: 'Gestão de infraestrutura, servidores, suporte de hardware/software e início da transição interna para desenvolvimento de software.',
    skills: ['Infraestrutura', 'Servidores', 'Suporte Técnico'],
  },
];

export default function CareerTimeline() {
  return (
    <section id="timeline" className="py-20 px-6 max-w-4xl mx-auto z-10 relative">
      <div className="text-center space-y-3 mb-16">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-sans flex items-center justify-center gap-3">
          <Briefcase className="w-8 h-8 text-purple-400" /> Linha do Tempo &amp; Formação
        </h2>
        <p className="text-sm text-slate-300 font-sans max-w-xl mx-auto leading-relaxed">
          Evolução contínua desde a infraestrutura básica até a Engenharia de Software Pleno e IA Aplicada.
        </p>
      </div>

      {/* Timeline Vertical Container with Unique ID Fix */}
      <div className="relative border-l-2 border-sky-500/30 ml-4 md:ml-32 space-y-12">
        {CAREER_JOURNEY.map((event, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative pl-8 group"
            onMouseEnter={() => playSound('hover')}
          >
            {/* Timeline Icon Node */}
            <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-glow-cyan group-hover:scale-110 transition-transform duration-300">
              {event.type === 'work' ? (
                <Briefcase className="w-4 h-4" />
              ) : (
                <GraduationCap className="w-4 h-4 text-purple-400" />
              )}
            </div>

            {/* Left Date Label (Desktop) */}
            <div className="hidden md:block absolute -left-44 top-2 text-right font-mono text-xs text-sky-300 font-bold w-36">
              {event.period}
            </div>

            {/* Card Content */}
            <div className="glass-cyber rounded-xl p-6 border border-sky-500/20 group-hover:border-cyan-400 transition-colors duration-300 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-white font-sans group-hover:text-cyan-400 transition-colors">
                  {event.role}
                </h3>
                <span className="md:hidden text-xs font-mono text-cyan-300 flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {event.period}
                </span>
              </div>

              <div className="text-xs font-mono text-sky-300 font-semibold flex items-center gap-1">
                <span>{event.company}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {event.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {event.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-purple-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

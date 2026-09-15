'use client';

import { motion } from 'framer-motion';
import { History, Briefcase, GraduationCap } from 'lucide-react';

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
    role: 'Engenheiro de Software Fullstack',
    company: 'Casa Publicadora Brasileira (CPB)',
    period: 'Fev 2026 — Presente',
    type: 'work',
    description: 'Liderança técnica e desenvolvimento de ponta a ponta: modernização de legados enterprise, arquitetura BFF e concepção de novas aplicações de alta disponibilidade com Angular, TypeScript e Python.',
    skills: ['Angular', 'TypeScript', 'Python', 'FastAPI', 'Clean Architecture', 'DDD'],
  },
  {
    role: 'Pós-Graduação em Engenharia de IA Aplicada',
    company: 'UNIPDS / Anhanguera',
    period: 'Em andamento',
    type: 'education',
    description: 'Especialização avançada focada em arquitetura de soluções com Inteligência Artificial, pipelines de RAG (Retrieval-Augmented Generation), integração de LLMs e automação com agentes autônomos.',
    skills: ['IA Aplicada', 'LLMs', 'RAG', 'Agentes Autônomos', 'Prompt Engineering'],
  },
  {
    role: 'Analista de Sistemas Júnior',
    company: 'Casa Publicadora Brasileira (CPB)',
    period: 'Dez 2024 — Fev 2026',
    type: 'work',
    description: 'Sustentação e evolução de sistemas críticos corporativos (ERP, PDVs) e administração de bancos de dados relacionais para múltiplas filiais e áreas de negócio.',
    skills: ['SQL Server', 'ERP & PDV', 'Otimização de Queries', 'Suporte Enterprise'],
  },
  {
    role: 'Graduação em Análise e Desenvolvimento de Sistemas',
    company: 'Universidade Cruzeiro do Sul',
    period: 'Concluído',
    type: 'education',
    description: 'Formação superior sólida com ênfase em engenharia de software, algoritmos, estrutura de dados, orientação a objetos e desenvolvimento web moderno.',
    skills: ['Engenharia de Software', 'Estrutura de Dados', 'Arquitetura Web'],
  },
  {
    role: 'Assistente & Estagiário de TI',
    company: 'Casa Publicadora Brasileira (CPB)',
    period: 'Jan 2023 — Dez 2024',
    type: 'work',
    description: 'Gestão de infraestrutura de redes, servidores e transição interna ativa para a equipe de engenharia e desenvolvimento de software.',
    skills: ['Infraestrutura', 'Servidores Linux/Windows', 'Automação'],
  },
];

export default function CareerTimeline() {
  return (
    <section id="trajectory" className="relative z-10 px-4 sm:px-6 py-28 border-t border-slate-800/60">
      <div className="premium-shell space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-wider">
            <History className="h-3.5 w-3.5" />
            <span>TRAJETÓRIA & EVOLUÇÃO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Transição sólida de infraestrutura para engenharia de software e IA.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Uma base técnica sólida em servidores e bancos de dados que fundamenta decisões arquiteturais robustas e desenvolvimento de alta performance.
          </p>
        </div>

        <div className="space-y-4">
          {CAREER_JOURNEY.map((event, index) => {
            const isWork = event.type === 'work';
            const Icon = isWork ? Briefcase : GraduationCap;

            return (
              <motion.article
                key={`${event.role}-${event.company}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="tech-card p-6 sm:p-7 grid gap-4 md:grid-cols-[240px_1fr] items-start"
              >
                <div className="space-y-2 border-b md:border-b-0 md:border-r border-slate-800/80 pb-4 md:pb-0 md:pr-6">
                  <span className="font-mono text-xs font-semibold text-slate-400 block">
                    {event.period}
                  </span>
                  <div className="inline-flex items-center gap-1.5 rounded border border-emerald-500/20 bg-emerald-500/5 px-2 py-0.5 text-[11px] font-mono text-emerald-400">
                    <Icon className="h-3 w-3" />
                    <span>{isWork ? 'EXPERIÊNCIA' : 'FORMAÇÃO'}</span>
                  </div>
                  <p className="text-xs text-slate-400 pt-1 font-mono">
                    {event.company}
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {event.role}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {event.skills.map((skill) => (
                      <span
                        key={skill}
                        className="tech-tag rounded border border-slate-800 bg-slate-900/60 px-2 py-0.5 text-[11px] text-slate-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

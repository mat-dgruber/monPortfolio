'use client';

import { motion } from 'framer-motion';

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
    role: 'Engenheiro de Software',
    company: 'Casa Publicadora Brasileira (CPB)',
    period: 'Fev 2026 - Presente',
    type: 'work',
    description: 'Engenharia fullstack, modernização de sistemas legados enterprise e arquitetura de novas aplicações com Angular, TypeScript e Python, da concepção à publicação.',
    skills: ['Angular', 'TypeScript', 'Python', 'Clean Architecture', 'DDD'],
  },
  {
    role: 'Pós-Graduação em Engenharia de IA Aplicada',
    company: 'UNIPDS / Anhanguera',
    period: 'Cursando',
    type: 'education',
    description: 'Formação em andamento em arquitetura de soluções com Inteligência Artificial, RAG, integração de LLMs e automação de agentes.',
    skills: ['IA Aplicada', 'LLMs', 'RAG', 'Agentes Autônomos'],
  },
  {
    role: 'Analista de Sistemas Júnior',
    company: 'Casa Publicadora Brasileira (CPB)',
    period: 'Dez 2024 - Fev 2026',
    type: 'work',
    description: 'Suporte especializado a sistemas ERP, PDVs e banco de dados relacionais para filiais e áreas internas.',
    skills: ['SQL', 'ERP & PDV', 'Suporte Enterprise'],
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
    period: 'Jan 2023 - Dez 2024',
    type: 'work',
    description: 'Gestão de infraestrutura, servidores, suporte de hardware/software e início da transição interna para desenvolvimento de software.',
    skills: ['Infraestrutura', 'Servidores', 'Suporte Técnico'],
  },
];

export default function CareerTimeline() {
  return (
    <section id="trajectory" className="relative z-10 px-6 py-24">
      <div className="premium-shell space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold text-blue-300">Trajetória</p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-5xl">
            Evolução de infraestrutura para engenharia de software e IA aplicada.
          </h2>
        </div>

        <div className="space-y-5">
          {CAREER_JOURNEY.map((event, index) => (
            <motion.article
              key={`${event.role}-${event.company}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="grid gap-3 border-t border-slate-800 pt-5 md:grid-cols-[220px_1fr]"
            >
              <div>
                <p className="text-sm text-slate-400">{event.period}</p>
                <p className="mt-1 text-sm text-blue-300">{event.type === 'work' ? 'Experiência' : 'Formação'}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{event.role}</h3>
                <p className="text-sm text-slate-400">{event.company}</p>
                <p className="mt-3 leading-7 text-slate-300">{event.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {event.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-slate-800 px-3 py-1 text-xs text-slate-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

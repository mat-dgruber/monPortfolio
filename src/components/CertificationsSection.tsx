'use client';

import { motion } from 'framer-motion';
import { Award, CheckCircle2, FileCheck } from 'lucide-react';

interface Achievement {
  id: string;
  badge: string;
  title: string;
  institution: string;
  description: string;
  highlights: string[];
}

const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'pos-ia',
    badge: 'FORMAÇÃO AVANÇADA',
    title: 'Pós-Graduação em Engenharia de IA Aplicada',
    institution: 'UNIPDS / Anhanguera · Em andamento',
    description: 'Especialização focada em arquitetura de soluções baseadas em IA, pipelines RAG, integração de LLMs e automação com agentes autônomos.',
    highlights: [
      'Arquitetura de soluções com LLMs e agentes autônomos.',
      'Engenharia de prompt, RAG e implantação de modelos locais.',
      'Integração de IA em fluxos técnicos reais.',
    ],
  },
  {
    id: 'grad-ads',
    badge: 'GRADUAÇÃO SUPERIOR',
    title: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Universidade Cruzeiro do Sul · Concluído',
    description: 'Formação superior voltada à engenharia de software, modelagem de dados relacionais, algoritmos e desenvolvimento web full stack.',
    highlights: [
      'Engenharia de software e padrões de projeto.',
      'Modelagem de bancos relacionais e SQL.',
      'Desenvolvimento web full stack moderno.',
    ],
  },
  {
    id: 'harpia-lang',
    badge: 'OPEN SOURCE / CORE COMPILER',
    title: 'Criador da Linguagem Harpia',
    institution: 'Open-source / GitHub',
    description: 'Criação de linguagem reativa em português com parser AST, máquina virtual JIT e ferramentas em Go.',
    highlights: [
      'Parser, AST e runtime autorais.',
      'Sintaxe nativa em português para computação reativa.',
      'CLI e tooling para desenvolvedores.',
    ],
  },
  {
    id: 'openclaude-cli',
    badge: 'CONTRIBUIÇÃO OPEN SOURCE',
    title: 'Adaptação e Contribuição no OpenClaude',
    institution: 'Open-source / GitHub',
    description: 'Adaptação de CLI multi-provedor para automação de código com suporte a protocolo MCP e execução terminal-first.',
    highlights: [
      'Ajustes em fluxos com múltiplos provedores de LLM.',
      'Integração de protocolo MCP e ferramentas externas.',
      'Sessões determinísticas e análise de codebase.',
    ],
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative z-10 px-4 sm:px-6 py-28 border-t border-slate-800/60">
      <div className="premium-shell space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-wider">
            <Award className="h-3.5 w-3.5" />
            <span>CREDENCIAIS & CONQUISTAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Validação técnica que fundamenta a atuação sênior.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Formação acadêmica contínua, criações open-source e projetos de alta complexidade técnica.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {ACHIEVEMENTS.map((achievement, index) => (
            <motion.article
              key={achievement.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="tech-card p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <span className="font-mono text-[11px] font-bold text-emerald-400">
                    {achievement.badge}
                  </span>
                  <FileCheck className="h-4 w-4 text-slate-400" />
                </div>

                <div className="mt-4 space-y-1">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {achievement.title}
                  </h3>
                  <p className="font-mono text-xs text-slate-400">
                    {achievement.institution}
                  </p>
                  <p className="pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>

              <ul className="mt-5 space-y-2 border-t border-slate-800/80 pt-4">
                {achievement.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2 text-xs leading-relaxed text-slate-300">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

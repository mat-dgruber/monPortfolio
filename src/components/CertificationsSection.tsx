'use client';

import { motion } from 'framer-motion';

interface Achievement {
  title: string;
  category: 'educacao' | 'opensource' | 'certificacao';
  institution: string;
  description: string;
  highlights: string[];
}

const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Pós-Graduação em Engenharia de IA Aplicada',
    category: 'educacao',
    institution: 'UNIPDS / Anhanguera · Cursando',
    description: 'Formação em andamento em arquitetura de IA, RAG, integração de LLMs, protocolo MCP e automação de agentes.',
    highlights: [
      'Arquitetura de soluções com LLMs e agentes autônomos.',
      'Engenharia de prompt, RAG e implantação de modelos locais.',
      'Integração de IA em fluxos técnicos reais.',
    ],
  },
  {
    title: 'Graduação em Análise e Desenvolvimento de Sistemas',
    category: 'educacao',
    institution: 'Universidade Cruzeiro do Sul',
    description: 'Formação superior focada em engenharia de software, estrutura de dados, orientação a objetos e desenvolvimento web.',
    highlights: [
      'Engenharia de software e padrões de projeto.',
      'Modelagem de bancos relacionais e SQL.',
      'Desenvolvimento web full stack.',
    ],
  },
  {
    title: 'Criador da Linguagem Harpia',
    category: 'opensource',
    institution: 'Open-source / GitHub',
    description: 'Criação de linguagem reativa em português com parser AST, runtime e ferramentas em Go.',
    highlights: [
      'Parser, AST e runtime autorais.',
      'Sintaxe nativa em português para experimentação técnica.',
      'CLI e tooling para desenvolvedores.',
    ],
  },
  {
    title: 'Adaptação e contribuição no OpenClaude',
    category: 'opensource',
    institution: 'Open-source / GitHub',
    description: 'Adaptação e contribuição em CLI multi-provedor para automação de código, integração MCP e uso terminal-first de agentes.',
    highlights: [
      'Ajustes em fluxos de uso com múltiplos provedores e modelos.',
      'Integração MCP e ferramentas externas.',
      'Sessões, streaming e análise de codebase.',
    ],
  },
];

export default function CertificationsSection() {
  return (
    <section className="relative z-10 px-6 py-24">
      <div className="premium-shell space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold text-blue-300">Credenciais</p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-5xl">
            Credenciais que sustentam a narrativa técnica.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {ACHIEVEMENTS.map((achievement, index) => (
            <motion.article
              key={achievement.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="premium-card p-5"
            >
              <p className="text-sm text-blue-300">{achievement.institution}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{achievement.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{achievement.description}</p>
              <ul className="mt-4 space-y-2">
                {achievement.highlights.slice(0, 2).map((highlight) => (
                  <li key={highlight} className="text-sm leading-6 text-slate-400">
                    {highlight}
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

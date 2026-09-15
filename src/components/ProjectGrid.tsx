'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Code2, FolderGit2 } from 'lucide-react';

interface CaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  context: string;
  problem: string;
  role: string;
  stack: string[];
  impact: string;
  githubUrl: string;
  architectureDetails: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'openclaude',
    number: '01',
    title: 'OpenClaude',
    subtitle: 'CLI Multi-Provedor para Agentes de Código e Ferramentas MCP',
    context: 'Projeto open-source para unificar e orquestrar automação de desenvolvimento guiada por modelos de IA no terminal.',
    problem: 'Fluxos com LLMs, MCP e múltiplos provedores tendem a ficar fragmentados entre CLIs, scripts e integrações isoladas.',
    role: 'Adaptação do projeto, contribuição em fluxos de uso, integração MCP, experiência terminal-first e suporte multi-modelo.',
    stack: ['TypeScript', 'Node.js', 'Bun', 'MCP Protocol', 'LLM Function Calling'],
    impact: 'Ambiente unificado e de alto desempenho para automação de código com OpenAI, Anthropic, Gemini e modelos locais.',
    githubUrl: 'https://github.com/mat-dgruber/openclaude',
    architectureDetails: [
      'Fluxos multi-provedor com suporte a OpenAI, Gemini, DeepSeek, Ollama local e Anthropic.',
      'Integração nativa com o protocolo MCP para execução de ferramentas e chamadas dinâmicas.',
      'Arquitetura terminal-first com gerenciamento determinístico de sessões e histórico.',
    ],
  },
  {
    id: 'harpia',
    number: '02',
    title: 'Harpia Programming Language',
    subtitle: 'Linguagem Reativa em Português com Runtime e VM em Go',
    context: 'Projeto autoral de compilador, parser AST e máquina virtual voltado à computação reativa com sintaxe nativa em português.',
    problem: 'Construir uma linguagem de domínio exige dominar análise léxica, sintática, representação em árvore e execução em baixo nível.',
    role: 'Concepção da gramática, parser AST, VM JIT, ecossistema de testes e CLI de diagnóstico.',
    stack: ['Go', 'AST Parser', 'JIT VM', 'CLI', 'Language Design'],
    impact: 'Demonstração de competência profunda em compiladores, estruturas de dados de baixo nível e runtimes.',
    githubUrl: 'https://github.com/mat-dgruber/harpia',
    architectureDetails: [
      'Parser sintático próprio com validação estática de tipos e árvore AST expressiva.',
      'Runtime reativo com propagação de sinais e isolamento de escopos em Go.',
      'Tooling completo com CLI para compilação, execução e inspeção de bytecodes.',
    ],
  },
  {
    id: 'monfintrack',
    number: '03',
    title: 'monFinTrack',
    subtitle: 'Plataforma Financeira Fullstack com Angular, FastAPI e Insights de IA',
    context: 'Sistema corporativo de gestão financeira com dashboards em tempo real, orçamentos, auditoria e motor de IA analítica.',
    problem: 'Transformar volumes financeiros brutos em análises prescritivas seguras com isolamento estrito de dados multi-tenant.',
    role: 'Engenheiro Fullstack líder: arquitetura de software, UI/UX, backend em FastAPI, segurança Firebase e pipelines de IA.',
    stack: ['Angular', 'TypeScript', 'Python / FastAPI', 'Firebase Auth', 'Gemini API'],
    impact: 'Plataforma robusta em produção, com alta fidelidade de UI, autenticação MFA/TOTP e inteligência preditiva.',
    githubUrl: 'https://github.com/mat-dgruber/CCAT-monFinTrack',
    architectureDetails: [
      'Frontend Angular com arquitetura modular, RxJS reativo, gráficos interativos e dark mode nativo.',
      'Backend assíncrono em FastAPI com schemas Pydantic, autenticação multifator e isolamento por tenant.',
      'Pipeline de IA com Google Gemini para classificação de despesas e geração de relatórios de saúde financeira.',
    ],
  },
  {
    id: 'meucpb',
    number: '04',
    title: 'meuCPB',
    subtitle: 'Portal Corporativo com Padrão BFF (Backend-for-Frontend) e Alta Integração',
    context: 'Plataforma unificada para colaboradores e operações corporativas, orquestrando legados e novos microsserviços.',
    problem: 'Sistemas internos dispersos causavam fricção operacional e gargalos de manutenção.',
    role: 'Arquiteto de ponta a ponta: desenho da camada BFF, front-end reativo, integração com banco de dados corporativo e deploy.',
    stack: ['Angular', 'TypeScript', 'FastAPI', 'SQL Server', 'LDAP / SSO'],
    impact: 'Centralização de operações críticas em uma experiência fluida, reduzindo tempo de processamento interno.',
    githubUrl: 'https://github.com/mat-dgruber/meuCPB',
    architectureDetails: [
      'Camada BFF em FastAPI desacoplando regras de negócio corporativas de integrações de infraestrutura.',
      'Autenticação corporativa integrada com diretórios LDAP e segurança baseada em funções (RBAC).',
      'Consistência de dados com SQL Server e barramento de cache em alta performance.',
    ],
  },
];

export default function ProjectGrid() {
  return (
    <section id="projects" className="relative z-10 px-4 sm:px-6 py-28 border-t border-slate-800/60">
      <div className="premium-shell space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-wider">
            <FolderGit2 className="h-3.5 w-3.5" />
            <span>ARQUITETURA & CASES SELECIONADOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Engenharia em produção, arquitetura limpa e impacto mensurável.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Sistemas desenhados para resolver problemas complexos — de linguagens de programação a plataformas completas com IA.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {CASE_STUDIES.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="tech-card flex flex-col justify-between p-6 sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <span className="font-mono text-xs font-bold text-emerald-400 tracking-wider">
                    CASE // {project.number}
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver repositório do projeto ${project.title} no GitHub`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition"
                  >
                    <Code2 className="h-3.5 w-3.5" />
                    <span>REPOSITÓRIO</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-emerald-400" />
                  </a>
                </div>

                <div className="mt-5 space-y-2">
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-emerald-400/90 leading-relaxed">
                    {project.subtitle}
                  </p>
                  <p className="pt-2 text-sm text-slate-300 leading-relaxed">
                    {project.context}
                  </p>
                </div>

                <div className="mt-6 grid gap-4 text-xs sm:grid-cols-2 border-t border-slate-800/60 pt-5">
                  <div className="space-y-1">
                    <span className="font-mono text-slate-400 uppercase tracking-wider block">
                      Desafio Técnico
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="font-mono text-slate-400 uppercase tracking-wider block">
                      Responsabilidade
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {project.role}
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-md border border-emerald-500/20 bg-emerald-500/5 p-4">
                  <span className="font-mono text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
                    Impacto & Entrega:
                  </span>
                  <p className="mt-1 text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {project.impact}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="tech-tag rounded border border-slate-700/60 bg-slate-900/80 px-2.5 py-1 text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <details className="mt-6 border-t border-slate-800/80 pt-4 group">
                <summary className="cursor-pointer text-xs font-mono text-slate-400 group-hover:text-emerald-400 flex items-center justify-between py-1">
                  <span>DECISÕES DE ARQUITETURA</span>
                  <span className="text-emerald-400">+</span>
                </summary>
                <ul className="mt-3 space-y-2 border-l-2 border-emerald-500/30 pl-4 py-1">
                  {project.architectureDetails.map((detail) => (
                    <li key={detail} className="flex gap-2 text-xs leading-relaxed text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </details>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

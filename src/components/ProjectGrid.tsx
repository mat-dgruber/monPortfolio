'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface CaseStudy {
  id: string;
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
    title: 'OpenClaude',
    subtitle: 'Adaptação e contribuição em CLI multi-provedor para agentes de código',
    context: 'Projeto open-source para unificar automação de desenvolvimento orientada por IA no terminal.',
    problem: 'Fluxos com LLMs, MCP e múltiplos provedores tendem a ficar fragmentados entre CLIs, scripts e integrações isoladas.',
    role: 'Adaptação do projeto, contribuição em fluxos de uso, integração MCP, experiência terminal-first e suporte multi-modelo.',
    stack: ['TypeScript', 'Node.js', 'Bun', 'MCP', 'LLM Function Calling'],
    impact: 'Experiência centralizada para automação de código com múltiplos provedores, modelos e ferramentas externas.',
    githubUrl: 'https://github.com/mat-dgruber/openclaude',
    architectureDetails: [
      'Fluxos multi-provedor para OpenAI, Gemini, DeepSeek, Ollama local e Anthropic.',
      'Integração com protocolo MCP para chamada de ferramentas externas.',
      'Ajustes de experiência terminal-first, sessões e uso com codebases reais.',
    ],
  },
  {
    id: 'harpia',
    title: 'Harpia Programming Language',
    subtitle: 'Linguagem reativa em português com VM em Go',
    context: 'Projeto autoral de linguagem, compilador e runtime voltado a experimentação em sintaxe nativa PT-BR.',
    problem: 'Explorar uma linguagem educacional/técnica exige parser, AST, runtime e ferramentas que conversem entre si.',
    role: 'Desenho da linguagem, parser AST, VM JIT, exemplos de sintaxe e ferramentas auxiliares.',
    stack: ['Go', 'AST Parser', 'JIT VM', 'CLI', 'DSL'],
    impact: 'Demonstra profundidade em compiladores, runtimes e modelagem de ferramentas para desenvolvedores.',
    githubUrl: 'https://github.com/mat-dgruber/harpia',
    architectureDetails: [
      'Parser e representação AST para sintaxe em português.',
      'Runtime reativo com simulação de sinais e eventos.',
      'CLI para auditoria, compilação e geração de artefatos técnicos.',
    ],
  },
  {
    id: 'monfintrack',
    title: 'monFinTrack',
    subtitle: 'Plataforma financeira fullstack com Angular, FastAPI, Firebase e IA',
    context: 'Produto de controle financeiro pessoal com dashboard, transações, orçamentos, multicontas, autenticação Firebase e insights com Google Gemini.',
    problem: 'Gestão financeira pessoal precisa transformar dados fragmentados em visão clara, segura e acionável para o usuário.',
    role: 'Atuação fullstack na arquitetura, UI/UX, front-end Angular, backend FastAPI, Firebase, integrações com IA e publicação do produto.',
    stack: ['Angular', 'TypeScript', 'FastAPI', 'Firebase', 'Gemini API'],
    impact: 'Entrega de uma plataforma financeira completa, com experiência responsiva, segurança, automações e IA aplicada a decisões financeiras.',
    githubUrl: 'https://github.com/mat-dgruber/CCAT-monFinTrack',
    architectureDetails: [
      'Frontend em Angular com dashboard interativo, gráficos, dark mode e experiência responsiva.',
      'Backend FastAPI com Pydantic, Firebase, autenticação, MFA/TOTP e isolamento de dados por usuário.',
      'Integrações com Google Gemini, OCR, relatórios, recorrências, assinaturas e exportações financeiras.',
    ],
  },
  {
    id: 'meucpb',
    title: 'meuCPB',
    subtitle: 'Portal corporativo fullstack com Angular, FastAPI e BFF',
    context: 'Aplicação corporativa para colaboradores da CPB, com SPA em Angular e backend BFF para orquestrar regras e integrações internas.',
    problem: 'Sistemas internos precisam centralizar fluxos, dados e integrações legadas sem comprometer usabilidade, segurança e manutenção.',
    role: 'Responsável pela arquitetura de desenvolvimento de ponta a ponta: front-end, backend, UI/UX, integrações e publicação.',
    stack: ['Angular', 'TypeScript', 'FastAPI', 'SQL Server', 'LDAP'],
    impact: 'Modernização de experiência interna com arquitetura BFF, reatividade no front-end e integração com sistemas corporativos.',
    githubUrl: 'https://github.com/mat-dgruber/meuCPB',
    architectureDetails: [
      'SPA em Angular com TypeScript, RxJS e interface responsiva.',
      'Backend FastAPI no padrão Backend-for-Frontend para regras corporativas.',
      'Integrações com SQL Server, LDAP, Redis e APIs de parceiros.',
    ],
  },
];

export default function ProjectGrid() {
  return (
    <section id="projects" className="relative z-10 px-6 py-24">
      <div className="premium-shell space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-5xl">
            Cases que mostram execução, arquitetura e impacto.
          </h2>
          <p className="text-lg leading-8 text-slate-300">
            Projetos selecionados pela clareza do problema, papel técnico exercido e evidência de entrega.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {CASE_STUDIES.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 22, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="premium-card flex flex-col p-6"
            >
              <div className="space-y-3">
                <p className="text-sm text-blue-300">{project.subtitle}</p>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="leading-7 text-slate-300">{project.context}</p>
              </div>

              <div className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
                <div>
                  <p className="font-semibold text-slate-100">Problema</p>
                  <p className="mt-1 leading-6 text-slate-400">{project.problem}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-100">Meu papel</p>
                  <p className="mt-1 leading-6 text-slate-400">{project.role}</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-4 text-sm text-blue-100">
                <strong className="text-blue-200">Resultado:</strong> {project.impact}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ y: -2, borderColor: 'rgba(96, 165, 250, 0.42)', color: '#dbeafe' }}
                      className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
                    >
                      {item}
                    </motion.span>
                ))}
              </div>

              <details className="mt-6 border-t border-slate-800 pt-5">
                <summary className="cursor-pointer text-sm font-semibold text-slate-200">Ver decisões técnicas</summary>
                <ul className="mt-4 space-y-2">
                  {project.architectureDetails.map((detail) => (
                    <li key={detail} className="flex gap-2 text-sm leading-6 text-slate-400">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-300" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </details>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200"
              >
                Ver repositório <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

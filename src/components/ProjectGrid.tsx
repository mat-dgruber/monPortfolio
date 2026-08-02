'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, Code, CheckCircle, Terminal as TerminalIcon, Cpu, X, Rocket } from 'lucide-react';
import { playSound } from '@/utils/audioManager';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  banner: string;
  tags: string[];
  metrics: string;
  githubUrl: string;
  highlights: string[];
  architectureDetails: string[];
}

const PROJECTS: Project[] = [
  {
    id: 'openclaude',
    title: 'OpenClaude',
    subtitle: 'CLI Multi-Provedor & Protocolo MCP',
    description: 'CLI open-source para automação de código e execução multi-modelo com suporte a mais de 200 LLMs (OpenAI, Gemini, Ollama, DeepSeek) e protocolo MCP.',
    fullDescription: 'O OpenClaude é uma ferramenta CLI avançada projetada para unificar o fluxo de desenvolvimento orientado a IA em um único terminal. Ele suporta a execução de comandos autônomos, busca inteligente no codebase via PageRank (RepoMap), inspeção de dependências e integração nativa com o Protocolo MCP (Model Context Protocol).',
    banner: '/images/openclaude_banner_1785639308843.png',
    tags: ['TypeScript', 'Node.js', 'Bun', 'Protocolo MCP', 'LLM Function Calling', 'gRPC'],
    metrics: '+200 Modelos | Suporte MCP & Terminal-First',
    githubUrl: 'https://github.com/mat-dgruber/openclaude',
    highlights: [
      'Execução multi-provedor (OpenAI, Gemini 2.0, DeepSeek, Ollama local e Anthropic)',
      'Suporte completo ao protocolo MCP (Model Context Protocol) para chamadas de ferramentas externas',
      'Modo de sessões em segundo plano (--bg) e streaming de respostas em tempo real',
      'Visualização e inteligência de codebase com algoritmo PageRank (RepoMap)',
    ],
    architectureDetails: [
      'Frontend / Execução: Node.js >= 22.0 / Bun 1.3+ com CLI interativa',
      'Protocolos: REST API, gRPC bidirecional para execuções headless',
      'Gerenciamento de contexto com resiliência a modelos locais (Ollama 32k tokens)',
    ],
  },
  {
    id: 'harpia',
    title: 'Harpia Programming Language',
    subtitle: 'Linguagem Reativa & Runtime NATIVO em Go',
    description: 'Linguagem de programação reativa e runtime de alta performance orientada a Clean Architecture/DDD com sintaxe nativa em Português Brasileiro.',
    fullDescription: 'A Harpia é uma linguagem de programação brasileira projetada por Matheus Diniz para ir além da lógica básica e criar aplicações industriais SPA e backend. O projeto conta com analisador léxico, parser AST de descendência recursiva e uma Direct-Threaded JIT VM implementada nativamente em Go.',
    banner: '/images/harpia_banner_1785639324586.png',
    tags: ['Go', 'Compiler Design', 'AST Parsers', 'Clean Arch', 'Reatividade Nativa', 'JIT VM'],
    metrics: 'AST Executada em Sub-milissegundos nativo em Go',
    githubUrl: 'https://github.com/mat-dgruber/Harpia',
    highlights: [
      'Direct-Threaded JIT VM traduzindo bytecodes em chamadas Go concorrentes nativas',
      'Reatividade nativa baseada em Sinais e Efeitos para aplicações SPA na web',
      'Gerador estático de estrutura por Clean Architecture & Domain-Driven Design (DDD)',
      'Suíte CLI com 29 comandos (LSP para VS Code, linter semântico, REPL, TUI e gerador PWA)',
    ],
    architectureDetails: [
      'Core & Compiler: Go (Parser AST + Analisador Léxico + Evaluator)',
      'Alocação de Memória: Pool Eden para pré-boxeamento de inteiros curtos O(1)',
      'Clean Arch Enforcement: Validador estático de ciclos e de limites de camadas',
    ],
  },
  {
    id: 'lamed',
    title: 'Lamed Educational Platform',
    subtitle: 'Plataforma Enterprise & Sincronização Offline',
    description: 'Plataforma educacional enterprise com sincronização offline em nuvem, ingestão automatizada de vídeos/áudios do YouTube e distribuição para áreas com pouca conectividade.',
    fullDescription: 'O Lamed é um ecossistema educacional de missão crítica construído com Angular no frontend e FastAPI (Python) no backend. Ele gerencia a entrega de estudos semanais e pacotes de mídias criptografados para usuários com conectividade limitada.',
    banner: '/images/lamed_banner_1785639364938.png',
    tags: ['FastAPI (Python)', 'Angular 20+', 'PostgreSQL', 'Firebase', 'Docker', 'uv'],
    metrics: 'Sincronização Offline Multi-tenant para Milhares de Usuários',
    githubUrl: 'https://github.com/mat-dgruber/Lamed',
    highlights: [
      'Sistema de sincronização offline resiliente com ingestão assíncrona de mídias',
      'Integração com YouTube Data API v3 e automação de agendamentos via webhooks/cron',
      'Autenticação OAuth2 + RBAC com validação estrita de segurança e tokens JWT',
      'Arquitetura em containers orquestrada via Docker Compose e empacotamento com uv',
    ],
    architectureDetails: [
      'Backend: Python 3.14 + FastAPI + Pydantic (Single Source of Truth)',
      'Frontend: Angular Standalone Components com gerenciamento por Signals',
      'Persistência: Cloud Firestore / PostgreSQL com suporte a pacotes criptografados',
    ],
  },
  {
    id: 'monfintrack',
    title: 'CCAT-monFinTrack',
    subtitle: 'Plataforma de Gestão Financeira & IA',
    description: 'Aplicação completa para acompanhamento, gestão de movimentações e controle financeiro construída com arquitetura moderna e insights via IA Gemini.',
    fullDescription: 'O MonFinTrack é uma plataforma de gestão financeira pessoal e empresarial que oferece controle de transações, orçamentos inteligentes por categoria, gerenciamento de assinaturas recorrentes e insights gerados por Inteligência Artificial (Google Gemini).',
    banner: '/images/fintech_banner_1785639390086.png',
    tags: ['Angular 20+', 'PrimeNG', 'FastAPI', 'Google Gemini AI', 'Firebase', 'Chart.js'],
    metrics: 'Dashboards Reativos & IA Financeira',
    githubUrl: 'https://github.com/mat-dgruber/CCAT-monFinTrack',
    highlights: [
      'Dashboard reativo com gráficos dinâmicos (Chart.js) e monitoramento de saúde financeira',
      'Integração com Google Gemini AI para relatórios e conselhos financeiros personalizados',
      'Controle multicontas (bancos, cartões e investimentos) e automação de recorrências',
      'Autenticação robusta com 2FA (MFA/TOTP) e isolamento rigoroso por usuário no Firestore',
    ],
    architectureDetails: [
      'Frontend: Angular 20 + PrimeNG + Tailwind CSS + Chart.js',
      'Backend: Python 3.13 + FastAPI + Google GenAI SDK',
      'Segurança: Firebase Auth com segundo fator TOTP e suporte a Docker Compose',
    ],
  },
];

export default function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProjectModal = (proj: Project) => {
    playSound('click');
    setSelectedProject(proj);
  };

  const closeModal = () => {
    playSound('hover');
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto z-10 relative">
      <div className="text-center space-y-3 mb-14">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-sans flex items-center justify-center gap-3">
          <Rocket className="w-8 h-8 text-cyan-400" /> Projetos em Destaque
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
          Arquiteturas reais de software, compiladores, ecossistemas de IA e plataformas enterprise desenvolvidos por Matheus Diniz.
        </p>
      </div>

      {/* Grid with Framer Motion */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group glass-cyber rounded-xl overflow-hidden border border-sky-500/30 hover:border-cyan-400 transition-colors shadow-glow-cyan flex flex-col justify-between cursor-pointer"
            onClick={() => openProjectModal(project)}
            onMouseEnter={() => playSound('hover')}
          >
            {/* Banner Image Parent Container with explicit inline style position relative */}
            <div className="relative w-full h-56 overflow-hidden bg-slate-950" style={{ position: 'relative' }}>
              <Image
                src={project.banner}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-slate-900/90 border border-sky-500/40 font-mono text-[10px] text-cyan-300 font-bold">
                {project.metrics}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-cyan-400 font-semibold">{project.subtitle}</span>
                <h3 className="text-xl font-extrabold text-white font-sans group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="space-y-4 pt-4 border-t border-sky-500/20">
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {project.tags.slice(0, 4).map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-sky-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-2">
                  <span className="font-mono text-xs text-cyan-400 group-hover:text-white font-bold transition-colors flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Detalhes da Arquitetura
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                      playSound('click');
                    }}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-300 hover:text-cyan-400 font-bold transition-colors"
                  >
                    <Code className="w-4 h-4" /> GitHub <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Expansivo do Projeto */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-cyber rounded-2xl border border-cyan-400/50 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-glow-cyan p-6 sm:p-8 space-y-6 relative text-slate-100"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white border border-slate-700 hover:border-cyan-400 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 pr-8">
                <span className="px-3 py-1 rounded bg-sky-950 border border-sky-500/40 text-cyan-300 font-mono text-xs font-bold">
                  {selectedProject.metrics}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-cyan-300">{selectedProject.subtitle}</p>
              </div>

              <div className="relative w-full h-64 rounded-xl overflow-hidden border border-sky-500/30">
                <Image
                  src={selectedProject.banner}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                />
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <TerminalIcon className="w-4 h-4 text-cyan-400" /> Visão Geral Profissional
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> Destaques &amp; Funcionalidades Core
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
                  {selectedProject.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs">
                <h4 className="font-bold text-purple-400 uppercase flex items-center gap-1.5">
                  <Cpu className="w-4 h-4" /> Especificações Técnicas &amp; Arquitetura
                </h4>
                {selectedProject.architectureDetails.map((a, aIdx) => (
                  <p key={aIdx} className="text-slate-300">
                    &gt; {a}
                  </p>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playSound('click')}
                  className="px-5 py-2.5 rounded bg-sky-600 hover:bg-sky-500 text-white font-mono text-xs font-bold shadow-glow-cyan flex items-center gap-2 transition-colors"
                >
                  <Code className="w-4 h-4" /> ACESSAR REPOSITÓRIO GITHUB <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={closeModal}
                  className="px-4 py-2.5 rounded bg-slate-900 border border-slate-700 text-slate-300 hover:text-white font-mono text-xs"
                >
                  FECHAR
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

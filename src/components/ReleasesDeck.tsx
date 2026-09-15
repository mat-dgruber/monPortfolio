'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/constants';

interface ReleaseItem {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  stack: string;
  impact: string;
  details: string;
  githubUrl: string;
  image: string;
}

const RELEASES: ReleaseItem[] = [
  {
    id: 'openclaude',
    code: 'RELEASE 01 · 2025/2026',
    title: 'OpenClaude CLI',
    subtitle: 'Orquestrador de Modelos de IA e Ferramentas MCP no Terminal',
    stack: 'TypeScript · Node.js · Bun · Protocolo MCP · OpenAI / Gemini / Claude',
    impact: 'Ambiente unificado de terminal para automação com inteligência artificial, conectando chamadas de ferramentas e múltiplos provedores sem fragmentação.',
    details: 'Gerenciamento determinístico de contexto, execução de ferramentas locais e remotas via protocolo MCP e suporte a modelos locais (Ollama) e em nuvem.',
    githubUrl: 'https://github.com/mat-dgruber/openclaude',
    image: '/images/openclaude_banner_1785639308843.png',
  },
  {
    id: 'harpia',
    code: 'RELEASE 02 · 2024/2025',
    title: 'Harpia Language',
    subtitle: 'Linguagem de Programação Reativa em Português com VM em Go',
    stack: 'Go · Análise Léxica · Parser AST · Máquina Virtual JIT · CLI de Bytecode',
    impact: 'Compilador autoral completo, transformando código de sintaxe nativa em árvore sintática abstrata e bytecodes executados em máquina virtual de alto desempenho.',
    details: 'Propagação de sinais reativos, inferência estática de tipos, isolamento de escopo em baixo nível e conjunto de instruções em bytecode customizado.',
    githubUrl: 'https://github.com/mat-dgruber/harpia',
    image: '/images/harpia_banner_1785639324586.png',
  },
  {
    id: 'cpb-despesas',
    code: 'RELEASE 03 · 2025/2026',
    title: 'CPB Despesas',
    subtitle: 'Sistema Corporativo de Gestão de Despesas Individuais',
    stack: 'Angular · TypeScript · Python / FastAPI · SQL Server · Workflow de Aprovações',
    impact: 'Plataforma enterprise para prestação de contas individuais, upload de comprovantes fiscais, auditoria em tempo real e esteira de aprovação multinível.',
    details: 'Frontend reativo com formulários dinâmicos complexos, validação de notas fiscais, controle rigoroso de centro de custos e redução de 70% no tempo de conferência contábil.',
    githubUrl: 'https://github.com/mat-dgruber',
    image: '/images/fintech_banner_1785639390086.png',
  },
  {
    id: 'meucpb',
    code: 'RELEASE 04 · 2026',
    title: 'meuCPB Portal',
    subtitle: 'Portal Corporativo com Padrão BFF (Backend-for-Frontend)',
    stack: 'Angular · FastAPI · Python · SQL Server · LDAP / SSO Corporativo',
    impact: 'Centralização de operações críticas empresariais, reduzindo a fricção entre microsserviços legados e novas aplicações de alta disponibilidade.',
    details: 'Camada de orquestração BFF desacoplando regras de negócio corporativas, autenticação unificada via SSO e governança de permissões baseada em funções (RBAC).',
    githubUrl: 'https://github.com/mat-dgruber/meuCPB',
    image: '/images/lamed_banner_1785639364938.png',
  },
  {
    id: 'monfintrack',
    code: 'RELEASE 05 · 2025',
    title: 'monFinTrack',
    subtitle: 'Plataforma Financeira Fullstack com Dashboards e IA Preditiva',
    stack: 'Angular · TypeScript · Python / FastAPI · Firebase Auth · Gemini API',
    impact: 'Plataforma empresarial de controle orçamentário com processamento assíncrono, autenticação segura em duas etapas (MFA) e categorização automática por IA.',
    details: 'Arquitetura modular em Angular, backend reativo em FastAPI com validação estrita via Pydantic e insights preditivos de saúde financeira corporativa.',
    githubUrl: 'https://github.com/mat-dgruber/CCAT-monFinTrack',
    image: '/images/fintech_banner_1785639390086.png',
  },
  {
    id: 'lamed',
    code: 'RELEASE 06 · 2024/2025',
    title: 'Lamed Educational Platform',
    subtitle: 'Plataforma Educacional com Arquitetura Offline-First',
    stack: 'Python · FastAPI · PostgreSQL · Offline Sync · Frontend Reativo',
    impact: 'Solução educacional desenvolvida para garantir continuidade pedagógica mesmo em cenários de conectividade instável, com sincronização assíncrona.',
    details: 'Armazenamento e rastreamento de progresso local com mecanismo de reconciliação de dados ao reconectar, garantindo integridade e experiência fluida ao estudante.',
    githubUrl: 'https://github.com/mat-dgruber/lamed',
    image: '/images/lamed_banner_1785639364938.png',
  },
  {
    id: 'landing-pages',
    code: 'RELEASE 07 · 2025/2026',
    title: 'Landing Pages & Web Visuals',
    subtitle: 'Páginas de Alta Conversão, Portfólios e Micro-Interações',
    stack: 'Next.js / Angular · Tailwind CSS · Framer Motion · Core Web Vitals · SEO/AEO',
    impact: 'Desenvolvimento de experiências web de alta fidelidade estética e conversão, com cases em produção como monFinTrack e mariaizabela.com.br.',
    details: 'Arquitetura orientada a conversão (CRO), micro-interações a 60fps com aceleração por GPU, pontuação máxima no Google Lighthouse e indexação semântica rica para marcas e criadores.',
    githubUrl: 'https://mariaizabela.com.br',
    image: '/images/openclaude_banner_1785639308843.png',
  },
];

export default function ReleasesDeck() {
  const [deckOrder, setDeckOrder] = useState<number[]>([0, 1, 2, 3, 4, 5, 6]);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [thrownDirection, setThrownDirection] = useState<'left' | 'right' | null>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null);

  const activeIndex = deckOrder[0];
  const activeRelease = RELEASES[activeIndex];

  const cycleNext = useCallback((direction: 'left' | 'right' = 'right') => {
    setThrownDirection(direction);
    setTimeout(() => {
      setDeckOrder((prev) => [...prev.slice(1), prev[0]]);
      setThrownDirection(null);
      setDragOffset(0);
    }, 280);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    pointerStartRef.current = { x: e.clientX, y: e.clientY };
    setIsDragging(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !pointerStartRef.current) return;
    const deltaX = e.clientX - pointerStartRef.current.x;
    setDragOffset(deltaX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // safe fallback
    }

    const deckWidth = deckRef.current?.offsetWidth || 360;
    const threshold = deckWidth * 0.12;

    if (dragOffset > threshold) {
      cycleNext('right');
    } else if (dragOffset < -threshold) {
      cycleNext('left');
    } else {
      setDragOffset(0);
    }
    pointerStartRef.current = null;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      cycleNext('right');
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      cycleNext('left');
    }
  };

  return (
    <section
      id="releases"
      className="relative py-28 bg-[#0A0C0E] border-t border-[rgba(237,231,220,0.13)]"
      aria-label="Catálogo de Sistemas e Cases Autorais"
    >
      <div className="shell-container grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-16">
        {/* Left Column: Headline, Lede & Action Buttons */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3FA2AD]" />
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-[#9EA5A8]">
              [02 / CASES & SISTEMAS EM PRODUÇÃO]
            </span>
          </div>

          <div className="space-y-4">
            <h2 className="font-display font-bold text-[clamp(30px,4.2vw,52px)] text-[#EDE7DC] leading-[1.08] tracking-[-0.025em]">
              Sistemas e releases autorais construídos para escala.
            </h2>
            <p className="font-body text-[15px] sm:text-[16.5px] text-[#9EA5A8] leading-relaxed max-w-[50ch]">
              O catálogo ao lado funciona como uma pilha física de cartas de engenharia. Cada projeto
              resolve dores concretas: da criação de linguagens e compiladores à orquestração de
              agentes com protocolo MCP e portais corporativos resilientes.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <a
              href="https://github.com/mat-dgruber"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#EDE7DC] text-[#0A0C0E] text-[11px] font-bold uppercase tracking-[0.14em] hover:bg-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Ver no GitHub</span>
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[rgba(237,231,220,0.25)] text-[#EDE7DC] text-[11px] font-semibold uppercase tracking-[0.14em] hover:border-[#3FA2AD] hover:text-[#3FA2AD] transition-colors"
            >
              <span>Conversar no WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Active Release Explanatory Box (Didático e Detalhado) */}
          <div className="p-5 rounded-sm border border-[rgba(237,231,220,0.14)] bg-[#101317]/60 max-w-lg space-y-3">
            <div className="flex items-center justify-between text-[11px] font-body text-[#6C7378] tracking-[0.1em] uppercase pb-2 border-b border-[rgba(237,231,220,0.08)]">
              <span className="text-[#E8913C] font-semibold tracking-[0.12em]">{activeRelease.code}</span>
              <span className="text-[#3FA2AD] font-semibold">ATIVO NO DECK</span>
            </div>
            <div>
              <h3 className="font-display font-semibold text-[16px] text-[#EDE7DC]">
                {activeRelease.title}
              </h3>
              <p className="font-body text-[13px] text-[#9EA5A8] pt-1 leading-relaxed">
                {activeRelease.impact}
              </p>
            </div>
            <div className="pt-2 border-t border-[rgba(237,231,220,0.08)]">
              <span className="block font-body text-[10.5px] uppercase tracking-[0.12em] text-[#6C7378] mb-1">
                DETALHAMENTO ARQUITETURAL
              </span>
              <p className="font-body text-[12px] text-[#EDE7DC]/80 leading-normal">
                {activeRelease.details}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: The Throwable Card Deck */}
        <div className="flex flex-col items-center justify-center">
          <div
            ref={deckRef}
            tabIndex={0}
            role="region"
            aria-roledescription="Pilha interativa de projetos"
            onKeyDown={handleKeyDown}
            className="relative w-[300px] h-[310px] sm:w-[380px] sm:h-[390px] md:w-[420px] md:h-[430px] select-none focus:outline-none focus:ring-1 focus:ring-[#3FA2AD]"
            style={{ touchAction: 'pan-y' }}
            aria-label="Pilha interativa de projetos. Pressione as setas esquerda ou direita para descartar e alternar."
          >
            {deckOrder.map((releaseIdx, stackPosition) => {
              const item = RELEASES[releaseIdx];
              const isTop = stackPosition === 0;

              // Physical offsets for the stack (up to 4 visible tiers)
              const stackOffsets = [
                { x: 0, y: 0, rotate: 0, scale: 1.0, zIndex: 40 },
                { x: 12, y: -10, rotate: 2.2, scale: 0.96, zIndex: 30 },
                { x: 22, y: -20, rotate: -2.8, scale: 0.91, zIndex: 20 },
                { x: 30, y: -28, rotate: 1.6, scale: 0.86, zIndex: 10 },
              ];

              const cfg = stackOffsets[Math.min(stackPosition, 3)];

              // Drag calculation for top card
              let currentX = cfg.x;
              let currentY = cfg.y;
              let currentRotate = cfg.rotate;
              let currentScale = cfg.scale;

              if (isTop) {
                if (thrownDirection === 'right') {
                  currentX = 480;
                  currentY = -40;
                  currentRotate = 18;
                } else if (thrownDirection === 'left') {
                  currentX = -480;
                  currentY = -40;
                  currentRotate = -18;
                } else if (isDragging) {
                  currentX = dragOffset;
                  currentRotate = dragOffset * 0.07;
                  currentScale = 1.02;
                }
              }

              return (
                <div
                  key={item.id}
                  onPointerDown={isTop ? handlePointerDown : undefined}
                  onPointerMove={isTop ? handlePointerMove : undefined}
                  onPointerUp={isTop ? handlePointerUp : undefined}
                  onPointerCancel={isTop ? handlePointerUp : undefined}
                  style={{
                    transform: `translate3d(${currentX}px, ${currentY}px, 0) rotate(${currentRotate}deg) scale(${currentScale})`,
                    zIndex: cfg.zIndex,
                    transition: isDragging && isTop ? 'none' : 'transform 260ms cubic-bezier(0.2, 0.9, 0.3, 1)',
                    cursor: isTop ? (isDragging ? 'grabbing' : 'grab') : 'default',
                  }}
                  className="absolute inset-0 rounded-sm bg-[#101317] border border-[rgba(237,231,220,0.16)] deck-card-shadow overflow-hidden flex flex-col justify-between p-5 sm:p-6"
                >
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-[rgba(237,231,220,0.1)] pb-3">
                    <span className="font-body text-[10.5px] font-bold text-[#E8913C] tracking-[0.14em] uppercase">
                      {item.code}
                    </span>
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[#9EA5A8] hover:text-[#EDE7DC] transition-colors"
                      aria-label={`Ver repositório do projeto ${item.title}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Card Media Preview */}
                  <div className="relative w-full h-[125px] sm:h-[175px] my-2 rounded-xs overflow-hidden border border-[rgba(237,231,220,0.08)] bg-[#0A0C0E]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center opacity-85 hover:opacity-100 transition-opacity"
                      sizes="(max-width: 768px) 300px, 420px"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="space-y-1 pt-1">
                    <h4 className="font-display font-bold text-[17px] sm:text-[21px] text-[#EDE7DC] tracking-[-0.02em]">
                      {item.title}
                    </h4>
                    <p className="font-body text-[12px] text-[#9EA5A8] line-clamp-2">
                      {item.subtitle}
                    </p>
                    <div className="pt-2">
                      <span className="font-body text-[10px] sm:text-[10.5px] uppercase tracking-[0.12em] text-[#6C7378] block truncate">
                        {item.stack}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Hint Line & Progress Dots */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              {RELEASES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    const foundPos = deckOrder.indexOf(idx);
                    if (foundPos > 0) {
                      setDeckOrder((prev) => [...prev.slice(foundPos), ...prev.slice(0, foundPos)]);
                    }
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx
                      ? 'w-6 bg-[#3FA2AD]'
                      : 'w-1.5 bg-[rgba(237,231,220,0.2)] hover:bg-[rgba(237,231,220,0.4)]'
                  }`}
                  aria-label={`Ver case número ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2 font-body text-[10.5px] uppercase tracking-[0.14em] text-[#6C7378]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C]" />
              <span>DESLIZE O CARD OU USE AS SETAS ← / →</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

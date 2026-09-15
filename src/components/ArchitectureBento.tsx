'use client';

import React, { useRef, useState, MouseEvent } from 'react';
import { Cpu, Layers, Bot, Zap, Terminal, Building, Rocket } from 'lucide-react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-sm border border-[rgba(237,231,220,0.13)] bg-[#101317] p-6 sm:p-8 overflow-hidden transition-colors ${className}`}
    >
      {/* Dynamic Cursor Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(63, 162, 173, 0.12), transparent 80%)`,
        }}
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default function ArchitectureBento() {
  const [activeAudience, setActiveAudience] = useState<'tech' | 'business'>('business');

  return (
    <section
      id="pilares"
      className="relative py-28 bg-[#0A0C0E] border-t border-[rgba(237,231,220,0.13)]"
      aria-label="Pilares de Engenharia e Métricas de Impacto"
    >
      <div className="shell-container space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3FA2AD]" />
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-[#9EA5A8]">
              [01.5 / ARQUITETURA & PILARES DE AUTORIDADE]
            </span>
          </div>
          <h2 className="font-display font-bold text-[clamp(28px,3.8vw,50px)] text-[#EDE7DC] leading-[1.1] tracking-[-0.025em]">
            Computação profunda, alta disponibilidade e IA aplicada em produção.
          </h2>
          <p className="font-body text-[15px] sm:text-[16.5px] text-[#9EA5A8] leading-relaxed max-w-[54ch]">
            Três disciplinas unificadas em uma visão de engenharia pragmática: do design de compiladores
            e runtimes à construção de plataformas corporativas resilientes e agentes autônomos.
          </p>
        </div>

        {/* The 4-Part Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 (Span 2): O Tríplice Eixo de Especialidade */}
          <SpotlightCard className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between border-b border-[rgba(237,231,220,0.08)] pb-4">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#3FA2AD]" />
                <span className="font-body text-[11px] font-bold uppercase tracking-[0.14em] text-[#EDE7DC]">
                  O Tríplice Eixo de Engenharia
                </span>
              </div>
              <span className="font-body text-[10px] uppercase tracking-[0.12em] text-[#6C7378]">
                Visão Sistêmica
              </span>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              {/* Eixo 1: Baixo Nível */}
              <div className="p-4 rounded-xs border border-[rgba(237,231,220,0.08)] bg-[#0A0C0E]/50 space-y-2.5">
                <div className="w-8 h-8 rounded-xs border border-[rgba(63,162,173,0.3)] bg-[rgba(63,162,173,0.08)] flex items-center justify-center text-[#3FA2AD]">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="font-display font-semibold text-[15px] text-[#EDE7DC]">
                  Baixo Nível & Runtimes
                </h3>
                <p className="font-body text-[12px] text-[#9EA5A8] leading-relaxed">
                  Parsing sintático, AST, emissão de bytecode e máquinas virtuais. Domínio da base computacional.
                </p>
                <span className="block font-body text-[10px] font-semibold tracking-[0.1em] uppercase text-[#3FA2AD] pt-1">
                  CASE: LAMED VM
                </span>
              </div>

              {/* Eixo 2: Aplicações & Escala */}
              <div className="p-4 rounded-xs border border-[rgba(237,231,220,0.08)] bg-[#0A0C0E]/50 space-y-2.5">
                <div className="w-8 h-8 rounded-xs border border-[rgba(237,231,220,0.2)] bg-[rgba(237,231,220,0.05)] flex items-center justify-center text-[#EDE7DC]">
                  <Terminal className="w-4 h-4" />
                </div>
                <h3 className="font-display font-semibold text-[15px] text-[#EDE7DC]">
                  Arquitetura de Aplicações
                </h3>
                <p className="font-body text-[12px] text-[#9EA5A8] leading-relaxed">
                  Next.js, TypeScript, PostgreSQL e Clean Architecture. Sistemas corporativos resilientes.
                </p>
                <span className="block font-body text-[10px] font-semibold tracking-[0.1em] uppercase text-[#EDE7DC] pt-1">
                  CASE: CPB DESPESAS
                </span>
              </div>

              {/* Eixo 3: IA Aplicada & MCP */}
              <div className="p-4 rounded-xs border border-[rgba(232,145,60,0.3)] bg-[rgba(232,145,60,0.08)] space-y-2.5">
                <div className="w-8 h-8 rounded-xs border border-[rgba(232,145,60,0.4)] bg-[rgba(232,145,60,0.12)] flex items-center justify-center text-[#E8913C]">
                  <Bot className="w-4 h-4" />
                </div>
                <h3 className="font-display font-semibold text-[15px] text-[#EDE7DC]">
                  IA Aplicada & Agentes
                </h3>
                <p className="font-body text-[12px] text-[#9EA5A8] leading-relaxed">
                  Protocolo MCP (Model Context Protocol), ferramentas para LLMs e execução local via Ollama.
                </p>
                <span className="block font-body text-[10px] font-semibold tracking-[0.1em] uppercase text-[#E8913C] pt-1">
                  CASE: OPENCLAUDE CLI
                </span>
              </div>
            </div>
          </SpotlightCard>

          {/* Card 2: Métricas de Impacto em Produção */}
          <SpotlightCard className="space-y-6 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-[rgba(237,231,220,0.08)] pb-4">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#E8913C]" />
                <span className="font-body text-[11px] font-bold uppercase tracking-[0.14em] text-[#EDE7DC]">
                  Métricas em Números
                </span>
              </div>
              <span className="font-body text-[10px] uppercase tracking-[0.12em] text-[#6C7378]">
                Produção
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xs bg-[#0A0C0E]/60 border border-[rgba(237,231,220,0.06)]">
                <span className="block font-display text-[28px] sm:text-[32px] font-bold text-[#3FA2AD] leading-none">
                  03+
                </span>
                <span className="block font-body text-[10.5px] uppercase tracking-[0.12em] text-[#9EA5A8] mt-2">
                  Anos construindo software
                </span>
              </div>

              <div className="p-3.5 rounded-xs bg-[#0A0C0E]/60 border border-[rgba(237,231,220,0.06)]">
                <span className="block font-display text-[28px] sm:text-[32px] font-bold text-[#E8913C] leading-none">
                  07+
                </span>
                <span className="block font-body text-[10.5px] uppercase tracking-[0.12em] text-[#9EA5A8] mt-2">
                  Sistemas e releases autorais
                </span>
              </div>

              <div className="p-3.5 rounded-xs bg-[#0A0C0E]/60 border border-[rgba(237,231,220,0.06)]">
                <span className="block font-display text-[28px] sm:text-[32px] font-bold text-[#EDE7DC] leading-none">
                  100%
                </span>
                <span className="block font-body text-[10.5px] uppercase tracking-[0.12em] text-[#9EA5A8] mt-2">
                  Type-Safe & Zero Slop
                </span>
              </div>

              <div className="p-3.5 rounded-xs bg-[#0A0C0E]/60 border border-[rgba(237,231,220,0.06)]">
                <span className="block font-display text-[28px] sm:text-[32px] font-bold text-[#3FA2AD] leading-none">
                  MCP
                </span>
                <span className="block font-body text-[10.5px] uppercase tracking-[0.12em] text-[#9EA5A8] mt-2">
                  Protocolo Aberto em Produção
                </span>
              </div>
            </div>
          </SpotlightCard>

          {/* Card 3: Dualidade de Entrega (Para Tech Leads vs Para Negócios) */}
          <SpotlightCard className="lg:col-span-3 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[rgba(237,231,220,0.08)] pb-4">
              <div>
                <span className="font-body text-[11px] font-bold uppercase tracking-[0.14em] text-[#EDE7DC]">
                  Entrega de Valor com Precisão Cirúrgica
                </span>
                <p className="font-body text-[12.5px] text-[#9EA5A8] pt-0.5">
                  Como atuo dependendo do objetivo do seu time ou projeto.
                </p>
              </div>

              {/* Toggle Buttons */}
              <div className="flex items-center rounded-full border border-[rgba(237,231,220,0.18)] p-1 bg-[#0A0C0E] w-fit">
                <button
                  type="button"
                  onClick={() => setActiveAudience('business')}
                  className={`px-4 py-1.5 rounded-full font-body text-[10.5px] font-bold uppercase tracking-[0.12em] transition-all flex items-center gap-1.5 ${
                    activeAudience === 'business'
                      ? 'bg-[#EDE7DC] text-[#0A0C0E]'
                      : 'text-[#9EA5A8] hover:text-[#EDE7DC]'
                  }`}
                >
                  <Rocket className="w-3.5 h-3.5" />
                  <span>Para Negócios & Consultoria</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveAudience('tech')}
                  className={`px-4 py-1.5 rounded-full font-body text-[10.5px] font-bold uppercase tracking-[0.12em] transition-all flex items-center gap-1.5 ${
                    activeAudience === 'tech'
                      ? 'bg-[#EDE7DC] text-[#0A0C0E]'
                      : 'text-[#9EA5A8] hover:text-[#EDE7DC]'
                  }`}
                >
                  <Building className="w-3.5 h-3.5" />
                  <span>Para Tech Leads & Times</span>
                </button>
              </div>
            </div>

            {/* Dynamic Content Based on Selection */}
            {activeAudience === 'tech' ? (
              <div className="grid sm:grid-cols-3 gap-6 pt-2">
                <div className="space-y-2">
                  <span className="font-body text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#3FA2AD] block">
                    01. ARQUITETURA RESILIENTE
                  </span>
                  <p className="font-body text-[13px] text-[#EDE7DC]/85 leading-relaxed">
                    Decisões de engenharia pautadas em ADRs, separação rígida de camadas (Clean Arch),
                    injeção de dependências e previsibilidade em produção.
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="font-body text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#3FA2AD] block">
                    02. CÓDIGO SUSTENTÁVEL
                  </span>
                  <p className="font-body text-[13px] text-[#EDE7DC]/85 leading-relaxed">
                    TypeScript estrito sem <code className="text-[#E8913C]">any</code>, contratos de API com
                    validação de schema (Zod) e cobertura de testes determinística.
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="font-body text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#3FA2AD] block">
                    03. VISÃO DE BAIXO NÍVEL
                  </span>
                  <p className="font-body text-[13px] text-[#EDE7DC]/85 leading-relaxed">
                    Entendimento da camada de hardware, memória, loops de eventos e pipelines de compilação
                    para resolver gargalos que abstrações escondem.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid sm:grid-cols-3 gap-6 pt-2">
                <div className="space-y-2">
                  <span className="font-body text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#E8913C] block">
                    01. VELOCIDADE COM PRECISÃO
                  </span>
                  <p className="font-body text-[13px] text-[#EDE7DC]/85 leading-relaxed">
                    Entrega rápida de produtos funcionais, portais corporativos e landing pages de altíssima
                    conversão que diferenciam a marca de concorrentes.
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="font-body text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#E8913C] block">
                    02. AUTOMAÇÃO COM IA QUE FUNCIONA
                  </span>
                  <p className="font-body text-[13px] text-[#EDE7DC]/85 leading-relaxed">
                    Integração de agentes autônomos e LLMs que geram valor operacional mensurável, reduzindo
                    horas de trabalho manual e custos de operação.
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="font-body text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#E8913C] block">
                    03. ZERO DÉBITO TÉCNICO
                  </span>
                  <p className="font-body text-[13px] text-[#EDE7DC]/85 leading-relaxed">
                    Sistemas construídos para durar: você não precisará reescrever o software 6 meses após o lançamento
                    porque a fundação já nasce escalável.
                  </p>
                </div>
              </div>
            )}
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}

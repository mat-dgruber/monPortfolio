"use client";

interface RosterItem {
  tag: string;
  name: string;
  metric: string;
  description: string;
  appliedTechs: string;
}

interface DateEntry {
  period: string;
  role: string;
  organization: string;
  summary: string;
  skills: string[];
}

const ROSTER_ITEMS: RosterItem[] = [
  {
    tag: "ESPECIALIDADE 01",
    name: "Arquitetura Fullstack & Microsserviços",
    metric: "03+ ANOS EM PRODUÇÃO",
    description:
      "Desenho de arquitetura de software ponta a ponta: separação rigorosa de responsabilidades entre frontend e backend através de camadas BFF (Backend-for-Frontend), contratos de API fortemente tipados e desacoplamento de serviços para garantir escalabilidade sob alta concorrência.",
    appliedTechs:
      "Next.js · Angular · Python / FastAPI · TypeScript · REST / gRPC",
  },
  {
    tag: "ESPECIALIDADE 02",
    name: "Interfaces de Alta Precisão & Engenharia Frontend",
    metric: "CORE WEB VITALS",
    description:
      "Construção de interfaces modernas com fidelidade visual de alto padrão: eliminação de layouts genéricos, fluidez nas micro-interações táteis, acessibilidade WCAG 2.2 e otimização profunda de métricas de performance web (LCP, INP, CLS).",
    appliedTechs:
      "Tailwind CSS · Framer Motion · Component Architecture · Web Vitals",
  },
  {
    tag: "ESPECIALIDADE 03",
    name: "Inteligência Artificial Aplicada & Protocolo MCP",
    metric: "AGENTES EM PRODUÇÃO",
    description:
      "Implementação de soluções inteligentes que transcendem chatbots simples: arquitetura de pipelines RAG (Retrieval-Augmented Generation), integração de ferramentas dinâmicas via protocolo MCP (Model Context Protocol) e orquestração de fluxos multi-modelo determinísticos.",
    appliedTechs:
      "MCP Protocol · Gemini API · OpenAI · Ollama Local · RAG Pipelines",
  },
  {
    tag: "ESPECIALIDADE 04",
    name: "Engenharia de Dados Relacionais & Performance SQL",
    metric: "BANCOS ENTERPRISE",
    description:
      "Administração e tuning de bancos de dados de missão crítica: modelagem de esquemas relacionais, isolamento estrito de transações ACID em ambientes corporativos e reescrita de stored procedures para acelerar rotinas financeiras e de faturamento.",
    appliedTechs:
      "SQL Server · Índices & Query Tuning · Modelagem Relacional · Transações ACID",
  },
  {
    tag: "ESPECIALIDADE 05",
    name: "Compiladores, AST & Runtimes de Baixo Nível",
    metric: "SISTEMAS AUTORAIS EM GO",
    description:
      "Construção e domínio dos fundamentos da computação de sistemas: elaboração de analisadores léxicos (tokenizers), parsers sintáticos com geração de árvores AST, otimização de instruções em bytecode e desenvolvimento de máquina virtual (VM) para execução reativa de código.",
    appliedTechs:
      "Go · Parsing Léxico/Sintático · AST · JIT VM · Bytecode Design",
  },
];

const DATES_ENTRIES: DateEntry[] = [
  {
    period: "2026 — PRESENTE",
    role: "Engenheiro de Software Fullstack",
    organization: "Casa Publicadora Brasileira (CPB)",
    summary:
      "Liderança e atuação direta na modernização de legados corporativos. Desenho da camada BFF com FastAPI e Angular, arquitetura de novas aplicações em microsserviços e integração com diretórios corporativos LDAP / SSO de alta disponibilidade.",
    skills: [
      "Angular",
      "TypeScript",
      "Python",
      "FastAPI",
      "Clean Architecture",
      "BFF",
    ],
  },
  {
    period: "2025 — ANDAMENTO",
    role: "Pós-Graduação em Engenharia de IA Aplicada",
    organization: "UNIPDS / Faculdade Anhanguera",
    summary:
      "Especialização avançada focada na arquitetura de sistemas inteligentes: engenharia de contexto, orquestração de agentes autônomos com execução de código, automação de tarefas via protocolo MCP e esteiras de recuperação contextual RAG.",
    skills: [
      "Model Context Protocol (MCP)",
      "LLMs",
      "RAG Pipelines",
      "Agentes Autônomos",
    ],
  },
  {
    period: "2024 — 2026",
    role: "Analista de Sistemas Júnior",
    organization: "Casa Publicadora Brasileira (CPB)",
    summary:
      "Sustentação e evolução de rotinas em sistemas corporativos ERP e pontos de venda (PDV). Diagnóstico e otimização de queries em SQL Server para suporte a operações críticas de filiais em tempo real.",
    skills: [
      "SQL Server",
      "ERPs Corporativos",
      "Otimização Transacional",
      "Automação",
    ],
  },
  {
    period: "2023 — 2024",
    role: "Graduação em Análise e Desenvolvimento de Sistemas",
    organization: "Universidade Cruzeiro do Sul",
    summary:
      "Formação acadêmica superior com foco rigoroso em engenharia de software, complexidade algorítmica, estruturas de dados de baixo nível, arquitetura de computadores e desenvolvimento web moderno.",
    skills: [
      "Estruturas de Dados",
      "Algoritmos",
      "Engenharia de Software",
      "POO",
    ],
  },
  {
    period: "2023 — 2024",
    role: "Assistente & Estagiário de TI",
    organization: "Casa Publicadora Brasileira (CPB)",
    summary:
      "Administração e monitoramento de infraestrutura de redes, servidores locais Linux/Windows e transição técnica estruturada para a equipe de desenvolvimento interno de software.",
    skills: [
      "Infraestrutura",
      "Redes Corporativas",
      "Servidores Linux/Windows",
    ],
  },
];

export default function RosterAndDates() {
  return (
    <section
      id="roster"
      className="relative py-28 bg-[#0A0C0E] border-t border-[rgba(237,231,220,0.13)]"
      aria-label="Especialidades de Engenharia e Trajetória Profissional"
    >
      <div className="shell-container space-y-24">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3FA2AD]" />
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-[#9EA5A8]">
              [03 / ESPECIALIDADES & COMPETÊNCIAS TÉCNICAS]
            </span>
          </div>
          <h2 className="font-display font-bold text-[clamp(30px,4.2vw,52px)] text-[#EDE7DC] leading-[1.08] tracking-[-0.025em]">
            Especialidades de engenharia explicadas na prática.
          </h2>
          <p className="font-body text-[15px] sm:text-[16.5px] text-[#9EA5A8] leading-relaxed max-w-[50ch]">
            Entenda o que cada disciplina representa na prática: além de
            ferramentas isoladas, o foco é aplicar padrões de arquitetura para
            resolver problemas de escalabilidade, automação e confiabilidade.
          </p>
        </div>

        {/* Part 1: Didactic Roster Rows */}
        <div className="border-t border-[rgba(237,231,220,0.13)] divide-y divide-[rgba(237,231,220,0.13)]">
          {ROSTER_ITEMS.map((item) => (
            <div
              key={item.name}
              className="py-8 sm:py-9 space-y-3 hover:bg-[#101317]/40 transition-colors px-3 sm:px-4 rounded-sm"
            >
              {/* Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-body text-[10.5px] font-bold text-[#3FA2AD] tracking-[0.14em] uppercase">
                    {item.tag}
                  </span>
                  <h3 className="font-display font-semibold text-[18px] sm:text-[22px] text-[#EDE7DC] tracking-[-0.015em]">
                    {item.name}
                  </h3>
                </div>
                <div className="font-body text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#E8913C]">
                  {item.metric}
                </div>
              </div>

              {/* Explanatory Paragraph */}
              <p className="font-body text-[14px] sm:text-[15px] text-[#9EA5A8] leading-relaxed max-w-4xl pt-1">
                {item.description}
              </p>

              {/* Applied Technologies Pill Strip */}
              <div className="pt-2 flex items-center gap-2">
                <span className="font-body text-[10.5px] uppercase tracking-[0.12em] text-[#6C7378]">
                  TECNOLOGIAS APLICADAS:
                </span>
                <span className="font-body text-[11px] text-[#EDE7DC]/80 font-medium">
                  {item.appliedTechs}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Part 2: Dates Table (Trajetória e Marcos Didáticos) */}
        <div id="dates" className="space-y-8 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[rgba(237,231,220,0.13)] pb-4">
            <div>
              <div className="flex items-center gap-2 text-[#3FA2AD] text-[10.5px] font-body uppercase tracking-[0.14em] mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C]" />
                <span>LINHA DO TEMPO</span>
              </div>
              <h3 className="font-display font-semibold text-[22px] sm:text-[28px] text-[#EDE7DC] tracking-[-0.02em]">
                Marcos cronológicos e evolução na carreira
              </h3>
            </div>
            <span className="font-body text-[11px] uppercase tracking-[0.14em] text-[#6C7378]">
              2023 — 2026
            </span>
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[rgba(237,231,220,0.13)] text-[10.5px] font-body uppercase tracking-[0.15em] text-[#6C7378]">
                  <th className="pb-4 font-semibold w-[160px]">PERÍODO</th>
                  <th className="pb-4 font-semibold w-[280px]">
                    PAPEL / ORGANIZAÇÃO
                  </th>
                  <th className="pb-4 font-semibold">
                    DESCRIÇÃO DIDÁTICA DO IMPACTO
                  </th>
                  <th className="pb-4 font-semibold w-[220px]">
                    STACK PRINCIPAL
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(237,231,220,0.08)]">
                {DATES_ENTRIES.map((entry, index) => (
                  <tr
                    key={index}
                    className="hover:bg-[#101317]/50 transition-colors align-top"
                  >
                    <td className="py-6 font-body text-[12px] font-bold text-[#3FA2AD] tracking-[0.08em]">
                      {entry.period}
                    </td>
                    <td className="py-6 pr-6 space-y-1">
                      <div className="font-display text-[15px] font-semibold text-[#EDE7DC]">
                        {entry.role}
                      </div>
                      <div className="font-body text-[12.5px] text-[#9EA5A8]">
                        {entry.organization}
                      </div>
                    </td>
                    <td className="py-6 pr-6 font-body text-[13.5px] text-[#9EA5A8] leading-relaxed">
                      {entry.summary}
                    </td>
                    <td className="py-6 font-body text-[11.5px] text-[#6C7378] leading-normal">
                      {entry.skills.join(" · ")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile & Tablet Card List */}
          <div className="grid lg:hidden gap-6 divide-y divide-[rgba(237,231,220,0.1)]">
            {DATES_ENTRIES.map((entry, index) => (
              <div key={index} className="pt-6 space-y-3 first:pt-0">
                <div className="flex items-center justify-between">
                  <span className="font-body text-[11px] font-bold text-[#3FA2AD] tracking-[0.08em]">
                    {entry.period}
                  </span>
                  <span className="font-body text-[11px] text-[#6C7378]">
                    {entry.organization}
                  </span>
                </div>
                <div>
                  <h4 className="font-display text-[17px] font-semibold text-[#EDE7DC]">
                    {entry.role}
                  </h4>
                  <p className="font-body text-[13px] text-[#9EA5A8] pt-1.5 leading-relaxed">
                    {entry.summary}
                  </p>
                </div>
                <div className="pt-1 flex flex-wrap gap-1.5">
                  {entry.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-xs border border-[rgba(237,231,220,0.1)] font-body text-[10px] text-[#EDE7DC]/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

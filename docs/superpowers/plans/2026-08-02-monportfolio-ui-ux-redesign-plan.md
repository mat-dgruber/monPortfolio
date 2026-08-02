# MonPortfolio UI/UX Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposicionar a home do monPortfolio como uma narrativa Technical Premium que comunica valor profissional antes de efeitos visuais.

**Architecture:** A home continua sendo uma página Next.js única em `src/app/page.tsx`, mas a composição passa a seguir a ordem `posicionamento → cases → prova técnica → credenciais → laboratório → contato`. Os componentes atuais serão reaproveitados com menos ruído visual; o volume experimental sai da home e ganha uma rota secundária `/lab`.

**Tech Stack:** Next.js 15.1.6, React 19, TypeScript 5.7.3, Tailwind CSS 3.4.17, Framer Motion 12, lucide-react.

## Global Constraints

- A direção visual aprovada é **Technical Premium**: dark premium contido, menos cyberpunk, menos gamer, menos demo.
- A home deve equilibrar contratação, consultoria/freelance e marca pessoal técnica.
- A primeira dobra deve ser rápida para recrutadores e convincente para tech leads/founders.
- Cases são a prova principal; terminal, playground e widgets são apoio, nunca centro.
- Não adicionar dependências novas.
- Não introduzir feature flags ou abstrações genéricas.
- Não usar gradiente em texto no hero.
- Usar no máximo uma cor de acento dominante na home.
- Manter o site técnico sem virar template genérico de SaaS.
- O diretório atual não está inicializado como repositório git; os passos de commit só devem rodar se `git rev-parse --is-inside-work-tree` retornar sucesso.

---

## File Structure

### Modify

- `src/app/page.tsx`
  - Responsável por ordenar a narrativa da home.
  - Remove `ParticleCanvas`, `CyberCursor`, `OpenClaudeTerminal`, `HarpiaPlayground` e `SystemStatusWidget` da home principal.
  - Adiciona `LabSection` como preview compacto.

- `src/app/layout.tsx`
  - Atualiza metadata para refletir proposta profissional: software engineering, arquitetura, IA aplicada e consultoria.
  - Ajusta seleção/foco para o novo acento visual.

- `src/app/globals.css`
  - Troca utilitários cyber/neon por tokens e utilitários premium discretos.
  - Mantém compatibilidade com classes existentes (`glass-cyber`, `shadow-glow-cyan`) enquanto reduz o efeito.
  - Adiciona estilos globais de legibilidade e `prefers-reduced-motion`.

- `src/components/CyberHeader.tsx`
  - Mantém o nome do arquivo para evitar renomeação ampla.
  - Remove toggle de áudio e estética neon.
  - Atualiza navegação para `Cases`, `Prova técnica`, `Trajetória`, `Lab`, `Contato`.

- `src/components/HeroSection.tsx`
  - Redesenha a primeira dobra com headline clara, subtítulo curto e dois CTAs.
  - Remove nuvem de tecnologias, gradiente no nome e excesso de badges.

- `src/components/ProjectGrid.tsx`
  - Reposiciona projetos como cases de impacto.
  - Cada case passa a mostrar contexto, problema/oportunidade, papel, stack e resultado.
  - Remove modal como caminho principal; usa conteúdo escaneável no card e `<details>` para profundidade técnica.

- `src/components/TechStackSection.tsx`
  - Troca inventário de tecnologias por prova técnica em quatro eixos.
  - Eixos: backend/sistemas confiáveis, arquitetura/integrações, IA aplicada/automação, linguagens/runtimes/experimentação.

- `src/components/AboutSection.tsx`
  - Transforma bio e matriz de competências em seção curta de posicionamento profissional e modo de trabalho.

- `src/components/CareerTimeline.tsx`
  - Reduz timeline para recortes de trajetória com leitura rápida.

- `src/components/CertificationsSection.tsx`
  - Reduz cards/modal para credenciais compactas.

- `src/components/CyberFooter.tsx`
  - Troca formulário simulado por CTA final direto para contratação e consultoria.
  - Remove estado de sucesso fake.

### Create

- `src/components/LabSection.tsx`
  - Preview compacto do laboratório técnico na home.
  - Linka para `/lab`.

- `src/app/lab/page.tsx`
  - Superfície secundária para `OpenClaudeTerminal`, `HarpiaPlayground` e `SystemStatusWidget`.
  - Mantém personalidade técnica sem competir com conversão da home.

### Keep unchanged unless implementation exposes breakage

- `src/components/OpenClaudeTerminal.tsx`
- `src/components/HarpiaPlayground.tsx`
- `src/components/SystemStatusWidget.tsx`
- `src/components/ParticleCanvas.tsx`
- `src/components/CyberCursor.tsx`
- `src/utils/audioManager.ts`

`ParticleCanvas` e `CyberCursor` deixam de ser importados pela home; não precisam ser deletados nesta etapa.

---

### Task 1: Visual foundation Technical Premium

**Files:**
- Modify: `src/app/globals.css:1-51`
- Modify: `src/app/layout.tsx:4-38`

**Interfaces:**
- Consumes: existing Tailwind setup and global CSS import in `src/app/layout.tsx`.
- Produces: global utility classes used by later tasks: `.premium-shell`, `.premium-card`, `.premium-divider`, `.accent-link`, `.glass-cyber`, `.shadow-glow-cyan`, `.shadow-glow-purple`, `.shadow-glow-yellow`, `.glitch-text`.

- [ ] **Step 1: Replace global cyber visual primitives**

In `src/app/globals.css`, replace the file contents with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #070b12;
  --surface: #0d1320;
  --surface-strong: #111827;
  --border: rgba(148, 163, 184, 0.18);
  --text: #f8fafc;
  --muted: #a8b3c7;
  --accent: #60a5fa;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100dvh;
  background:
    radial-gradient(circle at top left, rgba(96, 165, 250, 0.12), transparent 30rem),
    linear-gradient(180deg, #070b12 0%, #0a0f1c 48%, #070b12 100%);
  color: var(--text);
  overflow-x: hidden;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

::selection {
  background: rgba(96, 165, 250, 0.28);
  color: #ffffff;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #070b12;
}

::-webkit-scrollbar-thumb {
  background: #243044;
  border: 2px solid #070b12;
  border-radius: 999px;
}

::-webkit-scrollbar-thumb:hover {
  background: #334155;
}

.premium-shell {
  width: min(1120px, calc(100% - 32px));
  margin-inline: auto;
}

.premium-card {
  background: rgba(13, 19, 32, 0.78);
  border: 1px solid var(--border);
  border-radius: 18px;
}

.premium-divider {
  border-color: rgba(148, 163, 184, 0.16);
}

.accent-link {
  color: var(--accent);
  text-underline-offset: 4px;
}

.accent-link:hover {
  text-decoration: underline;
}

.glass-cyber {
  background: rgba(13, 19, 32, 0.78);
  border: 1px solid rgba(148, 163, 184, 0.18);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.shadow-glow-cyan,
.shadow-glow-purple,
.shadow-glow-yellow {
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.26);
}

.glitch-text {
  text-shadow: none;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 2: Update metadata and body selection classes**

In `src/app/layout.tsx`, update `metadata` to:

```ts
export const metadata: Metadata = {
  metadataBase: new URL('https://monportfolio.vercel.app'),
  title: 'Matheus Diniz Gruber · Software Engineer & IA Aplicada',
  description: 'Portfolio profissional de Matheus Diniz Gruber: engenharia de software, arquitetura de sistemas, produtos técnicos e soluções com IA aplicada.',
  keywords: ['Software Engineer', 'Matheus Diniz Gruber', 'Go', 'TypeScript', 'Python', 'IA Aplicada', 'Arquitetura de Software', 'Consultoria Técnica'],
  openGraph: {
    title: 'Matheus Diniz Gruber · Software Engineer & IA Aplicada',
    description: 'Engenharia de software, arquitetura e soluções com IA aplicada para produtos técnicos confiáveis.',
    url: 'https://monportfolio.vercel.app',
    siteName: 'Matheus Diniz Gruber Portfolio',
    images: [
      {
        url: '/images/IMG_2250.jpg',
        width: 800,
        height: 600,
        alt: 'Matheus Diniz Gruber',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};
```

Then change the body class to:

```tsx
<body className="antialiased bg-slate-950 text-slate-100 selection:bg-blue-400/30 selection:text-white">
```

And change the skip link class to:

```tsx
className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-400 focus:text-slate-950 focus:font-semibold focus:rounded-md"
```

- [ ] **Step 3: Run build check**

Run:

```bash
npm run build
```

Expected: PASS. No TypeScript or CSS parsing errors.

- [ ] **Step 4: Commit checkpoint if git exists**

Run:

```bash
git rev-parse --is-inside-work-tree >/dev/null 2>&1 && git add src/app/globals.css src/app/layout.tsx && git commit -m "style: establish technical premium foundation" || true
```

Expected: commit is created when git exists; otherwise the command exits without changing files.

---

### Task 2: Header and home composition shell

**Files:**
- Modify: `src/components/CyberHeader.tsx:1-116`
- Modify: `src/app/page.tsx:1-54`

**Interfaces:**
- Consumes: `CyberHeader` is imported by `src/app/page.tsx`.
- Produces: `CyberHeader(): JSX.Element` with no props. Later tasks rely on anchors `#projects`, `#technical-proof`, `#trajectory`, `#lab`, `#contact`.

- [ ] **Step 1: Refactor `CyberHeader` interface and nav data**

In `src/components/CyberHeader.tsx`, remove `soundEnabled`, `setSoundEnabled`, `Volume2`, `VolumeX`, `Terminal`, `Cpu`, `Sparkles`, `UserCheck`, `Briefcase`, `FileText`, and `playSound` imports.

Use this nav data:

```ts
const NAV_ITEMS = [
  { label: 'Cases', href: '#projects' },
  { label: 'Prova técnica', href: '#technical-proof' },
  { label: 'Trajetória', href: '#trajectory' },
  { label: 'Lab', href: '#lab' },
  { label: 'Contato', href: '#contact' },
];
```

Change the component signature to:

```ts
export default function CyberHeader() {
```

- [ ] **Step 2: Replace header JSX with restrained navigation**

Use this return block inside `CyberHeader`:

```tsx
return (
  <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
    <header
      className={`pointer-events-auto flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border bg-slate-950/82 backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? 'border-slate-700/80 px-5 py-2.5 shadow-lg shadow-black/20'
          : 'border-slate-800 px-6 py-3'
      }`}
    >
      <a href="#main-content" className="flex flex-col leading-tight">
        <span className="text-sm font-semibold text-white">Matheus Diniz Gruber</span>
        <span className="hidden text-xs text-slate-400 sm:block">Software Engineer · IA Aplicada</span>
      </a>

      <nav aria-label="Navegação principal" className="hidden items-center gap-1 md:flex">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800/80 hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a
        href="#contact"
        className="rounded-full bg-blue-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-blue-300 active:translate-y-px"
      >
        Conversar
      </a>
    </header>
  </div>
);
```

- [ ] **Step 3: Simplify page imports and state**

In `src/app/page.tsx`, remove these imports:

```ts
import { useEffect, useState } from 'react';
import ParticleCanvas from '@/components/ParticleCanvas';
import CyberCursor from '@/components/CyberCursor';
import OpenClaudeTerminal from '@/components/OpenClaudeTerminal';
import HarpiaPlayground from '@/components/HarpiaPlayground';
import SystemStatusWidget from '@/components/SystemStatusWidget';
```

Keep the file as a client component only if any imported section still requires client-side rendering. Remove the `soundEnabled` state and `localStorage` effect from `Home`.

- [ ] **Step 4: Replace page composition order**

Use this composition in `src/app/page.tsx`:

```tsx
export default function Home() {
  return (
    <main id="main-content" className="relative overflow-hidden">
      <CyberHeader />
      <HeroSection />
      <ProjectGrid />
      <TechStackSection />
      <AboutSection />
      <CareerTimeline />
      <CertificationsSection />
      <LabSection />
      <CyberFooter />
    </main>
  );
}
```

Add the `LabSection` import after creating it in Task 6; until Task 6 starts, keep this line out to avoid a broken build. In this task, stop after removing particles/cursor/audio props and reordering existing sections.

- [ ] **Step 5: Run build check**

Run:

```bash
npm run build
```

Expected: PASS after removing the missing `LabSection` import or after Task 6 has created it.

- [ ] **Step 6: Commit checkpoint if git exists**

Run:

```bash
git rev-parse --is-inside-work-tree >/dev/null 2>&1 && git add src/components/CyberHeader.tsx src/app/page.tsx && git commit -m "refactor: simplify portfolio home shell" || true
```

Expected: commit is created when git exists; otherwise no-op.

---

### Task 3: Hero de posicionamento

**Files:**
- Modify: `src/components/HeroSection.tsx:1-85`

**Interfaces:**
- Consumes: anchors `#projects` and `#contact` from page sections.
- Produces: `HeroSection(): JSX.Element` with one clear headline, one subtitle, primary CTA, secondary CTA, and a small proof rail.

- [ ] **Step 1: Replace hero copy constants**

At the top of `HeroSection.tsx`, after imports, add:

```ts
const PROOF_POINTS = [
  'Go · TypeScript · Python',
  'Arquitetura, integrações e automação',
  'IA aplicada a produtos e fluxos reais',
];
```

Keep only these lucide imports:

```ts
import { ArrowRight, BriefcaseBusiness } from 'lucide-react';
```

Remove `Terminal`, `Code`, `FileText` and `playSound` from the file.

- [ ] **Step 2: Replace the hero JSX**

Use this section body:

```tsx
<section className="relative z-10 flex min-h-[100dvh] items-center px-6 pb-20 pt-32">
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55 }}
    className="premium-shell grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"
  >
    <div className="max-w-3xl space-y-7">
      <div className="inline-flex rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-sm text-slate-300">
        Software Engineer · AI Systems · Consultoria técnica
      </div>

      <div className="space-y-5">
        <h1 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
          Construo sistemas confiáveis, produtos técnicos e soluções com IA aplicada.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
          Sou Matheus Diniz Gruber, engenheiro de software focado em backend, arquitetura, automação e experiências técnicas que saem do protótipo e viram entrega.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href="#projects"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-300 active:translate-y-px"
        >
          Ver cases <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900 active:translate-y-px"
        >
          Falar sobre um projeto
        </a>
      </div>
    </div>

    <aside className="premium-card p-6 lg:p-7" aria-label="Resumo profissional">
      <div className="flex items-center gap-3 border-b border-slate-800 pb-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400/12 text-blue-300">
          <BriefcaseBusiness className="h-5 w-5" />
        </div>
        <div>
          <p className="font-semibold text-white">Foco atual</p>
          <p className="text-sm text-slate-400">Engenharia, IA aplicada e consultoria</p>
        </div>
      </div>

      <div className="mt-5 space-y-4">
        {PROOF_POINTS.map((point) => (
          <div key={point} className="flex items-start gap-3 text-sm text-slate-300">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-300" />
            <span>{point}</span>
          </div>
        ))}
      </div>
    </aside>
  </motion.div>
</section>
```

- [ ] **Step 3: Verify hero requirements manually in code**

Check `HeroSection.tsx` contains exactly:

```tsx
<a href="#projects"
<a href="#contact"
```

Expected: one primary CTA to `#projects` and one secondary CTA to `#contact`.

- [ ] **Step 4: Run build check**

Run:

```bash
npm run build
```

Expected: PASS. No unused imports in `HeroSection.tsx`.

- [ ] **Step 5: Commit checkpoint if git exists**

Run:

```bash
git rev-parse --is-inside-work-tree >/dev/null 2>&1 && git add src/components/HeroSection.tsx && git commit -m "refactor: clarify portfolio hero positioning" || true
```

Expected: commit is created when git exists; otherwise no-op.

---

### Task 4: Cases em destaque como centro da home

**Files:**
- Modify: `src/components/ProjectGrid.tsx:1-260`

**Interfaces:**
- Consumes: route anchor `id="projects"` used by hero/header.
- Produces: `ProjectGrid(): JSX.Element` rendering `CaseStudy[]` cards where each item has `context`, `problem`, `role`, `stack`, `impact`, `githubUrl`, `architectureDetails`.

- [ ] **Step 1: Replace the project interface**

Change the interface to:

```ts
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
```

Rename `PROJECTS` to:

```ts
const CASE_STUDIES: CaseStudy[] = [
```

- [ ] **Step 2: Convert existing project data into case data**

Use these four case objects:

```ts
{
  id: 'openclaude',
  title: 'OpenClaude',
  subtitle: 'CLI multi-provedor para agentes de código',
  context: 'Ferramenta open-source para unificar automação de desenvolvimento orientada por IA no terminal.',
  problem: 'Fluxos com LLMs, MCP e múltiplos provedores tendem a ficar fragmentados entre CLIs, scripts e integrações isoladas.',
  role: 'Criação da arquitetura, implementação do CLI, integração MCP, fluxo multi-modelo e experiência terminal-first.',
  stack: ['TypeScript', 'Node.js', 'Bun', 'MCP', 'LLM Function Calling'],
  impact: '+200 modelos suportados e uma experiência centralizada para automação de código.',
  githubUrl: 'https://github.com/mat-dgruber/openclaude',
  architectureDetails: [
    'Adapter multi-provedor para OpenAI, Gemini, DeepSeek, Ollama local e Anthropic.',
    'Integração com protocolo MCP para chamada de ferramentas externas.',
    'Sessões em background, streaming e leitura de codebase com RepoMap/PageRank.',
  ],
}
```

```ts
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
}
```

```ts
{
  id: 'lamed',
  title: 'Lamed Educational Platform',
  subtitle: 'Plataforma educacional com sincronização offline',
  context: 'Produto educacional com necessidade de confiabilidade, experiência responsiva e fluxo de dados resiliente.',
  problem: 'Usuários precisam continuar estudando mesmo com conectividade instável e sincronizar progresso depois.',
  role: 'Arquitetura da aplicação, modelagem de sincronização, backend e experiência de uso orientada a continuidade.',
  stack: ['Python', 'FastAPI', 'Offline Sync', 'PostgreSQL', 'Frontend'],
  impact: 'Reduz fricção de uso em ambientes instáveis e melhora continuidade da experiência educacional.',
  githubUrl: 'https://github.com/mat-dgruber/lamed',
  architectureDetails: [
    'Estratégia de sincronização offline-first para progresso local.',
    'API estruturada para persistência e recuperação de dados educacionais.',
    'Separação entre fluxo de estudo, dados do usuário e camada de integração.',
  ],
}
```

```ts
{
  id: 'monfintrack',
  title: 'CCAT-monFinTrack',
  subtitle: 'Finanças pessoais com consultor IA',
  context: 'Aplicação financeira pessoal com leitura de dados e orientação baseada em IA generativa.',
  problem: 'Dados financeiros brutos nem sempre ajudam o usuário a entender padrões, prioridades e decisões próximas.',
  role: 'Construção do app, integração com Gemini AI Advisor, modelagem de dados e experiência analítica.',
  stack: ['Python', 'Gemini API', 'Data Modeling', 'Finance UX', 'Automation'],
  impact: 'Transforma registros financeiros em recomendações acionáveis com apoio de IA aplicada.',
  githubUrl: 'https://github.com/mat-dgruber/CCAT-monFinTrack',
  architectureDetails: [
    'Pipeline de leitura e organização de dados financeiros.',
    'Integração com modelo generativo para análise contextual.',
    'Interface voltada a priorização e tomada de decisão.',
  ],
}
```

- [ ] **Step 3: Remove modal state and unused image dependencies**

Remove from `ProjectGrid.tsx`:

```ts
import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
```

Remove `selectedProject`, `openProjectModal`, `closeModal`, and all modal JSX.

Keep only lucide icons used in the new layout:

```ts
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
```

- [ ] **Step 4: Render case cards with native details**

Replace the component return with:

```tsx
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
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
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

          <div className="mt-6 rounded-2xl border border-blue-400/20 bg-blue-400/8 p-4 text-sm text-blue-100">
            <strong className="text-blue-200">Resultado:</strong> {project.impact}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
                {item}
              </span>
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
```

- [ ] **Step 5: Run build check**

Run:

```bash
npm run build
```

Expected: PASS. No unused `Image`, `AnimatePresence`, `X`, `Sparkles`, `Code`, `TerminalIcon`, `Cpu` or `Rocket` imports remain.

- [ ] **Step 6: Commit checkpoint if git exists**

Run:

```bash
git rev-parse --is-inside-work-tree >/dev/null 2>&1 && git add src/components/ProjectGrid.tsx && git commit -m "refactor: make projects read as case studies" || true
```

Expected: commit is created when git exists; otherwise no-op.

---

### Task 5: Prova técnica sem inventário de stack

**Files:**
- Modify: `src/components/TechStackSection.tsx:1-180`

**Interfaces:**
- Consumes: anchor `#technical-proof` used by header.
- Produces: `TechStackSection(): JSX.Element` rendering four `TechnicalAxis` blocks.

- [ ] **Step 1: Replace stack interface and data**

Replace `TechCategory` and `TECH_CATEGORIES` with:

```ts
interface TechnicalAxis {
  title: string;
  description: string;
  stack: string[];
  proof: string;
}

const TECHNICAL_AXES: TechnicalAxis[] = [
  {
    title: 'Backend e sistemas confiáveis',
    description: 'Construção de serviços, APIs e fluxos de dados com atenção a consistência, manutenção e operação.',
    stack: ['Go', 'Python', 'FastAPI', 'Node.js', 'PostgreSQL'],
    proof: 'OpenClaude, Lamed e integrações corporativas em ambiente enterprise.',
  },
  {
    title: 'Arquitetura e integrações',
    description: 'Organização de domínios, separação de camadas, integrações externas e automações que reduzem trabalho manual.',
    stack: ['Clean Architecture', 'DDD', 'MCP', 'REST APIs', 'Mensageria'],
    proof: 'CLI multi-provedor, adapters MCP e sincronização offline-first.',
  },
  {
    title: 'IA aplicada e automação',
    description: 'Uso de LLMs como parte de produtos, agentes e fluxos reais, sem tratar IA como camada decorativa.',
    stack: ['LLMs', 'RAG', 'Gemini API', 'Ollama', 'Agentes'],
    proof: 'OpenClaude, consultor financeiro IA e pós-graduação em Engenharia de IA Aplicada.',
  },
  {
    title: 'Linguagens, runtimes e experimentação',
    description: 'Exploração técnica em compiladores, runtimes, DSLs e ferramentas para desenvolvedores.',
    stack: ['Harpia', 'AST', 'JIT VM', 'CLI tooling', 'TypeScript'],
    proof: 'Criação da linguagem Harpia e tooling associado.',
  },
];
```

Remove `Cpu`, `Code2`, `Layers`, `Cloud`, `ShieldCheck`, `Wrench`, `Sparkles`, and `playSound` imports.

- [ ] **Step 2: Replace component JSX**

Use this return block:

```tsx
<section id="technical-proof" className="relative z-10 px-6 py-24">
  <div className="premium-shell space-y-10">
    <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
      <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-5xl">
        Profundidade técnica organizada por capacidade.
      </h2>
      <p className="text-lg leading-8 text-slate-300">
        A stack importa quando evidencia capacidade de resolver problemas. Por isso, a prova técnica está agrupada em eixos de entrega, não em uma lista completa de ferramentas.
      </p>
    </div>

    <div className="grid gap-5 md:grid-cols-2">
      {TECHNICAL_AXES.map((axis, index) => (
        <motion.article
          key={axis.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.42, delay: index * 0.04 }}
          className="premium-card p-6"
        >
          <h3 className="text-xl font-semibold text-white">{axis.title}</h3>
          <p className="mt-3 leading-7 text-slate-300">{axis.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {axis.stack.map((item) => (
              <span key={item} className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-300 ring-1 ring-slate-800">
                {item}
              </span>
            ))}
          </div>
          <p className="mt-5 border-t border-slate-800 pt-4 text-sm leading-6 text-slate-400">
            <span className="font-semibold text-slate-200">Evidência:</span> {axis.proof}
          </p>
        </motion.article>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 3: Run build check**

Run:

```bash
npm run build
```

Expected: PASS. No unused imports remain in `TechStackSection.tsx`.

- [ ] **Step 4: Commit checkpoint if git exists**

Run:

```bash
git rev-parse --is-inside-work-tree >/dev/null 2>&1 && git add src/components/TechStackSection.tsx && git commit -m "refactor: present technical proof by capability" || true
```

Expected: commit is created when git exists; otherwise no-op.

---

### Task 6: Credenciais e trajetória enxutas

**Files:**
- Modify: `src/components/AboutSection.tsx:1-220`
- Modify: `src/components/CareerTimeline.tsx:1-150`
- Modify: `src/components/CertificationsSection.tsx:1-190`

**Interfaces:**
- Consumes: header anchor `#trajectory` on `CareerTimeline`.
- Produces: three compact trust-building sections: profile/mode of work, trajectory, credentials.

- [ ] **Step 1: Refactor `AboutSection` into positioning and work style**

In `AboutSection.tsx`, keep the current photo asset if already used. Replace broad decorative competency cards with this data:

```ts
const WORK_PRINCIPLES = [
  'Entender o problema antes de escolher a tecnologia.',
  'Construir o caminho menor que ainda sustenta manutenção e evolução.',
  'Usar IA aplicada quando ela reduz fricção real, não como efeito de vitrine.',
];
```

Ensure the root section starts with:

```tsx
<section id="about" className="relative z-10 px-6 py-24">
```

Use one `h2` with this copy:

```tsx
Engenharia com leitura de produto, arquitetura e execução.
```

Use this paragraph:

```tsx
Atuo conectando backend, integrações, automação e experiência técnica para transformar ideias complexas em sistemas usáveis, operáveis e claros para quem decide.
```

- [ ] **Step 2: Refactor `CareerTimeline` into compact timeline**

In `CareerTimeline.tsx`, keep this interface:

```ts
interface CareerEvent {
  role: string;
  company: string;
  period: string;
  type: 'work' | 'education';
  description: string;
  skills: string[];
}
```

Ensure the root section starts with:

```tsx
<section id="trajectory" className="relative z-10 px-6 py-24">
```

Render `CAREER_JOURNEY` as a simple vertical list with:

```tsx
<div className="space-y-5">
  {CAREER_JOURNEY.map((event) => (
    <article key={`${event.role}-${event.company}`} className="grid gap-3 border-t border-slate-800 pt-5 md:grid-cols-[220px_1fr]">
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
    </article>
  ))}
</div>
```

Remove `playSound` and icon-driven hover effects.

- [ ] **Step 3: Refactor `CertificationsSection` into compact credentials**

In `CertificationsSection.tsx`, remove modal state and `AnimatePresence`. Keep a flat render of achievements.

Use this section heading:

```tsx
Credenciais que sustentam a narrativa técnica.
```

For each achievement, render:

```tsx
<article key={achievement.title} className="premium-card p-5">
  <p className="text-sm text-blue-300">{achievement.institution}</p>
  <h3 className="mt-2 text-lg font-semibold text-white">{achievement.title}</h3>
  <p className="mt-3 text-sm leading-6 text-slate-300">{achievement.description}</p>
  <ul className="mt-4 space-y-2">
    {achievement.highlights.slice(0, 2).map((highlight) => (
      <li key={highlight} className="text-sm leading-6 text-slate-400">{highlight}</li>
    ))}
  </ul>
</article>
```

- [ ] **Step 4: Run build check**

Run:

```bash
npm run build
```

Expected: PASS. No unused icon, modal or audio imports remain in the three files.

- [ ] **Step 5: Commit checkpoint if git exists**

Run:

```bash
git rev-parse --is-inside-work-tree >/dev/null 2>&1 && git add src/components/AboutSection.tsx src/components/CareerTimeline.tsx src/components/CertificationsSection.tsx && git commit -m "refactor: simplify credentials and trajectory" || true
```

Expected: commit is created when git exists; otherwise no-op.

---

### Task 7: Laboratório secundário e preview compacto

**Files:**
- Create: `src/components/LabSection.tsx`
- Create: `src/app/lab/page.tsx`
- Modify: `src/app/page.tsx:1-54`

**Interfaces:**
- Consumes: existing `OpenClaudeTerminal`, `HarpiaPlayground`, `SystemStatusWidget` components.
- Produces: `LabSection(): JSX.Element` for home preview and `/lab` route for experimental depth.

- [ ] **Step 1: Create `LabSection`**

Create `src/components/LabSection.tsx` with:

```tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, FlaskConical } from 'lucide-react';

const LAB_ITEMS = [
  'Terminal OpenClaude e automação com agentes',
  'Playground da linguagem Harpia',
  'Status técnico dos projetos e runtimes',
];

export default function LabSection() {
  return (
    <section id="lab" className="relative z-10 px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45 }}
        className="premium-shell premium-card grid gap-8 p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-400/12 text-blue-300">
          <FlaskConical className="h-6 w-6" />
        </div>

        <div className="space-y-5">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
              Laboratório técnico, sem roubar a primeira dobra.
            </h2>
            <p className="max-w-2xl leading-7 text-slate-300">
              Experimentos continuam disponíveis para quem quer aprofundar, mas a home prioriza valor, cases e prova profissional.
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-3">
            {LAB_ITEMS.map((item) => (
              <li key={item} className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4 text-sm leading-6 text-slate-300">
                {item}
              </li>
            ))}
          </ul>

          <a href="/lab" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200">
            Explorar laboratório <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Create `/lab` route**

Create `src/app/lab/page.tsx` with:

```tsx
import CyberHeader from '@/components/CyberHeader';
import HarpiaPlayground from '@/components/HarpiaPlayground';
import OpenClaudeTerminal from '@/components/OpenClaudeTerminal';
import SystemStatusWidget from '@/components/SystemStatusWidget';

export const metadata = {
  title: 'Lab · Matheus Diniz Gruber',
  description: 'Laboratório técnico com terminal OpenClaude, playground Harpia e experimentos de engenharia.',
};

export default function LabPage() {
  return (
    <main id="main-content" className="relative overflow-hidden px-6 pb-20 pt-32">
      <CyberHeader />
      <section className="premium-shell space-y-5 pb-12">
        <a href="/" className="accent-link text-sm">Voltar para home</a>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-white sm:text-6xl">
          Laboratório de ferramentas, linguagens e agentes.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-slate-300">
          Uma área secundária para explorar os experimentos técnicos sem prejudicar a clareza comercial da home.
        </p>
      </section>
      <div className="space-y-12">
        <OpenClaudeTerminal />
        <HarpiaPlayground />
        <SystemStatusWidget />
      </div>
    </main>
  );
}
```

- [ ] **Step 3: Import `LabSection` on home**

In `src/app/page.tsx`, add:

```ts
import LabSection from '@/components/LabSection';
```

Ensure the home composition includes:

```tsx
<LabSection />
<CyberFooter />
```

And does not include:

```tsx
<OpenClaudeTerminal />
<HarpiaPlayground />
<SystemStatusWidget />
<ParticleCanvas />
<CyberCursor />
```

- [ ] **Step 4: Run route build check**

Run:

```bash
npm run build
```

Expected: PASS. `/` and `/lab` compile.

- [ ] **Step 5: Commit checkpoint if git exists**

Run:

```bash
git rev-parse --is-inside-work-tree >/dev/null 2>&1 && git add src/components/LabSection.tsx src/app/lab/page.tsx src/app/page.tsx && git commit -m "feat: move experiments into lab surface" || true
```

Expected: commit is created when git exists; otherwise no-op.

---

### Task 8: CTA final profissional

**Files:**
- Modify: `src/components/CyberFooter.tsx:1-130`

**Interfaces:**
- Consumes: anchor `#contact` from hero/header.
- Produces: `CyberFooter(): JSX.Element` with direct contact CTAs and no fake form submission.

- [ ] **Step 1: Remove local form state**

In `CyberFooter.tsx`, remove:

```ts
import { useState } from 'react';
import { Mail, Send, MapPin, CheckCircle2, Code } from 'lucide-react';
import { playSound } from '@/utils/audioManager';
```

Use these imports:

```ts
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
```

Remove `submitted`, `email`, `message`, and `handleSubmit`.

- [ ] **Step 2: Replace footer JSX with dual-intent CTA**

Use this return block:

```tsx
<footer id="contact" className="relative z-10 border-t border-slate-800 px-6 py-20">
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.45 }}
    className="premium-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
  >
    <div className="space-y-5">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-400/12 text-blue-300">
        <Mail className="h-6 w-6" />
      </div>
      <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.02em] text-white sm:text-5xl">
        Vamos conversar sobre contratação, produto ou consultoria técnica.
      </h2>
      <p className="max-w-2xl text-lg leading-8 text-slate-300">
        Se você precisa de alguém para construir, modernizar ou destravar uma solução técnica com engenharia e IA aplicada, este é o melhor ponto de contato.
      </p>
    </div>

    <div className="premium-card space-y-4 p-6">
      <a
        href="mailto:matheus.diniz.gruber@gmail.com?subject=Contato%20via%20portfolio%20-%20Matheus%20Diniz"
        className="flex items-center justify-between rounded-2xl bg-blue-400 px-5 py-4 font-semibold text-slate-950 transition hover:bg-blue-300 active:translate-y-px"
      >
        Enviar email <ArrowUpRight className="h-5 w-5" />
      </a>
      <a
        href="https://github.com/mat-dgruber"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between rounded-2xl border border-slate-700 px-5 py-4 font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900 active:translate-y-px"
      >
        Ver GitHub <ArrowUpRight className="h-5 w-5" />
      </a>
      <p className="text-sm leading-6 text-slate-400">
        Aberto a oportunidades de engenharia de software, arquitetura, automação e projetos com IA aplicada.
      </p>
    </div>
  </motion.div>
</footer>
```

- [ ] **Step 3: Run build check**

Run:

```bash
npm run build
```

Expected: PASS. No React state or audio import remains in `CyberFooter.tsx`.

- [ ] **Step 4: Commit checkpoint if git exists**

Run:

```bash
git rev-parse --is-inside-work-tree >/dev/null 2>&1 && git add src/components/CyberFooter.tsx && git commit -m "refactor: make contact section direct" || true
```

Expected: commit is created when git exists; otherwise no-op.

---

### Task 9: Final QA and cleanup

**Files:**
- Modify only files that fail the checks below.

**Interfaces:**
- Consumes: all sections and routes created in Tasks 1-8.
- Produces: production-ready build with home hierarchy matching the approved spec.

- [ ] **Step 1: Verify home no longer imports experimental protagonists**

Run this visual code check manually in `src/app/page.tsx`:

```tsx
// Must be absent from the home:
ParticleCanvas
CyberCursor
OpenClaudeTerminal
HarpiaPlayground
SystemStatusWidget

// Must be present in the home:
HeroSection
ProjectGrid
TechStackSection
AboutSection
CareerTimeline
CertificationsSection
LabSection
CyberFooter
```

Expected: the first group is absent; the second group is present.

- [ ] **Step 2: Verify anchors used by CTAs and header**

Check these IDs exist exactly once in rendered section roots:

```tsx
id="projects"
id="technical-proof"
id="trajectory"
id="lab"
id="contact"
```

Expected: each anchor has one owning section/footer.

- [ ] **Step 3: Run lint**

Run:

```bash
npm run lint
```

Expected: PASS. If `next lint` is unsupported by this Next.js version/configuration, record the exact CLI error and rely on `npm run build` for TypeScript validation.

- [ ] **Step 4: Run production build**

Run:

```bash
npm run build
```

Expected: PASS. Routes `/` and `/lab` compile.

- [ ] **Step 5: Manual responsive smoke test**

Run:

```bash
npm run dev
```

Open the site and verify these viewport widths:

```text
390px: hero CTA buttons stack cleanly; no horizontal scroll.
768px: case cards remain readable; header CTA does not wrap.
1440px: first fold shows clear positioning, not terminal/playground/status widgets.
```

Expected: no text overflow, no CTA wrapping, no missing section anchors.

- [ ] **Step 6: Final commit if git exists**

Run:

```bash
git rev-parse --is-inside-work-tree >/dev/null 2>&1 && git add src/app/page.tsx src/app/layout.tsx src/app/globals.css src/app/lab/page.tsx src/components/CyberHeader.tsx src/components/HeroSection.tsx src/components/ProjectGrid.tsx src/components/TechStackSection.tsx src/components/AboutSection.tsx src/components/CareerTimeline.tsx src/components/CertificationsSection.tsx src/components/LabSection.tsx src/components/CyberFooter.tsx && git commit -m "feat: reposition portfolio home as technical premium" || true
```

Expected: commit is created when git exists and there are staged changes; otherwise no-op.

---

## Self-Review

### Spec coverage

- Hero de posicionamento: Task 3.
- Cases em destaque como centro da home: Task 4.
- Prova técnica sem inventário: Task 5.
- Credenciais e trajetória enxutas: Task 6.
- Laboratório/experiments como apoio: Task 7.
- CTA final direto: Task 8.
- Remoção de protagonismo de cursor, partículas, terminal, playground e widgets na home: Tasks 2 e 7.
- Direção visual Technical Premium: Task 1.
- UX e conversão: Tasks 2, 3, 4, 8 e 9.

### Placeholder scan

- O plano não usa valores `TBD`, `TODO` ou instruções abertas sem conteúdo.
- Onde há copy nova, ela está escrita explicitamente.
- Onde há nova interface TypeScript, ela está especificada com propriedades exatas.

### Type consistency

- `CaseStudy` é definido e usado por `CASE_STUDIES` no mesmo task.
- `TechnicalAxis` é definido e usado por `TECHNICAL_AXES` no mesmo task.
- `LabSection` é criado antes de ser importado definitivamente em `src/app/page.tsx`.
- `CyberHeader` deixa de consumir props e `src/app/page.tsx` chama `<CyberHeader />` sem argumentos.

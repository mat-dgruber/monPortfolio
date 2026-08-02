# Task 1: Visual foundation Technical Premium

## Context
Project: `/Users/matheus.diniz_1/Documents/GitHub/monPortfolio`.
This is a Next.js portfolio redesign. The approved direction is Technical Premium: dark premium restrained, less cyberpunk/gamer/demo, more authority, legibility and hierarchy.

## Files
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

## Global Constraints
- Do not add dependencies.
- Do not create feature flags.
- Use at most one dominant accent color.
- Do not use gradient text in the hero.
- Keep the site technical without turning it into a generic SaaS template.
- This directory is not a git repo; do not run git commit.

## Requirements

### 1. Replace `src/app/globals.css` contents with exactly this CSS

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

### 2. Update `src/app/layout.tsx` metadata

Use:

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

### 3. Update body and skip link classes in `src/app/layout.tsx`

Body class:

```tsx
<body className="antialiased bg-slate-950 text-slate-100 selection:bg-blue-400/30 selection:text-white">
```

Skip link class:

```tsx
className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-400 focus:text-slate-950 focus:font-semibold focus:rounded-md"
```

## Required verification
Run:

```bash
npm run build
```

Expected: PASS. No TypeScript or CSS parsing errors.

## Report
Write full report to `/Users/matheus.diniz_1/Documents/GitHub/monPortfolio/.superpowers/sdd/2026-08-02-monportfolio-ui-ux-redesign-plan/task-1-report.md`.
Return only: status, files changed, test command/result, concerns.

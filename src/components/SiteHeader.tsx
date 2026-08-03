'use client';

import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { label: 'Cases', href: '#projects' },
  { label: 'Prova técnica', href: '#technical-proof' },
  { label: 'Trajetória', href: '#trajectory' },
  { label: 'Lab', href: '#lab' },
  { label: 'Contato', href: '#contact' },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <span className="hidden text-xs text-slate-400 sm:block">Fullstack Engineer · UI/UX · IA Aplicada</span>
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
}

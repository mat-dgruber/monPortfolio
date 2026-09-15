"use client";

import { useEffect, useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import { WHATSAPP_LINK } from "@/lib/constants";

const NAV_ITEMS = [
  { label: "Cases", href: "#projects" },
  { label: "Arquitetura & Stack", href: "#technical-proof" },
  { label: "Sobre", href: "#about" },
  { label: "Trajetória", href: "#trajectory" },
  { label: "Certificações", href: "#certifications" },
  { label: "Contato", href: "#contact" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <header
        className={`pointer-events-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-xl border backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "border-emerald-500/25 bg-[#080B11]/90 px-5 py-2.5 shadow-2xl shadow-black/40"
            : "border-slate-800/80 bg-[#080B11]/75 px-6 py-3"
        }`}
      >
        <a
          href="#main-content"
          className="flex items-center gap-3 rounded-lg focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
        >
          <div className="flex flex-col leading-tight">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold tracking-tight text-white">
                Matheus Diniz Gruber
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-mono text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                DISPONÍVEL
              </span>
            </div>
            <span className="hidden text-xs text-slate-400 md:block font-mono">
              Senior Fullstack · AI Systems
            </span>
          </div>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-1 lg:flex"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-slate-800/60 hover:text-white focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar com Matheus Diniz Gruber pelo WhatsApp (abre em nova aba)"
          className="motion-safe-sheen inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-3.5 py-2 text-xs font-semibold text-slate-950 transition hover:bg-[#20ba59] active:translate-y-px shadow-sm shadow-emerald-950/40 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
        >
          <WhatsAppIcon className="h-3.5 w-3.5 fill-slate-950" />
          <span>Falar no WhatsApp</span>
        </a>
      </header>
    </div>
  );
}

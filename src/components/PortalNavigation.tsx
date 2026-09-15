'use client';

import { useState } from 'react';
import Link from 'next/link';
import { WHATSAPP_LINK } from '@/lib/constants';

const NAV_LINKS = [
  { label: 'MANIFESTO', href: '#manifesto' },
  { label: 'PILARES', href: '#pilares' },
  { label: 'CASES', href: '#releases' },
  { label: 'HABILIDADES', href: '#roster' },
  { label: 'TRAJETÓRIA', href: '#dates' },
];

export default function PortalNavigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[min(94%,960px)] transition-all">
      <div className="rounded-full border border-[rgba(237,231,220,0.18)] bg-[#0A0C0E]/90 backdrop-blur-xl px-4 sm:px-6 py-2 flex items-center justify-between shadow-2xl shadow-black/80 gap-4">
        {/* Display Wordmark */}
        <Link
          href="#portal"
          className="font-display font-bold text-[13.5px] sm:text-[15px] tracking-[-0.02em] text-[#EDE7DC] hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 pl-1"
        >
          MATHEUS GRUBER<span className="text-[#3FA2AD]">.</span>
        </Link>

        {/* Desktop Nav Links (PT-BR) */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 shrink-0" aria-label="Navegação Principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-body text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#9EA5A8] hover:text-[#3FA2AD] transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Pill Button */}
        <div className="hidden sm:flex items-center shrink-0">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#EDE7DC] text-[#0A0C0E] text-[10.5px] font-bold uppercase tracking-[0.12em] hover:bg-white transition-colors shadow-sm whitespace-nowrap leading-none shrink-0"
          >
            Falar no WhatsApp
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex md:hidden items-center gap-2 shrink-0">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden font-body px-3 py-1.5 rounded-full bg-[#EDE7DC] text-[#0A0C0E] text-[10px] font-bold uppercase tracking-[0.1em] whitespace-nowrap leading-none shrink-0"
          >
            WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#EDE7DC] hover:text-[#3FA2AD] transition-colors focus:outline-none"
            aria-label="Alternar menu de navegação"
            aria-expanded={mobileOpen}
          >
            <div className="w-5 flex flex-col gap-1">
              <span className={`block h-0.5 bg-current transition-transform duration-200 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 bg-current transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-transform duration-200 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Floating Card */}
      {mobileOpen && (
        <div className="mt-2 md:hidden rounded-2xl border border-[rgba(237,231,220,0.18)] bg-[#0A0C0E]/95 backdrop-blur-2xl px-6 py-5 flex flex-col gap-3.5 shadow-2xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-[#9EA5A8] hover:text-[#3FA2AD] transition-colors py-1"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-1 text-center py-2 rounded-full bg-[#EDE7DC] text-[#0A0C0E] text-[11px] font-bold uppercase tracking-[0.12em]"
          >
            Conversar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}

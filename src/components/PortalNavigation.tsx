'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { WHATSAPP_LINK } from '@/lib/constants';

export default function PortalNavigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations('navigation');
  const currentLocale = useLocale();

  const navLinks = [
    { label: t('manifesto'), href: '#manifesto' },
    { label: t('pillars'), href: '#pilares' },
    { label: t('cases'), href: '#releases' },
    { label: t('roster'), href: '#roster' },
    { label: t('dates'), href: '#dates' },
  ];

  const handleLanguageSwitch = (newLocale: string) => {
    try {
      localStorage.setItem('preferred_locale', newLocale);
    } catch {
      // safe fallback
    }
    const hash = window.location.hash || '';
    window.location.href = `/${newLocale}${hash}`;
  };

  return (
    <header className="fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[min(96%,1140px)] transition-all">
      <div className="rounded-full border border-[rgba(237,231,220,0.18)] bg-[#0A0C0E]/90 backdrop-blur-xl px-4 sm:px-5 lg:px-6 py-2 flex items-center justify-between shadow-2xl shadow-black/80 gap-2 sm:gap-4">
        {/* Display Wordmark */}
        <Link
          href="#portal"
          className="font-display font-bold text-[13px] sm:text-[15px] tracking-[-0.02em] text-[#EDE7DC] hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 pl-0.5 sm:pl-1"
        >
          MATHEUS GRUBER<span className="text-[#3FA2AD]">.</span>
        </Link>

        {/* Desktop Nav Links (Visible on Large Screens) */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 shrink-0" aria-label={t('ariaNav')}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-[10px] xl:text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#9EA5A8] hover:text-[#3FA2AD] transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Section: Language Switcher + CV + CTA + Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-2.5 xl:gap-3 shrink-0">
          {/* Language Switcher Pill */}
          <div
            className="flex items-center rounded-full border border-[rgba(237,231,220,0.15)] bg-[#101317]/80 p-0.5"
            role="group"
            aria-label="Language Selector"
          >
            <button
              type="button"
              onClick={() => handleLanguageSwitch('en')}
              className={`px-2 sm:px-2.5 py-1 rounded-full font-body text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.12em] transition-all ${
                currentLocale === 'en'
                  ? 'bg-[#3FA2AD] text-[#0A0C0E] shadow-sm'
                  : 'text-[#9EA5A8] hover:text-[#EDE7DC]'
              }`}
              aria-pressed={currentLocale === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => handleLanguageSwitch('pt')}
              className={`px-2 sm:px-2.5 py-1 rounded-full font-body text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.12em] transition-all ${
                currentLocale === 'pt'
                  ? 'bg-[#3FA2AD] text-[#0A0C0E] shadow-sm'
                  : 'text-[#9EA5A8] hover:text-[#EDE7DC]'
              }`}
              aria-pressed={currentLocale === 'pt'}
            >
              PT
            </button>
          </div>

          {/* CV / Resume Link Button (Desktop & Tablet) */}
          <Link
            href={`/${currentLocale}/cv`}
            className="hidden sm:inline-flex font-body items-center justify-center px-3 sm:px-3.5 py-1.5 rounded-full border border-[rgba(237,231,220,0.22)] text-[#EDE7DC] hover:border-[#3FA2AD] hover:text-[#3FA2AD] text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-[0.12em] transition-colors shrink-0"
          >
            {t('cv')}
          </Link>

          {/* Action Pill Button (Desktop) */}
          <div className="hidden lg:flex items-center shrink-0">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center justify-center px-3.5 xl:px-4 py-1.5 xl:py-2 rounded-full bg-[#EDE7DC] text-[#0A0C0E] text-[10px] xl:text-[10.5px] font-bold uppercase tracking-[0.12em] hover:bg-white transition-colors shadow-sm whitespace-nowrap leading-none shrink-0"
            >
              {t('whatsappCta')}
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center w-8 h-8 rounded-full bg-[#101317] border border-[rgba(237,231,220,0.18)] text-[#EDE7DC] hover:text-[#3FA2AD] hover:border-[#3FA2AD] transition-all focus:outline-none shrink-0"
            aria-label={t('ariaToggle')}
            aria-expanded={mobileOpen}
          >
            <div className="w-3.5 h-3 relative flex flex-col justify-between items-center">
              <span
                className={`w-full h-[1.5px] bg-current rounded-full transition-all duration-300 transform origin-center ${
                  mobileOpen ? 'rotate-45 translate-y-[5px]' : ''
                }`}
              />
              <span
                className={`w-3/4 h-[1.5px] bg-current rounded-full transition-all duration-200 ${
                  mobileOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-full h-[1.5px] bg-current rounded-full transition-all duration-300 transform origin-center ${
                  mobileOpen ? '-rotate-45 -translate-y-[5.5px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Floating Card */}
      {mobileOpen && (
        <div className="mt-2.5 lg:hidden rounded-2xl border border-[rgba(237,231,220,0.18)] bg-[#0A0C0E]/95 backdrop-blur-2xl p-5 flex flex-col gap-2.5 shadow-2xl shadow-black/90 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col divide-y divide-[rgba(237,231,220,0.08)]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9EA5A8] hover:text-[#3FA2AD] transition-colors py-2.5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[10px] text-[#6C7378]">→</span>
              </Link>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2 border-t border-[rgba(237,231,220,0.12)]">
            <Link
              href={`/${currentLocale}/cv`}
              onClick={() => setMobileOpen(false)}
              className="font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-[#3FA2AD] hover:text-[#EDE7DC] transition-colors py-2 flex items-center justify-between"
            >
              <span>📄 {t('cv')} (CURRICULUM VITAE)</span>
              <span className="text-[10px] text-[#3FA2AD]">PDF</span>
            </Link>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="font-body inline-flex items-center justify-center px-4 py-3 rounded-full bg-[#EDE7DC] text-[#0A0C0E] text-[11px] font-bold uppercase tracking-[0.14em] hover:bg-white transition-colors shadow-sm whitespace-nowrap mt-1"
            >
              {t('whatsappCta')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

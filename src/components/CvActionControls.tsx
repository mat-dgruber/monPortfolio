'use client';

import { Printer } from 'lucide-react';

interface CvActionControlsProps {
  locale: string;
  printLabel: string;
}

export default function CvActionControls({
  locale,
  printLabel,
}: CvActionControlsProps) {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const handleLanguageSwitch = (newLocale: string) => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('preferred_locale', newLocale);
      } catch {
        // safe fallback
      }
      window.location.href = `/${newLocale}/cv`;
    }
  };

  return (
    <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
      {/* Language Toggle */}
      <div
        className="flex items-center rounded-full border border-[rgba(237,231,220,0.15)] bg-[#101317]/80 p-0.5"
        role="group"
        aria-label="Language Selector"
      >
        <button
          type="button"
          onClick={() => handleLanguageSwitch('en')}
          className={`px-2 sm:px-2.5 py-1 rounded-full font-body text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.12em] transition-all ${
            locale === 'en'
              ? 'bg-[#3FA2AD] text-[#0A0C0E] shadow-sm'
              : 'text-[#9EA5A8] hover:text-[#EDE7DC]'
          }`}
          aria-pressed={locale === 'en'}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => handleLanguageSwitch('pt')}
          className={`px-2 sm:px-2.5 py-1 rounded-full font-body text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.12em] transition-all ${
            locale === 'pt'
              ? 'bg-[#3FA2AD] text-[#0A0C0E] shadow-sm'
              : 'text-[#9EA5A8] hover:text-[#EDE7DC]'
          }`}
          aria-pressed={locale === 'pt'}
        >
          PT
        </button>
      </div>

      {/* Print Button */}
      <button
        type="button"
        onClick={handlePrint}
        className="font-body inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#EDE7DC] text-[#0A0C0E] text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-[0.12em] hover:bg-white transition-colors shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
      >
        <Printer className="w-3.5 h-3.5 shrink-0" />
        <span className="sm:hidden">{locale === 'pt' ? 'PDF / IMPRIMIR' : 'PDF / PRINT'}</span>
        <span className="hidden sm:inline">{printLabel}</span>
      </button>
    </div>
  );
}

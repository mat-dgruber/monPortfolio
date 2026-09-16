'use client';

import { ArrowUpRight, Github } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { WHATSAPP_LINK } from '@/lib/constants';

export default function PortalClose() {
  const t = useTranslations('close');

  return (
    <footer
      id="contact"
      className="relative pt-28 bg-[#0A0C0E] border-t border-[rgba(237,231,220,0.13)] overflow-hidden"
      aria-label={t('headline')}
    >
      <div className="shell-container space-y-16">
        {/* Top Fold: Headline, Fine-print & Two Opposite Buttons */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3FA2AD]" />
              <span className="font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-[#9EA5A8]">
                {t('label')}
              </span>
            </div>
            <h2 className="font-display font-bold text-[clamp(32px,4.5vw,56px)] text-[#EDE7DC] leading-[1.08] tracking-[-0.025em]">
              {t('headline')}
            </h2>
            <p className="font-body text-[14px] sm:text-[16px] text-[#9EA5A8] leading-relaxed max-w-[50ch]">
              {t('paragraph')}
            </p>
          </div>

          {/* Two Action Buttons at Opposite Edge */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#EDE7DC] text-[#0A0C0E] text-[11px] font-bold uppercase tracking-[0.14em] hover:bg-white transition-colors"
            >
              <span>{t('ctaStart')}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://github.com/mat-dgruber"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[rgba(237,231,220,0.25)] text-[#EDE7DC] text-[11px] font-semibold uppercase tracking-[0.14em] hover:border-[#3FA2AD] hover:text-[#3FA2AD] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>{t('ctaGithub')}</span>
            </a>
          </div>
        </div>

        {/* Hairline Footer Strip */}
        <div className="pt-8 border-t border-[rgba(237,231,220,0.13)] flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-[10.5px] uppercase tracking-[0.14em] text-[#6C7378]">
          <div>
            {t('rights')}
          </div>
          <div className="flex items-center gap-6">
            <span>{t('location')}</span>
            <span>{t('stack')}</span>
          </div>
        </div>
      </div>

      {/* Signature Move: Wordmark Full Width */}
      <div
        className="w-full overflow-hidden select-none pointer-events-none pt-10 sm:pt-14 flex justify-center"
        aria-hidden="true"
      >
        <div className="font-display font-extrabold text-[clamp(32px,6.8vw,92px)] leading-[0.9] tracking-[-0.025em] text-[#EDE7DC] opacity-80 text-center uppercase translate-y-[12%] whitespace-nowrap px-4">
          MATHEUS GRUBER<span className="text-[#3FA2AD]">.</span>
        </div>
      </div>
    </footer>
  );
}

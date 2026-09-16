'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function StatementFold() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const t = useTranslations('statement');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Orbital drift & rotation for the circular emblem
  const orbRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const orbY = useTransform(scrollYProgress, [0, 1], [-40, 60]);

  return (
    <section
      id="manifesto"
      ref={containerRef}
      className="relative min-h-screen flex items-center py-24 bg-[#0A0C0E] border-t border-[rgba(237,231,220,0.13)] overflow-hidden"
      aria-label="Manifesto Editorial"
    >
      <div className="shell-container relative z-10 grid lg:grid-cols-[1.4fr_0.6fr] items-center gap-12">
        {/* Left / Editorial Content */}
        <div className="space-y-8 max-w-3xl">
          {/* Label Caps */}
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3FA2AD]" />
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-[#9EA5A8]">
              {t('label')}
            </span>
          </div>

          {/* Statement Headline */}
          <h2 className="font-display font-semibold text-[clamp(26px,3.6vw,52px)] text-[#EDE7DC] leading-[1.14] tracking-[-0.025em] max-w-[22ch]">
            {t('headlinePrefix')}
            <span className="text-[#3FA2AD]">{t('resilientArch')}</span>
            {t('headlineMiddle')}
            <span className="text-[#E8913C]">{t('appliedAi')}</span>
            {t('headlineSuffix')}
          </h2>

          {/* Secondary Editorial Paragraph */}
          <p className="font-body text-[15px] sm:text-[17px] text-[#9EA5A8] leading-relaxed max-w-[48ch]">
            {t('paragraph')}
          </p>

          {/* Hairline Highlights */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-[rgba(237,231,220,0.13)]">
            <div>
              <span className="block font-body text-[10.5px] uppercase tracking-[0.14em] text-[#6C7378]">
                {t('guidelineLabel')}
              </span>
              <span className="block font-display text-[15px] font-semibold text-[#EDE7DC] mt-1">
                {t('guidelineValue')}
              </span>
            </div>
            <div>
              <span className="block font-body text-[10.5px] uppercase tracking-[0.14em] text-[#6C7378]">
                {t('deliveryLabel')}
              </span>
              <span className="block font-display text-[15px] font-semibold text-[#EDE7DC] mt-1">
                {t('deliveryValue')}
              </span>
            </div>
            <div>
              <span className="block font-body text-[10.5px] uppercase tracking-[0.14em] text-[#6C7378]">
                {t('agilityLabel')}
              </span>
              <span className="block font-display text-[15px] font-semibold text-[#EDE7DC] mt-1">
                {t('agilityValue')}
              </span>
            </div>
          </div>
        </div>

        {/* Right / Outlined Index Numeral & Orbital Element */}
        <div className="relative flex items-center justify-center lg:justify-end">
          {/* Outlined Numeral */}
          <span
            className="font-display font-extrabold text-[clamp(120px,18vw,260px)] leading-none select-none text-stroke-index opacity-40 lg:opacity-60"
            aria-hidden="true"
          >
            01
          </span>

          {/* Circular Image / Emblem Floating off the edge */}
          <motion.div
            style={{
              rotate: shouldReduceMotion ? 0 : orbRotate,
              y: shouldReduceMotion ? 0 : orbY,
            }}
            className="absolute -right-12 lg:-right-24 w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-[rgba(237,231,220,0.18)] pointer-events-none opacity-25 flex items-center justify-center"
          >
            <div className="w-3/4 h-3/4 rounded-full border border-dashed border-[rgba(237,231,220,0.2)]" />
            <div className="absolute w-2 h-2 rounded-full bg-[#3FA2AD] top-4 left-10" />
            <div className="absolute w-2 h-2 rounded-full bg-[#E8913C] bottom-6 right-8" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

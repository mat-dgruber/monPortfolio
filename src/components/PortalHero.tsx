'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export default function PortalHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Portal Panels Translation (Open outwards)
  const leftPanelX = useTransform(scrollYProgress, [0, 0.75], ['0%', '-105%']);
  const rightPanelX = useTransform(scrollYProgress, [0, 0.75], ['0%', '105%']);

  // Background Image settling from overscaled to 1.0
  const imageScale = useTransform(scrollYProgress, [0, 0.85], [1.18, 1.0]);

  // Duotone wash blending amber (#E8913C) and teal (#2E6B72)
  const duotoneOpacity = useTransform(scrollYProgress, [0.1, 0.8], [0, 0.4]);

  // Two accent dots traveling to opposite corners
  const dot1X = useTransform(scrollYProgress, [0, 0.75], ['0px', '-36vw']);
  const dot1Y = useTransform(scrollYProgress, [0, 0.75], ['0px', '-30vh']);
  const dot2X = useTransform(scrollYProgress, [0, 0.75], ['0px', '36vw']);
  const dot2Y = useTransform(scrollYProgress, [0, 0.75], ['0px', '30vh']);

  // Signature Move: Title scales UP gently, tracking TIGHTENS, halves travel outwards without overflowing
  const titleScale = useTransform(scrollYProgress, [0, 0.8], [1.0, 1.18]);
  const titleLetterSpacing = useTransform(
    scrollYProgress,
    [0, 0.8],
    ['0.01em', '-0.035em']
  );
  const spanLeftX = useTransform(scrollYProgress, [0, 0.75], ['0%', '-24%']);
  const spanRightX = useTransform(scrollYProgress, [0, 0.75], ['0%', '24%']);

  // Corner metadata fade out near end of hero
  const metadataOpacity = useTransform(scrollYProgress, [0.75, 0.95], [1, 0.2]);

  return (
    <section
      id="portal"
      ref={containerRef}
      className="relative h-[250vh] bg-[#0A0C0E]"
      aria-label="Portal de Entrada do Portfólio"
    >
      {/* Sticky Full-Height Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden isolate">
        {/* Layer 1: Full-Bleed Image (Backmost) */}
        <motion.div
          style={{ scale: shouldReduceMotion ? 1 : imageScale }}
          className="absolute inset-0 w-full h-full will-change-transform"
        >
          <Image
            src="/images/IMG_2250.jpg"
            alt="Matheus Gruber - Arquiteto de Sistemas e Especialista em IA Aplicada"
            fill
            priority
            className="object-cover object-[center_35%] grayscale-[35%] contrast-[1.08] brightness-[0.75]"
            sizes="100vw"
          />
        </motion.div>

        {/* Layer 2: Duotone Wash (Mix-Blend-Mode Overlay) */}
        <motion.div
          style={{ opacity: shouldReduceMotion ? 0.35 : duotoneOpacity }}
          className="absolute inset-0 pointer-events-none mix-blend-overlay will-change-opacity"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#2E6B72] via-transparent to-[#E8913C]" />
        </motion.div>

        {/* Layer 3: Radial Veil (Darkens edges) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 35%, rgba(10, 12, 14, 0.7) 75%, #0A0C0E 100%)',
          }}
        />

        {/* Layer 4: TWO Solid Panels Meeting in the Middle */}
        {!shouldReduceMotion && (
          <>
            <motion.div
              style={{ x: leftPanelX }}
              className="absolute top-0 bottom-0 left-0 w-[50.5vw] bg-[#0A0C0E] z-20 will-change-transform border-r border-[rgba(237,231,220,0.13)]"
            />
            <motion.div
              style={{ x: rightPanelX }}
              className="absolute top-0 bottom-0 right-0 w-[50.5vw] bg-[#0A0C0E] z-20 will-change-transform border-l border-[rgba(237,231,220,0.13)]"
            />
          </>
        )}

        {/* Layer 5: Two Glowing Accent Dots at the Centre */}
        {!shouldReduceMotion && (
          <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
            {/* Teal Dot traveling to Top-Left (Primary Accent 30%) */}
            <motion.span
              style={{ x: dot1X, y: dot1Y }}
              className="w-2.5 h-2.5 rounded-full bg-[#3FA2AD] will-change-transform shadow-[0_0_12px_#3FA2AD]"
            />
            {/* Amber Dot traveling to Bottom-Right (Focal Accent 10%) */}
            <motion.span
              style={{ x: dot2X, y: dot2Y }}
              className="w-2.5 h-2.5 rounded-full bg-[#E8913C] will-change-transform shadow-[0_0_12px_#E8913C]"
            />
          </div>
        )}

        {/* Layer 6: Wordmark on Top (Signature Move - Adjusted Size to Prevent Viewport Overflow) */}
        <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none px-4 sm:px-8">
          <motion.h1
            style={{
              scale: shouldReduceMotion ? 1 : titleScale,
              letterSpacing: shouldReduceMotion ? '-0.02em' : titleLetterSpacing,
            }}
            className="font-display font-extrabold text-[clamp(26px,5.8vw,82px)] text-[#EDE7DC] uppercase whitespace-nowrap leading-none select-none flex items-center will-change-transform"
          >
            <motion.span
              style={{ x: shouldReduceMotion ? '0%' : spanLeftX }}
              className="inline-block will-change-transform"
            >
              MATHEUS
            </motion.span>
            <span className="w-[0.35em] inline-block" />
            <motion.span
              style={{ x: shouldReduceMotion ? '0%' : spanRightX }}
              className="inline-block will-change-transform"
            >
              GRUBER<span className="text-[#3FA2AD]">.</span>
            </motion.span>
          </motion.h1>
        </div>

        {/* Layer 7: Corner Metadata Pins */}
        <motion.div
          style={{ opacity: shouldReduceMotion ? 1 : metadataOpacity }}
          className="absolute inset-0 z-40 pointer-events-none p-6 sm:p-10 flex flex-col justify-between"
        >
          {/* Top Row (Below floating navbar) */}
          <div className="pt-16 sm:pt-14 flex items-center justify-between font-body text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] uppercase text-[#9EA5A8]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3FA2AD]" />
              <span>MATHEUS GRUBER</span>
            </div>
            <div className="flex items-center gap-2.5 px-3 py-1 rounded-full border border-[rgba(63,162,173,0.3)] bg-[#101317]/80 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3FA2AD] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3FA2AD]" />
              </span>
              <span className="text-[#EDE7DC] text-[9.5px] sm:text-[10.5px] font-medium tracking-[0.12em]">
                DISPONÍVEL PARA DESAFIOS & CONSULTORIA
              </span>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex items-center justify-between font-body text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] uppercase text-[#9EA5A8]">
            <div className="flex items-center gap-2">
              <span>TATUÍ, SP · BR · 2026</span>
            </div>
            <div className="flex items-center gap-2 text-[#EDE7DC]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8913C]" />
              <span>ROLE PARA DESVENDAR ↓</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { WHATSAPP_LINK } from "@/lib/constants";

const PROOF_POINTS = [
  "Angular · React · TypeScript · Python",
  "Front-end, backend, UI/UX e arquitetura",
  "IA aplicada a produtos e fluxos reais",
];

const DELIVERY_STEPS = [
  "Arquitetura",
  "UI/UX + front-end",
  "Backend + IA",
  "Publicação",
];

const heroItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative z-10 flex min-h-[100dvh] items-center overflow-hidden px-6 pb-20 pt-32">
      <motion.div
        className="ambient-orb -right-16 top-28 h-52 w-52"
        animate={
          shouldReduceMotion
            ? undefined
            : { y: [0, 18, 0], scale: [1, 1.08, 1] }
        }
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="ambient-orb bottom-24 left-10 h-36 w-36"
        animate={
          shouldReduceMotion ? undefined : { y: [0, -16, 0], x: [0, 10, 0] }
        }
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="premium-shell grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"
      >
        <div className="max-w-3xl space-y-7">
          <motion.div
            variants={heroItem}
            className="inline-flex rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-sm text-slate-300"
          >
            Software Engineer Fullstack · UI/UX · IA Aplicada
          </motion.div>

          <div className="space-y-5">
            <motion.h1
              variants={heroItem}
              className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl"
            >
              Construo produtos fullstack, interfaces bem desenhadas e soluções
              com IA aplicada.
            </motion.h1>
            <motion.p
              variants={heroItem}
              className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
            >
              Sou Matheus Diniz Gruber, engenheiro de software fullstack que
              conecta arquitetura, backend, front-end, UI/UX e publicação para
              transformar ideias em produtos reais.
            </motion.p>
          </div>

          <motion.div
            variants={heroItem}
            className="flex flex-col gap-3 sm:flex-row sm:items-center flex-wrap"
          >
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="motion-safe-sheen inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#20ba59] shadow-lg shadow-emerald-950/40"
            >
              <WhatsAppIcon className="h-4 w-4 fill-slate-950" />
              Falar no WhatsApp
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-300"
            >
              Ver cases <ArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
            >
              Falar sobre um projeto
            </motion.a>
          </motion.div>
        </div>

        <div className="space-y-5 lg:pb-4">
          <motion.div
            variants={heroItem}
            whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="premium-card p-6 lg:p-7"
            aria-label="Resumo profissional"
          >
            <div className="flex items-center gap-3 border-b border-slate-800 pb-5">
              <motion.div
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        boxShadow: [
                          "0 0 0 rgba(96, 165, 250, 0)",
                          "0 0 28px rgba(96, 165, 250, 0.22)",
                          "0 0 0 rgba(96, 165, 250, 0)",
                        ],
                      }
                }
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400/10 text-blue-300"
              >
                <BriefcaseBusiness className="h-5 w-5" />
              </motion.div>
              <div>
                <p className="font-semibold text-white">Foco atual</p>
                <p className="text-sm text-slate-400">
                  Fullstack, UI/UX, arquitetura e IA aplicada
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {PROOF_POINTS.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + index * 0.08 }}
                  className="flex items-start gap-3 text-sm text-slate-300"
                >
                  <motion.span
                    animate={
                      shouldReduceMotion ? undefined : { scale: [1, 1.45, 1] }
                    }
                    transition={{
                      duration: 2.4,
                      delay: index * 0.35,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-300"
                  />
                  <span>{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={heroItem}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            className="premium-card p-4 sm:p-5"
            aria-label="Fluxo de entrega"
          >
            <div className="flex items-start justify-between gap-2 sm:items-center sm:gap-4">
              <div>
                <p className="text-sm font-semibold text-white">
                  Do conceito ao deploy
                </p>
                <p className="mt-1 text-xs sm:text-sm text-slate-400">
                  Arquitetura, experiência, código e publicação no mesmo fluxo.
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-blue-400/25 bg-blue-400/10 px-2.5 py-1 text-xs font-semibold text-blue-200">
                end-to-end
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {DELIVERY_STEPS.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 + index * 0.07 }}
                  whileHover={{
                    y: -2,
                    borderColor: "rgba(96, 165, 250, 0.38)",
                  }}
                  className="rounded-xl sm:rounded-2xl border border-slate-800 bg-slate-950/55 p-2.5 sm:p-3"
                >
                  <span className="text-xs font-semibold text-blue-300">
                    0{index + 1}
                  </span>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm leading-4 sm:leading-5 text-slate-200">
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

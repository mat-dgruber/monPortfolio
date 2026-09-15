"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Terminal, Cpu, Layers, CheckCircle2 } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { WHATSAPP_LINK } from "@/lib/constants";

const TELEMETRY_METRICS = [
  { label: "Pipeline", value: "End-to-End", detail: "Conceito ao Deploy" },
  { label: "Especialidade", value: "Fullstack + IA", detail: "Sistemas em Produção" },
  { label: "Arquitetura", value: "Event-Driven", detail: "Clean Code & Cloud" },
];

const ENGINEERING_PIPELINE = [
  { step: "01", title: "Arquitetura", desc: "Modelagem de dados, contratos de API e system design" },
  { step: "02", title: "Fullstack Core", desc: "React/Next.js, TypeScript e backend escalável" },
  { step: "03", title: "IA Aplicada", desc: "Engenharia de prompts, pipelines RAG e agentes autônomos" },
  { step: "04", title: "Cloud & Deploy", desc: "Observabilidade, CI/CD e infraestrutura de alta resiliência" },
];

const heroItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative z-10 min-h-[92dvh] flex items-center pt-32 pb-20 px-4 sm:px-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
        className="premium-shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
      >
        {/* Left / Editorial Heading Column */}
        <div className="space-y-8">
          <motion.div
            variants={heroItem}
            className="inline-flex items-center gap-2 rounded-md border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-400"
          >
            <Terminal className="h-3.5 w-3.5" />
            <span>SYSTEMS ARCHITECT & APPLIED AI</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              variants={heroItem}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]"
            >
              Construo produtos digitais robustos, arquitetura escalável e sistemas com{" "}
              <span className="text-emerald-400 font-semibold">IA aplicada</span>.
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed"
            >
              Sou <strong className="text-white font-medium">Matheus Diniz Gruber</strong>. Uno rigor de
              engenharia, excelência visual em interfaces e inteligência artificial para entregar valor de
              ponta a ponta — do design de arquitetura ao deploy em produção.
            </motion.p>
          </div>

          <motion.div
            variants={heroItem}
            className="flex flex-col sm:flex-row sm:items-center gap-3.5 pt-2"
          >
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar no WhatsApp com Matheus Diniz Gruber"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="motion-safe-sheen inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#20ba59] shadow-lg shadow-emerald-950/40 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            >
              <WhatsAppIcon className="h-4 w-4 fill-slate-950" />
              <span>Falar no WhatsApp</span>
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-emerald-500/50 hover:bg-slate-850 hover:text-white focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            >
              <span>Explorar Cases</span>
              <ArrowRight className="h-4 w-4 text-emerald-400" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-4 py-3 text-sm text-slate-400 hover:text-slate-200 transition"
            >
              <span>Contato direto</span>
            </motion.a>
          </motion.div>

          <motion.div
            variants={heroItem}
            className="pt-2 border-t border-slate-800/80 grid grid-cols-3 gap-4"
          >
            {TELEMETRY_METRICS.map((metric) => (
              <div key={metric.label} className="space-y-1">
                <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  {metric.label}
                </span>
                <span className="block text-sm font-bold text-slate-100 font-mono">
                  {metric.value}
                </span>
                <span className="block text-xs text-slate-400">
                  {metric.detail}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right / Engineering Console Telemetry Card */}
        <div className="space-y-4">
          <motion.div
            variants={heroItem}
            className="tech-card p-6 sm:p-7 border border-slate-800 bg-[#0D121D]/90 shadow-2xl relative overflow-hidden"
          >
            {/* Telemetry Header */}
            <div className="flex items-center justify-between pb-5 border-b border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                  <Cpu className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white tracking-tight">Console de Engenharia</p>
                  <p className="text-xs font-mono text-slate-400">STATUS: PROD_READY // ALL SYSTEMS GO</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-mono text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ATIVO
              </span>
            </div>

            {/* Core Pillars */}
            <div className="py-5 space-y-3 border-b border-slate-800/80">
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Stack & Capacidades Centrais</p>
              <div className="flex flex-wrap gap-2">
                {["TypeScript", "React / Next.js", "Python", "IA & LLM Agents", "Arquitetura Cloud", "Docker"].map((tech) => (
                  <span
                    key={tech}
                    className="tech-tag rounded border border-slate-700/60 bg-slate-900/90 px-2.5 py-1 text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Pipeline Steps */}
            <div className="pt-5 space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Ciclo de Entrega Técnica</p>
                <Layers className="h-3.5 w-3.5 text-slate-400" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ENGINEERING_PIPELINE.map((pipe) => (
                  <div
                    key={pipe.step}
                    className="rounded-md border border-slate-800/70 bg-slate-950/60 p-3 hover:border-emerald-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-emerald-400">{pipe.step}</span>
                      <span className="text-xs font-semibold text-slate-200">{pipe.title}</span>
                    </div>
                    <p className="mt-1 text-[11px] text-slate-400 leading-snug">{pipe.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>LATÊNCIA: 18ms</span>
              <span>WCAG 2.2 AA: COMPLIANT</span>
              <span>ZERO DEPENDÊNCIA INÚTIL</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

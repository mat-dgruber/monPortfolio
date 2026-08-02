'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, FlaskConical } from 'lucide-react';

const LAB_ITEMS = [
  'Terminal OpenClaude e automação com agentes',
  'Playground da linguagem Harpia',
  'Status técnico dos projetos e runtimes',
];

const LAB_SIGNALS = [
  { label: 'OpenClaude', value: 'MCP + agentes' },
  { label: 'Harpia', value: 'Go VM + parser' },
  { label: 'Status', value: 'benchmarks reais' },
];

export default function LabSection() {
  return (
    <section id="lab" className="relative z-10 px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45 }}
        className="premium-shell premium-card grid gap-8 p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8"
      >
        <div className="space-y-5">
          <motion.div
            whileHover={{ rotate: -4, scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 240, damping: 18 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-400/12 text-blue-300"
          >
            <FlaskConical className="h-6 w-6" />
          </motion.div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950/45 p-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">lab stack</span>
              <span className="h-2 w-2 rounded-full bg-blue-300" />
            </div>

            <div className="mt-4 space-y-3">
              {LAB_SIGNALS.map((signal, index) => (
                <motion.div
                  key={signal.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: 0.12 + index * 0.06 }}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-slate-900/55 px-3 py-2 text-sm"
                >
                  <span className="text-slate-400">{signal.label}</span>
                  <span className="text-right font-medium text-slate-200">{signal.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
              Laboratório técnico, sem roubar a primeira dobra.
            </h2>
            <p className="max-w-2xl leading-7 text-slate-300">
              Experimentos continuam disponíveis para quem quer aprofundar, mas a home prioriza valor, cases e prova profissional.
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-3">
            {LAB_ITEMS.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -3, borderColor: 'rgba(96, 165, 250, 0.35)' }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4 text-sm leading-6 text-slate-300"
              >
                {item}
              </motion.li>
            ))}
          </ul>

          <motion.a
            href="/lab"
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200"
          >
            Explorar laboratório <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer id="contact" className="relative z-10 border-t border-slate-800 px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45 }}
        className="premium-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
      >
        <div className="space-y-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-400/12 text-blue-300">
            <Mail className="h-6 w-6" />
          </div>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.02em] text-white sm:text-5xl">
            Vamos conversar sobre contratação, produto, UI/UX ou arquitetura fullstack.
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            Se você precisa de alguém para construir, modernizar ou publicar uma solução técnica com front-end, backend, UI/UX e IA aplicada, este é o melhor ponto de contato.
          </p>
        </div>

        <div className="premium-card space-y-4 p-6">
          <a
            href="mailto:matheus.diniz.gruber@gmail.com?subject=Contato%20via%20portfolio%20-%20Matheus%20Diniz"
            className="flex items-center justify-between rounded-2xl bg-blue-400 px-5 py-4 font-semibold text-slate-950 transition hover:bg-blue-300 active:translate-y-px"
          >
            Enviar email <ArrowUpRight className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/mat-dgruber"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl border border-slate-700 px-5 py-4 font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900 active:translate-y-px"
          >
            Ver GitHub <ArrowUpRight className="h-5 w-5" />
          </a>
          <p className="text-sm leading-6 text-slate-400">
            Aberto a oportunidades fullstack, front-end, UI/UX, arquitetura, automação e projetos com IA aplicada.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}

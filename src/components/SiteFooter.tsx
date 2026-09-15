"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, MessageSquare, Terminal } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import ContactForm from "./ContactForm";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function SiteFooter() {
  return (
    <footer
      id="contact"
      className="relative z-10 border-t border-slate-800/80 px-4 sm:px-6 py-24 bg-[#06080D]"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45 }}
        className="premium-shell grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start"
      >
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-wider">
              <MessageSquare className="h-3.5 w-3.5" />
              <span>CONEXÃO & OPORTUNIDADES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Vamos construir soluções de software e IA com padrão de alta fidelidade.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Disponível para posições sênior de engenharia de software, liderança técnica,
              desenho de arquiteturas e implementação de produtos digitais robustos.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chamar Matheus Diniz Gruber no WhatsApp"
              className="motion-safe-sheen flex items-center justify-between rounded-md bg-[#25D366] px-5 py-4 font-semibold text-slate-950 transition hover:bg-[#20ba59] active:translate-y-px shadow-lg shadow-emerald-950/30 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            >
              <div className="flex items-center gap-3">
                <WhatsAppIcon className="h-5 w-5 fill-slate-950" />
                <span className="text-sm font-bold">Conversar no WhatsApp</span>
              </div>
              <ArrowUpRight className="h-5 w-5 text-slate-950" />
            </a>

            <a
              href="https://github.com/mat-dgruber"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver perfil de Matheus Diniz Gruber no GitHub"
              className="flex items-center justify-between rounded-md border border-slate-800 bg-[#0D121D] px-5 py-4 text-sm font-semibold text-slate-200 transition hover:border-emerald-500/40 hover:text-white active:translate-y-px focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            >
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-slate-400" />
                <span>Explorar GitHub (@mat-dgruber)</span>
              </div>
              <ArrowUpRight className="h-4 w-4 text-emerald-400" />
            </a>
          </div>

          <div className="pt-6 border-t border-slate-800/80 space-y-2 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2 text-slate-300">
              <Terminal className="h-3.5 w-3.5 text-emerald-400" />
              <span>MATHEUS DINIZ GRUBER // SYSTEM REPOSITORY</span>
            </div>
            <p>
              © {new Date().getFullYear()} Matheus Diniz Gruber. Construído com Next.js, React 19, TypeScript e Tailwind CSS.
            </p>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </motion.div>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import ContactForm from "./ContactForm";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function SiteFooter() {
  return (
    <footer
      id="contact"
      className="relative z-10 border-t border-slate-800 px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45 }}
        className="premium-shell grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start"
      >
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-5xl">
              Vamos conversar sobre contratação, produto, UI/UX ou arquitetura
              fullstack.
            </h2>
            <p className="text-lg leading-8 text-slate-300">
              Se você precisa de alguém para construir, modernizar ou publicar
              uma solução técnica com front-end, backend, UI/UX e IA aplicada,
              envie uma mensagem pelo formulário ou entre em contato pelo
              WhatsApp.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl bg-[#25D366] px-5 py-4 font-semibold text-slate-950 transition hover:bg-[#20ba59] active:translate-y-px shadow-lg shadow-emerald-950/30"
            >
              <div className="flex items-center gap-3">
                <WhatsAppIcon className="h-5 w-5 fill-slate-950" />
                <span>Chamar no WhatsApp</span>
              </div>
              <ArrowUpRight className="h-5 w-5 text-slate-950" />
            </a>

            <a
              href="https://github.com/mat-dgruber"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-slate-700 px-5 py-4 font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900 active:translate-y-px"
            >
              Ver GitHub <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>

          <p className="text-sm leading-6 text-slate-400">
            Aberto a oportunidades fullstack, front-end, UI/UX, arquitetura,
            automação e projetos com IA aplicada.
          </p>
        </div>

        <div>
          <ContactForm />
        </div>
      </motion.div>
    </footer>
  );
}

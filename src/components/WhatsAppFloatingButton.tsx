"use client";

import { motion } from "framer-motion";
import WhatsAppIcon from "./WhatsAppIcon";
import { playSound } from "@/utils/audioManager";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function WhatsAppFloatingButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
    >
      {/* Tooltip / Label */}
      <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-slate-950/90 px-3.5 py-1.5 text-xs font-semibold text-emerald-300 shadow-xl shadow-black/50 backdrop-blur-md transition-all duration-300 group-hover:border-emerald-400 group-hover:text-emerald-200">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Falar no WhatsApp
      </span>

      {/* Button */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Entrar em contato via WhatsApp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => playSound("hover")}
        onClick={() => playSound("click")}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-500/20 transition-all hover:bg-[#20ba59] hover:shadow-emerald-500/40"
      >
        <WhatsAppIcon className="h-7 w-7 fill-white" />
      </motion.a>
    </motion.div>
  );
}

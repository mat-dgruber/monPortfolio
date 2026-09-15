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
      <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[rgba(237,231,220,0.18)] bg-[#101317]/90 px-3.5 py-1.5 font-body text-[10.5px] font-semibold tracking-[0.12em] uppercase text-[#EDE7DC] backdrop-blur-md transition-all duration-300 group-hover:border-[#3FA2AD] group-hover:text-[#3FA2AD]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#3FA2AD]"></span>
        WhatsApp Direto
      </span>

      {/* Button */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Entrar em contato via WhatsApp com Matheus Gruber"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#EDE7DC] text-[#0A0C0E] border border-[rgba(237,231,220,0.25)] hover:bg-white transition-all focus-visible:ring-2 focus-visible:ring-[#3FA2AD] focus-visible:outline-none"
      >
        <WhatsAppIcon className="h-5 w-5 fill-[#0A0C0E]" />
      </motion.a>
    </motion.div>
  );
}

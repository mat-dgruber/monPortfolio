"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";
import { playSound } from "@/utils/audioManager";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus("submitting");
    playSound("command");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          message,
          subject: `Novo contato de ${name} via Portfólio`,
          from_name: "Portfólio Matheus Diniz",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        playSound("execute");
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch {}
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
        setErrorMessage(
          data.message || "Não foi possível enviar a mensagem no momento.",
        );
        playSound("error");
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Ocorreu um erro de conexão. Por favor, tente novamente ou use o WhatsApp.",
      );
      playSound("error");
    }
  };

  return (
    <div className="premium-card p-6 sm:p-8 space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-white">
          Enviar mensagem por email
        </h3>
        <p className="text-sm text-slate-400">
          Preencha os campos abaixo para me enviar uma mensagem direta por
          email.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="rounded-2xl border border-emerald-500/30 bg-emerald-950/40 p-6 text-center space-y-3"
          >
            <CheckCircle2 className="h-10 w-10 text-emerald-400 mx-auto" />
            <h4 className="text-lg font-semibold text-white">
              Mensagem enviada com sucesso!
            </h4>
            <p className="text-sm text-slate-300">
              Obrigado pelo contato. Sua mensagem foi entregue e retornarei em
              breve.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:bg-slate-700"
            >
              Enviar outra mensagem
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot for Spam Protection */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />

            {/* Name */}
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs font-semibold text-slate-300 mb-1.5"
              >
                Seu Nome
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Carlos Silva"
                className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 transition focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs font-semibold text-slate-300 mb-1.5"
              >
                Seu Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ex: carlos@empresa.com"
                className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 transition focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-semibold text-slate-300 mb-1.5"
              >
                Mensagem
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Descreva seu projeto ou ideia..."
                className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 transition focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 resize-none"
              />
            </div>

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-xs text-rose-400 bg-rose-950/40 border border-rose-500/30 rounded-xl p-3"
              >
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{errorMessage}</span>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3.5 font-semibold text-slate-950 transition hover:bg-blue-400 active:translate-y-px disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-950/30"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Enviando mensagem...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Enviar Mensagem</span>
                </>
              )}
            </button>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, CheckCircle2, Code } from 'lucide-react';
import { playSound } from '@/utils/audioManager';

export default function CyberFooter() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    playSound('execute');
    setSubmitted(true);
  };

  return (
    <footer id="contact" className="py-20 px-6 border-t border-sky-500/20 bg-slate-950/90 z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto space-y-12"
      >
        {/* Contact Form Container */}
        <div className="glass-cyber rounded-2xl p-8 border border-sky-500/30 shadow-glow-cyan">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans flex items-center justify-center gap-2">
              <Mail className="w-6 h-6 text-cyan-400" /> Vamos Conectar &amp; Colaborar
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-sans">
              Envie uma mensagem direta para tratar de oportunidades em engenharia de software ou IA.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-6 rounded-xl bg-cyan-950/80 border border-cyan-400 text-center space-y-3 font-mono text-sm text-cyan-300"
            >
              <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
              <p className="font-bold">MENSAGEM REGISTRADA COM SUCESSO!</p>
              <p className="text-xs text-slate-300">
                Obrigado pelo contato. Caso necessite de resposta imediata, você também pode enviar um e-mail direto para{' '}
                <a
                  href={`mailto:matheus.gruber123@gmail.com?subject=Contato%20via%20Portfólio&body=${encodeURIComponent(message)}`}
                  className="text-cyan-400 underline font-bold"
                >
                  matheus.gruber123@gmail.com
                </a>
                .
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs sm:text-sm">
              <div>
                <label htmlFor="contact-email" className="block text-slate-200 mb-1 font-semibold font-mono">
                  SEU E-MAIL:
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu.email@empresa.com"
                  className="w-full px-4 py-2.5 rounded bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-slate-400"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-slate-200 mb-1 font-semibold font-mono">
                  MENSAGEM / DESAFIO:
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escreva sobre a oportunidade, projeto ou arquitetura de software..."
                  className="w-full px-4 py-2.5 rounded bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-400 resize-none transition-colors placeholder:text-slate-400"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  onClick={() => playSound('click')}
                  className="flex-1 py-3 rounded bg-sky-600 hover:bg-sky-500 text-white font-bold font-mono shadow-glow-cyan transition-all flex items-center justify-center gap-2 active:scale-98"
                >
                  <Send className="w-4 h-4" /> ENVIAR MENSAGEM
                </button>

                <a
                  href={`mailto:matheus.gruber123@gmail.com?subject=Contato%20Portfólio`}
                  onClick={() => playSound('click')}
                  className="py-3 px-6 rounded bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white font-bold font-mono text-center transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-cyan-400" /> VIA MAILTO
                </a>
              </div>
            </form>
          )}
        </div>

        {/* Footer Meta Details */}
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-400 pt-6 border-t border-slate-900">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Tatuí, SP — Brasil
          </div>
          <div>
            MATHEUS DINIZ GRUBER &copy; 2026 // ALL RIGHTS RESERVED
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:matheus.gruber123@gmail.com"
              className="hover:text-cyan-400 transition-colors"
            >
              matheus.gruber123@gmail.com
            </a>
            <a
              href="https://github.com/mat-dgruber"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <Code className="w-3.5 h-3.5 text-cyan-400" /> GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

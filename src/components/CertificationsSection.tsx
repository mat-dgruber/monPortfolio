'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, GraduationCap, Trophy, CheckCircle, ExternalLink, X, Shield } from 'lucide-react';
import { playSound } from '@/utils/audioManager';

interface Achievement {
  title: string;
  category: 'educacao' | 'opensource' | 'certificacao';
  institution: string;
  description: string;
  badgeColor: string;
  highlights: string[];
}

const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Pós-Graduação em Engenharia de IA Aplicada',
    category: 'educacao',
    institution: 'UNIPDS / Anhanguera',
    description: 'Especialização em arquitetura de IA, RAG, integração de LLMs, protocolo MCP e automação de agentes.',
    badgeColor: 'border-purple-400 text-purple-300 bg-purple-950/60',
    highlights: [
      'Arquitetura de Soluções com LLMs & Agentes Autônomos',
      'Engenharia de Prompt, Chain-of-Thought e RAG',
      'Implantação e Otimização de Modelos Locais (Ollama)',
    ],
  },
  {
    title: 'Graduação em Análise e Desenvolvimento de Sistemas',
    category: 'educacao',
    institution: 'Universidade Cruzeiro do Sul',
    description: 'Formação superior focada em engenharia de software, estrutura de dados, orientação a objetos e desenvolvimento web.',
    badgeColor: 'border-sky-400 text-sky-300 bg-sky-950/60',
    highlights: [
      'Engenharia de Software Core & Padrões de Projeto',
      'Modelagem de Bancos de Dados Relacionais & SQL',
      'Desenvolvimento Web Full Stack',
    ],
  },
  {
    title: 'Criador da Linguagem Harpia (Go)',
    category: 'opensource',
    institution: 'Comunidade Open-Source / GitHub',
    description: 'Criação completa do compilador, parser AST e JIT VM reativa em Go com sintaxe nativa em Português.',
    badgeColor: 'border-yellow-400 text-yellow-300 bg-yellow-950/60',
    highlights: [
      'Direct-Threaded JIT VM & Pool Eden O(1)',
      'CLI com 29 Comandos (LSP, DAP, REPL, TUI)',
      'Reatividade Nativa baseada em Sinais e Efeitos',
    ],
  },
  {
    title: 'Adaptação Enterprise do OpenClaude MCP',
    category: 'opensource',
    institution: 'Ecossistema Open-Source',
    description: 'Customização da CLI multi-modelo de automação de código para suporte a mais de 200 LLMs e protocolo MCP.',
    badgeColor: 'border-cyan-400 text-cyan-300 bg-cyan-950/60',
    highlights: [
      'Integração com Protocolo MCP (Model Context Protocol)',
      'Codebase Intelligence com algoritmo PageRank (RepoMap)',
      'Execução assíncrona em segundo plano (--bg)',
    ],
  },
];

export default function CertificationsSection() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const openModal = (item: Achievement) => {
    playSound('click');
    setSelectedAchievement(item);
  };

  const closeModal = () => {
    playSound('hover');
    setSelectedAchievement(null);
  };

  return (
    <section id="certifications" className="py-16 px-6 max-w-6xl mx-auto z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3 mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-400 font-mono text-xs shadow-glow-purple">
          <Award className="w-3.5 h-3.5" />
          <span>RECONHECIMENTO &amp; CERTIFICAÇÕES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-mono">
          🏆 Conquistas &amp; Certificados
        </h2>
        <p className="text-sm sm:text-base text-slate-400 font-mono max-w-2xl mx-auto">
          Graus acadêmicos, qualificações em Inteligência Artificial e marcos no desenvolvimento open-source.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ACHIEVEMENTS.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -6 }}
            onClick={() => openModal(item)}
            className="glass-cyber rounded-xl p-6 border border-sky-500/30 hover:border-cyan-400 transition-all duration-300 shadow-glow-cyan cursor-pointer flex flex-col justify-between"
            onMouseEnter={() => playSound('hover')}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={`px-2.5 py-0.5 rounded font-mono text-[10px] font-bold border ${item.badgeColor}`}>
                  {item.category.toUpperCase()}
                </span>
                <Trophy className="w-4 h-4 text-yellow-400" />
              </div>

              <h3 className="text-lg font-bold text-white font-mono">{item.title}</h3>
              <p className="text-xs font-mono text-cyan-300">{item.institution}</p>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">{item.description}</p>
            </div>

            <div className="pt-4 border-t border-sky-500/20 text-xs font-mono text-cyan-400 font-bold flex items-center justify-between">
              <span>VER VERIFICAÇÃO &amp; DETALHES</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Details */}
      <AnimatePresence>
        {selectedAchievement && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-cyber rounded-2xl border border-purple-400/50 max-w-lg w-full p-6 space-y-5 shadow-glow-purple relative text-slate-100 font-mono"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white border border-slate-700"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-1">
                <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold border ${selectedAchievement.badgeColor}`}>
                  {selectedAchievement.category.toUpperCase()}
                </span>
                <h3 className="text-xl font-bold text-white pt-2">{selectedAchievement.title}</h3>
                <p className="text-xs text-cyan-300">{selectedAchievement.institution}</p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-sans">{selectedAchievement.description}</p>

              <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs">
                <h4 className="font-bold text-purple-400 uppercase flex items-center gap-1.5">
                  <Shield className="w-4 h-4" /> Competências Validadas
                </h4>
                {selectedAchievement.highlights.map((h, hIdx) => (
                  <p key={hIdx} className="text-slate-300 flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> {h}
                  </p>
                ))}
              </div>

              <button
                onClick={closeModal}
                className="w-full py-2 rounded bg-slate-900 border border-slate-700 text-slate-300 hover:text-white text-xs font-bold"
              >
                FECHAR
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

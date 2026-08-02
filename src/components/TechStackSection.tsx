'use client';

import { motion } from 'framer-motion';
import { Cpu, Code2, Layers, Cloud, ShieldCheck, Wrench, Sparkles } from 'lucide-react';
import { playSound } from '@/utils/audioManager';

interface TechCategory {
  title: string;
  icon: any;
  skills: { name: string; level: string; color: string }[];
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    title: 'Linguagens de Programação',
    icon: Code2,
    skills: [
      { name: 'Go', level: 'Especialista', color: 'border-cyan-500/40 text-cyan-300' },
      { name: 'TypeScript', level: 'Avançado', color: 'border-sky-500/40 text-sky-300' },
      { name: 'Python', level: 'Avançado', color: 'border-yellow-500/40 text-yellow-300' },
      { name: 'JavaScript', level: 'Avançado', color: 'border-yellow-400/40 text-yellow-300' },
      { name: 'Swift', level: 'Intermediário', color: 'border-orange-500/40 text-orange-300' },
      { name: 'C++', level: 'Intermediário', color: 'border-blue-500/40 text-blue-300' },
    ],
  },
  {
    title: 'Frontend & UI Frameworks',
    icon: Layers,
    skills: [
      { name: 'Angular 20+', level: 'Avançado', color: 'border-red-500/40 text-red-300' },
      { name: 'React / Next.js', level: 'Avançado', color: 'border-cyan-400/40 text-cyan-300' },
      { name: 'Tailwind CSS', level: 'Avançado', color: 'border-teal-400/40 text-teal-300' },
      { name: 'PrimeNG', level: 'Proficiente', color: 'border-red-400/40 text-red-300' },
      { name: 'HTML5 & CSS3', level: 'Especialista', color: 'border-orange-400/40 text-orange-300' },
    ],
  },
  {
    title: 'Backend, Banco de Dados & Mensageria',
    icon: Cpu,
    skills: [
      { name: 'FastAPI (Python)', level: 'Avançado', color: 'border-emerald-500/40 text-emerald-300' },
      { name: 'Node.js', level: 'Avançado', color: 'border-green-500/40 text-green-300' },
      { name: 'PostgreSQL', level: 'Avançado', color: 'border-blue-400/40 text-blue-300' },
      { name: 'Firebase / Firestore', level: 'Avançado', color: 'border-amber-400/40 text-amber-300' },
      { name: 'Redis', level: 'Proficiente', color: 'border-red-500/40 text-red-300' },
      { name: 'SQLite', level: 'Avançado', color: 'border-sky-400/40 text-sky-300' },
    ],
  },
  {
    title: 'IA Aplicada, LLMs & Agentes',
    icon: Sparkles,
    skills: [
      { name: 'Protocolo MCP', level: 'Especialista', color: 'border-purple-400/40 text-purple-300' },
      { name: 'OpenAI / Gemini APIs', level: 'Avançado', color: 'border-cyan-400/40 text-cyan-300' },
      { name: 'RAG & Vector Contexts', level: 'Avançado', color: 'border-indigo-400/40 text-indigo-300' },
      { name: 'Ollama & Modelos Locais', level: 'Avançado', color: 'border-emerald-400/40 text-emerald-300' },
      { name: 'DeepSeek / Claude', level: 'Avançado', color: 'border-blue-400/40 text-blue-300' },
    ],
  },
  {
    title: 'Nuvem, DevOps & Infraestrutura',
    icon: Cloud,
    skills: [
      { name: 'Docker & Compose', level: 'Avançado', color: 'border-sky-500/40 text-sky-300' },
      { name: 'Google Cloud (GCP)', level: 'Proficiente', color: 'border-blue-500/40 text-blue-300' },
      { name: 'AWS Cloud', level: 'Proficiente', color: 'border-amber-500/40 text-amber-300' },
      { name: 'GitHub Actions / CI/CD', level: 'Avançado', color: 'border-purple-500/40 text-purple-300' },
      { name: 'Git & GitHub Workflows', level: 'Especialista', color: 'border-orange-500/40 text-orange-300' },
    ],
  },
  {
    title: 'Arquitetura & Engenharia Core',
    icon: ShieldCheck,
    skills: [
      { name: 'Clean Architecture', level: 'Especialista', color: 'border-cyan-400/40 text-cyan-300' },
      { name: 'Domain-Driven Design (DDD)', level: 'Especialista', color: 'border-purple-400/40 text-purple-300' },
      { name: 'Design de Compiladores (AST)', level: 'Avançado', color: 'border-yellow-400/40 text-yellow-300' },
      { name: 'Modernização de Legados', level: 'Avançado', color: 'border-emerald-400/40 text-emerald-300' },
    ],
  },
];

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="py-20 px-6 max-w-6xl mx-auto z-10 relative">
      <div className="text-center space-y-3 mb-14">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-sans flex items-center justify-center gap-3">
          <Wrench className="w-8 h-8 text-cyan-400" /> Tecnologias &amp; Habilidades
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
          Stack tecnológica completa aplicada por Matheus Diniz no desenvolvimento de software enterprise, IA e compiladores.
        </p>
      </div>

      {/* Grid Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TECH_CATEGORIES.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-cyber rounded-xl p-6 border border-sky-500/30 hover:border-cyan-400 transition-colors shadow-glow-cyan flex flex-col justify-between"
              onMouseEnter={() => playSound('hover')}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 border-b border-sky-500/20 pb-3">
                  <div className="p-2 rounded-lg bg-slate-950 border border-sky-500/30 text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white font-sans">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`px-3 py-1.5 rounded-lg bg-slate-950 border ${skill.color} font-mono text-xs flex items-center justify-between gap-2`}
                    >
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-[10px] text-slate-300 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

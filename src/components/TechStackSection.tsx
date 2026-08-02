'use client';

import { motion } from 'framer-motion';

interface TechnicalAxis {
  title: string;
  description: string;
  stack: string[];
  proof: string;
}

const TECHNICAL_AXES: TechnicalAxis[] = [
  {
    title: 'Front-end, UI/UX e produto',
    description: 'Criação de interfaces em Angular e React com atenção a usabilidade, responsividade, hierarquia visual e fluxo de produto.',
    stack: ['Angular', 'React', 'TypeScript', 'Tailwind CSS', 'UI/UX'],
    proof: 'meuCPB, monFinTrack e redesign deste portfolio como vitrine de produto e experiência.',
  },
  {
    title: 'Backend e sistemas confiáveis',
    description: 'Construção de APIs, BFFs e fluxos de dados com atenção a consistência, manutenção e operação.',
    stack: ['Python', 'FastAPI', 'Node.js', 'SQL Server', 'PostgreSQL'],
    proof: 'meuCPB, monFinTrack e integrações corporativas em ambiente enterprise.',
  },
  {
    title: 'Arquitetura e integrações',
    description: 'Organização de domínios, separação de camadas, integrações externas e automações que reduzem trabalho manual.',
    stack: ['Clean Architecture', 'DDD', 'REST APIs', 'LDAP', 'Google APIs'],
    proof: 'Arquitetura de desenvolvimento de ponta a ponta em produtos internos e educacionais.',
  },
  {
    title: 'IA aplicada e automação',
    description: 'Uso de LLMs como parte de produtos, agentes e fluxos reais, sem tratar IA como camada decorativa.',
    stack: ['LLMs', 'RAG', 'Gemini API', 'Ollama', 'Agentes'],
    proof: 'OpenClaude, monFinTrack e pós-graduação em andamento em Engenharia de IA Aplicada.',
  },
];

export default function TechStackSection() {
  return (
    <section id="technical-proof" className="relative z-10 px-6 py-24">
      <div className="premium-shell space-y-10">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-5xl">
            Profundidade técnica organizada por capacidade.
          </h2>
          <p className="text-lg leading-8 text-slate-300">
            A stack importa quando evidencia capacidade de resolver problemas. Por isso, a prova técnica está agrupada em eixos de entrega, não em uma lista completa de ferramentas.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {TECHNICAL_AXES.map((axis, index) => (
            <motion.article
              key={axis.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.42, delay: index * 0.04 }}
              className="premium-card p-6"
            >
              <h3 className="text-xl font-semibold text-white">{axis.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{axis.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {axis.stack.map((item) => (
                  <span key={item} className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-300 ring-1 ring-slate-800">
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-5 border-t border-slate-800 pt-4 text-sm leading-6 text-slate-400">
                <span className="font-semibold text-slate-200">Evidência:</span> {axis.proof}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

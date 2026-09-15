'use client';

import { motion } from 'framer-motion';
import { Cpu, Database, Layout, Network, ShieldCheck } from 'lucide-react';

interface TechnicalAxis {
  domain: string;
  icon: typeof Layout;
  title: string;
  description: string;
  stack: string[];
  proof: string;
}

const TECHNICAL_AXES: TechnicalAxis[] = [
  {
    domain: '01',
    icon: Layout,
    title: 'Frontend & Interfaces Fluidas',
    description: 'Criação de SPAs e aplicações web de alto desempenho em Angular, React e Next.js com foco em acessibilidade, usabilidade rigorosa e micro-interações responsivas.',
    stack: ['Angular', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    proof: 'monFinTrack, meuCPB e este portfólio estruturado com sistema de design tokens próprio.',
  },
  {
    domain: '02',
    icon: Database,
    title: 'Backend & Sistemas Confiáveis',
    description: 'Desenvolvimento de APIs assíncronas, arquitetura BFF (Backend-for-Frontend), modelagem relacional e processamento seguro com isolamento de regras de negócio.',
    stack: ['Python', 'FastAPI', 'Node.js', 'SQL Server', 'PostgreSQL', 'Firebase'],
    proof: 'APIs corporativas do meuCPB, serviços financeiros do monFinTrack e integrações de microsserviços.',
  },
  {
    domain: '03',
    icon: Cpu,
    title: 'IA Aplicada & Engenharia de Agentes',
    description: 'Integração de Modelos de Linguagem (LLMs) em sistemas de produção, engenharia de contexto, protocolos de ferramentas (MCP) e pipelines RAG determinísticos.',
    stack: ['LLMs & APIs', 'MCP Protocol', 'Gemini API', 'Ollama (Local)', 'RAG Pipelines'],
    proof: 'OpenClaude CLI multi-provedor, agentes de automação e especialização em pós-graduação de IA.',
  },
  {
    domain: '04',
    icon: Network,
    title: 'Arquitetura, Cloud & Resiliência',
    description: 'Design estrutural baseado em Clean Architecture e DDD, automação CI/CD, observabilidade, autenticação corporativa (SSO/LDAP) e infraestrutura em nuvem.',
    stack: ['Clean Architecture', 'DDD', 'Docker', 'LDAP / RBAC', 'REST & GraphQL'],
    proof: 'Desenho de arquitetura corporativa e implementação de ponta a ponta em ambientes produtivos.',
  },
];

export default function TechStackSection() {
  return (
    <section id="technical-proof" className="relative z-10 px-4 sm:px-6 py-28 border-t border-slate-800/60">
      <div className="premium-shell space-y-12">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-wider">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>DOMÍNIOS DE CAPACIDADE TÉCNICA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Profundidade técnica estruturada por capacidade de entrega.
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Tecnologia como meio para resolver problemas reais de negócio. Conhecimento comprovado em pilares que vão da interface ao algoritmo de inferência.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {TECHNICAL_AXES.map((axis, index) => {
            const Icon = axis.icon;
            return (
              <motion.article
                key={axis.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="tech-card flex flex-col justify-between p-6 sm:p-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                    <span className="font-mono text-xs font-bold text-emerald-400">
                      DOMÍNIO // {axis.domain}
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 bg-slate-900 text-emerald-400">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {axis.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {axis.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {axis.stack.map((item) => (
                      <span
                        key={item}
                        className="tech-tag rounded border border-slate-700/60 bg-slate-900/90 px-2.5 py-1 text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-800/80 pt-4">
                  <p className="text-xs text-slate-400 leading-relaxed">
                    <span className="font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                      Evidência em Produção:
                    </span>
                    {axis.proof}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

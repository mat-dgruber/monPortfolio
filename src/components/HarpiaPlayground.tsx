'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Play, Code2, Layers } from 'lucide-react';
import { playSound } from '@/utils/audioManager';

const HARPIA_EXAMPLES = [
  {
    name: 'Sintaxe Nativa & Reatividade',
    code: `// Harpia Native Code Examples (Go JIT VM)
pacote principal

importar "tempo"

funcao inicio() {
    declarar contador = sinal(0)
    
    escutar(contador, funcao(valor) {
        imprimir("[EVENTO REATIVO]: Valor atualizado =>", valor)
    })

    contador.definir(10)
    contador.definir(25)
}`,
    output: `[SIMULAÇÃO JIT VM v1.4]: Compilando AST...
[LOG]: Entrada processada via Analisador Léxico PT-BR
[AST Output]:
-> [EVENTO REATIVO]: Valor atualizado => 10
-> [EVENTO REATIVO]: Valor atualizado => 25
[STATUS]: Concluído | GC Eden Pool: 0 alocações`,
  },
  {
    name: 'Clean Arch / DDD Component',
    code: `// Harpia Clean Architecture & DDD Component
pacote dominio.servicos

modelo Usuario {
    id: Texto,
    ativo: Booleano
}

funcao validarUsuario(u: Usuario): Booleano {
    se u.ativo == verdadeiro {
        retornar verdadeiro
    }
    retornar falso
}`,
    output: `[CLEAN ARCH LINTER]: Verificando regras de domínio...
[VALIDAÇÃO]: 0 dependências cíclicas encontradas
[STATUS]: Modelo compilado e pronto para a camada infra!`,
  },
  {
    name: 'Comandos CLI (`harpia --help`)',
    code: `// Execução do assistente CLI Harpia
$ harpia auditar
$ harpia compilar --alvo=web
$ harpia diagramar --formato=mermaid`,
    output: `[CLI HARPIA]:
-> auditar: Análise estática OWASP Top 10 OK (0 vulnerabilidades)
-> compilar: Transpilação reativa gerada em ./dist
-> diagramar: Grafo de dependências gerado com sucesso!`,
  },
];

export default function HarpiaPlayground() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [activeCode, setActiveCode] = useState(HARPIA_EXAMPLES[0].code);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const runCode = () => {
    playSound('execute');
    setIsRunning(true);
    setOutput('⚡ Compilando código na JIT VM do Harpia (Go)...');

    setTimeout(() => {
      setIsRunning(false);
      setOutput(HARPIA_EXAMPLES[selectedExample].output);
    }, 350);
  };

  const handleSelect = (idx: number) => {
    playSound('click');
    setSelectedExample(idx);
    setActiveCode(HARPIA_EXAMPLES[idx].code);
    setOutput('');
  };

  return (
    <section id="harpia" className="py-16 px-6 max-w-5xl mx-auto z-10 relative">
      <div className="text-center space-y-3 mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans flex items-center justify-center gap-3">
          <Cpu className="w-8 h-8 text-yellow-400" /> Harpia IDE &amp; CLI Playground
        </h2>
        <p className="text-sm text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
          Experimente em tempo real a sintaxe em Português, o compilador e a JIT VM da linguagem **Harpia**, criada nativamente em Go.
        </p>
      </div>

      {/* IDE Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="glass-cyber rounded-xl border border-yellow-500/30 overflow-hidden shadow-glow-yellow"
      >
        {/* IDE Header Tabs */}
        <div className="bg-slate-900/90 px-4 py-3 border-b border-yellow-500/20 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-mono text-xs">
            <Code2 className="w-4 h-4 text-yellow-400" />
            <span className="text-white font-bold">harpia-online-compiler.hrp</span>
          </div>

          {/* Presets */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            {HARPIA_EXAMPLES.map((ex, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`px-3 py-1 rounded transition-colors ${
                  selectedExample === idx
                    ? 'bg-yellow-500 text-slate-950 font-bold shadow-glow-yellow'
                    : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                {ex.name}
              </button>
            ))}
          </div>

          {/* Execute Button */}
          <button
            onClick={runCode}
            disabled={isRunning}
            className="px-4 py-1.5 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono text-xs font-bold flex items-center gap-1.5 transition-all shadow-glow-yellow active:scale-95"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{isRunning ? 'EXECUTANDO...' : 'EXECUTAR HARPIA'}</span>
          </button>
        </div>

        {/* Code Editor & Output Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-yellow-500/20 font-mono text-xs sm:text-sm">
          {/* Code Editor Panel */}
          <div className="p-4 bg-slate-950/90 min-h-[240px]">
            <textarea
              value={activeCode}
              onChange={(e) => setActiveCode(e.target.value)}
              className="w-full h-full min-h-[220px] bg-transparent text-yellow-100 focus:outline-none resize-none font-mono leading-relaxed"
              spellCheck={false}
            />
          </div>

          {/* Output & AST Panel */}
          <div className="p-4 bg-slate-900/80 min-h-[240px] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-2 font-bold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5 text-yellow-400" /> Console de Execução &amp; AST Output
              </div>
              <pre className="text-yellow-300 font-mono whitespace-pre-wrap leading-relaxed">
                {output || '// Clique em "EXECUTAR HARPIA" para compilar a AST e simular a VM.'}
              </pre>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
              <span>VM // GO DIRECT-THREADED JIT</span>
              <span className="text-emerald-400 font-bold">STATUS // OPERACIONAL</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

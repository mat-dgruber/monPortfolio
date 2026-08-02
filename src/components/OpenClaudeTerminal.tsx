'use client';

import { useState, useRef, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Terminal, CornerDownLeft, RefreshCw, Bot } from 'lucide-react';
import { playSound } from '@/utils/audioManager';

interface HistoryLog {
  command: string;
  output: string | ReactNode;
}

export default function OpenClaudeTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryLog[]>([
    {
      command: 'openclaude --version',
      output: 'OpenClaude CLI v2.4.0 (Multi-Model AI Agent & MCP Protocol Adapter)',
    },
    {
      command: 'help',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">Comandos autênticos do OpenClaude CLI:</p>
          <p><span className="text-yellow-400">/provider</span> - Exibe provedores de IA suportados e perfis configurados</p>
          <p><span className="text-yellow-400">openclaude ps</span> - Lista sessões ativas em segundo plano (--bg)</p>
          <p><span className="text-yellow-400">/repomap</span> - Exibe o mapa de inteligência do codebase via PageRank</p>
          <p><span className="text-yellow-400">/buddy</span> - Exibe o companheiro robô pixel-art do terminal</p>
          <p><span className="text-yellow-400">about</span> - Informações do desenvolvedor Matheus Diniz</p>
          <p><span className="text-yellow-400">clear</span> - Limpa a tela do terminal</p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    playSound('command');

    let outputResult: string | ReactNode = '';

    switch (cmd) {
      case 'help':
        outputResult = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-400 font-bold">Comandos autênticos do OpenClaude CLI:</p>
            <p><span className="text-yellow-400">/provider</span> - Exibe provedores de IA suportados e perfis configurados</p>
            <p><span className="text-yellow-400">openclaude ps</span> - Lista sessões ativas em segundo plano (--bg)</p>
            <p><span className="text-yellow-400">/repomap</span> - Exibe o mapa de inteligência do codebase via PageRank</p>
            <p><span className="text-yellow-400">/buddy</span> - Exibe o companheiro robô pixel-art do terminal</p>
            <p><span className="text-yellow-400">about</span> - Informações do desenvolvedor Matheus Diniz</p>
            <p><span className="text-yellow-400">clear</span> - Limpa a tela do terminal</p>
          </div>
        );
        break;
      case '/provider':
        outputResult = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-400 font-bold">[PROVEDORES SUPORTADOS NO OPENCLAUDE]:</p>
            <p>• <strong className="text-emerald-400">OpenAI API:</strong> gpt-4o, o3-mini (Function Calling nativo)</p>
            <p>• <strong className="text-sky-400">Google Gemini:</strong> Gemini 2.0 Flash / Pro (via Protocolo MCP)</p>
            <p>• <strong className="text-purple-400">Ollama Local:</strong> qwen2.5-coder, deepseek-r1 (32k context window)</p>
            <p>• <strong className="text-amber-400">Provedores Adicionais:</strong> Fireworks AI, Z.AI GLM-5.2, GitHub Models, Cloudflare AI</p>
          </div>
        );
        break;
      case 'openclaude ps':
        outputResult = (
          <div className="font-mono text-xs text-slate-300 space-y-1 bg-slate-950 p-2 rounded border border-cyan-500/30">
            <p className="text-cyan-400 font-bold">[BACKGROUND SESSIONS]:</p>
            <p>ID: <span className="text-yellow-400">sess_auth_refactor</span> | NAME: auth-middleware | STATUS: RUNNING (PID 84920)</p>
            <p>ID: <span className="text-yellow-400">sess_tests_fix</span> | NAME: fix-failing-tests | STATUS: COMPLETED</p>
          </div>
        );
        break;
      case '/repomap':
        outputResult = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-400 font-bold">[REPOMAP INTELLIGENCE - PAGERANK RANKING]:</p>
            <p>1. <span className="text-sky-300">src/core/agent.ts</span> (Score: 0.94 - Multi-step tool loop)</p>
            <p>2. <span className="text-sky-300">src/mcp/client.ts</span> (Score: 0.89 - Protocol Adapter)</p>
            <p>3. <span className="text-sky-300">src/providers/openai.ts</span> (Score: 0.84 - API Connector)</p>
          </div>
        );
        break;
      case '/buddy':
        outputResult = (
          <div className="font-mono text-xs text-emerald-400 space-y-1">
            <p>🏹 [ROBINHOOD BUDDY ACTIVE]: O arqueiro pixel-art dispara uma flecha a cada submit de mensagem no OpenClaude!</p>
          </div>
        );
        break;
      case 'about':
        outputResult =
          'Matheus Diniz Gruber | Engenheiro de Software Fullstack na CPB. Criador do Harpia (Go JIT VM) e adaptador/contribuidor do OpenClaude CLI (Multi-modelo & MCP Protocol).';
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        playSound('error');
        outputResult = `Comando não reconhecido: "${cmd}". Digite "help" para ver os comandos suportados do OpenClaude.`;
    }

    setHistory((prev) => [...prev, { command: input, output: outputResult }]);
    setInput('');
  };

  return (
    <section id="terminal" className="py-16 px-6 max-w-4xl mx-auto z-10 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="rounded-xl overflow-hidden border border-cyan-500/40 bg-slate-950/95 shadow-glow-cyan"
      >
        {/* Terminal Header */}
        <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-cyan-500/20">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-xs font-mono text-slate-300 ml-2 flex items-center gap-1.5 font-bold">
              <Bot className="w-4 h-4 text-cyan-400" /> openclaude-cli v2.4 --interactive
            </span>
          </div>
          <button
            onClick={() => {
              playSound('click');
              setHistory([]);
            }}
            className="text-slate-400 hover:text-cyan-400 text-xs font-mono flex items-center gap-1 transition-colors"
          >
            <RefreshCw className="w-3 h-3" /> Limpar
          </button>
        </div>

        {/* Terminal Body */}
        <div className="p-4 font-mono text-xs sm:text-sm h-80 overflow-y-auto space-y-3">
          {history.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-1"
            >
              <div className="flex items-center gap-2 text-cyan-400">
                <span>mat-dgruber@openclaude:~$</span>
                <span className="text-white font-semibold">{item.command}</span>
              </div>
              <div className="text-slate-300 pl-4 border-l border-slate-800">{item.output}</div>
            </motion.div>
          ))}

          {/* Active Input Line with WCAG AA High Contrast Placeholder */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 text-cyan-400 pt-2">
            <span>mat-dgruber@openclaude:~$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite '/provider', 'openclaude ps', '/repomap', 'help'..."
              className="flex-1 bg-transparent text-white focus:outline-none font-mono placeholder:text-slate-400"
            />
            <button type="submit" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>

          <div ref={terminalEndRef} />
        </div>
      </motion.div>
    </section>
  );
}

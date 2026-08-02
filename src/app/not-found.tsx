'use client';

import Link from 'next/link';
import { ShieldAlert, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center px-6 text-center font-mono">
      <div className="glass-cyber rounded-2xl p-8 max-w-md border border-cyan-500/40 shadow-glow-cyan space-y-4">
        <ShieldAlert className="w-12 h-12 text-cyan-400 mx-auto animate-bounce" />
        <h1 className="text-3xl font-extrabold text-white">404 // NOT FOUND</h1>
        <p className="text-xs text-slate-300">
          A rota solicitada não existe ou foi movida para outro ambiente de execução.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shadow-glow-cyan transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> VOLTAR AO INÍCIO
        </Link>
      </div>
    </main>
  );
}

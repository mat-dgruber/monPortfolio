'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0A0C0E] text-[#EDE7DC] flex flex-col justify-center items-center px-6 text-center">
      <div className="rounded-sm p-8 sm:p-10 max-w-md border border-[rgba(237,231,220,0.14)] bg-[#101317] space-y-5">
        <span className="font-body text-[11px] font-bold text-[#E8913C] uppercase tracking-[0.15em] block">
          404 // NÃO ENCONTRADO
        </span>
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#EDE7DC]">
          Página não encontrada
        </h1>
        <p className="font-body text-xs sm:text-sm text-[#9EA5A8] leading-relaxed">
          A rota solicitada não existe ou foi movida no catálogo do portfólio.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EDE7DC] text-[#0A0C0E] text-[11px] font-bold uppercase tracking-[0.12em] hover:bg-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar ao Início</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

import Link from 'next/link';

import SiteHeader from '@/components/SiteHeader';
import HarpiaPlayground from '@/components/HarpiaPlayground';
import OpenClaudeTerminal from '@/components/OpenClaudeTerminal';
import SystemStatusWidget from '@/components/SystemStatusWidget';

export const metadata = {
  title: 'Lab · Matheus Diniz Gruber',
  description: 'Laboratório técnico com terminal OpenClaude, playground Harpia e experimentos de engenharia.',
};

export default function LabPage() {
  return (
    <main id="main-content" className="relative overflow-hidden px-6 pb-20 pt-32">
      <SiteHeader />
      <section className="premium-shell space-y-5 pb-12">
        <Link href="/" className="accent-link text-sm">Voltar para home</Link>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-white sm:text-6xl">
          Laboratório de ferramentas, linguagens e agentes.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-slate-300">
          Uma área secundária para explorar os experimentos técnicos sem prejudicar a clareza comercial da home.
        </p>
      </section>
      <div className="space-y-12">
        <OpenClaudeTerminal />
        <HarpiaPlayground />
        <SystemStatusWidget />
      </div>
    </main>
  );
}

import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://monportfolio.vercel.app'),
  title: 'Matheus Diniz Gruber // Software Engineer & AI Architect',
  description: 'Portfólio de Engenharia de Software Pleno, Compiladores (Harpia em Go) e Agentes de Inteligência Artificial Aplicada (OpenClaude com protocolo MCP).',
  keywords: ['Software Engineer', 'Matheus Diniz Gruber', 'Go', 'TypeScript', 'Python', 'IA Aplicada', 'OpenClaude', 'Harpia', 'Casa Publicadora Brasileira'],
  openGraph: {
    title: 'Matheus Diniz Gruber // Software Engineer & AI Architect',
    description: 'Engenheiro de Software Pleno especializado em Go, TypeScript, Python e IA Aplicada.',
    url: 'https://monportfolio.vercel.app',
    siteName: 'Matheus Diniz Gruber Portfolio',
    images: [
      {
        url: '/images/IMG_2250.jpg',
        width: 800,
        height: 600,
        alt: 'Matheus Diniz Gruber',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
        {/* Skip to Content for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-slate-950 focus:font-mono focus:font-bold focus:rounded-md"
        >
          Pular para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}

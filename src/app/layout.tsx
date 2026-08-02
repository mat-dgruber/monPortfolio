import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://monportfolio.vercel.app'),
  title: 'Matheus Diniz Gruber · Fullstack Engineer & UI/UX',
  description: 'Portfolio profissional de Matheus Diniz Gruber: engenharia fullstack, UI/UX, arquitetura de sistemas, Angular, React e soluções com IA aplicada.',
  keywords: ['Fullstack Engineer', 'Matheus Diniz Gruber', 'Angular', 'React', 'TypeScript', 'Python', 'UI/UX', 'IA Aplicada', 'Arquitetura de Software'],
  openGraph: {
    title: 'Matheus Diniz Gruber · Fullstack Engineer & UI/UX',
    description: 'Engenharia fullstack, UI/UX, arquitetura e soluções com IA aplicada para produtos técnicos confiáveis.',
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
      <body className="antialiased bg-slate-950 text-slate-100 selection:bg-blue-400/30 selection:text-white">
        {/* Skip to Content for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-400 focus:text-slate-950 focus:font-semibold focus:rounded-md"
        >
          Pular para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}

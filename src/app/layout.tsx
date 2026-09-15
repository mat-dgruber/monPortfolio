import { Metadata } from 'next';
import { Syne, Sora } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://monportfolio-dgruber.web.app'),
  title: 'Matheus Gruber · Fullstack Engineer & AI Solutions Architect',
  description:
    'Portfólio profissional de Matheus Gruber: engenharia fullstack, arquitetura de sistemas escaláveis, interfaces de alta precisão e soluções com IA aplicada.',
  keywords: [
    'Fullstack Engineer',
    'Matheus Gruber',
    'Next.js',
    'React',
    'Angular',
    'TypeScript',
    'Python',
    'FastAPI',
    'IA Aplicada',
    'Engenharia de Prompt',
    'Arquitetura de Software',
    'Clean Architecture',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Matheus Gruber · Fullstack Engineer & AI Solutions Architect',
    description:
      'Engenharia fullstack, arquitetura de sistemas e soluções com IA aplicada para produtos técnicos confiáveis.',
    url: 'https://monportfolio-dgruber.web.app',
    siteName: 'Matheus Gruber Portfolio',
    images: [
      {
        url: '/images/IMG_2250.jpg',
        width: 800,
        height: 600,
        alt: 'Matheus Gruber',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matheus Gruber · Fullstack Engineer & AI Solutions Architect',
    description:
      'Engenharia fullstack, arquitetura de sistemas e soluções com IA aplicada para produtos técnicos confiáveis.',
    images: ['/images/IMG_2250.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://monportfolio-dgruber.web.app/#person',
      name: 'Matheus Gruber',
      jobTitle: 'Engenheiro de Software Fullstack & Especialista em IA Aplicada',
      url: 'https://monportfolio-dgruber.web.app',
      image: 'https://monportfolio-dgruber.web.app/images/IMG_2250.jpg',
      sameAs: [
        'https://github.com/mat-dgruber',
        'https://wa.me/5567991040523',
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Casa Publicadora Brasileira (CPB)',
      },
      knowsAbout: [
        'Engenharia Fullstack',
        'Angular',
        'React',
        'Next.js',
        'TypeScript',
        'Python',
        'FastAPI',
        'UI/UX Design',
        'Inteligência Artificial Aplicada',
        'Model Context Protocol (MCP)',
        'Clean Architecture',
        'Domain-Driven Design (DDD)',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://monportfolio-dgruber.web.app/#website',
      url: 'https://monportfolio-dgruber.web.app',
      name: 'Matheus Gruber — Portfólio Profissional',
      description:
        'Engenharia fullstack, arquitetura de sistemas e soluções com IA aplicada.',
      publisher: {
        '@id': 'https://monportfolio-dgruber.web.app/#person',
      },
    },
    {
      '@type': 'ProfilePage',
      '@id': 'https://monportfolio-dgruber.web.app/#profilepage',
      url: 'https://monportfolio-dgruber.web.app',
      name: 'Matheus Gruber — Perfil Profissional',
      mainEntity: {
        '@id': 'https://monportfolio-dgruber.web.app/#person',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${syne.variable} ${sora.variable} scroll-smooth`}>
      <head>
        <link rel="describedby" href="/llms.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="antialiased bg-[#0A0C0E] text-[#EDE7DC] selection:bg-[#E8913C]/30 selection:text-[#EDE7DC]">
        {/* Skip to Content for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#EDE7DC] focus:text-[#0A0C0E] focus:font-semibold focus:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8913C]"
        >
          Pular para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}

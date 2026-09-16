import { Metadata } from 'next';
import { Syne, Sora } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import '../globals.css';

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';

  const title = isEn
    ? 'Matheus Gruber · Fullstack Engineer & AI Systems Architect'
    : 'Matheus Gruber · Fullstack Engineer & AI Solutions Architect';

  const description = isEn
    ? 'Professional portfolio of Matheus Gruber: fullstack engineering, scalable system architecture, high-precision interfaces, and production-grade applied AI solutions.'
    : 'Portfólio profissional de Matheus Gruber: engenharia fullstack, arquitetura de sistemas escaláveis, interfaces de alta precisão e soluções com IA aplicada.';

  return {
    metadataBase: new URL('https://monportfolio-dgruber.web.app'),
    title,
    description,
    keywords: isEn
      ? [
          'Fullstack Engineer',
          'AI Systems Architect',
          'Matheus Gruber',
          'Agentic Systems',
          'Model Context Protocol',
          'Next.js',
          'React',
          'Angular',
          'TypeScript',
          'Python',
          'FastAPI',
          'Clean Architecture',
        ]
      : [
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
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        'pt-BR': '/pt',
      },
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
      title,
      description,
      url: `https://monportfolio-dgruber.web.app/${locale}`,
      siteName: 'Matheus Gruber Portfolio',
      images: [
        {
          url: '/images/IMG_2250.jpg',
          width: 800,
          height: 600,
          alt: 'Matheus Gruber',
        },
      ],
      locale: isEn ? 'en_US' : 'pt_BR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/IMG_2250.jpg'],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const isEn = locale === 'en';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://monportfolio-dgruber.web.app/#person',
        name: 'Matheus Gruber',
        jobTitle: isEn
          ? 'Fullstack Software Engineer & Applied AI Specialist'
          : 'Engenheiro de Software Fullstack & Especialista em IA Aplicada',
        url: `https://monportfolio-dgruber.web.app/${locale}`,
        image: 'https://monportfolio-dgruber.web.app/images/IMG_2250.jpg',
        email: 'matheus.gruber123@gmail.com',
        sameAs: [
          'https://github.com/mat-dgruber',
          'https://wa.me/5515981081030',
        ],
        worksFor: {
          '@type': 'Organization',
          name: 'Casa Publicadora Brasileira (CPB)',
        },
        knowsAbout: [
          'Fullstack Engineering',
          'Angular',
          'React',
          'Next.js',
          'TypeScript',
          'Python',
          'FastAPI',
          'UI/UX Design',
          'Model Context Protocol (MCP)',
          'Clean Architecture',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `https://monportfolio-dgruber.web.app/${locale}/#website`,
        url: `https://monportfolio-dgruber.web.app/${locale}`,
        name: isEn
          ? 'Matheus Gruber — Professional Portfolio'
          : 'Matheus Gruber — Portfólio Profissional',
        description: isEn
          ? 'Fullstack engineering, resilient system architecture, and applied AI systems.'
          : 'Engenharia fullstack, arquitetura de sistemas e soluções com IA aplicada.',
        publisher: {
          '@id': 'https://monportfolio-dgruber.web.app/#person',
        },
      },
    ],
  };

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${syne.variable} ${sora.variable} scroll-smooth`}
    >
      <head>
        <link rel="describedby" href="/llms.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="antialiased bg-[#0A0C0E] text-[#EDE7DC] selection:bg-[#E8913C]/30 selection:text-[#EDE7DC]"
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#EDE7DC] focus:text-[#0A0C0E] focus:font-semibold focus:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8913C]"
        >
          {isEn ? 'Skip to main content' : 'Pular para o conteúdo principal'}
        </a>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    try {
      const preferred = localStorage.getItem('preferred_locale');
      if (preferred === 'pt' || preferred === 'en') {
        router.replace(`/${preferred}`);
        return;
      }
      const isPt = navigator.language?.toLowerCase().startsWith('pt');
      router.replace(isPt ? '/pt' : '/en');
    } catch {
      router.replace('/en');
    }
  }, [router]);

  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content="0;url=/en" />
        <title>Matheus Gruber · Redirecting...</title>
      </head>
      <body className="bg-[#0A0C0E] text-[#EDE7DC] flex items-center justify-center min-h-screen font-sans">
        <div className="flex flex-col items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#3FA2AD] animate-ping" />
          <p className="text-xs tracking-[0.2em] text-[#9EA5A8] uppercase font-mono">
            Loading Portfolio...
          </p>
        </div>
      </body>
    </html>
  );
}

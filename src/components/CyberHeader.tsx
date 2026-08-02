'use client';

import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Terminal, Cpu, Sparkles, UserCheck, Briefcase, FileText } from 'lucide-react';
import { playSound } from '@/utils/audioManager';

interface HeaderProps {
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
}

export default function CyberHeader({ soundEnabled, setSoundEnabled }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    if (typeof window !== 'undefined') {
      localStorage.setItem('soundEnabled', String(nextState));
    }
    if (nextState) playSound('click');
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 pointer-events-none">
      <header
        className={`pointer-events-auto flex items-center justify-between gap-4 md:gap-8 rounded-full border border-sky-500/30 bg-slate-950/85 backdrop-blur-xl shadow-glow-cyan transition-all duration-500 ${
          scrolled ? 'px-5 py-2 scale-95 shadow-glow-purple border-cyan-400/50' : 'px-7 py-3.5 w-full max-w-5xl'
        }`}
      >
        {/* Brand Identity (Using span/div instead of H1 to keep H1 unique for Hero) */}
        <a
          href="#"
          onClick={() => playSound('hover')}
          className="flex items-center gap-3 group"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-sky-950 border border-sky-500/50 text-cyan-400 font-mono font-bold text-xs shadow-glow-cyan group-hover:scale-105 transition-transform">
            MD
          </div>
          <div className="hidden sm:block">
            <span className="text-xs font-bold tracking-wider text-slate-100 uppercase flex items-center gap-1">
              Matheus Diniz <span className="text-cyan-400 font-mono text-[10px]">// GRUBER</span>
            </span>
            <p className="text-[10px] text-slate-400 font-mono">Software Engineer &amp; AI Architect</p>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="flex items-center gap-4 sm:gap-6 font-mono text-xs">
          <a
            href="#about"
            onClick={() => playSound('hover')}
            className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1"
          >
            <UserCheck className="w-4 h-4 text-cyan-400" /> <span className="hidden sm:inline">Sobre</span>
          </a>
          <a
            href="#projects"
            onClick={() => playSound('hover')}
            className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" /> <span className="hidden sm:inline">Projetos</span>
          </a>
          <a
            href="#timeline"
            onClick={() => playSound('hover')}
            className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1"
          >
            <Briefcase className="w-4 h-4 text-purple-400" /> <span className="hidden sm:inline">Trajetória</span>
          </a>
          <a
            href="#terminal"
            onClick={() => playSound('hover')}
            className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1"
          >
            <Terminal className="w-4 h-4 text-cyan-400" /> <span className="hidden sm:inline">Terminal</span>
          </a>
        </nav>

        {/* Actions & Sound Toggle */}
        <div className="flex items-center gap-2">
          <a
            href="mailto:matheus.gruber123@gmail.com?subject=Download%20CV%20Request"
            onClick={() => playSound('click')}
            className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 hover:text-white font-mono text-[11px] font-bold hover:shadow-glow-cyan transition-all"
          >
            <FileText className="w-3.5 h-3.5" /> <span>CV (.PDF)</span>
          </a>

          <button
            onClick={toggleSound}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-sky-500/40 hover:border-cyan-400 text-[11px] font-mono text-cyan-400 hover:shadow-glow-cyan transition-all"
            title="Alternar áudio Sci-Fi"
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-4 h-4 text-cyan-400" />
                <span className="hidden md:inline">AUDIO // ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-slate-400" />
                <span className="hidden md:inline text-slate-400">MUTE</span>
              </>
            )}
          </button>
        </div>
      </header>
    </div>
  );
}

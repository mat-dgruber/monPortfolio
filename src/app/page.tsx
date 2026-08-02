'use client';

import { useState, useEffect } from 'react';
import ParticleCanvas from '@/components/ParticleCanvas';
import CyberCursor from '@/components/CyberCursor';
import CyberHeader from '@/components/CyberHeader';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TechStackSection from '@/components/TechStackSection';
import OpenClaudeTerminal from '@/components/OpenClaudeTerminal';
import HarpiaPlayground from '@/components/HarpiaPlayground';
import ProjectGrid from '@/components/ProjectGrid';
import CertificationsSection from '@/components/CertificationsSection';
import SystemStatusWidget from '@/components/SystemStatusWidget';
import CareerTimeline from '@/components/CareerTimeline';
import CyberFooter from '@/components/CyberFooter';

export default function Home() {
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedSound = localStorage.getItem('soundEnabled');
      if (savedSound !== null) {
        setSoundEnabled(savedSound === 'true');
      }
    }
  }, []);

  return (
    <main id="main-content" className="min-h-screen bg-slate-950 text-slate-100 relative">
      {/* Interactive WebGL Particles */}
      <ParticleCanvas />

      {/* Cyberpunk Trailing Cursor (Desktop only) */}
      <CyberCursor />

      {/* Sci-Fi Navigation Header */}
      <CyberHeader soundEnabled={soundEnabled} setSoundEnabled={setSoundEnabled} />

      {/* Hero Section */}
      <HeroSection />

      {/* Detailed About Me Section with Real Photo */}
      <AboutSection />

      {/* Complete Technologies & Frameworks Matrix */}
      <TechStackSection />

      {/* OpenClaude Interactive Terminal CLI */}
      <OpenClaudeTerminal />

      {/* Harpia Programming Language IDE Playground */}
      <HarpiaPlayground />

      {/* Featured Projects Grid with AI Banners & Architecture Modals */}
      <ProjectGrid />

      {/* Certifications & Achievements Modal Section */}
      <CertificationsSection />

      {/* System Status & Engine Health Widget */}
      <SystemStatusWidget />

      {/* Career & Education Timeline */}
      <CareerTimeline />

      {/* Contact & Footer */}
      <CyberFooter />
    </main>
  );
}

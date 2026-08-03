'use client';

import { useEffect, useState } from 'react';

interface ParticleTrail {
  id: number;
  x: number;
  y: number;
  size: number;
  alpha: number;
}

export default function PointerTrail() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trails, setTrails] = useState<ParticleTrail[]>([]);

  useEffect(() => {
    let count = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      setPosition({ x, y });

      count++;
      if (count % 2 === 0) {
        setTrails((prev) => [
          ...prev.slice(-12),
          {
            id: Date.now() + Math.random(),
            x,
            y,
            size: Math.random() * 4 + 2,
            alpha: 1,
          },
        ]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const interval = setInterval(() => {
      setTrails((prev) =>
        prev
          .map((t) => ({ ...t, alpha: t.alpha - 0.08, size: t.size * 0.92 }))
          .filter((t) => t.alpha > 0)
      );
    }, 30);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Primary Glowing Cursor Ring */}
      <div
        className="fixed w-7 h-7 rounded-full border border-sky-400/80 shadow-glow-cyan transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
      </div>

      {/* Trailing Particle Tail */}
      {trails.map((t) => (
        <div
          key={t.id}
          className="fixed rounded-full bg-cyan-400 shadow-glow-cyan -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${t.x}px`,
            top: `${t.y}px`,
            width: `${t.size}px`,
            height: `${t.size}px`,
            opacity: t.alpha,
          }}
        />
      ))}
    </div>
  );
}

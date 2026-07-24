import React, { useEffect, useRef, useState } from 'react';
import { gsap } from '../lib/gsap';
import Logo from './Logo';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [visible, setVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setVisible(false);
      onComplete();
      return;
    }

    const counter = { value: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 0.7,
          ease: 'power4.inOut',
          onComplete: () => {
            setVisible(false);
            onComplete();
          },
        });
      },
    });

    tl.to(counter, {
      value: 100,
      duration: 1.3,
      ease: 'power2.out',
      onUpdate: () => {
        if (pctRef.current) pctRef.current.textContent = String(Math.floor(counter.value));
        if (barRef.current) barRef.current.style.width = `${counter.value}%`;
      },
    }).to({}, { duration: 0.2 });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9998] bg-[#0B120C] flex flex-col items-center justify-center gap-8"
    >
      <div className="brightness-0 invert opacity-90">
        <Logo />
      </div>
      <div className="text-center -mt-4 space-y-1">
        <span className="block text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-brand-primary">
          Consult. Implement. Transform.
        </span>
        <span className="block text-[10px] font-mono text-white/40 uppercase tracking-[0.2em]">
          Transforming Business Through Technology
        </span>
      </div>
      <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div ref={barRef} className="h-full bg-gradient-to-r from-brand-primary to-brand-gold w-0" />
      </div>
      <span className="font-mono text-xs text-white/40 tracking-widest">
        <span ref={pctRef}>0</span>%
      </span>
    </div>
  );
}

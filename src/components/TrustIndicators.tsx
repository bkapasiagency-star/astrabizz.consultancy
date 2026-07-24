import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap';
import { TRUST_COUNTERS } from '../data';

interface CounterProps {
  value: string;
  suffix: string;
}

function CountUp({ value, suffix }: CounterProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const target = parseInt(value, 10);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    const counter = { value: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        value: target,
        duration: 1.6,
        ease: 'power2.out',
        onUpdate: () => {
          el.textContent = String(Math.floor(counter.value));
        },
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [target]);

  return (
    <span className="font-mono text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
      <span ref={spanRef}>0</span>
      <span className="text-brand-primary">{suffix}</span>
    </span>
  );
}

export default function TrustIndicators() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = grid.querySelectorAll('[data-trust-card]');
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, scale: 0.85, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'back.out(1.6)',
          scrollTrigger: { trigger: grid, start: 'top 85%' },
        }
      );
    }, grid);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="trust-indicators"
      className="py-12 bg-white dark:bg-slate-900 border-b border-slate-200/50 dark:border-slate-800/50 relative overflow-hidden select-none transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-center">
          {TRUST_COUNTERS.map((counter) => (
            <div
              key={counter.id}
              data-trust-card
              className="card-lift flex flex-col items-center text-center p-4 rounded-2xl hover:bg-brand-light/40 dark:hover:bg-slate-800/40 group"
            >
              <div className="flex items-baseline justify-center">
                <CountUp value={counter.value} suffix={counter.suffix} />
              </div>

              <span className="text-sm font-display font-semibold text-slate-800 dark:text-slate-200 mt-2 tracking-tight group-hover:text-brand-dark dark:group-hover:text-brand-primary transition-colors">
                {counter.label}
              </span>

              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-sans leading-relaxed max-w-[200px]">
                {counter.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

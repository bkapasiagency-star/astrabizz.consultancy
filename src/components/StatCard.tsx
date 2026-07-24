import React, { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';

interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  accent: 'primary' | 'gold';
  delayIndex?: number;
}

const ACCENT_CLASSES: Record<StatCardProps['accent'], { text: string; glow: string; ring: string }> = {
  primary: {
    text: 'text-brand-primary',
    glow: 'from-brand-primary/30 to-brand-primary/0',
    ring: 'group-hover:shadow-brand-primary/20',
  },
  gold: {
    text: 'text-brand-gold',
    glow: 'from-brand-gold/30 to-brand-gold/0',
    ring: 'group-hover:shadow-brand-gold/20',
  },
};

export default function StatCard({ icon: Icon, value, prefix = '', suffix = '', label, accent, delayIndex = 0 }: StatCardProps) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const accentCls = ACCENT_CLASSES[accent];

  useEffect(() => {
    const el = numberRef.current;
    const card = cardRef.current;
    if (!el || !card) return;

    const counter = { value: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        value,
        duration: 1.4,
        ease: 'power2.out',
        delay: delayIndex * 0.08,
        onUpdate: () => {
          el.textContent = String(Math.floor(counter.value));
        },
        scrollTrigger: { trigger: card, start: 'top 90%', once: true },
      });
    }, card);

    return () => ctx.revert();
  }, [value, delayIndex]);

  return (
    <div
      ref={cardRef}
      data-stat-card
      className={`group relative p-6 rounded-2xl bg-brand-light dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 flex flex-col items-center text-center overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl ${accentCls.ring}`}
    >
      {/* Soft radial glow that blooms on hover */}
      <div className={`pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full bg-gradient-to-b ${accentCls.glow} blur-xl opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500`} />

      <div
        className={`relative p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm mb-3 ${accentCls.text} transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:rotate-6 group-hover:scale-110`}
      >
        <Icon className="w-6 h-6" />
      </div>

      <span className="relative text-2xl font-bold text-slate-800 dark:text-slate-200 font-display tabular-nums">
        {prefix}
        <span ref={numberRef}>0</span>
        {suffix}
      </span>
      <span className="relative text-xs font-sans text-slate-500 dark:text-slate-400 mt-1">{label}</span>
    </div>
  );
}

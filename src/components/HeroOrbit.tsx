import React, { useEffect, useRef } from 'react';
import { Boxes, Users, Sparkles, BarChart3, Workflow } from 'lucide-react';
import { gsap } from '../lib/gsap';
import Logo from './Logo';

const NODES = [
  { label: 'ERP', Icon: Boxes, angle: -90 },
  { label: 'CRM', Icon: Users, angle: -18 },
  { label: 'AI', Icon: Sparkles, angle: 54 },
  { label: 'BI', Icon: BarChart3, angle: 126 },
  { label: 'Process', Icon: Workflow, angle: 198 },
];

/**
 * A quiet, premium replacement for the old "fake live dashboard": a single
 * orbiting-systems diagram that visualises how Astrabizz unifies ERP, CRM,
 * AI, BI and process work around one business core — the actual thesis of
 * the practice, rendered as a signature visual rather than invented metrics.
 */
export default function HeroOrbit() {
  const outerRingRef = useRef<HTMLDivElement>(null);
  const innerRingRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const outerTween = gsap.to(outerRingRef.current, {
      rotate: 360,
      duration: 48,
      repeat: -1,
      ease: 'none',
    });
    const innerTween = gsap.to(innerRingRef.current, {
      rotate: -360,
      duration: 30,
      repeat: -1,
      ease: 'none',
    });

    // Counter-rotate each node so its icon+label always stays upright.
    const nodeTweens = nodeRefs.current.map((node) =>
      node
        ? gsap.to(node, { rotate: -360, duration: 48, repeat: -1, ease: 'none' })
        : null
    );

    return () => {
      outerTween.kill();
      innerTween.kill();
      nodeTweens.forEach((t) => t?.kill());
    };
  }, []);

  return (
    <div className="relative w-full max-w-lg aspect-square mx-auto select-none" id="hero-orbit-visual">
      {/* Ambient glow */}
      <div className="absolute inset-8 rounded-full bg-gradient-to-br from-brand-primary/15 via-transparent to-brand-gold/15 blur-2xl" />

      {/* Static dashed guide circles */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
        <circle cx="200" cy="200" r="176" stroke="currentColor" className="text-slate-300 dark:text-slate-700" strokeWidth="1" strokeDasharray="2 6" />
        <circle cx="200" cy="200" r="118" stroke="currentColor" className="text-slate-300 dark:text-slate-700" strokeWidth="1" strokeDasharray="2 6" />
      </svg>

      {/* Outer rotating ring carrying the five practice nodes */}
      <div ref={outerRingRef} className="absolute inset-0">
        {NODES.map(({ label, Icon, angle }, i) => {
          const rad = (angle * Math.PI) / 180;
          const radius = 176;
          const x = 200 + radius * Math.cos(rad);
          const y = 200 + radius * Math.sin(rad);
          return (
            <div
              key={label}
              ref={(el) => { nodeRefs.current[i] = el; }}
              className="absolute flex flex-col items-center gap-1.5"
              style={{ left: `${(x / 400) * 100}%`, top: `${(y / 400) * 100}%`, transform: 'translate(-50%, -50%)' }}
            >
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex items-center justify-center text-brand-dark dark:text-brand-primary">
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase">
                {label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Inner rotating ring: small orbiting accent dots */}
      <div ref={innerRingRef} className="absolute inset-0">
        <span className="absolute w-2 h-2 rounded-full bg-brand-gold" style={{ left: '50%', top: '5%', transform: 'translate(-50%, -50%)' }} />
        <span className="absolute w-1.5 h-1.5 rounded-full bg-brand-primary" style={{ left: '92%', top: '68%', transform: 'translate(-50%, -50%)' }} />
        <span className="absolute w-1.5 h-1.5 rounded-full bg-brand-gold/70" style={{ left: '12%', top: '72%', transform: 'translate(-50%, -50%)' }} />
      </div>

      {/* Center card: brand mark + core proposition, no invented metrics */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[42%] aspect-square rounded-full glass-panel dark:glass-panel-dark shadow-xl flex flex-col items-center justify-center text-center px-6">
          <div className="scale-[0.6]">
            <Logo />
          </div>
          <span className="mt-1 text-[11px] font-display font-bold text-slate-800 dark:text-slate-100 leading-snug">
            One Connected<br />Business Core
          </span>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { TECHNOLOGIES, SOLUTIONS } from '../data';
import { Technology } from '../types';
import Marquee from './Marquee';
import FloatingShapes from './FloatingShapes';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

function TechCard({ tech }: { tech: Technology }) {
  return (
    <div className="card-lift shrink-0 w-64 mx-3 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-left shadow-sm hover:border-brand-primary/30">
      <div className="h-12 w-20 bg-white rounded-lg mb-4 shadow-sm ring-1 ring-slate-100 flex items-center justify-center p-2">
        <img src={tech.logo} alt={`${tech.name} logo`} className="max-h-full max-w-full object-contain" />
      </div>
      <span className="font-display font-bold text-sm text-slate-900 dark:text-white block mb-1.5">{tech.name}</span>
      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-sans">{tech.description}</p>
    </div>
  );
}

export default function TechStack() {
  const headerRef = useScrollReveal<HTMLDivElement>({ type: 'fade-up' });
  const panelRef = useScrollReveal<HTMLDivElement>({ type: 'fade-left', delay: 0.1 });
  const listRef = useStaggerReveal<HTMLDivElement>('[data-solution-item]', { type: 'fade-right', stagger: 0.05 });

  return (
    <section id="technologies" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <FloatingShapes variant="gold" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div ref={headerRef} className="max-w-2xl mb-14 space-y-4 text-left">
          <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-[0.18em]">
            Our Technology Stack
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Technologies We Work With
          </h2>
          <div className="h-1.5 w-16 bg-brand-primary rounded-full" />
          <p className="text-slate-600 dark:text-slate-300 font-sans text-sm leading-relaxed max-w-xl">
            We are technology-neutral by design. Rather than pushing a single platform, we recommend and implement the systems best suited to your business.
          </p>
        </div>
      </div>

      {/* Full-bleed marquee of technology partners */}
      <div className="relative py-2 mb-16">
        <Marquee speed={34} direction="left">
          {TECHNOLOGIES.map((tech) => (
            <TechCard key={tech.id} tech={tech} />
          ))}
        </Marquee>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div ref={panelRef} className="lg:col-span-5 space-y-4 text-left">
            <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-[0.18em]">
              End-to-End Solutions
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Everything Your Digital Transformation Needs
            </h3>
            <p className="text-slate-600 dark:text-slate-300 font-sans text-sm leading-relaxed max-w-md">
              One partner across selection, implementation, integration, and long-term support — so nothing falls through the cracks between vendors.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div ref={listRef} className="p-7 rounded-2xl bg-slate-900 border border-slate-800 relative overflow-hidden">
              <div className="noise-overlay" />
              <div className="grid sm:grid-cols-2 gap-3.5 relative">
                {SOLUTIONS.map((sol, idx) => (
                  <div
                    key={idx}
                    data-solution-item
                    className="flex items-center gap-2.5 text-xs text-slate-200 p-2 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                    <span className="font-medium">{sol}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

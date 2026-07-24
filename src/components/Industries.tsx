import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layers, Factory, Gem, Boxes, HardHat, Building2, Package, Pill, Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { INDUSTRIES } from '../data';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const iconMap: Record<string, React.ComponentType<any>> = {
  Layers,
  Factory,
  Gem,
  Boxes,
  HardHat,
  Building2,
  Package,
  Pill
};

export default function Industries() {
  const [activeIndustry, setActiveIndustry] = useState<string>('textile');
  const headerRef = useScrollReveal<HTMLDivElement>({ type: 'fade-up' });
  const railRef = useStaggerReveal<HTMLDivElement>('[data-industry-tab]', { type: 'fade-left', stagger: 0.06 });

  return (
    <section id="industries" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div ref={headerRef} className="text-left max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-[0.18em]">
            Sectors We Empower
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Engineered For Industry Workflows
          </h2>
          <div className="h-1.5 w-16 bg-brand-primary rounded-full" />
          <p className="text-slate-600 dark:text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
            Every business is unique. We do not believe in one-size-fits-all generic templates. Astrabizz has spent years on production floors mapping the precise operational challenges of the following core sectors:
          </p>
        </div>

        {/* Industry Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Navigation Rail (Selectable Tabs) */}
          <div ref={railRef} className="lg:col-span-4 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-none shrink-0">
            {INDUSTRIES.map((ind) => {
              const IconComp = iconMap[ind.icon] || Layers;
              const isActive = activeIndustry === ind.id;

              return (
                <button
                  key={ind.id}
                  data-industry-tab
                  onClick={() => setActiveIndustry(ind.id)}
                  className={`card-lift w-full text-left p-4.5 rounded-xl border flex items-center gap-4 shrink-0 lg:shrink select-none cursor-pointer ${
                    isActive
                      ? 'bg-brand-dark dark:bg-brand-primary text-white border-brand-dark dark:border-brand-primary shadow-md shadow-brand-dark/10 scale-[1.01]'
                      : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/70'
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-lg ${
                      isActive ? 'bg-brand-primary dark:bg-slate-950 text-white' : 'bg-white dark:bg-slate-850 text-slate-700 dark:text-slate-300 shadow-sm border border-slate-100 dark:border-slate-800'
                    }`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-display font-bold text-sm tracking-tight">{ind.name} Industry</span>
                    <span className={`text-[10px] uppercase font-mono tracking-wider block mt-0.5 ${isActive ? 'text-brand-gold' : 'text-slate-400'}`}>
                      Active Practice
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Active Profile Card */}
          <div className="lg:col-span-8">
            {INDUSTRIES.map((ind) => {
              if (ind.id !== activeIndustry) return null;
              const IconComp = iconMap[ind.icon] || Layers;

              return (
                <motion.div
                  key={ind.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="p-8 rounded-2xl bg-brand-light dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-sm text-left flex flex-col justify-between min-h-[460px]"
                >
                  <div className="space-y-6">
                    {/* Header Row */}
                    <div className="flex items-center gap-4 border-b border-slate-200/60 dark:border-slate-800 pb-5">
                      <div className="p-3.5 bg-brand-primary/10 text-brand-dark dark:text-brand-primary rounded-xl">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="font-display text-2xl font-bold text-slate-900 dark:text-white">{ind.name} Core Solutions</span>
                        <span className="block text-xs font-mono text-slate-400 dark:text-slate-500 mt-0.5">Custom configurations for {ind.name} firms</span>
                      </div>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-slate-600 dark:text-slate-300 font-sans text-sm leading-relaxed">
                      {ind.description}
                    </p>

                    {/* Grid of Workflows vs Challenges */}
                    <div className="grid md:grid-cols-2 gap-6 pt-2">
                      {/* Workflows List */}
                      <div className="space-y-3">
                        <span className="text-xs font-mono font-bold text-brand-dark dark:text-brand-primary uppercase tracking-wider block">
                          Mapped Workflows & Features:
                        </span>
                        <div className="space-y-2">
                          {ind.workflows.map((wf, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                              <span className="w-4 h-4 rounded-full bg-brand-primary/20 dark:bg-brand-primary/35 text-brand-dark dark:text-brand-primary flex items-center justify-center shrink-0 font-bold mt-0.5 text-[9px]">
                                ✓
                              </span>
                              <span className="font-semibold leading-relaxed">{wf}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Operational Challenges Block */}
                      <div className="space-y-4">
                        <div className="p-4 bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40 rounded-xl text-xs space-y-1.5">
                          <span className="font-bold text-rose-800 dark:text-rose-400 uppercase font-mono tracking-wide block">
                            Sector Painpoints:
                          </span>
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans text-[11px]">
                            {ind.challenges}
                          </p>
                        </div>

                        <div className="p-4 bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 rounded-xl text-xs space-y-1.5">
                          <span className="font-bold text-brand-dark dark:text-brand-primary uppercase font-mono tracking-wide block">
                            Astrabizz Core Answer:
                          </span>
                          <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-sans font-medium text-[11px]">
                            {ind.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footnote */}
                  <div className="pt-6 mt-6 border-t border-slate-200/60 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 dark:text-slate-500 gap-3">
                    <span>Ensuring FDA/FEFO compliance and production-floor tracking</span>
                    <button
                      onClick={() => {
                        const contact = document.getElementById('contact');
                        if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="font-bold text-brand-primary hover:text-brand-dark dark:hover:text-brand-primary flex items-center gap-1 group/act shrink-0 cursor-pointer"
                    >
                      Request sector blueprint <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/act:translate-x-0.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

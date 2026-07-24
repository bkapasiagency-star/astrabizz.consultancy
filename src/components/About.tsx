import React, { useState, useRef, useEffect } from 'react';
import { Shield, Sparkles, Network, ArrowRight, Zap, RefreshCw, Layers, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';
import { gsap } from '../lib/gsap';
import StatCard from './StatCard';
import FloatingShapes from './FloatingShapes';

export default function About() {
  const [activeTab, setActiveTab] = useState<'asis' | 'tobe'>('tobe');
  const textColRef = useScrollReveal<HTMLDivElement>({ type: 'fade-right' });
  const statsRef = useStaggerReveal<HTMLDivElement>('[data-stat-card]', { type: 'scale-in', stagger: 0.08 });
  const whyTextRef = useScrollReveal<HTMLDivElement>({ type: 'fade-right' });
  const timelineRef = useScrollReveal<HTMLDivElement>({ type: 'fade-left', delay: 0.1 });
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = dividerRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.9,
          ease: 'power3.out',
          transformOrigin: 'left center',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      {/* Decorative background vectors */}
      <FloatingShapes variant="mixed" />

      <div className="max-w-7xl mx-auto px-6">
        {/* About Section Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Left Textual Column */}
          <div ref={textColRef} className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-[0.18em]">
              Who We Are
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              About Astrabizz Consultancy
            </h2>
            <span className="block font-display text-sm font-bold text-brand-gold uppercase tracking-wide">
              Transforming Business Through Technology
            </span>
            <div ref={dividerRef} className="h-1.5 w-16 bg-brand-primary rounded-full" />
            
            <p className="text-slate-600 dark:text-slate-300 font-sans text-base leading-relaxed">
              Astrabizz Consultancy is a business and technology consulting firm specializing in ERP, CRM, AI, Business Intelligence, and Digital Transformation. We help organizations select the right technology, optimize business processes, implement enterprise solutions, and ensure long-term success through training and continuous support.
            </p>
            <p className="text-slate-800 dark:text-slate-200 font-display font-semibold text-lg leading-relaxed border-l-4 border-brand-gold pl-4 bg-brand-light/50 dark:bg-slate-850/50 py-3 rounded-r-xl">
              "We don't just implement software. We transform businesses."
            </p>
            <p className="text-slate-600 dark:text-slate-300 font-sans text-sm leading-relaxed">
              Our consulting philosophy is business-first and technology-neutral. We understand that your textile looms need specific yarn traceability, your pharmaceutical lines require rigid batch and QC compliance, and your packaging plant lives or dies by dispatch efficiency. We engineer systems tailored specifically to your winning operational formula, not the other way around.
            </p>
          </div>

          {/* Right Visual Stats Column */}
          <div ref={statsRef} className="lg:col-span-5 grid grid-cols-2 gap-4">
            <StatCard icon={Network} value={12} suffix="+ Years" label="Domain Experience" accent="primary" delayIndex={0} />
            <StatCard icon={Shield} value={100} suffix="% Solid" label="Compliance Rates" accent="gold" delayIndex={1} />
            <StatCard icon={Sparkles} value={60} suffix="%+" label="Manual Labour Drop" accent="primary" delayIndex={2} />
            <StatCard icon={Zap} value={2} suffix="-Min" label="Estimator Speeds" accent="primary" delayIndex={3} />
          </div>
        </div>

        {/* Why Digital Transformation Matters Section */}
        <div className="pt-16 border-t border-slate-100 dark:border-slate-800 grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Detail */}
          <div ref={whyTextRef} className="lg:col-span-5 space-y-6 text-left">
            <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-[0.18em]">
              Why It Matters
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Future-Ready Businesses Begin with Digital Transformation
            </h3>
            <p className="text-slate-600 dark:text-slate-300 font-sans text-sm leading-relaxed">
              Modern businesses generate enormous amounts of data. However, when software systems are disconnected, the data acts as friction rather than fuel.
            </p>

            {/* Current Pain Points vs Solutions Indicators */}
            <div className="space-y-4">
              <div className="card-lift p-4 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40 text-slate-700 dark:text-slate-300">
                <span className="text-xs font-mono font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                  <AlertCircle className="w-4 h-4" /> Business Challenges We Solve:
                </span>
                <ul className="text-xs grid grid-cols-2 gap-x-4 gap-y-1 text-slate-600 dark:text-slate-400 list-disc list-inside">
                  <li>Selecting the Right ERP & CRM</li>
                  <li>Manual & Inefficient Processes</li>
                  <li>Lack of Business Visibility</li>
                  <li>Disconnected Systems</li>
                  <li>Inventory & Warehouse Gaps</li>
                  <li>Poor Reporting & Decisions</li>
                </ul>
              </div>

              <div className="card-lift p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 text-slate-700 dark:text-slate-300">
                <span className="text-xs font-mono font-bold text-brand-dark dark:text-brand-primary uppercase tracking-wider flex items-center gap-1.5 mb-2">
                  <CheckCircle2 className="w-4 h-4" /> Digital Transformation Enables:
                </span>
                <ul className="text-xs grid grid-cols-2 gap-x-4 gap-y-1 text-slate-700 dark:text-slate-300 list-none font-medium">
                  <li className="flex items-center gap-1">✔ Automate Processes</li>
                  <li className="flex items-center gap-1">✔ Better Productivity</li>
                  <li className="flex items-center gap-1">✔ Real-time Decisions</li>
                  <li className="flex items-center gap-1">✔ Stellar Customer UX</li>
                  <li className="flex items-center gap-1">✔ Business Intelligence</li>
                  <li className="flex items-center gap-1">✔ Scalable Growth</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Infographic Timeline Slider (Comparing Legacy vs Astrabizz Streamlined) */}
          <div ref={timelineRef} className="lg:col-span-7 flex flex-col gap-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-brand-primary self-start">
              Consult. Implement. Transform.
            </span>
            <div className="flex justify-between items-center bg-slate-100 dark:bg-slate-800 p-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setActiveTab('asis')}
                className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'asis'
                    ? 'bg-white dark:bg-slate-900 text-rose-600 dark:text-rose-400 shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                Legacy Silos (As-Is Chaos)
              </button>
              <button
                onClick={() => setActiveTab('tobe')}
                className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'tobe'
                    ? 'bg-white dark:bg-slate-900 text-brand-dark dark:text-brand-primary shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                Astrabizz Streamlined (To-Be Excellence)
              </button>
            </div>

            {/* Infographic Cards container with micro timelines */}
            <div className="p-6 rounded-2xl bg-brand-light dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 min-h-[300px] flex flex-col justify-between">
              {activeTab === 'asis' ? (
                <div className="space-y-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-rose-100 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 py-0.5 px-2.5 rounded-full">
                    Fragmented Communication Path
                  </span>
                  
                  {/* Step 1 Pain */}
                  <div className="flex gap-4 items-start relative pl-1.5">
                    <div className="absolute top-7 bottom-0 left-3 w-[1.5px] bg-rose-200 dark:bg-rose-900/40" />
                    <span className="w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-900/60 flex items-center justify-center text-rose-600 dark:text-rose-400 text-xs font-mono font-bold shrink-0">
                      01
                    </span>
                    <div>
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Manual Order Entries</span>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Sales desks write down orders on paper files or isolated spreadsheet formats. Information takes 24 hours to sync with inventory heads.</p>
                    </div>
                  </div>

                  {/* Step 2 Pain */}
                  <div className="flex gap-4 items-start relative pl-1.5">
                    <div className="absolute top-7 bottom-0 left-3 w-[1.5px] bg-rose-200 dark:bg-rose-900/40" />
                    <span className="w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-900/60 flex items-center justify-center text-rose-600 dark:text-rose-400 text-xs font-mono font-bold shrink-0">
                      02
                    </span>
                    <div>
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Siloed Production Check</span>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Warehouse managers count batch dye weights, paper reels, or drug batches manually. Human tracking causes errors and stock duplicate orders.</p>
                    </div>
                  </div>

                  {/* Step 3 Pain */}
                  <div className="flex gap-4 items-start pl-1.5">
                    <span className="w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-900/60 flex items-center justify-center text-rose-600 dark:text-rose-400 text-xs font-mono font-bold shrink-0">
                      03
                    </span>
                    <div>
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Delayed Compliance & Dispatch</span>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Compliance officers dig through file boxes for FDA recipes, loom logs, or sizing cards. Deliveries delay. Customer complaints spike.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-brand-primary/15 text-brand-dark dark:text-brand-primary py-0.5 px-2.5 rounded-full">
                    Astrabizz Automated Digital Backbone
                  </span>
                  
                  {/* Step 1 Gain */}
                  <div className="flex gap-4 items-start relative pl-1.5">
                    <div className="absolute top-7 bottom-0 left-3 w-[1.5px] bg-brand-primary/20 dark:bg-brand-primary/10" />
                    <span className="w-6 h-6 rounded-full bg-brand-primary/10 dark:bg-brand-primary/20 border border-brand-primary/30 dark:border-brand-primary/40 flex items-center justify-center text-brand-dark dark:text-brand-primary text-xs font-mono font-bold shrink-0">
                      01
                    </span>
                    <div>
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Integrated CRM / Web Quoting</span>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Clients place orders on web portals. Lead metrics instantly populate in Salesforce, routing direct quotes to operations.</p>
                    </div>
                  </div>

                  {/* Step 2 Gain */}
                  <div className="flex gap-4 items-start relative pl-1.5">
                    <div className="absolute top-7 bottom-0 left-3 w-[1.5px] bg-brand-primary/20 dark:bg-brand-primary/10" />
                    <span className="w-6 h-6 rounded-full bg-brand-primary/10 dark:bg-brand-primary/20 border border-brand-primary/30 dark:border-brand-primary/40 flex items-center justify-center text-brand-dark dark:text-brand-primary text-xs font-mono font-bold shrink-0">
                      02
                    </span>
                    <div>
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Real-Time ERP Ledger Sync</span>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Yarn weight codes, size matrices, FEFO chemical alerts, and corrugator dimensions update inside the centralized ledger automatically.</p>
                    </div>
                  </div>

                  {/* Step 3 Gain */}
                  <div className="flex gap-4 items-start pl-1.5">
                    <span className="w-6 h-6 rounded-full bg-brand-primary/10 dark:bg-brand-primary/20 border border-brand-primary/30 dark:border-brand-primary/40 flex items-center justify-center text-brand-dark dark:text-brand-primary text-xs font-mono font-bold shrink-0">
                      03
                    </span>
                    <div>
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Automated Audit-Trail Logs</span>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Automatic compliance report drafting, instant shipping tags, and integrated BI reports showing real-time dispatch timelines.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Hook */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 mt-4 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-mono">Transition Period: 3 - 6 Months average</span>
                <span className="font-semibold text-brand-primary flex items-center gap-1">
                  Solid ERP Frameworks <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

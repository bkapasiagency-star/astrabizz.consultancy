import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Shield, Award, Users, Settings, Target, Eye, Handshake, ChevronDown, ChevronUp } from 'lucide-react';
import { WHY_CHOOSE_US, PROCESS_STEPS } from '../data';

const iconMap: Record<number, React.ComponentType<any>> = {
  0: Award,       // 12+ Years Experience
  1: Shield,      // Industry Expertise
  2: Settings,    // Implementation + Ongoing Support
  3: Users,       // Certified Professionals
  4: Target,      // Customized Solutions
  5: Eye,         // Business-Focused Approach
  6: CheckCircle, // Transparent Process
  7: Handshake    // Long-Term Partnership
};

export default function WhyChooseUs() {
  const [expandedStep, setExpandedStep] = useState<string | null>('01');

  const toggleStep = (step: string) => {
    if (expandedStep === step) {
      setExpandedStep(null);
    } else {
      setExpandedStep(step);
    }
  };

  return (
    <section id="why-choose-us" className="py-24 bg-[#F7F8FA] dark:bg-slate-950 relative overflow-hidden border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Why Choose Astrabizz Grid */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-[0.18em]">
              Our Edge
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Why Corporate Giants Trust Astrabizz
            </h2>
            <div className="h-1.5 w-16 bg-brand-primary rounded-full mx-auto" />
            <p className="text-slate-600 dark:text-slate-300 font-sans text-sm max-w-xl mx-auto leading-relaxed">
              We operate at the intersection of business strategy and high-end software orchestration, ensuring seamless implementations that actually stick.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((edge, idx) => {
              const IconComp = iconMap[idx] || Award;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.82 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, delay: idx * 0.06, ease: [0.34, 1.56, 0.64, 1] }}
                  className="card-lift p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-850 shadow-sm flex flex-col items-start text-left hover:border-brand-primary/40 dark:hover:border-brand-primary group"
                >
                  <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 text-brand-primary rounded-xl mb-4 group-hover:bg-brand-primary group-hover:text-white dark:group-hover:text-white transition-colors duration-300">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="font-display font-bold text-base text-slate-800 dark:text-slate-200 tracking-tight">
                    {edge.title}
                  </span>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed font-sans">
                    {edge.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mapped Process Section */}
        <div className="pt-16 border-t border-slate-200/60 dark:border-slate-800 grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Process Text Detail */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-[0.18em]">
              The Execution Blueprint
            </span>
            <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Our Consulting Approach
            </h3>
            <span className="block -mt-3 text-xs font-mono font-bold uppercase tracking-[0.2em] text-brand-primary">
              Consult. Implement. Transform.
            </span>
            <p className="text-slate-600 dark:text-slate-300 font-sans text-sm leading-relaxed">
              System rollout is a highly strategic endeavor. We follow a de-risked six-step roadmap — Discover → Analyze → Recommend → Implement → Train → Support — designed to prevent project slip, align team goals, and maintain operational safety from first conversation to long-term partnership.
            </p>
            <div className="p-5 bg-brand-light dark:bg-slate-900 rounded-xl border border-slate-200/40 dark:border-slate-800 text-xs">
              <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1">Interactive Timeline:</span>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                Click on any step of the blueprint on the right to examine specific sub-deliverables and operational milestones compiled by our consulting teams.
              </p>
            </div>
          </div>

          {/* Right Accordion-Style Timeline */}
          <div className="lg:col-span-7 space-y-3">
            {PROCESS_STEPS.map((stepData) => {
              const isExpanded = expandedStep === stepData.step;

              return (
                <div
                  key={stepData.step}
                  className={`border rounded-xl transition-all duration-300 text-left cursor-pointer ${
                    isExpanded
                      ? 'bg-white dark:bg-slate-900 border-brand-primary dark:border-brand-primary shadow-md'
                      : 'bg-white/60 dark:bg-slate-900/40 border-slate-200/60 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => toggleStep(stepData.step)}
                    className="w-full p-4 flex items-center justify-between font-sans text-slate-800 dark:text-slate-200 select-none cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      {/* Step Round Badge */}
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold ${
                          isExpanded
                            ? 'bg-brand-primary text-white shadow-sm'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        {stepData.step}
                      </span>
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 tracking-tight font-display">
                        {stepData.title}
                      </span>
                    </div>

                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>

                  {/* Progressive expanded content with animation */}
                  {isExpanded && (
                    <div className="px-14 pb-5 text-xs text-slate-600 dark:text-slate-300 space-y-3 border-t border-slate-100 dark:border-slate-800 pt-3">
                      <p className="leading-relaxed font-sans">
                        {stepData.description}
                      </p>
                      
                      {/* Substeps Pills Grid */}
                      <div className="space-y-2 pt-1">
                        <span className="text-[10px] font-mono font-bold text-brand-dark dark:text-brand-primary uppercase tracking-wider block">
                          Phase Deliverables:
                        </span>
                        <div className="grid grid-cols-2 gap-1.5">
                          {stepData.substeps.map((sub, sidx) => (
                            <div
                              key={sidx}
                              className="p-1.5 rounded-md bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium flex items-center gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                              <span className="text-[11px] truncate">{sub}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

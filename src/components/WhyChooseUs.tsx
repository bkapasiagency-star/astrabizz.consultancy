import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { CheckCircle, Shield, Award, Users, Settings, Target, Eye, Handshake, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { WHY_CHOOSE_US, PROCESS_STEPS } from '../data';
import { useScrollReveal } from '../hooks/useScrollReveal';
import FloatingShapes from './FloatingShapes';

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
  const headerRef = useScrollReveal<HTMLDivElement>({ type: 'fade-up' });
  const processTextRef = useScrollReveal<HTMLDivElement>({ type: 'fade-right' });

  const toggleStep = (step: string) => {
    setExpandedStep((prev) => (prev === step ? null : step));
  };

  const activeIndex = Math.max(0, PROCESS_STEPS.findIndex((s) => s.step === expandedStep));
  const progressPct = PROCESS_STEPS.length > 1 ? (activeIndex / (PROCESS_STEPS.length - 1)) * 100 : 0;

  return (
    <section id="why-choose-us" className="py-24 bg-[#F7F8FA] dark:bg-slate-950 relative overflow-hidden border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <FloatingShapes variant="mixed" />

      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Why Choose Astrabizz Grid */}
        <div className="mb-24">
          <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
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

          <div className="relative why-swiper-wrap">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              loop
              autoplay={{ delay: 3800, disableOnInteraction: false, pauseOnMouseEnter: true }}
              pagination={{ clickable: true, el: '.why-pagination' }}
              navigation={{ prevEl: '.why-prev', nextEl: '.why-next' }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              className="!pb-14 !px-1"
            >
              {WHY_CHOOSE_US.map((edge, idx) => {
                const IconComp = iconMap[idx] || Award;

                return (
                  <SwiperSlide key={idx} className="!h-auto">
                    <div className="group relative h-full min-h-[210px] p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-850 shadow-sm flex flex-col items-start text-left overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:border-brand-primary/40 dark:hover:border-brand-primary">
                      {/* Animated top accent bar */}
                      <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary to-brand-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                      {/* Glow bloom */}
                      <span className="pointer-events-none absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-brand-primary/10 blur-2xl opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />

                      <div className="relative p-3 bg-emerald-50 dark:bg-emerald-950/30 text-brand-primary rounded-xl mb-4 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white dark:group-hover:text-white">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="relative font-display font-bold text-base text-slate-800 dark:text-slate-200 tracking-tight">
                        {edge.title}
                      </span>
                      <p className="relative text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed font-sans">
                        {edge.description}
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-2">
              <button
                aria-label="Previous"
                data-cursor="hover"
                className="why-prev w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-brand-primary hover:border-brand-primary/40 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="why-pagination brand-swiper-pagination flex items-center gap-1.5" />
              <button
                aria-label="Next"
                data-cursor="hover"
                className="why-next w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-brand-primary hover:border-brand-primary/40 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Mapped Process Section */}
        <div className="pt-16 border-t border-slate-200/60 dark:border-slate-800 grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Process Text Detail */}
          <div ref={processTextRef} className="lg:col-span-5 space-y-6 text-left lg:sticky lg:top-28">
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

            {/* Progress indicator tied to the active step */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                <span>Roadmap Progress</span>
                <span className="text-brand-primary">Step {activeIndex + 1} of {PROCESS_STEPS.length}</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-brand-primary to-brand-gold"
                  animate={{ width: `${progressPct}%` }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />
              </div>
            </div>

            <div className="p-5 bg-brand-light dark:bg-slate-900 rounded-xl border border-slate-200/40 dark:border-slate-800 text-xs">
              <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1">Interactive Timeline:</span>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                Click on any step of the blueprint on the right to examine specific sub-deliverables and operational milestones compiled by our consulting teams.
              </p>
            </div>
          </div>

          {/* Right Accordion-Style Timeline */}
          <div className="lg:col-span-7 relative space-y-3">
            {/* Connecting rail behind the step badges */}
            <div className="absolute left-[35px] top-6 bottom-6 w-px bg-slate-200 dark:bg-slate-800 -z-10" />

            {PROCESS_STEPS.map((stepData) => {
              const isExpanded = expandedStep === stepData.step;

              return (
                <div
                  key={stepData.step}
                  className={`border rounded-xl text-left cursor-pointer transition-colors duration-300 ${
                    isExpanded
                      ? 'bg-white dark:bg-slate-900 border-brand-primary dark:border-brand-primary shadow-md'
                      : 'bg-white/60 dark:bg-slate-900/40 border-slate-200/60 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => toggleStep(stepData.step)}
                    data-cursor="hover"
                    className="w-full p-4 flex items-center justify-between font-sans text-slate-800 dark:text-slate-200 select-none cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      {/* Step Round Badge */}
                      <span className="relative shrink-0">
                        {isExpanded && (
                          <span className="absolute inset-0 rounded-full bg-brand-primary/30 animate-ping" />
                        )}
                        <span
                          className={`relative w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                            isExpanded
                              ? 'bg-brand-primary text-white shadow-sm scale-110'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                          }`}
                        >
                          {stepData.step}
                        </span>
                      </span>
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 tracking-tight font-display">
                        {stepData.title}
                      </span>
                    </div>

                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-brand-primary' : ''}`}
                    />
                  </button>

                  {/* Progressive expanded content with height animation */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
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
                                <motion.div
                                  key={sidx}
                                  initial={{ opacity: 0, x: -8 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: sidx * 0.04 }}
                                  className="p-1.5 rounded-md bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium flex items-center gap-2"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                                  <span className="text-[11px] truncate">{sub}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

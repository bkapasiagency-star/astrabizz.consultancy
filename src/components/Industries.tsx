import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Factory, Gem, Boxes, HardHat, Building2, Package, Pill, ArrowRight } from 'lucide-react';
import { INDUSTRIES } from '../data';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';
import { scrollToTarget, scrollToY } from '../lib/scroll';

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

const GRADIENTS = [
  'radial-gradient(60% 60% at 30% 20%, rgba(79,166,79,0.16) 0%, transparent 70%)',
  'radial-gradient(60% 60% at 70% 30%, rgba(242,194,48,0.16) 0%, transparent 70%)',
  'radial-gradient(60% 60% at 25% 70%, rgba(47,109,60,0.18) 0%, transparent 70%)',
  'radial-gradient(60% 60% at 75% 75%, rgba(242,194,48,0.14) 0%, transparent 70%)',
];

const textContainerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.1 } },
};
const wordVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};
const listContainerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.25 } },
};
const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
};

/** Desktop-only: scroll-pinned, scroll-scrubbed industry showcase. */
function DesktopShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    const track = trackRef.current;
    if (!isDesktop || !track) return;

    // Always read the track's LIVE position/height rather than caching it —
    // caching a start/end boundary up front is what previously went stale
    // whenever content above this section (fonts, images, other carousels)
    // finished loading and shifted the layout after the initial measurement.
    const getProgress = () => {
      const rect = track.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      if (scrollableDistance <= 0) return rect.top <= 0 ? 1 : 0;
      const progress = -rect.top / scrollableDistance;
      return Math.min(1, Math.max(0, progress));
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const progress = getProgress();
        const idx = Math.min(INDUSTRIES.length - 1, Math.floor(progress * INDUSTRIES.length));
        setActiveIndex((prev) => (prev === idx ? prev : idx));
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Jump to a given industry by computing its target scroll position fresh,
  // right now, from the track's live position — never from a cached value.
  const jumpToIndustry = (i: number) => {
    const track = trackRef.current;
    if (!track) {
      setActiveIndex(i);
      return;
    }
    const rect = track.getBoundingClientRect();
    const scrollableDistance = rect.height - window.innerHeight;
    const trackTopAbsolute = rect.top + window.scrollY;
    const progress = i / INDUSTRIES.length + 1 / (INDUSTRIES.length * 2);
    const targetY = trackTopAbsolute + progress * Math.max(0, scrollableDistance);
    scrollToY(targetY);
  };

  const active = INDUSTRIES[activeIndex];
  const ActiveIcon = iconMap[active.icon] || Layers;
  const titleWords = active.name.split(' ');

  return (
    <div ref={trackRef} className="hidden lg:block relative" style={{ height: `${INDUSTRIES.length * 55}vh` }}>
      <div className="sticky top-24 h-[min(660px,82vh)] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-12 gap-8 items-center">
          {/* Left: scroll-synced index nav */}
          <div className="col-span-4 space-y-1.5">
            {INDUSTRIES.map((ind, i) => {
              const IconComp = iconMap[ind.icon] || Layers;
              const isActive = i === activeIndex;
              return (
                <button
                  key={ind.id}
                  onClick={() => jumpToIndustry(i)}
                  data-cursor="hover"
                  className="relative w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 cursor-pointer overflow-hidden"
                >
                  {isActive && (
                    <motion.span
                      layoutId="industry-active-pill"
                      className="absolute inset-0 bg-brand-dark dark:bg-brand-primary rounded-xl shadow-md"
                      transition={{ type: 'spring', stiffness: 340, damping: 32 }}
                    />
                  )}
                  <span className={`relative p-1.5 rounded-lg transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-400 dark:text-slate-500'}`}>
                    <IconComp className="w-4 h-4" />
                  </span>
                  <span className={`relative text-sm font-semibold tracking-tight transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-600 dark:text-slate-400'}`}>
                    {ind.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: active detail panel */}
          <div className="col-span-8 relative">
            {/* Smooth gradient wash, crossfades per active industry */}
            <AnimatePresence>
              <motion.div
                key={`wash-${activeIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute -inset-6 rounded-[2rem] pointer-events-none"
                style={{ background: GRADIENTS[activeIndex % GRADIENTS.length] }}
              />
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -12 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-8 rounded-2xl bg-brand-light dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-lg text-left flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Header Row: icon zoom reveal + staggered title */}
                  <div className="flex items-center gap-4 border-b border-slate-200/60 dark:border-slate-800 pb-5">
                    <motion.div
                      key={`icon-${active.id}`}
                      initial={{ scale: 0.5, opacity: 0, rotate: -8 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0 }}
                      transition={{ duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
                      className="p-3.5 bg-brand-primary/10 text-brand-dark dark:text-brand-primary rounded-xl"
                    >
                      <ActiveIcon className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <motion.span
                        variants={textContainerVariants}
                        initial="hidden"
                        animate="show"
                        className="font-display text-2xl font-bold text-slate-900 dark:text-white flex flex-wrap gap-x-2"
                      >
                        {titleWords.map((w, i) => (
                          <motion.span key={i} variants={wordVariants} className="inline-block">
                            {w}
                          </motion.span>
                        ))}
                        <motion.span variants={wordVariants} className="inline-block">Core Solutions</motion.span>
                      </motion.span>
                      <span className="block text-xs font-mono text-slate-400 dark:text-slate-500 mt-0.5">Custom configurations for {active.name} firms</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 font-sans text-sm leading-relaxed">
                    {active.description}
                  </p>

                  {/* Grid of Workflows vs Challenges */}
                  <div className="grid md:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-3">
                      <span className="text-xs font-mono font-bold text-brand-dark dark:text-brand-primary uppercase tracking-wider block">
                        Mapped Workflows & Features:
                      </span>
                      <motion.div variants={listContainerVariants} initial="hidden" animate="show" className="space-y-2">
                        {active.workflows.map((wf, idx) => (
                          <motion.div key={idx} variants={listItemVariants} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                            <span className="w-4 h-4 rounded-full bg-brand-primary/20 dark:bg-brand-primary/35 text-brand-dark dark:text-brand-primary flex items-center justify-center shrink-0 font-bold mt-0.5 text-[9px]">
                              ✓
                            </span>
                            <span className="font-semibold leading-relaxed">{wf}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>

                    <div className="space-y-3">
                      <div className="p-4 bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40 rounded-xl text-xs space-y-1.5">
                        <span className="font-bold text-rose-800 dark:text-rose-400 uppercase font-mono tracking-wide block">
                          Sector Painpoints:
                        </span>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans text-[11px]">
                          {active.challenges}
                        </p>
                      </div>

                      <div className="p-4 bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 rounded-xl text-xs space-y-1.5">
                        <span className="font-bold text-brand-dark dark:text-brand-primary uppercase font-mono tracking-wide block">
                          Astrabizz Core Answer:
                        </span>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-sans font-medium text-[11px]">
                          {active.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footnote */}
                <div className="pt-6 mt-6 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500 gap-3">
                  <span>Ensuring FDA/FEFO compliance and production-floor tracking</span>
                  <button
                    onClick={() => scrollToTarget('#contact')}
                    data-cursor="hover"
                    className="font-bold text-brand-primary hover:text-brand-dark dark:hover:text-brand-primary flex items-center gap-1 group/act shrink-0 cursor-pointer"
                  >
                    Request sector blueprint <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/act:translate-x-0.5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Mobile / tablet: simple tap-to-switch layout (scroll-pinning doesn't translate well to touch viewports). */
function MobileShowcase() {
  const [activeIndustry, setActiveIndustry] = useState<string>(INDUSTRIES[0].id);
  const railRef = useStaggerReveal<HTMLDivElement>('[data-industry-tab]', { type: 'fade-left', stagger: 0.06 });

  return (
    <div className="lg:hidden grid gap-8 items-start">
      <div ref={railRef} className="flex flex-row gap-3 overflow-x-auto pb-4 scrollbar-none">
        {INDUSTRIES.map((ind) => {
          const IconComp = iconMap[ind.icon] || Layers;
          const isActive = activeIndustry === ind.id;

          return (
            <button
              key={ind.id}
              data-industry-tab
              onClick={() => setActiveIndustry(ind.id)}
              className={`card-lift text-left p-4 rounded-xl border flex items-center gap-3 shrink-0 select-none cursor-pointer ${
                isActive
                  ? 'bg-brand-dark dark:bg-brand-primary text-white border-brand-dark dark:border-brand-primary shadow-md'
                  : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800'
              }`}
            >
              <div className={`p-2 rounded-lg ${isActive ? 'bg-brand-primary dark:bg-slate-950 text-white' : 'bg-white dark:bg-slate-850 text-slate-700 dark:text-slate-300 shadow-sm border border-slate-100 dark:border-slate-800'}`}>
                <IconComp className="w-4 h-4" />
              </div>
              <span className="block font-display font-bold text-xs tracking-tight whitespace-nowrap">{ind.name}</span>
            </button>
          );
        })}
      </div>

      <div>
        <AnimatePresence mode="wait">
          {INDUSTRIES.filter((ind) => ind.id === activeIndustry).map((ind) => {
            const IconComp = iconMap[ind.icon] || Layers;
            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, scale: 0.97, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 rounded-2xl bg-brand-light dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-sm text-left"
              >
                <div className="flex items-center gap-3 border-b border-slate-200/60 dark:border-slate-800 pb-4 mb-4">
                  <div className="p-3 bg-brand-primary/10 text-brand-dark dark:text-brand-primary rounded-xl">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="font-display text-lg font-bold text-slate-900 dark:text-white">{ind.name}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 font-sans text-sm leading-relaxed mb-4">{ind.description}</p>
                <div className="space-y-2 mb-4">
                  {ind.workflows.map((wf, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <span className="w-4 h-4 rounded-full bg-brand-primary/20 dark:bg-brand-primary/35 text-brand-dark dark:text-brand-primary flex items-center justify-center shrink-0 font-bold mt-0.5 text-[9px]">✓</span>
                      <span className="font-semibold leading-relaxed">{wf}</span>
                    </div>
                  ))}
                </div>
                <div className="p-3 bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 rounded-xl text-xs">
                  <span className="font-bold text-brand-dark dark:text-brand-primary uppercase font-mono tracking-wide block mb-1">Astrabizz Core Answer:</span>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-sans font-medium text-[11px]">{ind.solution}</p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Industries() {
  const headerRef = useScrollReveal<HTMLDivElement>({ type: 'fade-up' });

  return (
    <section id="industries" className="lg:py-24 bg-white dark:bg-slate-950 relative border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 pt-24 lg:pt-0">
        {/* Section Header */}
        <div ref={headerRef} className="text-left max-w-3xl mb-12 lg:mb-16 space-y-4">
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
      </div>

      <DesktopShowcase />
      <div className="max-w-7xl mx-auto px-6 pb-24 lg:pb-0">
        <MobileShowcase />
      </div>
    </section>
  );
}

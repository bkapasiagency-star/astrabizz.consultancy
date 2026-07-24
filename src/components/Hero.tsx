import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import SplitType from 'split-type';
import { gsap } from '../lib/gsap';
import { useMagnetic } from '../hooks/useMagnetic';
import { scrollToTarget } from '../lib/scroll';
import HeroOrbit from './HeroOrbit';
import HeroParticles from './HeroParticles';

export default function Hero() {
  const headlinePlainRef = useRef<HTMLSpanElement>(null);
  const headlineGradientRef = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  const primaryBtnRef = useMagnetic<HTMLButtonElement>(0.3);
  const secondaryBtnRef = useMagnetic<HTMLButtonElement>(0.3);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !headlinePlainRef.current || !headlineGradientRef.current) {
      gsap.set([headlinePlainRef.current, headlineGradientRef.current, subRef.current, actionsRef.current, processRef.current, visualRef.current], { opacity: 1, y: 0, x: 0, scale: 1 });
      return;
    }

    // IMPORTANT: SplitType must never run on the gradient (bg-clip-text) span.
    // Splitting moves its glyphs into new child <span> elements that inherit
    // `color: transparent` but NOT the parent's `background-image` /
    // `background-clip: text` (those don't inherit), which makes the
    // gradient words invisible. So only the plain-text run is split into
    // words for the stagger; the gradient run animates in as one block.
    const splitPlain = new SplitType(headlinePlainRef.current, { types: 'words', tagName: 'span' });

    const tl = gsap.timeline({ defaults: { ease: 'power4.out' }, delay: 0.15 });

    tl.fromTo(
      splitPlain.words,
      { opacity: 0, yPercent: 120 },
      { opacity: 1, yPercent: 0, duration: 0.9, stagger: 0.045 }
    )
      .fromTo(
        headlineGradientRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.5'
      )
      .fromTo(subRef.current, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
      .fromTo(actionsRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .fromTo(processRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.3')
      .fromTo(
        visualRef.current,
        { opacity: 0, scale: 0.9, x: 24 },
        { opacity: 1, scale: 1, x: 0, duration: 1.1, ease: 'power3.out' },
        '-=0.9'
      );

    return () => {
      tl.kill();
      splitPlain.revert();
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#F7F8FA] dark:bg-slate-950 pt-32 pb-20 overflow-hidden flex items-center justify-center border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300"
    >
      {/* Immersive Interactive Constellation Canvas Particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <HeroParticles />
        {/* Subtle decorative grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 dark:opacity-40 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Textual Column */}
          <div className="min-w-0 lg:col-span-6 flex flex-col items-start text-left w-full max-w-xl">
            {/* Main Headline */}
            <h1 className="w-full font-display text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] break-words">
              <span ref={headlinePlainRef} className="inline">Transform Your Business Through</span>{' '}
              <span ref={headlineGradientRef} className="text-gradient-brand inline">Intelligent Digital Solutions</span>
            </h1>

            {/* Sub heading */}
            <p
              ref={subRef}
              className="w-full mt-6 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-sans break-words"
            >
              We help businesses streamline operations, improve productivity and accelerate growth through custom ERP, CRM, AI and Digital Transformation consulting.
            </p>

            {/* Action Buttons */}
            <div ref={actionsRef} className="mt-8 flex flex-wrap gap-4 w-full sm:w-auto">
              <button
                ref={primaryBtnRef}
                onClick={() => scrollToTarget('#contact')}
                data-cursor="hover"
                className="btn-shimmer w-full sm:w-auto bg-brand-primary hover:bg-brand-dark text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-brand-primary/20 transition-colors duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                ref={secondaryBtnRef}
                onClick={() => scrollToTarget('#services')}
                data-cursor="hover"
                className="w-full sm:w-auto bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-semibold text-sm px-7 py-3.5 rounded-full shadow-sm transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                Explore Services
              </button>
            </div>

            {/* Process Tagline Strip */}
            <div ref={processRef} className="mt-6 flex items-center gap-2 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 select-none">
              <span className="text-brand-dark dark:text-brand-primary">Consult</span>
              <ArrowRight className="w-3 h-3 text-slate-300 dark:text-slate-600" />
              <span className="text-brand-dark dark:text-brand-primary">Implement</span>
              <ArrowRight className="w-3 h-3 text-slate-300 dark:text-slate-600" />
              <span className="text-brand-gold">Transform</span>
            </div>
          </div>

          {/* Right Column: Signature orbiting-systems visual */}
          <div ref={visualRef} className="min-w-0 lg:col-span-6 w-full flex justify-center">
            <HeroOrbit />
          </div>
        </div>
      </div>
    </section>
  );
}

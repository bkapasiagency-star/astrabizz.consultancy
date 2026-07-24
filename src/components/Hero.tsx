import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import SplitType from 'split-type';
import { gsap } from '../lib/gsap';
import { useMagnetic } from '../hooks/useMagnetic';
import { scrollToTarget } from '../lib/scroll';
import HeroOrbit from './HeroOrbit';
import HeroParticles from './HeroParticles';

export default function Hero() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const kickerRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const bulletsRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  const primaryBtnRef = useMagnetic<HTMLButtonElement>(0.3);
  const secondaryBtnRef = useMagnetic<HTMLButtonElement>(0.3);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !headlineRef.current) {
      gsap.set([badgeRef.current, kickerRef.current, headlineRef.current, subRef.current, actionsRef.current, bulletsRef.current, visualRef.current], { opacity: 1, y: 0, x: 0, scale: 1 });
      return;
    }

    const splitHeadline = new SplitType(headlineRef.current, { types: 'lines,words', lineClass: 'split-line' });

    const tl = gsap.timeline({ defaults: { ease: 'power4.out' }, delay: 0.15 });

    tl.fromTo(badgeRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6 })
      .fromTo(kickerRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.35')
      .fromTo(
        splitHeadline.words,
        { opacity: 0, yPercent: 120 },
        { opacity: 1, yPercent: 0, duration: 0.9, stagger: 0.045 },
        '-=0.25'
      )
      .fromTo(subRef.current, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
      .fromTo(actionsRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .fromTo(bulletsRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 }, '-=0.3')
      .fromTo(
        visualRef.current,
        { opacity: 0, scale: 0.9, x: 24 },
        { opacity: 1, scale: 1, x: 0, duration: 1.1, ease: 'power3.out' },
        '-=0.9'
      );

    return () => {
      tl.kill();
      splitHeadline.revert();
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#F7F8FA] dark:bg-slate-950 pt-28 pb-20 overflow-hidden flex items-center justify-center border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300"
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
            {/* Top Badge Accent */}
            <div
              ref={badgeRef}
              className="max-w-full flex items-center gap-2 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-brand-dark dark:text-brand-primary font-semibold text-xs mb-6 uppercase tracking-wider font-mono select-none"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-primary animate-pulse shrink-0" />
              <span className="truncate">Digital Transformation Practice</span>
            </div>

            {/* Positioning Tagline */}
            <span
              ref={kickerRef}
              className="block font-display text-sm sm:text-base font-bold text-brand-dark dark:text-brand-primary tracking-wide mb-3 uppercase"
            >
              Transforming Business Through Technology
            </span>

            {/* Main Headline */}
            <h1
              ref={headlineRef}
              className="w-full font-display text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] break-words"
            >
              Transform Your Business Through{' '}
              <span className="text-gradient-brand">Intelligent Digital Solutions</span>
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
            <div className="mt-6 flex items-center gap-2 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 select-none">
              <span className="text-brand-dark dark:text-brand-primary">Consult</span>
              <ArrowRight className="w-3 h-3 text-slate-300 dark:text-slate-600" />
              <span className="text-brand-dark dark:text-brand-primary">Implement</span>
              <ArrowRight className="w-3 h-3 text-slate-300 dark:text-slate-600" />
              <span className="text-brand-gold">Transform</span>
            </div>

            {/* Bullet Highlights */}
            <div
              ref={bulletsRef}
              className="mt-10 pt-8 border-t border-slate-200/60 dark:border-slate-800/60 w-full flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-slate-500 dark:text-slate-400"
            >
              <span className="flex items-center gap-1.5 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                Textile & Apparel Specialist
              </span>
              <span className="flex items-center gap-1.5 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                Pharma Compliance Built-in
              </span>
              <span className="flex items-center gap-1.5 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-dark shrink-0" />
                Packaging Deckle Optimization
              </span>
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

import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap';

interface FloatingShapesProps {
  variant?: 'primary' | 'gold' | 'mixed';
  className?: string;
}

/**
 * Ambient background motion: soft blurred orbs that drift and
 * parallax gently as the section scrolls past.
 */
export default function FloatingShapes({ variant = 'mixed', className = '' }: FloatingShapesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const shapes = container.querySelectorAll<HTMLElement>('[data-shape]');
    const ctx = gsap.context(() => {
      shapes.forEach((shape, i) => {
        const depth = Number(shape.dataset.depth) || 1;
        gsap.to(shape, {
          yPercent: depth * (i % 2 === 0 ? -22 : 18),
          xPercent: depth * (i % 2 === 0 ? 10 : -8),
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const colorA = variant === 'gold' ? 'bg-brand-gold/10' : 'bg-brand-primary/8';
  const colorB = variant === 'primary' ? 'bg-brand-primary/8' : 'bg-brand-gold/10';

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <div data-shape data-depth="1.4" className={`absolute -top-24 -right-16 w-80 h-80 rounded-full ${colorA} blur-3xl animate-float`} />
      <div data-shape data-depth="1" className={`absolute bottom-0 -left-20 w-72 h-72 rounded-full ${colorB} blur-3xl animate-float-delayed`} />
      <div data-shape data-depth="0.6" className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-slate-400/5 blur-2xl" />
    </div>
  );
}

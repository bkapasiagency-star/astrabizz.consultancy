import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap';

type RevealType = 'fade-up' | 'fade-left' | 'fade-right' | 'scale-in';

interface RevealOptions {
  type?: RevealType;
  delay?: number;
  duration?: number;
  start?: string;
}

const FROM_VARS: Record<RevealType, gsap.TweenVars> = {
  'fade-up': { y: 48, opacity: 0 },
  'fade-left': { x: -56, opacity: 0 },
  'fade-right': { x: 56, opacity: 0 },
  'scale-in': { scale: 0.88, opacity: 0 },
};

/** Scroll-triggered reveal for a single element. */
export function useScrollReveal<T extends HTMLElement>({
  type = 'fade-up',
  delay = 0,
  duration = 0.9,
  start = 'top 85%',
}: RevealOptions = {}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        FROM_VARS[type],
        {
          y: 0,
          x: 0,
          scale: 1,
          opacity: 1,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [type, delay, duration, start]);

  return ref;
}

/** Batches a stagger reveal across every direct-child matching a selector. */
export function useStaggerReveal<T extends HTMLElement>(
  selector: string,
  { type = 'fade-up', stagger = 0.08, start = 'top 85%' }: RevealOptions & { stagger?: number } = {}
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const items = container.querySelectorAll(selector);
      if (!items.length) return;

      gsap.fromTo(
        items,
        FROM_VARS[type],
        {
          y: 0,
          x: 0,
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start,
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, [selector, type, stagger, start]);

  return ref;
}

export { ScrollTrigger };

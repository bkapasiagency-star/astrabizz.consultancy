import type Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export function setLenisInstance(instance: Lenis | null) {
  lenisInstance = instance;
}

/**
 * Scrolls to an element or #id, preferring the smooth Lenis instance
 * when it's available and falling back to native smooth scroll
 * (e.g. when prefers-reduced-motion disabled Lenis entirely).
 */
export function scrollToTarget(target: string | HTMLElement, offset = -80) {
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (!el) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(el as HTMLElement, { offset, duration: 1.2 });
    return;
  }

  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = (el as HTMLElement).getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition + offset;
  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
}

export function scrollToY(y: number, duration = 1.2) {
  if (lenisInstance) {
    lenisInstance.scrollTo(y, { duration });
    return;
  }
  window.scrollTo({ top: y, behavior: 'smooth' });
}

export function scrollToTop() {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { duration: 1.2 });
    return;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

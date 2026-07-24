import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  // Slightly gentler default easing across the site
  gsap.defaults({ ease: 'power3.out' });
}

export { gsap, ScrollTrigger };

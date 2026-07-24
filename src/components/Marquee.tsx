import React, { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number; // px per second
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  className?: string;
}

export default function Marquee({
  children,
  speed = 40,
  direction = 'left',
  pauseOnHover = true,
  className = '',
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Duplicate content once so the loop can wrap seamlessly.
    const singleSetWidth = track.scrollWidth / 2;
    const duration = singleSetWidth / speed;

    gsap.set(track, { x: 0 });
    tweenRef.current = gsap.to(track, {
      x: direction === 'left' ? -singleSetWidth : singleSetWidth,
      duration,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: (x) => {
          const num = parseFloat(x);
          const wrapped = ((num % singleSetWidth) + singleSetWidth) % singleSetWidth;
          return `${direction === 'left' ? -wrapped : wrapped}px`;
        },
      },
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, [speed, direction, children]);

  return (
    <div
      className={`marquee-row ${className}`}
      onMouseEnter={() => pauseOnHover && tweenRef.current?.pause()}
      onMouseLeave={() => pauseOnHover && tweenRef.current?.resume()}
    >
      <div ref={trackRef} className="marquee-track">
        <div className="flex items-center shrink-0">{children}</div>
        <div className="flex items-center shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

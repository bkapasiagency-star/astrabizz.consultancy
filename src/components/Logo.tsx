import React from 'react';
import { ASTRABIZZ_LOGO } from '../assets/logo';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  dark?: boolean;
  tagline?: boolean;
  taglineClassName?: string;
}

export default function Logo({ className = '', tagline = false, taglineClassName = '' }: LogoProps) {
  return (
    <div className={`flex flex-col select-none ${className}`} id="astrabizz-logo">
      {/* Official Astrabizz Consultancy logo mark (wordmark included in the artwork itself) */}
      <img
        src={ASTRABIZZ_LOGO}
        alt="Astrabizz Consultancy"
        className="h-16 sm:h-20 w-auto object-contain transition-transform duration-500 hover:scale-105 shrink-0"
      />
      {tagline && (
        <span
          className={`-mt-1.5 sm:-mt-2 text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-brand-primary whitespace-nowrap ${taglineClassName}`}
        >
          Consult. Implement. Transform.
        </span>
      )}
    </div>
  );
}

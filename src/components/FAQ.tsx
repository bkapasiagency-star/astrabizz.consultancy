import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('f1');
  const headerRef = useScrollReveal<HTMLDivElement>({ type: 'fade-up' });
  const listRef = useStaggerReveal<HTMLDivElement>('[data-faq-item]', { type: 'fade-up', stagger: 0.06 });

  const toggleFaq = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section id="faq" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-[0.18em]">
            Information Hub
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="h-1.5 w-16 bg-brand-primary rounded-full mx-auto" />
          <p className="text-slate-600 dark:text-slate-300 font-sans text-sm max-w-xl mx-auto leading-relaxed">
            Resolve common queries regarding process customizability, rollout timelines, SME support models, and systems consulting.
          </p>
        </div>

        {/* FAQs Accordion Column */}
        <div ref={listRef} className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                data-faq-item
                className={`border rounded-2xl transition-all duration-300 overflow-hidden text-left cursor-pointer ${
                  isOpen
                    ? 'bg-brand-light dark:bg-slate-900/40 border-brand-primary dark:border-brand-primary shadow-sm'
                    : 'bg-white dark:bg-slate-900 border-slate-200/60 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 flex items-center justify-between font-sans text-slate-800 dark:text-slate-200 select-none cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-4 h-4 shrink-0 ${isOpen ? 'text-brand-primary' : 'text-slate-400 dark:text-slate-500'}`} />
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-200 tracking-tight leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <span className="shrink-0 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-brand-primary" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {/* Smooth Animated slide body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-12 pb-5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans border-t border-slate-100/60 dark:border-slate-800 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

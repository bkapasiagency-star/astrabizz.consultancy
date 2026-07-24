import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Layers, Factory, Gem, HardHat, Pill, ChevronLeft, ChevronRight } from 'lucide-react';
import { CASE_STUDIES } from '../data';
import { useScrollReveal } from '../hooks/useScrollReveal';
import FloatingShapes from './FloatingShapes';

const iconMap: Record<string, React.ComponentType<any>> = {
  Layers,
  Factory,
  Gem,
  HardHat,
  Pill
};

export default function Testimonials() {
  const headerRef = useScrollReveal<HTMLDivElement>({ type: 'scale-in' });

  return (
    <section id="testimonials" className="py-24 bg-[#F7F8FA] dark:bg-slate-950 relative overflow-hidden border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <FloatingShapes variant="primary" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-[0.18em]">
            Client Impact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Real Results Across Real Industries
          </h2>
          <div className="h-1.5 w-16 bg-brand-primary rounded-full mx-auto" />
          <p className="text-slate-600 dark:text-slate-300 font-sans text-sm max-w-xl mx-auto leading-relaxed">
            A snapshot of the operational improvements we've delivered for manufacturers, regulated industries, and project-based businesses.
          </p>
        </div>

        {/* Case Study Carousel */}
        <div className="relative max-w-6xl mx-auto testimonial-swiper-wrap">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            loop
            autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true, el: '.testimonial-pagination' }}
            navigation={{ prevEl: '.testimonial-prev', nextEl: '.testimonial-next' }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-14 !px-1"
          >
            {CASE_STUDIES.map((cs) => {
              const IconComp = iconMap[cs.icon] || Layers;
              return (
                <SwiperSlide key={cs.id} className="!h-auto">
                  <div className="card-lift min-h-[260px] h-full p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-sm flex flex-col text-left hover:border-brand-primary/30">
                    <div className="p-3 bg-brand-primary/10 text-brand-dark dark:text-brand-primary rounded-xl w-fit mb-5">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-brand-gold uppercase tracking-wider block mb-1.5">
                      {cs.sector}
                    </span>
                    <span className="font-display text-base font-bold text-slate-900 dark:text-white mb-2.5 block leading-snug line-clamp-2">
                      {cs.title}
                    </span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans flex-1 line-clamp-4">
                      {cs.result}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-2">
            <button
              aria-label="Previous case study"
              data-cursor="hover"
              className="testimonial-prev w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-brand-primary hover:border-brand-primary/40 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="testimonial-pagination flex items-center gap-1.5" />
            <button
              aria-label="Next case study"
              data-cursor="hover"
              className="testimonial-next w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-brand-primary hover:border-brand-primary/40 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

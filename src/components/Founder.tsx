import React from 'react';
import { Mail, Phone, Award, GraduationCap, CheckCircle2, Linkedin, Briefcase, Compass, Target, ShieldCheck, Lightbulb, Handshake, Eye, Quote, Wrench } from 'lucide-react';
import { FOUNDER_PHOTO } from '../assets/founder';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: 'Integrity First',
    description: 'We recommend the system that fits your business, not the one with the best margin for us. Advice stays honest even when it costs a sale.',
  },
  {
    icon: Target,
    title: 'Client-First Engineering',
    description: 'Every configuration decision is judged by one question: does this make the person using it on the shop floor faster and safer?',
  },
  {
    icon: Wrench,
    title: 'Operational Empathy',
    description: 'We spend time on the production floor before we touch a system, so what we build reflects how the work actually happens.',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Learning',
    description: 'Platforms, compliance rules, and AI capability move fast. We stay current so your systems never fall behind the tools available to them.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnership',
    description: "We measure success after go-live, not at it. Support, training, and system health checks continue long after the contract is signed.",
  },
  {
    icon: Eye,
    title: 'Radical Transparency',
    description: 'Clear timelines, clear scope, clear pricing. No hidden change orders and no surprises buried in a statement of work.',
  },
];

export default function Founder() {
  const headerRef = useScrollReveal<HTMLDivElement>({ type: 'fade-up' });
  const portraitRef = useScrollReveal<HTMLDivElement>({ type: 'fade-left' });
  const bioRef = useScrollReveal<HTMLDivElement>({ type: 'fade-right', delay: 0.1 });
  const focusListRef = useStaggerReveal<HTMLDivElement>('[data-focus-item]', { type: 'fade-up', stagger: 0.05, start: 'top 90%' });
  const quoteRef = useScrollReveal<HTMLDivElement>({ type: 'scale-in' });
  const vmRef = useStaggerReveal<HTMLDivElement>('[data-vm-card]', { type: 'fade-up', stagger: 0.1 });
  const valuesRef = useStaggerReveal<HTMLDivElement>('[data-value-card]', { type: 'fade-up', stagger: 0.06 });
  const ethicRef = useScrollReveal<HTMLDivElement>({ type: 'fade-up' });

  return (
    <section id="founders-desk" className="py-24 bg-white relative overflow-hidden border-b border-slate-200/50 text-slate-800">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-brand-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-[0.18em]">
            Founder's Desk
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Meet Our Founder & Chief Consultant
          </h2>
          <div className="h-1.5 w-16 bg-brand-primary rounded-full mx-auto" />
          <p className="text-slate-600 font-sans text-sm max-w-xl mx-auto leading-relaxed">
            Leading Astrabizz from the front with a hands-on consulting paradigm, deep industrial operational knowledge, and robust technical architectures.
          </p>
        </div>

        {/* Founder Premium Card Bento Layout */}
        <div className="max-w-4xl mx-auto bg-brand-light rounded-2xl border border-slate-200/60 overflow-hidden shadow-md flex flex-col md:flex-row">
          
          {/* Left Column: Portrait and brief contact badges */}
          <div ref={portraitRef} className="md:w-[350px] bg-slate-900 text-slate-100 p-8 flex flex-col justify-between items-center text-center shrink-0">
            <div className="space-y-4">
              {/* Profile Image with high-end border frame */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-tr from-brand-primary to-brand-gold rounded-full blur-sm opacity-60" />
                <img
                  src={FOUNDER_PHOTO}
                  alt="Denish Dalal"
                  referrerPolicy="no-referrer"
                  className="relative w-36 h-36 rounded-full object-cover border-4 border-slate-900 mx-auto"
                />
              </div>

              {/* Title & Role */}
              <div className="pt-2 text-center">
                <span className="block font-display text-xl font-bold text-white tracking-tight">
                  Denish Dalal
                </span>
                <span className="text-xs font-mono text-brand-primary font-bold uppercase tracking-widest mt-1 block">
                  Founder & Principal Consultant
                </span>
              </div>
            </div>

            {/* Quick Badges & Details */}
            <div className="w-full space-y-3 mt-8 pt-6 border-t border-slate-800 text-left">
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <div className="p-1.5 bg-slate-800 rounded-lg text-brand-primary">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold block text-[11px] text-slate-400">Experience</span>
                  <span className="font-bold text-white">12+ Years Enterprise Practice</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-300">
                <div className="p-1.5 bg-slate-800 rounded-lg text-brand-gold">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold block text-[11px] text-slate-400">Education</span>
                  <span className="font-bold text-white">B.Tech Computer Engineering</span>
                </div>
              </div>
            </div>

            {/* LinkedIn Mock Icon button */}
            <div className="mt-8 pt-4 w-full border-t border-slate-800 text-slate-400 text-[11px] font-mono flex items-center justify-between">
              <span>Verified Principal</span>
              <a href="#" className="text-brand-primary hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Bio details & highlights */}
          <div ref={bioRef} className="flex-1 p-8 text-left space-y-6 flex flex-col justify-between bg-white">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-brand-dark uppercase tracking-wider block">
                Professional Profile
              </span>
              <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
                With over 12 years of experience in ERP, CRM, and Digital Transformation, Denish Dalal has guided manufacturers and regulated businesses across Textile, Engineering, Pharma, Construction, and Packaging in optimizing operations through the right technology, applied the right way.
              </p>
              <p className="text-slate-500 font-sans text-xs leading-relaxed">
                Denish spent his early career engineering enterprise platforms and mapping software architectures. Seeing local manufacturers struggling with system gaps, he established Astrabizz to bridge the gap between technical complexity and real, profitable industrial throughput.
              </p>
            </div>

            {/* Key Expertise highlights checklist */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-brand-dark uppercase tracking-wider block">
                Practice Focus Areas
              </span>
              <div ref={focusListRef} className="grid sm:grid-cols-2 gap-2.5">
                {[
                  'ERP Systems Architecture',
                  'CRM Implementation Specialist',
                  'Digital Transformation Consulting',
                  'Business Intelligence & Analytics',
                  'Regulatory & Compliance Systems',
                  'AI-Driven Process Automation'
                ].map((spec, i) => (
                  <div key={i} data-focus-item className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                    <span className="font-semibold leading-none">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick direct contact card buttons */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-4 text-xs font-mono">
              <a
                href="mailto:info@astrabizz.com"
                className="flex items-center gap-2 py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 hover:border-brand-primary transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-brand-primary" />
                info@astrabizz.com
              </a>
              <a
                href="tel:+919687412080"
                className="flex items-center gap-2 py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 hover:border-brand-primary transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-primary" />
                +91 96874 12080
              </a>
            </div>
          </div>

        </div>

        {/* Professional Quotation */}
        <div ref={quoteRef} className="max-w-3xl mx-auto mt-16 text-center relative">
          <Quote className="w-8 h-8 text-brand-primary/25 mx-auto mb-4" />
          <p className="font-display text-xl sm:text-2xl font-semibold text-slate-800 leading-snug">
            "Technology should disappear into the way a business already wins — not force the business to
            change what already works. Our job is to build the bridge between the shop floor and the
            system, not make the shop floor adapt to the software."
          </p>
          <span className="block mt-5 text-xs font-mono font-bold text-brand-dark uppercase tracking-widest">
            — Denish Dalal, Founder & Principal Consultant
          </span>
        </div>

        {/* Vision & Mission */}
        <div ref={vmRef} className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-6">
          <div data-vm-card className="card-lift p-7 rounded-2xl bg-brand-light border border-slate-200/60 text-left">
            <div className="p-3 bg-white rounded-xl text-brand-primary shadow-sm w-fit mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <span className="font-display text-lg font-bold text-slate-900 block mb-2">Our Vision</span>
            <p className="text-sm text-slate-600 leading-relaxed font-sans">
              To become the most trusted digital transformation partner for India's manufacturing and
              regulated industries — the first call a business makes when it decides its systems should
              work as hard as its people do.
            </p>
          </div>

          <div data-vm-card className="card-lift p-7 rounded-2xl bg-brand-light border border-slate-200/60 text-left">
            <div className="p-3 bg-white rounded-xl text-brand-gold shadow-sm w-fit mb-4">
              <Target className="w-5 h-5" />
            </div>
            <span className="font-display text-lg font-bold text-slate-900 block mb-2">Our Mission</span>
            <p className="text-sm text-slate-600 leading-relaxed font-sans">
              To close the gap between shop-floor reality and enterprise software — delivering ERP, CRM,
              AI and BI systems that are implemented once, adopted fully, and supported for the long run.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-[0.18em]">
              What Guides Us
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Core Values
            </h3>
          </div>

          <div ref={valuesRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CORE_VALUES.map((val) => {
              const IconComp = val.icon;
              return (
                <div
                  key={val.title}
                  data-value-card
                  className="group relative p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm text-left overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:border-brand-primary/40"
                >
                  {/* Smooth gradient wash on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/[0.04] via-transparent to-brand-gold/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative p-2.5 bg-emerald-50 text-brand-primary rounded-xl w-fit mb-4 transition-transform duration-500 ease-out group-hover:scale-110">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="relative font-display font-bold text-sm text-slate-800 block mb-1.5">{val.title}</span>
                  <p className="relative text-xs text-slate-500 leading-relaxed font-sans">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Work Ethic */}
        <div ref={ethicRef} className="max-w-5xl mx-auto mt-16 p-8 rounded-2xl bg-slate-900 text-slate-100 relative overflow-hidden">
          <div className="noise-overlay" />
          <div className="relative flex flex-col sm:flex-row items-start gap-5">
            <div className="p-3 bg-brand-primary/15 text-brand-primary rounded-xl shrink-0">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider block mb-2">
                Work Ethic
              </span>
              <p className="text-sm text-slate-300 leading-relaxed font-sans max-w-3xl">
                Denish still walks the shop floor before he opens a laptop. Every engagement starts with
                direct observation, not a template questionnaire — because the difference between a system
                that gets adopted and one that gets abandoned usually shows up in details a form can't
                capture. He stays personally involved from the first scoping call through go-live and the
                months of support that follow, and he holds the same standard for every consultant on the
                Astrabizz team: show up, understand the work, then build.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

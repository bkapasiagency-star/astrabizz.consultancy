import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase,
  Users,
  Workflow,
  BarChart3,
  Sparkles,
  MessageCircle,
  ScanLine,
  Landmark,
  ShieldCheck,
  GraduationCap,
  Rocket,
  X,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  Clock,
  ChevronRight
} from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Map icon string names to Lucide icons
const iconMap: Record<string, React.ComponentType<any>> = {
  Briefcase,
  Users,
  Workflow,
  BarChart3,
  Sparkles,
  MessageCircle,
  ScanLine,
  Landmark,
  ShieldCheck,
  GraduationCap,
  Rocket,
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const headerRef = useScrollReveal<HTMLDivElement>({ type: 'fade-up' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 4000);
  };

  return (
    <section id="services" className="py-24 bg-[#F7F8FA] dark:bg-slate-950 relative border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-[0.18em]">
            Practice Areas
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Enterprise Consulting Solutions & Services
          </h2>
          <div className="h-1.5 w-16 bg-brand-primary rounded-full mx-auto" />
          <p className="text-slate-600 dark:text-slate-300 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We deliver highly focused technology advisory, deployment frameworks, and system optimization audits engineered to solve complex operational bottlenecks.
          </p>
        </div>

        {/* Services Grid (8 Cards) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv, idx) => {
            const IconComponent = iconMap[srv.icon] || Briefcase;
            const isSpecial = srv.isNew || srv.isPremium;

            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedService(srv)}
                data-cursor="hover"
                className={`card-lift group relative p-6 rounded-2xl bg-white dark:bg-slate-900 border cursor-pointer flex flex-col justify-between shadow-sm overflow-hidden hover:shadow-xl hover:border-brand-primary/40 dark:hover:border-brand-primary/50 ${
                  srv.isPremium
                    ? 'border-brand-gold bg-gradient-to-br from-white to-amber-50/20 dark:from-slate-900 dark:to-amber-950/10'
                    : 'border-slate-200/60 dark:border-slate-800'
                }`}
              >
                {/* Animated top accent bar */}
                <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary to-brand-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />

                {/* Soft glow bloom on hover */}
                <span className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full bg-brand-primary/10 blur-2xl opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />

                <div>
                  {/* Top Header Row of card */}
                  <div className="flex justify-between items-start mb-5">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5, x: -18 }}
                      whileInView={{ opacity: 1, scale: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.55, delay: idx * 0.05 + 0.12, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="animate-float">
                        <div
                          className={`p-3 rounded-xl transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:rotate-6 group-hover:scale-110 ${
                            srv.isPremium
                              ? 'bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400'
                              : srv.isNew
                              ? 'bg-emerald-50 dark:bg-emerald-950/30 text-brand-primary'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-brand-primary group-hover:text-white dark:group-hover:text-white'
                          }`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>
                    </motion.div>

                    {isSpecial && (
                      <span
                        className={`text-[9px] font-mono font-bold uppercase tracking-wider py-0.5 px-2 rounded-full ${
                          srv.isPremium
                            ? 'bg-amber-100 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400'
                            : 'bg-brand-primary/15 text-brand-dark dark:text-brand-primary'
                        }`}
                      >
                        {srv.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <span className="block font-display text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-dark dark:group-hover:text-brand-primary transition-colors">
                    {srv.title}
                  </span>
                  
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2.5 leading-relaxed font-sans line-clamp-3">
                    {srv.description}
                  </p>
                </div>

                {/* Card Bottom / Footer Actions */}
                <div className="relative pt-5 mt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold">
                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 font-bold uppercase">
                    {srv.includes.length} modules
                  </span>
                  <span className="text-brand-primary flex items-center gap-1 group-hover:text-brand-dark dark:group-hover:text-brand-primary transition-colors">
                    View Details <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Floating Box about System Health Audits */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 bg-brand-gold/15 text-brand-gold rounded-xl shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-base font-bold font-display text-white">Is your system slow or causing data duplicates?</span>
              <p className="text-xs text-slate-400 mt-1 max-w-xl">We run comprehensive audits to pinpoint structural loopholes, API latencies, and inventory duplications. Book a <strong>System Health Audit</strong> today.</p>
            </div>
          </div>
          <button
            onClick={() => setSelectedService(SERVICES.find(s => s.id === 'system-audit') || SERVICES[7])}
            className="bg-brand-gold hover:bg-yellow-500 text-slate-950 font-bold text-xs py-2.5 px-5 rounded-full shrink-0 transition-colors"
          >
            Request System Audit
          </button>
        </div>
      </div>

      {/* Immersive Glassmorphic Modal Detail View */}
      <AnimatePresence>
        {selectedService && (
          <>
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-slate-950/70 z-50 backdrop-blur-md"
            />

            {/* Modal Body Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 top-[10%] bottom-[10%] md:w-[720px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl z-50 overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col"
            >
              {/* Modal Top Header Bar */}
              <div className="p-6 bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center shrink-0 text-left">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-brand-primary/10 text-brand-primary">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-base font-bold font-display text-slate-900 dark:text-white">{selectedService.title}</span>
                    <span className="block text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold mt-0.5">
                      {selectedService.isPremium ? 'Premium Service Profile' : 'Core Consulting Practice'}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Modal Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 text-left">
                {/* Full Description text */}
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-brand-dark dark:text-brand-primary uppercase tracking-wide">Overview</span>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                    {selectedService.fullDescription}
                  </p>
                </div>

                {/* Modules Included list */}
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold text-brand-dark dark:text-brand-primary uppercase tracking-wide block">
                    {selectedService.id === 'system-audit' ? 'Variables Identified during Audit' : 'Functional Scope Modules'}
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedService.includes.map((incl, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-750 rounded-xl"
                      >
                        <span className="w-2 h-2 rounded-full bg-brand-primary" />
                        <span className="text-xs text-slate-700 dark:text-slate-200 font-semibold">{incl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Audit Specific Result deliverables */}
                {selectedService.id === 'system-audit' && (
                  <div className="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-slate-800 dark:text-slate-200 space-y-2">
                    <span className="text-xs font-bold text-amber-800 dark:text-amber-400 flex items-center gap-1.5 font-display">
                      <ShieldCheck className="w-4 h-4" /> Client Deliverables Post Audit:
                    </span>
                    <ul className="text-xs space-y-1 text-slate-600 dark:text-slate-300 list-disc list-inside font-medium">
                      <li>Detailed system-wide bottlenecks Assessment Report</li>
                      <li>Data duplicates & Security Risks analysis index</li>
                      <li>Phased Systems Improvement Roadmap (30-60-90 days)</li>
                      <li>Technology recommendations mapping target architectures</li>
                    </ul>
                  </div>
                )}

                {/* Modular Enquiry form specific to this service */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wide block mb-3">
                    Inquire About This Service
                  </span>

                  {formSubmitted ? (
                    <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 text-emerald-800 dark:text-emerald-400 text-center text-xs font-medium">
                      ✔ Thank you for your inquiry. Founder Denish Dalal will contact you with details shortly.
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs w-full focus:outline-none focus:border-brand-primary bg-slate-50 dark:bg-slate-800 dark:text-white"
                        />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your Corporate Email"
                          className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs w-full focus:outline-none focus:border-brand-primary bg-slate-50 dark:bg-slate-800 dark:text-white"
                        />
                      </div>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company Name"
                        className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs w-full focus:outline-none focus:border-brand-primary bg-slate-50 dark:bg-slate-800 dark:text-white"
                      />
                      <textarea
                        name="message"
                        required
                        rows={2}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={`Tell us about your specific ${selectedService.title} challenges...`}
                        className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs w-full focus:outline-none focus:border-brand-primary bg-slate-50 dark:bg-slate-800 dark:text-white"
                      />
                      <button
                        type="submit"
                        className="w-full bg-brand-primary hover:bg-brand-dark text-white text-xs font-bold py-2.5 rounded-lg transition-colors shadow-sm cursor-pointer"
                      >
                        Submit Consultation Request
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Modal Static Footer */}
              <div className="p-4 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 text-center text-[10px] text-slate-400 dark:text-slate-500 shrink-0">
                Astrabizz Consultancy • Guaranteed system adopted rates or ongoing L1 support
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

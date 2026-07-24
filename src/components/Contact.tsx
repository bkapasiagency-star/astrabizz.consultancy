import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Globe, MapPin, Send, CheckCircle2, Sparkles, Building, Briefcase } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useMagnetic } from '../hooks/useMagnetic';

export default function Contact() {
  const headerRef = useScrollReveal<HTMLDivElement>({ type: 'fade-up' });
  const cardRef = useScrollReveal<HTMLDivElement>({ type: 'fade-left' });
  const formPanelRef = useScrollReveal<HTMLDivElement>({ type: 'fade-right', delay: 0.1 });
  const submitBtnRef = useMagnetic<HTMLButtonElement>(0.2);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: 'Textile & Apparel',
    service: 'ERP Consulting',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1800);
  };

  const handleReset = () => {
    setStatus('idle');
    setFormState({
      name: '',
      email: '',
      phone: '',
      company: '',
      industry: 'Textile & Apparel',
      service: 'ERP Consulting',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#F7F8FA] dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      {/* Decorative floating particles */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-brand-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-[0.18em]">
            Engagement Desk
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let's Transform Your Business
          </h2>
          <div className="h-1.5 w-16 bg-brand-primary rounded-full mx-auto" />
          <p className="text-slate-600 dark:text-slate-300 font-sans text-sm max-w-xl mx-auto leading-relaxed">
            Ready to integrate, automate, and optimize? Get in touch for a completely free enterprise consultation tailored to your sector's distinct workflows.
          </p>
        </div>

        {/* Contact Container Grid */}
        <div className="grid lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Premium Business Card Details */}
          <div ref={cardRef} className="lg:col-span-5 space-y-8 text-left">
            
            {/* Visual Business Card Graphic (Corporate Slate Style) */}
            <div className="p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl relative overflow-hidden select-none">
              {/* Top background vector lines */}
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-brand-primary/10 rounded-full border border-brand-primary/20 pointer-events-none" />
              <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-brand-gold/10 rounded-full border border-brand-gold/20 pointer-events-none" />

              {/* Logo / Brand Name row */}
              <div className="flex justify-between items-start mb-12 relative z-10">
                <div>
                  <span className="font-display text-lg font-bold tracking-tight text-white block">
                    Astrabizz
                  </span>
                  <span className="text-[9px] uppercase font-mono tracking-[0.2em] text-brand-primary font-bold">
                    Consultancy
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-brand-primary/20 border border-brand-primary/40 flex items-center justify-center text-brand-primary font-mono font-bold text-xs">
                  ▲
                </div>
              </div>

              {/* Principal Bio block */}
              <div className="space-y-1 mb-8 relative z-10">
                <span className="block text-base font-bold text-white tracking-tight">
                  Denish Dalal
                </span>
                <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                  Founder & Chief Consultant
                </span>
              </div>

              {/* Contact list details */}
              <div className="space-y-3 relative z-10 text-xs border-t border-slate-800 pt-6">
                <a
                  href="tel:+919687412080"
                  className="flex items-center gap-3 text-slate-300 hover:text-brand-primary transition-colors py-1"
                >
                  <Phone className="w-4 h-4 text-brand-primary" />
                  <span className="font-mono font-semibold text-white">+91 96874 12080</span>
                </a>

                <a
                  href="mailto:info@astrabizz.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-brand-primary transition-colors py-1"
                >
                  <Mail className="w-4 h-4 text-brand-primary" />
                  <span className="font-mono font-semibold text-white">info@astrabizz.com</span>
                </a>

                <a
                  href="https://www.astrabizz.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-brand-primary transition-colors py-1"
                >
                  <Globe className="w-4 h-4 text-brand-primary" />
                  <span className="font-mono font-semibold text-white">www.astrabizz.com</span>
                </a>

                <div className="flex items-start gap-3 text-slate-300 py-1">
                  <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <span className="font-semibold text-white">Gujarat, India • Global Remote Practice</span>
                </div>
              </div>
            </div>

            {/* SLA Trust indicator summary box */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-sm space-y-4">
              <span className="text-xs font-mono font-bold text-brand-dark dark:text-brand-primary uppercase tracking-wider block">
                Direct Consulting SLA
              </span>
              <ul className="text-xs space-y-2.5 text-slate-600 dark:text-slate-300 font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-brand-primary mt-0.5">✔</span>
                  <span>We reply to all inquiries within 12 business hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-primary mt-0.5">✔</span>
                  <span>Free Initial system scoping & workflow audit proposal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-primary mt-0.5">✔</span>
                  <span>Direct involvement of Principal Denish Dalal.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Modern Interactive Form */}
          <div ref={formPanelRef} className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-sm text-left relative min-h-[460px] flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 space-y-6 flex flex-col items-center justify-center h-full"
                    key="success"
                  >
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 text-brand-primary rounded-full border border-emerald-100 dark:border-emerald-900/40 shadow-sm">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    
                    <div className="space-y-2">
                      <span className="font-display text-2xl font-bold text-slate-900 dark:text-white block">
                        Consultation Booked Successfully!
                      </span>
                      <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                        Thank you for reaching out, <strong>{formState.name}</strong>. A customized operational proposal for <strong>{formState.company}</strong> is being prepared. Founder Denish Dalal will contact you at <strong>{formState.email}</strong> shortly.
                      </p>
                    </div>

                    <button
                      onClick={handleReset}
                      className="text-xs font-mono font-bold text-brand-primary hover:text-brand-dark dark:hover:text-brand-primary underline cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key="form"
                  >
                    <div className="mb-6">
                      <span className="text-xs font-mono font-bold text-brand-dark dark:text-brand-primary uppercase tracking-wider block">
                        Consultation request form
                      </span>
                      <span className="text-lg font-bold text-slate-900 dark:text-white block mt-1 font-display">
                        Schedule Your Assessment Proposal
                      </span>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name & Email Row */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            placeholder="John Doe"
                            className="w-full p-3 text-xs border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-brand-primary bg-slate-50/50 dark:bg-slate-800 dark:text-white"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                            Corporate Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            placeholder="johndoe@yourcompany.com"
                            className="w-full p-3 text-xs border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-brand-primary bg-slate-50/50 dark:bg-slate-800 dark:text-white"
                          />
                        </div>
                      </div>

                      {/* Phone & Company Row */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formState.phone}
                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            className="w-full p-3 text-xs border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-brand-primary bg-slate-50/50 dark:bg-slate-800 dark:text-white"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                            Company Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formState.company}
                            onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                            placeholder="Acme Industries"
                            className="w-full p-3 text-xs border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-brand-primary bg-slate-50/50 dark:bg-slate-800 dark:text-white"
                          />
                        </div>
                      </div>

                      {/* Industry & Core Service Selection row */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                            Your Industry Sector
                          </label>
                          <select
                            value={formState.industry}
                            onChange={(e) => setFormState({ ...formState, industry: e.target.value })}
                            className="w-full p-3 text-xs border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-brand-primary bg-slate-50/50 dark:bg-slate-800 dark:text-white"
                          >
                            <option value="Textile & Apparel" className="dark:bg-slate-800">Textile & Apparel</option>
                            <option value="Engineering & Industrial Manufacturing" className="dark:bg-slate-800">Engineering & Industrial Manufacturing</option>
                            <option value="Lab-Grown Diamond" className="dark:bg-slate-800">Lab-Grown Diamond</option>
                            <option value="Metallic Yarn Manufacturing" className="dark:bg-slate-800">Metallic Yarn Manufacturing</option>
                            <option value="Construction" className="dark:bg-slate-800">Construction</option>
                            <option value="Building Materials & Chemicals" className="dark:bg-slate-800">Building Materials & Construction Chemicals</option>
                            <option value="Packaging" className="dark:bg-slate-800">Packaging</option>
                            <option value="Pharma & Medical Devices" className="dark:bg-slate-800">Pharmaceuticals & Medical Devices</option>
                            <option value="Other" className="dark:bg-slate-800">Other Industrial Sector</option>
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                            Primary Consulting Focus
                          </label>
                          <select
                            value={formState.service}
                            onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                            className="w-full p-3 text-xs border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-brand-primary bg-slate-50/50 dark:bg-slate-800 dark:text-white"
                          >
                            <option value="ERP Consulting" className="dark:bg-slate-800">ERP Consulting</option>
                            <option value="CRM Consulting" className="dark:bg-slate-800">CRM Consulting</option>
                            <option value="Business Process Consulting" className="dark:bg-slate-800">Business Process Consulting</option>
                            <option value="Business Intelligence" className="dark:bg-slate-800">Business Intelligence & Data Analytics</option>
                            <option value="AI Consulting" className="dark:bg-slate-800">AI Consulting</option>
                            <option value="WhatsApp Integration" className="dark:bg-slate-800">WhatsApp Business Integration</option>
                            <option value="Barcode & RFID" className="dark:bg-slate-800">Barcode & RFID Integration</option>
                            <option value="Banking & Payment" className="dark:bg-slate-800">Banking & Payment Integration</option>
                            <option value="System Audit" className="dark:bg-slate-800">System Audit & Health Check</option>
                            <option value="Training" className="dark:bg-slate-800">Staff Training & Change Management</option>
                            <option value="Implementation & Support" className="dark:bg-slate-800">Implementation & Support</option>
                          </select>
                        </div>
                      </div>

                      {/* Message body text */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                          Tell Us About Your Operational Bottlenecks
                        </label>
                        <textarea
                          rows={3}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          placeholder="e.g. yarn stock duplicates, slow corrugator deckle quoting times, compliance recipe gaps..."
                          className="w-full p-3 text-xs border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-brand-primary bg-slate-50/50 dark:bg-slate-800 dark:text-white resize-none"
                        />
                      </div>

                      {/* Submit action button */}
                      <button
                        ref={submitBtnRef}
                        type="submit"
                        disabled={status === 'submitting'}
                        data-cursor="hover"
                        className={`btn-shimmer w-full py-3.5 px-6 font-semibold text-sm rounded-xl text-white shadow-md flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                          status === 'submitting'
                            ? 'bg-slate-400 cursor-not-allowed'
                            : 'bg-brand-primary hover:bg-brand-dark shadow-brand-primary/15'
                        }`}
                      >
                        {status === 'submitting' ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                            Evaluating system variables...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" /> Book Assessment Consultation
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Phone, ArrowUp, ArrowRight, ShieldCheck, HelpCircle, Briefcase, Sparkles, Building2, Sun, Moon, Info, BookOpen, Users, Workflow, BarChart3, MessageCircle, ScanLine, Landmark, GraduationCap, Rocket, Layers, Factory, Gem, Boxes, HardHat, Package, Pill } from 'lucide-react';
import Logo from './Logo';
import { SERVICES, INDUSTRIES } from '../data';
import { useTheme } from '../ThemeContext';
import { useMagnetic } from '../hooks/useMagnetic';
import { scrollToTarget, scrollToTop as scrollToTopSmooth } from '../lib/scroll';

const SERVICE_ICON_MAP: Record<string, React.ComponentType<any>> = {
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

const INDUSTRY_ICON_MAP: Record<string, React.ComponentType<any>> = {
  Layers,
  Factory,
  Gem,
  Boxes,
  HardHat,
  Building2,
  Package,
  Pill,
};

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<'about' | 'services' | 'industries' | null>(null);
  const ctaRef = useMagnetic<HTMLButtonElement>(0.25);

  // Monitor scroll for header background, progress bar, and back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    scrollToTarget(`#${id}`);
  };

  const scrollToTop = () => {
    scrollToTopSmooth();
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 h-[3px] bg-brand-primary z-[100] transition-all duration-100" style={{ width: `${scrollProgress}%` }} />

      {/* Main Navigation Bar */}
      <nav
        id="navbar-sticky"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md py-3.5 border-b border-slate-200/50 dark:border-slate-800/50'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="cursor-pointer">
            <Logo tagline taglineClassName="hidden sm:block" />
          </a>

          {/* Desktop Navigation Link Hierarchy */}
          <div className="hidden lg:flex items-center gap-8">
            {/* About with Dropdown: About Us / Founder's Desk */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu('about')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                className={`text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-brand-dark dark:hover:text-brand-primary flex items-center gap-1 py-2 transition-colors ${
                  activeMegaMenu === 'about' ? 'text-brand-dark dark:text-brand-primary' : ''
                }`}
              >
                About
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMegaMenu === 'about' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeMegaMenu === 'about' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full pt-2 w-[300px] z-[60]"
                  >
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-800 p-3">
                      <button
                        onClick={() => scrollToSection('about')}
                        className="w-full flex items-start gap-3 p-2.5 rounded-xl text-left hover:bg-brand-light dark:hover:bg-slate-800/60 transition-all duration-200 group cursor-pointer"
                      >
                        <div className="mt-0.5 p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                          <Info className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-brand-dark dark:group-hover:text-brand-primary transition-colors block">
                            About Us
                          </span>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">Who we are & why it matters</p>
                        </div>
                      </button>

                      <button
                        onClick={() => scrollToSection('founders-desk')}
                        className="w-full flex items-start gap-3 p-2.5 rounded-xl text-left hover:bg-brand-light dark:hover:bg-slate-800/60 transition-all duration-200 group cursor-pointer"
                      >
                        <div className="mt-0.5 p-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors">
                          <BookOpen className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-brand-dark dark:group-hover:text-brand-primary transition-colors block">
                            Founder's Desk
                          </span>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">Vision, mission & values</p>
                        </div>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services with Mega Menu Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu('services')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                className={`text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-brand-dark dark:hover:text-brand-primary flex items-center gap-1 py-2 transition-colors ${
                  activeMegaMenu === 'services' ? 'text-brand-dark dark:text-brand-primary' : ''
                }`}
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMegaMenu === 'services' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeMegaMenu === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[650px] z-[60]"
                  >
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-800 p-6 grid grid-cols-2 gap-4">
                      <div className="col-span-2 pb-2.5 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-brand-primary" />
                        <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Enterprise Practice Areas</span>
                      </div>
                      
                      {SERVICES.map((srv) => {
                        const SrvIcon = SERVICE_ICON_MAP[srv.icon] || Briefcase;
                        return (
                          <button
                            key={srv.id}
                            onClick={() => {
                              scrollToSection('services');
                              // Custom trigger for service modal inside services element if we want
                            }}
                            data-cursor="hover"
                            className="w-full flex items-start gap-3 p-2.5 rounded-xl text-left hover:bg-brand-light dark:hover:bg-slate-800/60 transition-all duration-200 group cursor-pointer"
                          >
                            <div className="mt-1 p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors shrink-0">
                              <SrvIcon className="w-3.5 h-3.5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-brand-dark dark:group-hover:text-brand-primary transition-colors">{srv.title}</span>
                                {srv.isNew && (
                                  <span className="text-[9px] font-bold bg-brand-primary/10 text-brand-primary px-1.5 py-0.2 rounded-full">New</span>
                                )}
                                {srv.isPremium && (
                                  <span className="text-[9px] font-bold bg-amber-100 text-amber-700 px-1.5 py-0.2 rounded-full">Premium</span>
                                )}
                              </div>
                              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">{srv.description}</p>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-brand-primary transition-all duration-200 shrink-0 self-center" />
                          </button>
                        );
                      })}

                      <div className="col-span-2 mt-2 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                        <span>Need a custom system integration solution?</span>
                        <button
                          onClick={() => scrollToSection('contact')}
                          className="font-semibold text-brand-primary hover:text-brand-dark dark:hover:text-brand-primary flex items-center gap-1 group/btn cursor-pointer"
                        >
                          Ask our experts <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries with Mega Menu Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu('industries')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                className={`text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-brand-dark dark:hover:text-brand-primary flex items-center gap-1 py-2 transition-colors ${
                  activeMegaMenu === 'industries' ? 'text-brand-dark dark:text-brand-primary' : ''
                }`}
              >
                Industry
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMegaMenu === 'industries' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeMegaMenu === 'industries' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[380px] z-[60]"
                  >
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-800 p-3 max-h-[70vh] overflow-y-auto">
                      <div className="px-2 pb-2 mb-1 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2 sticky top-0 bg-white dark:bg-slate-900">
                        <Building2 className="w-4 h-4 text-brand-gold" />
                        <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider font-display">Specialized Industry Sectors</span>
                      </div>

                      {INDUSTRIES.map((ind) => {
                        const IndIcon = INDUSTRY_ICON_MAP[ind.icon] || Building2;
                        return (
                          <button
                            key={ind.id}
                            onClick={() => scrollToSection('industries')}
                            data-cursor="hover"
                            className="w-full flex items-center gap-3 p-2.5 rounded-xl text-left hover:bg-brand-light dark:hover:bg-slate-800/60 transition-all duration-200 group cursor-pointer"
                          >
                            <div className="p-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors shrink-0">
                              <IndIcon className="w-3.5 h-3.5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-brand-dark dark:group-hover:text-brand-primary transition-colors block truncate">{ind.name}</span>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 whitespace-nowrap">Custom sector workflows</p>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-brand-gold transition-all duration-200 shrink-0 self-center" />
                          </button>
                        );
                      })}

                      <div className="text-center text-[11px] text-slate-400 dark:text-slate-500 mt-1 pt-2.5 border-t border-slate-100 dark:border-slate-800">
                        Deep operational understanding of industrial challenges
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => scrollToSection('why-choose-us')}
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-brand-dark dark:hover:text-brand-primary transition-colors"
            >
              Why Astrabizz
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-brand-dark dark:hover:text-brand-primary transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-brand-dark dark:hover:text-brand-primary transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Consultation CTA & Call Icon */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919687412080"
              data-cursor="hover"
              className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand-dark dark:text-brand-primary border border-brand-primary/30 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-colors py-2 px-3.5 rounded-full"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </a>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer flex items-center justify-center border border-slate-200/50 dark:border-slate-700"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-brand-gold" />}
            </button>

            <button
              ref={ctaRef}
              onClick={() => scrollToSection('contact')}
              data-cursor="hover"
              className="btn-shimmer bg-brand-primary hover:bg-brand-dark text-white font-semibold text-sm py-2 px-5 rounded-full transition-colors duration-300 shadow-md shadow-brand-primary/20 flex items-center gap-1.5 cursor-pointer"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer border border-slate-200/50 dark:border-slate-700"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-4.5 h-4.5" /> : <Sun className="w-4.5 h-4.5 text-brand-gold" />}
            </button>
            <a href="tel:+919687412080" className="p-2 text-slate-500 hover:text-brand-primary transition-colors">
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/60 z-40 backdrop-blur-sm lg:hidden"
            />

            {/* Slide-out drawer panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-[300px] bg-white dark:bg-slate-900 z-50 p-6 shadow-2xl flex flex-col justify-between border-l border-slate-100 dark:border-slate-800 lg:hidden"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                  <Logo tagline />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-left py-2.5 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold transition-colors flex items-center gap-2"
                  >
                    <span>About Us</span>
                  </button>

                  <button
                    onClick={() => scrollToSection('founders-desk')}
                    className="text-left py-2.5 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold transition-colors flex items-center gap-2"
                  >
                    <span>Founder's Desk</span>
                  </button>

                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-left py-2.5 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold transition-colors flex items-center justify-between"
                  >
                    <span>Core Services</span>
                    <span className="text-[10px] bg-brand-primary/15 text-brand-primary px-2 py-0.5 rounded-full font-bold">8 areas</span>
                  </button>

                  <button
                    onClick={() => scrollToSection('industries')}
                    className="text-left py-2.5 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold transition-colors flex items-center justify-between"
                  >
                    <span>Industries Served</span>
                    <span className="text-[10px] bg-brand-gold/15 text-brand-gold px-2 py-0.5 rounded-full font-bold">4 sectors</span>
                  </button>

                  <button
                    onClick={() => scrollToSection('why-choose-us')}
                    className="text-left py-2.5 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold transition-colors"
                  >
                    Why Choose Us
                  </button>

                  <button
                    onClick={() => scrollToSection('faq')}
                    className="text-left py-2.5 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold transition-colors"
                  >
                    FAQ Accordion
                  </button>

                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-left py-2.5 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold transition-colors"
                  >
                    Contact Information
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-6 border-t border-slate-100 dark:border-slate-800">
                <a
                  href="tel:+919687412080"
                  className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wide py-2.5 bg-brand-primary/10 text-brand-dark dark:text-brand-primary rounded-lg border border-brand-primary/30"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Now
                </a>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-brand-primary hover:bg-brand-dark text-white font-semibold py-2.5 rounded-lg text-center transition-colors shadow-md cursor-pointer"
                >
                  Book Free Consultation
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Back to Top Floating Button (with motion trigger) */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3.5 bg-brand-dark hover:bg-brand-primary text-white rounded-full shadow-lg cursor-pointer z-40 transition-colors duration-300 border border-brand-primary/20 hover:scale-105"
            aria-label="Back to top"
            id="back-to-top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import About from './components/About';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Industries from './components/Industries';
import WhyChooseUs from './components/WhyChooseUs';
import Founder from './components/Founder';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Preloader from './components/Preloader';
import SmoothScrollProvider from './components/SmoothScrollProvider';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Preloader onComplete={() => setLoaded(true)} />
      <CustomCursor />
      <SmoothScrollProvider>
        <div className="min-h-screen bg-white dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-100 antialiased selection:bg-brand-primary/20 selection:text-brand-dark dark:selection:bg-brand-primary/30 dark:selection:text-white transition-colors duration-300">
          {/* Sticky header bar and navigation */}
          <Navbar />

          {/* Main landing sections */}
          <main>
            {/* Hero Section featuring the orbiting-systems signature visual */}
            <Hero />

            {/* Dynamic statistics and numeric counters */}
            <TrustIndicators />

            {/* Narrative bio, why digital transformation matters and interactive infographic comparison slider */}
            <About />

            {/* Founder's Desk: bio, quotation, vision, mission, core values, work ethic */}
            <Founder />

            {/* Grid of core consulting practices complete with detailed overlay inquiry modals */}
            <Services />

            {/* Technology partners and full solutions checklist */}
            <TechStack />

            {/* Mapped sector solutions across 8 core industries */}
            <Industries />

            {/* Competitive advantages bento grid and interactive 7-step process timeline */}
            <WhyChooseUs />

            {/* High-contrast partner testimonial carousel */}
            <Testimonials />

            {/* BUTTERY smooth FAQ accordion */}
            <FAQ />

            {/* Elegant Consultation booking form and direct corporate business card indicators */}
            <Contact />
          </main>

          {/* Large structured corporate footer with social sitemaps and legal disclosures */}
          <Footer />

          {/* Floating WhatsApp quick-contact button, wired to +91 96874 12080 */}
          <WhatsAppButton />
        </div>
      </SmoothScrollProvider>
    </>
  );
}


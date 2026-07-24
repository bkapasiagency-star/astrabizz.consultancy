import React from 'react';
import { motion } from 'motion/react';
import { useMagnetic } from '../hooks/useMagnetic';

const WHATSAPP_NUMBER = '919687412080'; // +91 96874 12080
const PREFILLED_MESSAGE =
  "Hello Astrabizz Consultancy, I came across your website and would like to learn more about your ERP, CRM, and Digital Transformation consulting services. Could we schedule a quick call to discuss my business requirements?";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;
  const magneticRef = useMagnetic<HTMLAnchorElement>(0.35);

  return (
    <motion.a
      ref={magneticRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Astrabizz Consultancy on WhatsApp"
      data-cursor="hover"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="fixed bottom-6 left-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1FBE5A] shadow-lg shadow-[#25D366]/30 cursor-pointer transition-colors duration-300 group"
    >
      {/* Ping animation ring for subtle attention */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />

      {/* Official-style WhatsApp glyph */}
      <svg
        viewBox="0 0 32 32"
        className="relative w-7 h-7 fill-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.34.652 4.527 1.786 6.393L4 29l7.79-1.746A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.7a9.66 9.66 0 0 1-4.94-1.353l-.354-.21-4.62 1.036 1.005-4.51-.232-.365A9.63 9.63 0 0 1 6.3 15c0-5.354 4.35-9.7 9.704-9.7 5.354 0 9.7 4.346 9.7 9.7 0 5.354-4.346 9.7-9.7 9.7Zm5.316-7.27c-.29-.145-1.72-.85-1.987-.945-.267-.097-.462-.145-.656.145-.194.29-.752.945-.922 1.14-.17.194-.34.218-.63.073-.29-.146-1.223-.451-2.33-1.44-.862-.768-1.444-1.717-1.613-2.007-.17-.29-.018-.447.128-.591.13-.13.29-.34.436-.51.146-.17.194-.29.29-.485.097-.194.049-.364-.024-.51-.073-.145-.656-1.582-.9-2.166-.237-.568-.478-.49-.656-.5l-.559-.01c-.194 0-.51.073-.777.364-.267.29-1.02.997-1.02 2.434s1.044 2.822 1.19 3.017c.146.194 2.055 3.138 4.98 4.4.696.3 1.239.48 1.663.615.699.222 1.335.19 1.838.116.561-.084 1.72-.703 1.963-1.382.243-.678.243-1.26.17-1.382-.073-.121-.267-.194-.558-.34Z" />
      </svg>
    </motion.a>
  );
}

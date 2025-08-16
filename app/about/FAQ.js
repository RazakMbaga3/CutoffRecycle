"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

   const faqItems = [
    {
      question: "Why human hair?",
      answer: "Human hair is a rich source of keratin — a protein high in nitrogen, which is a vital nutrient for plant growth. We use it to make a nutritious growing medium because it decomposes slowly, releasing nitrogen and other proteins into the soil, acting as a natural, slow-release fertilizer that improves soil fertility over time. In addition, we have developed a patented technology to extract amino acids from human hair to produce foliar fertilizer, providing a fast nutrient release method for healthier, more productive crops."
    },
    {
      question: "How do I join the Human Hair Waste Collection?",
      answer: "For existing collection hubs (listed on our Human Hair Waste Collection page):\n\n1. Collect – Get hair waste from your nearest barbershop, school, or military camp. Make sure to remove any unwanted waste.\n2. Package – Seal the hair waste securely in a bag.\n3. Drop Off – Bring it to one of our third-party-run collection hubs in your area.\n\nIf there's no existing hub in your area:\n• Send us your Name, Phone Number (preferably WhatsApp), and Location (District and Region) using the Contact Us form on our Get In Touch page.\n• We'll connect you with other collectors in your region.\n• If you'd like to become a bulk collector in your area, let us know in your message."
    },
    {
      question: "How do I get the fertilizer?",
      answer: "You can purchase our fertilizers in several convenient ways:\n\n• Online – Order directly through our website or via our WhatsApp AI Chatbot.\n• In Stores – Available at select agricultural supply stores across Tanzania.\n• Direct from Us – Visit our production facility for on-site purchases.\n\nWe offer both liquid fertilizers and growing medium in various quantities — perfect for everyone from home gardeners to large-scale commercial farmers."
    }
  ];

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div 
          key={index} 
          className="bg-white rounded-xl border border-brand-green/15 overflow-hidden hover:border-brand-green/30 transition-all duration-300 shadow-sm"
        >
          <button
            className="w-full text-left p-5 flex justify-between items-center focus:outline-none"
            onClick={() => toggleItem(index)}
            aria-expanded={activeIndex === index}
          >
            <span className="text-lg font-semibold text-brand-black hover:text-brand-green transition-colors duration-300 flex items-center">
              <span className="w-1.5 h-6 bg-brand-green rounded-full mr-3 transition-all duration-300" 
                style={{ 
                  height: activeIndex === index ? '1.5rem' : '1rem',
                  opacity: activeIndex === index ? 1 : 0.6 
                }}
              ></span>
              {item.question}
            </span>
            
            <motion.div
              animate={{ rotate: activeIndex === index ? 45 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-6 h-6 flex-shrink-0 text-brand-green"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </motion.div>
          </button>
          
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="p-5 pt-0 pl-10 border-t border-gray-100">
                  <p className="text-brand-black/70 leading-relaxed">{item.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

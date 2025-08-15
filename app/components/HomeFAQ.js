"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomeFAQ() {
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

  const formatAnswer = (answer) => {
    return answer.split('\n').map((line, index) => {
      if (line.trim() === '') {
        return <br key={index} />;
      }
      return (
        <span key={index} className="block mb-1">
          {line}
        </span>
      );
    });
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute inset-0 bg-dot-pattern opacity-5 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-6 bg-brand-green-ultra-light rounded-full text-brand-green font-medium text-sm mb-4 shadow-sm">Common Questions</span>
          <h2 className="text-4xl font-bold mb-4 text-brand-black">
            Frequently Asked <span className="text-brand-green relative inline-block">
              Questions
              <svg className="absolute -bottom-1 left-0 w-full h-2 text-brand-green/30" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0,5 C50,0 150,0 200,5 L200,8 L0,8 Z" fill="currentColor"></path>
              </svg>
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-brand-black/70 text-lg">
            Everything you need to know about hair recycling and our process
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl border border-brand-green/15 overflow-hidden hover:border-brand-green/30 transition-all duration-300 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
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
                        <div className="text-brand-black/70 leading-relaxed">
                          {formatAnswer(item.answer)}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

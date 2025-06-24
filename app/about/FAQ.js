"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "Why human hair?",
      answer: "Human hair is incredibly rich in nitrogen (15-18%), making it an excellent slow-release fertilizer. It decomposes gradually, feeding plants over time while improving soil structure. Unlike synthetic fertilizers, hair is a waste product we're recycling, creating a circular economy solution that diverts waste from landfills while supporting sustainable agriculture."
    },
    {
      question: "Is it safe for crops?",
      answer: "Absolutely! Our hair fertilizer undergoes a specialized processing method that sanitizes it while preserving its nutrient content. The fertilizer has been extensively tested on various crops and has shown excellent results without any safety concerns. It's 100% organic and doesn't contain chemicals found in many commercial fertilizers."
    },
    {
      question: "Can I donate my hair?",
      answer: "Yes! We welcome hair donations from individuals and businesses alike. Clean, dry hair of any length, color, or texture can be donated. We have collection points across Tanzania, or you can contact us to arrange pickup. Visit our 'Donate Hair' section on the homepage for more details on how to contribute."
    },
    {
      question: "How do I get the fertilizer?",
      answer: "Our fertilizers are available for purchase through our website, at select agricultural supply stores in Tanzania, or directly from our production facility. We offer both liquid fertilizer and nutrified organic soil options in various quantities to suit different needs, from home gardeners to commercial farmers."
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

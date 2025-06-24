"use client";

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function AnimatedTagline() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  const taglineVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const decorationVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div ref={ref} className="container mx-auto px-4 md:px-8 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Decorative Elements */}
        <motion.div 
          className="absolute left-10 top-1/2 transform -translate-y-1/2 w-24 h-24 rounded-full border-4 border-brand-green/30"
          variants={decorationVariants}
          initial="hidden"
          animate={controls}
        />
        
        <motion.div 
          className="absolute right-10 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-brand-green/15 rounded-tl-full rounded-tr-full rotate-45 blur-sm"
          variants={decorationVariants}
          initial="hidden"
          animate={controls}
        />
        
        <motion.div
          className="text-center py-10"
          variants={taglineVariants}
          initial="hidden"
          animate={controls}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-brand-green tracking-tight relative inline-block">
            We Make Hair Rubbish, Flourish
            
            {/* Underline Effect */}
            <div className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-brand-green/30 via-brand-green to-brand-green/30"></div>
            
            {/* Small Leaf Icon */}
            <div className="absolute -right-10 -top-6 text-brand-green/50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
          </h2>
        </motion.div>
      </div>
    </div>
  );
}

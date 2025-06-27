"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PatternBackground } from './BrandAnimate';

export default function EnhancedHeroSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const titleAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const subtitleAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  const buttonAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: 0.4,
        ease: "easeOut"
      }
    }
  };

  const scrollToHowItWorks = () => {
    const howItWorksSection = document.getElementById('how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden" ref={containerRef}>      {/* Video Background with Image Fallback */}      <motion.div className="absolute inset-0 z-0" style={{ scale, opacity }}>
        <div className="absolute inset-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            preload="auto"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            className="absolute inset-0"
          >
            <source src="/videos/background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-brand-green/30" />
        </div>
      </motion.div>

      {/* Animated Brand Pattern Background */}
      <PatternBackground
        position="left-0 top-0"
        size="w-full h-full"
        opacity={[0.05, 0.1, 0.05]}
        animation="wave"
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 h-screen flex flex-col justify-center items-center">
        <motion.div 
          className="max-w-4xl text-center"
          ref={ref}
          style={{ y }}
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white"
            variants={titleAnimation}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <span className="block text-brand-green drop-shadow-glow mb-2">We Make Hair Rubbish</span>
            <span className="relative">
            Flourish
              <motion.span
                className="absolute -bottom-3 left-0 w-full h-1 bg-brand-green/60"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed"
            variants={subtitleAnimation}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            Creating an environmentally sustainable future by transforming hair waste into valuable agricultural resources.
          </motion.p>

          <motion.div
            variants={buttonAnimation}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <button 
              onClick={scrollToHowItWorks}
              className="px-8 py-4 bg-brand-green text-white font-semibold rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-500 transform hover:-translate-y-1 inline-flex items-center text-lg"
            >
              See How It Works
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor" 
            className="text-brand-green"
          />
        </svg>
      </div>
    </section>
  );
}

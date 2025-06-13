"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BrandPattern from './BrandPattern';

const backgroundImages = [
  '/Images/Photos/BNK_0555.jpg',
  '/Images/Photos/BNK_0676.jpg',
  '/Images/Photos/BNK_0689.jpg',
  '/Images/Photos/BNK_0704.jpg'
];

export default function HeroSection({ 
  title = "Transforming Waste Into Growth", 
  subtitle = "Creating an environmentally sustainable world through innovative hair waste recycling solutions.",
  showPattern = true,
  className = '',
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
  return (
    <section className={`relative min-h-[90vh] overflow-hidden pt-20 ${className}`}>
      {/* Dynamic Background Slideshow */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={image}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src={image}
              alt="Background"
              fill
              quality={90}
              priority={index === 0}
              className="object-cover"
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
      </div>

      {/* Background Pattern */}
      {showPattern && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
        >
          <BrandPattern opacity={0.05} />
        </motion.div>
      )}

      {/* Floating Elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-green/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-green/20 rounded-full blur-3xl animate-float-delay" />
        
        {/* Brand Icon */}
        <div className="absolute top-10 right-10 w-32 h-32 opacity-10 animate-float">
          <Image
            src="/Brand Assets/CutOff-Icon.png"
            alt="CutOff Icon"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-4xl" ref={ref}>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
            variants={titleAnimation}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <span className="text-brand-green relative inline-block">
              {title.split(' ')[0]}
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-brand-green/30"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </span>{' '}
            <span className="relative">
              {title.split(' ').slice(1).join(' ')}
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-3xl mb-12 leading-relaxed"
            variants={subtitleAnimation}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {subtitle}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-6"
            variants={buttonAnimation}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Link href="/contact" className="btn btn-lg btn-primary btn-icon-right">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link href="/products" className="btn btn-lg btn-ghost btn-icon-right">
              Our Solutions
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave with Animation */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20">          <motion.path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor" 
            className="text-brand-green"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </svg>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="text-sm mb-2">Scroll to explore</span>
        <motion.div
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-1 h-1 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

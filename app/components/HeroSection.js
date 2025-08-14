"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BrandPattern from './BrandPattern';

export default function HeroSection({ 
  title,
  subtitle,
  backgroundImage = '/Images/Photos/BNK_0555.jpg',
  tag,
  ctaButtons = [],
  showPattern = true,
  className = '',
}) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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
    <section className={`relative min-h-[80vh] overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          quality={90}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60 backdrop-blur-[1px]" />
      </div>

      {/* Pattern Overlay */}
      {showPattern && (
        <div className="absolute inset-0 opacity-[0.03]">
          <BrandPattern />
        </div>
      )}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px] animate-float-delay" />
        
        {/* Brand Icon */}
        <div className="absolute top-10 right-10 w-32 h-32 opacity-20 animate-float mix-blend-overlay">
          <Image
            src="/Brand Assets/CutOff-Icon.png"
            alt="CutOff Icon"
            fill
            className="object-contain invert"
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center pt-32">
        <div className="max-w-4xl backdrop-blur-sm p-8 rounded-3xl bg-black/10" ref={ref}>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white [text-shadow:_2px_2px_10px_rgb(0_0_0_/_40%)]"
            variants={titleAnimation}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white max-w-3xl mb-12 leading-relaxed [text-shadow:_1px_1px_8px_rgb(0_0_0_/_30%)]"
            variants={subtitleAnimation}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {subtitle}
          </motion.p>

          {ctaButtons.length > 0 && (
            <motion.div
              className="flex flex-wrap gap-6"
              variants={buttonAnimation}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {ctaButtons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  className={`inline-flex items-center px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
                    button.primary
                      ? 'bg-brand-green text-white shadow-lg hover:shadow-xl'
                      : 'border-2 border-brand-green text-brand-green hover:bg-brand-green/5'
                  }`}
                >
                  {button.text}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </div>

    </section>
  );
}

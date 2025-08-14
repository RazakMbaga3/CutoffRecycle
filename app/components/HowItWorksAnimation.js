"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const processSteps = [
  {
    title: "Collection",
    description: "We collect hair waste from salons and barbershops across Tanzania",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    image: "/new/collection.jpg"
  },
  {
    title: "Processing",
    description: "The hair is cleaned, sorted, and prepared for transformation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    image: "/new/processing2.jpg"
  },
  {
    title: "Conversion",
    description: "Hair is converted into nutrient-rich organic fertilizer",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 4a2 2 0 00-2-2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4z" />
      </svg>
    ),
    image: "/new/processing.webp"
  },
  {
    title: "Application",
    description: "Our fertilizer is used by Tanzanian farmers to grow healthier crops",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    image: "/new/spraying.webp"
  },
  {
    title: "Growth",
    description: "Sustainable growth for both farms and our environment",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    image: "/new/farm4.webp"
  }
];

export default function HowItWorksAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Memoize the paginate function
  const paginate = useCallback((newDirection) => {
    setDirection(newDirection);
    setIsAutoPlaying(false); // Pause autoplay when manually navigating
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = processSteps.length - 1;
      if (newIndex >= processSteps.length) newIndex = 0;
      return newIndex;
    });
    // Resume autoplay after manual navigation
    setTimeout(() => setIsAutoPlaying(true), 5000);
  }, []); // processSteps is constant, no need to include in deps

  // Auto-rotation effect
  useEffect(() => {
    let interval;
    if (isAutoPlaying && !isHovered) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % processSteps.length);
      }, 5000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, isHovered]);

  return (
    <section id="how-it-works" className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block py-2 px-6 bg-brand-green/10 rounded-full text-brand-green font-medium text-sm mb-4">
            Our Process
          </span>
          <h2 className="text-4xl font-bold mb-4 text-brand-black">
            How We <span className="text-brand-green relative inline-block">
              Transform
              <svg className="absolute -bottom-1 left-0 w-full h-2 text-brand-green/30" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0,5 C50,0 150,0 200,5 L200,8 L0,8 Z" fill="currentColor"></path>
              </svg>
            </span> Hair Waste
          </h2>
          <p className="max-w-xl mx-auto text-brand-black/70 text-lg">
            From collecting hair to growing crops, see how our innovative process works
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-6xl mx-auto relative">
          {/* Progress Steps */}
          <div className="flex justify-center mb-8">
            {processSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full mx-2 transition-all duration-300 ${
                  index === currentIndex ? 'bg-brand-green scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>

          {/* Main Carousel */}
          <div className="relative h-[500px] bg-white rounded-2xl shadow-lg overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30,
                  duration: 0.5
                }}
                className="absolute inset-0 w-full h-full"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}
              >
                <div className="grid md:grid-cols-2 h-full">
                  {/* Image Side */}
                  <div className="relative h-60 md:h-full">
                    <Image
                      src={processSteps[currentIndex].image}
                      alt={processSteps[currentIndex].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-4">
                        {processSteps[currentIndex].icon}
                      </div>
                      <div className="flex items-center mb-4">
                        <span className="bg-brand-green text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
                          {currentIndex + 1}
                        </span>
                        <h3 className="text-2xl font-bold text-brand-black">
                          {processSteps[currentIndex].title}
                        </h3>
                      </div>
                      <p className="text-lg text-brand-black/70">
                        {processSteps[currentIndex].description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-brand-green hover:bg-white transition-all duration-200"
              onClick={() => paginate(-1)}
              aria-label="Previous step"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-brand-green hover:bg-white transition-all duration-200"
              onClick={() => paginate(1)}
              aria-label="Next step"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

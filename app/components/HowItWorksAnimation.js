"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { PatternBackground } from './BrandAnimate';

export default function HowItWorksAnimation() {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const processSteps = [
    {
      title: "Collection",
      description: "We collect hair waste from salons and barbershops across Tanzania",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      image: "/Images/Photos/IMG_20241021_121410_339.jpg"
    },
    {
      title: "Processing",
      description: "The hair is cleaned, sorted, and prepared for transformation",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      image: "/Images/Photos/IMG_20241105_143019_017.jpg"
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
      image: "/Images/Photos/IMG_20241105_143433_338.jpg"
    },
    {
      title: "Application",
      description: "Our fertilizer is used by Tanzanian farmers to grow healthier crops",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      image: "/Images/Photos/IMG_20241105_143510_986.jpg"
    },
    {
      title: "Growth",
      description: "Sustainable growth for both farms and our environment",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      image: "/Images/Photos/IMG_20241105_143812_570.jpg"
    }
  ];

  // Create animation for horizontal progress
  const translateX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <PatternBackground 
        position="right-0 top-0" 
        size="w-full h-full" 
        opacity={[0.03, 0.07, 0.03]} 
        animation="rotate" 
      />
      
      {/* Top Curve */}
      <div className="absolute -top-1 left-0 w-full h-16 overflow-hidden">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0 C150,100 350,0 500,100 L500,150 L0,150 Z" fill="white"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-6 bg-brand-green/10 rounded-full text-brand-green font-medium text-sm mb-4 shadow-sm">Our Process</span>
          <h2 className="text-4xl font-bold mb-4 text-brand-black">
            How We <span className="text-brand-green relative inline-block">
              Transform
              <svg className="absolute -bottom-1 left-0 w-full h-2 text-brand-green/30" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0,5 C50,0 150,0 200,5 L200,8 L0,8 Z" fill="currentColor"></path>
              </svg>
            </span> Hair Waste
          </h2>
          <p className="max-w-xl mx-auto text-brand-black/70 text-lg mb-12">
            From collecting hair to growing crops, see how our innovative process works
          </p>
        </div>
        
        {/* Progress Line */}
        <div className="relative h-2 bg-gray-100 rounded-full mb-12 max-w-4xl mx-auto">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-brand-green rounded-full"
            style={{ width: translateX }}
          />
        </div>
        
        {/* Process Steps */}
        <div className="space-y-24">
          {processSteps.map((step, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="md:w-1/2">
                <div className={`relative rounded-3xl overflow-hidden shadow-xl h-[350px] ${index % 2 === 0 ? 'transform md:translate-x-8' : 'transform md:-translate-x-8'}`}>
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 inline-block">
                      <span className="text-brand-green font-bold flex items-center">
                        <span className="bg-brand-green text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                          {index + 1}
                        </span>
                        {step.title}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className={`pl-6 border-l-2 border-brand-green/30 ${index % 2 === 0 ? 'text-left' : 'text-right pr-6 md:border-l-0 md:border-r-2'}`}>
                  <div className="flex items-center mb-4 gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-brand-black">{step.title}</h3>
                  </div>
                  <p className="text-lg text-brand-black/70">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

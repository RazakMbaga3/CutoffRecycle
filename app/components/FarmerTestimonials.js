"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FarmerTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialRef = useRef(null);
  
  const testimonials = [
    {
      name: "Asha Mwanzi",
      location: "Morogoro",
      crop: "Maize",
      quote: "Since I started using CutOff's fertilizer, my maize crops have grown stronger and healthier. The yields have increased by almost 40% compared to last season.",
      image: "/Images/Photos/BNK_0688.jpg"
    },
    {
      name: "Ibrahim Hassan",
      location: "Arusha",
      crop: "Vegetables",
      quote: "I was skeptical at first about using fertilizer made from hair, but the results speak for themselves. My vegetable garden is thriving with minimal pest problems.",
      image: "/Images/Photos/BNK_0694.jpg"
    },
    {
      name: "Grace Makundi",
      location: "Mwanza",
      crop: "Coffee",
      quote: "As a coffee farmer, soil quality is everything. CutOff's organic fertilizer has improved my soil health significantly, and my coffee plants are more resilient.",
      image: "/Images/Photos/BNK_0684.jpg"
    },
    {
      name: "Thomas Mollel",
      location: "Kilimanjaro",
      crop: "Bananas",
      quote: "The organic fertilizer from CutOff has been a game-changer for my banana plantation. The plants grow faster and produce larger, healthier fruit.",
      image: "/Images/Photos/BNK_0680.jpg"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-brand-green-ultra-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-waves opacity-10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-6 bg-white/80 rounded-full text-brand-green font-medium text-sm mb-4 backdrop-blur-sm shadow-sm">Success Stories</span>
          <h2 className="text-4xl font-bold mb-4 text-brand-black">
            Meet Our <span className="text-brand-green relative inline-block">
              Farmers
              <svg className="absolute -bottom-1 left-0 w-full h-2 text-brand-green/30" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0,5 C50,0 150,0 200,5 L200,8 L0,8 Z" fill="currentColor"></path>
              </svg>
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-brand-black/70 text-lg">
            Hear from Tanzanian farmers who are growing with our sustainable solutions
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto" ref={testimonialRef}>
          {/* Testimonial Cards */}
          <div className="relative h-[600px] md:h-[500px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 bg-white rounded-3xl shadow-card overflow-hidden flex flex-col md:flex-row"
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : (activeIndex > index ? -100 : 100),
                  pointerEvents: activeIndex === index ? 'auto' : 'none'
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {/* Image Section */}
                <div className="relative w-full md:w-1/2 h-60 md:h-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="inline-block bg-brand-green/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <p className="text-sm">{testimonial.crop} Farmer</p>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <svg className="w-12 h-12 text-brand-green/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  
                  <p className="text-xl text-brand-black/80 italic mb-8">"{testimonial.quote}"</p>
                  
                  <div>
                    <h3 className="text-xl font-bold text-brand-black">{testimonial.name}</h3>
                    <p className="text-brand-green font-medium">{testimonial.location}, Tanzania</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 gap-6">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-brand-green w-8' : 'bg-brand-green/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-colors duration-300"
              aria-label="Next testimonial"
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

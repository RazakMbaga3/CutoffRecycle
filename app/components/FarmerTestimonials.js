"use client";

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FarmerTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: 'Asha Mwanzi',
      location: 'Morogoro',
      crop: 'Maize',
      quote: 'Since I started using CutOff\'s fertilizer, my maize crops have grown stronger and healthier. The yields have increased by almost 40% compared to last season.',
      image: '/Images/Photos/BNK_0688.jpg'
    },
    {
      name: 'Ibrahim Hassan',
      location: 'Arusha',
      crop: 'Vegetables',
      quote: 'I was skeptical at first about using fertilizer made from hair, but the results speak for themselves. My vegetable garden is thriving with minimal pest problems.',
      image: '/Images/Photos/BNK_0694.jpg'
    },
    {
      name: 'Grace Makundi',
      location: 'Mwanza',
      crop: 'Coffee',
      quote: 'As a coffee farmer, soil quality is everything. CutOff\'s organic fertilizer has improved my soil health significantly.',
      image: '/Images/Photos/BNK_0684.jpg'
    }
  ];

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="py-24 bg-brand-green-ultra-light relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Farmer Success Stories</h2>
          <p className="text-lg text-gray-600">Hear from farmers using our organic fertilizer</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="relative h-64 w-64 rounded-full overflow-hidden">
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <blockquote className="text-xl mb-6">{currentTestimonial.quote}</blockquote>
                <div>
                  <p className="font-bold text-lg">{currentTestimonial.name}</p>
                  <p className="text-gray-600">{currentTestimonial.location} - {currentTestimonial.crop} Farmer</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-brand-green text-white"
            >
              Previous
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-brand-green text-white"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

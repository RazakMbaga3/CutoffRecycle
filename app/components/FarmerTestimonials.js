"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FarmerTestimonials() {
  const testimonials = [
    {
      name: 'Mpemba',
      location: 'Mbeya',
      crop: 'Maize',
      quote: 'I used the organic crop booster from CutOff Recycle on my maize and to my surprise, the crops grew greener, healthier and increased in yields to almost 40% compared to the last season.',
      image: '/Images/maize.webp'
    },
    {
      name: 'Happyness Makundi',
      location: 'Arusha',
      crop: 'Flower',
      quote: 'I started using the organic growing medium for my flowers and I have been able to reduce my water use as the material used seems to retain water but also I saved time by having a ready-to-use growing medium for my flowers',
      image: '/Images/flowers.webp'
    },
    {
      name: 'Nashe',
      location: 'Arusha',
      crop: 'Tomatoes',
      quote: 'I enjoy free farm consultation from CutOff Recycle before and after buying their products which helps me grow without stress',
      image: '/Images/tomato.webp'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute -top-24 -right-20 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-20 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-20">
          <span className="inline-block py-2 px-6 bg-brand-green/10 rounded-full text-brand-green font-medium text-sm mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Farmer Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from farmers using our organic fertilizer
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 flex flex-col h-full"
            >
              {/* Quote Icon */}
              <div className="text-brand-green opacity-20 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.314 0-6 2.686-6 6v10h10V14H8c0-1.105.895-2 2-2h2V8h-2zm14 0c-3.314 0-6 2.686-6 6v10h10V14h-6c0-1.105.895-2 2-2h2V8h-2z" />
                </svg>
              </div>

              {/* Image */}
              <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-gray-700 italic mb-6 flex-grow">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="mt-auto">
                <div className="flex items-center">
                  <div className="w-8 h-0.5 bg-brand-green rounded mr-3"></div>
                  <div>
                    <p className="font-bold text-lg text-gray-900">{testimonial.name}</p>
                    <p className="text-brand-green text-sm">{testimonial.location} - {testimonial.crop} Farmer</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

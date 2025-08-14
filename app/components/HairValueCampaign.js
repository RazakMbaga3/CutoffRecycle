"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HairValueCampaign() {
  const valueCards = [
    {
      title: 'Environment',
      description: 'Sustainable waste management reducing landfill burden',
      impact: 'Reduced over 5 tons of hair waste from landfills, contributing to cleaner soil and water systems',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      image: "/new/environment.webp"
    },
    {
      title: 'Community',
      description: 'Creating opportunities and empowering local communities',
      impact: 'Created sustainable income for local farmers and partnered with 50+ salons',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      image: "/new/farmer3.webp"
    },
    {
      title: 'Crops',
      description: 'Enhancing agricultural productivity with organic fertilizer',
      impact: 'Improved crop yields by 30% using our hair-based organic fertilizer',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      image: "/new/vuna4.webp"
    }
  ];

  return (
    <section className="py-16 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900"
          >
            Creating{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#be8b4d]">
              Value
            </span>{" "}
            Through Impact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-xl text-gray-600"
          >
            Transforming waste into sustainable solutions for a better future
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueCards.map((card, index) => (
            <div
              key={index}
              className="group h-[400px] w-full cursor-pointer [perspective:1000px]"
            >
              <div
                className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
              >
                {/* Front of card */}
                <div
                  className="absolute inset-0 bg-brand-green rounded-2xl shadow-xl p-8"
                  style={{
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <div className="flex flex-col items-center justify-center h-full space-y-6">
                    <div className="text-white">
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      {card.title}
                    </h3>
                    <p className="text-lg text-white/90 text-center">
                      {card.description}
                    </p>
                    <span className="text-sm text-white mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      Hover to see our impact →
                    </span>
                  </div>
                </div>

                {/* Back of card */}
                <div
                  className="absolute inset-0 bg-brand-green rounded-2xl shadow-xl overflow-hidden [transform:rotateY(180deg)]"
                  style={{
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <div className="relative h-full">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-brand-green/30 p-8 flex flex-col items-center justify-center backdrop-blur-sm">
                      <h3 className="text-2xl font-semibold text-white mb-4">
                        Our Impact
                      </h3>
                      <p className="text-lg text-white/90 text-center">
                        {card.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

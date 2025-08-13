'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const partnerLogos = [
  {
    id: 1,
    src: '/Images/partner1.png',
    alt: 'Partner 1',
  },
  {
    id: 2,
    src: '/Images/partner2.png',
    alt: 'Partner 2',
  },
  {
    id: 3,
    src: '/Images/partner3.png',
    alt: 'Partner 3',
  },
  // Add more partner logos as needed
];

export default function PartnerLogos() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % (partnerLogos.length * 200));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Our Trusted Partners
        </h2>
        
        <div className="relative w-full">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          {/* Scrolling logos container */}
          <div 
            className="flex items-center gap-16 py-8"
            style={{
              transform: `translateX(-${scrollPosition}px)`,
              transition: 'transform 0.05s linear'
            }}
          >
            {/* Duplicate the logos array to create seamless scrolling */}
            {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="relative w-32 h-20 flex-shrink-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

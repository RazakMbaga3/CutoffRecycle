'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const partnerLogos = [
  {
    id: 1,
    src: '/Images/PARTNER LOGOS/African Union.png',
    alt: 'African Union',
  },
  {
    id: 2,
    src: '/Images/PARTNER LOGOS/Alibaba logo.png',
    alt: 'Alibaba',
  },
  {
    id: 3,
    src: '/Images/PARTNER LOGOS/anzisha.png',
    alt: 'Anzisha Prize',
  },
  {
    id: 4,
    src: '/Images/PARTNER LOGOS/Global Student Entrepreneur Awards.png',
    alt: 'Global Student Entrepreneur Awards',
  },
  {
    id: 5,
    src: '/Images/PARTNER LOGOS/Inkomoko.png',
    alt: 'Inkomoko',
  },
  {
    id: 6,
    src: '/Images/PARTNER LOGOS/International Trade Center.svg',
    alt: 'International Trade Center',
  },
  {
    id: 7,
    src: '/Images/PARTNER LOGOS/mf.png',
    alt: 'MasterCard Foundation',
  },
  {
    id: 8,
    src: '/Images/PARTNER LOGOS/SIDO.png',
    alt: 'SIDO',
  },
  {
    id: 9,
    src: '/Images/PARTNER LOGOS/jude.png',
    alt: 'The School of St Jude',
  },
  {
    id: 10,
    src: '/Images/PARTNER LOGOS/wipo.png',
    alt: 'WIPO',
  },
  {
    id: 11,
    src: '/Images/PARTNER LOGOS/WSH-Arusha.png',
    alt: 'WSH Arusha',
  }
];

export default function PartnerLogos() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 0.5) % (partnerLogos.length * 250));
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
            className="flex items-center gap-24 py-8"
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

"use client";

import Image from 'next/image';

export default function BrandCard({ 
  title, 
  description, 
  icon, 
  className = '' 
}) {
  return (
    <div className={`relative group ${className}`}>
      {/* Background with brand pattern on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-brand-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
      
      <div className="relative bg-white p-8 rounded-3xl border border-brand-green/10 hover:border-brand-green/30 transition-all duration-300 shadow-card hover:shadow-lg transform hover:-translate-y-2">
        {/* Icon Container */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-green to-brand-navy/80 text-white flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
          {icon}
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold mb-4 text-brand-black group-hover:text-brand-green transition-colors duration-300">
          {title}
        </h3>
        <p className="text-brand-black/70 group-hover:text-brand-black/90 transition-colors duration-300">
          {description}
        </p>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-24 h-24 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
          <Image
            src="/Brand Assets/CutOff-Icon.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Bottom Accent */}
        <div className="mt-6 w-12 h-1 bg-gradient-to-r from-brand-green to-brand-navy/50 rounded-full group-hover:w-20 transition-all duration-300" />
      </div>
    </div>
  );
}

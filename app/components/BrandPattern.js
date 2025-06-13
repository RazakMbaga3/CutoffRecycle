"use client";

import Image from 'next/image';

export default function BrandPattern({ opacity = 0.1, rotate = 0, scale = 1, className = '' }) {
  return (
    <div 
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{
        opacity: opacity,
        transform: `rotate(${rotate}deg) scale(${scale})`,
      }}
    >
      <div className="absolute inset-0 pattern-repeat">
        <Image
          src="/Brand Assets/CutOff Pattern.svg"
          alt="Background Pattern"
          fill
          className="object-contain pattern-image"
        />
      </div>
      <style jsx>{`
        .pattern-repeat {
          background-repeat: repeat;
          transform: scale(${scale});
        }
        .pattern-image {
          opacity: ${opacity};
          mix-blend-mode: multiply;
        }
      `}</style>
    </div>
  );
}

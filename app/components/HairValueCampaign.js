"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HairValueCampaign() {
  const [activeCard, setActiveCard] = useState(null);
  
  const hairFacts = [
    {
      title: "Nitrogen Retention",
      description: "Human hair can absorb and retain nitrogen, a crucial nutrient for plant growth.",
      expanded: "Hair is 15-18% nitrogen, compared to cow manure at only 2-4%. This makes it an exceptional source of slow-release nitrogen for plants.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      image: "/Images/Photos/Nitrogen.jpg"
    },
    {
      title: "Fertilizing Power",
      description: "Just 1kg of hair can fertilize an entire garden for up to 2 growing seasons.",
      expanded: "Hair's slow decomposition means nutrients are released gradually, providing sustained nourishment to plants without the risk of burning roots like chemical fertilizers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      image: "/Images/Photos/Garden.jpg"
    },
    {
      title: "Pest Repellent",
      description: "Hair can naturally repel garden pests like deer, rabbits, and certain insects.",
      expanded: "The human scent in hair acts as a natural deterrent to animals that might otherwise damage crops, reducing the need for chemical pesticides.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
      image: "/Images/Photos/Pest.jpg"
    },
    {
      title: "Soil Aeration",
      description: "Hair improves soil structure by creating air pockets for better root growth.",
      expanded: "When mixed into soil, hair's strong keratin fibers create channels for air and water movement, improving drainage in clay soils and water retention in sandy soils.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      image: "/Images/Photos/Soil.jpg"
    },
    {
      title: "Water Conservation",
      description: "Hair can absorb up to 10 times its weight in water, helping retain moisture.",
      expanded: "In dry regions, hair's remarkable ability to absorb and hold water means less frequent irrigation is needed, conserving this precious resource while keeping plants hydrated.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      image: "/Images/Photos/Water.jpg"
    },
    {
      title: "Environmental Impact",
      description: "Recycling hair diverts waste from landfills and reduces chemical fertilizer use.",
      expanded: "Every kilogram of hair recycled into fertilizer prevents the production and use of approximately 3kg of chemical fertilizers, reducing harmful runoff into waterways.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7m-14 0l2 2m0 0l7 7-7-7m14 0l-2-2m0 0l-7-7-7 7m14 0l-2 2m0 0l-7 7 7-7" />
        </svg>
      ),
      image: "/Images/Photos/Environment.jpg"
    }
  ];

  const handleCardHover = (index) => {
    setActiveCard(index);
  };

  const handleCardLeave = () => {
    setActiveCard(null);
  };

  return (
    <section className="py-24 bg-brand-green-ultra-light relative overflow-hidden">
      {/* Top Curve */}
      <div className="absolute -top-1 left-0 w-full h-16 overflow-hidden">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0 C150,120 350,30 500,0 L500,150 L0,150 Z" fill="white"></path>
        </svg>
      </div>
      
      {/* Bottom Curve */}
      <div className="absolute -bottom-1 left-0 w-full h-16 overflow-hidden">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,150 C150,50 350,100 500,150 L500,00 L0,0 Z" fill="white"></path>
        </svg>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-6 bg-white/80 rounded-full text-brand-green font-medium text-sm mb-4 backdrop-blur-sm shadow-sm">Did You Know?</span>
          <h2 className="text-4xl font-bold mb-4 text-brand-black">
            Hair Has <span className="text-brand-green relative inline-block">
              Value
              <svg className="absolute -bottom-1 left-0 w-full h-2 text-brand-green/30" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0,5 C50,0 150,0 200,5 L200,8 L0,8 Z" fill="currentColor"></path>
              </svg>
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-brand-black/70 text-lg mb-8">
            Discover the surprising benefits of recycled hair for agriculture and the environment
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hairFacts.map((fact, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-card overflow-hidden group cursor-pointer relative"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={handleCardLeave}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
            >
              <div className="h-48 relative">
                <Image
                  src={fact.image || "/Images/Photos/BNK_0555.jpg"}
                  alt={fact.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl font-bold">{fact.title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mb-4">
                  {fact.icon}
                </div>
                
                <p className="text-brand-black/80 mb-4">{fact.description}</p>
                
                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: activeCard === index ? 'auto' : 0,
                    opacity: activeCard === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="pt-4 border-t border-gray-100 mt-4">
                    <p className="text-brand-black/70">{fact.expanded}</p>
                  </div>
                </motion.div>
                
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-brand-green text-sm font-medium">
                    {activeCard === index ? "Less detail" : "More detail"}
                  </span>
                  <motion.div
                    animate={{ rotate: activeCard === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

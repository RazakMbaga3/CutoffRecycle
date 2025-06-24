"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HairValueCampaign() {
  const [activeIndex, setActiveIndex] = useState(null);

  const facts = [
    {
      title: "Environmental Impact",
      description: "Each kilogram of recycled hair helps reduce carbon emissions and waste in landfills",
      image: "/Images/Photos/BNK_0555.jpg"
    },
    {
      title: "Soil Health",
      description: "Hair based fertilizer improves soil structure and water retention",
      image: "/Images/Photos/BNK_0684.jpg"
    },
    {
      title: "Crop Yields",
      description: "Farmers report up to 30% increase in crop yields using our organic fertilizer",
      image: "/Images/Photos/BNK_0688.jpg"
    },
    {
      title: "Zero Waste",
      description: "We transform 100% of collected hair into valuable agricultural products",
      image: "/Images/Photos/BNK_0694.jpg"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-6 bg-brand-green/10 rounded-full text-brand-green font-medium text-sm mb-4">
            Value Creation
          </span>
          <h2 className="text-4xl font-bold mb-4">
            Turning Waste into Value
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we transform hair waste into sustainable agricultural solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 relative">
                <Image
                  src={fact.image}
                  alt={fact.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-white text-xl font-bold">{fact.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <p className="text-gray-600">{fact.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

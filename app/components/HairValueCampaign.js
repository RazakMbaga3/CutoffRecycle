"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { FaLeaf, FaPeopleCarry, FaSeedling } from 'react-icons/fa';

export default function HairValueCampaign() {
  const valueCards = [
    {
      title: 'Environment',
      description: 'Sustainable and innovative waste management reducing landfill burden, littering and waste burning.',
      stats: [
        { value: 4, suffix: ' tons', description: 'Hair waste diverted from landfills' },
        { value: 12, suffix: ' tons', description: 'CO₂ emissions prevented' }
      ],
      Icon: FaLeaf,
      image: "/Images/envi.webp",
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      title: 'Community',
      description: 'Creating new opportunities and empowering local communities',
      stats: [
        { value: 350, suffix: '+', description: 'People earning sustainable income' },
        { value: 25, suffix: '+', description: 'Collection centers established' }
      ],
      Icon: FaPeopleCarry,
      image: "/Images/nywele.webp",
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Agriculture',
      description: 'Enhancing agricultural productivity with organic fertilizer',
      stats: [
        { value: 30, suffix: '%', description: 'Average crop yield increase' },
        { value: 1000, suffix: '+', description: 'Farmers benefited' }
      ],
      Icon: FaSeedling,
      image: "/Images/faida.webp",
      gradient: 'from-amber-500 to-orange-600'
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Card Header with Icon and Gradient */}
              <div className={`p-6 bg-gradient-to-r ${card.gradient} relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16">
                  <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm"></div>
                </div>
                <card.Icon className="h-12 w-12 text-white mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-white/90">{card.description}</p>
              </div>

              {/* Impact Statistics */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {card.stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.2 + i * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      viewport={{ once: true }}
                      className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                    >
                      <div className="text-3xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-gray-900 to-gray-600">
                        <CountUp
                          end={stat.value}
                          suffix={stat.suffix}
                          duration={2.5}
                          enableScrollSpy
                          scrollSpyOnce
                        />
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{stat.description}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Image Section */}
                <div className="mt-6 relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

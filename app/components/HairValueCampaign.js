"use client";

import Image from 'next/image';
import { LazyMotion, domAnimation, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { FaLeaf, FaPeopleCarry, FaSeedling } from 'react-icons/fa';

// Lazy load CountUp for non-critical animations
const CountUp = dynamic(() => import('react-countup'), { ssr: false });

function LoadingFallback() {
  return <div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>;
}

export default function HairValueCampaign() {
  const valueCards = [
    {
      title: 'Environment',
      description: 'Sustainable and innovative waste management reducing landfill burden, littering and waste burning.',
      stats: [
        { value: 4, suffix: ' tons', description: 'Hair waste diverted from landfills' }
      ],
      Icon: FaLeaf,
      image: "/Images/envi.webp",
      gradient: 'from-[#1f4074] to-[#50ad32]'
    },
    {
      title: 'Community',
      description: 'Creating new opportunities and empowering local communities',
      stats: [
        { value: 350, suffix: '+', description: 'People earning sustainable income' },
        { value: 3, suffix: '+', description: 'Collection centers established' }
      ],
      Icon: FaPeopleCarry,
      image: "/Images/nywele.webp",
      gradient: 'from-[#50ad32] to-[#1f4074]'
    },
    {
      title: 'Agriculture',
      description: 'Enhancing agricultural productivity with organic fertilizer',
      stats: [
        { value: 30, suffix: '%', description: 'Average crop yield increase' },
        { value: 100, suffix: '+', description: 'Farmers benefited' }
      ],
      Icon: FaSeedling,
      image: "/Images/faida.webp",
      gradient: 'from-[#1f4074] via-[#50ad32] to-[#1f4074]'
    }
  ];

  return (
    <Suspense fallback={<LoadingFallback />}>
      <LazyMotion features={domAnimation}>
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1f4074] to-[#50ad32]">
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
              whileHover={{ y: -5 }}
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
                <div className={`${card.title === 'Environment' ? '' : 'grid grid-cols-2'} gap-4`}>
                  {card.stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                      transition={{ 
                        duration: 0.7, 
                        delay: index * 0.2 + i * 0.1,
                        type: "spring",
                        stiffness: 100,
                        bounce: 0.3
                      }}
                      viewport={{ once: true }}
                      className={`relative overflow-hidden rounded-xl shadow-lg 
                        bg-gradient-to-br from-white to-[#1f4074]/5
                        ${card.title === 'Environment' ? 'py-4 px-6' : 'p-6'}`}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: (index * 0.2 + i * 0.1) + 0.3 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                      >
                        <div className={`flex ${card.title === 'Environment' ? 'flex-row items-center gap-3' : 'flex-col items-center mb-2'}`}>
                          <div className={`font-bold text-[#1f4074] ${card.title === 'Environment' ? 'text-3xl md:text-4xl' : 'text-4xl md:text-5xl'}`}>
                            <CountUp
                              end={stat.value}
                              suffix={stat.suffix}
                              duration={2.5}
                              enableScrollSpy
                              scrollSpyOnce
                            />
                          </div>
                          <p className={`font-medium ${card.title === 'Environment' ? 'text-base text-[#1f4074]/80 m-0' : 'text-sm text-gray-800 text-center mt-1'}`}>
                            {stat.description}
                          </p>
                        </div>
                      </motion.div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full bg-white/30 blur-2xl"></div>
                      <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-20 h-20 rounded-full bg-white/30 blur-xl"></div>
                    </motion.div>
                  ))}
                </div>

                {/* Image Section */}
                <div className="mt-6 relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
        </LazyMotion>
      </Suspense>
    );
}

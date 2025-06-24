"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PatternBackground } from './BrandAnimate';

export default function DonateHairCTA() {
  const [activeTab, setActiveTab] = useState('donate');
  
  const tabVariants = {
    active: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    inactive: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <PatternBackground 
        position="left-0 top-0" 
        size="w-full h-full" 
        opacity={[0.02, 0.05, 0.02]} 
        animation="breathe" 
      />
      
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-brand-green-ultra-light to-white rounded-3xl shadow-custom overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Side */}
            <div className="md:w-2/5 relative h-60 md:h-auto">
              <Image
                src="/Images/Photos/BNK_0690.jpg"
                alt="Donate your hair"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-green/70 to-brand-green/40"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                  Make Your Hair <br /> Make a Difference
                </h2>
                <p className="text-white/90 text-center max-w-xs">
                  Your hair can help grow sustainable agriculture in Tanzania
                </p>
              </div>
            </div>
            
            {/* Content Side */}
            <div className="md:w-3/5 p-8 md:p-12">
              {/* Tabs */}
              <div className="flex border-b border-gray-200 mb-8">
                <button
                  className={`pb-4 px-4 text-lg font-medium relative ${
                    activeTab === 'donate' ? 'text-brand-green' : 'text-brand-black/60'
                  }`}
                  onClick={() => setActiveTab('donate')}
                >
                  Donate Hair
                  {activeTab === 'donate' && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-green"
                      layoutId="activeTab"
                    />
                  )}
                </button>
                <button
                  className={`pb-4 px-4 text-lg font-medium relative ${
                    activeTab === 'locations' ? 'text-brand-green' : 'text-brand-black/60'
                  }`}
                  onClick={() => setActiveTab('locations')}
                >
                  Drop-off Locations
                  {activeTab === 'locations' && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-green"
                      layoutId="activeTab"
                    />
                  )}
                </button>
              </div>
              
              {/* Tab Content */}
              <div className="relative min-h-[300px]">
                {/* Donate Tab */}
                <motion.div
                  className="absolute w-full"
                  variants={tabVariants}
                  animate={activeTab === 'donate' ? 'active' : 'inactive'}
                  initial="inactive"
                >
                  <h3 className="text-2xl font-bold text-brand-black mb-4">How to Donate</h3>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium text-brand-black">Collect Your Hair</h4>
                        <p className="text-brand-black/70">
                          Save hair cuttings from your salon or personal haircuts. Make sure it's clean and dry.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium text-brand-black">Package It</h4>
                        <p className="text-brand-black/70">
                          Place the hair in a clean, dry paper bag or envelope. Avoid plastic to prevent moisture buildup.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium text-brand-black">Drop It Off</h4>
                        <p className="text-brand-black/70">
                          Take your collected hair to the nearest drop-off location or contact us for pickup options.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <Link 
                    href="/contact"
                    className="inline-block px-8 py-4 bg-brand-green text-white font-semibold rounded-full shadow-btn hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Contact Us for Collection
                  </Link>
                </motion.div>
                
                {/* Locations Tab */}
                <motion.div
                  className="absolute w-full"
                  variants={tabVariants}
                  animate={activeTab === 'locations' ? 'active' : 'inactive'}
                  initial="inactive"
                >
                  <h3 className="text-2xl font-bold text-brand-black mb-4">Drop-off Locations</h3>
                  
                  <div className="space-y-6 mb-8">
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      <h4 className="font-medium text-brand-black">Arusha City</h4>
                      <p className="text-brand-black/70">PAPU Tower, 10th Floor, Arusha</p>
                      <p className="text-sm text-brand-green">Open Mon-Fri, 9am-5pm</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      <h4 className="font-medium text-brand-black">Hairvolution Salon</h4>
                      <p className="text-brand-black/70">123 Nyerere Road, Dar es Salaam</p>
                      <p className="text-sm text-brand-green">Open Daily, 10am-7pm</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      <h4 className="font-medium text-brand-black">Green Future Center</h4>
                      <p className="text-brand-black/70">45 Kilimanjaro Avenue, Moshi</p>
                      <p className="text-sm text-brand-green">Open Tue-Sat, 9am-4pm</p>
                    </div>
                  </div>
                  
                  <p className="text-brand-black/70 mb-6">
                    Don't see a location near you? Contact us to arrange pickup or discuss becoming a collection point.
                  </p>
                  
                  <Link 
                    href="/contact"
                    className="inline-block px-8 py-4 bg-brand-green text-white font-semibold rounded-full shadow-btn hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tagline */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold text-brand-black">
            <span className="text-brand-green">Cut It. Change It. Grow It.</span>
          </h3>
        </div>
      </div>
    </section>
  );
}

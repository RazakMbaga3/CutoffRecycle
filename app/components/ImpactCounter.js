"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ value, suffix, title, description, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.toString().replace(/,/g, ''));
      const duration = 2000; // animation duration in ms
      const increment = end / (duration / 16); // assuming 60fps
      
      // Don't start immediately - respect the delay
      const timer = setTimeout(() => {
        const counter = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(counter);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        
        return () => {
          clearInterval(counter);
        };
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay]);
  
  // Format number with commas
  const formattedCount = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  return (
    <motion.div 
      className="text-center p-8 bg-white rounded-3xl shadow-card"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: delay / 1000 }}
    >
      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-green mb-2">
        {formattedCount}{suffix}
      </h3>
      <h4 className="text-xl font-semibold text-brand-black mb-3">{title}</h4>
      <p className="text-brand-black/70">{description}</p>
    </motion.div>
  );
};

export default function ImpactCounter() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-6 bg-brand-green-ultra-light rounded-full text-brand-green font-medium text-sm mb-4 shadow-sm">Our Impact</span>
          <h2 className="text-4xl font-bold mb-4 text-brand-black">
            Making a <span className="text-brand-green relative inline-block">
              Difference
              <svg className="absolute -bottom-1 left-0 w-full h-2 text-brand-green/30" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0,5 C50,0 150,0 200,5 L200,8 L0,8 Z" fill="currentColor"></path>
              </svg>
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-brand-black/70 text-lg">
            Tracking our journey to create sustainable change in Tanzania
          </p>
        </div>
          <h2 className="text-4xl font-bold mb-4 text-brand-black" style={{textAlign:'center'}}>Hair Recycled</h2>
          <AnimatedCounter 
            value="15,250" 
            suffix="kg" 
            title="Total amount"
            description="Total amount of hair waste diverted from landfills" 
            delay={300}
          />
          <div style={{display:'flex',justifyContent:'space-evenly'}}>
          <AnimatedCounter 
            value="7,625" 
            suffix="kg" 
            title="Arusha, Tanzania" 
            delay={300}
          />
          <AnimatedCounter 
            value="7,625" 
            suffix="kg" 
            title="Dar es salaam, Tanzania" 
            delay={300}
          />
        </div>
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
          <AnimatedCounter 
            value="4,800" 
            suffix="kg" 
            title="Fertilizer Produced" 
            description="Organic fertilizer created from recycled hair waste"
            delay={300}
          />
          <AnimatedCounter 
            value="115" 
            suffix="" 
            title="Farms Reached" 
            description="Tanzanian farms using our sustainable solutions"
            delay={600}
          />
        </div>
        
        {/* Environmental Impact */}
        <div className="mt-16 pt-16 border-t border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-brand-black">Environmental Impact</h3>
            <p className="text-brand-black/70">The difference our recycling efforts are making</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl shadow-card p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-green/5 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-black">Waste Reduction</h4>
                    <p className="text-brand-black/70">Preventing pollution from improper disposal</p>
                  </div>
                </div>
                
                <div className="w-full bg-gray-100 rounded-full h-6 mb-6">
                  <motion.div 
                    className="bg-brand-green h-6 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                  >
                    <span className="px-4 text-white text-sm font-medium flex items-center h-full justify-end">75% reduction</span>
                  </motion.div>
                </div>
                
                <p className="text-brand-black/70">
                  Our efforts have reduced hair waste disposal in landfills by 75% in participating communities.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl shadow-card p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-green/5 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-black">Chemical Reduction</h4>
                    <p className="text-brand-black/70">Replacing chemical fertilizers with organic alternatives</p>
                  </div>
                </div>
                
                <div className="w-full bg-gray-100 rounded-full h-6 mb-6">
                  <motion.div 
                    className="bg-brand-green h-6 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "65%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                  >
                    <span className="px-4 text-white text-sm font-medium flex items-center h-full justify-end">65% reduction</span>
                  </motion.div>
                </div>
                
                <p className="text-brand-black/70">
                  Farmers using our products have reduced chemical fertilizer usage by an average of 65%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

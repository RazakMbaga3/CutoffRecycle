"use client";

import Image from 'next/image';
import Link from 'next/link';
import HeroSection from './components/HeroSection';
import BrandCard from './components/BrandCard';
import BrandPattern from './components/BrandPattern';

export default function Home() {
  // Core values data
  const coreValues = [
    {
      title: "Environmental Sustainability",
      description: "Reducing environmental pollution by diverting human hair waste from landfills and improper disposal methods.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Innovation",
      description: "Pioneering innovative solutions in hair waste recycling and organic fertilizer production.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Community Impact",
      description: "Creating positive environmental and economic impact in local communities through sustainable practices.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Transforming Waste Into Growth"
        subtitle="Creating an environmentally sustainable world through innovative hair waste recycling solutions that support agricultural development and environmental conservation."
        imageUrl="/Images/Photos/BNK_0555.jpg"
      />

      {/* Core Values Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <BrandPattern opacity={0.03} rotate={-5} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
              Our Core Values
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-brand-green to-brand-navy/50 rounded-full"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <BrandCard
                key={index}
                title={value.title}
                description={value.description}
                icon={value.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision & Mission Section */}
      <section className="py-24 bg-white relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-pattern-waves opacity-10"></div>
        
        {/* Top Curve */}
        <div className="absolute -top-1 left-0 w-full h-16 overflow-hidden">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 C150,120 350,30 500,0 L500,150 L0,150 Z" fill="white"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative mb-16">
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-brand-green/10 rounded-full blur-lg"></div>
                <h2 className="text-3xl font-bold text-brand-black mb-8 flex items-center relative">
                  <span className="w-16 h-2 bg-gradient-to-r from-brand-green to-transparent inline-block mr-4 rounded-full"></span>
                  Our Vision
                </h2>
                <div className="pl-6 border-l-2 border-brand-green/30">
                  <p className="text-lg text-brand-black/80 mb-6">
                    To create an environmentally sustainable world by fostering local solutions with a global impact.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-brand-green/10 rounded-full blur-lg"></div>
                <h2 className="text-3xl font-bold text-brand-black mb-8 flex items-center">
                  <span className="w-16 h-2 bg-gradient-to-r from-brand-green to-transparent inline-block mr-4 rounded-full"></span>
                  Our Mission
                </h2>
                <div className="pl-6 border-l-2 border-brand-green/30">
                  <p className="text-lg text-brand-black/80">
                    To create an environmentally sustainable waste management solution that supports agricultural 
                    development and environmental conservation.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-card transform hover:rotate-1 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 to-transparent z-10"></div>
                <Image
                  src="/Images/Photos/IMG_20241021_121637_661.jpg"
                  alt="Our mission in action"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-8 left-8 z-20 max-w-xs">
                  <div className="text-white text-xl font-semibold mb-2">Sustainable Solutions</div>
                  <div className="h-1 w-16 bg-brand-green mb-3 rounded-full"></div>
                  <p className="text-white/90 text-sm">Converting hair waste into valuable organic fertilizers for sustainable agriculture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Priorities Section */}
      <section className="py-24 bg-brand-green-ultra-light text-brand-black relative overflow-hidden">
        {/* Top Curve */}
        <div className="absolute -top-1 left-0 w-full h-16 overflow-hidden">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 C250,150 350,0 500,100 L500,150 L0,150 Z" fill="white"></path>
          </svg>
        </div>

        {/* Bottom Curve */}
        <div className="absolute -bottom-1 left-0 w-full h-16 overflow-hidden">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 C150,150 350,0 500,100 L500,0 L0,0 Z" fill="white"></path>
          </svg>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block py-1.5 px-6 bg-white/60 rounded-full text-brand-green font-medium text-sm mb-4 backdrop-blur-sm shadow-sm">What drives us</span>
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-brand-green relative inline-block">
                Priorities
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-brand-green/30" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0,5 C50,0 150,0 200,5 L200,8 L0,8 Z" fill="currentColor"></path>
                </svg>
              </span>
            </h2>
            <p className="max-w-xl mx-auto text-brand-black/70 text-lg">
              We focus on creating sustainable solutions that benefit both the environment and communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Priority 1 */}
            <div className="bg-white p-10 rounded-3xl border border-brand-green/10 hover:border-brand-green/30 transition-all duration-300 shadow-card hover:shadow-lg transform hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 bg-brand-green/5 rounded-full blur-2xl group-hover:bg-brand-green/10 transition-colors duration-300"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-brand-green/80 text-white rounded-2xl flex items-center justify-center mb-8 shadow-md transform group-hover:rotate-3 transition-transform duration-300">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-black group-hover:text-brand-green transition-colors duration-300">Environmental Sustainability</h3>
              <p className="text-brand-black/80">
                Reducing environmental pollution by diverting human hair waste from landfills and improper disposal methods.
              </p>
            </div>

            {/* Priority 2 */}
            <div className="bg-white p-10 rounded-3xl border border-brand-green/10 hover:border-brand-green/30 transition-all duration-300 shadow-card hover:shadow-lg transform hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 bg-brand-green/5 rounded-full blur-2xl group-hover:bg-brand-green/10 transition-colors duration-300"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-brand-green/80 text-white rounded-2xl flex items-center justify-center mb-8 shadow-md transform group-hover:rotate-3 transition-transform duration-300">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-black group-hover:text-brand-green transition-colors duration-300">Agricultural Improvement</h3>
              <p className="text-brand-black/80">
                Providing affordable and effective organic fertilizers to small-scale farmers to enhance soil health and crop yields.
              </p>
            </div>

            {/* Priority 3 */}
            <div className="bg-white p-10 rounded-3xl border border-brand-green/10 hover:border-brand-green/30 transition-all duration-300 shadow-card hover:shadow-lg transform hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 bg-brand-green/5 rounded-full blur-2xl group-hover:bg-brand-green/10 transition-colors duration-300"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-brand-green/80 text-white rounded-2xl flex items-center justify-center mb-8 shadow-md transform group-hover:rotate-3 transition-transform duration-300">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-black group-hover:text-brand-green transition-colors duration-300">Economic Empowerment</h3>
              <p className="text-brand-black/80">
                Creating job opportunities for Tanzanian locals in various sectors related to waste management and organic fertilizer production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-white relative">
        {/* Decorative Elements */}
        <div className="absolute left-0 top-1/4 w-64 h-64 bg-circle-pattern bg-[length:40px_40px] opacity-10 -z-10"></div>
        <div className="absolute right-0 bottom-1/3 w-64 h-64 bg-circle-pattern bg-[length:40px_40px] opacity-10 -z-10"></div>
        
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <span className="inline-block py-1.5 px-6 bg-brand-green-ultra-light rounded-full text-brand-green font-medium text-sm mb-4 shadow-sm">Sustainable Solutions</span>
            <h2 className="text-4xl font-bold mb-4 text-brand-black">
              Our <span className="text-brand-green relative inline-block">
                Products
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-brand-green/30" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0,5 C50,0 150,0 200,5 L200,8 L0,8 Z" fill="currentColor"></path>
                </svg>
              </span>
            </h2>
            <p className="max-w-xl mx-auto text-brand-black/70 text-lg">
              Innovative solutions created from recycled hair waste for sustainable agriculture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Product 1 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-custom-hover transition-all duration-300 group">
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/30 to-transparent z-10"></div>
                <Image 
                  src="/Images/PRODUCTS/Liquid Fertilizer PNG.png" 
                  alt="Liquid Fertilizer" 
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-brand-green z-20">
                  Bestseller
                </div>
              </div>
              <div className="p-8 border-t border-gray-100">
                <h3 className="text-2xl font-bold mb-3 text-brand-black group-hover:text-brand-green transition-colors duration-300">Liquid Fertilizer</h3>
                <p className="text-brand-black/70 mb-6">
                  Our organic liquid fertilizer enhances plant growth and soil health with natural nutrients.
                </p>
                <div className="flex justify-between items-center">
                  <Link 
                    href="/products/liquid-fertilizer"
                    className="text-brand-green font-semibold flex items-center group-hover:underline"
                  >
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-custom-hover transition-all duration-300 group">
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/30 to-transparent z-10"></div>
                <Image 
                  src="/Images/PRODUCTS/Nutrified Organic Soil PNG.png" 
                  alt="Nutrified Organic Soil" 
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 border-t border-gray-100">
                <h3 className="text-2xl font-bold mb-3 text-brand-black group-hover:text-brand-green transition-colors duration-300">Nutrified Organic Soil</h3>
                <p className="text-brand-black/70 mb-6">
                  Premium organic soil enriched with nutrients for better crop yields and healthier plants.
                </p>
                <div className="flex justify-between items-center">
                  <Link 
                    href="/products/organic-soil"
                    className="text-brand-green font-semibold flex items-center group-hover:underline"
                  >
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-custom-hover transition-all duration-300 group">
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/30 to-transparent z-10"></div>
                <Image 
                  src="/Images/Photos/Production.png" 
                  alt="Recycled Hair Products" 
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-brand-green z-20">
                  Custom
                </div>
              </div>
              <div className="p-8 border-t border-gray-100">
                <h3 className="text-2xl font-bold mb-3 text-brand-black group-hover:text-brand-green transition-colors duration-300">Custom Solutions</h3>
                <p className="text-brand-black/70 mb-6">
                  Tailored recycling solutions for your specific agricultural needs and environmental goals.
                </p>
                <div className="flex justify-between items-center">
                  <Link 
                    href="/products/custom-solutions"
                    className="text-brand-green font-semibold flex items-center group-hover:underline"
                  >
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 relative overflow-hidden">
        {/* Background with curved top */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green-ultra-light to-white -z-10">
          <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
        </div>
        
        {/* Top Curve */}
        <div className="absolute -top-1 left-0 w-full h-20 overflow-hidden">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,150 C150,50 350,50 500,150 L500,0 L0,0 Z" fill="white"></path>
          </svg>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-brand-green/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-green/5 blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-10 shadow-custom relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-brand-green/10 blur-xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-brand-green/10 blur-xl translate-y-1/2 -translate-x-1/2"></div>
            
            <h2 className="text-3xl font-bold mb-4">Ready to Make a <span className="text-brand-green">Sustainable Impact</span>?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-brand-black/80">
              Join us in our mission to create environmentally sustainable waste management solutions
              that benefit both agriculture and the environment.
            </p>
            <div className="flex justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-brand-green to-brand-green/90 text-white font-semibold rounded-xl shadow-btn hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center"
              >
                Contact Us Today
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import EnhancedHeroSection from './components/EnhancedHeroSection';

// Dynamically import non-critical components
const BrandCard = dynamic(() => import('./components/BrandCard'));
const BrandPattern = dynamic(() => import('./components/BrandPattern'));
const HowItWorksAnimation = dynamic(() => import('./components/HowItWorksAnimation'), {
  loading: () => <div className="min-h-[600px] bg-gray-50 animate-pulse" />
});
const HairValueCampaign = dynamic(() => import('./components/HairValueCampaign'), {
  loading: () => <div className="min-h-[400px] bg-gray-50 animate-pulse" />
});
const FarmerTestimonials = dynamic(() => import('./components/FarmerTestimonials'), {
  loading: () => <div className="min-h-[400px] bg-gray-50 animate-pulse" />
});
const DonateHairCTA = dynamic(() => import('./components/DonateHairCTA'));
const HomeFAQ = dynamic(() => import('./components/HomeFAQ'));
const PartnerLogos = dynamic(() => import('./components/PartnerLogos'), {
  loading: () => <div className="min-h-[300px] bg-gray-50 animate-pulse" />
});

export default function Home() {
  
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Enhanced Hero Section */}
      <EnhancedHeroSection />

      {/* Updates Banner */}
      <section className="relative h-[180px] md:h-[200px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/new/banner.webp"
            alt="Latest Updates Banner"
            fill
            priority
            sizes="100vw"
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRwcHR0dHR4eHR0dHR4dHR0dHR0dHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR4eHh0dHR4eHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            className="object-cover object-center"
          />
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between h-full gap-4">
            <div className="flex flex-col md:flex-1">
              <h3 className="text-white font-bold text-2xl md:text-3xl mb-2 text-center md:text-left">
                You Can Now order Faster on WhatsApp
              </h3>
            </div>
            
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-white/95 hover:bg-white text-brand-green px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 shadow-lg hover:scale-105 group whitespace-nowrap mt-4 md:mt-0"
            >
              Shop Now
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Animation */}
      <HowItWorksAnimation />
      
      {/* Hair Has Value Campaign */}
      <HairValueCampaign />

      {/* Partner Logos */}
      <PartnerLogos />

      {/* Farmer Testimonials */}
      <FarmerTestimonials />
      
      {/* Donate Hair CTA */}
      <DonateHairCTA />

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

      {/* FAQ Section */}
      <HomeFAQ />

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
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-brand-green to-brand-green/90 text-white font-semibold rounded-xl shadow-btn hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center"
              >
                Contact Us Today
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link 
                href="/products"
                className="px-8 py-4 bg-white border-2 border-brand-green text-brand-green font-semibold rounded-xl hover:bg-brand-green/5 transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center"
              >
                Explore Our Products
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

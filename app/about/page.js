import Image from "next/image";
import Link from "next/link";

export default function About() {
  const teamMembers = [
    {
      name: "David Denis",
      position: "Founder & CEO",
      bio: "David founded CutOff Recycle with a vision to create sustainable waste management solutions that support agricultural development.",
      image: "/Images/Photos/IMG_20241021_121702_350.jpg" 
    }
    // Add more team members as needed
  ];

  return (
    <div className="min-h-screen bg-brand-white font-mulish overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-brand-green-ultra-light to-white text-brand-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/Images/Photos/BNK_0715.jpg"
            alt="About CutOff Recycle"
            fill
            className="object-cover opacity-20 scale-105 animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-brand-green-ultra-light/70"></div>
        </div>
        
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-dot-pattern bg-[length:30px_30px] opacity-10"></div>
          {/* Animated Elements with improved positioning and effects */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-brand-green/30 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-brand-green/40 blur-2xl animate-float-delay"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full bg-brand-green/35 blur-xl animate-float-slow"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-28 h-28 rounded-full border border-brand-green/40 animate-spin-slow"></div>
        <div className="absolute bottom-20 left-20 w-36 h-36 rounded-full border border-brand-green/30 animate-spin-slow-reverse"></div>
        
        {/* Curved Border with enhanced wave effect */}
        <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,150 C150,30 350,120 500,150 L500,00 L0,0 Z" fill="white"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 h-full flex flex-col justify-center items-center relative z-10">
          <span className="inline-block py-1.5 px-6 bg-white/60 backdrop-blur-sm text-brand-green rounded-full text-sm font-medium mb-5 shadow-sm transform hover:scale-105 transition-all duration-300 border border-brand-green/10">Our Story</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-center text-brand-black animate-fade-in-up">
            About <span className="text-brand-green relative inline-block">
              Us
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-green/60" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0,5 C50,0 150,0 200,5 L200,8 L0,8 Z" fill="currentColor"></path>
              </svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl text-center mb-10 text-brand-black/80 animate-fade-in-up animation-delay-200">
            We collect and recycle human hair waste into organic fertilizers for sustainable agriculture
          </p>
            {/* Enhanced Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer">
            <span className="text-brand-black/60 text-sm mb-2 font-medium">Scroll</span>
            <div className="w-8 h-12 border-2 border-brand-green/50 rounded-full flex justify-center pt-2 backdrop-blur-sm">
              <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </section>      {/* Our Story Section with enhanced organic shapes and animation */}
      <section className="py-24 bg-white relative overflow-hidden">        {/* Enhanced Background Elements */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-brand-green/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-float-delay"></div>
        <div className="absolute inset-0 bg-pattern-waves opacity-10"></div>
        
        {/* Leaf-shaped decorative elements */}
        <div className="absolute top-40 left-10 w-24 h-24 bg-brand-green/25 rounded-tl-full rounded-bl-full rotate-45"></div>
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-brand-green/25 rounded-tr-full rounded-br-full -rotate-45"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative">                {/* Enhanced Image Decoration with organic shapes */}
                <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-brand-green/40 rounded-full transform rotate-12 animate-float-slow"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 border-2 border-brand-green/40 rounded-full transform -rotate-12 animate-float-delay"></div>
                <div className="absolute top-1/2 -left-4 w-16 h-16 bg-brand-green/30 rounded-full blur-xl"></div>
                
                <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-custom transform hover:rotate-1 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent z-10"></div>
                  
                  {/* Decorative leaf shape overlay */}
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-brand-green/30 rounded-tl-full z-0 blur-xl"></div>
                  
                  <Image
                    src="/Images/Photos/BNK_0542.jpg"
                    alt="Our story"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">              <div className="relative mb-16">
                {/* Enhanced decorative elements */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-green/30 rounded-full blur-lg"></div>
                <span className="inline-block py-1.5 px-6 bg-brand-green-ultra-light text-brand-green rounded-full text-sm font-medium mb-5 shadow-sm border border-brand-green/30">Since 2018</span>                <h2 className="text-3xl font-bold text-brand-black mb-8 flex items-center relative">
                  <span className="w-16 h-2 bg-gradient-to-r from-brand-green to-transparent inline-block mr-4 rounded-full"></span>
                  Our Story
                </h2>
                <div className="pl-6 border-l-2 border-brand-green/50">
                  <p className="text-lg text-brand-black/80 mb-6 leading-relaxed">
                    CutOff Recycle started as a school project and has grown into a fully-fledged business focused on sustainable waste management solutions. 
                  </p>
                  <p className="text-lg text-brand-black/80 mb-6 leading-relaxed">
                    Our journey began when we recognized the environmental problem of human hair waste disposal and its potential as an organic resource for agriculture.
                  </p>
                  <p className="text-lg text-brand-black/80 leading-relaxed">
                    Today, we collect hair waste from salons across Tanzania and transform it into organic fertilizers that help small-scale farmers improve soil health and crop yields while reducing environmental pollution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* Vision & Mission Section with enhanced curved sections and organic elements */}
      <section className="py-24 bg-brand-green-ultra-light text-brand-black relative overflow-hidden">
        {/* Enhanced Top Curve with more organic wave shape */}
        <div className="absolute -top-1 left-0 w-full h-16 overflow-hidden">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 C150,100 350,0 500,60 L500,150 L0,150 Z" fill="white"></path>
          </svg>
        </div>

        {/* Enhanced Bottom Curve with more organic wave shape */}
        <div className="absolute -bottom-1 left-0 w-full h-16 overflow-hidden">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 C100,90 350,20 500,70 L500,0 L0,0 Z" fill="white"></path>
          </svg>
        </div>
          {/* Enhanced Decorative Elements with floating animation */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-green/25 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-brand-green/20 rounded-full blur-3xl animate-float-delay"></div>
        
        {/* Nature-inspired decorative elements */}
        <div className="absolute top-1/2 left-20 w-24 h-24 bg-brand-green/30 rounded-tr-full rounded-tl-full rotate-45 blur-lg"></div>
        <div className="absolute bottom-1/3 right-20 w-20 h-20 bg-brand-green/30 rounded-bl-full rounded-br-full -rotate-45 blur-lg"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">          <div className="text-center mb-16">
            <span className="inline-block py-1.5 px-6 bg-white/70 rounded-full text-brand-green font-medium text-sm mb-4 backdrop-blur-sm shadow-sm border border-brand-green/30 transform hover:scale-105 transition-all duration-300">Our Purpose</span>
            <h2 className="text-4xl font-bold mb-4 relative inline-block">
              Vision & <span className="text-brand-green relative inline-block">
                Mission
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-brand-green/60" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0,5 C50,0 150,0 200,5 L200,8 L0,8 Z" fill="currentColor"></path>
                </svg>
              </span>
              
              {/* Decorative leaf-like element */}
              <div className="absolute -right-12 -top-8 w-10 h-10 bg-brand-green/40 rounded-tl-full rounded-tr-full rotate-45 blur-sm"></div>
            </h2>
            <p className="max-w-xl mx-auto text-brand-black/70 text-lg mt-6">
              The principles that guide our actions and decisions as we work toward a sustainable future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">            {/* Vision - Enhanced card with more organic styling */}
            <div className="bg-white p-10 rounded-3xl border border-brand-green/25 hover:border-brand-green/50 transition-all duration-500 shadow-custom hover:shadow-lg transform hover:-translate-y-2 group relative overflow-hidden">
              {/* Enhanced glow effect */}
              <div className="absolute top-0 right-0 h-40 w-40 bg-brand-green/15 rounded-full blur-2xl group-hover:bg-brand-green/30 transition-colors duration-500"></div>
              <div className="absolute -bottom-10 -left-10 h-40 w-40 bg-brand-green/15 rounded-full blur-2xl group-hover:bg-brand-green/25 transition-colors duration-500"></div>
              
              {/* Leaf-shaped decorative element */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-brand-green/15 rounded-tl-full transform rotate-90 group-hover:bg-brand-green/25 transition-colors duration-500"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-brand-green/80 text-white rounded-2xl flex items-center justify-center mb-8 shadow-md transform group-hover:rotate-6 transition-transform duration-500 relative">
                <div className="absolute -inset-0.5 bg-brand-green/40 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500"></div>
                <div className="relative z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-brand-black group-hover:text-brand-green transition-colors duration-300">Our Vision</h3>              <p className="text-brand-black/80 group-hover:text-brand-black/90 transition-colors duration-300">
                To create an environmentally sustainable world by fostering local solutions with a global impact.
              </p>
              <div className="mt-6 w-12 h-1 bg-brand-green/50 rounded-full group-hover:w-20 transition-all duration-500"></div>
            </div>            {/* Mission - Enhanced card with more organic styling */}
            <div className="bg-white p-10 rounded-3xl border border-brand-green/25 hover:border-brand-green/50 transition-all duration-500 shadow-custom hover:shadow-lg transform hover:-translate-y-2 group relative overflow-hidden">
              {/* Enhanced glow effect */}
              <div className="absolute top-0 right-0 h-40 w-40 bg-brand-green/15 rounded-full blur-2xl group-hover:bg-brand-green/30 transition-colors duration-500"></div>
              <div className="absolute -bottom-10 -left-10 h-40 w-40 bg-brand-green/15 rounded-full blur-2xl group-hover:bg-brand-green/25 transition-colors duration-500"></div>
              
              {/* Leaf-shaped decorative element */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-brand-green/15 rounded-tl-full transform rotate-90 group-hover:bg-brand-green/25 transition-colors duration-500"></div>
              
              <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-brand-green/80 text-white rounded-2xl flex items-center justify-center mb-8 shadow-md transform group-hover:rotate-6 transition-transform duration-500 relative">
                <div className="absolute -inset-0.5 bg-brand-green/40 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500"></div>
                <div className="relative z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-brand-black group-hover:text-brand-green transition-colors duration-300">Our Mission</h3>              <p className="text-brand-black/80 group-hover:text-brand-black/90 transition-colors duration-300">
                To create an environmentally sustainable waste management solution that supports agricultural development and environmental conservation.
              </p>
              <div className="mt-6 w-12 h-1 bg-brand-green/50 rounded-full group-hover:w-20 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-circle-pattern opacity-5 bg-[length:40px_40px]"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-leaf-pattern opacity-5 rotate-45"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-leaf-pattern opacity-5 -rotate-45"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">          <div className="text-center mb-16">
            <span className="inline-block py-1.5 px-6 bg-brand-green-ultra-light rounded-full text-brand-green font-medium text-sm mb-4 shadow-sm">What Drives Us</span>
            <h2 className="text-4xl font-bold mb-4 text-brand-black">
              Our <span className="text-brand-green relative inline-block">
                Core Values
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-brand-green/60" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0,5 C50,0 150,0 200,5 L200,8 L0,8 Z" fill="currentColor"></path>
                </svg>
              </span>
            </h2>
            <p className="max-w-xl mx-auto text-brand-black/70 text-lg">
              These principles guide our actions and decisions as we work toward a sustainable future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">            {/* Value 1 */}
            <div className="bg-white p-10 rounded-3xl border border-brand-green/25 hover:border-brand-green/50 transition-all duration-300 shadow-card hover:shadow-lg transform hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 bg-brand-green/15 rounded-full blur-2xl group-hover:bg-brand-green/25 transition-colors duration-300"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-brand-green/80 text-white rounded-2xl flex items-center justify-center mb-8 shadow-md transform group-hover:rotate-3 transition-transform duration-300 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-black group-hover:text-brand-green transition-colors duration-300 text-center">Environmental Sustainability</h3>              <p className="text-brand-black/70 group-hover:text-brand-black/90 transition-colors duration-300 text-center">
                We are committed to reducing environmental pollution through our sustainable waste management solutions.
              </p>
              <div className="mt-6 w-12 h-1 bg-brand-green/50 rounded-full mx-auto group-hover:w-20 transition-all duration-300"></div>
            </div>            {/* Value 2 */}
            <div className="bg-white p-10 rounded-3xl border border-brand-green/25 hover:border-brand-green/50 transition-all duration-300 shadow-card hover:shadow-lg transform hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 bg-brand-green/15 rounded-full blur-2xl group-hover:bg-brand-green/25 transition-colors duration-300"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-brand-green/80 text-white rounded-2xl flex items-center justify-center mb-8 shadow-md transform group-hover:rotate-3 transition-transform duration-300 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-black group-hover:text-brand-green transition-colors duration-300 text-center">Innovation</h3>
              <p className="text-brand-black/70 group-hover:text-brand-black/90 transition-colors duration-300 text-center">
                We continuously seek innovative ways to transform waste into valuable resources that benefit our environment and communities.
              </p>
              <div className="mt-6 w-12 h-1 bg-brand-green/50 rounded-full mx-auto group-hover:w-20 transition-all duration-300"></div>
            </div>            {/* Value 3 */}
            <div className="bg-white p-10 rounded-3xl border border-brand-green/25 hover:border-brand-green/50 transition-all duration-300 shadow-card hover:shadow-lg transform hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 bg-brand-green/15 rounded-full blur-2xl group-hover:bg-brand-green/25 transition-colors duration-300"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-brand-green/80 text-white rounded-2xl flex items-center justify-center mb-8 shadow-md transform group-hover:rotate-3 transition-transform duration-300 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-black group-hover:text-brand-green transition-colors duration-300 text-center">Community Impact</h3>
              <p className="text-brand-black/70 group-hover:text-brand-black/90 transition-colors duration-300 text-center">
                We prioritize creating positive change in local communities through sustainable practices and economic opportunities.
              </p>
              <div className="mt-6 w-12 h-1 bg-brand-green/50 rounded-full mx-auto group-hover:w-20 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </section>
        {/* Team Section with enhanced design elements */}
      <section className="py-24 bg-brand-green-ultra-light relative overflow-hidden">
        {/* Enhanced Top Curve with more organic wave shape */}
        <div className="absolute -top-1 left-0 w-full h-16 overflow-hidden">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 C150,120 350,30 500,0 L500,150 L0,150 Z" fill="white"></path>
          </svg>
        </div>
        
        {/* Enhanced Bottom Curve with more organic wave shape */}
        <div className="absolute -bottom-1 left-0 w-full h-16 overflow-hidden">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,150 C150,30 350,120 500,150 L500,00 L0,0 Z" fill="white"></path>
          </svg>
        </div>
          {/* Enhanced Background pattern */}
        <div className="absolute inset-0 bg-circle-pattern opacity-10"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-green/25 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-brand-green/20 rounded-full blur-3xl animate-float-delay"></div>
        
        {/* Decorative leaf elements */}
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-brand-green/25 rounded-tr-full rounded-br-full rotate-45 blur-md"></div>
        <div className="absolute bottom-1/3 right-10 w-16 h-16 bg-brand-green/25 rounded-tl-full rounded-bl-full -rotate-45 blur-md"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">            <span className="inline-block py-1.5 px-6 bg-white/70 backdrop-blur-sm rounded-full text-brand-green font-medium text-sm mb-4 shadow-sm border border-brand-green/30 transform hover:scale-105 transition-all duration-300">Our People</span>
            <h2 className="text-4xl font-bold mb-4 relative inline-block">
              Meet Our <span className="text-brand-green relative inline-block">
                Team
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-brand-green/60" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0,5 C50,0 150,0 200,5 L200,8 L0,8 Z" fill="currentColor"></path>
                </svg>
              </span>
              
              {/* Decorative element */}
              <div className="absolute -right-10 -top-6 w-8 h-8 bg-brand-green/40 rounded-full blur-sm"></div>
            </h2>
            <p className="max-w-xl mx-auto text-brand-black/70 text-lg mt-6">
              The passionate individuals behind CutOff Recycle's mission and vision
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative mx-auto mb-6 transition-all duration-500">                  {/* Enhanced profile image with decorative elements */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-brand-green/50 to-brand-green/30 rounded-full transform scale-105 group-hover:scale-110 transition-transform duration-500 blur-md"></div>
                  
                  {/* Additional decorative circle */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full border-2 border-brand-green/40 animate-spin-slow"></div>
                  <div className="absolute -bottom-4 -left-4 w-10 h-10 rounded-full border-2 border-brand-green/40 animate-spin-slow-reverse"></div>
                  
                  <div className="relative w-56 h-56 rounded-full overflow-hidden mx-auto border-4 border-white shadow-xl">
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-green/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Enhanced social media icons */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex space-x-2">
                    <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-brand-green shadow-md hover:bg-brand-green hover:text-white transition-colors duration-300 transform hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-brand-green shadow-md hover:bg-brand-green hover:text-white transition-colors duration-300 transform hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-brand-black group-hover:text-brand-green transition-colors duration-300 relative inline-block">
                  {member.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green/50 group-hover:w-full transition-all duration-500 rounded-full"></span>
                </h3>
                <p className="text-brand-green mb-3 font-medium">{member.position}</p>
                <p className="text-brand-black/70 max-w-xs mx-auto leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
        {/* Join Us CTA - Enhanced with more organic shapes and decorative elements */}
      <section className="py-24 bg-white relative overflow-hidden">        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-dot-pattern opacity-10 bg-[length:30px_30px]"></div>
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-brand-green/25 blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-brand-green/25 blur-3xl animate-float-delay"></div>
        
        {/* Leaf-shaped decorative elements */}
        <div className="absolute top-1/3 left-10 w-20 h-20 bg-brand-green/20 rounded-tr-full rounded-br-full rotate-45 blur-md"></div>
        <div className="absolute bottom-1/3 right-10 w-24 h-24 bg-brand-green/20 rounded-tl-full rounded-bl-full -rotate-45 blur-md"></div>
        
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-10 shadow-custom relative overflow-hidden">            {/* Enhanced glow effects */}
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-brand-green/25 blur-xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-brand-green/25 blur-xl translate-y-1/2 -translate-x-1/2"></div>
            
            {/* Additional decorative elements */}
            <div className="absolute top-10 left-10 w-16 h-16 border border-brand-green/40 rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 border border-brand-green/40 rounded-full animate-spin-slow-reverse"></div>
            <div className="absolute right-20 top-20 w-12 h-12 bg-brand-green/20 rounded-tl-full rotate-45 blur-sm"></div>
              <span className="inline-block px-4 py-1 bg-brand-green/30 rounded-full text-sm font-medium mb-6 border border-brand-green/20 transform hover:scale-105 transition-all duration-300">Join Our Movement</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
              Be Part of Our <span className="text-brand-green relative inline-block">
                Green Mission
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-brand-green/60" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0,5 C50,0 150,0 200,5 L200,8 L0,8 Z" fill="currentColor"></path>
                </svg>
              </span>
              
              {/* Decorative element */}
              <div className="absolute -right-8 -top-6 w-8 h-8 bg-brand-green/25 rounded-full blur-sm"></div>
            </h2>
            <p className="text-xl text-brand-black/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Help us create a greener, more sustainable future by partnering with CutOff Recycle. Together, we can make a meaningful difference for our planet.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-brand-green to-brand-green/90 text-white font-semibold rounded-xl shadow-btn hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 inline-flex items-center group relative overflow-hidden"
              >
                {/* Button glow effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></span>
                
                <span className="relative z-10">Get Involved</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 relative z-10 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>              <Link 
                href="/products"
                className="px-8 py-4 bg-white bg-opacity-50 backdrop-blur-sm border-2 border-brand-green/30 text-brand-green font-semibold rounded-xl hover:bg-brand-green/15 transition-all duration-500 transform hover:translate-y-[-2px] group relative overflow-hidden"
              >
                {/* Button glow effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-brand-green/0 via-brand-green/15 to-brand-green/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></span>
                
                <span className="relative z-10">Explore Our Products</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

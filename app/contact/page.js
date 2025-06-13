import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      content: "+255 742 290 884",
      link: "tel:+255742290884"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      content: "info@cutoffrecycle.co.tz",
      link: "mailto:info@cutoffrecycle.co.tz"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Address",
      content: "PAPU Tower 10th Floor, Arusha, Tanzania",
      link: "https://maps.google.com/?q=PAPU+Tower+Arusha+Tanzania"
    }
  ];

  const socialMedia = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/cutoffrecycle/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      )
    },
    {
      name: "Instagram",
      url: "https://instagram.com/cutoffrecycle",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/CutOffRecycle/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      )
    },
    {
      name: "WhatsApp",
      url: "https://api.whatsapp.com/send?phone=255742290884",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      )
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@cutoffrecycle",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-brand-white font-mulish overflow-x-hidden">
      {/* Enhanced Hero Section with more organic shapes and animations */}
      <section className="relative h-[70vh] bg-gradient-to-r from-brand-green-ultra-light to-white text-brand-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/Images/Photos/BNK_0704.jpg"
            alt="Contact CutOff Recycle"
            fill
            className="object-cover opacity-20 scale-105 animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-brand-green-ultra-light/70"></div>
        </div>
        
        {/* Enhanced Background Pattern with overlapping patterns */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-pattern-waves opacity-5"></div>
          {/* Enhanced Animated Elements with different sizes and animations */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-brand-green/30 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-brand-green/40 blur-2xl animate-float-delay"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full bg-brand-green/35 blur-xl animate-float-slow"></div>
        
        {/* Added decorative circles */}
        <div className="absolute top-20 right-20 w-28 h-28 rounded-full border border-brand-green/40 animate-spin-slow"></div>
        <div className="absolute bottom-20 left-20 w-36 h-36 rounded-full border border-brand-green/30 animate-spin-slow-reverse"></div>
        
        {/* Added leaf-shaped decorative elements */}
        <div className="absolute top-1/2 right-10 w-20 h-20 bg-brand-green/25 rounded-tl-full rounded-tr-full rotate-45 blur-md"></div>
        <div className="absolute bottom-1/3 left-10 w-16 h-16 bg-brand-green/25 rounded-bl-full rounded-br-full -rotate-45 blur-md"></div>
        
        {/* Curved bottom border */}
        <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,150 C150,50 350,100 500,150 L500,00 L0,0 Z" fill="white"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 h-full flex flex-col justify-center items-center relative z-10">
          <div className="w-full max-w-4xl mx-auto text-center">
            <span className="inline-block py-1.5 px-6 rounded-full bg-brand-green text-white text-sm md:text-base font-semibold mb-4 backdrop-blur-sm animate-fade-in border border-brand-green/30 shadow-glow transform hover:scale-105 transition-all duration-300">Get In Touch</span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-slide-up text-brand-black" style={{textShadow: '0 4px 10px rgba(0,0,0,0.05)'}}>
              Contact <span className="text-brand-green relative inline-block">
                Us
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-green/30" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0,5 C50,0 150,0 200,5 L200,8 L0,8 Z" fill="currentColor"></path>
                </svg>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-brand-black/80 leading-relaxed animate-slide-up" style={{animationDelay: '0.1s'}}>
              Get in touch with our team for inquiries, partnerships, or to learn more about our innovative products
            </p>
          </div>
            {/* Enhanced scroll indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer">
            <span className="text-brand-black/60 text-sm mb-2 font-medium">Scroll</span>
            <div className="w-8 h-12 border-2 border-brand-green/50 rounded-full flex justify-center pt-2 backdrop-blur-sm">
              <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </section>      {/* Enhanced Contact Information Section with more organic styling */}
      <section className="py-24 bg-brand-white relative overflow-hidden">        {/* Enhanced Background Elements with floating animations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-float-delay"></div>
        <div className="absolute inset-0 bg-circle-pattern opacity-10 bg-[length:40px_40px]"></div>
        
        {/* Added leaf-shaped decorative elements */}
        <div className="absolute top-1/3 right-10 w-24 h-24 bg-brand-green/25 rounded-tl-full rounded-bl-full rotate-45 blur-md"></div>
        <div className="absolute bottom-1/3 left-10 w-20 h-20 bg-brand-green/25 rounded-tr-full rounded-br-full -rotate-45 blur-md"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>              <div className="mb-12 relative">
                {/* Added decorative element */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-green/30 rounded-full blur-lg"></div>
                
                <span className="inline-block py-1.5 px-6 rounded-full bg-brand-green/20 text-brand-green text-sm font-medium mb-4 border border-brand-green/30 shadow-sm transform hover:scale-105 transition-all duration-300">Reach Out</span>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6 relative">
                  Get in <span className="text-brand-green relative inline-block">
                    Touch
                    <svg className="absolute -bottom-1 left-0 w-full h-2 text-brand-green/60" viewBox="0 0 200 8" preserveAspectRatio="none">
                      <path d="M0,5 C50,0 150,0 200,5 L200,8 L0,8 Z" fill="currentColor"></path>
                    </svg>
                  </span>
                </h2>
                <p className="text-lg text-brand-black/70 max-w-xl leading-relaxed mb-8">
                  Have questions about our products or services? Looking to partner with us? Our team is ready to help you.
                </p>
              </div>
              
              <div className="space-y-8">
                {contactInfo.map((item, index) => (                  <div key={index} className="group flex items-start bg-white p-6 rounded-2xl shadow-custom hover:shadow-custom-hover transition-all duration-500 transform hover:-translate-y-1 border border-brand-green/15 hover:border-brand-green/40 relative overflow-hidden">
                    {/* Added glow effect */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-brand-green/15 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-green/30 to-brand-green/20 text-brand-green flex items-center justify-center mr-5 group-hover:bg-brand-green group-hover:text-white transition-colors duration-500 transform group-hover:rotate-6 relative">
                      {/* Icon glow effect */}
                      <div className="absolute inset-0 bg-brand-green/40 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-brand-black mb-1 group-hover:text-brand-green transition-colors duration-300">{item.title}</h3>
                      <a 
                        href={item.link} 
                        className="text-brand-black/70 hover:text-brand-green transition-colors duration-300 font-medium relative inline-block group-hover:after:w-full after:w-0 after:h-0.5 after:bg-brand-green/30 after:absolute after:left-0 after:-bottom-0.5 after:transition-all after:duration-300"
                      >
                        {item.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <h3 className="font-semibold text-lg text-brand-black mb-5 relative inline-block">
                  Connect With Us
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-green/30 rounded-full"></span>
                </h3>
                <div className="flex flex-wrap gap-4">
                  {socialMedia.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white shadow-custom hover:shadow-custom-hover text-brand-green hover:bg-brand-green hover:text-white transition-all duration-300 flex items-center justify-center transform hover:-translate-y-1 relative group"
                      aria-label={social.name}
                    >
                      {/* Icon glow effect */}
                      <div className="absolute inset-0 bg-brand-green/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
              {/* Enhanced Contact Form with more organic styling */}
            <div className="bg-white rounded-3xl shadow-custom p-8 md:p-10 border border-brand-green/15 hover:border-brand-green/30 transition-all duration-500 relative overflow-hidden group">
              {/* Enhanced Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-green/15 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-green/15 rounded-full blur-xl translate-x-1/2 translate-y-1/2"></div>
              
              {/* Added leaf-shaped elements */}
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-brand-green/15 rounded-tl-full transform rotate-90 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-10 left-10 w-12 h-12 bg-brand-green/15 rounded-tr-full transform -rotate-90 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">                <div className="mb-8">
                  <span className="inline-block py-1.5 px-6 rounded-full bg-brand-green/20 text-brand-green text-sm font-medium mb-4 border border-brand-green/30 shadow-sm transform hover:scale-105 transition-all duration-300">Write to Us</span>
                  <h2 className="text-3xl font-bold text-brand-black mb-4 relative">
                    Send a <span className="text-brand-green relative inline-block">
                      Message
                      <svg className="absolute -bottom-1 left-0 w-full h-2 text-brand-green/60" viewBox="0 0 200 8" preserveAspectRatio="none">
                        <path d="M0,5 C50,0 150,0 200,5 L200,8 L0,8 Z" fill="currentColor"></path>
                      </svg>
                    </span>
                  </h2>
                  <p className="text-brand-black/70">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brand-black mb-2">
                        Full Name
                      </label>                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/70 focus:border-transparent transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-black mb-2">
                        Email Address
                      </label>                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/70 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-brand-black mb-2">
                      Subject
                    </label>                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/70 focus:border-transparent transition-all duration-300"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-black mb-2">
                      Message
                    </label>                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/70 focus:border-transparent transition-all duration-300"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                    <button
                    type="submit"
                    className="w-full btn btn-lg btn-primary btn-icon-right"
                  >
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Enhanced Location Map Section with organic elements */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Top curved border */}
        <div className="absolute -top-1 left-0 w-full h-16 overflow-hidden">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 C150,100 350,0 500,60 L500,150 L0,150 Z" fill="white"></path>
          </svg>
        </div>
          {/* Enhanced Background Elements with animations */}
        <div className="absolute inset-0 bg-circle-pattern opacity-10 bg-[length:30px_30px] rotate-45"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/15 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/15 rounded-full blur-3xl animate-float-delay"></div>
        
        {/* Added leaf-shaped decorative elements */}
        <div className="absolute top-1/3 left-10 w-24 h-24 bg-brand-green/25 rounded-tr-full rounded-br-full rotate-45 blur-md"></div>
        <div className="absolute bottom-1/3 right-10 w-20 h-20 bg-brand-green/25 rounded-tl-full rounded-bl-full -rotate-45 blur-md"></div>
        
        {/* Added decorative spinning circles */}
        <div className="absolute top-1/4 right-1/4 w-28 h-28 rounded-full border border-brand-green/30 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 rounded-full border border-brand-green/30 animate-spin-slow-reverse"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">            <span className="inline-block py-1.5 px-6 rounded-full bg-brand-green/20 text-brand-green text-sm font-medium mb-4 border border-brand-green/30 shadow-sm transform hover:scale-105 transition-all duration-300">Visit Us</span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-black mb-6 relative inline-block">
              Our <span className="text-brand-green relative inline-block">
                Location
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-brand-green/60" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0,5 C50,0 150,0 200,5 L200,8 L0,8 Z" fill="currentColor"></path>
                </svg>
              </span>
              
              {/* Decorative element */}
              <div className="absolute -right-8 -top-6 w-8 h-8 bg-brand-green/25 rounded-full blur-sm"></div>
            </h2>
            <p className="text-lg text-brand-black/70 max-w-2xl mx-auto leading-relaxed">
              Find us at our office in Arusha, Tanzania where we're transforming hair waste into sustainable solutions
            </p>
          </div>
            <div className="bg-white p-5 rounded-3xl shadow-custom overflow-hidden transform hover:-translate-y-2 transition-all duration-500 relative group">
            {/* Border glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-green/10 via-brand-green/50 to-brand-green/10 rounded-3xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-1000"></div>
            
            <div className="w-full h-[500px] rounded-2xl overflow-hidden relative z-10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31636.965542725176!2d36.65382012269453!3d-3.3725566548513497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18371c88cc406885%3A0xa316299fdd82cb2!2sArusha%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1654758326618!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-1000"
              ></iframe>
              
              {/* Map overlay with leaf shape */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-b from-brand-green/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-t from-brand-green/20 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced Partnership CTA with organic shapes and flowing design */}
      <section className="py-24 bg-brand-green-ultra-light text-brand-black relative overflow-hidden">        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-pattern-waves opacity-15"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/15 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/15 rounded-full blur-3xl animate-float-delay"></div>
        
        {/* Added leaf-shaped decorative elements */}
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-brand-green/25 rounded-tr-full rounded-br-full rotate-45 blur-md"></div>
        <div className="absolute bottom-1/2 right-10 w-20 h-20 bg-brand-green/25 rounded-tl-full rounded-bl-full -rotate-45 blur-md"></div>
        
        {/* Added decorative spinning circles */}
        <div className="absolute top-20 right-20 w-24 h-24 rounded-full border border-brand-green/40 animate-spin-slow"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full border border-brand-green/30 animate-spin-slow-reverse"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">            <span className="inline-block py-1.5 px-6 rounded-full bg-brand-green/30 text-brand-green text-sm font-medium mb-6 backdrop-blur-sm border border-brand-green/30 shadow-sm transform hover:scale-105 transition-all duration-300">Join Our Mission</span>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-black">Become a <span className="text-brand-green relative inline-block">
              Partner
              <svg className="absolute -bottom-1 left-0 w-full h-2 text-brand-green/60" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0,5 C50,0 150,0 200,5 L200,8 L0,8 Z" fill="currentColor"></path>
              </svg>
            </span></h2>
            
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-brand-black/80 leading-relaxed">
              Join us in our mission to create environmentally sustainable waste management solutions that benefit agriculture and the environment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">              <Link 
                href="/contact"
                className="btn btn-md btn-primary btn-icon-right"
              >
                Partner With Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
                <a 
                href="https://wa.link/a7bngd"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border-2 border-brand-green/70 text-brand-green font-semibold rounded-full hover:bg-brand-green/10 transition-all duration-500 transform hover:-translate-y-1 flex items-center justify-center group relative overflow-hidden"
              >
                {/* Button glow effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-brand-green/0 via-brand-green/15 to-brand-green/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></span>
                
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="relative z-10">Contact via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

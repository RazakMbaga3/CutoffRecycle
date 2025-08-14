"use client";

import Image from "next/image";
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Initialize EmailJS with your public key
emailjs.init('hBNgCRi-ijh4flBkJ');

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const result = await emailjs.send(
        'service_4tr74vv',
        'template_y3t6f1x',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'info@cutoffrecycle.co.tz',
        }
      );

      if (result.status === 200) {
        setStatus({
          type: 'success',
          message: 'Thank you for your message. We will get back to you soon!'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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
      content: "SIDO, Azimio Industrial Estate, Unga Limited, Arusha, Tanzania",
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
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/new/environment.jpeg"
            alt="Environmental Impact"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-2 px-6 bg-brand-green/20 text-white text-sm font-medium rounded-full mb-6 backdrop-blur-sm border border-white/20">
              Contact Us
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in Touch
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Have questions about our sustainable solutions? We're here to help transform the future together.
          </motion.p>
        </div>
        
        {/* Subtle wave overlay */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 C16.6666667,66 33.3333333,98 50,98 C66.6666667,98 83.3333333,66 100,0 L100,100 L0,100 Z" fill="white" fillOpacity="0.1"/>
          </svg>
        </div>
        
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"/>
          </svg>
        </div>
      </section>
        
        {/* Enhanced Animated Elements with different sizes and animations */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-brand-green/30 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-brand-green/40 blur-2xl animate-float-delay"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full bg-brand-green/35 blur-xl animate-float-slow"></div>
        
        {/* Curved bottom border */}
        <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,150 C150,50 350,100 500,150 L500,00 L0,0 Z" fill="white"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 h-full flex flex-col justify-center items-center relative z-10">
          <div className="w-full max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center space-y-6"
            >
              <span className="inline-block py-2 px-8 rounded-full bg-brand-green text-white text-base font-semibold backdrop-blur-sm animate-fade-in border border-brand-green/30 shadow-glow transform hover:scale-105 transition-all duration-300">
                Get In Touch
              </span>
              
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-center text-brand-black max-w-4xl" 
                style={{
                  textShadow: '0 4px 10px rgba(0,0,0,0.05)',
                  lineHeight: '1.1'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Contact <span className="text-brand-green relative inline-block">
                  Us
                  <svg className="absolute -bottom-3 left-0 w-full h-3 text-brand-green/30" viewBox="0 0 200 8" preserveAspectRatio="none">
                    <path d="M0,5 C50,0 150,0 200,5 L200,8 L0,8 Z" fill="currentColor"></path>
                  </svg>
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-center max-w-2xl mx-auto text-brand-black/80 leading-relaxed" 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Get in touch with our team for inquiries, partnerships, or to learn more about our innovative products
              </motion.p>
            </motion.div>
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
      <section className="py-24 bg-brand-white relative overflow-hidden">
        {/* Brand Pattern Background */}
        <PatternBackground position="right-0 top-0" size="w-full md:w-1/2 h-full" opacity={[0.05, 0.1, 0.05]} animation="wave" />
        
        {/* Enhanced Background Elements with floating animations */}
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
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-brand-black mb-6 relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  Get in <span className="text-brand-green relative inline-block">
                    Touch
                    <svg className="absolute -bottom-1 left-0 w-full h-2 text-brand-green/60" viewBox="0 0 200 8" preserveAspectRatio="none">
                      <path d="M0,5 C50,0 150,0 200,5 L200,8 L0,8 Z" fill="currentColor"></path>
                    </svg>
                  </span>
                </motion.h2>
                <motion.p 
                  className="text-lg text-brand-black/70 max-w-xl leading-relaxed mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  Have questions about our products or services? Looking to partner with us? Our team is ready to help you.
                </motion.p>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-brand-green/15 hover:border-brand-green/30 relative overflow-hidden">
                      {/* Enhanced glow effect */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-green/20 to-brand-green/10 text-brand-green flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 relative">
                            {/* Enhanced icon glow effect */}
                            <div className="absolute inset-0 bg-brand-green/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                              {item.icon}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex-grow">
                          <h3 className="text-xl font-semibold text-brand-black mb-2 group-hover:text-brand-green transition-colors duration-300">
                            {item.title}
                          </h3>
                          <a 
                            href={item.link} 
                            className="text-lg text-brand-black/70 hover:text-brand-green transition-colors duration-300 font-medium relative inline-block group-hover:after:w-full after:w-0 after:h-0.5 after:bg-brand-green/30 after:absolute after:left-0 after:-bottom-1 after:transition-all after:duration-300"
                          >
                            {item.content}
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                className="mt-16 bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-brand-green/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-semibold text-xl text-brand-black mb-6 relative inline-block">
                  Connect With Us
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-brand-green/30 rounded-full"></span>
                </h3>
                <div className="flex flex-wrap gap-6 justify-center">
                  {socialMedia.map((social, index) => (
                    <motion.a 
                      key={index}
                      href={social.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-xl bg-white shadow-lg hover:shadow-xl text-brand-green hover:bg-brand-green hover:text-white transition-all duration-300 flex items-center justify-center transform hover:-translate-y-1 relative group"
                      aria-label={social.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {/* Enhanced icon glow effect */}
                      <div className="absolute inset-0 bg-brand-green/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        {social.icon}
                      </div>
                      <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium text-brand-black">
                        {social.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
              {/* Redesigned Contact Form with clean styling */}
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 relative overflow-hidden group">
              {/* Subtle gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent"></div>
              
              {/* Clean, minimal decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-brand-green/5 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="mb-10 space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center space-x-2 bg-brand-green/10 text-brand-green text-sm font-medium px-4 py-2 rounded-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>Send us a message</span>
                  </motion.div>
                  
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold text-brand-black"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Have questions or want to collaborate? Fill out the form below and we'll get back to you promptly.
                  </motion.h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Status Message */}
                  {status.message && (
                    <div className={`p-4 rounded-xl ${
                      status.type === 'success' 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                      <p>{status.message}</p>
                    </div>
                  )}

                  {/* Name Input */}
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-2 border-brand-green/30 rounded-xl px-5 py-4 outline-none focus:border-brand-green transition-all duration-300 peer"
                      placeholder=" "
                      required
                    />
                    <label className="absolute left-4 top-4 text-brand-green/70 transition-all duration-300 -translate-y-[1.15rem] peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-[1.15rem] peer-focus:text-brand-green text-sm peer-placeholder-shown:text-base bg-white px-2 cursor-text">
                      Your Name
                    </label>
                  </div>

                  {/* Email Input */}
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-2 border-brand-green/30 rounded-xl px-5 py-4 outline-none focus:border-brand-green transition-all duration-300 peer"
                      placeholder=" "
                      required
                    />
                    <label className="absolute left-4 top-4 text-brand-green/70 transition-all duration-300 -translate-y-[1.15rem] peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-[1.15rem] peer-focus:text-brand-green text-sm peer-placeholder-shown:text-base bg-white px-2 cursor-text">
                      Email Address
                    </label>
                  </div>

                  {/* Subject Input */}
                  <div className="relative group">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-transparent border-2 border-brand-green/30 rounded-xl px-5 py-4 outline-none focus:border-brand-green transition-all duration-300 peer"
                      placeholder=" "
                      required
                    />
                    <label className="absolute left-4 top-4 text-brand-green/70 transition-all duration-300 -translate-y-[1.15rem] peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-[1.15rem] peer-focus:text-brand-green text-sm peer-placeholder-shown:text-base bg-white px-2 cursor-text">
                      Subject
                    </label>
                  </div>

                  {/* Message Input */}
                  <div className="relative group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full bg-transparent border-2 border-brand-green/30 rounded-xl px-5 py-4 outline-none focus:border-brand-green transition-all duration-300 peer resize-none"
                      placeholder=" "
                      required
                    ></textarea>
                    <label className="absolute left-4 top-4 text-brand-green/70 transition-all duration-300 -translate-y-[1.15rem] peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-[1.15rem] peer-focus:text-brand-green text-sm peer-placeholder-shown:text-base bg-white px-2 cursor-text">
                      Your Message
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-brand-green text-white font-semibold px-8 py-4 rounded-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 group ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-brand-green/90'
                    }`}
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 transform transition-transform duration-300 ${
                        isSubmitting ? '' : 'group-hover:translate-x-1'
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-circle-pattern opacity-5 bg-[length:30px_30px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              className="flex flex-col items-center space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block py-2.5 px-8 rounded-full bg-brand-green/20 text-brand-green text-base font-medium border border-brand-green/30 shadow-sm transform hover:scale-105 transition-all duration-300">
                Visit Us
              </span>
              
              <h2 className="text-4xl md:text-5xl font-bold">Our Location</h2>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Find us at our office in Arusha, Tanzania where we're transforming hair waste into sustainable solutions
              </p>
            </motion.div>
          </div>

          <div className="bg-white p-5 rounded-3xl shadow-custom overflow-hidden transform hover:-translate-y-2 transition-all duration-500 relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-green/10 via-brand-green/50 to-brand-green/10 rounded-3xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-1000"></div>
            
            <div className="w-full h-[500px] rounded-2xl overflow-hidden relative z-10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.8723243948316!2d36.680721999999996!3d-3.3813595999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18371d65afd8045d%3A0x14e1f64c646e7361!2sCutOff%20Recycle%20Limited!5e0!3m2!1sen!2stz!4v1755206154950!5m2!1sen!2stz"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-1000"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );      {/* Enhanced Location Map Section with organic elements */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Simple curved border */}
        <div className="absolute -top-1 left-0 w-full h-16 overflow-hidden">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 C150,100 350,0 500,60 L500,150 L0,150 Z" fill="white"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              className="flex flex-col items-center space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block py-2.5 px-8 rounded-full bg-brand-green/20 text-brand-green text-base font-medium border border-brand-green/30 shadow-sm transform hover:scale-105 transition-all duration-300">
                Visit Us
              </span>
              
              <h2 className="text-4xl md:text-5xl font-bold">Our Location</h2>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Find us at our office in Arusha, Tanzania where we're transforming hair waste into sustainable solutions
              </p>
            </motion.div>
          </div>
            <div className="bg-white p-5 rounded-3xl shadow-custom overflow-hidden transform hover:-translate-y-2 transition-all duration-500 relative group">
            {/* Border glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-green/10 via-brand-green/50 to-brand-green/10 rounded-3xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-1000"></div>
            
            <div className="w-full h-[500px] rounded-2xl overflow-hidden relative z-10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.8723243948316!2d36.680721999999996!3d-3.3813595999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18371d65afd8045d%3A0x14e1f64c646e7361!2sCutOff%20Recycle%20Limited!5e0!3m2!1sen!2stz!4v1755206154950!5m2!1sen!2stz"
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
      
      {/* Partnership CTA Section */}
      <section className="py-24 bg-brand-green-ultra-light text-brand-black relative overflow-hidden">
        {/* Simple background elements */}
        <div className="absolute inset-0 bg-circle-pattern opacity-5 bg-[length:30px_30px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="flex flex-col items-center space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block py-2.5 px-8 rounded-full bg-brand-green/30 text-brand-green text-base font-medium backdrop-blur-sm border border-brand-green/30 shadow-sm transform hover:scale-105 transition-all duration-300">
                Join Our Mission
              </span>
              
              <motion.h2 
                className="text-4xl md:text-6xl font-bold text-brand-black max-w-3xl leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Become a <span className="text-brand-green relative inline-block">
                  Partner
                  <svg className="absolute -bottom-2 left-0 w-full h-2 text-brand-green/60" viewBox="0 0 200 8" preserveAspectRatio="none">
                    <path d="M0,5 C50,0 150,0 200,5 L200,8 L0,8 Z" fill="currentColor"></path>
                  </svg>
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-xl md:text-2xl max-w-2xl mx-auto text-brand-black/80 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Join us in our mission to create environmentally sustainable waste management solutions that benefit agriculture and the environment.
              </motion.p>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link 
                  href="/contact"
                  className="btn btn-md btn-primary btn-icon-right"
                >
                  Partner With Us
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a 
                  href="https://wa.link/a7bngd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-transparent border-2 border-brand-green/70 text-brand-green font-semibold rounded-full hover:bg-brand-green/10 transition-all duration-500 transform hover:-translate-y-1 flex items-center justify-center group relative overflow-hidden"
                >
                  {/* Button glow effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-brand-green/0 via-brand-green/15 to-brand-green/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></span>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372.272.297 1.04 1.016 1.04 2.479 0 1.462-1.065 2.875-1.213 3.074-.149.198-2.096 3.2-5.077 4.487-.709.306-1.262.489-1.694.625-.712.227-1.36.195-1.871.118-.571-.085-1.758-.719-2.006-1.413-.248-.694-.248-1.289-.173-1.413.074-.124.272-.198.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="relative z-10">Contact via WhatsApp</span>
                </a>
              </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

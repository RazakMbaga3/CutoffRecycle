import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (    <footer className="bg-white text-brand-black relative overflow-hidden border-t border-gray-100">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 right-0 h-4 bg-brand-green opacity-70" style={{ clipPath: 'url(#footerCurve)' }}></div>
      <svg width="0" height="0" className="hidden">
        <defs>
          <clipPath id="footerCurve" clipPathUnits="objectBoundingBox">
            <path d="M0,0 C0.33,0.5 0.67,0.5 1,0 L1,1 L0,1 Z" />
          </clipPath>
        </defs>
      </svg>
      <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-brand-green/5 blur-3xl"></div>
      <div className="absolute left-10 bottom-10 w-96 h-96 rounded-full bg-brand-green/5 blur-3xl"></div>
      <div className="absolute left-1/2 top-0 w-64 h-64 rounded-full bg-brand-green/10 blur-2xl transform -translate-x-1/2"></div>
      
      {/* Newsletter Section with curved shape */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-brand-green-ultra-light to-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-custom transform hover:shadow-custom-hover transition-all duration-300">
          <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-brand-green/10 blur-xl -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-brand-green/10 blur-xl translate-x-1/2 translate-y-1/2 opacity-50 animate-float-slow"></div>
            <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center text-brand-black">
              Join our <span className="relative inline-block">
                sustainable <svg className="absolute -bottom-1 left-0 w-full h-3 text-brand-green/30" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0,5 C50,0 150,0 200,5 L200,8 L0,8 Z" fill="currentColor"></path>
                </svg>
              </span> journey
            </h3>
            <p className="text-brand-black/80 text-center mb-8 max-w-xl mx-auto body-large">
              Stay updated with our latest innovations, products, and environmental impact initiatives.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-5 py-4 rounded-full bg-white border-2 border-brand-green/20 text-brand-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green shadow-sm"
              />
              <button 
                type="submit" 
                className="btn btn-md btn-primary btn-icon-right"
              >
                Subscribe
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>        {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="relative p-6 rounded-2xl hover:bg-brand-green-ultra-light transition-colors duration-300">
            <div className="mb-6">
              <Link href="/" className="group">
                <h2 className="text-2xl font-bold flex items-center">
                  <span className="text-brand-black mr-1 group-hover:scale-105 transition-transform duration-300">CutOff</span>
                  <span className="relative ml-2">
                    <span className="text-brand-green relative z-10 group-hover:text-brand-green transition-colors duration-300">Recycle</span>
                    <span className="absolute bottom-0.5 left-0 w-full h-2 bg-brand-green/20 rounded-full -z-10 group-hover:h-3 group-hover:bg-brand-green/30 transition-all duration-300"></span>
                  </span>
                </h2>
              </Link>
            </div>
            <p className="text-brand-black/70 mb-6">
              Creating an environmentally sustainable world through innovative hair waste recycling.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/cutoffrecycle/" 
                className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-green/10 to-brand-green/20 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md"
                aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/cutoffrecycle/" 
                className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-green/10 to-brand-green/20 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md"
                aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/cutoffrecycle/" 
                className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-green/10 to-brand-green/20 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md"
                aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@cutoffrecycle" 
                className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-green/10 to-brand-green/20 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md"
                aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>          <div className="relative p-6 rounded-2xl hover:bg-brand-green-ultra-light transition-colors duration-300">
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-10 h-2 bg-gradient-to-r from-brand-green to-brand-green/30 mr-3 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-brand-black/70 hover:text-brand-green transition-all duration-300 flex items-center group">
                  <span className="w-0 h-1.5 bg-gradient-to-r from-brand-green to-brand-green/50 rounded-full mr-0 opacity-0 group-hover:w-5 group-hover:mr-3 group-hover:opacity-100 transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-brand-black/70 hover:text-brand-green transition-all duration-300 flex items-center group">
                  <span className="w-0 h-1.5 bg-gradient-to-r from-brand-green to-brand-green/50 rounded-full mr-0 opacity-0 group-hover:w-5 group-hover:mr-3 group-hover:opacity-100 transition-all duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-brand-black/70 hover:text-brand-green transition-all duration-300 flex items-center group">
                  <span className="w-0 h-1.5 bg-gradient-to-r from-brand-green to-brand-green/50 rounded-full mr-0 opacity-0 group-hover:w-5 group-hover:mr-3 group-hover:opacity-100 transition-all duration-300"></span>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/awards" className="text-brand-black/70 hover:text-brand-green transition-all duration-300 flex items-center group">
                  <span className="w-0 h-1.5 bg-gradient-to-r from-brand-green to-brand-green/50 rounded-full mr-0 opacity-0 group-hover:w-5 group-hover:mr-3 group-hover:opacity-100 transition-all duration-300"></span>
                  Awards & Recognition
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-brand-black/70 hover:text-brand-green transition-all duration-300 flex items-center group">
                  <span className="w-0 h-1.5 bg-gradient-to-r from-brand-green to-brand-green/50 rounded-full mr-0 opacity-0 group-hover:w-5 group-hover:mr-3 group-hover:opacity-100 transition-all duration-300"></span>
                  Media
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-brand-black/70 hover:text-brand-green transition-all duration-300 flex items-center group">
                  <span className="w-0 h-1.5 bg-gradient-to-r from-brand-green to-brand-green/50 rounded-full mr-0 opacity-0 group-hover:w-5 group-hover:mr-3 group-hover:opacity-100 transition-all duration-300"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
            <div className="relative p-6 rounded-2xl hover:bg-brand-green-ultra-light transition-colors duration-300">
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-10 h-2 bg-gradient-to-r from-brand-green to-brand-green/30 mr-3 rounded-full"></span>
              Contact Us
            </h3>            
            <ul className="space-y-5">
              <li className="flex items-start transform hover:translate-x-1 transition-transform duration-300">
                <div className="mt-1 mr-3 p-2.5 bg-gradient-to-br from-brand-green/10 to-brand-green/30 rounded-full shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+255742290884" className="text-brand-black/70 hover:text-brand-green transition-colors group">
                  <span className="group-hover:underline">+255 742 290 884</span>
                </a>
              </li>
              <li className="flex items-start transform hover:translate-x-1 transition-transform duration-300">
                <div className="mt-1 mr-3 p-2.5 bg-gradient-to-br from-brand-green/10 to-brand-green/30 rounded-full shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:info@cutoffrecycle.co.tz" className="text-brand-black/70 hover:text-brand-green transition-colors group">
                  <span className="group-hover:underline">info@cutoffrecycle.co.tz</span>
                </a>
              </li>
              <li className="flex items-start transform hover:translate-x-1 transition-transform duration-300">
                <div className="mt-1 mr-3 p-2.5 bg-gradient-to-br from-brand-green/10 to-brand-green/30 rounded-full shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <address className="not-italic text-brand-black/70">
                  SIDO, Azimio Industrial Estate,<br />
                  Unga Limited, Arusha, Tanzania
                </address>
              </li>
            </ul>
          </div>
            <div className="relative p-6 rounded-2xl hover:bg-brand-green-ultra-light transition-colors duration-300">
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-10 h-2 bg-gradient-to-r from-brand-green to-brand-green/30 mr-3 rounded-full"></span>
              Working Hours
            </h3>            
            <ul className="space-y-4">
              <li className="flex justify-between items-center p-2 rounded-lg hover:bg-white/50 transition-colors duration-300">
                <span className="text-brand-black/70 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Monday - Friday:
                </span>
                <span className="text-brand-black font-medium">8:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between items-center p-2 rounded-lg hover:bg-white/50 transition-colors duration-300">
                <span className="text-brand-black/70 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Saturday:
                </span>
                <span className="text-brand-black font-medium">Closed</span>
              </li>
              <li className="flex justify-between items-center p-2 rounded-lg hover:bg-white/50 transition-colors duration-300">
                <span className="text-brand-black/70 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Sunday:
                </span>
                <span className="text-brand-black font-medium">Closed</span>
              </li>
            </ul>
            
            <div className="mt-8 pt-6 border-t border-dashed border-brand-green/30">
              <a 
                href="https://invest.somoafrica.org/public/2659/CUTOFF%20RECYCLE%20LIMITED"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-brand-green to-brand-green/90 text-white rounded-xl shadow-btn transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Investment Profile
              </a>
            </div>
          </div>        </div>
          <div className="border-t border-gray-200 mt-16 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-brand-black/60 text-sm mb-4 md:mb-0 relative group">
              <span className="absolute -inset-1 -z-10 scale-x-0 group-hover:scale-x-100 origin-left bg-brand-green/5 rounded-full transition-transform duration-300"></span>
              &copy; {new Date().getFullYear()} CutOff Recycle. All rights reserved.
            </p>
            <div className="flex items-center space-x-8 text-brand-black/60 text-sm">
              <a 
                href="https://docs.google.com/document/d/1n-kxzsYVWZqKozd4OCLUMrTHmpRzAgaAb0uq347T1Ss/edit?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-green transition-colors relative group"
              >
                <span className="absolute -inset-1 -z-10 scale-x-0 group-hover:scale-x-100 origin-left bg-brand-green/5 rounded-full transition-transform duration-300"></span>
                Privacy Policy
              </a>
              <a 
                href="https://docs.google.com/document/d/1pOglv6sADJ3jyCteIv1OJIIobicI0QHDOqHqh43wHaU/edit?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-green transition-colors relative group"
              >
                <span className="absolute -inset-1 -z-10 scale-x-0 group-hover:scale-x-100 origin-left bg-brand-green/5 rounded-full transition-transform duration-300"></span>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
}

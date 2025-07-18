"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/awards', label: 'Awards & Recognition' },
    { href: '/media', label: 'Media' },
    { href: '/send', label: 'Barbers' },
    { href: '/employee', label: 'Employees' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled || isMenuOpen 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Far left */}
          <Link href="/" className="flex items-center space-x-3 group flex-shrink-0">
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image
                src="/Brand Assets/CutOff-Icon.png"
                alt="CutOff Recycle"
                width={80}
                height={80}
                className="object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-brand-black leading-tight tracking-tight">
                <span className="text-brand-green">CutOff</span> <span className="text-brand-black">Recycle</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? 'bg-brand-green/10 text-brand-green font-semibold'
                    : 'text-gray-700 hover:text-brand-green hover:bg-brand-green/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Right */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand-green hover:bg-brand-green/90 transition-colors duration-200 shadow-sm"
            >
              Get in Touch
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-green hover:bg-brand-green/5 transition-colors duration-200"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? 'bg-brand-green/10 text-brand-green font-semibold'
                    : 'text-gray-700 hover:text-brand-green hover:bg-brand-green/5'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block w-full mt-4 px-3 py-2 text-center text-sm font-medium text-white bg-brand-green hover:bg-brand-green/90 rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Social Links */}
          <div className="px-4 py-3 border-t border-gray-200 bg-gray-50/50">
            <div className="flex items-center justify-center space-x-6">
              <a href="https://instagram.com/cutoffrecycle" className="text-gray-600 hover:text-brand-green transition-colors duration-200" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 2.163c-3.259 0-3.667.014-4.858.072-2.78.128-4.02 1.356-4.147 4.147-.058 1.19-.072 1.598-.072 4.858 0 3.259.014 3.668.072 4.859.127 2.785 1.364 4.02 4.147 4.147 1.19.058 1.598.072 4.858.072 3.259 0 3.668-.014 4.859-.072 2.785-.127 4.02-1.364 4.147-4.147.058-1.19.072-1.598.072-4.859 0-3.26-.014-3.667-.072-4.858-.127-2.785-1.364-4.02-4.147-4.147-1.191-.058-1.599-.072-4.859-.072zm0 5.838c-2.648 0-4.8 2.152-4.8 4.8 0 2.648 2.152 4.8 4.8 4.8 2.648 0 4.8-2.152 4.8-4.8 0-2.648-2.152-4.8-4.8-4.8zm0 7.92c-1.721 0-3.12-1.399-3.12-3.12 0-1.721 1.399-3.12 3.12-3.12 1.721 0 3.12 1.399 3.12 3.12 0 1.721-1.399 3.12-3.12 3.12zm6.12-8.16c0 .62-.504 1.125-1.125 1.125-.62 0-1.125-.504-1.125-1.125 0-.62.504-1.125 1.125-1.125.62 0 1.125.504 1.125 1.125z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/CutOffRecycle/" className="text-gray-600 hover:text-brand-green transition-colors duration-200" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/cutoffrecycle/" className="text-gray-600 hover:text-brand-green transition-colors duration-200" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BrandGuidelines() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-brand-white font-mulish overflow-x-hidden pt-24 pb-16">
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-brand-green-ultra-light to-white py-16">
        <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block py-1.5 px-6 bg-white/60 backdrop-blur-sm text-brand-green rounded-full text-sm font-medium mb-5 shadow-sm">
              Version 1.0 - 2024
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-black">
              CutOff Recycle <span className="text-brand-green">Brand Guidelines</span>
            </h1>
            <p className="text-lg text-brand-black/80 max-w-2xl mx-auto">
              This document outlines the essential elements of the CutOff Recycle brand identity,
              ensuring consistency across all communication channels.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-24 bg-white shadow-md z-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex overflow-x-auto whitespace-nowrap py-2 -mx-4 px-4 md:px-0 md:justify-center">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === "overview"
                  ? "text-brand-green border-b-2 border-brand-green"
                  : "text-brand-black/70 hover:text-brand-green"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("logo")}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === "logo"
                  ? "text-brand-green border-b-2 border-brand-green"
                  : "text-brand-black/70 hover:text-brand-green"
              }`}
            >
              Logo
            </button>
            <button
              onClick={() => setActiveTab("colors")}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === "colors"
                  ? "text-brand-green border-b-2 border-brand-green"
                  : "text-brand-black/70 hover:text-brand-green"
              }`}
            >
              Colors
            </button>
            <button
              onClick={() => setActiveTab("typography")}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === "typography"
                  ? "text-brand-green border-b-2 border-brand-green"
                  : "text-brand-black/70 hover:text-brand-green"
              }`}
            >
              Typography
            </button>
            <button
              onClick={() => setActiveTab("imagery")}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === "imagery"
                  ? "text-brand-green border-b-2 border-brand-green"
                  : "text-brand-black/70 hover:text-brand-green"
              }`}
            >
              Imagery
            </button>
            <button
              onClick={() => setActiveTab("components")}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === "components"
                  ? "text-brand-green border-b-2 border-brand-green"
                  : "text-brand-black/70 hover:text-brand-green"
              }`}
            >
              Components
            </button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-12">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-brand-black">Brand Overview</h2>
            
            <div className="bg-white rounded-xl p-8 shadow-md mb-10">
              <h3 className="text-xl font-bold mb-4 text-brand-black">Brand Mission</h3>
              <p className="text-brand-black/80 mb-6">
                CutOff Recycle's mission is to create an environmentally sustainable waste management solution 
                that supports agricultural development and environmental conservation.
              </p>
              
              <h3 className="text-xl font-bold mb-4 text-brand-black">Brand Vision</h3>
              <p className="text-brand-black/80 mb-6">
                To create an environmentally sustainable world by fostering local solutions with a global impact.
              </p>
              
              <h3 className="text-xl font-bold mb-4 text-brand-black">Brand Values</h3>
              <ul className="list-disc pl-6 text-brand-black/80 space-y-2">
                <li>Environmental Sustainability</li>
                <li>Innovation</li>
                <li>Community Impact</li>
                <li>Quality and Reliability</li>
                <li>Transparency</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4 text-brand-black">Brand Personality</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-brand-green-ultra-light rounded-lg">
                  <h4 className="font-bold text-brand-green mb-2">Eco-conscious</h4>
                  <p className="text-sm text-brand-black/80">
                    Deeply committed to environmental sustainability and conservation
                  </p>
                </div>
                <div className="p-4 bg-brand-green-ultra-light rounded-lg">
                  <h4 className="font-bold text-brand-green mb-2">Innovative</h4>
                  <p className="text-sm text-brand-black/80">
                    Forward-thinking and creative in approach to waste management
                  </p>
                </div>
                <div className="p-4 bg-brand-green-ultra-light rounded-lg">
                  <h4 className="font-bold text-brand-green mb-2">Reliable</h4>
                  <p className="text-sm text-brand-black/80">
                    Trustworthy and consistent in delivering quality solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Logo Tab */}
        {activeTab === "logo" && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-brand-black">Logo Guidelines</h2>
            
            <div className="bg-white rounded-xl p-8 shadow-md mb-10">
              <h3 className="text-xl font-bold mb-6 text-brand-black">Primary Logo</h3>
              <div className="flex justify-center mb-8 bg-gray-100 p-8 rounded-lg">
                <div className="relative h-40 w-full max-w-md">
                  <Image 
                    src="/CutOff-Icon (1).png" 
                    alt="CutOff Recycle Logo" 
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              <h4 className="font-bold mb-3 text-brand-black">Logo Clear Space</h4>
              <p className="text-brand-black/80 mb-6">
                Always maintain clear space around the logo to ensure its visibility and impact. 
                The minimum clear space is equal to the height of the "C" in "CutOff".
              </p>
              
              <h4 className="font-bold mb-3 text-brand-black">Minimum Size</h4>
              <p className="text-brand-black/80 mb-6">
                To ensure legibility, never reproduce the logo smaller than 1 inch (25.4mm) in width for print 
                or 100 pixels for digital applications.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md mb-10">
              <h3 className="text-xl font-bold mb-6 text-brand-black">Logo Usage</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-bold mb-3 text-brand-black">Do's</h4>
                  <ul className="list-disc pl-6 text-brand-black/80 space-y-2">
                    <li>Use the logo in its original proportions</li>
                    <li>Maintain adequate clear space</li>
                    <li>Use approved color variations</li>
                    <li>Ensure high visibility against backgrounds</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-brand-black">Don'ts</h4>
                  <ul className="list-disc pl-6 text-brand-black/80 space-y-2">
                    <li>Stretch or distort the logo</li>
                    <li>Rotate or tilt the logo</li>
                    <li>Change the logo colors</li>
                    <li>Add effects such as shadows or outlines</li>
                    <li>Place on cluttered or low-contrast backgrounds</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Colors Tab */}
        {activeTab === "colors" && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-brand-black">Color Palette</h2>
            
            <div className="bg-white rounded-xl p-8 shadow-md mb-10">
              <h3 className="text-xl font-bold mb-6 text-brand-black">Primary Colors</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <div className="h-32 bg-brand-green"></div>
                  <div className="p-4 border border-t-0 border-gray-200">                    <h4 className="font-bold text-brand-black">Brand Green</h4>
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-brand-black/70">HEX: #50AD32</span>
                      <span className="text-sm text-brand-black/70">RGB: 80, 173, 50</span>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <div className="h-32 bg-brand-black"></div>
                  <div className="p-4 border border-t-0 border-gray-200">
                    <h4 className="font-bold text-brand-black">Brand Black</h4>
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-brand-black/70">HEX: #000000</span>
                      <span className="text-sm text-brand-black/70">RGB: 0, 0, 0</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-6 text-brand-black">Secondary Colors</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <div className="h-24" style={{ backgroundColor: '#1f4074' }}></div>
                  <div className="p-4 border border-t-0 border-gray-200">
                    <h4 className="font-bold text-brand-black">Navy Blue</h4>
                    <span className="text-sm text-brand-black/70">HEX: #1F4074</span>
                  </div>
                </div>
                
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <div className="h-24 bg-white"></div>
                  <div className="p-4 border border-t-0 border-gray-200">
                    <h4 className="font-bold text-brand-black">White</h4>
                    <span className="text-sm text-brand-black/70">HEX: #FFFFFF</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold mb-6 text-brand-black">Color Usage</h3>
                <div className="space-y-4 text-brand-black/80">
                <p>
                  <span className="font-bold text-brand-black">Brand Green (#50ad32)</span> is the primary color and should be used prominently 
                  across all materials to establish brand recognition.
                </p>
                <p>
                  <span className="font-bold text-brand-black">Brand Black (#000000)</span> should be used for body text and primary elements 
                  where strong contrast is needed.
                </p>
                <p>
                  <span className="font-bold text-brand-black">Navy Blue (#1f4074)</span> is a secondary color that can be used for 
                  accents and supporting elements.
                </p>
                <p>
                  <span className="font-bold text-brand-black">White (#FFFFFF)</span> should be used for backgrounds and text on dark colors.
                </p>
                <p className="mt-6 text-brand-black/90">
                  <strong>Note:</strong> Use Pantone values for offset printing or for vendor reference for optimal color output. 
                  Use RGB values for digital outputs. Use HEX values for web outputs. Use CMYK values for printed outputs.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Typography Tab */}
        {activeTab === "typography" && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-brand-black">Typography</h2>
            
            <div className="bg-white rounded-xl p-8 shadow-md mb-10">
              <h3 className="text-xl font-bold mb-6 text-brand-black">Primary Font: Mulish</h3>
              
              <div className="space-y-8 mb-8">
                <div>
                  <h4 className="font-bold mb-3 text-brand-black">Mulish Light (300)</h4>
                  <p className="text-2xl font-light">
                    The quick brown fox jumps over the lazy dog.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-3 text-brand-black">Mulish Regular (400)</h4>
                  <p className="text-2xl font-normal">
                    The quick brown fox jumps over the lazy dog.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-3 text-brand-black">Mulish Medium (500)</h4>
                  <p className="text-2xl font-medium">
                    The quick brown fox jumps over the lazy dog.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-3 text-brand-black">Mulish SemiBold (600)</h4>
                  <p className="text-2xl font-semibold">
                    The quick brown fox jumps over the lazy dog.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-3 text-brand-black">Mulish Bold (700)</h4>
                  <p className="text-2xl font-bold">
                    The quick brown fox jumps over the lazy dog.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md mb-10">
              <h3 className="text-xl font-bold mb-6 text-brand-black">Typography Hierarchy</h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold mb-3 text-brand-black">Heading 1</h4>
                  <p className="text-4xl md:text-5xl font-bold text-brand-black">
                    Main Heading
                  </p>
                  <p className="text-sm text-brand-black/70 mt-2">
                    Font: Mulish Bold, Size: 40-48px (desktop), 32px (mobile), Line height: 1.1
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-3 text-brand-black">Heading 2</h4>
                  <p className="text-3xl md:text-4xl font-bold text-brand-black">
                    Section Heading
                  </p>
                  <p className="text-sm text-brand-black/70 mt-2">
                    Font: Mulish Bold, Size: 32-36px (desktop), 28px (mobile), Line height: 1.2
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-3 text-brand-black">Heading 3</h4>
                  <p className="text-2xl font-bold text-brand-black">
                    Subsection Heading
                  </p>
                  <p className="text-sm text-brand-black/70 mt-2">
                    Font: Mulish Bold, Size: 24px (desktop), 20px (mobile), Line height: 1.3
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-3 text-brand-black">Body Text</h4>
                  <p className="text-base text-brand-black/80">
                    This is the standard body text used throughout the website and other materials. 
                    It should be easy to read and maintain proper contrast with the background.
                  </p>
                  <p className="text-sm text-brand-black/70 mt-2">
                    Font: Mulish Regular, Size: 16px, Line height: 1.6
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-3 text-brand-black">Small Text / Caption</h4>
                  <p className="text-sm text-brand-black/70">
                    Used for captions, labels, and supporting information.
                  </p>
                  <p className="text-sm text-brand-black/70 mt-2">
                    Font: Mulish Regular, Size: 14px, Line height: 1.5
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Imagery Tab */}
        {activeTab === "imagery" && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-brand-black">Imagery Guidelines</h2>
            
            <div className="bg-white rounded-xl p-8 shadow-md mb-10">
              <h3 className="text-xl font-bold mb-6 text-brand-black">Photography Style</h3>
              
              <div className="space-y-6 mb-8 text-brand-black/80">
                <p>
                  CutOff Recycle's photography should convey our commitment to sustainability, 
                  agriculture, and environmental consciousness.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                  <div>
                    <h4 className="font-bold mb-3 text-brand-black">Subject Matter</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Hair waste collection and processing</li>
                      <li>Organic fertilizer production</li>
                      <li>Sustainable agriculture and farming</li>
                      <li>Plants and crops growing in healthy soil</li>
                      <li>Local communities and farmers</li>
                      <li>Environmental conservation efforts</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-3 text-brand-black">Visual Characteristics</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Natural lighting that feels warm and organic</li>
                      <li>Rich, vibrant colors especially greens</li>
                      <li>Authentic, not overly staged scenarios</li>
                      <li>Clear focus on main subjects</li>
                      <li>Clean, uncluttered compositions</li>
                      <li>Close-up details that show texture and quality</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold mb-4 text-brand-black">Image Examples</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="aspect-video rounded-lg overflow-hidden relative">
                    <Image 
                      src="/Images/Photos/BNK_0555.jpg" 
                      alt="Brand imagery example" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-video rounded-lg overflow-hidden relative">
                    <Image 
                      src="/Images/Photos/BNK_0542.jpg" 
                      alt="Brand imagery example" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-video rounded-lg overflow-hidden relative">
                    <Image 
                      src="/Images/Photos/IMG_20241021_121637_661.jpg" 
                      alt="Brand imagery example" 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold mb-6 text-brand-black">Illustration & Icon Style</h3>
              
              <div className="space-y-6 text-brand-black/80">
                <p>
                  Any illustrations and icons should reflect the brand's organic, eco-friendly 
                  nature while maintaining a clean, modern aesthetic.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                  <div>
                    <h4 className="font-bold mb-3 text-brand-black">Icon Guidelines</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Simple, clear designs with minimal detail</li>
                      <li>Consistent line weight throughout icon sets</li>
                      <li>Rounded corners for a friendly feel</li>
                      <li>Primary use of brand green</li>
                      <li>Consistent size and padding within layouts</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-3 text-brand-black">Illustration Guidelines</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Nature-inspired elements and organic shapes</li>
                      <li>Clean, minimalist style</li>
                      <li>Brand color palette</li>
                      <li>Avoid overly complex or busy designs</li>
                      <li>Focus on sustainability and growth themes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Components Tab */}
        {activeTab === "components" && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-brand-black">UI Components</h2>
            
            <div className="bg-white rounded-xl p-8 shadow-md mb-10">
              <h3 className="text-xl font-bold mb-6 text-brand-black">Buttons</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>                  <h4 className="font-bold mb-4 text-brand-black">Primary Button</h4>
                  <button className="btn btn-md btn-primary mb-4">Primary Button</button>
                  <div className="text-sm text-brand-black/70 space-y-2">
                    <p>Background: Brand Green</p>
                    <p>Text: White</p>
                    <p>Border Radius: Full rounded</p>
                    <p>Animation: Sliding gradient overlay on hover</p>
                    <p>Hover: Changes to Brand Navy, slight lift effect</p>
                  </div>
                </div>
                
                <div>                  <h4 className="font-bold mb-4 text-brand-black">Secondary Button</h4>                  
                  <button className="btn btn-md btn-secondary mb-4">
                    Secondary Button
                  </button>
                  <div className="text-sm text-brand-black/70 space-y-2">
                    <p>Background: Transparent with fill animation</p>
                    <p>Text: Brand Green, changes to white on hover</p>
                    <p>Border: 2px Brand Green</p>
                    <p>Animation: Reveal fill from bottom</p>
                    <p>Hover: Border color shifts to Brand Navy</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="font-bold mb-4 text-brand-black">Ghost Button</h4>                  
                  <button className="btn btn-md btn-ghost mb-4">
                    Ghost Button
                  </button>
                  <div className="text-sm text-brand-black/70 space-y-2">
                    <p>Background: Transparent, light fill on hover</p>
                    <p>Text: Brand Green</p>
                    <p>Border: None</p>
                    <p>Animation: Subtle background reveal</p>
                    <p>Hover: Slight lift effect</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold mb-4 text-brand-black">Link Button</h4>                  
                  <button className="btn btn-link mb-4">
                    Link Button
                  </button>
                  <div className="text-sm text-brand-black/70 space-y-2">
                    <p>Background: None</p>
                    <p>Text: Brand Green, changes to Brand Navy</p>
                    <p>Animation: Underline reveal</p>
                    <p>Focus: Outline visible only on keyboard focus</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="font-bold mb-4 text-brand-black">Button with Icon</h4>                  

                  <button className="btn btn-md btn-primary btn-icon-right mb-4">
                    Button with Icon
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  <div className="text-sm text-brand-black/70 space-y-2">
                    <p>Icon: Animated on hover</p>
                    <p>Spacing: Consistent gap between text and icon</p>
                    <p>Animation: Icon slides right on hover</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold mb-4 text-brand-black">3D Button</h4>                  
                  <button className="btn btn-md btn-primary btn-3d mb-4">
                    3D Button
                  </button>
                  <div className="text-sm text-brand-black/70 space-y-2">
                    <p>Effect: 3D pressed appearance</p>
                    <p>Animation: Button "pushes down" when clicked</p>
                    <p>Shadow: Creates depth perception</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-6 text-brand-black">Cards</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="font-bold mb-4 text-brand-black">Feature Card</h4>
                  <div className="bg-white p-6 rounded-3xl border border-brand-green/25 hover:border-brand-green/50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-2 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-brand-green/80 text-white rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-brand-black group-hover:text-brand-green transition-colors duration-300">Feature Title</h3>
                    <p className="text-brand-black/70 group-hover:text-brand-black/90 transition-colors duration-300">
                      Feature description explaining the benefit or service offered.
                    </p>
                    <div className="mt-4 w-10 h-1 bg-brand-green/50 rounded-full group-hover:w-16 transition-all duration-300"></div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold mb-4 text-brand-black">Product Card</h4>
                  <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-brand-green/30 transform hover:-translate-y-2 transition-all duration-500">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent z-10"></div>
                      <div className="bg-gray-200 h-full w-full"></div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-brand-green z-20 flex items-center">
                        <span className="w-2 h-2 bg-brand-green rounded-full mr-2"></span>
                        Product Label
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2 text-brand-black">Product Name</h3>
                      <p className="text-brand-black/70 mb-4 text-sm">
                        Brief product description highlighting key features.
                      </p>
                      <button className="px-4 py-2 bg-brand-green/90 text-white font-medium rounded-lg text-sm flex items-center">
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-6 text-brand-black">Other UI Elements</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-4 text-brand-black">Badges & Labels</h4>
                  <div className="space-y-4">
                    <span className="inline-block py-1.5 px-6 bg-brand-green-ultra-light text-brand-green rounded-full text-sm font-medium border border-brand-green/30">
                      Category Label
                    </span>
                    <div className="block"></div>
                    <span className="inline-block py-1 px-3 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-brand-green border border-brand-green/20">
                      Small Badge
                    </span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold mb-4 text-brand-black">Section Dividers</h4>
                  <div className="space-y-8">
                    <div>
                      <h5 className="text-lg font-bold mb-2 flex items-center">
                        <span className="w-10 h-1.5 bg-gradient-to-r from-brand-green to-transparent inline-block mr-3 rounded-full"></span>
                        With Line Accent
                      </h5>
                    </div>
                    
                    <div>
                      <h5 className="text-lg font-bold mb-2 relative inline-block">
                        With Underline
                        <svg className="absolute -bottom-1 left-0 w-full h-2 text-brand-green/40" viewBox="0 0 200 8" preserveAspectRatio="none">
                          <path d="M0,5 C50,0 150,0 200,5 L200,8 L0,8 Z" fill="currentColor"></path>
                        </svg>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

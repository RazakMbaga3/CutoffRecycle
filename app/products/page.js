'use client'
import { useState, useEffect } from "react";
import {useAuth} from '../context/history'
import Image from "next/image";
import Link from "next/link";
import HeroSection from '../components/HeroSection';
export default function Products() {
  const {addItemToCart, updateCart, cart} = useAuth()
  const [amounts, setAmounts] = useState([{id:1,amount:0}, {id:2,amount:0}, {id:3,amount:0}])
  const [isVisible, setVisible] = useState(true)
  // Products data from Linktree
  const products = [
    {
      id: 1,
      name: "Amino Acid+ Crop Booster",
      price: "4.61",
      description: "Our organic liquid fertilizer enhances plant growth, boosts crop health, and improves yields sustainably.",
      features: [
        "Made from recycled human hair waste",
        "Rich in nitrogen and free amino acids",
        "Promotes faster plant growth",
        "Eco-friendly and sustainable solution"
      ],
      image: "/Images/PRODUCTS/Liquid Fertilizer PNG.png",
      orderLink: "https://wa.link/a7bngd"
    },
    {
      id: 2,
      name: "McheKuza",
      price: "4.61",
      description: "Mchekuza is a specialized organic bio-fertilizer designed to stimulate early-stage crop growth and improve soil health. Formulated with beneficial microorganisms — Pseudomonas sp., Streptomyces sp., and Bacillus sp.",
      features: [
        "Beneficial Microbial Blend",
        "Early Growth Optimized",
        "Soil-Conditioning Effect",
        "Wide Crop Compatibility"
      ],
      image: "/new/mchekuza.jpg",
      orderLink: "https://wa.link/a7bngd"
    },

    {
      id: 3,
      name: "Nutrified Growing Medium",
      price: "0.38",
      description: "Premium Growing Medium enriched with nutrients from recycled hair waste for better crop yields and healthier plants.",
      features: [
        "Enhanced soil structure",
        "Improved water retention",
        "Contains natural nutrients",
        "Perfect for both home gardeners and farmers"
      ],
      image: "/Images/PRODUCTS/Nutrified Organic Soil PNG.png",
      orderLink: "https://wa.link/9cd4j0"
    }
  ];
  useEffect(() => setAmounts([{id:1,amount:0}, {id:2,amount:0}, {id:3,amount:0}]),[cart])
  return (
    <div className="min-h-screen bg-brand-white font-mulish">
      {isVisible && (
        <div className="fixed top-6 right-6 z-50 animate-fade-in-down">
          <div className="bg-brand-green text-white p-6 rounded-2xl shadow-2xl w-[350px] relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/Brand Assets/CutOff Pattern.svg')] opacity-10 bg-repeat bg-[length:200px_200px]"></div>
            <button 
              onClick={() => setVisible(false)} 
              className="absolute top-3 right-3 text-white/80 hover:text-white p-1 hover:bg-white/10 rounded-full transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="relative z-10">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-center mb-2">Order Faster on WhatsApp</h2>
              <p className="text-white/90 text-center mb-6">Pata oda yako haraka kwa WhatsApp</p>
              <Link href="https://wa.link/egyvo1">
                <button className="w-full py-3 px-6 bg-white text-brand-green font-semibold rounded-xl hover:bg-white/90 transition-colors duration-300 flex items-center justify-center space-x-2 transform hover:-translate-y-0.5">
                  <span>Order Now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
      <HeroSection
        title="Sustainable Solutions for Agriculture"
        subtitle="Discover our innovative line of organic fertilizers and growing mediums made from recycled hair waste."
        backgroundImage="/Images/Photos/IMG_20241021_121452_839.jpg"
        tag="Our Products"
        ctaButtons={[
          { text: "Shop Now", href: "#products", primary: true },
          { text: "Learn More", href: "#features", primary: false }
        ]}
      />      
      
      
      {/* Products Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute inset-0 bg-circle-pattern opacity-5 bg-[length:60px_60px]"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-green/10 text-brand-green text-sm font-medium mb-4">Sustainable Solutions</span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-black mb-6">
              Our <span className="text-brand-green relative inline-block">
                Product Range
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-brand-green/30 rounded-full"></span>
              </span>
            </h2>
            <p className="text-lg text-brand-black/70 max-w-2xl mx-auto leading-relaxed">
              Environmentally friendly fertilizers made from recycled hair waste that enhance soil health and boost crop yields
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-16">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="group bg-white rounded-3xl overflow-hidden shadow-custom hover:shadow-custom-hover transition-all duration-500 transform hover:-translate-y-2 border border-brand-green/5"
              >
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 relative h-[400px] md:h-[500px] overflow-hidden">
                    <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-brand-green border border-brand-green/20 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      ${product.price}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <Image 
                      src={product.image} 
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-between bg-gradient-to-br from-white to-brand-green/5">
                    <div>
                      <h3 className="text-3xl font-bold text-brand-black mb-4 group-hover:text-brand-green transition-colors duration-300">
                        {product.name}
                      </h3>
                      
                      <p className="text-lg text-brand-black/70 mb-8 leading-relaxed">
                        {product.description}
                      </p>
                      
                      <h4 className="font-semibold text-brand-black mb-6 flex items-center">
                        <span className="w-8 h-1 bg-brand-green/50 rounded-full mr-3"></span>
                        Key Features
                      </h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-start group/item bg-white/50 p-4 rounded-xl hover:bg-white transition-colors duration-300">
                            <div className="bg-brand-green/10 rounded-full p-1.5 text-brand-green mr-3 mt-0.5 group-hover/item:bg-brand-green group-hover/item:text-white transition-colors duration-300">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-brand-black/80 group-hover/item:text-brand-black transition-colors duration-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                      <div className="border-t border-brand-green/10 pt-8 mt-8">
                        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
                          <div className="flex items-center space-x-4 bg-white rounded-full p-1.5 border border-brand-green/10 shadow-sm">
                            <button 
                              onClick={()=>setAmounts(prev => prev.map(p => p.id == product.id ? {id:p.id,amount:Math.max(0, p.amount-1)} : p))}
                              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-brand-green border border-brand-green/20 hover:bg-brand-green hover:text-white transition-colors duration-300"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                              </svg>
                            </button>
                            <span className="w-16 text-center font-medium text-brand-black text-lg">
                              {amounts.find(a => a.id == product.id).amount}
                            </span>
                            <button 
                              onClick={()=>setAmounts(prev => prev.map(p => p.id == product.id ? {id:p.id,amount:p.amount+1} : p))}
                              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-brand-green border border-brand-green/20 hover:bg-brand-green hover:text-white transition-colors duration-300"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                              </svg>
                            </button>
                          </div>
                          <button 
                            onClick={() => {
                              if (cart.some(obj => obj.product.id == product.id)) {
                                updateCart(product.id, amounts.find(a => a.id == product.id).amount, 'add')
                              } else {
                                addItemToCart(product, amounts.find(a => a.id == product.id).amount)
                              }
                            }}
                            className="group/btn flex-1 inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                          >
                            <span>Add to cart</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>        {/* Call To Action */}
      <section className="py-24 bg-white text-brand-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-pattern-waves opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 border-t border-b border-brand-green/10"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-black">Ready to Try Our <span className="text-brand-green">Products</span>?</h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-brand-black/70 leading-relaxed">
              Experience the power of our sustainable, organic fertilizers and help us create a greener future for agriculture in Tanzania.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="https://wa.link/a7bngd"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-green text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Place an Order
              </a>
              
              <Link 
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-brand-green text-brand-green font-semibold rounded-full hover:bg-brand-green/5 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
              >
                Contact Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

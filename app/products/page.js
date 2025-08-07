'use client'
import { useState, useEffect } from "react";
import {useAuth} from '../context/history'
import Image from "next/image";
import Link from "next/link";
export default function Products() {
  const {addItemToCart, updateCart, cart} = useAuth()
  const [amounts, setAmounts] = useState([{id:1,amount:0},{id:2,amount:0}])
  const [isVisible, setVisible] = useState(true)
  // Products data from Linktree
  const products = [
    {
      id: 1,
      name: "Amino Acid+ Crop Booster",
      price: "3.68",
      description: "Our organic liquid fertilizer enhances plant growth, boosts crop health, and improves yields sustainably.",
      features: [
        "Made from recycled human hair waste",
        "Rich in nitrogen and amino acids",
        "Promotes faster plant growth",
        "Eco-friendly and sustainable solution"
      ],
      image: "/Images/PRODUCTS/Liquid Fertilizer PNG.png",
      orderLink: "https://wa.link/a7bngd"
    },
    {
      id: 2,
      name: "Nutrified Organic Soil",
      price: "0.20",
      description: "Premium organic soil enriched with nutrients from recycled hair waste for better crop yields and healthier plants.",
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
  useEffect(() => setAmounts([{id:1,amount:0},{id:2,amount:0}]),[cart])
  return (
    <div className="min-h-screen bg-brand-white font-mulish">        {/* Hero Section */}
    {isVisible && <div style={{position: 'fixed',top: '20px',right: '20px',zIndex: 9999}}>
  <div style={{background:'#735b27',color:'#ffffff',padding:'20px 20px 30px 20px',borderRadius:'10px',boxShadow:'0 8px 16px rgba(0,0,0,0.3)',width:'350px',animation: 'fadeInUp 0.5s ease-out',position: 'relative',overflow: 'hidden'}}>
    <button onClick={()=>setVisible(false)} style={{position:'absolute',top:'8px',right:'8px',background:'transparent',border:'none',color:'#ffffff',fontSize: '22px',cursor: 'pointer',lineHeight: 1}}>×</button>
    <div style={{fontSize: '40px',textAlign: 'center',marginBottom: '10px'}}>🛒</div>
    <h2 style={{margin: '0 0 10px',fontSize: '22px',textAlign: 'center'}}>Order Faster on WhatsApp</h2>
    <p style={{margin: '0 0 20px',fontSize: '16px',lineHeight: 1.4,textAlign: 'center'}}>Pata oda yako haraka kwa WhatsApp</p>
    <Link href="https://wa.link/egyvo1"><button style={{background:'#50AD32',color:'#ffffff',border:'none',padding:'12px 20px',fontSize:'18px',borderRadius:'5px',cursor:'pointer',transition:'background 0.3s, transform 0.3s',display:'block',margin:' 0 auto'}}>Order Now</button></Link>
  </div>
</div>}
      <section className="relative h-[70vh] bg-gradient-to-r from-brand-green-ultra-light to-white text-brand-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/Images/Photos/IMG_20241021_121452_839.jpg"
            alt="CutOff Recycle Products"
            fill
            className="object-cover opacity-20 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-brand-green-ultra-light/70"></div>
        </div>
        
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-pattern-waves opacity-5"></div>
        
        {/* Animated Elements */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-brand-green/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-brand-green/20 blur-2xl animate-float-delay"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full bg-brand-green/15 blur-xl animate-float-slow"></div>
        
        <div className="absolute top-20 right-20 w-24 h-24 rounded-full border border-brand-green/20 animate-spin-slow"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full border border-brand-green/10 animate-spin-slow-reverse"></div>
        
        <div className="container mx-auto px-4 md:px-8 h-full flex flex-col justify-center items-center relative z-10">          <div className="w-full max-w-4xl mx-auto text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-green text-white text-sm md:text-base font-semibold mb-4 backdrop-blur-sm animate-fade-in">Eco-Friendly Innovation</span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-slide-up text-brand-black" style={{textShadow: '0 4px 10px rgba(0,0,0,0.05)'}}>
              Our <span className="text-brand-green relative inline-block">
                Products
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-brand-green/40 rounded-full"></span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-brand-black/80 leading-relaxed animate-slide-up" style={{animationDelay: '0.1s'}}>
              We transform human hair waste into premium organic fertilizers, creating sustainable solutions for agriculture and the environment
            </p>
              <div className="flex flex-wrap gap-4 justify-center animate-slide-up" style={{animationDelay: '0.2s'}}>              
              <a 
                href="#how-it-works"
                className="px-8 py-4 bg-transparent border-2 border-brand-green/60 backdrop-blur-sm text-brand-green font-semibold rounded-full hover:bg-brand-green/5 transition-all duration-300 transform hover:-translate-y-1 flex items-center"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center">
            <span className="text-brand-black/70 text-sm mb-2">Scroll to explore</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>      
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-brand-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute inset-0 bg-circle-pattern opacity-5 bg-[length:40px_40px]"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-green/10 text-brand-green text-sm font-medium mb-4">Our Process</span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-black mb-6">
              How We <span className="text-brand-green relative inline-block">
                Transform Hair Waste
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-brand-green/30 rounded-full"></span>
              </span>
            </h2>
            <p className="text-lg text-brand-black/70 max-w-2xl mx-auto leading-relaxed">
              From salon waste to sustainable agriculture - our innovative process creates value from what would otherwise be discarded
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            {/* Connecting Line */}
            <div className="absolute top-1/3 left-0 w-full h-0.5 bg-brand-green/20 hidden md:block"></div>
            
            {/* Step 1 */}
            <div className="relative">
              <div className="group bg-white rounded-2xl p-8 shadow-custom hover:shadow-custom-hover transition-all duration-500 transform hover:-translate-y-2 border border-brand-green/5 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-green/5 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-green/20 to-brand-green/10 text-brand-green flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors duration-500 transform group-hover:rotate-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>
                  
                  <div className="absolute top-24 left-1/2 transform -translate-x-1/2 hidden md:block">
                    <div className="w-10 h-10 bg-white rounded-full border-4 border-brand-green/20 z-20 flex items-center justify-center text-brand-green font-bold">1</div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-brand-black group-hover:text-brand-green transition-colors duration-300 text-center">Collection</h3>
                  
                  <p className="text-brand-black/70 leading-relaxed text-center">
                    We collect hair waste from salons and barbershops across Tanzania, diverting it from landfills and preventing pollution.
                  </p>
                  
                  <div className="mt-6 w-12 h-1 bg-brand-green/30 rounded-full mx-auto group-hover:w-20 transition-all duration-500"></div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative mt-16 md:mt-0">
              <div className="group bg-white rounded-2xl p-8 shadow-custom hover:shadow-custom-hover transition-all duration-500 transform hover:-translate-y-2 border border-brand-green/5 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-green/5 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-green/20 to-brand-green/10 text-brand-green flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors duration-500 transform group-hover:rotate-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  
                  <div className="absolute top-24 left-1/2 transform -translate-x-1/2 hidden md:block">
                    <div className="w-10 h-10 bg-white rounded-full border-4 border-brand-green/20 z-20 flex items-center justify-center text-brand-green font-bold">2</div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-brand-black group-hover:text-brand-green transition-colors duration-300 text-center">Processing</h3>
                  
                  <p className="text-brand-black/70 leading-relaxed text-center">
                    We process the hair waste through our proprietary method to extract nutrients and create organic fertilizer for agricultural use.
                  </p>
                  
                  <div className="mt-6 w-12 h-1 bg-brand-green/30 rounded-full mx-auto group-hover:w-20 transition-all duration-500"></div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative mt-16 md:mt-0">
              <div className="group bg-white rounded-2xl p-8 shadow-custom hover:shadow-custom-hover transition-all duration-500 transform hover:-translate-y-2 border border-brand-green/5 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-green/5 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-green/20 to-brand-green/10 text-brand-green flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors duration-500 transform group-hover:rotate-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  
                  <div className="absolute top-24 left-1/2 transform -translate-x-1/2 hidden md:block">
                    <div className="w-10 h-10 bg-white rounded-full border-4 border-brand-green/20 z-20 flex items-center justify-center text-brand-green font-bold">3</div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-brand-black group-hover:text-brand-green transition-colors duration-300 text-center">Product Creation</h3>
                  
                  <p className="text-brand-black/70 leading-relaxed text-center">
                    We transform the processed hair into effective organic fertilizers and soil enhancers for sustainable agriculture across Tanzania.
                  </p>
                  
                  <div className="mt-6 w-12 h-1 bg-brand-green/30 rounded-full mx-auto group-hover:w-20 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-custom hover:shadow-custom-hover transition-all duration-500 flex flex-col md:flex-row transform hover:-translate-y-2 border border-brand-green/5"
              >
                <div className="md:w-2/5 relative overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-brand-green border border-brand-green/20">
                    ${product.price}
                  </div>
                  <div className="absolute inset-0 bg-brand-green/20 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10"></div>
                  <div className="relative h-80 md:h-full w-full">
                    <Image 
                      src={product.image} 
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="md:w-3/5 p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-brand-black mb-4 group-hover:text-brand-green transition-colors duration-300">{product.name}</h3>
                  
                  <p className="text-brand-black/70 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <h4 className="font-semibold text-brand-black mb-4 flex items-center">
                    <span className="w-6 h-1 bg-brand-green/50 rounded-full mr-2"></span>
                    Key Features
                  </h4>
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start group/item">
                        <div className="bg-brand-green/10 rounded-full p-1 text-brand-green mr-3 mt-0.5 group-hover:item:bg-brand-green group-hover:item:text-white transition-colors duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-brand-black/80 group-hover/item:text-brand-black transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                      <div style={{display:'flex',alignItems:'center'}}>
                      <button onClick={()=>{
                        if (cart.some(obj => obj.product.id == product.id)) {
                          updateCart(product.id, amounts.find(a => a.id == product.id).amount, 'add')
                        } else {
                          addItemToCart(product, amounts.find(a => a.id == product.id).amount)
                        }
                      }} style={{marginRight:'10px'}} className="group/btn inline-flex items-center px-6 py-3 bg-brand-green text-white font-semibold rounded-full shadow-btn hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    Add to cart
                  </button>
                  <p style={{width:'12rem',display:'flex',alignItems:'center'}}>
                    <button onClick={()=>setAmounts(prev => prev.map(p => p.id == product.id ? {id:p.id,amount:p.amount+1} : p))} style={{width: '2.6rem', height: '2.6rem'}}>+</button>
                    <span>{amounts.find(a => a.id == product.id).amount}</span>
                    <button onClick={()=>setAmounts(prev => prev.map(p => p.id == product.id ? {id:p.id,amount:Math.max(0, p.amount-1)} : p))} style={{width: '2.6rem', height: '2.6rem'}}>-</button>
                  </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>      {/* Impact Stats */}
      <section className="py-24 bg-brand-green-ultra-light text-brand-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-circle-pattern opacity-10 bg-[length:30px_30px]"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-green text-white text-sm font-medium mb-4 backdrop-blur-sm">Our Impact</span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-black mb-2">
              Making a <span className="text-brand-green">Difference</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white rounded-2xl p-8 text-center border border-brand-green/10 hover:border-brand-green/30 shadow-custom hover:shadow-custom-hover transform hover:-translate-y-2 transition-all duration-500">
              <div className="text-5xl md:text-6xl font-bold text-brand-green mb-4">100+</div>
              <p className="text-brand-black/80 text-lg font-medium">Collection Points</p>
              <div className="mt-6 mx-auto w-16 h-1 bg-brand-green/30 rounded-full"></div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center border border-brand-green/10 hover:border-brand-green/30 shadow-custom hover:shadow-custom-hover transform hover:-translate-y-2 transition-all duration-500">
              <div className="text-5xl md:text-6xl font-bold text-brand-green mb-4">200+</div>
              <p className="text-brand-black/80 text-lg font-medium">Farmers Supported</p>
              <div className="mt-6 mx-auto w-16 h-1 bg-brand-green/30 rounded-full"></div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center border border-brand-green/10 hover:border-brand-green/30 shadow-custom hover:shadow-custom-hover transform hover:-translate-y-2 transition-all duration-500">
              <div className="text-5xl md:text-6xl font-bold text-brand-green mb-4">5 Tons</div>
              <p className="text-brand-black/80 text-lg font-medium">Hair Waste Recycled</p>
              <div className="mt-6 mx-auto w-16 h-1 bg-brand-green/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>      {/* Call To Action */}
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

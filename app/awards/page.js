"use client";

import Image from "next/image";
import Link from "next/link";
import HeroSection from '../components/HeroSection';

export default function Awards() {  // Awards data from Linktree
  const awards = [
    {
      id: 1,
      title: "Anzisha Prize",
      organization: "African Leadership Academy | MasterCard Foundation",
      year: "2020",
      description: "David Denis, founder of CutOff Recycle, was selected as one of Africa's top very young entrepreneurs (VYEs) by the Anzisha Prize for innovation in sustainable waste management.",
      image: "/new/anzisha.jpg",
      link: "https://anzishaprize.org/fellows/david-denis/"
    },
    {
      id: 2,
      title: "Global Student Entrepreneur Awards",
      organization: "Entrepreneurs' Organization",
      year: "2021",
      description: "Achieved 2nd Place Overall Globally, recognized for outstanding entrepreneurial excellence while successfully balancing the demands of academics and business management.",
      image: "/new/gsea.jpg",
      link: "https://gsea.org/gsea/gsea/profile.aspx?id=371599&ordinal=79"
    },
    {
      id: 3,
      title: "Startupper of the Year Challenge",
      organization: "TotalEnergies Tanzania",
      year: "2022",
      description: "Recognized as top 15 in the Business Creation category",
      image: "/new/Total Energies.jpg",
      link: "https://www.instagram.com/p/CbYNLyAstlV/?img_index=1"
    },
    {
      id: 4,
      title: "Extreme Tech Challenge - StartUp Innovation Awards",
      organization: "FAO | World Food Forum",
      year: "2023",
      description: "Semi-Finalists in Better Environment Category",
      image: "/new/extremetech.jpg",
      link: "https://extremetechchallenge.org/finalists/cutoff-recycle/"
    },
    {
      id: 5,
      title: "WSHA Anniversary Pitch Competition",
      organization: "Westerwelle Startup Haus Arusha",
      year: "2024",
      description: "Won First place during the WSHA 2nd Anniversary Alumni Pitch Competition",
      image: "/Images/Photos/BNK_0694.jpg",
      link: "https://www.facebook.com/share/p/1Fwvh1SspM/"
    },
    {
      id: 6,
      title: "SOMO Business Support Program",
      organization: "SOMO",
      year: "2024",
      description: "Received business financial support to boost growth and accounting software for real time financial tracking.",
      image: "/new/SOMO.jpg",
      link: "https://invest.somoafrica.org/public/2659/CUTOFF%20RECYCLE%20LIMITED"
    },
    {
      id: 5,
      title: "Innovation Week Arusha Pitching Competition",
      organization: "UNDP | Institute of Accountancy Arusha",
      year: "2025",
      description: "Winner of business pitching competition about our human hair recycling innovation",
      image: "/new/innovationweek.jpg",
      link: "https://www.instagram.com/p/DIEhTq0uJNu/"
    },
    {
      id: 6,
      title: "Fund for Alumni Start-ups in Transition",
      organization: "MasterCard Foundation",
      year: "2025",
      description: "Received on-going support for our business growth and development by MasterCard Foundation as Anzisha Prize Alumni.",
      image: "/new/inkomoko.jpg",
      link: "https://www.linkedin.com/posts/inkomoko_solutionsfoundhere-activity-7355494721617543168-k8Be?utm_source=share&utm_medium=member_desktop&rcm=ACoAACihCDQBnkEHDpBKC0mvkFMq8SKYRwYlY-4"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-white font-mulish">
      <HeroSection
        title="Our Achievements and Recognition"
        subtitle="Discover our journey of innovation and impact through awards and accolades from leading organizations worldwide."
        backgroundImage="/Images/Photos/BNK_0676.jpg"
        tag="Awards"
      />
      
      <section className="py-20 bg-brand-white relative">
        <div className="container mx-auto px-4 text-center">
          <span className="text-brand-green uppercase tracking-wider text-sm md:text-base font-semibold mb-3 animate-fade-in">Recognition</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Awards & <span className="text-brand-green relative inline-block">
              Recognition
              <span className="absolute bottom-2 left-0 w-full h-1 bg-brand-green/30 rounded"></span>
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-center">
            Honoring our commitment to sustainable environmental solutions and community impact
          </p>
          <div className="animate-bounce mt-12 text-brand-black/50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>
      
      {/* Awards Section */}
      <section className="py-20 bg-brand-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute inset-0 bg-dot-pattern opacity-5 bg-[length:40px_40px]"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-24">
            {awards.map((award, index) => (
              <div 
                key={award.id} 
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="md:w-1/2">
                  <div className="relative">
                    {/* Image Decoration */}
                    <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-brand-green/20 rounded-lg transform -rotate-6"></div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-brand-green/20 rounded-lg transform rotate-6"></div>
                    
                    <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-2xl">
                      <Image 
                        src={award.image} 
                        alt={award.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="inline-block px-4 py-1 bg-brand-green/10 rounded-full text-brand-green text-sm font-medium mb-3">
                    {award.year}
                  </div>
                  <h2 className="text-3xl font-bold text-brand-black mb-4 group-hover:text-brand-green transition-colors duration-300">{award.title}</h2>
                  <p className="text-brand-black/70 mb-2 font-medium">{award.organization}</p>
                  <p className="text-lg text-brand-black/80 mb-6 leading-relaxed">
                    {award.description}
                  </p>
                  
                  {award.link && (
                    <a 
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-brand-green font-semibold hover:opacity-80 transition-colors"
                    >
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>        </div>
      </section>
        {/* Recognition Quote Section */}
      <section className="py-16 bg-white text-brand-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-pattern-waves opacity-5"></div>
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-brand-green/5 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-brand-green/5 blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-16 w-16 text-brand-green mx-auto mb-8 opacity-50" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179z"></path>
          </svg>
          <blockquote className="text-2xl md:text-3xl font-light italic mb-10 leading-relaxed text-brand-black/80">
            These awards and recognition reflect our dedication to creating sustainable solutions that positively impact our environment, support agricultural development, and empower local communities.
          </blockquote>
          <div className="flex items-center justify-center">
            <div className="w-20 h-20 relative rounded-full overflow-hidden mr-5 border-4 border-brand-green/30">
              <Image 
                src="/new/David0.jpg"
                alt="CEO" 
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-lg">David Denis</h3>
              <p className="text-brand-green">Founder & CEO, CutOff Recycle</p>
            </div>
          </div>
        </div>
      </section>      {/* CTA Section */}
      <section className="py-16 bg-brand-green-ultra-light text-brand-black">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Award-Winning Journey</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-brand-black/80">
            Partner with us to create sustainable solutions for waste management and agricultural development.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/contact"
              className="px-8 py-3 bg-brand-green text-white font-semibold rounded-md hover:opacity-90 transition-colors shadow-md hover:shadow-lg"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

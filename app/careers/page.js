'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaLeaf, FaPeopleCarry, FaHandHoldingHeart } from 'react-icons/fa';
import { BiTargetLock } from 'react-icons/bi';
import { MdOutlineScience, MdGroups, MdTrendingUp } from 'react-icons/md';
import { RiPlantLine } from 'react-icons/ri';
import HeroSection from '../components/HeroSection';

const JobCard = ({ title, department, location, type, id }) => (
  <motion.div 
    whileHover={{ scale: 1.02, y: -5 }}
    className="group p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-brand-green/20 transition-all duration-300"
  >
    <div className="flex items-start justify-between mb-4">
      <h3 className="text-xl font-semibold text-text-dark group-hover:text-brand-green transition-colors duration-300 leading-tight pr-4">
        {title}
      </h3>
      <div className="flex-shrink-0 w-2 h-2 bg-brand-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2"></div>
    </div>
    
    <div className="flex flex-wrap gap-2 mb-6">
      <span className="px-3 py-1.5 bg-brand-green/10 text-brand-green rounded-full text-xs font-medium border border-brand-green/20">
        {department}
      </span>
      <span className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
        {location}
      </span>
      <span className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
        {type}
      </span>
    </div>
    
    <Link href={`/careers/${id}`}>
      <button className="w-full px-6 py-3 border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white transition-all duration-300 rounded-full font-medium group-hover:shadow-md">
        View Details & Apply
      </button>
    </Link>
  </motion.div>
);

const CultureCard = ({ Icon, title, description, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2, duration: 0.6 }}
    className="group relative overflow-hidden"
  >
    <div className="relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-brand-green/20 h-full">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
      
      {/* Icon container */}
      <div className="relative z-10 mb-6">
        <div className="w-20 h-20 mx-auto relative">
          <div className="absolute inset-0 bg-brand-green/10 rounded-2xl group-hover:bg-brand-green/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"></div>
          <div className="relative w-full h-full flex items-center justify-center">
            <Icon className="w-10 h-10 text-brand-green group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <h3 className="text-2xl font-bold text-text-dark mb-4 group-hover:text-brand-green transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-base">
          {description}
        </p>
      </div>
      
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-brand-green to-brand-green/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  </motion.div>
);

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState('all');
  
  const { getAllJobs, getCategories } = require('@/app/data/jobs');
  const jobs = getAllJobs();
  const categories = ['all', ...getCategories()];

  const cultureValues = [
    {
      Icon: RiPlantLine,
      title: "Sustainability First",
      description: "We're committed to creating a more sustainable future through innovative hair recycling and environmental stewardship in everything we do."
    },
    {
      Icon: MdGroups,
      title: "Inclusive Community",
      description: "We celebrate diversity and create an environment where everyone can thrive, fostering collaboration and mutual respect across all levels."
    },
    {
      Icon: BiTargetLock,
      title: "Impact Driven",
      description: "Every action we take is measured by its positive impact on the environment and society, creating meaningful change for future generations."
    }
  ];

  const filteredJobs = activeTab === 'all' 
    ? jobs 
    : jobs.filter(job => job.category === activeTab);

  const heroCtaButtons = [
    {
      text: "View Open Positions",
      href: "#positions",
      primary: true
    },
    {
      text: "Learn About Our Culture",
      href: "#culture",
      primary: false
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section using imported component */}
      <HeroSection
        title="Join Our Mission"
        subtitle="Be part of a team that's transforming the beauty industry while making a positive impact on the environment."
        backgroundImage="/new/teachers.png"
        ctaButtons={heroCtaButtons}
        showPattern={true}
        className="min-h-[70vh]"
      />

      {/* Culture Section - Updated Design */}
      <section id="culture" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
                Our <span className="text-brand-green">Culture</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built on values that drive meaningful change and foster an environment where innovation thrives
              </p>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {cultureValues.map((value, index) => (
              <CultureCard key={index} {...value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
              Open <span className="text-brand-green">Positions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Discover opportunities to make a difference while advancing your career
            </p>
          </div>
          
          {/* Job Categories Filter */}
          <div className="flex justify-center gap-3 mb-16 flex-wrap">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border-2
                  ${activeTab === tab 
                    ? 'bg-brand-green text-white border-brand-green shadow-lg' 
                    : 'bg-white text-gray-600 border-gray-200 hover:bg-brand-green/5 hover:text-brand-green hover:border-brand-green/30'
                  }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <JobCard {...job} />
              </motion.div>
            ))}
          </div>
          
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No positions available in this category at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-brand-green/5 via-white to-brand-green/10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
              Why Choose <span className="text-brand-green">CutOff Recycle?</span>
            </h2>
            <p className="text-xl text-gray-600">
              More than just a job - it's an opportunity to be part of something bigger
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-green/20 transition-all duration-300">
                <FaHandHoldingHeart className="w-8 h-8 text-brand-green group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-text-dark mb-4 group-hover:text-brand-green transition-colors duration-300">Meaningful Impact</h3>
              <p className="text-gray-600 leading-relaxed">Be part of a mission-driven company that's making a real difference in environmental sustainability and community development.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-green/20 transition-all duration-300">
                <MdTrendingUp className="w-8 h-8 text-brand-green group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-text-dark mb-4 group-hover:text-brand-green transition-colors duration-300">Growth & Development</h3>
              <p className="text-gray-600 leading-relaxed">Continuous learning opportunities and career advancement in a rapidly growing industry with global impact potential.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-green/20 transition-all duration-300">
                <FaPeopleCarry className="w-8 h-8 text-brand-green group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-text-dark mb-4 group-hover:text-brand-green transition-colors duration-300">Inclusive Culture</h3>
              <p className="text-gray-600 leading-relaxed">Work in a diverse, supportive environment that values every team member's unique perspective and fosters innovation.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

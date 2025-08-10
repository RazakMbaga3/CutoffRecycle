'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const JobCard = ({ title, department, location, type }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="p-6 bg-white rounded-lg shadow-md border border-neutral-gray hover:border-brand-green transition-all"
  >
    <h3 className="text-xl font-semibold text-text-dark mb-2">{title}</h3>
    <div className="flex flex-wrap gap-3 mt-4">
      <span className="px-3 py-1 bg-brand-green-ultra-light text-brand-green rounded-full text-sm">
        {department}
      </span>
      <span className="px-3 py-1 bg-neutral-gray text-text-light rounded-full text-sm">
        {location}
      </span>
      <span className="px-3 py-1 bg-neutral-gray text-text-light rounded-full text-sm">
        {type}
      </span>
    </div>
    <button className="mt-4 px-6 py-2 border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white transition-all rounded-full">
      Apply Now
    </button>
  </motion.div>
);

const CultureCard = ({ icon, title, description }) => (
  <div className="p-6 bg-white rounded-lg text-center">
    <div className="w-16 h-16 mx-auto mb-4 relative">
      <Image
        src={icon}
        alt={title}
        fill
        className="object-contain"
      />
    </div>
    <h3 className="text-xl font-semibold text-text-dark mb-3">{title}</h3>
    <p className="text-text-light">{description}</p>
  </div>
);

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState('all');
  
  const jobs = [
    {
      title: "Sustainability Specialist",
      department: "Environmental Impact",
      location: "Remote",
      type: "Full-time",
      category: "environmental"
    },
    {
      title: "Hair Collection Manager",
      department: "Operations",
      location: "New York",
      type: "Full-time",
      category: "operations"
    },
    {
      title: "Community Engagement Coordinator",
      department: "Outreach",
      location: "Hybrid",
      type: "Full-time",
      category: "community"
    },
    {
      title: "Supply Chain Analyst",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      category: "operations"
    }
  ];

  const cultureValues = [
    {
      icon: "/new/science.png",
      title: "Sustainability First",
      description: "We're committed to creating a more sustainable future through innovative hair recycling."
    },
    {
      icon: "/new/people.png",
      title: "Inclusive Community",
      description: "We celebrate diversity and create an environment where everyone can thrive."
    },
    {
      icon: "/new/farm.png",
      title: "Impact Driven",
      description: "Every action we take is measured by its positive impact on the environment and society."
    }
  ];

  const filteredJobs = activeTab === 'all' 
    ? jobs 
    : jobs.filter(job => job.category === activeTab);

  return (
    <main className="min-h-screen bg-neutral-gray">
      {/* Hero Section */}
      <section className="relative bg-brand-green text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="hero-title mb-6"
            >
              Join Our Mission to Revolutionize Hair Recycling
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="body-large mb-8"
            >
              Be part of a team that's transforming the beauty industry while making a positive impact on the environment.
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-neutral-gray" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
      </section>

      {/* Culture Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Our Culture</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cultureValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <CultureCard {...value} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Open Positions</h2>
          
          {/* Job Categories Filter */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {['all', 'environmental', 'operations', 'community'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                  ${activeTab === tab 
                    ? 'bg-brand-green text-white' 
                    : 'bg-neutral-gray text-text-light hover:bg-brand-green-ultra-light hover:text-brand-green'
                  }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <JobCard {...job} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-brand-green-ultra-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Why Join Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-center p-6"
            >
              <h3 className="text-xl font-semibold text-text-dark mb-4">Meaningful Impact</h3>
              <p className="text-text-light">Be part of a mission-driven company that's making a real difference in environmental sustainability.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center p-6"
            >
              <h3 className="text-xl font-semibold text-text-dark mb-4">Growth & Development</h3>
              <p className="text-text-light">Continuous learning opportunities and career advancement in a rapidly growing industry.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center p-6"
            >
              <h3 className="text-xl font-semibold text-text-dark mb-4">Inclusive Culture</h3>
              <p className="text-text-light">Work in a diverse, supportive environment that values every team member's unique perspective.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

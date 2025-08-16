'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import HeroSection from '../components/HeroSection';

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
      title: "Hair Collection Manager",
      department: "Operations",
      location: "Arusha, Tanzania",
      type: "Full-time",
      category: "operations"
    },
    {
      title: "Sales Manager",
      department: "Sales",
      location: "Arusha, Tanzania",
      type: "Full-time",
      category: "sales"
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Arusha, Tanzania",
      type: "Full-time",
      category: "marketing"
    },
    {
      title: "Compliance Manager",
      department: "Legal & Compliance",
      location: "Arusha, Tanzania",
      type: "Full-time",
      category: "operations"
    },
    {
      title: "Operations Manager",
      department: "Operations",
      location: "Arusha, Tanzania",
      type: "Full-time",
      category: "operations"
    },
    {
      title: "Finance and Accounts Manager",
      department: "Finance",
      location: "Arusha, Tanzania",
      type: "Full-time",
      category: "finance"
    },
    {
      title: "Production Manager",
      department: "Production",
      location: "Arusha, Tanzania",
      type: "Full-time",
      category: "operations"
    },
    {
      title: "Data Analyst (Monitoring & Evaluation Manager)",
      department: "Analytics",
      location: "Arusha, Tanzania",
      type: "Full-time",
      category: "analytics"
    },
    {
      title: "People & Culture Manager",
      department: "Human Resources",
      location: "Arusha, Tanzania",
      type: "Full-time",
      category: "hr"
    },
    {
      title: "Digital Design and Web Specialist",
      department: "Digital",
      location: "Arusha, Tanzania",
      type: "Full-time",
      category: "marketing"
    },
    {
      title: "Social Media Manager",
      department: "Marketing",
      location: "Arusha, Tanzania",
      type: "Full-time",
      category: "marketing"
    },
    {
      title: "Digital Content Creator",
      department: "Marketing",
      location: "Arusha, Tanzania",
      type: "Full-time",
      category: "marketing"
    },
    {
      title: "Reception & Office Administrative Assistant",
      department: "Administration",
      location: "Arusha, Tanzania",
      type: "Full-time",
      category: "administration"
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
    <main className="min-h-screen bg-neutral-gray">
      {/* Hero Section using imported component */}
      <HeroSection
        title="Join Our Mission to Revolutionize Hair Recycling"
        subtitle="Be part of a team that's transforming the beauty industry while making a positive impact on the environment."
        backgroundImage="/new/teachers.jpg"
        ctaButtons={heroCtaButtons}
        showPattern={true}
        className="min-h-[70vh]"
      />

      {/* Culture Section */}
      <section id="culture" className="py-20">
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
      <section id="positions" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Open Positions</h2>
          
          {/* Job Categories Filter */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {['all', 'operations', 'marketing', 'sales', 'finance', 'hr', 'analytics', 'administration'].map((tab) => (
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

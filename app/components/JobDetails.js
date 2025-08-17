// components/JobDetails.js
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const JobDetails = ({ job }) => {
  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-dark mb-4">Job Not Found</h1>
          <Link href="/careers" className="text-brand-green hover:underline">
            Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Link 
            href="/careers" 
            className="inline-flex items-center text-brand-green hover:text-brand-green/80 transition-colors mb-6"
          >
            <span className="mr-2">←</span>
            Back to Careers
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              {job.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-brand-green rounded-full"></span>
                <span>{job.department}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-gray-400 rounded-full"></span>
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-gray-400 rounded-full"></span>
                <span>{job.type}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-8 mb-8"
              >
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {job.description}
                  </p>
                  
                  <h3 className="text-2xl font-bold text-text-dark mb-4">Key Requirements:</h3>
                  <ul className="space-y-2 mb-8">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="text-gray-700 leading-relaxed flex items-start">
                        <span className="w-2 h-2 bg-brand-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {req}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-brand-green/5 rounded-xl p-6 border border-brand-green/20">
                    <h4 className="text-lg font-semibold text-text-dark mb-2">Application Deadline:</h4>
                    <p className="text-brand-green font-medium">{job.deadline}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-8 sticky top-8"
              >
                <h3 className="text-xl font-bold text-text-dark mb-6">Ready to Apply?</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="w-5 h-5 text-brand-green">✉</span>
                    <div>
                      <p className="font-medium text-text-dark">Send your CV to:</p>
                      <a 
                        href="mailto:career@cutoffrecycle.co.tz"
                        className="text-brand-green hover:underline"
                      >
                        career@cutoffrecycle.co.tz
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href={`mailto:career@cutoffrecycle.co.tz?subject=Application for ${encodeURIComponent(job.title)}`}
                  className="w-full bg-brand-green text-white py-4 px-6 rounded-full font-medium hover:bg-brand-green/90 transition-colors flex items-center justify-center gap-2 group"
                >
                  <span>✉</span>
                  Apply Now
                </a>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-text-dark mb-3">About CutOff Recycle</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We're revolutionizing waste management through innovative hair recycling solutions, 
                    creating sustainable products while making a positive environmental impact.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Jobs */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-text-dark mb-8 text-center">
            Other Open Positions
          </h2>
          <div className="text-center">
            <Link 
              href="/careers#positions"
              className="inline-flex items-center px-6 py-3 bg-brand-green/10 text-brand-green rounded-full hover:bg-brand-green/20 transition-colors"
            >
              View All Positions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default JobDetails;

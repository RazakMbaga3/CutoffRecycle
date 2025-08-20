'use client';

import { getJobById } from '@/app/data/jobs';
import Link from 'next/link';

export default function JobDetails({ params }) {
  const job = getJobById(params.jobId);

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Job Not Found</h1>
          <p className="text-gray-600 mb-8">The position you're looking for doesn't exist or has been filled.</p>
          <Link 
            href="/careers"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-green hover:bg-brand-green-dark transition-colors duration-300"
          >
            View All Positions
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link 
            href="/careers"
            className="inline-flex items-center text-brand-green hover:text-brand-green-dark mb-8 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Positions
          </Link>
          
          <div className="flex flex-wrap items-start justify-between gap-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{job.title}</h1>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-brand-green/10 text-brand-green rounded-full text-sm font-medium">
                  {job.department}
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                  {job.location}
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                  {job.type}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Position Overview</h2>
              <p className="text-gray-600 leading-relaxed">{job.description}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h2>
              <ul className="space-y-4">
                {job.requirements.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-green mt-2.5"></div>
                    <span className="ml-4 text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Position Details</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm text-gray-500">Department</dt>
                  <dd className="mt-1 text-sm text-gray-900">{job.department}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Location</dt>
                  <dd className="mt-1 text-sm text-gray-900">{job.location}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Type</dt>
                  <dd className="mt-1 text-sm text-gray-900">{job.type}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Deadline</dt>
                  <dd className="mt-1 text-sm text-gray-900">{job.deadline}</dd>
                </div>
              </dl>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <Link 
                  href="https://forms.gle/YourFormLink" // Replace with actual application form link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-brand-green hover:bg-brand-green-dark transition-all duration-300 transform hover:-translate-y-1"
                >
                  Apply for this Position
                </Link>
                
                <p className="text-center text-sm text-gray-500 mt-4">
                  Questions? Email us at{' '}
                  <a href="mailto:careers@cutoffrecycle.com" className="text-brand-green hover:text-brand-green-dark">
                    careers@cutoffrecycle.co.tz
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// app/careers/[jobId]/page.js
import JobDetails from '../../../components/JobDetails';
import { getJobById } from '../../../data/jobs';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  // This will generate static paths for all job IDs
  const jobIds = [
    'hair-collection-manager',
    'sales-manager', 
    'marketing-manager',
    'compliance-manager',
    'operations-manager',
    'finance-accounts-manager',
    'production-manager',
    'data-analyst',
    'people-culture-manager',
    'digital-design-web-specialist',
    'social-media-manager',
    'digital-content-creator',
    'reception-admin-assistant'
  ];
  
  return jobIds.map((jobId) => ({
    jobId: jobId,
  }));
}

export default function JobPage({ params }) {
  const job = getJobById(params.jobId);
  
  if (!job) {
    notFound();
  }

  return <JobDetails job={job} />;
}

export function generateMetadata({ params }) {
  const job = getJobById(params.jobId);
  
  if (!job) {
    return {
      title: 'Job Not Found',
    };
  }

  return {
    title: `${job.title} - CutOff Recycle Careers`,
    description: job.description,
  };
}

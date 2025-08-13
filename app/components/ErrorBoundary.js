'use client';

import { useEffect } from 'react';

export default function ErrorBoundary({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-4">
      <div className="bg-red-50 rounded-lg p-6 max-w-md w-full text-center">
        <h2 className="text-xl font-semibold text-red-800 mb-2">Something went wrong!</h2>
        <p className="text-red-600 mb-4">We apologize for the inconvenience. Please try again.</p>
        <button
          onClick={reset}
          className="px-4 py-2 bg-brand-green text-white rounded-full hover:bg-brand-green/90 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

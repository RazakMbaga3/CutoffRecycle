'use client';

import { onCLS, onFID, onLCP } from 'web-vitals';

function sendToAnalytics({ name, delta, id }) {
  // You can send to your analytics service here
  console.log(`Web Vitals: ${name}`, {
    name,
    delta,
    id,
  });
}

export function reportWebVitals() {
  onCLS(sendToAnalytics);
  onFID(sendToAnalytics);
  onLCP(sendToAnalytics);
}

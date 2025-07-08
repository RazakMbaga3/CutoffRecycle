"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import Tanzania from "./tanzania";

export default function DonateHairCTA() {
  const steps = [
    {
      title: "Collect Your Hair",
      description: "Save hair cuttings from your salon or personal haircuts. Make sure it&apos;s clean and dry."
    },
    {
      title: "Package It",
      description: "Place the hair in a clean, dry bag or container."
    },
    {
      title: "Drop Off",
      description: "Bring it to one of our collection points or contact us for pickup."
    }
  ];

  const locations = [
    {
      name: "Main Collection Center",
      address: "123 Green Street, Dar es Salaam",
      hours: "Open Tue-Sat, 9am-4pm",
      city: 'Dar es Salaam',
      coordinates: { lat: -6.7924, lng: 39.2083 }
    },
    {
      name: "Partner Salon",
      address: "456 Hair Avenue, Arusha",
      hours: "Open Mon-Fri, 10am-6pm",
      city: 'Arusha',
      coordinates: { lat: -3.3869, lng: 36.6822 }
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-6 bg-brand-green/10 rounded-full text-brand-green font-medium text-sm mb-4">
            Donate Hair
          </span>
          <h2 className="text-4xl font-bold mb-4">
            Join Our Recycling Movement
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your hair clippings can help improve soil fertility and support sustainable farming
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green font-bold">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-medium text-brand-black">{step.title}</h4>
                  <p className="text-brand-black/70">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6">Collection Points</h3>
          <Tanzania />
          <p className="text-brand-black/70 mt-6">
            Don&apos;t see a location near you? Contact us to arrange pickup or discuss becoming a collection point.
          </p>
        </div>

        <div className="text-center">
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-brand-green text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contact Us About Collection
          </Link>
        </div>
      </div>
    </section>
  );
}

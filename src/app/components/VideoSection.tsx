import React from 'react';

export default function VideoSection() {
  return (
    <section id="interviews" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Student Interviews
        </h2>
        
        <div className="space-y-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-96"
                src="https://www.youtube.com/embed/zi3YMutl0SI"
                title="Students' Perspective - Dust to Downpour: Student Insights on Lubbock's Rapid Weather Changes"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Students&apos; Perspective - Dust to Downpour: Student Insights on Lubbock&apos;s Rapid Weather Changes</h3>
              <p className="text-gray-600">Senior students share their best advice for making it through Lubbock&apos;s notorious weather patterns without losing your sanity.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
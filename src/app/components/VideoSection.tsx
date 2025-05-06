import React from 'react';

interface VideoProps {
  title: string;
  description: string;
  embedId: string;
}

const videos: VideoProps[] = [
  {
    title: "Surviving Dust Season at Texas Tech",
    description: "Senior students share their best advice for making it through Lubbock's notorious dust storms without losing your sanity.",
    embedId: "dQw4w9WgXcQ" // Placeholder YouTube ID
  },
  {
    title: "When Spring Brings Snow: April Weather Anomalies",
    description: "Meteorology students explain the unique weather patterns that make Lubbock weather so unpredictable in the spring months.",
    embedId: "dQw4w9WgXcQ" // Placeholder YouTube ID
  },
  {
    title: "Dorm Life During Extreme Weather",
    description: "Freshman students discuss their first experiences with Lubbock's wild weather swings and how dorm living adds to the challenge.",
    embedId: "dQw4w9WgXcQ" // Placeholder YouTube ID
  }
];

export default function VideoSection() {
  return (
    <section id="interviews" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Student Interviews
        </h2>
        
        <div className="space-y-12">
          {videos.map((video, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-96"
                  src={`https://youtu.be/zi3YMutl0SI`}
                  title={"Students' Perspective - Dust to Downpour: Student Insights on Lubbock's Rapid Weather Changes"}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Students&apos; Perspective - Dust to Downpour: Student Insights on Lubbock&apos;s Rapid Weather Changes</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
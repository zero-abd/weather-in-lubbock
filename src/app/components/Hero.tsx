import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-red-700 to-red-500 text-white py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center leading-tight">
          Dust to Downpour: Student Insights on Lubbock's Rapid Weather Changes
        </h1>
        
        <div className="text-xl text-center max-w-2xl mx-auto">
          <p>How Texas Tech students cope with erratic weather — combining preparation, community, and a healthy dose of humor</p>
        </div>
      </div>
    </div>
  );
} 
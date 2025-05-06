import React from 'react';
import WeatherDataCard from './WeatherDataCard';

export default function SurveyResults() {
  // Survey data based on the research methods
  const worstWeatherData = [
    { name: 'Dust Storms', value: 42, color: '#BB5D2E' },
    { name: 'Sudden Temperature Drops', value: 28, color: '#4E79A7' },
    { name: 'High Winds', value: 18, color: '#F28E2B' },
    { name: 'Flash Floods', value: 8, color: '#59A14F' },
    { name: 'Extreme Heat', value: 4, color: '#E15759' }
  ];
  
  const adaptationMethodsData = [
    { name: 'Multiple Outfits Daily', value: 65 },
    { name: 'Weather Apps', value: 88 },
    { name: 'Emergency Kit', value: 42 },
    { name: 'Dust Masks', value: 76 },
    { name: 'Weather Alerts', value: 91 }
  ];
  
  const favoriteSeasonData = [
    { name: 'Fall', value: 53 },
    { name: 'Spring', value: 21 },
    { name: 'Winter', value: 12 },
    { name: 'Summer', value: 14 }
  ];

  return (
    <section id="survey" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Survey Insights
        </h2>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-lg font-bold mb-4">Research Approach</h3>
          <p className="mb-4 overflow-hidden">We surveyed students across different majors, years, and home climates to understand how they cope with Lubbock&apos;s weather. Our Google Forms survey captured perspectives from a cross-section of Texas Tech students, providing a snapshot of experiences with Lubbock&apos;s unpredictable weather patterns.</p>
          <p className="text-sm text-gray-600">Note: These findings represent a snapshot, not a census of all Red Raiders.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <WeatherDataCard 
            type="pie"
            title="What weather phenomenon do you fear the most?"
            data={worstWeatherData}
            description="Dust storms remain the most feared weather event among students, with sudden temperature drops following closely."
          />
          
          <WeatherDataCard 
            type="bar"
            title="How do you adapt to unpredictable weather?"
            data={adaptationMethodsData}
            description="Most students rely on weather alerts and apps, while keeping multiple outfits ready is also a popular strategy."
          />
          
          <WeatherDataCard 
            type="pie"
            title="Favorite Season in Lubbock"
            data={favoriteSeasonData}
            description="Fall is the clear winner, with its moderate temperatures and spectacular sunsets making it the preferred season."
          />
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-lg font-bold mb-4">Weather Preparedness Stats</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <span className="flex-1 mr-2">Students who check weather daily:</span>
                <span className="font-bold flex-shrink-0">94%</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex-1 mr-2">Students who have been caught in a dust storm:</span>
                <span className="font-bold flex-shrink-0">87%</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex-1 mr-2">Students who own weather-specific gear:</span>
                <span className="font-bold flex-shrink-0">73%</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex-1 mr-2">Students who have been late to class due to weather:</span>
                <span className="font-bold flex-shrink-0">68%</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex-1 mr-2">Students who feel prepared for Lubbock weather:</span>
                <span className="font-bold flex-shrink-0">41%</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600 mt-4">Data collected via Google Forms and visualized using React and Recharts.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 
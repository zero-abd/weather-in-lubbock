import React from 'react';

interface WeatherDataCardProps {
  type: 'pie' | 'bar';
  title: string;
  data: Array<{
    name: string;
    value: number;
    color?: string;
  }>;
  description: string;
}

const COLORS = ['#FF5733', '#FFC300', '#36A2EB', '#4BC0C0', '#9966FF', '#FF9F80'];

export default function WeatherDataCard({ type, title, data, description }: WeatherDataCardProps) {
  // Calculate total for pie charts (to get percentages)
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      
      <div className="h-80 mb-6 flex items-center justify-center overflow-hidden">
        {type === 'pie' ? (
          <div className="w-full">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {data.map((entry, index) => (
                <div key={`item-${index}`} className="flex items-center px-2 py-1 rounded bg-gray-100">
                  <div 
                    className="w-3 h-3 mr-2 rounded-full flex-shrink-0" 
                    style={{ backgroundColor: entry.color || COLORS[index % COLORS.length] }}
                  ></div>
                  <span className="text-sm">{entry.name}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col space-y-2 mt-4">
              {data.map((entry, index) => {
                const percentage = Math.round((entry.value / total) * 100);
                return (
                  <div key={`pie-bar-${index}`} className="w-full">
                    <div className="flex justify-between text-sm mb-1">
                      <span>{entry.name}</span>
                      <span>{percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full" 
                        style={{ 
                          width: `${percentage}%`,
                          backgroundColor: entry.color || COLORS[index % COLORS.length]
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="w-full">
            {data.map((entry, index) => (
              <div key={`bar-${index}`} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>{entry.name}</span>
                  <span>{entry.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div 
                    className="h-4 rounded-full" 
                    style={{ 
                      width: `${entry.value}%`,
                      backgroundColor: entry.color || COLORS[index % COLORS.length]
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <p className="text-sm text-gray-600 overflow-hidden">{description}</p>
    </div>
  );
} 
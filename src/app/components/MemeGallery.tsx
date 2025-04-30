import React from 'react';
import { FaInstagram } from 'react-icons/fa';

interface MemeProps {
  title: string;
  description: string;
  instagramUrl: string;
}

const memes: MemeProps[] = [
  {
    title: "When the dust storm hits during finals week",
    description: "Posted by @yikyak_lubbock",
    instagramUrl: "https://www.instagram.com/p/CxMzEGBuIs1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "Texas Tech students waiting for consistent weather",
    description: "Posted by @ttu_memes",
    instagramUrl: "https://www.instagram.com/p/Cz6w0Myup2m/?utm_source=ig_web_copy_link"
  },
  {
    title: "April in Lubbock: Winter, Spring, and Summer in 24 hours",
    description: "Posted by @lubbockweather",
    instagramUrl: "https://www.instagram.com/p/C5XR5ghutVp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  }
];

export default function MemeGallery() {
  return (
    <section id="gallery" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Lubbock Weather Meme Gallery
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {memes.map((meme, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <div className="text-center p-4">
                  <p className="font-bold mb-2">{meme.title}</p>
                  <a 
                    href={meme.instagramUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-600 hover:underline"
                  >
                    <FaInstagram className="mr-2" />
                    View on Instagram
                  </a>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">{meme.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-8 text-gray-600 italic">
          * Images will be added from the provided Instagram links
        </p>
      </div>
    </section>
  );
} 
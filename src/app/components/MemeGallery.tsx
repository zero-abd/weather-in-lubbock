import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

interface MemeProps {
  title: string;
  description: string;
  instagramUrl: string;
  imagePath: string;
}

const memes: MemeProps[] = [
  {
    title: "Random Flooding in Lubbock",
    description: "Posted by @ttu_yikyak",
    instagramUrl: "https://www.instagram.com/p/CxMzEGBuIs1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    imagePath: "/memes/meme1.png"
  },
  {
    title: "An usual day for students at Texas Tech",
    description: "Posted by @ttu_yikyak",
    instagramUrl: "https://www.instagram.com/p/Cz6w0Myup2m/?utm_source=ig_web_copy_link",
    imagePath: "/memes/meme2.png"
  },
  {
    title: "When the dust storm hits during spring",
    description: "Posted by @ttu_yikyak",
    instagramUrl: "https://www.instagram.com/p/C5XR5ghutVp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    imagePath: "/memes/meme3.png"
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
              <div className="h-80 bg-gray-200 flex items-center justify-center relative">
                <Image 
                  src={meme.imagePath}
                  alt={meme.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={index === 0}
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">{meme.description}</p>
                <a 
                  href={meme.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-600 hover:underline mt-2"
                >
                  <FaInstagram className="mr-2" />
                  View on Instagram
                </a>
              </div>
            </div>
          ))}
        </div>
      
      </div>
    </section>
  );
} 
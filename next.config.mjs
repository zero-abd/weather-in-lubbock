/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Configure for GitHub Pages
  basePath: '/weather-in-lubbock',
  assetPrefix: '/weather-in-lubbock/',
};

export default nextConfig; 
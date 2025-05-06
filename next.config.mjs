/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'docs',
  images: {
    unoptimized: true,
  },
  // Configure for GitHub Pages only in production
  basePath: process.env.NODE_ENV === 'production' ? '/weather-in-lubbock' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/weather-in-lubbock/' : '',
};

export default nextConfig; 
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure CSS is properly handled in static export
  assetPrefix: './',
  basePath: '',
};

export default nextConfig; 
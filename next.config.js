/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
  },
  experimental: {
    optimizeCss: true,
    optimizeFonts: true,
  }
};

module.exports = nextConfig;

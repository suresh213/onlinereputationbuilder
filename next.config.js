/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['onlinereputationbuilders.in']
  },
  experimental: {
    optimizeCss: true
  }
};

module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['onlinereputationbuilders.in']
  },
  experimental: {
    optimizeCss: true
  }
};

module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['onlinereputationbuilders.in']
  },
  experimental: {
    optimizeCss: true
  },
  async redirects() {
    return [
      {
        source: '/free-consultation',
        destination: '/reputation-management',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;


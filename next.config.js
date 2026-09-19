/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'onlinereputationbuilders.in',
      },
    ],
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


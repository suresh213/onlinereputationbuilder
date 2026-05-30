/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['buildbrandbetter.io']
  }
};

module.exports = nextConfig;


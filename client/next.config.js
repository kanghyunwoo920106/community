/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.gravatar.com', 'localhost'],
  },
  basePath: '/client',
};

module.exports = nextConfig;

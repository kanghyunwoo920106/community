/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.gravatar.com', 'localhost', 'ec2-15-164-163-51.ap-northeast-2.compute.amazonaws.com'],
  },
};

module.exports = nextConfig;

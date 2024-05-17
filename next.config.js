/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_WORDPRESS_API_ENDPOINT: process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT,
  },
  images: {
    domains: ['http://test.local/graphql'],
  },
};

module.exports = nextConfig;

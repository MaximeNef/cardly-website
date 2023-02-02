/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CARDLY: process.env.NEXT_PUBLIC_CARDLY_MAIL,
  },
};

module.exports = nextConfig;

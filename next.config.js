/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withPreact = require('next-plugin-preact');
module.exports = withPreact(nextConfig)

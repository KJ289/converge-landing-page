/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    webpackBuildWorker: true,
    parallelServerCompiles: true,
    parallelServerBuildTraces: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/converge-landing-page',
  assetPrefix: '/converge-landing-page/',
  trailingSlash: true,
};

module.exports = nextConfig; 
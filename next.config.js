/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.DEPLOY === 'github' ? 'export' : undefined,
  basePath: process.env.DEPLOY === 'github' ? '/Certeza_idea' : '',
  assetPrefix: process.env.DEPLOY === 'github' ? '/Certeza_idea/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

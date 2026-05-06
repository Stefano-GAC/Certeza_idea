/** @type {import('next').NextConfig} */
const isGithubDeploy = process.env.DEPLOY === 'github';
const basePath = isGithubDeploy ? '/Certeza_idea' : '';

const nextConfig = {
  output: isGithubDeploy ? 'export' : undefined,
  basePath,
  assetPrefix: isGithubDeploy ? `${basePath}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

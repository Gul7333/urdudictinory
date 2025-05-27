import type { NextConfig } from "next";
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const repo = 'urdudictinory'; // ✅ Your GitHub repo name

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
    
  },
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};

export default nextConfig;

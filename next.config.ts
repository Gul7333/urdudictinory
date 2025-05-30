import type { NextConfig } from "next";
// const isGithubPages = process.env.GITHUB_PAGES === 'true';

// const repo = 'urdudictinory'; // ✅ Your GitHub repo name

const nextConfig: NextConfig = {
  env: {
    DATA_SOURCE: process.env.DATA_SOURCE || 'remote', // default fallback
  },
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
    
  },
  images: {
    unoptimized: true, // Required for static export to handle images
  },
  output: 'export',
  basePath: `/urdudictinory`,
  assetPrefix: `/urdudictinory`,
  // trailingSlash: true
  
  

};

export default nextConfig;

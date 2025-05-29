import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization for static export
  },
  basePath: isProd ? '/email-campaign' : '', // Replace with your GitHub repository name
  assetPrefix: isProd ? '/email-campaign/' : '', // Replace with your GitHub repository name
};

export default nextConfig;

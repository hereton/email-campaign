import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  reactStrictMode: false,
  basePath: isProd ? '/email-campaign' : '', // Replace with your GitHub repository name
  assetPrefix: isProd ? '' : '', // Replace with your GitHub repository name
};

export default nextConfig;

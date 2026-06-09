import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add this to allow network access for HMR
  allowedDevOrigins: ['*'],
};

export default nextConfig;
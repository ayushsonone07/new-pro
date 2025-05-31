import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      // Increase max body size to 10MB (adjust as needed)
      bodySizeLimit: '10mb',
    },
  },
};

export default nextConfig;

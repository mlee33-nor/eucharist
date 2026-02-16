import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // Disable strict mode for react-globe.gl compatibility
  turbopack: {}, // Enable Turbopack with empty config (no custom webpack needed for react-globe.gl)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.miracolieucaristici.org',
        pathname: '/**',
      },
    ],
    unoptimized: true, // Allow unoptimized images for external sources
  },
};

export default nextConfig;

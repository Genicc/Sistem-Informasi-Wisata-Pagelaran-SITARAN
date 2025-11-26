import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
            {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Domain CDN untuk thumbnail Google
      },
      {
        protocol: 'https',
        hostname: 'googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
    ],
  },
};

export default nextConfig;

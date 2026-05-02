import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'starpacindia.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/chatbot-api/:path*',
        destination: 'https://starpacai-1002394430168.europe-west1.run.app/:path*',
      },
    ]
  },
};

export default nextConfig;

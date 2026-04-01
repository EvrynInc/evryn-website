import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/wireframes",
        destination: "/wireframes.html",
      },
    ];
  },
};

export default nextConfig;

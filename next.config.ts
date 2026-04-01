import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/frontend-wireframes",
        destination: "/frontend-wireframes.html",
      },
    ];
  },
};

export default nextConfig;

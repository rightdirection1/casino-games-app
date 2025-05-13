import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.palmsbet.com",
        port: "", // Leave empty if no specific port is required
        pathname: "/**", // Allow all paths
      },
    ],
  },
  // output: "export",
};

export default nextConfig;

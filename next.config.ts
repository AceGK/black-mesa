import type { NextConfig } from "next";
const path = require("path");

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'], 
    deviceSizes: [640, 768, 1024, 1280, 1600, 1920], 
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    config.resolve.alias["@"] = path.resolve(__dirname, "src");

    return config;
  },
};

export default nextConfig;

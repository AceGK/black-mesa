import type { NextConfig } from "next";
const path = require("path");

const nextConfig: NextConfig = {
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

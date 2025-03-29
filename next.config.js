const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  output: "export", // Enables static export for GitHub Pages
  distDir: "out", // The directory where Next.js will output static files
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js"],
  eslint: {
    dirs: ["src"],
  },
  images: {
    domains: ["flagcdn.com"], // Remove "https://" from the domain, as it's not needed
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
    };
    return config;
  },
});

module.exports = nextConfig;

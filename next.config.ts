import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Transpile Three.js packages for proper ESM handling
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Strict mode for better development
  reactStrictMode: true,
};

export default nextConfig;

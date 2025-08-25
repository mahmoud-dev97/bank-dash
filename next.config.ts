import { resolve } from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: resolve(__dirname),
  },
};

export default nextConfig;

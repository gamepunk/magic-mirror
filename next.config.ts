import type { NextConfig } from "next";

// 静态导出：构建产物输出到 out/，由 GitHub Pages 托管。
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;

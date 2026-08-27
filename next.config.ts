import type { NextConfig } from "next";

// 静态导出：构建产物输出到 out/，由 GitHub Pages 托管。
// basePath：站点部署在 https://gamepunk.github.io/magic-mirror/ 子路径下，
// 不加的话 _next 资源会引用根路径导致 404（页面空白）。
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/magic-mirror",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;

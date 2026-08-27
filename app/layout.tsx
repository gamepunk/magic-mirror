import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Magic Mirror — 把屏幕上的任何内容变成实时悬浮镜像",
  description:
    "网页任意区域、任意窗口，真实渲染画面逐帧镜像。多页面内容合一、滚轮缩放、点击穿透——随你看，随时在。",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

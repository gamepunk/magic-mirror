# Magic Mirror 官网

![Website](https://img.shields.io/badge/website-gamepunk.github.io%2Fmagic-mirror-blue)
![CI](https://img.shields.io/github/actions/workflow/status/gamepunk/magic-mirror/deploy.yml?label=CI)
![Stack](https://img.shields.io/badge/Next.js%20%7C%20TypeScript%20%7C%20bun-black)

本仓库托管 Magic Mirror 的 GitHub Pages 网站。

- 🌐 网站：https://gamepunk.github.io/magic-mirror/
- 🖥️ macOS App 下载：https://gamepunk.github.io/magic-mirror/zh/mac/

## 技术栈

- [Next.js](https://nextjs.org/)（App Router，`output: "export"` 静态导出）
- TypeScript
- 双语路由：`/zh/**` 与 `/en/**`（文案在 `messages/zh.json` / `messages/en.json`）
- 包管理器：[bun](https://bun.sh/)

## 开发

```sh
bun install          # 安装依赖
bun run dev          # 本地开发（http://localhost:3000）
bun run build        # 静态导出到 out/
bun run typecheck    # TypeScript 类型检查
```

## 部署

推送到 `main` 分支后，GitHub Actions（`.github/workflows/deploy.yml`）自动构建并部署到 GitHub Pages（仓库设置里 Pages 源需选择 **GitHub Actions**）。

下载产物（dmg/zip）与 Sparkle `appcast.xml` 放在 `public/`，随站点一起导出（`/downloads/`、`/appcast.xml` 路径保持不变）。

---

# Magic Mirror Website

This repository hosts the Magic Mirror GitHub Pages site.

- 🌐 Site: https://gamepunk.github.io/magic-mirror/
- 🖥️ macOS App download: https://gamepunk.github.io/magic-mirror/en/mac/

## Stack

- [Next.js](https://nextjs.org/) (App Router, `output: "export"`)
- TypeScript
- Bilingual routes: `/zh/**` and `/en/**` (copy lives in `messages/zh.json` / `messages/en.json`)
- Package manager: [bun](https://bun.sh/)

## Development

```sh
bun install          # install dependencies
bun run dev          # local dev (http://localhost:3000)
bun run build        # static export to out/
bun run typecheck    # TypeScript type check
```

## Deployment

Pushing to `main` triggers GitHub Actions (`.github/workflows/deploy.yml`) which builds and deploys to GitHub Pages (set the Pages source to **GitHub Actions** in repo settings).

## Changelog

### 0.0.1

- Site launch: bilingual (ZH/EN), product intro, macOS App download page, extension page, usage guide, privacy policy, media kit
- macOS App downloads (0.0.1 dmg/zip) and Sparkle `appcast.xml` update feed
- Chrome extension store listing info + install button
- README badges

Download artifacts (dmg/zip) and the Sparkle `appcast.xml` live in `public/` and are exported with the site (`/downloads/`, `/appcast.xml` paths are unchanged).

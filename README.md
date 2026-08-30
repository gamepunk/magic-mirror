# Magic Mirror 官网

![Website](https://img.shields.io/badge/website-gamepunk.github.io%2Fmagic-mirror-blue)
![Stack](https://img.shields.io/badge/Jekyll%20%7C%20GitHub%20Pages-black)

本仓库托管 Magic Mirror 的 GitHub Pages 网站，由 **Jekyll** 构建（GitHub Pages 原生支持，push 即部署）。

- 🌐 网站：https://gamepunk.github.io/magic-mirror/
- 🖥️ macOS App 下载：https://gamepunk.github.io/magic-mirror/zh/mac/
- 🧩 Chrome 扩展：https://gamepunk.github.io/magic-mirror/zh/extension/

## 技术栈

- [Jekyll](https://jekyllrb.com/)（GitHub Pages 原生支持，无需 Actions 构建）
- 双语：`zh/` 与 `en/` 两个语言目录，共享布局（`_layouts/`）、页眉页脚（`_includes/`）与文案（`_data/`）
- 博客：Jekyll collections（`_zh_posts/`、`_en_posts/`），Markdown 写文章

## 目录结构

```
├── _config.yml          # Jekyll 配置（baseurl: /magic-mirror）
├── _data/               # 导航/页脚文案（zh.yml / en.yml）
├── _includes/           # 页眉、页脚
├── _layouts/            # 默认布局、博文布局
├── _zh_posts/ _en_posts/# 博客文章（Markdown）
├── assets/              # 样式与图片
├── downloads/           # dmg/zip 与 Sparkle appcast.xml
├── zh/  en/             # 页面（HTML，front matter 指定语言与标题）
└── index.html           # 根路径按浏览器语言重定向
```

## 本地开发

```sh
# 需要 Ruby 与 Jekyll
gem install jekyll
jekyll serve --baseurl ""   # http://localhost:4000
```

## 部署

GitHub Pages 原生构建 Jekyll：推送 `main` 即可。**仓库设置 → Pages 源请选择「Deploy from a branch」→ `main` / `/(root)`**（不再使用 GitHub Actions workflow）。

下载产物（dmg/zip）与 Sparkle `appcast.xml` 放在 `downloads/`，随站点一起部署（`/downloads/`、`/appcast.xml` 路径保持不变）。

---

# Magic Mirror Website

This repository hosts the Magic Mirror GitHub Pages site, built with **Jekyll** (natively supported by GitHub Pages — push to deploy).

- 🌐 Site: https://gamepunk.github.io/magic-mirror/
- 🖥️ macOS App download: https://gamepunk.github.io/magic-mirror/en/mac/
- 🧩 Chrome Extension: https://gamepunk.github.io/magic-mirror/en/extension/

## Stack

- [Jekyll](https://jekyllrb.com/) (GitHub Pages native)
- Bilingual: `zh/` and `en/` page trees sharing layouts, includes, and copy in `_data/`
- Blog: Jekyll collections (`_zh_posts/`, `_en_posts/`) written in Markdown

## Development

```sh
gem install jekyll
jekyll serve --baseurl ""   # http://localhost:4000
```

## Deployment

GitHub Pages builds Jekyll natively: just push `main`. **In repo Settings → Pages, choose "Deploy from a branch" → `main` / `/(root)`** (no GitHub Actions workflow anymore).

Download artifacts (dmg/zip) and the Sparkle `appcast.xml` live in `downloads/` and are served with the site (`/downloads/`, `/appcast.xml` paths are unchanged).

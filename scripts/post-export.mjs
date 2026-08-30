// 构建后处理：为每个 /zh/*、/en/* 页面生成「无语言前缀」的重定向页。
// 访问 /magic-mirror/mac 这类 URL 时，按浏览器语言自动跳到
// /magic-mirror/zh/mac 或 /magic-mirror/en/mac（meta refresh 兜底 zh）。
// GitHub Pages 是纯静态托管，不支持服务端跳转，只能生成静态 HTML。
import { readdirSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outDir = path.join(rootDir, "out");
const basePath = "/magic-mirror";

// 收集 zh/en 两个语言下的所有页面路由（index.html 所在目录，相对语言目录）。
const pages = new Map(); // route -> Set<lang>
for (const lang of ["zh", "en"]) {
  const langDir = path.join(outDir, lang);
  if (!existsSync(langDir)) continue;
  const walk = (dir, prefix) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full, `${prefix}/${entry.name}`);
      } else if (entry.name === "index.html") {
        const route = prefix.replace(/^\//, "");
        if (route) {
          if (!pages.has(route)) pages.set(route, new Set());
          pages.get(route).add(lang);
        }
      }
    }
  };
  walk(langDir, "");
}

const template = (route) => `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8" />
<title>Magic Mirror</title>
<meta http-equiv="refresh" content="0; url=${basePath}/zh/${route}/" />
<style>body{font-family:system-ui,sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;background:#f5f5f7;color:#333}a{color:#4285f4}</style>
</head>
<body>
<p>Magic Mirror · <a href="${basePath}/zh/${route}/">进入页面</a></p>
<script>
  (function () {
    var route = ${JSON.stringify(route)};
    var lang = (navigator.language || "zh").toLowerCase().indexOf("zh") === 0 ? "zh" : "en";
    location.replace("${basePath}/" + lang + "/" + route + "/");
  })();
</script>
</body>
</html>
`;

let count = 0;
for (const [route] of pages) {
  const dir = path.join(outDir, ...route.split("/"));
  const target = path.join(dir, "index.html");
  if (existsSync(target)) continue; // 避免覆盖已有页面
  mkdirSync(dir, { recursive: true });
  writeFileSync(target, template(route));
  count++;
}
console.log(`[post-export] generated ${count} locale redirect page(s)`);

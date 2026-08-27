// Shared i18n for the Magic Mirror GitHub Pages site.
// Elements marked with data-i18n (text) or data-i18n-html (innerHTML) get
// translated. Language is remembered in localStorage and can be overridden
// with ?lang=en|zh.
(function () {
  const STORAGE_KEY = "mm-lang";

  const I18N = {
    zh: {
      "nav.home": "首页",
      "nav.extension": "Chrome 扩展",
      "nav.macos": "macOS App",
      "nav.privacy": "隐私政策",
      "lang.toggle": "English",

      "hero.title": "Magic Mirror（魔镜）",
      "hero.lead":
        "把屏幕上的任何内容变成悬浮镜像 —— 网页任意区域、任意窗口，实时、像素级清晰，随你看，随时在。",
      "btn.products": "查看产品",

      "home.products": "产品",
      "home.products.desc": "同一个理念，两个平台。",
      "product.ext.t": "Chrome 扩展",
      "product.ext.d":
        "把网页任意区域变成悬浮实时镜像，支持多页面内容合一、滚轮缩放。",
      "product.ext.cta": "了解 Chrome 扩展 →",
      "product.mac.t": "macOS App",
      "product.mac.d":
        "镜像任意窗口或屏幕区域到多个置顶悬浮窗，支持独立 / 按 App 分组 / 统一三种容器模式。",
      "product.mac.cta": "了解 macOS App →",

      "home.features": "共同特性",
      "home.f1.t": "实时像素级镜像",
      "home.f1.d": "基于真实渲染画面，逐帧更新，与原内容一模一样。",
      "home.f2.t": "不动原内容",
      "home.f2.d": "只读取画面，绝不移动、删除或修改源窗口/网页。",
      "home.f3.t": "滚轮缩放",
      "home.f3.d": "在镜像上滚动滚轮即可放大缩小，细看每个细节。",
      "home.f4.t": "多容器模式",
      "home.f4.d": "独立容器、按 App 分组、统一容器，随你组合。",
      "home.f5.t": "点击穿透",
      "home.f5.d": "开启后点击可穿过悬浮窗，不影响后方操作。",
      "home.f6.t": "本地处理 · 隐私友好",
      "home.f6.d": "所有画面仅在本地处理，不收集、不上传任何数据。",

      "home.footer": "开源 · 所有处理都在本地完成，不上传任何数据",

      "usage.title": "Chrome 扩展 · 使用指南",
      "usage.lead": "从开始镜像到多页面管理，几分钟上手。",
      "usage.basic": "基本使用",
      "usage.s1": "点击浏览器工具栏上的 <strong>Magic Mirror 图标</strong>，打开操作面板。",
      "usage.s2": "点击「<strong>开始镜像</strong>」进入选择模式（页面元素会随鼠标悬停高亮）。",
      "usage.s3": "点击想要镜像的元素 —— 一个悬浮画中画窗口随即出现，实时显示该区域。",
      "usage.s4": "按 <kbd>Esc</kbd>（或再次点击「开始镜像」）退出选择模式，镜像会继续运行。",
      "usage.s5": "点击悬浮窗里的镜像格子（或再次点击原页面元素）可移除该镜像；关闭悬浮窗则停止一切。",
      "usage.win": "悬浮窗操作",
      "usage.w1": "<strong>滚轮缩放：</strong>鼠标悬停在格子上滚动滚轮，向上放大、向下缩小（0.25×–8×）。",
      "usage.w2": "<strong>查看倍数：</strong>鼠标悬停时格子右上角会显示当前缩放倍数。",
      "usage.w3": "<strong>移除：</strong>点击格子即可移除该镜像。",
      "usage.w4": "<strong>查看来源：</strong>来自其他页面的镜像，格子左上角会标注来源域名。",
      "usage.multi": "把多个页面的内容放进同一个悬浮窗",
      "usage.multi.d":
        "Chrome 全局只允许一个画中画窗口，但你可以让多个页面共享它：",
      "usage.m1": "在页面 A（比如 OKX）选择余额元素 —— 悬浮窗出现，页面 A 成为「宿主」。",
      "usage.m2": "切到页面 B（比如 TradingView），点击图标 → 开始镜像 → 选择价格元素。",
      "usage.m3": "页面 B 的内容自动加入页面 A 的悬浮窗，两个页面并排实时更新。",
      "usage.m4": "第 3、4……任意多个页面同理，每个页面贡献一个格子。",
      "usage.multi.note":
        "<strong>说明：</strong>每个页面最多贡献一个元素；来源页的位置变化会实时同步到悬浮窗；被切到后台的页面，Chrome 会降低其采集帧率，镜像更新可能没那么流畅。",
      "usage.ms": "多选模式",
      "usage.ms.d":
        "默认每个页面只保留一个镜像，重新点选会替换当前镜像。想在同一页面同时镜像多个元素，请在设置页开启「多选模式」（popup → 打开设置，或 <code>chrome://extensions</code> → Magic Mirror → 详情 → 扩展选项）。开启后选择模式保持开启，可以连续点选多个元素，共享一个悬浮窗。",
      "usage.notes": "注意事项",
      "usage.n1":
        "<strong>HTTPS 要求：</strong>镜像依赖于标签页采集，页面必须是 HTTPS（Chrome 的硬性要求）。",
      "usage.n2":
        "<strong>可视区域：</strong>采集的是当前可见的页面区域；如果被镜像的元素滚动出视口，格子会显示占位提示，滚回可见区域后自动恢复。",
      "usage.n3":
        "<strong>隐私：</strong>所有画面都在本地浏览器内处理，不上传、不存储任何数据。详见<a href=\"privacy.html\">隐私政策</a>。",
      "usage.install": "获取 Chrome 扩展",
      "usage.local": "本地开发加载",
      "usage.install.store": "在 Chrome Web Store 搜索 <strong>Magic Mirror</strong>（即将上架）。",
      "usage.install.local.1": "克隆仓库：<code>git clone https://github.com/gamepunk/magic-mirror-extension.git</code>",
      "usage.install.local.2": "构建：<code>bun install && bun run build</code>（需要 <a href=\"https://bun.sh\" target=\"_blank\">Bun</a>）",
      "usage.install.local.3": "打开 <code>chrome://extensions</code>，开启「开发者模式」，加载 <code>dist/</code> 目录",
      "usage.footer": "Chrome 扩展",

      "mac.title": "macOS App",
      "mac.lead": "镜像任意窗口或屏幕区域到多个置顶悬浮窗。",
      "mac.features": "功能",
      "mac.f1": "<strong>任意窗口镜像：</strong>选择任意打开的窗口，即刻创建浮动画中画叠加层。",
      "mac.f2": "<strong>多种容器模式：</strong>每个镜像独立容器 / 同一 App 聚合一个容器 / 所有镜像统一一个容器。",
      "mac.f3": "<strong>滚轮缩放：</strong>在镜像上滚动滚轮放大缩小（0.25×–8×）。",
      "mac.f4": "<strong>点击穿透：</strong>一键切换，点击穿过悬浮窗与后方内容交互。",
      "mac.f5": "<strong>帧率控制：</strong>每个镜像 1–60 FPS 可调。",
      "mac.getting": "获取 / 构建",
      "mac.install.1": "克隆仓库：<code>git clone https://github.com/gamepunk/magic-mirror-macos.git</code>",
      "mac.install.2": "构建并启动：<code>bash scripts/build-app.sh</code>",
      "mac.install.3": "或使用 Xcode 打开 <code>Package.swift</code> 直接运行。",
      "mac.require": "系统要求",
      "mac.req": "macOS 14.0+。首次使用需在「系统设置 → 隐私与安全性 → 屏幕录制」中授予权限。",
      "mac.privacy": "隐私",
      "mac.privacy.d": "所有画面仅在本地处理，不收集、不上传、不存储任何数据。",
      "mac.repo": "开源仓库：<a href=\"https://github.com/gamepunk/magic-mirror-macos\" target=\"_blank\">github.com/gamepunk/magic-mirror-macos</a>",
      "mac.footer": "macOS App",

      "privacy.title": "隐私政策",
      "privacy.effective": "生效日期：2026 年 8 月 27 日",
      "privacy.lead.1":
        "Magic Mirror（魔镜，下称“本产品”）尊重你的隐私。本政策适用于 Chrome 扩展与 macOS App，说明它们会访问哪些信息，以及这些信息如何处理。",
      "privacy.summary":
        "一句话总结：本产品不收集、不存储、不上传、不出售任何个人数据。所有处理都在你的设备本地完成。",
      "privacy.data": "数据访问与使用",
      "privacy.screen.t": "屏幕内容（tabCapture / ScreenCaptureKit）",
      "privacy.screen.d":
        "当你创建镜像时，Chrome 扩展使用 <code>tabCapture</code>、macOS App 使用 <code>ScreenCaptureKit</code> 读取<em>渲染画面</em>，以便在悬浮窗中显示。",
      "privacy.screen.1": "该数据仅用于绘制你请求的镜像。",
      "privacy.screen.2":
        "采集到的画面在设备<strong>本地</strong>处理，绝不会上传、存储或传输到任何地方。",
      "privacy.screen.3": "扩展/应用无法读取页面的 DOM、表单数据，也不会持久保存任何画面。",
      "privacy.tabs.t": "窗口与标签页信息",
      "privacy.tabs.d":
        "为让你选择要镜像的窗口，应用会读取窗口/标签页的<strong>标题与网址</strong>，仅用于选择界面与来源标注，不会被存储或传输。",
      "privacy.storage.t": "设置",
      "privacy.storage.d":
        "设置（如容器模式、帧率）保存在你的设备本地，不会在其他地方读取或写入。",
      "privacy.none.t": "无账号、无统计、无第三方",
      "privacy.none.d":
        "本产品<strong>不含</strong>任何分析、追踪、广告或第三方代码；没有账号系统、没有后端、不收集任何数据。",
      "privacy.changes.t": "政策变更",
      "privacy.changes.d": "如本政策发生变更，将更新页面顶部的“生效日期”，并在本地址发布新版本。",
      "privacy.contact.t": "联系我们",
      "privacy.contact.1":
        "对本隐私政策有任何疑问，请在各产品仓库提交 Issue。",
      "privacy.footer": "隐私政策",
    },

    en: {
      "nav.home": "Home",
      "nav.extension": "Chrome",
      "nav.macos": "macOS",
      "nav.privacy": "Privacy",
      "lang.toggle": "中文",

      "hero.title": "Magic Mirror",
      "hero.lead":
        "Turn anything on your screen into a floating mirror — any part of a webpage, any window. Live, pixel-accurate, always on top.",
      "btn.products": "View products",

      "home.products": "Products",
      "home.products.desc": "One idea, two platforms.",
      "product.ext.t": "Chrome Extension",
      "product.ext.d":
        "Mirror any part of a webpage in a floating window — multi-page, zoomable.",
      "product.ext.cta": "Chrome Extension →",
      "product.mac.t": "macOS App",
      "product.mac.d":
        "Mirror any window or screen region into floating always-on-top panels — per-item, per-app, or unified containers.",
      "product.mac.cta": "macOS App →",

      "home.features": "Shared features",
      "home.f1.t": "Live, pixel-perfect mirroring",
      "home.f1.d": "Built from real rendered frames, updated every frame.",
      "home.f2.t": "The source is untouched",
      "home.f2.d": "Only reads the picture; never moves or modifies the source.",
      "home.f3.t": "Scroll to zoom",
      "home.f3.d": "Hover a mirror and scroll to zoom in/out for details.",
      "home.f4.t": "Flexible containers",
      "home.f4.d": "Per-item, per-app grouping, or one unified gallery.",
      "home.f5.t": "Click-through",
      "home.f5.d": "Toggle click-through so floating windows never block your work.",
      "home.f6.t": "Local & private",
      "home.f6.d": "Everything is processed locally; nothing is collected or uploaded.",

      "home.footer": "Open source · everything stays on your device, nothing is uploaded",

      "usage.title": "Chrome Extension · Guide",
      "usage.lead": "From your first mirror to multi-page management in a few minutes.",
      "usage.basic": "Getting started",
      "usage.s1": "Click the <strong>Magic Mirror icon</strong> in the toolbar to open the panel.",
      "usage.s2": "Press <strong>Start mirror</strong> to enter picking mode (elements highlight on hover).",
      "usage.s3": "Click the element you want to mirror — a floating Picture-in-Picture window appears and shows it live.",
      "usage.s4": "Press <kbd>Esc</kbd> (or click <strong>Start mirror</strong> again) to leave picking mode; the mirror keeps running.",
      "usage.s5": "Click a tile in the window (or the source element again) to remove that mirror. Closing the window stops everything.",
      "usage.win": "Inside the floating window",
      "usage.w1": "<strong>Scroll to zoom:</strong> hover a tile and scroll up to zoom in, down to zoom out (0.25×–8×).",
      "usage.w2": "<strong>Zoom badge:</strong> hovering a tile shows its current zoom factor in the corner.",
      "usage.w3": "<strong>Remove:</strong> click a tile to remove it.",
      "usage.w4": "<strong>Source label:</strong> tiles from other pages show their origin domain in the corner.",
      "usage.multi": "Mirror content from multiple pages in one window",
      "usage.multi.d":
        "Chrome allows only one PiP window browser-wide — but many pages can share it:",
      "usage.m1": "On page A (e.g. OKX) pick the balance element — the window appears and page A becomes the host.",
      "usage.m2": "Switch to page B (e.g. TradingView), click the icon → Start mirror → pick the price element.",
      "usage.m3": "Page B joins page A's window automatically; both update live side by side.",
      "usage.m4": "Pages 3, 4, … work the same way — each page contributes one tile.",
      "usage.multi.note":
        "<strong>Note:</strong> each page contributes at most one element; the source element's position is synced to the window in real time. A backgrounded tab may be throttled by Chrome, so its mirror can update at a lower frame rate.",
      "usage.ms": "Multi-select mode",
      "usage.ms.d":
        "By default each page keeps one mirror — picking a new element replaces it. To mirror several elements from the same page, enable <strong>Multi-select mode</strong> in the options. Picking then stays active so you can add more tiles to the same window.",
      "usage.notes": "Notes",
      "usage.n1":
        "<strong>HTTPS required:</strong> mirroring relies on tab capture, so pages must be HTTPS (a Chrome requirement).",
      "usage.n2":
        "<strong>Visible area only:</strong> the capture reflects the currently visible page; if a mirrored element scrolls out of view, its tile shows a placeholder until it is visible again.",
      "usage.n3":
        "<strong>Privacy:</strong> everything is processed locally in your browser — nothing is uploaded or stored. See the <a href=\"privacy.html\">privacy policy</a>.",
      "usage.install": "Get the Chrome extension",
      "usage.local": "Load locally",
      "usage.install.store": "Search for <strong>Magic Mirror</strong> on the Chrome Web Store (coming soon).",
      "usage.install.local.1": "Clone the repo: <code>git clone https://github.com/gamepunk/magic-mirror-extension.git</code>",
      "usage.install.local.2": "Build: <code>bun install && bun run build</code> (requires <a href=\"https://bun.sh\" target=\"_blank\">Bun</a>)",
      "usage.install.local.3": "Open <code>chrome://extensions</code>, enable “Developer mode”, and load the <code>dist/</code> folder",
      "usage.footer": "Chrome Extension",

      "mac.title": "macOS App",
      "mac.lead": "Mirror any window or screen region into floating always-on-top panels.",
      "mac.features": "Features",
      "mac.f1": "<strong>Any window:</strong> pick any open window and mirror it as a floating overlay.",
      "mac.f2": "<strong>Container modes:</strong> per-item, group-by-app, or one unified gallery.",
      "mac.f3": "<strong>Scroll to zoom:</strong> 0.25×–8× on any mirror.",
      "mac.f4": "<strong>Click-through:</strong> toggle so floating windows never block your work.",
      "mac.f5": "<strong>Frame rate:</strong> 1–60 FPS per mirror.",
      "mac.getting": "Get it",
      "mac.install.1": "Clone the repo: <code>git clone https://github.com/gamepunk/magic-mirror-macos.git</code>",
      "mac.install.2": "Build & launch: <code>bash scripts/build-app.sh</code>",
      "mac.install.3": "Or open <code>Package.swift</code> in Xcode and run.",
      "mac.require": "Requirements",
      "mac.req": "macOS 14.0+. Grant screen recording permission in System Settings → Privacy & Security when first asked.",
      "mac.privacy": "Privacy",
      "mac.privacy.d": "All frames are processed locally; nothing is collected, uploaded, or stored.",
      "mac.repo": "Open source: <a href=\"https://github.com/gamepunk/magic-mirror-macos\" target=\"_blank\">github.com/gamepunk/magic-mirror-macos</a>",
      "mac.footer": "macOS App",

      "privacy.title": "Privacy Policy",
      "privacy.effective": "Effective date: August 27, 2026",
      "privacy.lead.1":
        "Magic Mirror (“the product”) respects your privacy. This policy covers both the Chrome extension and the macOS app and explains what information they access and how it is handled.",
      "privacy.summary":
        "In short: the product does not collect, store, upload, or sell any personal data. Everything happens locally on your device.",
      "privacy.data": "Data access and use",
      "privacy.screen.t": "Screen content (tabCapture / ScreenCaptureKit)",
      "privacy.screen.d":
        "When you create a mirror, the Chrome extension uses <code>tabCapture</code> and the macOS app uses <code>ScreenCaptureKit</code> to read <em>rendered pixels</em> so they can be displayed in a floating window.",
      "privacy.screen.1": "This data is used only to draw the mirror you asked for.",
      "privacy.screen.2":
        "Captured frames are processed <strong>locally</strong> on your device and are never uploaded, stored, or transmitted.",
      "privacy.screen.3":
        "The extension/app cannot read page DOM or form data, and never persists any imagery.",
      "privacy.tabs.t": "Window & tab information",
      "privacy.tabs.d":
        "To let you choose what to mirror, the app reads the <strong>title/URL</strong> of windows and tabs — only for the picker UI and source labels. Never stored or transmitted.",
      "privacy.storage.t": "Settings",
      "privacy.storage.d":
        "Settings (such as container mode and frame rate) are stored locally on your device only.",
      "privacy.none.t": "No accounts, no analytics, no third parties",
      "privacy.none.d":
        "The product contains <strong>no</strong> analytics, tracking, advertising, or third-party code; no account system, no backend, and it collects nothing.",
      "privacy.changes.t": "Changes to this policy",
      "privacy.changes.d":
        "If this policy changes, the “Effective date” above will be updated and the new version published at this URL.",
      "privacy.contact.t": "Contact",
      "privacy.contact.1":
        "For questions about this policy, open an issue in the relevant product repository.",
      "privacy.footer": "Privacy Policy",
    },
  };

  function currentLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "zh" || stored === "en") {
      return stored;
    }
    const params = new URLSearchParams(window.location.search);
    if (params.get("lang") === "en" || params.get("lang") === "zh") {
      return params.get("lang");
    }
    return navigator.language && navigator.language.toLowerCase().startsWith("zh")
      ? "zh"
      : "en";
  }

  function applyLang(lang) {
    const dict = I18N[lang] || I18N.en;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && dict[key]) {
        el.textContent = dict[key];
      }
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (key && dict[key]) {
        el.innerHTML = dict[key];
      }
    });
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    const toggle = document.getElementById("langToggle");
    if (toggle) {
      toggle.textContent = dict["lang.toggle"] || (lang === "zh" ? "English" : "中文");
    }
  }

  function switchLang() {
    const next = currentLang() === "zh" ? "en" : "zh";
    localStorage.setItem(STORAGE_KEY, next);
    applyLang(next);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("langToggle");
    if (toggle) {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        switchLang();
      });
    }
    applyLang(currentLang());
  });
})();

// Magic Mirror 官网多语言支持。
// 带有 data-i18n（文本）或 data-i18n-html（innerHTML）属性的元素会被翻译。
// 语言偏好保存在 localStorage，也可用 ?lang=en|zh 覆盖。
(function () {
  const STORAGE_KEY = "mm-lang";

  const I18N = {
    zh: {
      /* 导航 */
      "nav.home": "首页",
      "nav.extension": "Chrome 扩展",
      "nav.macos": "macOS App",
      "nav.privacy": "隐私政策",
      "lang.toggle": "English",
      "nav.download": "下载",

      /* Hero */
      "hero.eyebrow": "Chrome 扩展 · macOS App",
      "hero.title": "把屏幕上的任何内容<br />变成实时悬浮镜像",
      "hero.lead": "网页任意区域、任意窗口，真实渲染画面逐帧镜像。多页面内容合一、滚轮缩放、点击穿透——随你看，随时在。",
      "hero.cta.mac": "下载 macOS App",
      "hero.cta.ext": "了解 Chrome 扩展",
      "hero.visual.title": "Magic Mirror",
      "hero.visual.t1": "TradingView 价格",
      "hero.visual.t2": "OKX 余额",
      "hero.visual.zoom": "×1.5",

      /* 信任条 */
      "trust.t1": "本地处理",
      "trust.t2": "不上传任何数据",
      "trust.t3": "一次买断 · 免费更新",

      /* 特性 */
      "features.title": "不止是镜像",
      "features.desc": "为「边看边做」而设计，把信息带到你眼前。",
      "features.f1.t": "实时像素级镜像",
      "features.f1.d": "基于真实渲染画面逐帧更新，与原内容一模一样。",
      "features.f2.t": "多页面合一",
      "features.f2.d": "不同页面、不同窗口的内容并排进同一个悬浮窗。",
      "features.f3.t": "滚轮缩放",
      "features.f3.d": "滚动滚轮放大缩小，细看每个细节。",
      "features.f4.t": "点击穿透",
      "features.f4.d": "一键切换，点击穿过悬浮窗，不影响后方操作。",

      /* 工作流 */
      "workflow.title": "把镜像带进你的工作流",
      "workflow.desc": "镜像不只是悬浮窗——还能放进菜单栏、用快捷键随时调出。",
      "workflow.f1": "任意应用中一键显示/隐藏全部镜像（全局快捷键）。",
      "workflow.f2": "把镜像固定到菜单栏，随时查看实时缩略图。",
      "workflow.f3": "置顶窗口不被遮挡，始终在视线内。",
      "workflow.v1.k": "全局快捷键",
      "workflow.v2.k": "菜单栏缩略图",
      "workflow.v2.v": "实时画面",
      "workflow.v3.k": "置顶层级",
      "workflow.v3.v": "始终在最前",

      /* 隐私分栏 */
      "privacy.split.title": "本地处理，隐私无忧",
      "privacy.split.desc": "所有画面都只在你自己的设备上处理，不经过任何服务器。",
      "privacy.split.1": "不收集、不存储、不上传任何画面数据。",
      "privacy.split.2": "不读取 DOM、表单或剪贴板内容。",
      "privacy.split.3": "无账号系统、无统计、无广告。",
      "privacy.split.v1.k": "画面处理",
      "privacy.split.v1.v": "仅本地内存",
      "privacy.split.v2.k": "数据上传",
      "privacy.split.v2.v": "无",
      "privacy.split.v3.k": "账号 / 统计",
      "privacy.split.v3.v": "无",

      /* 使用场景 */
      "usecases.title": "为你的工作方式而生",
      "usecases.desc": "一个悬浮窗，装下你真正关心的信息。",
      "usecases.t1": "交易与行情",
      "usecases.t2": "开发与文档",
      "usecases.t3": "直播与游戏",
      "usecases.t4": "多屏与多任务",
      "usecases.p1.t": "行情、余额、成交，一屏对照",
      "usecases.p1.d": "把不同平台的行情与账户数据放进同一个悬浮窗，多平台对照，不错过任何变化。",
      "usecases.p1.f1": "多页面内容并排实时更新",
      "usecases.p1.f2": "滚轮放大细看 K 线细节",
      "usecases.p1.f3": "置顶不遮挡主窗口",
      "usecases.p2.t": "文档、日志、监控，悬在编辑器旁",
      "usecases.p2.d": "把 API 文档、日志或监控面板固定在你需要的位置，边写边看，无需来回切换。",
      "usecases.p2.f1": "参考内容永远不丢",
      "usecases.p2.f2": "自定义缩放，小字也清楚",
      "usecases.p2.f3": "快捷键一键调出",
      "usecases.p3.t": "弹幕、聊天、数据看板，始终在眼前",
      "usecases.p3.d": "把互动信息或数据看板悬浮在画面之上，重要信息实时可见。",
      "usecases.p3.f1": "不遮挡主内容操作",
      "usecases.p3.f2": "点击穿透随时开关",
      "usecases.p3.f3": "独立容器自由摆放",
      "usecases.p4.t": "单屏也能多任务",
      "usecases.p4.d": "把参考内容钉在屏幕角落，主窗口永远不被遮挡，效率翻倍。",
      "usecases.p4.f1": "参考内容常驻角落",
      "usecases.p4.f2": "多显示器布局记忆",
      "usecases.p4.f3": "按 App 分组容器",

      /* 三步上手 */
      "steps.title": "三步上手",
      "steps.desc": "从下载到看到第一个镜像，用不了一分钟。",
      "steps.s1.t": "下载并授权",
      "steps.s1.d": "下载 macOS App（或安装 Chrome 扩展），授予屏幕录制权限。",
      "steps.s2.t": "选择要镜像的内容",
      "steps.s2.d": "从菜单栏打开，点选任意窗口或屏幕区域。",
      "steps.s3.t": "悬浮窗即刻出现",
      "steps.s3.d": "实时镜像开始运行，滚动滚轮缩放，随时拖到顺手的位置。",

      /* 定价 CTA */
      "cta.title": "免费试用 macOS App",
      "cta.desc": "一次买断，永久使用，免费更新。Chrome 扩展完全免费。",
      "pricing.buyout": "一次买断",
      "pricing.single.t": "个人版",
      "pricing.single.d": "适合个人使用，一台 Mac 激活。",
      "pricing.single.f1": "全部镜像功能",
      "pricing.single.f2": "免费更新",
      "pricing.single.f3": "1 台设备激活",
      "pricing.family.t": "家庭版",
      "pricing.family.d": "全家设备共享，最多 3 台 Mac 同时激活。",
      "pricing.family.f1": "全部镜像功能",
      "pricing.family.f2": "免费更新",
      "pricing.family.f3": "3 台设备激活",
      "pricing.buy": "购买",

      /* 页脚 */
      "footer.about": "Magic Mirror（魔镜）—— 把屏幕上的任何内容变成实时悬浮镜像。所有处理都在本地完成，不上传任何数据。",
      "footer.product": "产品",
      "footer.ext": "Chrome 扩展",
      "footer.mac": "macOS App",
      "footer.pricing": "定价",
      "footer.resources": "资源",
      "footer.guide": "使用指南",
      "footer.download": "下载",
      "footer.privacy": "隐私政策",
      "footer.contact": "更多",
      "footer.buy": "购买激活码",
      "footer.copyright": "© 2026 Magic Mirror · 保留所有权利",
      "footer.privacy.note": "本地优先 · 无追踪 · 无数据收集",

      /* macOS 页 */
      "mac.title": "macOS App",
      "mac.lead": "镜像任意窗口或屏幕区域到多个置顶悬浮窗，随看随用。",
      "mac.download": "下载",
      "mac.dmg": "下载 DMG（推荐）",
      "mac.zip": "下载 ZIP",
      "mac.version": "当前版本 0.1.0 · macOS 26.0+",
      "mac.install.brew": "或者用 Homebrew 安装",
      "mac.brew.hint": "运行以下命令即可安装（之后可随新版本自动更新）：",
      "mac.install.steps": "安装步骤",
      "mac.dl.1": "解压后把 MagicMirror.app 拖入「应用程序」文件夹。",
      "mac.dl.2": "首次打开：右键点击应用 → <strong>打开</strong> → 打开。",
      "mac.dl.3": "在「系统设置 → 隐私与安全性 → 屏幕录制」中授予权限，然后重启应用。",
      "mac.features": "功能",
      "mac.f1.t": "任意窗口镜像",
      "mac.f1": "选择任意打开的窗口或屏幕区域，即刻创建浮动画中画叠加层。",
      "mac.f2.t": "多种容器模式",
      "mac.f2": "每个镜像独立容器 / 同一 App 聚合一个容器 / 所有镜像统一一个容器。",
      "mac.f3.t": "滚轮缩放",
      "mac.f3": "在镜像上滚动滚轮放大缩小（0.25×–8×），长宽自适应。",
      "mac.f4.t": "点击穿透",
      "mac.f4": "一键切换，点击穿过悬浮窗与后方内容交互。",
      "mac.f5.t": "帧率控制",
      "mac.f5": "每个镜像 1–60 FPS 可调，画质与资源占用随心平衡。",
      "mac.f6.t": "全局快捷键",
      "mac.f6": "任意应用内一键显示/隐藏全部镜像，随时调出。",
      "mac.require": "系统要求",
      "mac.req": "系统要求：macOS 26.0+（Tahoe）。首次使用需在「系统设置 → 隐私与安全性 → 屏幕录制」中授予权限。",
      "mac.privacy": "隐私",
      "mac.privacy.d": "所有画面仅在本地处理，不上传、不存储任何画面数据。",
      "mac.privacy.sentry": "仅在应用崩溃时，会向 Sentry 发送一份匿名诊断报告（崩溃堆栈与系统版本），用于修复问题；不包含任何画面内容。详见<a href=\"privacy.html\">隐私政策</a>。",

      /* 使用指南页 */
      "usage.title": "使用指南",
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
      "usage.multi.d": "Chrome 全局只允许一个画中画窗口，但你可以让多个页面共享它：",
      "usage.m1": "在页面 A（比如 OKX）选择余额元素 —— 悬浮窗出现，页面 A 成为「宿主」。",
      "usage.m2": "切到页面 B（比如 TradingView），点击图标 → 开始镜像 → 选择价格元素。",
      "usage.m3": "页面 B 的内容自动加入页面 A 的悬浮窗，两个页面并排实时更新。",
      "usage.m4": "第 3、4……任意多个页面同理，每个页面贡献一个格子。",
      "usage.multi.note": "<strong>说明：</strong>每个页面最多贡献一个元素；来源页的位置变化会实时同步到悬浮窗；被切到后台的页面，Chrome 会降低其采集帧率，镜像更新可能没那么流畅。",
      "usage.ms": "多选模式",
      "usage.ms.d": "默认每个页面只保留一个镜像，重新点选会替换当前镜像。想在同一页面同时镜像多个元素，请在设置页开启「<strong>多选模式</strong>」（popup → 打开设置，或 <code>chrome://extensions</code> → Magic Mirror → 详情 → 扩展选项）。开启后选择模式保持开启，可以连续点选多个元素，共享一个悬浮窗。",
      "usage.notes": "注意事项",
      "usage.n1": "<strong>HTTPS 要求：</strong>镜像依赖于标签页采集，页面必须是 HTTPS（Chrome 的硬性要求）。",
      "usage.n2": "<strong>可视区域：</strong>采集的是当前可见的页面区域；如果被镜像的元素滚动出视口，格子会显示占位提示，滚回可见区域后自动恢复。",
      "usage.n3": "<strong>隐私：</strong>所有画面都在本地浏览器内处理，不上传、不存储任何数据。详见<a href=\"privacy.html\">隐私政策</a>。",
      "usage.install": "获取 Chrome 扩展",
      "usage.install.store": "在 Chrome Web Store 搜索 <strong>Magic Mirror</strong>（即将上架）。",

      /* 隐私政策页 */
      "privacy.title": "隐私政策",
      "privacy.effective": "生效日期：2026 年 8 月 28 日",
      "privacy.lead.1": "Magic Mirror（魔镜，下称\"本产品\"）尊重你的隐私。本政策说明 Chrome 扩展与 macOS App 会访问哪些信息，以及这些信息如何处理。",
      "privacy.summary": "<strong>一句话总结：画面内容完全在本地处理，本产品不收集、不存储、不上传、不出售你的任何画面数据。</strong>唯一的例外是 macOS App 崩溃时发送的匿名诊断信息（见下文），且不包含任何画面内容。",
      "privacy.products": "适用范围",
      "privacy.products.d": "本政策适用于以下两款产品：",
      "privacy.products.1": "<strong>Chrome 扩展（Magic Mirror）</strong>——在 Chrome 浏览器中把网页区域镜像到悬浮窗。",
      "privacy.products.2": "<strong>macOS App（Magic Mirror）</strong>——把任意窗口或屏幕区域镜像到置顶悬浮窗。",
      "privacy.screen.t": "屏幕内容（镜像画面）",
      "privacy.screen.d": "当你创建镜像时，产品会读取你所选区域的<em>渲染画面</em>，以便在悬浮窗中显示。",
      "privacy.screen.1": "该数据仅用于绘制你请求的镜像，仅在内存中处理。",
      "privacy.screen.2": "采集到的画面在设备<strong>本地</strong>处理，绝不会上传、存储或传输到任何地方。",
      "privacy.screen.3": "产品无法读取页面的 DOM、表单数据、剪贴板内容，也不会持久保存任何画面。",
      "privacy.tabs.t": "标签页标题与网址（仅 Chrome 扩展）",
      "privacy.tabs.d": "当你把多个页面的内容合并到一个悬浮窗时，扩展会读取加入窗口的标签页的 <strong>标题/网址</strong>，仅用于在镜像格子上标注来源页面。该信息只用于屏幕上的标签显示，不会被存储或传输。",
      "privacy.storage.t": "设置（仅 Chrome 扩展）",
      "privacy.storage.d": "扩展在浏览器本地存储设置项（如\"多选模式\"开关），以便跨会话记住你的偏好。该数据保存在你的设备上，扩展不会在其他地方读取或写入。",
      "privacy.crash.t": "崩溃诊断（仅 macOS App）",
      "privacy.crash.d": "macOS App 集成了 Sentry 崩溃上报：<strong>仅在应用崩溃时</strong>，会自动发送一份匿名诊断报告，包含崩溃堆栈、应用版本与系统版本，用于修复问题。<strong>不包含任何画面内容、文件或个人信息</strong>。正常使用过程中不会发送任何网络请求。",
      "privacy.none.t": "无账号、无统计、无广告",
      "privacy.none.d": "本产品<strong>不含</strong>任何分析、追踪、广告或第三方代码；没有账号系统、没有后端服务器、不收集任何使用数据。",
      "privacy.changes.t": "政策变更",
      "privacy.changes.d": "如本政策发生变更，将更新页面顶部的\"生效日期\"，并在本地址发布新版本。",
      "privacy.contact.t": "联系我们",
      "privacy.contact.1": "对本隐私政策有任何疑问，请发送邮件或提交 Issue：<a href=\"https://github.com/gamepunk/magic-mirror\" target=\"_blank\" rel=\"noopener\">github.com/gamepunk/magic-mirror</a>",
    },

    en: {
      /* Navigation */
      "nav.home": "Home",
      "nav.extension": "Chrome Extension",
      "nav.macos": "macOS App",
      "nav.privacy": "Privacy",
      "lang.toggle": "中文",
      "nav.download": "Download",

      /* Hero */
      "hero.eyebrow": "Chrome Extension · macOS App",
      "hero.title": "Mirror anything on your screen<br />in a floating window",
      "hero.lead": "Any region of a webpage, any app window — mirrored frame-by-frame from the real rendered pixels. Combine content from multiple pages, zoom with the scroll wheel, click through — always there when you need it.",
      "hero.cta.mac": "Download macOS App",
      "hero.cta.ext": "Learn about Chrome Extension",
      "hero.visual.title": "Magic Mirror",
      "hero.visual.t1": "TradingView price",
      "hero.visual.t2": "OKX balance",
      "hero.visual.zoom": "×1.5",

      /* Trust strip */
      "trust.t1": "Processed locally",
      "trust.t2": "Nothing uploaded",
      "trust.t3": "One-time purchase · free updates",

      /* Features */
      "features.title": "More than a mirror",
      "features.desc": "Designed for watching while you work — bring the information to you.",
      "features.f1.t": "Real-time pixel-perfect",
      "features.f1.d": "Rendered frame-by-frame from the actual pixels — identical to the source.",
      "features.f2.t": "Combine multiple pages",
      "features.f2.d": "Content from different pages and windows, side by side in one floating window.",
      "features.f3.t": "Scroll to zoom",
      "features.f3.d": "Scroll to zoom in and out and inspect every detail.",
      "features.f4.t": "Click-through",
      "features.f4.d": "One toggle to click straight through the window to what's behind it.",

      /* Workflow */
      "workflow.title": "Bring mirrors into your workflow",
      "workflow.desc": "Mirrors aren't just floating windows — pin them to the menu bar, summon them with a hotkey.",
      "workflow.f1": "Show or hide all mirrors from any app with a global hotkey.",
      "workflow.f2": "Pin a mirror to the menu bar for a live thumbnail at a glance.",
      "workflow.f3": "Floating-on-top windows stay in sight, never hidden behind.",
      "workflow.v1.k": "Global hotkey",
      "workflow.v2.k": "Menu bar thumbnail",
      "workflow.v2.v": "Live frame",
      "workflow.v3.k": "Window level",
      "workflow.v3.v": "Always on top",

      /* Privacy split */
      "privacy.split.title": "Private by design",
      "privacy.split.desc": "Everything is processed on your own device — never through any server.",
      "privacy.split.1": "No screen data is collected, stored, or uploaded.",
      "privacy.split.2": "Never reads DOM, form, or clipboard content.",
      "privacy.split.3": "No accounts, no analytics, no ads.",
      "privacy.split.v1.k": "Frame processing",
      "privacy.split.v1.v": "Local memory only",
      "privacy.split.v2.k": "Data upload",
      "privacy.split.v2.v": "None",
      "privacy.split.v3.k": "Accounts / analytics",
      "privacy.split.v3.v": "None",

      /* Use cases */
      "usecases.title": "Built for how you work",
      "usecases.desc": "One floating window for the information that actually matters.",
      "usecases.t1": "Trading & markets",
      "usecases.t2": "Coding & docs",
      "usecases.t3": "Streaming & gaming",
      "usecases.t4": "Multitasking",
      "usecases.p1.t": "Prices, balances, orders — side by side",
      "usecases.p1.d": "Put quotes and account data from different platforms into one window and compare them at a glance.",
      "usecases.p1.f1": "Multiple pages updating live, side by side",
      "usecases.p1.f2": "Zoom in on chart details",
      "usecases.p1.f3": "Always on top, never covering your main window",
      "usecases.p2.t": "Docs, logs, dashboards beside your editor",
      "usecases.p2.d": "Keep API docs, logs, or monitoring panels where you need them — no more tab juggling.",
      "usecases.p2.f1": "Reference content never gets lost",
      "usecases.p2.f2": "Custom zoom for small text",
      "usecases.p2.f3": "Summon with a hotkey",
      "usecases.p3.t": "Chat, alerts, overlays over the action",
      "usecases.p3.d": "Float engagement info or dashboards above the action — key info, live.",
      "usecases.p3.f1": "Never blocks the main content",
      "usecases.p3.f2": "Click-through on demand",
      "usecases.p3.f3": "Independent containers, free placement",
      "usecases.p4.t": "Multitask on a single screen",
      "usecases.p4.d": "Pin reference content to a corner — the main window stays clear.",
      "usecases.p4.f1": "Reference content pinned in a corner",
      "usecases.p4.f2": "Multi-display layout memory",
      "usecases.p4.f3": "Group by app containers",

      /* Steps */
      "steps.title": "Up and running in three steps",
      "steps.desc": "From download to your first mirror in under a minute.",
      "steps.s1.t": "Download & grant permission",
      "steps.s1.d": "Get the macOS app (or Chrome extension) and grant screen recording permission.",
      "steps.s2.t": "Pick what to mirror",
      "steps.s2.d": "Open from the menu bar and select any window or screen region.",
      "steps.s3.t": "The floating window appears",
      "steps.s3.d": "Live mirroring starts; scroll to zoom and drag it wherever you like.",

      /* Pricing CTA */
      "cta.title": "Try the macOS app free",
      "cta.desc": "One-time purchase — yours forever, free updates. The Chrome extension is completely free.",
      "pricing.buyout": "one-time",
      "pricing.single.t": "Single",
      "pricing.single.d": "For personal use, activated on one Mac.",
      "pricing.single.f1": "All mirroring features",
      "pricing.single.f2": "Free updates",
      "pricing.single.f3": "Activate on 1 device",
      "pricing.family.t": "Family",
      "pricing.family.d": "Share across devices — activate on up to 3 Macs.",
      "pricing.family.f1": "All mirroring features",
      "pricing.family.f2": "Free updates",
      "pricing.family.f3": "Activate on 3 devices",
      "pricing.buy": "Buy",

      /* Footer */
      "footer.about": "Magic Mirror — turn anything on your screen into a floating live mirror. Everything is processed locally; nothing is uploaded.",
      "footer.product": "Product",
      "footer.ext": "Chrome Extension",
      "footer.mac": "macOS App",
      "footer.pricing": "Pricing",
      "footer.resources": "Resources",
      "footer.guide": "Usage Guide",
      "footer.download": "Download",
      "footer.privacy": "Privacy Policy",
      "footer.contact": "More",
      "footer.buy": "Buy a license",
      "footer.copyright": "© 2026 Magic Mirror · All rights reserved",
      "footer.privacy.note": "Local-first · No tracking · No data collection",

      /* macOS page */
      "mac.title": "macOS App",
      "mac.lead": "Mirror any window or screen region into floating on-top windows.",
      "mac.download": "Download",
      "mac.dmg": "Download DMG (recommended)",
      "mac.zip": "Download ZIP",
      "mac.version": "Version 0.1.0 · macOS 26.0+",
      "mac.install.brew": "Or install with Homebrew",
      "mac.brew.hint": "Run these commands to install (automatic updates handled by Sparkle afterwards):",
      "mac.install.steps": "Installation",
      "mac.dl.1": "Unzip and drag MagicMirror.app into your Applications folder.",
      "mac.dl.2": "First launch: right-click the app → <strong>Open</strong> → Open.",
      "mac.dl.3": "Grant Screen Recording permission in System Settings → Privacy & Security, then relaunch.",
      "mac.features": "Features",
      "mac.f1.t": "Mirror any window",
      "mac.f1": "Pick any open window or screen region and get an instant floating picture-in-picture overlay.",
      "mac.f2.t": "Multiple container modes",
      "mac.f2": "One floating window per mirror / grouped per app / everything in a single unified window.",
      "mac.f3.t": "Scroll to zoom",
      "mac.f3": "Scroll on the mirror to zoom (0.25×–8×) with aspect-preserving resize.",
      "mac.f4.t": "Click-through",
      "mac.f4": "Toggle to click straight through the floating window and interact with what's behind.",
      "mac.f5.t": "Frame rate control",
      "mac.f5": "Adjust 1–60 FPS per mirror to balance smoothness and resources.",
      "mac.f6.t": "Global hotkey",
      "mac.f6": "Show or hide all mirrors with a configurable shortcut from any app.",
      "mac.require": "Requirements",
      "mac.req": "Requires macOS 26.0+ (Tahoe). Screen Recording permission is needed on first use.",
      "mac.privacy": "Privacy",
      "mac.privacy.d": "All frames are processed locally — no frame data is uploaded or stored.",
      "mac.privacy.sentry": "Only when the app crashes, an anonymous diagnostic report (crash stack and OS version) is sent to Sentry to help fix issues; it never contains any frame content. See the <a href=\"privacy.html\">privacy policy</a>.",

      /* Usage guide */
      "usage.title": "Usage Guide",
      "usage.lead": "From your first mirror to managing multiple pages — up and running in minutes.",
      "usage.basic": "Basics",
      "usage.s1": "Click the <strong>Magic Mirror icon</strong> in the browser toolbar to open the panel.",
      "usage.s2": "Click <strong>Start Mirroring</strong> to enter selection mode (elements highlight as you hover).",
      "usage.s3": "Click the element you want — a floating picture-in-picture window appears, showing that area live.",
      "usage.s4": "Press <kbd>Esc</kbd> (or click Start Mirroring again) to exit selection; the mirror keeps running.",
      "usage.s5": "Click a tile in the floating window (or the source element again) to remove that mirror; closing the window stops everything.",
      "usage.win": "Floating window controls",
      "usage.w1": "<strong>Scroll to zoom:</strong> hover a tile and scroll up to zoom in, down to zoom out (0.25×–8×).",
      "usage.w2": "<strong>Zoom badge:</strong> hovering a tile shows the current zoom factor in its corner.",
      "usage.w3": "<strong>Remove:</strong> click a tile to remove that mirror.",
      "usage.w4": "<strong>Source label:</strong> tiles from other pages show their source domain in the corner.",
      "usage.multi": "Put content from multiple pages into one window",
      "usage.multi.d": "Chrome allows only one PiP window globally, but you can share it across pages:",
      "usage.m1": "On page A (e.g. OKX) pick a balance element — the window appears and page A becomes the host.",
      "usage.m2": "Switch to page B (e.g. TradingView), click the icon → Start Mirroring → pick the price element.",
      "usage.m3": "Page B's content joins page A's window automatically — both update live, side by side.",
      "usage.m4": "A 3rd, 4th… any number of pages can do the same; each contributes one tile.",
      "usage.multi.note": "<strong>Note:</strong> each page contributes at most one element; changes in the source page sync live; background tabs may capture at a lower frame rate.",
      "usage.ms": "Multi-select mode",
      "usage.ms.d": "By default each page keeps one mirror; picking again replaces it. To mirror several elements on the same page, enable <strong>multi-select mode</strong> in the options page (popup → Settings, or <code>chrome://extensions</code> → Magic Mirror → Details → Extension options). Selection stays active so you can pick multiple elements sharing one window.",
      "usage.notes": "Notes",
      "usage.n1": "<strong>HTTPS required:</strong> mirroring uses tab capture, so pages must be HTTPS (Chrome requirement).",
      "usage.n2": "<strong>Visible area:</strong> only the visible page area is captured; if an element scrolls out of view the tile shows a placeholder and resumes automatically when it's back.",
      "usage.n3": "<strong>Privacy:</strong> everything is processed locally in your browser — nothing is uploaded or stored. See the <a href=\"privacy.html\">privacy policy</a>.",
      "usage.install": "Get the Chrome Extension",
      "usage.install.store": "Search for <strong>Magic Mirror</strong> in the Chrome Web Store (coming soon).",

      /* Privacy policy */
      "privacy.title": "Privacy Policy",
      "privacy.effective": "Effective date: August 28, 2026",
      "privacy.lead.1": "Magic Mirror respects your privacy. This policy explains what information the Chrome extension and the macOS app access, and how it is handled.",
      "privacy.summary": "<strong>In one sentence: frame content is processed entirely locally — this product never collects, stores, uploads, or sells your screen data.</strong> The only exception is anonymous diagnostic information sent when the macOS app crashes (see below), which never contains frame content.",
      "privacy.products": "Scope",
      "privacy.products.d": "This policy applies to both products:",
      "privacy.products.1": "<strong>Chrome Extension (Magic Mirror)</strong> — mirrors regions of webpages into a floating window inside Chrome.",
      "privacy.products.2": "<strong>macOS App (Magic Mirror)</strong> — mirrors any window or screen region into a floating on-top window.",
      "privacy.screen.t": "Screen content (mirrored frames)",
      "privacy.screen.d": "When you create a mirror, the product reads the <em>rendered pixels</em> of the selected area to display them in the floating window.",
      "privacy.screen.1": "This data is used only to draw the mirror you requested and is processed in memory only.",
      "privacy.screen.2": "Captured frames are processed <strong>locally</strong> on your device and are never uploaded, stored, or transmitted anywhere.",
      "privacy.screen.3": "The product cannot read page DOM, form data, or clipboard content, and never persists any frames.",
      "privacy.tabs.t": "Tab titles & URLs (Chrome extension only)",
      "privacy.tabs.d": "When you combine content from multiple pages into one window, the extension reads the <strong>title/URL</strong> of joining tabs, solely to label the source on mirror tiles. This is used for on-screen labels only and is never stored or transmitted.",
      "privacy.storage.t": "Settings (Chrome extension only)",
      "privacy.storage.d": "The extension stores settings locally in the browser (e.g. the multi-select toggle) to remember your preferences across sessions. This data stays on your device and is not read or written anywhere else.",
      "privacy.crash.t": "Crash diagnostics (macOS app only)",
      "privacy.crash.d": "The macOS app integrates Sentry crash reporting: <strong>only when the app crashes</strong>, an anonymous diagnostic report is sent automatically, containing the crash stack, app version, and OS version, to help fix issues. <strong>It never contains frame content, files, or personal information</strong>. No network requests are made during normal use.",
      "privacy.none.t": "No accounts, no analytics, no ads",
      "privacy.none.d": "This product contains <strong>no</strong> analytics, tracking, advertising, or third-party code; there is no account system, no backend server, and no usage data collection.",
      "privacy.changes.t": "Policy changes",
      "privacy.changes.d": "If this policy changes, the effective date at the top of this page will be updated and the new version published at this address.",
      "privacy.contact.t": "Contact us",
      "privacy.contact.1": "Questions about this policy? Email us or open an issue: <a href=\"https://github.com/gamepunk/magic-mirror\" target=\"_blank\" rel=\"noopener\">github.com/gamepunk/magic-mirror</a>",
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

    // 滚动渐入动画：进入视口时给 .rise-in 元素加上 .visible
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              io.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.12 }
      );
      document.querySelectorAll(".rise-in").forEach((el) => io.observe(el));
    } else {
      document.querySelectorAll(".rise-in").forEach((el) => el.classList.add("visible"));
    }
  });
})();

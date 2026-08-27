"use client";

import { useEffect } from "react";

/** 根路径：按语言偏好（localStorage / 浏览器语言）重定向到 /zh 或 /en。 */
export default function RootRedirect() {
  useEffect(() => {
    let lang = "zh";
    const stored = localStorage.getItem("mm-lang");
    if (stored === "zh" || stored === "en") {
      lang = stored;
    } else {
      lang = (navigator.language || "").toLowerCase().startsWith("zh") ? "zh" : "en";
      localStorage.setItem("mm-lang", lang);
    }
    window.location.replace(`/${lang}/`);
  }, []);
  return null;
}

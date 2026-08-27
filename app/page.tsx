"use client";

import { useEffect } from "react";
import { BASE_PATH } from "@/lib/i18n";

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
    window.location.replace(`${BASE_PATH}/${lang}/`);
  }, []);
  return null;
}

"use client";

import { useEffect } from "react";

/** 按 locale 设置 <html lang>。 */
export default function SetLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }, [lang]);
  return null;
}

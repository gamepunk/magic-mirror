import zh from "@/messages/zh.json";
import en from "@/messages/en.json";

export const locales = ["zh", "en"] as const;
export type Locale = (typeof locales)[number];

export const dictionaries = { zh, en } as const;
export type Dict = typeof zh;

export function isLocale(s: string): s is Locale {
  return s === "zh" || s === "en";
}

export function getDict(locale: string): Dict {
  return (locale === "en" ? en : zh) as Dict;
}

/** 给当前 locale 的路径加上前缀（如 "/pricing" → "/zh/pricing/"）。 */
export function localeHref(locale: Locale, href: string): string {
  const clean = href.startsWith("/") ? href : `/${href}`;
  return `/${locale}${clean}`.replace(/\/$/, "") + "/";
}

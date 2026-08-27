"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeHref, type Dict, type Locale } from "@/lib/i18n";

/** 顶部导航：品牌 + 链接 + 语言切换 + 下载按钮。 */
export default function Header({ locale, dict }: { locale: Locale; dict: Dict }) {
  const pathname = usePathname();
  const rest = pathname.replace(new RegExp(`^/${locale}`), "") || "/";

  const items = [
    { href: "/", label: dict["nav.home"] },
    { href: "/pricing", label: dict["nav.pricing"] },
    { href: "/help", label: dict["nav.help"] },
    { href: "/privacy", label: dict["nav.privacy"] },
  ];
  const other: Locale = locale === "zh" ? "en" : "zh";

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href={localeHref(locale, "/")}>
          <img src="/images/icon-32.png" alt="" /> Magic Mirror
        </Link>
        <nav className="nav-links">
          {items.map((item) => (
            <Link
              key={item.href}
              href={localeHref(locale, item.href)}
              className={rest === `${item.href}/` || rest === item.href ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
          <Link id="langToggle" href={localeHref(other, rest)} prefetch={false}>
            {locale === "zh" ? "English" : "中文"}
          </Link>
          <Link className="btn small" href={localeHref(locale, "/download")}>
            {dict["nav.download"]}
          </Link>
        </nav>
      </div>
    </header>
  );
}

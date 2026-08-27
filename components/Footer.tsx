import Link from "next/link";
import { localeHref, BASE_PATH, type Dict, type Locale } from "@/lib/i18n";

/** 页脚（深色）：品牌 + 三列链接 + 版权。 */
export default function Footer({ locale, dict }: { locale: Locale; dict: Dict }) {
  const l = (href: string) => localeHref(locale, href);

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={`${BASE_PATH}/images/icon-32.png`} alt="" />
          <p>{dict["footer.about"]}</p>
        </div>

        <div className="footer-col">
          <h4>{dict["footer.product"]}</h4>
          <Link href={l("/download")}>{dict["footer.download"]}</Link>
          <Link href={l("/pricing")}>{dict["footer.pricing"]}</Link>
          <Link href={l("/teams")}>{dict["footer.teams"]}</Link>
          <Link href={l("/updates")}>{dict["footer.updates"]}</Link>
        </div>

        <div className="footer-col">
          <h4>{dict["footer.resources"]}</h4>
          <Link href={l("/help")}>{dict["footer.help"]}</Link>
          <Link href={l("/usecases")}>{dict["footer.usecases"]}</Link>
          <Link href={l("/privacy")}>{dict["footer.privacy"]}</Link>
          <Link href={l("/terms")}>{dict["footer.terms"]}</Link>
        </div>

        <div className="footer-col">
          <h4>{dict["footer.company"]}</h4>
          <Link href={l("/about")}>{dict["footer.about.page"]}</Link>
          <Link href={l("/contact")}>{dict["footer.contact.page"]}</Link>
          <Link href={l("/blog")}>{dict["footer.blog"]}</Link>
          <Link href={l("/media-kit")}>{dict["footer.media"]}</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>{dict["footer.copyright"]}</span>
        <span>{dict["footer.privacy.note"]}</span>
      </div>
    </footer>
  );
}

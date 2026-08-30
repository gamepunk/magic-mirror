import Link from "next/link";
import { getDict, isLocale, localeHref, type Locale } from "@/lib/i18n";
import PageHead from "@/components/PageHead";

/** 博客文章 slug 列表（正文用 blog.<slug>.* 的 i18n key 渲染）。 */
const POSTS = ["magic-mirror-0-0-1"] as const;

export function generateStaticParams() {
  return POSTS.map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "zh";
  const dict = getDict(locale);

  // 未知 slug 回退到第一篇文章，避免导出后出现空页。
  const post = (POSTS as readonly string[]).includes(slug) ? slug : POSTS[0];
  const key = (suffix: string) => `blog.${post}.${suffix}` as keyof typeof dict;

  const title = dict[key("t")];
  const date = dict[key("date")];
  const bodyKeys = ["body1", "body2", "body3"] as const;

  return (
    <main>
      <PageHead title={title} lead={date} />

      <section className="content-section container-narrow">
        <article className="doc-item">
          {bodyKeys.map((k) => (
            <p key={k}>{dict[key(k)]}</p>
          ))}
        </article>

        <p style={{ marginTop: 28, textAlign: "center" }}>
          <Link href={localeHref(locale, "/blog")}>← {dict["blog.back"]}</Link>
        </p>
      </section>
    </main>
  );
}

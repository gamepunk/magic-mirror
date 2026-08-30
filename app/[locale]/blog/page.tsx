import Link from "next/link";
import { getDict, isLocale, localeHref, type Locale } from "@/lib/i18n";
import PageHead from "@/components/PageHead";
import RiseIn from "@/components/RiseIn";

const POSTS = ["extension-0-0-1", "app-0-0-1"] as const;

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "zh";
  const dict = getDict(locale);

  return (
    <main>
      <PageHead title={dict["blog.title"]} lead={dict["blog.lead"]} />

      <section className="content-section container-narrow">
        <div className="doc-list">
          {POSTS.map((slug) => (
            <RiseIn key={slug} className="post-card">
              <Link href={localeHref(locale, `/blog/${slug}`)}>
                <div className="date">{dict[`blog.${slug}.date` as keyof typeof dict]}</div>
                <h3>{dict[`blog.${slug}.t` as keyof typeof dict]}</h3>
                <p>{dict[`blog.${slug}.d` as keyof typeof dict]}</p>
              </Link>
            </RiseIn>
          ))}
        </div>
      </section>
    </main>
  );
}

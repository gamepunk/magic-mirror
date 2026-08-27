import { getDict, isLocale, type Locale } from "@/lib/i18n";
import PageHead from "@/components/PageHead";
import RiseIn from "@/components/RiseIn";

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
          <RiseIn className="post-card">
            <div className="date">{dict["blog.p1.date"]}</div>
            <h3>{dict["blog.p1.t"]}</h3>
            <p>{dict["blog.p1.d"]}</p>
          </RiseIn>
        </div>
      </section>
    </main>
  );
}

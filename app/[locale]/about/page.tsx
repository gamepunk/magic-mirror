import { getDict, isLocale, type Locale } from "@/lib/i18n";
import PageHead from "@/components/PageHead";
import RiseIn from "@/components/RiseIn";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "zh";
  const dict = getDict(locale);

  const values = [1, 2, 3] as const;

  return (
    <main>
      <PageHead title={dict["about.title"]} lead={dict["about.lead"]} />

      <section className="content-section container-narrow">
        <div className="doc-list">
          <RiseIn className="doc-item">
            <p>{dict["about.p1"]}</p>
          </RiseIn>
          <RiseIn className="doc-item">
            <p>{dict["about.p2"]}</p>
          </RiseIn>
          <RiseIn className="doc-item">
            <p>{dict["about.p3"]}</p>
          </RiseIn>
        </div>
      </section>

      <section className="content-section container-narrow">
        <h2>{dict["about.values.t"]}</h2>
        <div className="feature-scroll">
          {values.map((i) => (
            <RiseIn key={i} className="feature-card">
              <div className="icon">{["🛡️", "🧩", "🤝"][i - 1]}</div>
              <h3>{dict[`about.v${i}.t` as keyof typeof dict]}</h3>
              <p>{dict[`about.v${i}.d` as keyof typeof dict]}</p>
            </RiseIn>
          ))}
        </div>
      </section>
    </main>
  );
}

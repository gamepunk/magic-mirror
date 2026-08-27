import { getDict, isLocale, type Locale } from "@/lib/i18n";
import PageHead from "@/components/PageHead";
import RiseIn from "@/components/RiseIn";

export default async function TeamsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "zh";
  const dict = getDict(locale);

  return (
    <main>
      <PageHead title={dict["teams.title"]} lead={dict["teams.lead"]} />

      <section className="content-section container-narrow">
        <div className="feature-scroll">
          {([1, 2, 3] as const).map((i) => (
            <RiseIn key={i} className="feature-card">
              <div className="icon">{["🏠", "🔑", "🔄"][i - 1]}</div>
              <h3>{dict[`teams.f${i}.t` as keyof typeof dict]}</h3>
              <p>{dict[`teams.f${i}.d` as keyof typeof dict]}</p>
            </RiseIn>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a className="btn" href="https://nethead.gumroad.com/l/magic-mirror" target="_blank" rel="noopener">
            {dict["teams.family.cta"]}
          </a>
        </div>
      </section>
    </main>
  );
}

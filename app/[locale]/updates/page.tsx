import { getDict, isLocale, type Locale } from "@/lib/i18n";
import PageHead from "@/components/PageHead";
import RiseIn from "@/components/RiseIn";

export default async function UpdatesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "zh";
  const dict = getDict(locale);

  return (
    <main>
      <PageHead title={dict["updates.title"]} lead={dict["updates.lead"]} />

      <section className="content-section container-narrow">
        <RiseIn className="post-card">
          <div className="date">{dict["updates.v1"]}</div>
          <h3>{dict["updates.v1.t"]}</h3>
          <ul style={{ marginTop: 12 }}>
            {([1, 2, 3, 4] as const).map((i) => (
              <li key={i}>{dict[`updates.v1.i${i}` as keyof typeof dict]}</li>
            ))}
          </ul>
        </RiseIn>
      </section>
    </main>
  );
}

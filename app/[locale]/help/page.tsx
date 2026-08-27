import { getDict, isLocale, type Locale } from "@/lib/i18n";
import PageHead from "@/components/PageHead";

export default async function HelpPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "zh";
  const dict = getDict(locale);

  return (
    <main>
      <PageHead title={dict["help.title"]} lead={dict["help.lead"]} />

      <section className="content-section container-narrow">
        <h2>{dict["usage.basic"]}</h2>
        <ol className="steps">
          {([1, 2, 3, 4, 5] as const).map((i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: dict[`usage.s${i}` as keyof typeof dict] }} />
          ))}
        </ol>
      </section>

      <section className="content-section container-narrow">
        <h2>{dict["usage.win"]}</h2>
        <ul>
          {([1, 2, 3, 4] as const).map((i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: dict[`usage.w${i}` as keyof typeof dict] }} />
          ))}
        </ul>
      </section>

      <section className="content-section container-narrow">
        <h2>{dict["usage.multi"]}</h2>
        <p>{dict["usage.multi.d"]}</p>
        <ol className="steps">
          {([1, 2, 3, 4] as const).map((i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: dict[`usage.m${i}` as keyof typeof dict] }} />
          ))}
        </ol>
        <div className="note" dangerouslySetInnerHTML={{ __html: dict["usage.multi.note"] }} />
      </section>

      <section className="content-section container-narrow">
        <h2>{dict["usage.ms"]}</h2>
        <p dangerouslySetInnerHTML={{ __html: dict["usage.ms.d"] }} />
      </section>

      <section className="content-section container-narrow">
        <h2>{dict["usage.notes"]}</h2>
        <ul>
          {([1, 2, 3] as const).map((i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: dict[`usage.n${i}` as keyof typeof dict] }} />
          ))}
        </ul>
      </section>
    </main>
  );
}

import { getDict, isLocale, type Locale } from "@/lib/i18n";
import PageHead from "@/components/PageHead";

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "zh";
  const dict = getDict(locale);

  return (
    <main>
      <PageHead title={dict["privacy.title"]} lead={dict["privacy.effective"]} />

      <section className="content-section container-narrow">
        <p>{dict["privacy.lead.1"]}</p>
        <div className="note" dangerouslySetInnerHTML={{ __html: dict["privacy.summary"] }} />
      </section>

      <section className="content-section container-narrow">
        <h2>{dict["privacy.products"]}</h2>
        <p>{dict["privacy.products.d"]}</p>
        <ul>
          {([1, 2] as const).map((i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: dict[`privacy.products.${i}` as keyof typeof dict] }} />
          ))}
        </ul>
      </section>

      <section className="content-section container-narrow">
        <h2>{dict["privacy.screen.t"]}</h2>
        <p dangerouslySetInnerHTML={{ __html: dict["privacy.screen.d"] }} />
        <ul>
          {([1, 2, 3] as const).map((i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: dict[`privacy.screen.${i}` as keyof typeof dict] }} />
          ))}
        </ul>
      </section>

      <section className="content-section container-narrow">
        <h2>{dict["privacy.tabs.t"]}</h2>
        <p dangerouslySetInnerHTML={{ __html: dict["privacy.tabs.d"] }} />
      </section>

      <section className="content-section container-narrow">
        <h2>{dict["privacy.storage.t"]}</h2>
        <p dangerouslySetInnerHTML={{ __html: dict["privacy.storage.d"] }} />
      </section>

      <section className="content-section container-narrow">
        <h2>{dict["privacy.crash.t"]}</h2>
        <p dangerouslySetInnerHTML={{ __html: dict["privacy.crash.d"] }} />
      </section>

      <section className="content-section container-narrow">
        <h2>{dict["privacy.none.t"]}</h2>
        <p dangerouslySetInnerHTML={{ __html: dict["privacy.none.d"] }} />
      </section>

      <section className="content-section container-narrow">
        <h2>{dict["privacy.changes.t"]}</h2>
        <p>{dict["privacy.changes.d"]}</p>
      </section>

      <section className="content-section container-narrow">
        <h2>{dict["privacy.contact.t"]}</h2>
        <p dangerouslySetInnerHTML={{ __html: dict["privacy.contact.1"] }} />
      </section>
    </main>
  );
}

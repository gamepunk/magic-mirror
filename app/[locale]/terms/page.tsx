import { getDict, isLocale, type Locale } from "@/lib/i18n";
import PageHead from "@/components/PageHead";
import RiseIn from "@/components/RiseIn";

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "zh";
  const dict = getDict(locale);

  const sections = [1, 2, 3, 4, 5, 6, 7] as const;

  return (
    <main>
      <PageHead title={dict["terms.title"]} lead={dict["terms.lead"]} />

      <section className="content-section container-narrow">
        <div className="doc-list">
          {sections.map((i) => (
            <RiseIn key={i} className="doc-item">
              <h3>{dict[`terms.s${i}.t` as keyof typeof dict]}</h3>
              <p>{dict[`terms.s${i}.d` as keyof typeof dict]}</p>
            </RiseIn>
          ))}
        </div>
      </section>
    </main>
  );
}

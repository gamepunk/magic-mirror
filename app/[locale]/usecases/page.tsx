import { getDict, isLocale, type Locale } from "@/lib/i18n";
import PageHead from "@/components/PageHead";
import SegmentedTabs from "@/components/SegmentedTabs";
import RiseIn from "@/components/RiseIn";

export default async function UsecasesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "zh";
  const dict = getDict(locale);

  return (
    <main>
      <PageHead title={dict["usecases.page.title"]} lead={dict["usecases.page.lead"]} />

      <section className="content-section container-narrow">
        <RiseIn>
          <SegmentedTabs dict={dict} />
        </RiseIn>
      </section>
    </main>
  );
}

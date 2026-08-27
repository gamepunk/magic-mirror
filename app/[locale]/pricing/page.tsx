import { getDict, isLocale, type Locale } from "@/lib/i18n";
import PageHead from "@/components/PageHead";
import PriceCards from "@/components/PriceCards";
import RiseIn from "@/components/RiseIn";

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "zh";
  const dict = getDict(locale);

  const faqs = [1, 2, 3, 4] as const;

  return (
    <main>
      <PageHead title={dict["pricing.page.title"]} lead={dict["pricing.page.lead"]} />

      <section className="content-section container-narrow">
        <RiseIn>
          <PriceCards dict={dict} />
        </RiseIn>
      </section>

      <section className="content-section container-narrow">
        <h2>{dict["pricing.faq.title"]}</h2>
        <div className="doc-list">
          {faqs.map((i) => (
            <RiseIn key={i} className="doc-item">
              <h3>{dict[`pricing.faq.q${i}` as keyof typeof dict]}</h3>
              <p>{dict[`pricing.faq.a${i}` as keyof typeof dict]}</p>
            </RiseIn>
          ))}
        </div>
      </section>
    </main>
  );
}

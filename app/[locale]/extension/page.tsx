import { getDict, isLocale, BASE_PATH, type Locale } from "@/lib/i18n";
import PageHead from "@/components/PageHead";
import RiseIn from "@/components/RiseIn";

export default async function ExtensionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "zh";
  const dict = getDict(locale);

  // Chrome 扩展已上架 Chrome Web Store；Firefox / Edge 适配中。
  const CHROME_STORE_URL =
    "https://chromewebstore.google.com/detail/jfapgohnocglaaminogpmjgabkokgnfl";

  const browsers = [
    { key: "chrome", icon: "🧩", storeUrl: CHROME_STORE_URL },
    { key: "firefox", icon: "🦊", storeUrl: null },
    { key: "edge", icon: "🌐", storeUrl: null },
  ] as const;

  return (
    <main>
      <PageHead title={dict["extension.title"]} lead={dict["extension.lead"]} />

      <section className="content-section container-narrow">
        <h2>{dict["extension.supported"]}</h2>
        <div className="feature-scroll">
          {browsers.map((b) => (
            <RiseIn key={b.key} className="feature-card">
              <div className="icon">{b.icon}</div>
              <h3>{dict[`extension.${b.key}.t` as keyof typeof dict]}</h3>
              <p>{dict[`extension.${b.key}.d` as keyof typeof dict]}</p>
              <span
                style={{
                  display: "inline-block",
                  marginTop: 14,
                  padding: "3px 12px",
                  borderRadius: 999,
                  fontSize: 12,
                  fontWeight: 700,
                  background: "var(--color-brand-soft)",
                  color: "var(--color-brand-deep)",
                  border: "1px solid rgba(245,165,36,0.35)",
                }}
              >
                {dict[`extension.${b.key}.status` as keyof typeof dict]}
              </span>
              {b.storeUrl && (
                <a
                  className="btn small"
                  href={b.storeUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginTop: 12 }}
                >
                  {dict["extension.install.cta"]}
                </a>
              )}
            </RiseIn>
          ))}
        </div>
      </section>

      <section className="content-section container-narrow">
        <h2>{dict["extension.install"]}</h2>
        <div className="note">{dict["extension.install.d"]}</div>
        <p style={{ marginTop: 18 }}>
          <a href={`${BASE_PATH}/${locale}/help/`}>{dict["extension.guide"]}</a>
        </p>
      </section>
    </main>
  );
}

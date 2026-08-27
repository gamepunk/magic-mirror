import { getDict, isLocale, type Locale } from "@/lib/i18n";
import PageHead from "@/components/PageHead";
import RiseIn from "@/components/RiseIn";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "zh";
  const dict = getDict(locale);

  return (
    <main>
      <PageHead title={dict["contact.title"]} lead={dict["contact.lead"]} />

      <section className="content-section container-narrow">
        <div className="doc-list">
          <RiseIn className="doc-item">
            <h3>{dict["contact.email.t"]}</h3>
            <p>
              <a href="mailto:support@magicmirror.app">support@magicmirror.app</a>
            </p>
          </RiseIn>
          <RiseIn className="doc-item">
            <h3>{dict["contact.issue.t"]}</h3>
            <p>
              <a href="https://github.com/gamepunk/magic-mirror/issues" target="_blank" rel="noopener">
                github.com/gamepunk/magic-mirror
              </a>
            </p>
          </RiseIn>
        </div>
        <p style={{ color: "var(--color-muted)", textAlign: "center", marginTop: 28 }}>
          {dict["contact.response"]}
        </p>
      </section>
    </main>
  );
}

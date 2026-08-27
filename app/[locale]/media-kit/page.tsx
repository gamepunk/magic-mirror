import { getDict, isLocale, type Locale } from "@/lib/i18n";
import PageHead from "@/components/PageHead";
import RiseIn from "@/components/RiseIn";

export default async function MediaKitPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "zh";
  const dict = getDict(locale);

  return (
    <main>
      <PageHead title={dict["media.title"]} lead={dict["media.lead"]} />

      <section className="content-section container-narrow">
        <div className="doc-list">
          <RiseIn className="doc-item">
            <h3>{dict["media.logo.t"]}</h3>
            <p>{dict["media.logo.d"]}</p>
            <div style={{ display: "flex", gap: 20, marginTop: 16, alignItems: "center" }}>
              <img src="/images/icon-128.png" alt="Magic Mirror 128px" width={128} height={128} />
              <a className="btn small" href="/images/icon-128.png" download>
                PNG 128px
              </a>
              <a className="btn small ghost" href="/images/icon-32.png" download>
                PNG 32px
              </a>
            </div>
          </RiseIn>

          <RiseIn className="doc-item">
            <h3>{dict["media.colors.t"]}</h3>
            <div style={{ display: "grid", gap: 10, marginTop: 14 }}>
              <div className="color-swatch">
                <span className="chip" style={{ background: "#f5a524" }}></span>
                Brand · #F5A524
              </div>
              <div className="color-swatch">
                <span className="chip" style={{ background: "#101010" }}></span>
                Ink · #101010
              </div>
              <div className="color-swatch">
                <span className="chip" style={{ background: "#f5f5f7" }}></span>
                Canvas · #F5F5F7
              </div>
            </div>
          </RiseIn>

          <RiseIn className="doc-item">
            <h3>{dict["media.name.t"]}</h3>
            <p>{dict["media.name.d"]}</p>
          </RiseIn>
        </div>
      </section>
    </main>
  );
}

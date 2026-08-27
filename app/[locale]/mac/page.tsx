import { getDict, isLocale, BASE_PATH, type Locale } from "@/lib/i18n";
import PageHead from "@/components/PageHead";
import RiseIn from "@/components/RiseIn";

export default async function DownloadPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "zh";
  const dict = getDict(locale);

  return (
    <main>
      <PageHead title={dict["mac.title"]} lead={dict["mac.lead"]} />

      <section id="download" className="content-section container-narrow">
        <h2>{dict["mac.download"]}</h2>
        <div className="dl-buttons">
          <a className="btn" href={`${BASE_PATH}/downloads/MagicMirror-0.1.0.dmg`}>
            {dict["mac.dmg"]}
          </a>
          <a className="btn ghost" href={`${BASE_PATH}/downloads/MagicMirror-0.1.0.zip`}>
            {dict["mac.zip"]}
          </a>
        </div>
        <p style={{ textAlign: "center", color: "var(--color-sub)", fontSize: 13, margin: "-6px 0 28px" }}>
          {dict["mac.version"]}
        </p>

        <h3>{dict["mac.install.brew"]}</h3>
        <div className="note">{dict["mac.brew.hint"]}</div>
        <div className="brew-block">{`brew tap gamepunk/tap\nbrew install --cask magic-mirror`}</div>

        <h3>{dict["mac.install.steps"]}</h3>
        <ol className="steps">
          <li>{dict["mac.dl.1"]}</li>
          <li dangerouslySetInnerHTML={{ __html: dict["mac.dl.2"] }} />
          <li dangerouslySetInnerHTML={{ __html: dict["mac.dl.3"] }} />
        </ol>
      </section>

      <section className="content-section container-narrow">
        <h2>{dict["mac.features"]}</h2>
        <div className="feature-scroll" style={{ gridTemplateColumns: "1fr 1fr" }}>
          {([1, 2, 3, 4, 5, 6] as const).map((i) => (
            <RiseIn key={i} className="feature-card" >
              <div className="icon">{["🪟", "🗂️", "🔍", "🖱️", "⚡", "⌨️"][i - 1]}</div>
              <h3>{dict[`mac.f${i}.t` as keyof typeof dict]}</h3>
              <p>{dict[`mac.f${i}` as keyof typeof dict]}</p>
            </RiseIn>
          ))}
        </div>
      </section>

      <section className="content-section container-narrow">
        <h2>{dict["mac.require"]}</h2>
        <div className="note">{dict["mac.req"]}</div>
      </section>

      <section className="content-section container-narrow">
        <h2>{dict["mac.privacy"]}</h2>
        <p>{dict["mac.privacy.d"]}</p>
        <p dangerouslySetInnerHTML={{ __html: dict["mac.privacy.sentry"] }} />
      </section>
    </main>
  );
}

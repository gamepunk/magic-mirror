import { getDict, isLocale, BASE_PATH, type Locale } from "@/lib/i18n";
import RiseIn from "@/components/RiseIn";
import SectionHead from "@/components/SectionHead";
import HeroVisual from "@/components/HeroVisual";
import SegmentedTabs from "@/components/SegmentedTabs";
import PriceCards from "@/components/PriceCards";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "zh";
  const dict = getDict(locale);

  return (
    <main>
      {/* Hero */}
      <section className="hero container-r">
        <img className="logo" src={`${BASE_PATH}/images/icon-128.png`} alt="Magic Mirror logo" />
        <h1>{dict["hero.title"]}</h1>
        <p className="lead">{dict["hero.lead"]}</p>
        <div className="hero-actions">
          <a className="btn" href={`${BASE_PATH}/${locale}/download/`}>
            {dict["hero.cta.mac"]}
          </a>
          <a className="btn ghost" href={`${BASE_PATH}/${locale}/help/`}>
            {dict["hero.cta.ext"]}
          </a>
        </div>
        <HeroVisual dict={dict} />
      </section>

      {/* 信任条 */}
      <div className="trust-strip">
        <span><i className="tick">✓</i> {dict["trust.t1"]}</span>
        <span><i className="tick">✓</i> {dict["trust.t2"]}</span>
        <span><i className="tick">✓</i> {dict["trust.t3"]}</span>
      </div>

      {/* 特性 */}
      <section className="container-r">
        <SectionHead title={dict["features.title"]} desc={dict["features.desc"]} />
        <div className="feature-scroll">
          {([1, 2, 3, 4] as const).map((i) => (
            <RiseIn key={i} className="feature-card">
              <div className="icon">
                {["🪞", "🧲", "🔍", "🖱️"][i - 1]}
              </div>
              <h3>{dict[`features.f${i}.t` as keyof typeof dict]}</h3>
              <p>{dict[`features.f${i}.d` as keyof typeof dict]}</p>
            </RiseIn>
          ))}
        </div>
      </section>

      {/* 工作流 */}
      <section className="container-r">
        <RiseIn className="split">
          <div className="text">
            <h2>{dict["workflow.title"]}</h2>
            <p>{dict["workflow.desc"]}</p>
            <ul>
              <li>{dict["workflow.f1"]}</li>
              <li>{dict["workflow.f2"]}</li>
              <li>{dict["workflow.f3"]}</li>
            </ul>
          </div>
          <div className="split-visual">
            <div className="kv">
              <div className="kv-row">
                <span className="k">{dict["workflow.v1.k"]}</span>
                <span className="v">
                  <span className="kbd">⌥</span>
                  <span className="kbd">⌘</span>
                  <span className="kbd">M</span>
                </span>
              </div>
              <div className="kv-row">
                <span className="k">{dict["workflow.v2.k"]}</span>
                <span className="v">{dict["workflow.v2.v"]}</span>
              </div>
              <div className="kv-row">
                <span className="k">{dict["workflow.v3.k"]}</span>
                <span className="v">{dict["workflow.v3.v"]}</span>
              </div>
            </div>
          </div>
        </RiseIn>
      </section>

      {/* 隐私 */}
      <section className="container-r">
        <RiseIn className="split">
          <div className="split-visual">
            <div className="kv">
              <div className="kv-row">
                <span className="k">{dict["privacy.split.v1.k"]}</span>
                <span className="v">{dict["privacy.split.v1.v"]}</span>
              </div>
              <div className="kv-row">
                <span className="k">{dict["privacy.split.v2.k"]}</span>
                <span className="v">{dict["privacy.split.v2.v"]}</span>
              </div>
              <div className="kv-row">
                <span className="k">{dict["privacy.split.v3.k"]}</span>
                <span className="v">{dict["privacy.split.v3.v"]}</span>
              </div>
            </div>
          </div>
          <div className="text">
            <h2>{dict["privacy.split.title"]}</h2>
            <p>{dict["privacy.split.desc"]}</p>
            <ul>
              <li>{dict["privacy.split.1"]}</li>
              <li>{dict["privacy.split.2"]}</li>
              <li>{dict["privacy.split.3"]}</li>
            </ul>
          </div>
        </RiseIn>
      </section>

      {/* 使用场景 */}
      <section className="container-r">
        <SectionHead title={dict["usecases.title"]} desc={dict["usecases.desc"]} />
        <RiseIn>
          <SegmentedTabs dict={dict} />
        </RiseIn>
      </section>

      {/* 三步上手 */}
      <section className="container-r">
        <SectionHead title={dict["steps.title"]} desc={dict["steps.desc"]} />
        <div className="step-grid">
          {([1, 2, 3] as const).map((i) => (
            <RiseIn key={i} className="step-card">
              <div className="step-num">{i}</div>
              <h3>{dict[`steps.s${i}.t` as keyof typeof dict]}</h3>
              <p>{dict[`steps.s${i}.d` as keyof typeof dict]}</p>
            </RiseIn>
          ))}
        </div>
      </section>

      {/* 定价 CTA */}
      <section className="price-cta" id="pricing">
        <div className="container-r">
          <SectionHead title={dict["cta.title"]} desc={dict["cta.desc"]} />
          <RiseIn>
            <PriceCards dict={dict} />
          </RiseIn>
        </div>
      </section>
    </main>
  );
}

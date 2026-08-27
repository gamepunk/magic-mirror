import type { Dict } from "@/lib/i18n";

/** 定价双卡（个人版 / 家庭版）。 */
export default function PriceCards({ dict }: { dict: Dict }) {
  return (
    <div className="prices">
      <div className="price-card">
        <div className="price-name">{dict["pricing.single.t"]}</div>
        <div className="price-amount">
          $4.99 <small>{dict["pricing.buyout"]}</small>
        </div>
        <p className="price-desc">{dict["pricing.single.d"]}</p>
        <ul className="price-feats">
          {([1, 2, 3] as const).map((i) => (
            <li key={i}>{dict[`pricing.single.f${i}` as keyof Dict]}</li>
          ))}
        </ul>
        <a className="btn" href="https://nethead.gumroad.com/l/magic-mirror" target="_blank" rel="noopener">
          {dict["pricing.buy"]}
        </a>
      </div>

      <div className="price-card featured">
        <div className="price-name">{dict["pricing.family.t"]}</div>
        <div className="price-amount">
          $12.99 <small>{dict["pricing.buyout"]}</small>
        </div>
        <p className="price-desc">{dict["pricing.family.d"]}</p>
        <ul className="price-feats">
          {([1, 2, 3] as const).map((i) => (
            <li key={i}>{dict[`pricing.family.f${i}` as keyof Dict]}</li>
          ))}
        </ul>
        <a className="btn" href="https://nethead.gumroad.com/l/magic-mirror" target="_blank" rel="noopener">
          {dict["pricing.buy"]}
        </a>
      </div>
    </div>
  );
}

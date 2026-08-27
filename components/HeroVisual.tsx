import type { Dict } from "@/lib/i18n";

/** Hero 下方的产品视觉：镜像窗口示意（纯 CSS）。 */
export default function HeroVisual({ dict }: { dict: Dict }) {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="visual-mirror">
        <div className="visual-titlebar">
          <span className="visual-dot"></span>
          <span className="visual-dot"></span>
          <span className="visual-dot on"></span>
          <span className="visual-title">{dict["hero.visual.title"]}</span>
        </div>
        <div className="visual-body">
          <div className="visual-panel">
            <span className="tag">{dict["hero.visual.t1"]}</span>
            <span className="zoom">{dict["hero.visual.zoom"]}</span>
            <div className="bars">
              {[42, 66, 52, 78, 60, 90, 70, 96, 82, 58, 74].map((h, i) => (
                <i key={i} style={{ "--h": h } as React.CSSProperties}></i>
              ))}
            </div>
          </div>
          <div className="visual-panel gray">
            <span className="tag">{dict["hero.visual.t2"]}</span>
            <div className="bars">
              {[34, 44, 38, 52, 46, 40, 56, 48, 42, 50, 44].map((h, i) => (
                <i key={i} style={{ "--h": h } as React.CSSProperties}></i>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

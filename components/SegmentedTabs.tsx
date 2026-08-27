"use client";

import { useState } from "react";
import type { Dict } from "@/lib/i18n";

const TABS = ["trader", "dev", "live", "multi"] as const;
type Tab = (typeof TABS)[number];

const LABEL: Record<Tab, keyof Dict> = {
  trader: "usecases.t1",
  dev: "usecases.t2",
  live: "usecases.t3",
  multi: "usecases.t4",
};
const TITLE: Record<Tab, keyof Dict> = {
  trader: "usecases.p1.t",
  dev: "usecases.p2.t",
  live: "usecases.p3.t",
  multi: "usecases.p4.t",
};
const DESC: Record<Tab, keyof Dict> = {
  trader: "usecases.p1.d",
  dev: "usecases.p2.d",
  live: "usecases.p3.d",
  multi: "usecases.p4.d",
};
const BARS: Record<Tab, number[]> = {
  trader: [40, 62, 50, 80, 58, 92, 68, 96, 74],
  dev: [36, 44, 40, 52, 46, 38, 56, 48, 42],
  live: [48, 70, 56, 84, 62, 88, 72, 60, 76],
  multi: [30, 40, 36, 48, 42, 34, 50, 44, 38],
};

/** 使用场景分段选择器。 */
export default function SegmentedTabs({ dict }: { dict: Dict }) {
  const [active, setActive] = useState<Tab>("trader");

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <div className="segmented" role="tablist">
          {TABS.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={active === tab}
              className={active === tab ? "on" : ""}
              onClick={() => setActive(tab)}
            >
              {dict[LABEL[tab]]}
            </button>
          ))}
        </div>
      </div>

      {TABS.map((tab) => (
        <div
          key={tab}
          id={`panel-${tab}`}
          className={`tab-card ${active === tab ? "show" : ""}`}
        >
          <div>
            <h3>{dict[TITLE[tab]]}</h3>
            <p>{dict[DESC[tab]]}</p>
            <ul>
              {([1, 2, 3] as const).map((i) => (
                <li key={i}>{dict[`usecases.p${tab === "trader" ? 1 : tab === "dev" ? 2 : tab === "live" ? 3 : 4}.f${i}` as keyof Dict]}</li>
              ))}
            </ul>
          </div>
          <div className="visual" aria-hidden="true">
            <div className="bars">
              {BARS[tab].map((h, i) => (
                <i key={i} style={{ "--h": h } as React.CSSProperties}></i>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

import RiseIn from "./RiseIn";

/** 居中区块标题（带渐入动画）。 */
export default function SectionHead({ title, desc }: { title: string; desc?: string }) {
  return (
    <RiseIn className="section-head">
      <h2>{title}</h2>
      {desc ? <p>{desc}</p> : null}
    </RiseIn>
  );
}

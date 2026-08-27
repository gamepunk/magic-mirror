import RiseIn from "./RiseIn";

/** 子页面头部（标题 + 导语）。 */
export default function PageHead({ title, lead }: { title: string; lead?: string }) {
  return (
    <div className="page-head">
      <RiseIn>
        <h1>{title}</h1>
        {lead ? <p className="lead">{lead}</p> : null}
      </RiseIn>
    </div>
  );
}

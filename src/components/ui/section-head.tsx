export function SectionHead({ num, title }: { num: string; title: string }) {
  return (
    <div className="mb-8 flex items-baseline gap-3.5">
      <span className="font-mono text-[13px] text-accent">{num}</span>
      <span className="text-[15px] text-muted">{title}</span>
    </div>
  );
}

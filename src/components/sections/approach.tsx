import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";

/**
 * EDIT ME: this section is written from what you've described so far.
 * Rewrite these in your own words — it reads better when it's actually yours.
 */
const APPROACH = [
  {
    num: "01",
    title: "Start with the problem",
    desc: "Before picking tools, work out what the thing actually needs to do and who it's for. Campus Compass started as a navigation frustration, not a tech stack decision.",
  },
  {
    num: "02",
    title: "Build it end to end",
    desc: "Frontend, database, deployment — get a working slice running before polishing any single layer. A deployed rough version teaches more than a perfect local prototype.",
  },
  {
    num: "03",
    title: "Ship for real users",
    desc: "Madhubani Crafts was built for an actual client, not a tutorial. Real constraints and real feedback change what you build and how you prioritise it.",
  },
  {
    num: "04",
    title: "Keep learning deliberately",
    desc: "Currently working through machine learning by building with it — the F1 lap time project was an excuse to do data prep, feature engineering, and model comparison properly.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="mb-[88px] scroll-mt-10">
      <SectionHead num="03" title="how i work" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {APPROACH.map((item, i) => (
          <Reveal key={item.num} delay={(i % 2) * 0.08}>
            <div className="h-full border border-hair bg-panel p-6 transition-colors duration-300 hover:border-accent">
              <div className="mb-3 font-mono text-[12px] text-accent">{item.num}</div>
              <h3 className="mb-2.5 text-[18px] font-semibold">{item.title}</h3>
              <p className="text-[13.5px] leading-[1.7] text-muted">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

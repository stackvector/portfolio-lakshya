import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";

const STACK = [
  {
    name: "Next.js",
    desc: "React framework for production apps and static sites",
    chips: ["App Router", "Server Components", "Static Generation"],
  },
  {
    name: "React",
    desc: "Component-driven interfaces on web and mobile",
    chips: ["Hooks", "Component State", "React Native"],
  },
  {
    name: "TypeScript",
    desc: "Type-safe application code across frontend and tooling",
    chips: ["Typed Components", "Interfaces", "Strict Mode"],
  },
  {
    name: "Supabase",
    desc: "Postgres database, auth, and storage as an app backend",
    chips: ["PostgreSQL", "Auth", "Database Queries"],
  },
  {
    name: "Python",
    desc: "Data analysis and machine learning experiments",
    chips: ["Pandas", "NumPy", "Scikit-learn"],
  },
  {
    name: "GitHub",
    desc: "Source control and collaboration on every project",
    chips: ["Branching", "Pull Requests", "Issue Tracking"],
  },
  {
    name: "Vercel",
    desc: "Deployment and hosting for Next.js projects",
    chips: ["Next.js Deployments", "Preview Deployments"],
  },
  {
    name: "Git",
    desc: "Version control and history management day to day",
    chips: ["Branching", "Rebasing", "Conflict Resolution"],
  },
];

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-hair px-2.5 py-1 font-mono text-[12px] text-muted">
      {children}
    </span>
  );
}

export function Stack() {
  return (
    <section id="stack" className="mb-[88px] scroll-mt-10">
      <SectionHead num="01" title="what i work with" />

      <p className="mb-9 max-w-[560px] text-[14.5px] leading-[1.7] text-muted">
        A practical stack for building and shipping real projects — chosen for
        what gets things working end to end, not for the sake of a long list.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {STACK.map((tool, i) => (
          <Reveal key={tool.name} delay={(i % 3) * 0.06}>
            <div className="group relative h-full border border-hair bg-panel p-6 transition-colors duration-300 hover:border-accent">
              <h3 className="mb-2 text-[19px] font-semibold">{tool.name}</h3>
              <p className="mb-5 text-[13.5px] leading-[1.6] text-muted">
                {tool.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {tool.chips.map((chip) => (
                  <Chip key={chip}>{chip}</Chip>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

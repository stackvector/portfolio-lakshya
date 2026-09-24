import { Magnetic } from "@/components/ui/magnetic";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";

/** Blueprint corner registration marks on all four corners of a panel. */
function CornerTicks() {
  const base = "pointer-events-none absolute h-3.5 w-3.5 border-accent";
  return (
    <span aria-hidden="true">
      <span className={`${base} -left-px -top-px border-l-[1.5px] border-t-[1.5px]`} />
      <span className={`${base} -right-px -top-px border-r-[1.5px] border-t-[1.5px]`} />
      <span className={`${base} -bottom-px -left-px border-b-[1.5px] border-l-[1.5px]`} />
      <span className={`${base} -bottom-px -right-px border-b-[1.5px] border-r-[1.5px]`} />
    </span>
  );
}

function StackTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-hair px-2.5 py-1 font-mono text-[12.5px] text-muted">
      {children}
    </span>
  );
}

function ProjectLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Magnetic range={50} intensity={0.3}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="border-b border-accent pb-0.5 font-mono text-[13px] text-ink transition-opacity hover:opacity-70"
      >
        {children}
      </a>
    </Magnetic>
  );
}

const MINOR_PROJECTS = [
  {
    title: "Campus Compass",
    sub: "A better way to navigate campus.",
    desc: "A campus-focused platform bringing interactive locations, routing, and useful campus information together into one connected experience.",
    stack: ["Python", "Flask", "SQLite", "Folium", "Leaflet"],
    links: [
      {
        href: "https://github.com/stackvector/Campus-Compass",
        label: "source",
      },
    ],
  },
  {
    title: "F1 Lap Time Predictor",
    sub: "Exploring what shapes a lap time.",
    desc: "ML project using Formula One data — data prep, feature engineering, model training, and model comparison using MAE and RMSE.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    links: [
      {
        href: "https://github.com/stackvector/Formula-One-Lap-Time-Predictor",
        label: "source",
      },
    ],
  },
];

export function Work() {
  return (
    <section id="work" className="mb-[88px] scroll-mt-10">
      <SectionHead num="02" title="selected work" />

      {/* Featured — full-width blueprint panel */}
      <Reveal>
        <div className="relative mb-6 border border-hair bg-panel p-7 sm:p-10">
          <CornerTicks />
          <span className="mb-[18px] inline-block border border-accent px-2.5 py-[3px] font-mono text-xs text-accent">
            <span className="text-[9px]">●</span> in development
          </span>
          <h3 className="mb-2 text-[22px] font-semibold sm:text-[26px]">credBase</h3>
          <p className="mb-4 text-sm text-muted">Build a better professional profile.</p>
          <p className="mb-[22px] max-w-[560px] text-[14.5px] leading-[1.7] text-muted">
            An AI-powered platform helping students cut through the confusion of courses,
            certifications, and career paths. Discover relevant credentials, understand the
            skills they build, and find learning opportunities that strengthen your
            professional profile.
          </p>
          <div className="mb-[22px] flex flex-wrap gap-2.5">
            {["FastAPI", "SQLite", "Vanilla JS", "Render"].map((tech) => (
              <StackTag key={tech}>{tech}</StackTag>
            ))}
          </div>
          <div className="flex gap-4">
            <ProjectLink href="https://credbase.vercel.app">live</ProjectLink>
            <ProjectLink href="https://github.com/stackvector/credBase">source</ProjectLink>
          </div>
        </div>
      </Reveal>

      {/* Secondary projects */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {MINOR_PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <div className="h-full border border-hair bg-panel p-6 transition-all duration-300 hover:-translate-y-[3px] hover:border-accent">
              <h3 className="mb-1.5 text-[19px] font-semibold">{project.title}</h3>
              <p className="mb-3 text-[13px] text-muted">{project.sub}</p>
              <p className="mb-4 text-[13.5px] leading-[1.65] text-muted">{project.desc}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <StackTag key={tech}>{tech}</StackTag>
                ))}
              </div>
              <div className="flex gap-4">
                {project.links.map((link) => (
                  <ProjectLink key={link.href} href={link.href}>
                    {link.label}
                  </ProjectLink>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

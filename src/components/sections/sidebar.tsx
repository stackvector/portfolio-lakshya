"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Magnetic } from "@/components/ui/magnetic";
import { useActiveSection } from "@/lib/use-active-section";

const NAV = [
  { id: "stack", label: "stack" },
  { id: "work", label: "work" },
  { id: "approach", label: "approach" },
  { id: "contact", label: "contact" },
];

const SECTION_IDS = NAV.map((item) => item.id);

const CONTACT = [
  { href: "https://github.com/stackvector", label: "github.com/stackvector" },
  {
    href: "https://www.linkedin.com/in/lakshya-kumar-40a9a3415/",
    label: "linkedin.com/in/lakshya-kumar",
  },
];

export function Sidebar() {
  const active = useActiveSection(SECTION_IDS);

  return (
    <aside className="relative flex flex-col justify-between border-b border-hair px-8 py-10 md:sticky md:top-0 md:h-screen md:border-b-0 md:border-r md:px-10 md:py-14">
      <div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="mb-1.5 font-mono text-xs tracking-wide text-accent">
              // portfolio.init()
            </div>
            <h1 className="mb-3.5 text-[28px] font-semibold leading-[1.15] md:text-[32px]">
              Lakshya
              <br />
              Kumar
              <span className="caret" aria-hidden="true" />
            </h1>
          </div>
          <ThemeToggle />
        </div>

        <p className="max-w-[230px] text-sm leading-[1.6] text-muted">
          Full-stack builder currently exploring machine learning.
        </p>

        {/* Section tracker: marks the section currently in view */}
        <nav className="mt-10 flex flex-col gap-3.5 text-sm md:mt-12" aria-label="Sections">
          {NAV.map((item) => {
            const isActive = active === item.id;
            return (
              <Magnetic key={item.id} range={60} intensity={0.3}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`group flex items-center gap-2.5 transition-colors ${
                    isActive ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`h-px transition-all duration-300 ${
                      isActive
                        ? "w-6 bg-accent"
                        : "w-3.5 bg-muted group-hover:w-5 group-hover:bg-accent"
                    }`}
                  />
                  {item.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="ml-auto h-1.5 w-1.5 rounded-full bg-accent"
                    />
                  )}
                </a>
              </Magnetic>
            );
          })}
        </nav>
      </div>

      <div className="mt-10 flex flex-col gap-2 font-mono text-[13px] md:mt-0">
        {CONTACT.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            {item.label}
          </a>
        ))}
      </div>
    </aside>
  );
}

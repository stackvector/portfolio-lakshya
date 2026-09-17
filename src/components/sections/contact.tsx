import { Magnetic } from "@/components/ui/magnetic";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";

const CHANNELS = [
  {
    name: "GitHub",
    handle: "github.com/stackvector",
    href: "https://github.com/stackvector",
    desc: "Source for everything I build, including the projects above.",
  },
  {
    name: "LinkedIn",
    handle: "linkedin.com/in/lakshya-kumar",
    href: "https://www.linkedin.com/in/lakshya-kumar-40a9a3415/",
    desc: "Best place to reach me about roles and opportunities.",
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-10">
      <SectionHead num="04" title="get in touch" />

      <Reveal>
        <div className="relative mb-4 border border-hair bg-panel p-7 sm:p-9">
          <p className="mb-2 max-w-[520px] text-[20px] font-semibold leading-[1.35] sm:text-[24px]">
            Open to opportunities — internships, full-time roles, or freelance
            work.
          </p>
          <p className="font-mono text-[13px] text-muted">
            status: <span className="text-accent">available</span>
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {CHANNELS.map((channel, i) => (
          <Reveal key={channel.name} delay={i * 0.08}>
            <Magnetic range={70} intensity={0.15}>
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full border border-hair p-6 transition-all duration-300 hover:-translate-y-[3px] hover:border-accent"
              >
                <h3 className="mb-1.5 text-[18px] font-semibold">{channel.name}</h3>
                <p className="mb-3 font-mono text-[12.5px] text-accent">{channel.handle}</p>
                <p className="text-[13.5px] leading-[1.65] text-muted">{channel.desc}</p>
              </a>
            </Magnetic>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-hair pt-8 text-[13px] text-muted">
        <span>Lakshya Kumar</span>
        <span className="font-mono">built with next.js — not a template</span>
      </div>
    </section>
  );
}

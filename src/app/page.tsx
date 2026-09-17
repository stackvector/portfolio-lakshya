import { Approach } from "@/components/sections/approach";
import { Contact } from "@/components/sections/contact";
import { LogLine } from "@/components/sections/log-line";
import { Sidebar } from "@/components/sections/sidebar";
import { Stack } from "@/components/sections/stack";
import { Work } from "@/components/sections/work";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-[320px_1fr]">
        <Sidebar />
        <main className="px-6 pb-20 pt-11 sm:px-14 sm:pb-24 sm:pt-16">
          <LogLine />
          <Stack />
          <Work />
          <Approach />
          <Contact />
        </main>
      </div>
    </>
  );
}

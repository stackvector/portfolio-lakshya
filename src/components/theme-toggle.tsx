"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Magnetic } from "@/components/ui/magnetic";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Reserve the space so the sidebar doesn't shift on hydration.
  if (!mounted) return <div className="h-8 w-8 shrink-0" aria-hidden="true" />;

  const isDark = resolvedTheme === "dark";

  return (
    <Magnetic range={55} intensity={0.35}>
      <button
        type="button"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        className="flex h-8 w-8 shrink-0 items-center justify-center border border-hair text-muted transition-colors hover:border-accent hover:text-accent"
      >
        {isDark ? <Sun size={14} strokeWidth={1.75} /> : <Moon size={14} strokeWidth={1.75} />}
      </button>
    </Magnetic>
  );
}

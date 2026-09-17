"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import CustomCursor from "@/components/ui/custom-cursor";
import { MotionPreferencesProvider } from "@/components/ui/motion-preferences";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <MotionPreferencesProvider>
        <CustomCursor />
        {children}
      </MotionPreferencesProvider>
    </ThemeProvider>
  );
}

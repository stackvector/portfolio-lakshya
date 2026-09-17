"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useMotionPreferences } from "@/components/ui/motion-preferences";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const { resolved } = useMotionPreferences();

  // Smooth the raw scroll value so the bar glides instead of snapping.
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 40,
    mass: 0.3,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: resolved === "reduced" ? scrollYProgress : scaleX }}
      className="fixed left-0 right-0 top-0 z-[130] h-[2px] origin-left bg-accent"
    />
  );
}

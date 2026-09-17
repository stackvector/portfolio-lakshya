"use client";

import { useEffect, useState } from "react";
import { useMotionPreferences } from "@/components/ui/motion-preferences";

const MESSAGES = [
  "compiling ideas...",
  "resolving dependencies...",
  "build succeeded.",
];

const TYPE_MS = 28;
const PAUSE_MS = 500;

export function LogLine() {
  const { resolved } = useMotionPreferences();
  const isReduced = resolved === "reduced";
  const [text, setText] = useState("");

  useEffect(() => {
    // Reduced motion: skip the animation, show the final state immediately.
    if (isReduced) {
      setText(MESSAGES[MESSAGES.length - 1]);
      return;
    }

    let messageIndex = 0;
    let charIndex = 0;
    let timeout: ReturnType<typeof setTimeout>;
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;

      const message = MESSAGES[messageIndex];

      if (charIndex <= message.length) {
        setText(message.slice(0, charIndex));
        charIndex += 1;
        timeout = setTimeout(tick, TYPE_MS);
        return;
      }

      // Finished this message — move to the next, or stop on the last.
      if (messageIndex < MESSAGES.length - 1) {
        messageIndex += 1;
        charIndex = 0;
        timeout = setTimeout(tick, PAUSE_MS);
      }
    };

    tick();

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [isReduced]);

  return (
    <div className="mb-14 h-[18px] font-mono text-[13px] text-muted" aria-live="polite">
      <span className="text-accent">$</span> {text}
    </div>
  );
}

// components/launch-confetti.tsx
"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function LaunchCountdown() {
  useEffect(() => {
    const duration = 3000;
    const end = Date.now() + duration;
    const colors = ["#3B82F6", "#6366F1", "#8B5CF6", "#EC4899"];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return null;
}
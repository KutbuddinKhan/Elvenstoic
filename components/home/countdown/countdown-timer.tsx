// components/countdown-timer.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LaunchCountdown from "./LaunchCountdown";

interface TimerProps {
  saleEndDate: Date;
}

export default function CountdownTimer({ saleEndDate }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  }>({ days: "00", hours: "00", minutes: "00", seconds: "00" });

  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = saleEndDate.getTime() - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return {
          days: days.toString().padStart(2, "0"),
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        };
      }
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [saleEndDate]);

  return (
    <div className="relative z-50">
      {showConfetti && <LaunchCountdown />}

      <div className="bg-slate-900/50 backdrop-blur-lg border border-blue-700/30 rounded-xl p-6 shadow-xl shadow-blue-900/20">
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold text-white mb-2">
            🚀 Special Launch Offer
          </h2>
          <p className="text-blue-300 text-sm">
            Price increases in:
          </p>
        </div>

        <div className="flex justify-center gap-3 sm:gap-4">
          {Object.entries(timeLeft).map(([label, value]) => (
            <motion.div
              key={label}
              className="text-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="bg-slate-800/50 rounded-lg p-3 min-w-[70px]">
                <span className="text-2xl font-bold text-white">{value}</span>
              </div>
              <span className="text-xs text-blue-400 uppercase mt-2 block">
                {label}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-red-400 animate-pulse">
            ⚠️ Prices increase by 50% after timer ends!
          </p>
        </div>
      </div>
    </div>
  );
}
"use client";

import { useState, useEffect } from "react";
import { Clock, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export default function InlineTimer() {
    const [days, setDays] = useState(3);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // Set end date to 3 days from now
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + 3);

        const timerInterval = setInterval(() => {
            const now = new Date();
            const difference = endDate.getTime() - now.getTime();

            if (difference <= 0) {
                clearInterval(timerInterval);
                return;
            }

            // Calculate remaining time
            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((difference % (1000 * 60)) / 1000);

            setDays(d);
            setHours(h);
            setMinutes(m);
            setSeconds(s);
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    // Format time segments with leading zeros
    const formatTime = (time: number) => {
        return time < 10 ? `0${time}` : time;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-lg mx-auto"
        >
            {/* Timer Header */}
            <div className="text-center mb-3">
                {/* <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-3 py-1 mb-2">
                    <Clock size={14} className="text-blue-400" />
                    <span className="text-blue-400 font-semibold text-xs uppercase tracking-wide">
                        Cinematic Studio Upgraded
                    </span>
                </div> */}

                <div className="flex flex-col items-center gap-1">
                    <p className="text-white font-medium text-sm max-w-md">
                        Cinematic Studio has just been upgraded.
                    </p>
                    <div className="flex items-center gap-2">
                        <AlertTriangle size={14} className="text-yellow-400" />
                        <p className="text-yellow-400 font-semibold text-[10px] leading-3 sm:text-[11px] sm:leading-4 md:text-xs">
                            Secure your lifetime access before the price increases forever.
                        </p>
                    </div>
                </div>
            </div>

            {/* Timer Display */}
            <div className="flex justify-center gap-2 items-baseline">
                <div className="flex flex-col items-center">
                    <span className="text-2xl font-mono text-white">
                        {formatTime(days)}
                    </span>
                    <span className="text-xs text-gray-400 mt-1">Days</span>
                </div>

                <span className="text-white text-xl">:</span>

                <div className="flex flex-col items-center">
                    <span className="text-2xl font-mono text-white">
                        {formatTime(hours)}
                    </span>
                    <span className="text-xs text-gray-400 mt-1">Hours</span>
                </div>

                <span className="text-white text-xl">:</span>

                <div className="flex flex-col items-center">
                    <span className="text-2xl font-mono text-white">
                        {formatTime(minutes)}
                    </span>
                    <span className="text-xs text-gray-400 mt-1">Mins</span>
                </div>

                <span className="text-white text-xl">:</span>

                <div className="flex flex-col items-center">
                    <span className="text-2xl font-mono text-white">
                        {formatTime(seconds)}
                    </span>
                    <span className="text-xs text-gray-400 mt-1">Secs</span>
                </div>
            </div>
        </motion.div>
    );
}
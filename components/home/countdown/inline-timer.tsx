"use client";

import { useState, useEffect } from "react";
import { Clock, AlertTriangle, X } from "lucide-react";

export default function InlineTimer() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [timerActive, setTimerActive] = useState(false);
    const [timerEnded, setTimerEnded] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        // Start date: Wednesday, May 28th, 2025 at 5pm CET
        const startDate = new Date('2025-05-28T17:00:00+02:00');
        // End date: Saturday, May 31st, 2025 at 5pm CET  
        const endDate = new Date('2025-05-31T17:00:00+02:00');

        // const startDate = new Date('2025-05-22T17:00:00+05:30');  // May 23rd, 2025, 5pm IST
        // const endDate = new Date('2025-05-23T17:00:00+05:30');    // May 24th, 2025, 5pm IST


        const timerInterval = setInterval(() => {
            const now = new Date();

            // Check if we're before the start time
            if (now.getTime() < startDate.getTime()) {
                setTimerActive(false);
                setTimerEnded(false);
                return;
            }

            // Check if timer has ended
            if (now.getTime() >= endDate.getTime()) {
                setTimerActive(false);
                setTimerEnded(true);
                setDays(0);
                setHours(0);
                setMinutes(0);
                setSeconds(0);
                clearInterval(timerInterval);
                return;
            }

            // Timer is active - calculate remaining time
            setTimerActive(true);
            setTimerEnded(false);

            const difference = endDate.getTime() - now.getTime();

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

    // Handle close button click
    const handleClose = () => {
        if (timerEnded) {
            setIsHidden(true);
        }
    };

    // Don't render anything if timer hasn't started yet or is hidden
    if ((!timerActive && !timerEnded) || isHidden) {
        return null;
    }

    return (
        <div className="w-full max-w-lg mx-auto relative">
            {/* Close button - only visible when timer has ended */}
            {timerEnded && (
                <button
                    onClick={handleClose}
                    className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 transition-colors duration-200 z-10"
                    aria-label="Close timer"
                >
                    <X size={16} />
                </button>
            )}

            {/* Timer Header */}
            <div className="text-center mb-3">
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
            {timerActive && (
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
            )}

            {/* Timer Ended Message */}
            {timerEnded && (
                <div className="text-center">
                    <p className="text-red-400 font-semibold text-lg">
                        Timer Ended!
                    </p>
                </div>
            )}
        </div>
    );
}
"use client";

import { useState, useEffect } from "react";
import { Clock, AlertTriangle } from "lucide-react";

export default function InlineTimer() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [timerStatus, setTimerStatus] = useState("waiting"); // "waiting", "active", "ended"
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Fixed dates as per client requirements
        // Wednesday, May 28th, 2025 at 5:00 PM CET
        const startDate = new Date('2025-05-28T15:00:00Z'); // 5 PM CET = 3 PM UTC (assuming standard time)
        // Saturday, May 31st, 2025 at 5:00 PM CET  
        const endDate = new Date('2025-05-31T15:00:00Z'); // 5 PM CET = 3 PM UTC

        const timerInterval = setInterval(() => {
            const now = new Date();
            
            // Check if we're before start date
            if (now < startDate) {
                setTimerStatus("waiting");
                // Calculate time until start
                const timeUntilStart = startDate.getTime() - now.getTime();
                const d = Math.floor(timeUntilStart / (1000 * 60 * 60 * 24));
                const h = Math.floor((timeUntilStart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const m = Math.floor((timeUntilStart % (1000 * 60 * 60)) / (1000 * 60));
                const s = Math.floor((timeUntilStart % (1000 * 60)) / 1000);
                
                setDays(d);
                setHours(h);
                setMinutes(m);
                setSeconds(s);
                return;
            }
            
            // Check if we're after end date
            if (now > endDate) {
                setTimerStatus("ended");
                setDays(0);
                setHours(0);
                setMinutes(0);
                setSeconds(0);
                
                // Show popup when timer ends
                if (!showPopup) {
                    setShowPopup(true);
                }
                return;
            }
            
            // We're in the active period
            setTimerStatus("active");
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
    }, [showPopup]);

    // Format time segments with leading zeros
    const formatTime = (time: number) => {
        return time < 10 ? `0${time}` : time;
    };

    const getTimerText = () => {
        if (timerStatus === "waiting") {
            return "Launch starts in:";
        } else if (timerStatus === "active") {
            return "Secure your lifetime access before the price increases forever.";
        } else {
            return "Offer has ended!";
        }
    };

    return (
        <>
            <div
                className="w-full max-w-lg mx-auto"
            >
                {/* Timer Header */}
                <div className="text-center mb-3">
                    <div className="flex flex-col items-center gap-1">
                        <p className="text-white font-medium text-sm max-w-md">
                            Cinematic Studio has just been upgraded.
                        </p>
                        <div className="flex items-center gap-2">
                            <AlertTriangle size={14} className="text-yellow-400" />
                            <p className="text-yellow-400 font-semibold text-[10px] leading-3 sm:text-[11px] sm:leading-4 md:text-xs">
                                {getTimerText()}
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
            </div>

            {/* Popup when timer ends */}
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-800 p-6 rounded-lg max-w-md mx-4">
                        <h3 className="text-white text-lg font-semibold mb-2">Time's Up!</h3>
                        <p className="text-gray-300 mb-4">The special offer has ended. Thank you for your interest in Cinematic Studio.</p>
                        <button 
                            onClick={() => setShowPopup(false)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
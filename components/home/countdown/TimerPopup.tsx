"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function TimerPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [days, setDays] = useState(3);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    // Show popup after 30 seconds instead of 1.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 30000); // 30 seconds in milliseconds

    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs only once on mount

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

  // Close popup without setting any storage
  const handleClose = () => {
    setIsVisible(false);
  };

  // Format time segments with leading zeros
  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl max-w-md w-full mx-4 relative border border-blue-600/30 shadow-2xl"
          >
            {/* Close button */}
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close popup"
            >
              <X size={24} />
            </button>
            
            {/* Content */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Limited Time Offer
              </h3>
              <p className="text-gray-300 mb-6">
                Get access at our lowest price before it increases!
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">€127</span>
                  <span className="ml-2 text-lg line-through text-gray-400">€147</span>
                </div>
              </div>

              {/* Timer */}
              <div className="flex justify-center gap-3 mb-6">
                <div className="flex flex-col items-center">
                  <div className="bg-blue-900/50 border border-blue-700/30 rounded-md px-3 py-2 w-16">
                    <span className="text-xl font-mono text-white">{formatTime(days)}</span>
                  </div>
                  <span className="text-xs text-gray-400 mt-1">DAYS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-900/50 border border-blue-700/30 rounded-md px-3 py-2 w-16">
                    <span className="text-xl font-mono text-white">{formatTime(hours)}</span>
                  </div>
                  <span className="text-xs text-gray-400 mt-1">HOURS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-900/50 border border-blue-700/30 rounded-md px-3 py-2 w-16">
                    <span className="text-xl font-mono text-white">{formatTime(minutes)}</span>
                  </div>
                  <span className="text-xs text-gray-400 mt-1">MINS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-900/50 border border-blue-700/30 rounded-md px-3 py-2 w-16">
                    <span className="text-xl font-mono text-white">{formatTime(seconds)}</span>
                  </div>
                  <span className="text-xs text-gray-400 mt-1">SECS</span>
                </div>
              </div>

              {/* Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative group inline-block"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-500 rounded-md blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white font-bold border border-blue-700/50 w-full"
                >
                  Buy Now
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

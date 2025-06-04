"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Assuming you have this import

interface CTASectionProps {
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ className = "" }) => {
  return (
    <div className={`relative z-10 mt-6 text-center px-4 sm:px-0 ${className}`}>
      <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="relative group"
        >
          {/* Glowing background */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-500 rounded-md blur opacity-75 group-hover:opacity-100 transition duration-200"></div>

          {/* Actual button */}
          <a
            href="https://copecart.com/products/c6f1ba46/checkout"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white font-bold px-8 py-6 border border-blue-700/50"
            >
              Get The Blueprint Now →
            </Button>
          </a>
        </motion.div>

        {/* Text below the button */}
        <span className="text-sm text-blue-200 font-medium tracking-wide">
          Get Ahead in Just 6 Hours
        </span>
      </div>
    </div>
  );
};

export default CTASection;
"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import InlineTimer from "./countdown/inline-timer";

declare global {
  interface Window {
    _wq?: {
      push?: (args: { id: string; onReady: (video: any) => void }) => void;
    };
    Wistia?: any;
  }
}


export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const videoInitialized = useRef(false);

  // Set your sale end date (3 days from now)
  const saleEndDate = new Date();
  saleEndDate.setDate(saleEndDate.getDate() + 3);

  // Optimized image preloading
  const preloadImages = useCallback(() => {
    const imagePromises = Array.from({ length: 4 }, (_, i) => {
      return new Promise<void>((resolve) => {
        const img = new window.Image();
        img.onload = () => resolve();
        img.onerror = () => resolve(); // Fail silently
        img.src = `/avatars/avatar${i + 1}.jpg`;
      });
    });

    Promise.allSettled(imagePromises).then(() => {
      // Images are preloaded but we don't need state for this
    });
  }, []);

  // Load Wistia script only when needed
  const loadWistiaScript = useCallback(() => {
    if (scriptLoaded || document.querySelector('script[src*="wistia"]')) {
      return Promise.resolve();
    }

    return new Promise<void>((resolve) => {
      const script = document.createElement("script");
      script.src = "//fast.wistia.com/assets/external/E-v1.js";
      script.async = true;
      
      script.onload = () => {
        setScriptLoaded(true);
        resolve();
      };
      
      script.onerror = () => resolve(); // Fail silently
      document.head.appendChild(script);
    });
  }, [scriptLoaded]);

  useEffect(() => {
    // Preload images immediately
    preloadImages();
  }, [preloadImages]);

  const initializeVideo = useCallback(async () => {
    if (videoInitialized.current) return;
    
    try {
      await loadWistiaScript();
      
      // Wait for Wistia to be available
      let attempts = 0;
      const maxAttempts = 50;
      
      while (!window._wq && attempts < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, 100));
        attempts++;
      }

      if (window._wq?.push) {
        window._wq.push({
          id: "mqzmf5kfct",
          onReady: (video) => {
            setVideoLoaded(true);
            videoInitialized.current = true;
            video.play();
            setIsPlaying(true);
          },
        });
      }
    } catch (error) {
      console.error("Error initializing video:", error);
      setVideoLoaded(true); // Show fallback state
    }
  }, [loadWistiaScript]);

  const handleVideoPlay = useCallback(async () => {
    setIsPlaying(true);
    await initializeVideo();
  }, [initializeVideo]);

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-purple-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mt-20 md:mt-40 relative z-10 px-4 md:px-6 flex flex-col items-center py-8 md:py-0">
        <div className="max-w-4xl mx-auto text-center">

          {/* Timer Component - Above Badge */}
          <div className="mb-6 -mt-16 md:-mt-24">
            <InlineTimer />
          </div>

          {/* Badge */}
          <div className="flex flex-col items-center justify-center mb-2 md:mb-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-900/30 border border-blue-800/50 backdrop-blur-sm px-3.5 py-1 text-xs about-title">
              <span>HIGHLY RATED CREATOR SYSTEM</span>
            </div>

            <h1 className="about-title text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter uppercase mt-3 md:mt-4">
              Build a Viral Brand That Grows,{" "}
              <span className="text-gray-200 bg-clip-text bg-gradient-to-r from-gray-300 via-gray-50 to-gray-300 drop-shadow-[0_2px_2px_rgba(255,255,255,0.3)]">
                Sells & Looks Cinematic.
              </span>
            </h1>
            <p className="about-subtitle mt-2 text-sm md:text-base text-blue-100/70 max-w-3xl mr-8 ml-8">
              The system behind Elevenstoic's 1M+ success - now in your hands.
            </p>
          </div>

          {/* Video Preview with Custom Thumbnail */}
          <div className="mt-6 max-w-3xl mx-auto relative">
            <div className="rounded-xl overflow-hidden bg-black aspect-video">
              <div className="w-full h-full relative">
                {/* Custom Thumbnail - Optimized with Next.js Image */}
                {!isPlaying && (
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src="/video-thumbnail.webp"
                      alt="Video Thumbnail"
                      layout="fill"
                      objectFit="cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 640px"
                      className="select-none"
                    />
                    <div 
                      className="absolute inset-0 flex items-center justify-center cursor-pointer group z-10"
                      onClick={handleVideoPlay}
                      aria-label="Play video"
                    >
                      <div className="relative flex items-center justify-center">
                        <div className="absolute w-20 h-20 bg-blue-600/30 rounded-full animate-ping opacity-50"></div>
                        <div className="relative w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play
                            className="h-8 w-8 text-white ml-1"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Loading State */}
                {isPlaying && !videoLoaded && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-20">
                    <div className="w-16 h-16 rounded-full bg-blue-600/70 flex items-center justify-center animate-pulse">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                )}
                
                {/* Wistia Embed Container */}
                <div className="wistia_responsive_padding"
                  style={{
                    padding: "56.25% 0 0 0",
                    position: "relative",
                    maxHeight: "75vh",
                  }}
                >
                  <div
                    className="wistia_responsive_wrapper"
                    style={{
                      height: "100%",
                      left: 0,
                      position: "absolute",
                      top: 0,
                      width: "100%",
                    }}
                  >
                    <div
                      className="wistia_embed wistia_async_mqzmf5kfct videoFoam=true"
                      style={{
                        height: "100%",
                        position: "relative",
                        width: "100%",
                        visibility: videoLoaded ? "visible" : "hidden"
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-500 rounded-md blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <a
                href="https://copecart.com/products/c6f1ba46/checkout"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white font-bold px-8 py-6 border border-blue-700/50"
                >
                  Join Before the Price Increases →
                </Button>
              </a>
            </motion.div>
          </div>
          <span className="block mt-2 italic -mb-3 text-sm md:text-base text-blue-100/70">Instant delivery. No subscriptions.</span>

          {/* Social Proof */}
          <div className="flex flex-col items-center space-y-4 mt-5">
            {/* Avatar Stack */}
            <div className="flex -space-x-3 relative group">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="relative w-9 h-9 rounded-full border-2 border-white/20 shadow-lg bg-slate-800"
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={`/avatars/avatar${i}.jpg`}
                    alt={`User ${i}`}
                    className="w-full h-full rounded-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>
              ))}
              <div className="w-9 h-9 rounded-full border-2 border-white/20 bg-gradient-to-br from-blue-600 to-purple-500 flex items-center justify-center text-xs font-bold text-white shadow-lg">
                500+
              </div>
            </div>

            {/* Rating Section */}
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center gap-1.5 -mt-2">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-7 h-7 text-amber-400 fill-current"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                  >
                    <path
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="drop-shadow"
                    />
                  </motion.svg>
                ))}
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center bg-white/5 rounded-full px-4 py-1.5 border border-white/10 backdrop-blur-sm">
                  <span className="text-lg font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                    4.9/5
                  </span>
                  <span className="mx-2 text-white/50">|</span>
                  <span className="text-sm font-medium text-white/80 tracking-wide">
                    Trusted by 500+ Brands
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
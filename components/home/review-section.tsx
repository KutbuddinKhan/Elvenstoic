"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { testimonials } from "@/data/review-section";
import TakeALookInsideSection from "./TakeALookInsideSection";
import CTASection from "./cta-take-look";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ReviewSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);



  // Handle touch events for mobile swiping with improved sensitivity
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (isTransitioning) return;

    if (touchStart - touchEnd > 50) {
      // Swipe left - next slide
      handleNextSlide();
    }

    if (touchEnd - touchStart > 50) {
      // Swipe right - previous slide
      handlePrevSlide();
    }
  };

  const handleNextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setCurrentSlide((prev) => {
      const newSlide = prev === testimonials.length - 1 ? 0 : prev + 1;
      return newSlide;
    });

    setTimeout(() => setIsTransitioning(false), 700);
  };

  const handlePrevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setCurrentSlide((prev) => {
      const newSlide = prev === 0 ? testimonials.length - 1 : prev - 1;
      return newSlide;
    });

    setTimeout(() => setIsTransitioning(false), 700);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    // Animate the heading and subheading first
    tl.fromTo(
      ".section-heading",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    ).fromTo(
      ".section-subheading",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );

    // Then animate testimonial cards
    tl.fromTo(
      ".testimonial-card",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
    );

    // Subtle hover effects for cards on desktop
    gsap.utils.toArray(".testimonial-card").forEach((card) => {
      const element = card as HTMLElement;
      element.addEventListener("mouseenter", () => {
        gsap.to(element, {
          y: -5,
          boxShadow: "0 15px 30px rgba(0, 32, 128, 0.2)",
          borderColor: "rgba(59, 130, 246, 0.5)",
          duration: 0.3,
        });
      });

      element.addEventListener("mouseleave", () => {
        gsap.to(element, {
          y: 0,
          boxShadow: "0 10px 15px rgba(0, 32, 128, 0.15)",
          borderColor: "rgba(59, 130, 246, 0.3)",
          duration: 0.3,
        });
      });
    });

    // Auto-slide every 3 seconds
    const autoSlideInterval = setInterval(() => {
      handleNextSlide();
    }, 3000);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      clearInterval(autoSlideInterval);
    };
  }, [testimonials.length]);

  // Effect to handle slide change animation with improved smoothness
  useEffect(() => {
    if (!sliderRef.current) return;

    gsap.to(sliderRef.current, {
      x: `-${currentSlide * 100}%`,
      duration: 0.7,
      ease: "power3.out",
    });
  }, [currentSlide]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-slate-950 py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10 z-0" />
      <div className="absolute inset-0 bg-noise opacity-5 z-0" />

      {/* Enhanced Gradient Orbs */}
      <div
        className="absolute top-1/3 -left-24 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl z-0 animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      <div
        className="absolute top-0 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl z-0 animate-pulse"
        style={{ animationDuration: "10s" }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-600/10 rounded-full blur-3xl z-0 animate-pulse"
        style={{ animationDuration: "12s" }}
      />
      <div
        className="absolute -bottom-24 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl z-0 animate-pulse"
        style={{ animationDuration: "9s" }}
      />

      {/* Section Header with animated underline */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
        <p className="text-xs text-center text-white/60 font-medium mb-1">
          Rated #1 in Creative Education
        </p>
        <div className="inline-flex items-center gap-2 bg-blue-900/20 border border-blue-700/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
          <Zap className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-medium text-blue-300 tracking-wide">
            THE CINEMATIC DIFFERENCE
          </span>
        </div>
        <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase text-white mb-4">
          <span className="inline-block">Real Results.</span>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            {" "}
            From Real Creators.
          </span>
        </h2>
        <p className="section-subheading text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto">
          These aren&apos;t cherry-picked. They&apos;re just a few of the
          hundreds who used this system to build real brands.
        </p>
      </div>

      {/* Mobile Testimonial Slider with improved transitions */}
      <div className="md:hidden relative z-10 overflow-hidden">
        <div
          ref={sliderRef}
          className="flex slider-transition"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="testimonial-card flex-shrink-0 w-full p-5"
            >
              <div className="bg-slate-900/90 backdrop-blur-sm border border-blue-800/30 rounded-xl p-5 text-blue-100/90 shadow-lg shadow-blue-900/30 flex flex-col h-full relative overflow-hidden">
                {/* Top-right glow effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>

                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500/50 flex-shrink-0 shadow-md shadow-blue-800/30">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <Link
                      href={`https://instagram.com/${testimonial.handle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-xs text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-3.5 h-3.5 mr-1 fill-current"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.06 1.805.25 2.227.419.562.217.96.477 1.382.896.419.42.679.819.896 1.381.17.422.36 1.057.42 2.227.058 1.265.07 1.645.07 4.85s-.012 3.585-.07 4.85c-.06 1.17-.25 1.805-.42 2.227-.217.562-.477.96-.896 1.382-.42.419-.82.679-1.382.896-.422.17-1.057.36-2.227.42-1.265.058-1.645.07-4.85.07s-3.585-.012-4.85-.07c-1.17-.06-1.805-.25-2.227-.42-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.82-.896-1.382-.17-.422-.36-1.057-.42-2.227-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.06-1.17.25-1.805.42-2.227.217-.562.477-.96.896-1.382.42-.419.82-.679 1.382-.896.422-.17 1.057-.36 2.227-.42 1.265-.058 1.645-.07 4.85-.07M12 0C8.741 0 8.332.014 7.053.072 5.775.131 4.902.333 4.14.63a5.882 5.882 0 00-2.126 1.384A5.882 5.882 0 00.63 4.14C.333 4.902.131 5.775.072 7.053.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.947.059 1.277.261 2.15.558 2.913a5.89 5.89 0 001.384 2.126A5.882 5.882 0 004.14 23.37c.763.297 1.636.499 2.913.558C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.947-.072 1.277-.059 2.15-.261 2.913-.558a5.897 5.897 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.297-.763.499-1.636.558-2.913.058-1.28.072-1.689.072-4.947 0-3.259-.014-3.668-.072-4.947-.059-1.277-.261-2.15-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.763-.297-1.636-.499-2.913-.558C15.668.014 15.259 0 12 0z"></path>
                        <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"></path>
                        <circle cx="18.406" cy="5.594" r="1.44"></circle>
                      </svg>
                      @{testimonial.handle}
                    </Link>
                    <div className="text-xs text-blue-300 mt-1">
                      {testimonial.followers}
                    </div>
                    {testimonial.subtext && (
                      <div className="text-xs text-blue-300/80 mt-0.5">
                        {testimonial.subtext}
                      </div>
                    )}
                  </div>
                </div>

                {/* Quotes with subtle design */}
                <div className="relative pt-3 flex-1 z-10">
                  <svg
                    className="absolute top-0 left-0 w-6 h-6 text-gradient/30 -translate-x-2 -translate-y-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.58,12.71c0,3.96-3.22,7.18-7.18,7.18V15.7c1.9,0,3.44-1.54,3.44-3.44 s-1.54-3.44-3.44-3.44V4.62C6.36,4.62,9.58,7.85,9.58,11.8V12.71L9.58,12.71z M21.66,12.71c0,3.96-3.22,7.18-7.18,7.18V15.7 c1.9,0,3.44-1.54,3.44-3.44s-1.54-3.44-3.44-3.44V4.62c3.96,0,7.18,3.22,7.18,7.18V12.71z" />
                  </svg>
                  <p className="text-sm leading-relaxed mb-2 text-blue-50/90">
                    {testimonial.quote}
                  </p>
                </div>

                {/* Results tag */}
                <div className="mt-auto pt-4 z-10">
                  <span className="inline-flex items-center rounded-full bg-blue-900/30 px-2.5 py-0.5 text-xs font-medium text-blue-300 border border-blue-500/20">
                    <svg
                      className="mr-1 h-3 w-3 text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Verified Results
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Improved Mobile Slider Controls */}
        <div className="flex justify-center items-center mt-6 gap-4">
          <button
            onClick={handlePrevSlide}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-900/30 hover:bg-blue-800/50 text-blue-300 transition-colors"
            disabled={isTransitioning}
            aria-label="Previous slide"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === idx
                  ? "bg-blue-500 w-6"
                  : "bg-blue-500/30 hover:bg-blue-500/50 w-2.5"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
                disabled={isTransitioning}
              />
            ))}
          </div>

          <button
            onClick={handleNextSlide}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-900/30 hover:bg-blue-800/50 text-blue-300 transition-colors"
            disabled={isTransitioning}
            aria-label="Next slide"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Swipe Hint - Improved */}
        {/* <div className="text-center mt-3 text-xs text-blue-400/70 flex items-center justify-center">
          <svg className="w-4 h-4 mr-1 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8,18.791V5.209c0-0.768,0.623-1.392,1.392-1.392c0.768,0,1.392,0.623,1.392,1.392v13.582 c0,0.768-0.623,1.392-1.392,1.392C8.623,20.183,8,19.559,8,18.791z M13.216,5.209v13.582c0,0.768,0.623,1.392,1.392,1.392 c0.769,0,1.392-0.623,1.392-1.392V5.209c0-0.768-0.623-1.392-1.392-1.392C13.839,3.817,13.216,4.441,13.216,5.209z" />
          </svg>
          Swipe or use arrows to navigate
        </div> */}
      </div>

      {/* Desktop Testimonials Grid */}
      <div className="hidden md:grid relative z-10 grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="testimonial-card bg-slate-900/90 backdrop-blur-sm border border-blue-800/30 rounded-xl p-5 md:p-6 text-blue-100/90 shadow-lg shadow-blue-900/30 flex flex-col transition-all duration-300"
          >
            {/* Top-right spot - larger, more visible */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"></div>

            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500/50 flex-shrink-0 shadow-md shadow-blue-800/30">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">
                  {testimonial.name}
                </div>
                <Link
                  href={`https://instagram.com/${testimonial.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-xs text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5 mr-1 fill-current"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.06 1.805.25 2.227.419.562.217.96.477 1.382.896.419.42.679.819.896 1.381.17.422.36 1.057.42 2.227.058 1.265.07 1.645.07 4.85s-.012 3.585-.07 4.85c-.06 1.17-.25 1.805-.42 2.227-.217.562-.477.96-.896 1.382-.42.419-.82.679-1.382.896-.422.17-1.057.36-2.227.42-1.265.058-1.645.07-4.85.07s-3.585-.012-4.85-.07c-1.17-.06-1.805-.25-2.227-.42-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.82-.896-1.382-.17-.422-.36-1.057-.42-2.227-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.06-1.17.25-1.805.42-2.227.217-.562.477-.96.896-1.382.42-.419.82-.679 1.382-.896.422-.17 1.057-.36 2.227-.42 1.265-.058 1.645-.07 4.85-.07M12 0C8.741 0 8.332.014 7.053.072 5.775.131 4.902.333 4.14.63a5.882 5.882 0 00-2.126 1.384A5.882 5.882 0 00.63 4.14C.333 4.902.131 5.775.072 7.053.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.947.059 1.277.261 2.15.558 2.913a5.89 5.89 0 001.384 2.126A5.882 5.882 0 004.14 23.37c.763.297 1.636.499 2.913.558C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.947-.072 1.277-.059 2.15-.261 2.913-.558a5.897 5.897 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.297-.763.499-1.636.558-2.913.058-1.28.072-1.689.072-4.947 0-3.259-.014-3.668-.072-4.947-.059-1.277-.261-2.15-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.763-.297-1.636-.499-2.913-.558C15.668.014 15.259 0 12 0z"></path>
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"></path>
                    <circle cx="18.406" cy="5.594" r="1.44"></circle>
                  </svg>
                  @{testimonial.handle}
                </Link>
                <div className="text-xs text-blue-300 mt-1">
                  {testimonial.followers}
                </div>
                {testimonial.subtext && (
                  <div className="text-xs text-blue-300/80 mt-0.5">
                    {testimonial.subtext}
                  </div>
                )}
              </div>
            </div>

            {/* Quotes with subtle design */}
            <div className="relative pt-3 flex-1">
              <svg
                className="absolute top-0 left-0 w-6 h-6 text-gradient/30 -translate-x-2 -translate-y-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9.58,12.71c0,3.96-3.22,7.18-7.18,7.18V15.7c1.9,0,3.44-1.54,3.44-3.44 s-1.54-3.44-3.44-3.44V4.62C6.36,4.62,9.58,7.85,9.58,11.8V12.71L9.58,12.71z M21.66,12.71c0,3.96-3.22,7.18-7.18,7.18V15.7 c1.9,0,3.44-1.54,3.44-3.44s-1.54-3.44-3.44-3.44V4.62c3.96,0,7.18,3.22,7.18,7.18V12.71z" />
              </svg>
              <p className="text-sm leading-relaxed mb-2 text-blue-50/90">
                {testimonial.quote}
              </p>
            </div>

            {/* Results tag */}
            <div className="mt-auto pt-4">
              <span className="inline-flex items-center rounded-full bg-blue-900/30 px-2.5 py-0.5 text-xs font-medium text-blue-300 border border-blue-500/20">
                <svg
                  className="mr-1 h-3 w-3 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                    clipRule="evenodd"
                  />
                </svg>
                Verified Results
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Take a Look Inside */}
      <TakeALookInsideSection images={["take-look-section/1. have a look 2.PNG", "take-look-section/2. 2Have a look 2.PNG", "take-look-section/3. Have a look 2.PNG", "take-look-section/4. have a look inside 2.PNG", "take-look-section/Replace with slide 5.png", "take-look-section/Replace with slide 6.png"]} />

      {/* CTA button */}
      {/* <div className="relative z-10 mt-10 md:mt-14 text-center px-4 sm:px-0">
        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-500 rounded-md blur opacity-75 group-hover:opacity-100 transition duration-200"></div>

            <a
              href="https://copecart.com/products/e41a84c4/checkout"
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

          <span className="text-sm text-blue-200 font-medium tracking-wide">
            Get Ahead in Just 6 Hours
          </span>
        </div>
      </div> */}

        <CTASection />
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TakeALookInsideSectionProps {
  images: string[];
}

const TakeALookInsideSection: React.FC<TakeALookInsideSectionProps> = ({ images }) => {
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  React.useEffect(() => {
    if (!sliderRef.current) return;

    setIsTransitioning(true);
    
    gsap.to(sliderRef.current, {
      x: `-${currentSlide * 100}%`,
      duration: 0.7,
      ease: "power3.out",
      onComplete: () => setIsTransitioning(false)
    });
  }, [currentSlide]);

  const handleNextSlide = () => {
    if (isTransitioning) return;
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    if (isTransitioning) return;
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="pt-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-indigo-700 rounded-full filter blur-3xl"></div>
      </div>

      {/* New Heading and Subheading */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
          Make Your Investment Back
        </h1>
        <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto">
          This course teaches editing and strategies to monetize your skills.
        </p>
      </div>

      {/* New Image Section */}
      <div className="relative z-10 max-w-7xl mx-auto mb-12">
        <div className="relative overflow-hidden rounded-xl shadow-2xl shadow-blue-900/30 border border-blue-800/30">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-b from-slate-900/90 to-slate-950/90 backdrop-blur-sm">
            <Image
              src="/money/IMG_5566.jpg"
              alt="Investment Image"
              fill
              className="object-cover"
              priority={true}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 70vw"
            />
            {/* Glove effect behind the image */}
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Existing "Take a Look Inside" Section */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
          Take a Look <span className="text-white">Inside</span>
        </h2>
        <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto">
          These are real screenshots from inside the product — so you know exactly what to expect. Zero hype. Just a clear look at what you'll actually use.
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main slider container */}
        <div className="relative overflow-hidden rounded-xl shadow-2xl shadow-blue-900/30 border border-blue-800/30">
          <div
            ref={sliderRef}
            className="flex slider-transition"
          >
            {images.map((image, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-full"
              >
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-b from-slate-900/90 to-slate-950/90 backdrop-blur-sm">
                  <Image
                    src={image}
                    alt={`Screenshot ${idx + 1}`}
                    fill
                    className="object-contain"
                    priority={idx === 0}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 70vw"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows - larger on desktop, positioned on sides */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-slate-900/70 hover:bg-blue-900/70 text-blue-300 transition-colors border border-blue-500/30 backdrop-blur-sm z-10"
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
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

          <button
            onClick={handleNextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-slate-900/70 hover:bg-blue-900/70 text-blue-300 transition-colors border border-blue-500/30 backdrop-blur-sm z-10"
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
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

        {/* Slide indicators */}
        <div className="flex justify-center items-center mt-6 gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => !isTransitioning && setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === idx
                  ? "bg-blue-500 w-8"
                  : "bg-blue-500/30 hover:bg-blue-500/50 w-2.5"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default TakeALookInsideSection;
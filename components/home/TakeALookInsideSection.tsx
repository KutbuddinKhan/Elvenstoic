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
      <div className="relative z-10 max-w-5xl mx-auto mb-12 px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-blue-900/40 border border-blue-800/30 bg-gradient-to-br from-slate-900/95 to-slate-950/95 backdrop-blur-sm p-2">
          {/* Aspect ratio container matching 1350x1080 (5:4) */}
          <div className="relative w-full aspect-[5/4]">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/money/money screens.png"
                alt="Investment Image"
                width={1350}
                height={1080}
                className="object-contain rounded-lg"
                priority={true}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 70vw"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '1350px',
                  maxHeight: '1080px'
                }}
              />
            </div>
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent rounded-lg"></div>
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

      {/* Professional Square Image Slider */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Main slider container with proper aspect ratio */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-blue-900/40 border border-blue-800/30 bg-gradient-to-br from-slate-900/95 to-slate-950/95 backdrop-blur-sm">
          {/* Square aspect ratio container */}
          <div className="relative w-full aspect-square">
            <div
              ref={sliderRef}
              className="flex h-full slider-transition"
            >
              {images.map((image, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-full h-full flex items-center justify-center p-4 md:p-6 lg:p-8"
                >
                  {/* Image container with perfect square aspect ratio */}
                  <div className="relative w-full h-full max-w-full max-h-full">
                    <Image
                      src={image}
                      alt={`Screenshot ${idx + 1}`}
                      fill
                      className="object-contain rounded-xl"
                      priority={idx === 0}
                      sizes="(max-width: 640px) 90vw, (max-width: 768px) 70vw, 50vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Navigation arrows - Made smaller */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-slate-900/80 hover:bg-blue-900/80 text-blue-300 hover:text-white transition-all duration-300 border border-blue-500/30 backdrop-blur-sm z-10 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
            aria-label="Previous slide"
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNextSlide}
            className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-slate-900/80 hover:bg-blue-900/80 text-blue-300 hover:text-white transition-all duration-300 border border-blue-500/30 backdrop-blur-sm z-10 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
            aria-label="Next slide"
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Slide counter overlay */}
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-sm border border-blue-500/30 text-blue-200 text-sm font-medium">
            {currentSlide + 1} / {images.length}
          </div>
        </div>

        {/* Enhanced slide indicators */}
        <div className="flex justify-center items-center mt-8 gap-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => !isTransitioning && setCurrentSlide(idx)}
              className={`h-3 rounded-full transition-all duration-300 hover:scale-110 ${currentSlide === idx
                  ? "bg-blue-500 w-10 shadow-lg shadow-blue-500/30"
                  : "bg-blue-500/30 hover:bg-blue-500/60 w-3"
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
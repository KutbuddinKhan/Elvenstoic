"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Instagram, Star, Zap } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TheFutureContent() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        end: "bottom 30%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      ".future-title",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        ".future-card",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(
        ".future-bottom-text p",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      );

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      id="the-future"
      className="relative bg-slate-950 py-24 md:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      {/* <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/30 rounded-full blur-[100px]"></div> */}
      <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-blue-800/20 via-blue-600/15 to-purple-500/10 rounded-full blur-[80px]"></div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-900/20 border border-blue-700/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300 tracking-wide">
              THE FUTURE OF CONTENT
            </span>
          </div>
          <h2 className="future-title text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase text-white leading-tight">
            The Future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Content Creation
            </span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Introducing Cinematic Studio
          </p>
          <p className="mt-6 text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We've distilled years of expertise growing Elevenstoic into a clear,
            repeatable blueprint. This is the full system for building
            high-impact, scroll-stopping brands that convert and grow.
          </p>
        </div>

        {/* Profile Card */}
        <div className="flex justify-center px-4">
          <Card className="future-card bg-slate-900/60 border border-slate-800 hover:border-blue-600/50 transition-colors w-full max-w-md shadow-xl">
            <CardContent className="p-6 md:p-8 space-y-5">
              <div className="flex justify-center">
                <Avatar className="h-20 w-20 border-4 border-blue-500/50 shadow-lg">
                  <AvatarImage
                    src="/brand-profile-pic/Elevenstoic.JPG"
                    alt="Richard Brunsch"
                  />
                  <AvatarFallback>RB</AvatarFallback>
                </Avatar>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <h3 className="text-lg font-semibold text-white">
                    Richard Brunsch
                  </h3>
                  <Star className="h-5 w-5 fill-yellow-400/80 text-yellow-400/80" />
                </div>

                <div className="flex items-center justify-center gap-1.5 text-sm text-slate-400">
                  <Instagram className="h-4 w-4" />
                  <span>1M+ followers</span>
                </div>

                <p className="text-sm text-slate-400">
                  Founder of Elevenstoic & other 100k+ pages
                </p>

                <blockquote className="mt-4 pt-4 border-t border-slate-800 text-slate-300 italic leading-relaxed">
                  "Everything I've learnt in 2+ years growing past 1M followers
                  & five-figure months—now in one product, ready for you to
                  use."
                </blockquote>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Text Section */}
        <div className="future-bottom-text mt-16 md:mt-20 text-center space-y-4 max-w-2xl mx-auto">
          <p className="text-lg md:text-xl font-medium text-white">
            This isn't just about making your content look slightly better.
          </p>
          <p className="text-lg md:text-xl font-medium text-white">
            It's about creating posts that{" "}
            <span className="text-white font-semibold">demand attention</span>.
          </p>
          <p className="text-lg md:text-xl font-medium text-white">
            Content that builds real followings. Brands that last.
          </p>
        </div>
      </div>
    </section>
  );
}

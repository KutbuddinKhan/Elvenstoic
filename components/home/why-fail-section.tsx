"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { XCircle, CheckCircle, Zap } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhyFailSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      ".fail-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        ".fail-description",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(
        ".fail-card",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-slate-950 overflow-hidden"
    >
      {/* Professional grid overlay for tech feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Background effects */}
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-10 z-0"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-2xl"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-600/10 to-blue-800/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-900/20 border border-blue-700/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300 tracking-wide">
              FAILURE OF PAGES
            </span>
          </div>
          <h2 className="fail-title text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter uppercase">
            WHY MOST INSTAGRAM PAGES{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              FAIL
            </span>
          </h2>
          <p className="fail-description mt-6 max-w-2xl mx-auto text-muted-foreground text-lg">
            Most Instagram pages look exactly the same—basic content, bland
            aesthetics, nothing scroll-stopping.
          </p>
        </div>

        {/* Core Message Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {[
            "They waste hours trying to make their content look decent. Watching endless tutorials, testing every preset, fighting with editing software - only to create posts that get ignored.",
            "Let’s be real. The pages that grow? They're not better editors.",
            "They have two key advantages: access to premium resources and a proven system.",
            "They follow a tested strategy, not random guesswork.",
            "Success isn’t just effort — it’s having the right tools and guidance.",
          ].map((text, i) => (
            <Card
              key={i}
              className="fail-card relative bg-background/50 border border-white/10 backdrop-blur-lg p-6 rounded-xl overflow-hidden shadow-xl"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
              <CardContent className="relative z-10 text-lg text-white">
                {text}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Without Cinematic Studio",
              icon: <XCircle className="h-8 w-8 text-red-500" />,
              items: [
                "Endless hours watching tutorials",
                "Guessing what works through trial and error",
                "Struggling with complex editing software",
                "Creating content that looks like everyone else’s",
                "Slow growth and low engagement",
              ],
              color: "red",
            },
            {
              title: "With Cinematic Studio",
              icon: <CheckCircle className="h-8 w-8 text-green-500" />,
              items: [
                "Instant access to premium resources",
                "Follow a proven system that works",
                "Create content that truly stands out",
                "Save time with ready-to-use templates",
                "Rapid growth and high engagement",
              ],
              color: "green",
            },
          ].map(({ title, icon, items, color }, i) => (
            <Card
              key={i}
              className="fail-card relative p-6 bg-background/50 border border-white/10 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden"
            >
              <div
                className={`absolute -top-10 ${
                  i === 0 ? "-left-10" : "-right-10"
                } w-40 h-40 bg-${color}-500/10 rounded-full blur-3xl pointer-events-none`}
              ></div>
              <div className="relative z-10 flex gap-4 items-start">
                <div className="flex-shrink-0">{icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <ul className="space-y-2 text-white/90">
                    {items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        {color === "red" ? (
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        ) : (
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        )}
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

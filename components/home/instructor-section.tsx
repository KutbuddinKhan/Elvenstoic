"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Instagram, ThumbsUp, Zap } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function InstructorSection() {
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
      ".instructor-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        ".instructor-description",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(
        ".instructor-image",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(
        ".instructor-stats",
        { opacity: 0, y: 20 },
        { opacity: 1, stagger: 0.2, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.8"
      );

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <section
      id="instructor"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-noise opacity-5 z-0"></div>

      {/* Blue spotlight behind image */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl z-0"></div>

      {/* Gold and Blue spotlights for visual balance */}
      {/* <div className="absolute top-0 right-0 w-72 h-72 bg-blue/20 rounded-full blur-3xl z-0"></div> */}
      {/* <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/20 rounded-full blur-3xl z-0"></div> */}

      {/* Blue spotlight behind stats */}
      {/* <div className="absolute top-2/3 right-1/3 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl z-0"></div> */}

      <div className="container px-4 md:px-6 relative z-10">
        {/* Title & Description */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-900/20 border border-blue-700/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300 tracking-wide">
              INSTRUCTOR
            </span>
          </div>
          <h2 className="instructor-title text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase text-white">
            MEET YOUR{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              INSTRUCTOR
            </span>
          </h2>
          <p className="instructor-description mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            700M+ views across Instagram, collaborating with global brands, and
            earning consistently with content that converts.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Image 1 */}
          <div className="instructor-image lg:col-span-1">
            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-blue/20 to-gold/20 p-2">
              <Image
                src="/instructor/COLLABS-CinematicStudioCreative.png"
                alt="Instructor Collaboration"
                width={600}
                height={600}
                className="rounded-lg object-cover w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Text & Stats */}
          <div className="space-y-8 lg:col-span-2">
            {/* Instagram Stats */}
            <div className="instructor-stats bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-4 mb-4">
                <Instagram className="h-7 w-7 text-blue" />
                <div>
                  <h3 className="text-xl font-semibold">Instagram Growth</h3>
                  <p className="text-muted-foreground">
                    Followers & Engagement
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  ["Followers", "1M+"],
                  ["Posts", "900"],
                  ["Views (365d)", "1B+"],
                  ["Organic Reach", "100%"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="bg-background/60 p-4 rounded-lg text-center"
                  >
                    <p className="text-sm text-muted-foreground">{label}</p>
                    <p className="text-xl font-bold">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Collaboration Stats */}
            <div className="instructor-stats bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-4 mb-4">
                <ThumbsUp className="h-7 w-7 text-gold" />
                <div>
                  <h3 className="text-xl font-semibold">Collaborations</h3>
                  <p className="text-muted-foreground">Brand Partnerships</p>
                </div>
              </div>
              <p className="text-base text-foreground">
                Collaborated with industry-leading creators and businesses,
                delivering cinematic performance content.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Alex Hormozi",
                  "Printify",
                  "Chris Williamson",
                  "Steven Bartlett",
                  "Preneur Launch",
                  "Tradenzio",
                  "Alvaro Gellings",
                ].map((brand) => (
                  <span
                    key={brand}
                    className="inline-flex items-center rounded-full bg-blue/10 px-3 py-1 text-xs font-medium text-blue"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Second Image */}
        <div className="mt-16 max-w-3xl mx-auto instructor-image">
          <div className="rounded-xl overflow-hidden bg-gradient-to-tr from-gold/20 to-blue/20 p-2">
            <Image
              src="/instructor/Growth creative website .png"
              alt="Instructor Second Portrait"
              width={800}
              height={600}
              className="rounded-lg object-cover w-full h-auto"
              loading="eager"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

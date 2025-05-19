"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { User, Building, Briefcase, Palette, Award, Zap } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const targetAudience = [
  {
    id: 1,
    title: "Content Creators",
    description: "Looking to develop a distinctive, professional aesthetic.",
    icon: <User className="h-6 w-6" />, // Removed text-blue class
  },
  {
    id: 2,
    title: "Theme Page Owners",
    description: "Looking to stand out in saturated feeds.",
    icon: <Palette className="h-6 w-6" />, // Removed text-gold class
  },
  {
    id: 3,
    title: "Brand Builders",
    description: "Who want to command attention with cinematic content.",
    icon: <Building className="h-6 w-6" />, // Removed text-blue class
  },
  {
    id: 4,
    title: "Business Owners",
    description: "Seeking to create organic content that converts.",
    icon: <Briefcase className="h-6 w-6" />, // Removed text-gold class
  },
  {
    id: 5,
    title: "Experienced Creators",
    description: "Ready to elevate quality & save time on editing.",
    icon: <Award className="h-6 w-6" />, // Removed text-blue class
  },
];

export default function WhoForSection() {
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
      ".who-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        ".who-card",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(
        ".impact-title",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        ".testimonial-card",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 0.6, ease: "power2.out" },
        "-=0.6"
      );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-slate-950 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-noise opacity-5 z-0"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-800/20 via-blue-600/10 to-purple-500/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700/20 rounded-full blur-2xl z-0"></div>
      {/* <div className="absolute top-0 left-0 w-80 h-80 bg-gold/10 rounded-full blur-2xl z-0"></div> */}

      <div className="container relative z-10 px-4 md:px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-900/20 border border-blue-700/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300 tracking-wide">
              LOVE OF FANS
            </span>
          </div>
          <h2 className="who-title text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase text-white">
            WHO THIS IS{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              FOR
            </span>
          </h2>
        </div>

        {/* Target Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetAudience.map((item) => (
            <Card
              key={item.id}
              className="who-card border border-blue-900/40 bg-background/50 backdrop-blur-sm shadow-xl"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="feature-icon mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Section */}
        <div className="mt-28 text-center">
          <h2 className="impact-title text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase text-white mb-16">
            THE IMPACT OF{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              CINEMATIC CONTENT
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "redd.jayy_",
                text: `"You probably don't know how important your content is. It's changing people's mindsets. God bless you and your family."`,
                src: "/avatars/avatar7.jpg",
              },
              {
                name: "asasharks",
                text: `"Arguably the best ig post of all time ... i needed this today 🧐"`,
                src: "/avatars/avatar2.jpg",
              },
              {
                name: "hugovalletive",
                text: `"Your content truly inspired me to work on myself. You're entertaining and inspiring thousands, including me."`,
                src: "/avatars/avatar4.jpg",
              },
              {
                name: "tommy.porcari",
                text: "Aight, I can proudly announce that this page is getting favorited because I can't afford to miss any of these posts 🔥",
                src: "/avatars/avatar8.jpg",
              },
              {
                name: "asasharks",
                text: "Never been happier to come across this page ❤️",
                src: "/avatars/avatar1.jpg",
              },
              {
                name: "locked_inasf",
                text: "I have been following elevenstoic for 3 months and it might be the best page I've ever followed. Thank you elevenstoic for this content everyday.",
                src: "/avatars/avatar6.jpg",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="testimonial-card border border-blue-900/30 bg-background/50 backdrop-blur-sm shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonial.src}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                      <p className="font-medium text-white">
                        {testimonial.name}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CinematicStudioSection() {
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
      ".studio-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        ".studio-image",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(
        ".studio-content p",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 0.5, ease: "power2.out" },
        "-=0.6"
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-noise opacity-5 z-0"></div>
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl z-0"></div>
      {/* <div className="absolute bottom-0 right-0 w-72 h-72 bg-gold/20 rounded-full blur-3xl z-0"></div> */}

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Section */}
          <div className="lg:col-span-4">
            <div className="studio-image order-1">
              <div className="rounded-xl overflow-hidden bg-gradient-to-br from-blue/20 to-gold/20 p-2">
                <Image
                  src="/founder.jpeg"
                  alt="Founder"
                  width={800}
                  height={800}
                  className="rounded-lg object-cover w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:col-span-8 studio-content">
            <h2 className="studio-title text-3xl md:text-4xl font-bold tracking-tighter mb-8 text-white">
              Hey, I'm the creator behind{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Elevenstoic
              </span>{" "}
              👋
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                If you're here, you're dreaming of building a stunning,
                cinematic Instagram Brand that stops people mid-scroll. The kind
                of content that makes people say 'How did they make this?'
                You've probably spent countless hours trying to create that
                perfect aesthetic feed. Late nights editing, consistent posting,
                but your content still looks... ordinary. Generic. Just like
                everyone else's.
              </p>

              <p>
                You're watching these beautiful Instagram accounts with their
                jaw-dropping cinematic content making thousands monthly, working
                from anywhere, building these breathtaking aesthetic brands. But
                you're stuck in the sea of average. Trust me, I've been there.
              </p>

              <div className="mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group inline-block"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-500 rounded-md blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                  <Button
                    asChild
                    size="lg"
                    className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white font-bold border border-blue-700/50"
                  >
                    <a href="/about">Read My Story</a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

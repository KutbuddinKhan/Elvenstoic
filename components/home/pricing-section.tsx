"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import InlineTimer from "./countdown/inline-timer";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  "Instant Access To All Modules & Resources",
  "Instant Access To The Brand Identity Mastery",
  "Instant Access To Viral Editing Lab",
  "Instant Access To Premium Clip Vault",
  "Instant Access To Creator Monetization Blueprint",
  "Instant Access To Cinematic Toolkit",
  "Instant Access To AI Assistant Blueprint",
  "Access to Creator Community",
  "BONUS: 90 day scale system",
  "Lifetime Updates & Priority Support",
];

export default function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Skip GSAP initialization during SSR
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
      ".pricing-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        ".pricing-card",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(
        ".pricing-feature",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 0.5, ease: "power2.out" },
        "-=0.6"
      );

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-24 md:py-32 bg-card relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-noise"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple/10 rounded-full blur-3xl"></div>
      {/* <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div> */}

      <div className="container px-4 md:px-6 relative z-10">
        {/* Timer Component - Above Badge */}
        <div className="mb-6 -mt-16 md:-mt-24">
          <InlineTimer />
        </div>
        <div className="text-center mb-16">
          {/* <h2 className="pricing-titletext-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase text-white">
             Value Stack <span className="text-gradient">&</span> Offer
          </h2> */}
          <p className="mt-4 text-xl text-purple font-bold">NOW ONLY €127</p>
          <p className="mt-2 text-muted-foreground">
            UNLOCK LIFETIME ACCESS NOW
          </p>
          <p className="text-sm text-muted-foreground">
            Limited Spots Available.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="pricing-card pricing-highlight border bg-background/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Lifetime Pass
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-sm text-muted-foreground">Total Value</p>
                  <p className="text-lg font-bold line-through">€1485</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    One-Time Payment
                  </p>
                  <p className="text-3xl font-bold text-purple">€127</p>
                </div>
              </div>

              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="pricing-feature flex items-start gap-2"
                  >
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col">
              <div className="flex justify-center mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-500 rounded-md blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                  <a
                    href="https://copecart.com/products/e41a84c4/checkout"
                    target="_blank"
                  >
                    <Button
                      size="lg"
                      className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white font-bold px-8 py-6 border border-blue-700/50"
                    >
                      JOIN CINEMATIC STUDIO NOW - €127
                    </Button>
                  </a>
                </motion.div>
              </div>
              <p className="text-sm text-center text-muted-foreground mt-2">
                Immediate access. Secure purchase.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

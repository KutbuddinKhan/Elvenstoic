"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { faqs } from "@/data/faq-section";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}



export default function FaqSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openItem, setOpenItem] = useState<string>("item-0");

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
      ".faq-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        ".faq-accordion",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(
        ".faq-cta",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative py-24 md:py-32 bg-slate-950 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
      {/* <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/15 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/15 rounded-full blur-[100px]"></div> */}

      <div className="relative z-10 container px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-900/20 border border-blue-700/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300 tracking-wide">
              HAVE ANOTHER QUESTION
            </span>
          </div>
          <h2 className="faq-title text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase text-white">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Questions
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Everything you need to know before joining Cinematic Studio
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="faq-accordion space-y-2"
            value={openItem}
            onValueChange={setOpenItem}
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-slate-800 rounded-lg overflow-hidden hover:border-slate-700 transition-colors"
              >
                <AccordionTrigger className="px-6 py-5 text-left text-lg font-medium text-white hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                        openItem === `item-${index}`
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-slate-800 text-slate-400"
                      } transition-colors`}
                    >
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-slate-300 leading-relaxed">
                  <div className="pl-12">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="faq-cta mt-16 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Ready to transform your content?
            </h3>

            <div className="flex justify-center mt-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
                <a
                  href="https://copecart.com/products/e41a84c4/checkout"
                  target="_blank"
                >
                  <Button
                    size="lg"
                    className="relative bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white font-bold px-8 py-6 border border-blue-700/50 shadow-lg"
                  >
                    <div className="flex flex-col">
                      <span>Join Cinematic Studio</span>
                      <span className="text-sm font-normal mt-1 opacity-90">
                        One-time payment of €127
                      </span>
                    </div>
                  </Button>
                </a>
              </motion.div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <span>Lifetime access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <span>One Time Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <span>No Hidden fees</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 mt-8">
              © {new Date().getFullYear()} Cinematic Studio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

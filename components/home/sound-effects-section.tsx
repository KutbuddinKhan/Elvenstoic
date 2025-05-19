"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function SoundEffectsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    })

    tl.fromTo(".sound-title", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
      .fromTo(".sound-description", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .fromTo(".sound-image", { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }, "-=0.6")
      .fromTo(".sound-features li", { opacity: 0, x: -20 }, { opacity: 1, x: 0, stagger: 0.1, duration: 0.5, ease: "power2.out" }, "-=0.8")

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-noise opacity-5 z-0"></div>

      {/* Color Spotlights */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute top-2/3 right-1/3 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl z-0"></div>

      <div className="container px-4 md:px-6 relative z-10 space-y-32">
        {/* First Content Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="sound-image order-1 lg:order-2">
            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-blue/20 to-gold/20 p-2">
              <Image
                src="/images/brand-identity-master.png"
                alt="Brand Identity Master"
                width={800}
                height={600}
                className="rounded-lg object-cover w-full h-auto"
                priority
              />
            </div>
          </div>

          <div className="order-2 lg:order-1">
            <h2 className="sound-title text-3xl md:text-4xl font-bold tracking-tight uppercase text-white mb-4">
              BRAND IDENTITY <span className="text-gradient">MASTER</span>
            </h2>
            <p className="sound-description text-lg text-muted-foreground mb-6">
              Develop a signature style that makes your content instantly recognizable. Build a unique aesthetic that attracts followers and creates a memorable brand.
            </p>
            <ul className="sound-features text-blue-100/80 space-y-3 list-disc list-inside">
              <li>Ready-to-use cinematic font collection</li>
              <li>Step-by-step guide to creating a distinctive visual identity</li>
              <li>Color palette strategies that reinforce your brand message</li>
              <li>Techniques to maintain brand identity across all content</li>
              <li>Framework for building a brand that resonates with your personality</li>
            </ul>
          </div>
        </div>

        {/* Second Content Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="sound-image order-1">
            <div className="rounded-xl overflow-hidden bg-gradient-to-tr from-gold/20 to-blue/20 p-2">
              <Image
                src="/images/viral-editing-lab.png"
                alt="Viral Editing Lab"
                width={800}
                height={600}
                className="rounded-lg object-cover w-full h-auto"
                priority
              />
            </div>
          </div>

          <div className="order-2">
            <h2 className="sound-title text-3xl md:text-4xl font-bold tracking-tight uppercase text-white mb-4">
              VIRAL EDITING <span className="text-gradient">LAB</span>
            </h2>
            <p className="sound-description text-lg text-muted-foreground mb-6">
              Step-by-step tutorials on creating cinematic content that stops the scroll. Transform basic footage into share-worthy content.
            </p>
            <ul className="sound-features text-blue-100/80 space-y-3 list-disc list-inside">
              <li>Complete editing tutorials for both Premiere Pro and CapCut</li>
              <li>Master short-form videos AND aesthetic static posts</li>
              <li>Find viral-worthy content ideas in any niche</li>
              <li>Our proven process for creating aesthetic posts</li>
            </ul>
          </div>
        </div>

        {/* Third Content Block - AI ASSISTANT BLUEPRINT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="sound-image order-1 lg:order-2">
            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-blue/20 to-gold/20 p-2">
              <Image
                src="/images/AI Assistant Blueprint Cover.png"
                alt="AI Assistant Blueprint"
                width={800}
                height={600}
                className="rounded-lg object-cover w-full h-auto"
                priority
              />
            </div>
          </div>

          <div className="order-2 lg:order-1">
            <h2 className="sound-title text-3xl md:text-4xl font-bold tracking-tight uppercase text-white mb-4">
              AI ASSISTANT <span className="text-gradient">BLUEPRINT</span>
            </h2>
            <p className="sound-description text-lg text-muted-foreground mb-6">
              Unlock the true power of AI. Learn how to delegate smarter, create faster, and think clearer – with ChatGPT as your always-on creative co-pilot.
            </p>
            <ul className="sound-features text-blue-100/80 space-y-3 list-disc list-inside">
              <li>How I use ChatGPT as a daily assistant for brand, strategy & execution</li>
              <li>GPT-powered Idea & Writer Machine for nonstop creative output</li>
              <li>How to build your own personal "AI brain" to speed up every task</li>
              <li>Step-by-step setup for using GPT as a business partner (incl. example workflows)</li>
              <li>Bonus: My personal "AI Stack" of tools & plugins</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
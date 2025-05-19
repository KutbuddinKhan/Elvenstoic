"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function CinematicToolkitSection() {
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

    tl.fromTo(".toolkit-title", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
      .fromTo(".toolkit-description", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .fromTo(".toolkit-image", { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }, "-=0.6")
      .fromTo(".toolkit-features li", { opacity: 0, x: -20 }, { opacity: 1, x: 0, stagger: 0.1, duration: 0.5, ease: "power2.out" }, "-=0.8")

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Noise + Decorative Background Spots */}
      <div className="absolute inset-0 bg-noise opacity-5 z-0"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/30 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-900/40 rounded-full blur-3xl z-0"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-900/40 to-blue-600/20 rounded-full blur-2xl z-0"></div>
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gradient-to-tl from-gold/15 to-blue-700/20 rounded-full blur-3xl z-0"></div>

      <div className="container px-4 md:px-6 relative z-10 space-y-24">
        {/* Item 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 lg:order-2">
            <div className="toolkit-image relative">
              <div className="rounded-xl overflow-hidden bg-gradient-to-br from-blue/20 to-gold/20 p-2">
                <Image
                  src="/images/premium-clip-vault.png"
                  alt="Premium Clip Vault"
                  width={800}
                  height={600}
                  className="rounded-lg object-cover w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-1">
            <div className="toolkit-title inline-flex items-center gap-2 rounded-full bg-blue-900/30 border border-blue-800/50 backdrop-blur-sm px-4 py-1.5 text-sm mb-4 text-white">
              ALSO INCLUDED
            </div>

            <h2 className="toolkit-title text-3xl md:text-4xl font-bold tracking-tighter text-white mb-6">
              PREMIUM CLIP <span className="text-gradient">VAULT</span>
            </h2>

            <p className="toolkit-description text-lg text-blue-100/70 mb-8">
              Transform ordinary videos into cinematic masterpieces with our extensive collection of high-quality footage. Never struggle to find the perfect clip again.
            </p>

            <ul className="toolkit-features text-blue-100/80 space-y-3 list-disc list-inside">
              <li>700+ ready-to-use cinematic clips</li>
              <li>Both horizontal AND vertical formats included</li>
              <li>Perfectly organized by category and theme</li>
              <li>Complete guide to finding any clip you need</li>
              <li>Constantly updated with fresh content</li>
            </ul>
          </div>
        </div>

        {/* Item 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-1">
            <div className="toolkit-image relative">
              <div className="rounded-xl overflow-hidden bg-gradient-to-tr from-gold/20 to-blue/20 p-2">
                <Image
                  src="/images/cinematic-toolkit.png"
                  alt="Cinematic Toolkit"
                  width={800}
                  height={600}
                  className="rounded-lg object-cover w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="order-2">
            <div className="toolkit-title inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1 text-sm text-gold mb-4">
              ALSO INCLUDED
            </div>

            <h2 className="toolkit-title text-3xl md:text-4xl font-bold tracking-tighter text-white mb-6">
              CINEMATIC <span className="text-gradient">TOOLKIT</span>
            </h2>

            <p className="toolkit-description text-lg text-blue-100/70 mb-8">
              The secrets behind our viral content. These resources will give your posts that Hollywood quality everyone's trying to copy - without the complex editing.
            </p>

            <ul className="toolkit-features text-blue-100/80 space-y-3 list-disc list-inside">
              <li>Film burn transitions</li>
              <li>Cinematic overlays with perfect grain</li>
              <li>SFX sound effects library</li>
              <li>Caption animation presets</li>
              <li>Curated Music Bank</li>
            </ul>
          </div>
        </div>

        {/* Item 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 lg:order-2">
            <div className="toolkit-image relative">
              <div className="rounded-xl overflow-hidden bg-gradient-to-br from-blue/20 to-gold/20 p-2">
                <Image
                  src="/images/creator-monetization-playbook.png"
                  alt="Creator Monetization Playbook"
                  width={800}
                  height={600}
                  className="rounded-lg object-cover w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-1">
            <div className="toolkit-title inline-flex items-center gap-2 rounded-full bg-blue-900/30 border border-blue-800/50 backdrop-blur-sm px-4 py-1.5 text-sm mb-4 text-white">
              ALSO INCLUDED
            </div>

            <h2 className="toolkit-title text-3xl md:text-4xl font-bold tracking-tighter text-white mb-6">
              CREATOR MONETIZATION <span className="text-gradient">PLAYBOOK</span>
            </h2>

            <p className="toolkit-description text-lg text-blue-100/70 mb-8">
              Transform your cinematic content into multiple income streams. Learn our proven strategies for turning aesthetic content and engaged followers into consistent revenue opportunities.
            </p>

            <ul className="toolkit-features text-blue-100/80 space-y-3 list-disc list-inside">
              <li>Build and monetize a newsletter that turns followers into customers</li>
              <li>Create digital products your audience wants</li>
              <li>Generate passive income through affiliate marketing</li>
              <li>Attract brand deals and sponsorships</li>
              <li>Offer premium services based on your expertise</li>
            </ul>
          </div>
        </div>

        {/* Item 4 - BONUS MODULE - The 90-Day Scale System */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-1">
            <div className="toolkit-image relative">
              <div className="rounded-xl overflow-hidden bg-gradient-to-tr from-gold/20 to-blue/20 p-2">
                <Image
                  src="/images/Bonus Thumbnail.png"
                  alt="90-Day Scale System"
                  width={800}
                  height={600}
                  className="rounded-lg object-cover w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="order-2">
            <div className="toolkit-title inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1 text-sm text-gold mb-4">
              LIMITED TIME BONUS
            </div>

            <h2 className="toolkit-title text-3xl md:text-4xl font-bold tracking-tighter text-white mb-6">
              THE 90-DAY SCALE <span className="text-gradient">SYSTEM</span>
            </h2>

            <p className="toolkit-description text-lg text-blue-100/70 mb-8">
              Your roadmap to grow, delegate & operate like a real content business. Unlock the exact strategy I'd follow if I had to start from scratch today – broken down into a clear 90-day action plan.
            </p>

            <ul className="toolkit-features text-blue-100/80 space-y-3 list-disc list-inside">
              <li>1x In-Depth Strategy Presentation (video-based)</li>
              <li>The 90-Day PDF Blueprint</li>
              <li>My Delegation Blueprint (how I outsourced editing & scaled output)</li>
            </ul>

            <div className="mt-6 text-gold text-sm font-medium">
              This bonus is included for a limited time - and only available inside this version of Cinematic Studio.
            </div>
          </div>
        </div>

        <div className="text-center pt-16">
          <p className="text-lg font-medium text-white">
            ALL MODULES & RESOURCES COME WITH AN INSTRUCTION VIDEO.
          </p>
        </div>
      </div>
    </section>
  )
}

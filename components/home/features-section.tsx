"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Film, Package, Zap, DollarSign, Clock, Award } from "lucide-react"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const features = [
  {
    id: 1,
    title: "Cinematic Sound Effects Pack",
    description: "Elevate your videos with our library of 100+ high-quality sound effects.",
    icon: <Zap className="h-6 w-6 text-gradient" />,
    gradientFrom: "from-blue-700",
    gradientTo: "to-blue-500"
  },
  {
    id: 2,
    title: "Viral Hooks Vault",
    description: "Never struggle to come up with engaging hooks again with our collection of 100+ viral hooks.",
    icon: <Package className="h-6 w-6 text-gold" />,
    gradientFrom: "from-gold",
    gradientTo: "to-amber-500"
  },
  {
    id: 3,
    title: "Cinematic Toolkit",
    description: "The secrets behind our viral content with transitions, overlays, and presets.",
    icon: <Film className="h-6 w-6 text-gradient" />,
    gradientFrom: "from-blue-700",
    gradientTo: "to-blue-500"
  },
  {
    id: 4,
    title: "Creator Monetization Playbook",
    description: "Transform your content into multiple income streams with our proven strategies.",
    icon: <DollarSign className="h-6 w-6 text-gold" />,
    gradientFrom: "from-gold",
    gradientTo: "to-amber-500"
  },
  {
    id: 5,
    title: "Lifetime Access",
    description: "Get unlimited access to all current and future resources in the Cinematic Studio.",
    icon: <Clock className="h-6 w-6 text-gradient" />,
    gradientFrom: "from-blue-700",
    gradientTo: "to-blue-500"
  },
  {
    id: 6,
    title: "Premium Quality",
    description: "All resources are professionally created to give your content that Hollywood quality.",
    icon: <Award className="h-6 w-6 text-gold" />,
    gradientFrom: "from-gold",
    gradientTo: "to-amber-500"
  },
]

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Skip GSAP initialization during SSR
    if (typeof window === "undefined") return

    const featureElements = gsap.utils.toArray(".feature-card") as HTMLElement[]

    featureElements.forEach((element, index) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1, // Staggered animation
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        },
      )
    })

    // Animate the gradient glow elements
    gsap.to(".gradient-glow", {
      opacity: 0.6,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    })

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section id="features" ref={sectionRef} className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Subtle grid without boxes */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div> */}
      
      {/* Gradient spots - similar to hero but more subtle */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-2/3 w-64 h-64 bg-blue-700/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter uppercase">
            THE <span className="text-gradient">ALL-IN-ONE</span> SYSTEM
          </h2>
          <p className="mt-4 text-xl text-blue-100/70 max-w-2xl mx-auto">
            THE COMPLETE SYSTEM THAT BUILT ELEVENSTOIC FOR CREATORS
          </p>
          <div className="mt-6 max-w-3xl mx-auto">
            <p className="text-blue-100/60">
              Build your brand with purpose and precision. Access the exact cinematic blueprint that built Elevenstoic - without endless trial and error.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card group relative">
              {/* Light effect gradient glow */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo} rounded-lg opacity-30 blur-lg gradient-glow group-hover:opacity-40 transition-opacity duration-300`}></div>
              
              {/* Card content */}
              <div className="relative p-6 rounded-lg border border-blue-900/30 bg-slate-900/80 backdrop-blur-sm shadow-lg z-10 h-full flex flex-col">
                <div className="p-3 rounded-full bg-slate-800/80 border border-blue-500 mb-4 w-12 h-12 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-blue-100/70 flex-grow">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
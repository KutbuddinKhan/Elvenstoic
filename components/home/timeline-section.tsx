"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const timelineItems = [
  {
    id: 1,
    title: "Discover Your Cinematic Style",
    description:
      "Learn how to develop your unique cinematic style that will make your content instantly recognizable. We'll guide you through the process of finding your visual identity.",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    id: 2,
    title: "Master Advanced Editing Techniques",
    description:
      "Unlock professional editing techniques that will elevate your content quality. From color grading to seamless transitions, we cover everything you need to know.",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    id: 3,
    title: "Build Your Audience Strategy",
    description:
      "Develop a strategic approach to growing your audience across platforms. Learn how to create content that resonates and drives engagement.",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    id: 4,
    title: "Monetize Your Content",
    description:
      "Transform your passion into a sustainable business. Discover multiple revenue streams and learn how to package and sell your expertise.",
    image: "/placeholder.svg?height=600&width=400",
  },
]

export default function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([])
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Skip GSAP initialization during SSR
    if (typeof window === "undefined") return

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    })

    // Create individual animations for each timeline item
    timelineItems.forEach((_, index) => {
      const timelineItem = timelineRefs.current[index]
      const imageItem = imageRefs.current[index]

      if (timelineItem && imageItem) {
        // Pin the image while the corresponding text scrolls
        ScrollTrigger.create({
          trigger: timelineItem,
          start: "top center",
          end: "bottom center",
          toggleClass: { targets: imageItem, className: "active" },
          onEnter: () => {
            gsap.to(imageItem, { opacity: 1, y: 0, duration: 0.5 })
          },
          onLeave: () => {
            gsap.to(imageItem, { opacity: 0.3, y: 20, duration: 0.5 })
          },
          onEnterBack: () => {
            gsap.to(imageItem, { opacity: 1, y: 0, duration: 0.5 })
          },
          onLeaveBack: () => {
            gsap.to(imageItem, { opacity: 0.3, y: -20, duration: 0.5 })
          },
        })
      }
    })

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            Your Journey to <span className="gold-text">Cinematic Excellence</span>
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow our proven system to transform your content creation process
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative">
          {/* Timeline Line (visible on larger screens) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2 z-0"></div>

          {/* Timeline Content */}
          <div className="space-y-24 lg:space-y-32">
            {timelineItems.map((item, index) => (
              <div key={item.id} ref={(el) => { timelineRefs.current[index] = el; }} className="relative">
                {/* Timeline Dot (visible on larger screens) */}
                <div className="hidden lg:block absolute -left-6 lg:left-auto lg:right-0 top-0 w-4 h-4 rounded-full bg-primary transform lg:translate-x-1/2 z-10"></div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="lg:pr-12"
                >
                  <span className="inline-block text-sm font-medium text-primary mb-2">Step {item.id}</span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Images Column */}
          <div className="hidden lg:block relative">
            {timelineItems.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => { imageRefs.current[index] = el; }}
                className="absolute top-0 left-0 w-full opacity-0 transition-all duration-500"
                style={{
                  top: `${index * 33}%`,
                }}
              >
                <div className="rounded-lg overflow-hidden border shadow-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Images (visible only on smaller screens) */}
          <div className="lg:hidden space-y-8">
            {timelineItems.map((item) => (
              <motion.div
                key={`mobile-${item.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="rounded-lg overflow-hidden border shadow-lg"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

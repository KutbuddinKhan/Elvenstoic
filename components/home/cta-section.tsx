"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { gsap } from "gsap"

export default function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    // GSAP animation for the CTA section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 80%",
        toggleActions: "play none none none",
      },
    })

    tl.fromTo(".cta-title", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
      .fromTo(
        ".cta-description",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6",
      )
      .fromTo(
        ".cta-timer",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6",
      )
      .fromTo(".cta-button", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")

    // Countdown timer
    const countdownInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 }
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 }
        } else if (prevTime.hours > 0) {
          return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 }
        } else if (prevTime.days > 0) {
          return { ...prevTime, days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 }
        } else {
          clearInterval(countdownInterval)
          return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        }
      })
    }, 1000)

    return () => {
      clearInterval(countdownInterval)
      if (tl) tl.kill()
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="cta-title text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            Join <span className="gold-text">Cinematic Studio</span> Today
          </h2>

          <p className="cta-description text-xl text-muted-foreground">
            Get instant access to our complete system for creating viral, high-quality content that builds a brand
            people actually care about.
          </p>

          {/* Countdown Timer */}
          <div className="cta-timer">
            <p className="text-sm text-muted-foreground mb-3">Limited Time Offer Ends In:</p>
            <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-md mx-auto">
              <div className="bg-background p-2 md:p-4 rounded-lg">
                <div className="text-2xl md:text-4xl font-bold">{timeLeft.days}</div>
                <div className="text-xs text-muted-foreground">Days</div>
              </div>
              <div className="bg-background p-2 md:p-4 rounded-lg">
                <div className="text-2xl md:text-4xl font-bold">{timeLeft.hours}</div>
                <div className="text-xs text-muted-foreground">Hours</div>
              </div>
              <div className="bg-background p-2 md:p-4 rounded-lg">
                <div className="text-2xl md:text-4xl font-bold">{timeLeft.minutes}</div>
                <div className="text-xs text-muted-foreground">Minutes</div>
              </div>
              <div className="bg-background p-2 md:p-4 rounded-lg">
                <div className="text-2xl md:text-4xl font-bold">{timeLeft.seconds}</div>
                <div className="text-xs text-muted-foreground">Seconds</div>
              </div>
            </div>
          </div>

          {/* Price and CTA */}
          <div className="cta-button space-y-6">
            <div className="flex flex-col items-center">
              <div className="text-sm text-muted-foreground line-through">Regular Price: €197</div>
              <div className="text-3xl md:text-4xl font-bold">
                Special Price: <span className="gold-text">€97</span>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <a href="https://copecart.com/products/c6f1ba46/checkout" target="_blank">
                <Button size="lg" className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white font-bold px-8 py-6 border border-blue-700/50">
                  JOIN CINEMATIC STUDIO NOW - €127
                </Button>
              </a>
            </motion.div>

            <p className="text-sm text-muted-foreground">30-Day Money-Back Guarantee. No Questions Asked.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

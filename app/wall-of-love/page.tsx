"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import Masonry from "react-masonry-css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Heart, X, Star } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Array of fan comment images
const fanImages = Array.from({ length: 62 }, (_, i) => `/fan-comments/fan (${i + 1}).jpg`)

export default function FanWallPage() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [columns, setColumns] = useState(4)

  // Responsive column adjustment
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(1)
      } else if (window.innerWidth < 768) {
        setColumns(2)
      } else if (window.innerWidth < 1024) {
        setColumns(3)
      } else {
        setColumns(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // GSAP animations
  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // GSAP animation for the fan wall page
      const tl = gsap.timeline()

      tl.fromTo(".fanwall-title", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
        .fromTo(
          ".fanwall-subtitle",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6",
        )
        .fromTo(
          ".masonry-item",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.03,
          },
          "-=0.4",
        )
    }, sectionRef)

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="pt-16 bg-slate-950 relative overflow-hidden min-h-screen">
      {/* Professional Dark Background with Enhanced Gradient Elements */}
      <div className="absolute inset-0 bg-grid bg-noise opacity-5"></div>

      {/* More visible gradient spots with dark blue focus */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Top-right spot - larger, more visible */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"></div>

        {/* Bottom-left spot - dark blue dominant */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/40 rounded-full blur-3xl"></div>

        {/* Center-right accent */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-800/30 via-blue-600/20 to-purple-500/10 rounded-full blur-2xl"></div>

        {/* Bottom-right gold accent - subtle */}
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gradient-to-tl from-yellow-500/15 to-blue-700/20 rounded-full blur-3xl"></div>

        {/* Top-left accent - smaller but more defined */}
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-900/40 to-blue-600/20 rounded-full blur-xl"></div>
      </div>

      {/* Professional grid overlay for tech feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container relative z-10 px-4 md:px-6">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-900/30 border border-blue-800/50 backdrop-blur-sm px-4 py-1.5 text-sm mb-4 fanwall-title">
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            <span>Messages from 1m+ followers worldwide</span>
          </div>

          <h1 className="fanwall-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter uppercase">
            The <span className="text-gray-200 bg-clip-text bg-gradient-to-r from-gray-300 via-gray-50 to-gray-300 drop-shadow-[0_2px_2px_rgba(255,255,255,0.3)]">Fan</span> Wall
          </h1>
          <p className="fanwall-subtitle mt-6 text-xl md:text-2xl text-blue-100/70 max-w-3xl mx-auto">
            Real messages from our community showing the impact of cinematic content that resonates
          </p>
        </div>

        {/* Masonry Grid with Cinematic Styling */}
        <div className="max-w-7xl mx-auto pb-24">
          {/* Background effects for masonry section - matching CinematicStudioSection */}
          <div className="relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10 z-0 rounded-xl"></div>
            <div className="absolute inset-0 bg-noise opacity-5 z-0 rounded-xl"></div>
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl z-0"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-gold/20 rounded-full blur-3xl z-0"></div>

            {/* Masonry container with padding for background visibility */}
            <div className="relative z-10 p-6 bg-slate-900/40 backdrop-blur-sm rounded-xl border border-blue-900/30 shadow-lg shadow-blue-900/20">
              <Masonry breakpointCols={columns} className="flex w-auto -ml-4" columnClassName="pl-4 bg-clip-padding">
                {fanImages.map((src, index) => (
                  <div key={index} className="mb-4 masonry-item">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                      className="relative overflow-hidden cursor-pointer"
                      onClick={() => setSelectedImage(index)}
                    >
                      <div className="rounded-xl overflow-hidden p-2">
                        <div className="relative rounded-lg overflow-hidden">
                          <div className="relative w-full aspect-auto">
                            <Image
                              src={src || "/placeholder.svg"}
                              alt={`Fan comment ${index + 1}`}
                              width={500}
                              height={500}
                              className="w-full h-auto object-contain rounded-lg"
                              loading={index < 12 ? "eager" : "lazy"}
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-4 text-white">
                              <p className="font-medium">Fan Message #{index + 1}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </Masonry>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox for selected image */}
      <AnimatePresence>
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-xl overflow-hidden  p-2">
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src={fanImages[selectedImage] || "/placeholder.svg"}
                    alt={`Fan comment ${selectedImage + 1}`}
                    width={1200}
                    height={1200}
                    className="max-h-[80vh] w-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              <button
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(null)
                }}
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation buttons */}
              <div className="absolute left-0 right-0 bottom-4 flex justify-center gap-4">
                <button
                  className="bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage((prev) => (prev === null || prev === 0 ? fanImages.length - 1 : prev - 1))
                  }}
                >
                  ←
                </button>
                <button
                  className="bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage((prev) => (prev === null ? 0 : (prev === fanImages.length - 1 ? 0 : prev + 1)))
                  }}
                >
                  →
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Professional Gradient Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </section>
  )
}

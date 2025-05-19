"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasConsented = localStorage.getItem("cookieConsent")
    if (!hasConsented) {
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-6 md:p-8 bg-blue-950 border-t border-blue-800 shadow-lg overflow-hidden"
        >
          {/* Spotlights */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-0 left-1/4 w-60 h-60 bg-blue-800/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-gold/15 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-0 w-48 h-48 bg-blue-700/20 rounded-full blur-2xl"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
            <div className="text-sm text-center sm:text-left max-w-xl">
              <p className="text-white/90">
                We use cookies to enhance your experience on our website. By continuing to use this site, you agree to
                our use of cookies.
              </p>
              <p className="mt-2">
                <Button variant="link" className="text-sm text-blue-300 hover:underline p-0 h-auto" asChild>
                  <a href="/privacy" target="_blank" rel="noopener noreferrer">
                    Learn more
                  </a>
                </Button>
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="border-blue-500 text-white hover:bg-blue-800" onClick={handleDecline}>
                Decline
              </Button>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-500 rounded-md blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                <Button
                  onClick={handleAccept}
                  className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white font-bold px-6 py-2 border border-blue-700/50"
                >
                  Accept
                </Button>
              </motion.div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

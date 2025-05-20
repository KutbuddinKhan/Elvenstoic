"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import Logo from "@/components/layout/logo"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        navRef.current && 
        !navRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/90 backdrop-blur-md border-b" : "bg-transparent"
      )}
    >
      <div className="container px-2 sm:px-4 flex h-16 items-center justify-between">
        {/* Left aligned logo (especially on mobile) */}
        <div className="flex items-center justify-start">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-blue-800">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-blue-800">
            About
          </Link>
          <Link href="/collaborations" className="text-sm font-medium transition-colors hover:text-blue-800">
            Collaborations
          </Link>
          <Link href="/wall-of-love" className="text-sm font-medium transition-colors hover:text-blue-800">
            Wall of Love
          </Link>
          <Link href="/growth" className="text-sm font-medium transition-colors hover:text-blue-800">
            Growth
          </Link>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative group ml-4"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-500 rounded-md blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <a href="https://copecart.com/products/e41a84c4/checkout " target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white font-bold border border-blue-700/50"
              >
                Join Now
              </Button>
            </a>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={navRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b"
          >
            <div className="container py-4 space-y-4">
              <Link href="/" className="block text-sm font-medium hover:text-blue-800" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="block text-sm font-medium hover:text-blue-800" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link href="/collaborations" className="block text-sm font-medium hover:text-blue-800" onClick={() => setIsOpen(false)}>
                Collaborations
              </Link>
              <Link href="/wall-of-love" className="block text-sm font-medium hover:text-blue-800" onClick={() => setIsOpen(false)}>
                Wall of Love
              </Link>
              <Link href="/growth" className="block text-sm font-medium hover:text-blue-800" onClick={() => setIsOpen(false)}>
                Growth
              </Link>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-500 rounded-md blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                <a href="https://copecart.com/products/e41a84c4/checkout " target="_blank" rel="noopener noreferrer">
                  <Button
                    className="w-full relative bg-gradient-to-r from-blue-800 to-blue-600 text-white font-bold border border-blue-700/50"
                    onClick={() => setIsOpen(false)}
                  >
                    Join Now
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
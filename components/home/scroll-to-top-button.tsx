"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"
import { motion } from "framer-motion"

export default function ScrollToTopButton() {
    const [showScrollTop, setShowScrollTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <motion.div
            className="fixed bottom-8 right-8 z-50 group"
            initial={{ opacity: 0 }}
            animate={{ opacity: showScrollTop ? 1 : 0 }}
        >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <button
                onClick={scrollToTop}
                className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-full p-3 shadow-lg border border-blue-700/50"
            >
                <ChevronUp className="h-6 w-6" />
            </button>
        </motion.div>
    )
}

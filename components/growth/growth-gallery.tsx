"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, AnimatePresence, useTransform } from "framer-motion"
import { ChevronDown, ChevronUp, Trophy, X } from "lucide-react"
import { Button } from "../ui/button"
import ScrollToTopButton from "../home/scroll-to-top-button"

// Updated growth journey milestones in chronological order
const growthMilestones = [
    {
        id: 1,
        src: "/growth/3300 - 9.11.2023.JPG",
        alt: "First milestone - November 9, 2023",
        width: 858,
        height: 264,
        date: "9.11.2023",
        followers: "3,300",
        description: "Our first milestone! The community started to grow.",
    },
    {
        id: 2,
        src: "/growth/10400 - 20.11.2023.PNG",
        alt: "Growing fast - November 20, 2023",
        width: 1170,
        height: 2532,
        date: "20.11.2023",
        followers: "10,400",
        description: "Just 11 days later, we tripled our following. The momentum was building!",
    },
    {
        id: 3,
        src: "/growth/50000 - 10.12.2023.jpg",
        alt: "50k milestone - December 10, 2023",
        width: 1170,
        height: 585,
        date: "10.12.2023",
        followers: "50,000",
        description: "A huge milestone reached! 50,000 followers in just one month.",
    },
    {
        id: 4,
        src: "/growth/70000 - 6.1.2024.jpg",
        alt: "New Year growth - January 6, 2024",
        width: 1169,
        height: 597,
        date: "6.1.2024",
        followers: "70,000",
        description: "Starting the new year strong with 70k followers.",
    },
    {
        id: 5,
        src: "/growth/99200 - 14.4.2024.jpg",
        alt: "Almost 100k - April 14, 2024",
        width: 1170,
        height: 570,
        date: "14.4.2024",
        followers: "99,200",
        description: "So close to the 100k milestone! The community kept growing steadily.",
    },
    {
        id: 6,
        src: "/growth/184000 - 29.06.2024.PNG",
        alt: "Summer growth - June 29, 2024",
        width: 1170,
        height: 2532,
        date: "29.06.2024",
        followers: "184,000",
        description: "Summer brought explosive growth, nearly doubling our audience.",
    },
    {
        id: 7,
        src: "/growth/205000- 10.06.2024.jpg",
        alt: "Over 200k - June 10, 2024",
        width: 1169,
        height: 716,
        date: "10.06.2024",
        followers: "205,000",
        description: "Breaking the 200k barrier! A major achievement for our community.",
    },
    {
        id: 8,
        src: "/growth/307000 - 18.08.2024.jpg",
        alt: "300k milestone - August 18, 2024",
        width: 1169,
        height: 762,
        date: "18.08.2024",
        followers: "307,000",
        description: "The growth continued through summer, passing 300k followers.",
    },
    {
        id: 9,
        src: "/growth/500000 - 18.10.2024.jpg",
        alt: "Half million milestone - October 18, 2024",
        width: 1169,
        height: 664,
        date: "18.10.2024",
        followers: "500,000",
        description: "Half a million followers! A remarkable achievement in just one year.",
    },
    {
        id: 10,
        src: "/growth/800000 - 19.02.2025.PNG",
        alt: "Approaching 1M - February 19, 2025",
        width: 1206,
        height: 2622,
        date: "19.02.2025",
        followers: "800,000",
        description: "The community continued to grow rapidly, approaching the 1M mark.",
    },
    {
        id: 11,
        src: "/growth/900000 - 7.04.2025 .PNG",
        alt: "900k followers - April 7, 2025",
        width: 1206,
        height: 2622,
        date: "7.04.2025",
        followers: "900,000",
        description: "Just one step away from our biggest milestone.",
    },
    {
        id: 12,
        src: "/growth/1000000 - 12.05.2025.jpg",
        alt: "1 Million followers - May 12, 2025",
        width: 1206,
        height: 789,
        date: "12.05.2025",
        followers: "1,000,000",
        description: "One million followers! An incredible journey from zero to a million in less than two years.",
    },
]

// Progress indicator component
const ProgressIndicator = ({ currentProgress }: { currentProgress: number }) => {
    return (
        <div
            className="fixed left-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 z-50"
            style={{ width: `${currentProgress}%` }}
        />
    )
}

export default function GrowthJourney() {
    const [scrollProgress, setScrollProgress] = useState(0)
    const [selectedMilestone, setSelectedMilestone] = useState<number | null>(null)
    const { scrollYProgress } = useScroll()
    const containerRef = useRef<HTMLDivElement>(null)
    const timelineRef = useRef<HTMLDivElement>(null)

    // State to track if timeline section is in view
    const [timelineInView, setTimelineInView] = useState(false)

    // Ref for the timeline section to calculate the logo position
    const timelineSectionRef = useRef<HTMLDivElement>(null)

    // State to store timeline dimensions for accurate logo positioning
    const [timelineDimensions, setTimelineDimensions] = useState({
        top: 0,
        height: 0,
    })

    // Calculate the logo's position based on scroll
    const logoY = useTransform(
        scrollYProgress,
        [0, 1],
        [0, timelineDimensions.height || 1000]
    )

    useEffect(() => {
        return scrollYProgress.onChange((latest) => {
            setScrollProgress(latest * 100)
        })
    }, [scrollYProgress])

    // Effect to check if timeline is in view and update dimensions
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setTimelineInView(entry.isIntersecting)

                    if (entry.isIntersecting && timelineSectionRef.current) {
                        const rect = timelineSectionRef.current.getBoundingClientRect()
                        const scrollTop = window.pageYOffset || document.documentElement.scrollTop

                        setTimelineDimensions({
                            top: rect.top + scrollTop,
                            height: rect.height,
                        })
                    }
                })
            },
            { threshold: 0.1 }
        )

        if (timelineSectionRef.current) {
            observer.observe(timelineSectionRef.current)
        }

        // Update dimensions on resize
        const handleResize = () => {
            if (timelineSectionRef.current) {
                const rect = timelineSectionRef.current.getBoundingClientRect()
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop

                setTimelineDimensions({
                    top: rect.top + scrollTop,
                    height: rect.height,
                })
            }
        }

        window.addEventListener('resize', handleResize)

        return () => {
            if (timelineSectionRef.current) {
                observer.unobserve(timelineSectionRef.current)
            }
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const scrollToNextSection = () => {
        if (containerRef.current) {
            const timelineSection = document.getElementById("timeline-section")
            if (timelineSection) {
                timelineSection.scrollIntoView({ behavior: "smooth" })
            }
        }
    }

    return (
        <div className="relative" ref={containerRef}>
            {/* Progress Bar */}
            <ProgressIndicator currentProgress={scrollProgress} />

            <div className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Add the badge here */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-900/30 border border-blue-800/50 backdrop-blur-sm px-4 py-1.5 text-sm mb-4">
                        <Trophy  className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                        <span>Our journey from 0 to 1M+ followers</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white uppercase">
                        Our <span className="text-gradient">Growth</span> Journey
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100/70 mb-12 max-w-3xl mx-auto">
                        From zero to one million followers, follow our incredible path to success
                    </p>
                    <motion.div
                        className="flex justify-center mt-12 cursor-pointer"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        onClick={scrollToNextSection}
                    >
                        <ChevronDown className="w-10 h-10 text-blue-400" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Timeline Journey */}
            <div
                id="timeline-section"
                className="container mx-auto px-4 py-16 md:py-24"
                ref={timelineSectionRef}
            >
                {/* Timeline Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px 0px" }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                        The <span className="text-gradient">Milestones</span> That Shaped Us
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
                </motion.div>

                {/* Interactive Timeline */}
                <div className="relative" ref={timelineRef}>
                    {/* Vertical Timeline Line - hidden on mobile, showing on md and up */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-blue-500/50"></div>

                    {/* Mobile Timeline Line - showing on mobile, hidden on md and up */}
                    <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-blue-500/50"></div>

                    {/* Moving Logo on Timeline for Desktop */}
                    {timelineInView && (
                        <motion.div
                            className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-20"
                            style={{
                                top: logoY,
                                position: "absolute"
                            }}
                        >
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-1 shadow-lg shadow-blue-500/30 flex items-center justify-center">
                                <Image
                                    src="/logo/logo.png"
                                    alt="Company Logo"
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                            </div>
                        </motion.div>
                    )}

                    {/* Moving Logo on Timeline for Mobile */}
                    {timelineInView && (
                        <motion.div
                            className="md:hidden absolute left-4 transform -translate-x-1/2 z-20"
                            style={{
                                top: logoY,
                                position: "absolute"
                            }}
                        >
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-1 shadow-lg shadow-blue-500/30 flex items-center justify-center">
                                <Image
                                    src="/logo/logo.png"
                                    alt="Company Logo"
                                    width={28}
                                    height={28}
                                    className="rounded-full"
                                />
                            </div>
                        </motion.div>
                    )}

                    {/* Timeline Milestones */}
                    {growthMilestones.map((milestone, index) => {
                        const isEven = index % 2 === 0

                        return (
                            <motion.div
                                key={milestone.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                                viewport={{ once: true, margin: "-100px 0px" }}
                                className={`flex flex-col md:flex-row items-center mb-24 md:mb-32 relative ${isEven ? "" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Timeline Node - Desktop */}
                                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 z-10 shadow-lg shadow-blue-500/30"></div>

                                {/* Timeline Node - Mobile */}
                                <div className="md:hidden absolute left-4 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 z-10 shadow-lg shadow-blue-500/30"></div>

                                {/* Date Indicator - Desktop */}
                                <div
                                    className={`hidden md:block absolute left-1/2 transform ${isEven ? "translate-x-8" : "-translate-x-[calc(100%+32px)]"
                                        } top-0 bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/30`}
                                >
                                    <p className="text-sm font-medium text-blue-300">{milestone.date}</p>
                                </div>

                                {/* Date Indicator - Mobile */}
                                <div
                                // className={`md:hidden absolute left-14 top-0 bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/30`}
                                >
                                    {/* <p className="text-sm font-medium text-blue-300">{milestone.date}</p> */}
                                </div>

                                {/* Content Side - For desktop we follow the original layout */}
                                <div className={`w-full md:w-1/2 px-4 pl-16 md:pl-4 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"
                                    }`}>
                                    <div className="p-4">
                                        <h3 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                            {milestone.followers} <span className="text-2xl">followers</span>
                                        </h3>
                                        <p className="text-xl font-medium text-blue-300/80 mb-4 md:hidden">{milestone.date}</p>
                                        <div
                                            className={`h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mb-4 ${isEven ? "md:ml-auto" : ""
                                                }`}
                                        ></div>
                                        <p className="text-lg text-blue-100/70">{milestone.description}</p>
                                    </div>
                                </div>

                                {/* Image Side */}
                                <div className={`w-full md:w-1/2 px-4 mt-6 md:mt-0`}>
                                    <motion.div
                                        className="relative overflow-hidden rounded-lg shadow-2xl cursor-pointer"
                                        whileHover={{ scale: 1.02 }}
                                        onClick={() => setSelectedMilestone(index)}
                                    >
                                        <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-2 rounded-lg">
                                            <Image
                                                src={milestone.src || "/placeholder.svg"}
                                                alt={milestone.alt}
                                                width={milestone.width}
                                                height={milestone.height}
                                                className="w-full h-auto object-cover rounded-lg"
                                            />
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Celebration Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px 0px" }}
                    className="mt-24 md:mt-32 text-center max-w-4xl mx-auto bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-blue-900/30"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                        Thank You For Being Part Of Our <span className="text-gradient">Journey</span>!
                    </h2>
                    <p className="text-xl text-blue-100/70 mb-8">
                        We couldn't have reached 1 million followers without our amazing community. This is just the beginning of
                        our story together.
                    </p>
                    <div className="mt-12">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative group inline-block"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                            <a href="https://copecart.com/products/e41a84c4/checkout" target="_blank">

                                <Button
                                    size="lg"
                                    className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white font-bold border border-blue-700/50 rounded-full px-8 py-4 text-lg"
                                >
                                    Join us
                                </Button></a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Lightbox for selected milestone */}
            <AnimatePresence>
                {selectedMilestone !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedMilestone(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="relative max-w-5xl max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-blue/20 to-purple-500/20 p-2">
                                <div className="relative rounded-lg overflow-hidden">
                                    <Image
                                        src={growthMilestones[selectedMilestone].src || "/placeholder.svg"}
                                        alt={growthMilestones[selectedMilestone].alt}
                                        width={growthMilestones[selectedMilestone].width}
                                        height={growthMilestones[selectedMilestone].height}
                                        className="max-h-[80vh] w-auto object-contain rounded-lg"
                                    />
                                </div>
                            </div>

                            <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm p-4 rounded-lg">
                                <h3 className="text-xl font-bold text-white mb-1">
                                    {growthMilestones[selectedMilestone].followers} followers
                                </h3>
                                <p className="text-blue-300">{growthMilestones[selectedMilestone].date}</p>
                                <p className="text-white/80 mt-2">{growthMilestones[selectedMilestone].description}</p>
                            </div>

                            <button
                                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setSelectedMilestone(null)
                                }}
                            >
                                <X className="h-6 w-6" />
                            </button>

                            {/* Navigation buttons */}
                            <div className="absolute left-0 right-0 bottom-24 flex justify-center gap-4">
                                <button
                                    className="bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setSelectedMilestone((prev) =>
                                            prev === null || prev === 0 ? growthMilestones.length - 1 : prev - 1
                                        )
                                    }}
                                >
                                    <ChevronUp className="h-6 w-6" />
                                </button>
                                <button
                                    className="bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setSelectedMilestone((prev) =>
                                            prev === null || prev === growthMilestones.length - 1 ? 0 : prev + 1
                                        )
                                    }}
                                >
                                    <ChevronDown className="h-6 w-6" />
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Back to top button */}
            <ScrollToTopButton />
        </div>
    )
}
"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import Masonry from "react-masonry-css"
import Image from "next/image"

// Evolution images with their actual dimensions
const evolutionImages = [
    { id: 1, src: "/about/IMG_1412.jpg", alt: "Early Days", width: 1128, height: 498 },
    { id: 2, src: "/about/IMG_1523.jpg", alt: "First Breakthrough", width: 1138, height: 426 },
    { id: 3, src: "/about/IMG_1524.jpg", alt: "Going Viral", width: 1099, height: 414 },
    { id: 4, src: "/about/IMG_1985.jpg", alt: "Bigger Collabs", width: 1117, height: 665 },
    { id: 5, src: "/about/IMG_6299.jpg", alt: "Milestone Moment", width: 1104, height: 213 },
    { id: 6, src: "/about/IMG_9899.jpg", alt: "Current Day", width: 1018, height: 217 },
    { id: 7, src: "/about/IMG_9899.jpg", alt: "Future Vision", width: 1085, height: 338 },
]

export default function AboutPageClient() {
    const sectionRef = useRef(null)
    const [columns, setColumns] = useState(3)
    const [selectedImage, setSelectedImage] = useState<number | null>(null)

    // Responsive column adjustment
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setColumns(1)
            } else if (window.innerWidth < 1024) {
                setColumns(2)
            } else {
                setColumns(3)
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        // GSAP animation for the about page
        const tl = gsap.timeline()

        tl.fromTo(".about-title", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
            .fromTo(
                ".about-subtitle",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
                "-=0.6",
            )
            .fromTo(
                ".about-section",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    stagger: 0.2,
                },
                "-=0.4",
            )
            .fromTo(
                ".masonry-item",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: "power2.out" },
                "-=0.4",
            )

        return () => {
            tl.kill()
        }
    }, [])

    return (
        <div ref={sectionRef} className="pt-16 bg-slate-950 relative overflow-hidden min-h-screen">
            {/* Professional Dark Background with Enhanced Gradient Elements */}
            <div className="absolute inset-0 bg-grid bg-noise opacity-5"></div>

            {/* More visible gradient spots with dark blue focus */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                {/* Top-right spot - larger, more visible */}
                {/* <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"></div> */}

                {/* Bottom-left spot - dark blue dominant */}
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/40 rounded-full blur-3xl"></div>

                {/* Center-right accent */}
                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-800/30 via-blue-600/20 to-purple-500/10 rounded-full blur-2xl"></div>

                {/* Bottom-right gold accent - subtle */}
                {/* <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gradient-to-tl from-yellow-500/15 to-blue-700/20 rounded-full blur-3xl"></div> */}

                {/* Top-left accent - smaller but more defined */}
                <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-900/40 to-blue-600/20 rounded-full blur-xl"></div>
            </div>

            {/* Professional grid overlay for tech feel */}
            {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div> */}

            <div className="container relative z-10 px-4 md:px-6">
                {/* Hero Section */}
                <div className="flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-900/30 border border-blue-800/50 backdrop-blur-sm px-4 py-1.5 text-sm mb-4 about-title">
                        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                        <span>Trusted by 1m+ followers worldwide</span>
                    </div>

                    <h1 className="about-title text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold tracking-tighter uppercase">
                        The <span className="text-gradient">Elevenstoic</span> Story
                    </h1>

                    <p className="about-subtitle mt-3 text-xm md:text-xl text-blue-100/70 max-w-3xl mx-auto">
                        How we built a cinematic brand with over 1m+ followers and created a system anyone can follow
                    </p>
                </div>


                {/* Main Content with enhanced styling */}
                <div className="max-w-4xl mx-auto pb-24 space-y-16">
                    {/* Problem Expansion */}
                    <section className="about-section space-y-6 bg-slate-900/40 backdrop-blur-sm rounded-lg p-8 border border-blue-900/30 shadow-lg shadow-blue-900/20">
                        <h2 className="text-3xl font-bold tracking-tighter text-gradient">The Beginning</h2>
                        <div className="prose prose-lg dark:prose-invert max-w-none text-blue-100/90">
                            <p className="leading-relaxed mb-4 border-l-4 border-blue-600/50 pl-4 py-1">
                                When I first started, I made all the classic mistakes - <strong>obsessing over every tiny edit</strong>, trying to copy
                                other creators' styles, and getting frustrated when my content wouldn't go viral.
                            </p>
                            <p className="leading-relaxed mb-4">
                                Look, building an aesthetic brand and making money on Instagram isn't about posting hundreds of times or
                                even having millions of followers. <span className="text-blue-300">I've seen accounts with 100k+ followers struggling to make even $500
                                    a month.</span>
                            </p>
                            <p className="leading-relaxed mb-4 border-l-4 border-blue-600/50 pl-4 py-1">
                                Here's what I learned after building over 2 million followers across platforms: <strong>Real money and genuine
                                    impact come from developing a signature aesthetic</strong> that makes your content instantly recognizable, paired
                                with a message that resonates deeply.
                            </p>
                            <p className="leading-relaxed">
                                The <em>'Just One Life'</em> philosophy behind Elevenstoic isn't just a catchphrase—it's the driving force that
                                transformed my content from forgettable to unmissable. When you combine cinematic quality with
                                meaningful messaging, you create content that doesn't just get views—it builds communities.
                            </p>
                        </div>
                    </section>

                    {/* The Turning Point */}
                    <section className="about-section space-y-6 bg-slate-900/40 backdrop-blur-sm rounded-lg p-8 border border-blue-900/30 shadow-lg shadow-blue-900/20">
                        <h2 className="text-3xl font-bold tracking-tighter text-gradient">The Turning Point</h2>
                        <div className="prose prose-lg dark:prose-invert max-w-none text-blue-100/90">
                            <p className="leading-relaxed mb-4 border-l-4 border-blue-600/50 pl-4 py-1">
                                The real game-changer for me wasn't endless hours of editing—it was <strong>having the right resources and the
                                    right strategy</strong>. Once I had access to premium assets and a proven system, everything changed.
                            </p>
                            <p className="leading-relaxed mb-4">
                                My content started going viral consistently, not by accident but by design. I applied this same approach
                                across all my accounts, which led to collaborations with industry leaders like <span className="text-blue-300">Alex Hormozi, Chris
                                    Williamson, and Steven Bartlett</span>.
                            </p>
                        </div>

                        {/* Collaborations Grid with Gradient Border + Images */}
                        <div className="relative my-8 rounded-xl overflow-hidden">
                            {/* Background effects - matching the Evolution section */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10 z-0 rounded-xl"></div>
                            <div className="absolute inset-0 bg-noise opacity-5 z-0 rounded-xl"></div>
                            <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl z-0"></div>
                            <div className="absolute bottom-0 right-0 w-72 h-72 bg-gold/20 rounded-full blur-3xl z-0"></div>

                            {/* Grid content with inner styling */}
                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-slate-900/40 backdrop-blur-sm rounded-xl border border-blue-900/30 shadow-lg shadow-blue-900/20">
                                {[
                                    {
                                        name: "Alex Hormozi",
                                        image: "/about/alexHarmozi.jpg",
                                    },
                                    {
                                        name: "Chris Williamson",
                                        image: "/about/chrisWilliamson.jpg",
                                    },
                                    {
                                        name: "Steven Bartlett",
                                        image: "/about/stevenBartlett.jpg",
                                    },
                                ].map((person, index) => (
                                    <div
                                        key={index}
                                        className="overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-2 rounded-lg border border-blue-400/30 shadow-md"
                                    >
                                        <div className="aspect-square hover:scale-105 transition-transform duration-300 relative rounded-md overflow-hidden">
                                            <Image
                                                src={person.image || "/placeholder.svg"}
                                                alt={person.name}
                                                fill
                                                className="rounded-md object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-2 px-3">
                                                <p className="text-white font-medium text-sm">{person.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div className="prose prose-lg dark:prose-invert max-w-none text-blue-100/90">
                            <p className="leading-relaxed">
                                But here's what really matters: <strong>I've built a community that genuinely loves our content</strong>. Every day, my
                                DMs are flooded with messages from our followers.
                            </p>
                        </div>

                        {/* Evolution Images Masonry Grid with Cinematic Styling */}
                        <div className="mt-8 relative">
                            <h3 className="text-2xl font-bold mb-6 text-gradient">Our Growth Journey</h3>

                            {/* Background effects for masonry section - matching CinematicStudioSection */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10 z-0 rounded-xl"></div>
                            <div className="absolute inset-0 bg-noise opacity-5 z-0 rounded-xl"></div>
                            <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl z-0"></div>
                            <div className="absolute bottom-0 right-0 w-72 h-72 bg-gold/20 rounded-full blur-3xl z-0"></div>

                            {/* Masonry container with padding for background visibility */}
                            <div className="relative z-10 p-6 bg-slate-900/40 backdrop-blur-sm rounded-xl border border-blue-900/30 shadow-lg shadow-blue-900/20">
                                <Masonry breakpointCols={columns} className="flex w-auto -ml-4" columnClassName="pl-4 bg-clip-padding">
                                    {evolutionImages.map((image) => (
                                        <div key={image.id} className="mb-4 masonry-item">
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5 }}
                                                whileHover={{ scale: 1.02 }}
                                                className="relative overflow-hidden cursor-pointer"
                                                onClick={() => setSelectedImage(image.id)}
                                            >
                                                <div className="rounded-xl overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-2 border border-blue-400/30 shadow-md">
                                                    <div className="relative rounded-lg overflow-hidden">
                                                        <img
                                                            src={image.src || "/placeholder.svg"}
                                                            alt={image.alt}
                                                            width={image.width}
                                                            height={image.height}
                                                            className="w-full h-auto object-cover rounded-lg"
                                                        />
                                                        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-100 transition-opacity duration-300 flex items-end">
                                                            <div className="p-4 text-white">
                                                                <p className="font-medium">{image.alt}</p>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    ))}
                                </Masonry>
                            </div>
                        </div>

                        <div className="prose prose-lg dark:prose-invert max-w-none text-blue-100/90">
                            <p className="leading-relaxed border-l-4 border-blue-600/50 pl-4 py-1">
                                This isn't just about followers or likes—it's about <strong>building something people genuinely connect with</strong>.
                                Content that reminds them they have just one life to follow their dreams.
                            </p>
                        </div>
                    </section>

                    {/* The Solution */}
                    <section className="about-section space-y-6 bg-slate-900/40 backdrop-blur-sm rounded-lg p-8 border border-blue-900/30 shadow-lg shadow-blue-900/20">
                        <h2 className="text-3xl font-bold tracking-tighter text-gradient">The Solution</h2>
                        <div className="prose prose-lg dark:prose-invert max-w-none text-blue-100/90">
                            <p className="leading-relaxed mb-4">
                                If you're tired of posting content that gets ignored, or you want to build your Instagram account the
                                right way—following the guidance of someone who's done it—you've come to the right place.
                            </p>
                            <p className="leading-relaxed mb-4 bg-blue-900/20 px-4 py-3 rounded-md border-l-4 border-blue-500">
                                I've packaged all my strategies into a comprehensive program called <strong className="text-blue-300">Cinematic Studio</strong>. It's not just
                                another course—it's a complete system for creating cinematic content that stands out, builds connection,
                                and converts to real opportunities.
                            </p>
                            <p className="leading-relaxed text-xl font-medium text-center text-blue-200">Let me show you exactly what's inside Cinematic Studio:</p>
                        </div>
                    </section>

                    {/* The Offer Components with Enhanced Styling */}
                    <section className="about-section space-y-8">
                        <h2 className="text-3xl font-bold tracking-tighter text-gradient text-center">
                            What's Inside Cinematic Studio
                        </h2>

                        <div className="space-y-8">
                            {[
                                {

                                    title: "Brand Identity Mastery",
                                    content: [
                                        "Develop a signature style that makes your content instantly recognizable in your niche. You'll receive ready-to-use cinematic fonts, expert tips to build an aesthetic brand, and our complete guide to standing out and turning creative vision into a community that resonates with your unique message.",
                                        "The difference? This isn't just about looking good—it's about creating visual consistency that builds recognition and trust over time.",
                                        "And to ensure you have every tool you need...",
                                    ],
                                },
                                {

                                    title: "The Viral Editing Lab",
                                    content: [
                                        "Step-by-step tutorials on how we create our cinematic reels—the exact style that allowed us to hit over 700 million views across platforms.",
                                        "You'll learn our complete process for both PremierePro AND CapCut, broken down into simple steps anyone can follow—even if you've never edited before. Plus, you'll discover how we create our aesthetic 3D posts that generate massive engagement.",
                                        "What makes this different? I'm showing you the perfect workflow and how to use resources to enhance your time efficiency, allowing you to create scroll-stopping content in a fraction of the time it normally takes.",
                                        "But the editing techniques are just the beginning...",
                                    ]
                                },
                                {
                                    title: "Access The Premium Clip Vault",
                                    content: [
                                        "Transform basic videos into cinematic masterpieces with our vault of 700+ ready-to-use clips in both vertical AND horizontal formats. You'll also get our complete guide to finding ANY clip you need, an exclusive music bank optimized for virality, professional SFX sound effects, and everything perfectly organized by category.",
                                        "Why this matters: Finding the right cinematic footage typically costs hundreds of dollars and hours of searching. This vault gives you instant access to professional-quality clips you can use immediately.",
                                        "To take your content and message to the next level...",
                                    ]
                                },
                                {
                                    title: "The Ultimate Cinematic Toolkit",
                                    content: [
                                        "Get immediate access to professional film mattes and borders, cinematic overlays with perfect grain, drag-and-drop caption animations, and additional tools we use daily to create scroll-stopping content.",
                                        "These aren't generic templates—they're the exact resources we use at Elevenstoic to create content that embodies our 'Just One Life' philosophy while maintaining professional quality.",
                                        "Here's where it gets even better...",
                                    ],
                                },
                                {
                                    title: "The Creator Monetization Playbook",
                                    content: [
                                        "I personally walk you through the 5 best ways to monetize your cinematic content:",
                                        "<ul><li>Building a newsletter/email list that converts followers into customers</li><li>Creating digital products your audience actually wants</li><li>Implementing advanced affiliate marketing strategies for passive income</li><li>Offering high-ticket consulting & services based on your expertise</li><li>Attracting lucrative ads & sponsored posts from brands and other creators in your niche</li></ul>",
                                        "The key difference: These are the exact methods we've used to convert cinematic content into sustainable revenue streams.",
                                    ],
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="gradient-border rounded-lg p-[2px] bg-gradient-to-r from-blue-700 via-blue-500 to-purple-500 shadow-lg shadow-blue-900/30"
                                >
                                    <div className="bg-slate-900/90 backdrop-blur-sm rounded-lg p-6 h-full">
                                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                            <span className="inline-flex items-center justify-center bg-blue-600 rounded-full h-6 w-6 text-white">
                                                ✓
                                            </span>
                                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                                {item.title}
                                            </span>
                                        </h3>
                                        <div className="prose prose-lg dark:prose-invert max-w-none text-blue-100/90">
                                            {item.content.map((paragraph, i) =>
                                                paragraph.startsWith("<ul>") ? (
                                                    <div key={i} className="bg-blue-900/10 p-4 rounded-md border-l-4 border-blue-500/50" dangerouslySetInnerHTML={{ __html: paragraph }} />
                                                ) : (
                                                    <p key={i} className="leading-relaxed mb-4 last:mb-0">{paragraph}</p>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Versatility and Application */}
                    <section className="about-section space-y-6 bg-slate-900/40 backdrop-blur-sm rounded-lg p-8 border border-blue-900/30 shadow-lg shadow-blue-900/20">
                        <h2 className="text-3xl font-bold tracking-tighter text-gradient">Works For Any Niche</h2>
                        <div className="prose prose-lg dark:prose-invert max-w-none text-blue-100/90">
                            <p className="leading-relaxed mb-4 bg-blue-900/20 px-4 py-3 rounded-md">
                                What makes Cinematic Studio truly powerful is its <strong>versatility</strong>. These principles work whether you're in
                                fitness, business, personal development, lifestyle, or even highly specialized niches.
                            </p>
                            <p className="leading-relaxed mb-4">
                                Why? Because the fundamentals of viral cinematic editing are universal. The same techniques that make a
                                Hollywood movie captivating are what make your Instagram content impossible to scroll past.
                            </p>
                            <p className="leading-relaxed border-l-4 border-blue-600/50 pl-4 py-1">
                                What matters isn't your specific subject matter—it's <strong>how you present your message through cinematic
                                    quality</strong> that resonates with your audience. That's what transforms ordinary content into an extraordinary
                                brand.
                            </p>
                        </div>
                    </section>

                    {/* Urgency and Exclusivity */}
                    <section className="about-section space-y-6 bg-slate-900/40 backdrop-blur-sm rounded-lg p-8 border border-blue-900/30 shadow-lg shadow-blue-900/20">
                        <h2 className="text-3xl font-bold tracking-tighter text-gradient">Limited Time Opportunity</h2>
                        <div className="prose prose-lg dark:prose-invert max-w-none text-blue-100/90">
                            <p className="leading-relaxed mb-4">
                                The best part? You don't need to spend years collecting resources or testing what works. I've personally
                                spent thousands of hours doing all the heavy lifting for you. Everything you need to create
                                scroll-stopping content is included in one comprehensive package.
                            </p>
                            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-4 rounded-md border border-blue-500/30 my-6">
                                <p className="leading-relaxed mb-0 text-blue-200">
                                    <strong>🔥 Act Fast:</strong> As our community grows and more success stories emerge, the
                                    investment to join will increase. The creators who join today will secure the most favorable pricing
                                    we'll ever offer.
                                </p>
                            </div>
                            <p className="leading-relaxed">
                                This isn't artificial scarcity—it's simple economics. As demand increases, so will the investment
                                required to join.
                            </p>
                        </div>
                    </section>

                    {/* Purpose and Philosophy */}
                    <section className="about-section space-y-6 bg-slate-900/40 backdrop-blur-sm rounded-lg p-8 border border-blue-900/30 shadow-lg shadow-blue-900/20">
                        <h2 className="text-3xl font-bold tracking-tighter text-gradient">Our Philosophy</h2>
                        <div className="prose prose-lg dark:prose-invert max-w-none text-blue-100/90">
                            <p className="leading-relaxed mb-4 border-l-4 border-blue-600/50 pl-4 py-1">
                                At Elevenstoic, our <strong>'Just One Life'</strong> philosophy guides everything we create. We believe in content that
                                doesn't just look cinematic but carries meaning that resonates on a deeper level.
                            </p>
                            <p className="leading-relaxed mb-4">
                                Cinematic Studio isn't just about making your content look better—it's about helping you create content
                                that matters. Content that reminds people they have just one life to pursue what truly fulfills them.
                            </p>
                            <p className="leading-relaxed">
                                When you join today, you're not just getting systems and resources—you're joining a community of
                                creators who believe in the power of cinematic content to deliver messages that matter.
                            </p>
                        </div>
                    </section>

                    {/* Decision Time and Call to Action with Enhanced Styling */}
                    <section className="about-section space-y-8">
                        <div className="gradient-border rounded-lg p-[2px] bg-gradient-to-r from-blue-700 via-blue-500 to-purple-500 shadow-lg shadow-blue-900/30">
                            <div className="bg-slate-900/90 backdrop-blur-md rounded-lg p-8 border border-blue-800/30">
                                <h2 className="text-3xl font-bold tracking-tighter text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                                    Your Cinematic Journey Begins Today
                                </h2>
                                <div className="prose prose-lg dark:prose-invert max-w-none text-center text-blue-100/90">
                                    <p className="leading-relaxed mb-4">
                                        The question now isn't whether Cinematic Studio can transform your content—it's whether you're ready
                                        to implement the system that's already working for creators across all social media platforms.
                                    </p>
                                    <div className="bg-blue-900/20 p-4 rounded-lg my-6 border-t border-b border-blue-500/30">
                                        <p className="leading-relaxed mb-0 text-xl text-blue-200">
                                            Think about where your content could be 30 days from now. Imagine the recognition, the
                                            opportunities, and the impact you could create with a proven system guiding every post.
                                        </p>
                                    </div>
                                    <p className="leading-relaxed mb-4">
                                        If you're ready to finally build an aesthetic & cinematic Instagram brand that people actually love
                                        and that generates consistent income through beautiful, meaningful content—click below to join the
                                        Cinematic Studio today, and let's build your dream brand together.
                                    </p>
                                    <p className="leading-relaxed text-yellow-300 font-medium">
                                        Remember, this founding member pricing is available for a limited time only. Secure your access now
                                        before the investment increases.
                                    </p>
                                </div>
                                <div className="flex justify-center mt-8">
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="relative group">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-500 rounded-md blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                                        <a href="https://copecart.com/products/e41a84c4/checkout" target="_blank">
                                            <Button size="lg" className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white font-bold px-8 py-6 border border-blue-700/50">
                                                JOIN CINEMATIC STUDIO NOW - €147
                                            </Button>
                                        </a>
                                    </motion.div>
                                </div>
                                <div className="flex items-center justify-center gap-4 mt-6">
                                    <div className="flex items-center gap-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                                        ))}
                                    </div>
                                    <p className="text-center text-sm text-blue-100/70">Lifetime Access. No Hidden Fees.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Lightbox for selected image */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="relative max-w-5xl max-h-[90vh]"
                        >
                            {evolutionImages
                                .filter((img) => img.id === selectedImage)
                                .map((image) => (
                                    <div key={image.id} className="relative">
                                        <div className="rounded-xl overflow-hidden bg-gradient-to-br from-blue/20 to-gold/20 p-2">
                                            <img
                                                src={image.src || "/placeholder.svg"}
                                                alt={image.alt}
                                                width={image.width}
                                                height={image.height}
                                                className="max-h-[80vh] w-auto object-contain rounded-lg"
                                            />
                                        </div>
                                        <button
                                            className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                setSelectedImage(null)
                                            }}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                        </motion.div>
                    </div>
                )}

                {/* Professional Gradient Overlay at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
            </div>
        </div>
    )
}

"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import Image from "next/image"
import { Play, FileText, Package, Film } from "lucide-react"

const resources = [
  {
    id: 1,
    title: "Cinematic Studio",
    description:
      "Our flagship program for serious creators. Learn advanced editing, storytelling, and monetization strategies.",
    image: "/placeholder.svg?height=400&width=600",
    price: "€97",
    category: "courses",
    icon: <Film className="h-5 w-5" />,
  },
  {
    id: 2,
    title: "Editing Blueprint",
    description: "Master the fundamentals of cinematic editing with our step-by-step blueprint.",
    image: "/placeholder.svg?height=400&width=600",
    price: "€47",
    category: "courses",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    id: 3,
    title: "Creator Pack Vol. 1",
    description: "Premium LUTs, transitions, sound effects, and templates to elevate your content.",
    image: "/placeholder.svg?height=400&width=600",
    price: "€29",
    category: "packs",
    icon: <Package className="h-5 w-5" />,
  },
  {
    id: 4,
    title: "Viral Content Formula",
    description: "Discover the exact formula we use to create content that consistently goes viral.",
    image: "/placeholder.svg?height=400&width=600",
    price: "Free",
    category: "tutorials",
    icon: <Play className="h-5 w-5" />,
  },
  {
    id: 5,
    title: "Advanced Color Grading",
    description: "Learn professional color grading techniques to give your footage a cinematic look.",
    image: "/placeholder.svg?height=400&width=600",
    price: "Free",
    category: "tutorials",
    icon: <Play className="h-5 w-5" />,
  },
  {
    id: 6,
    title: "Creator Pack Vol. 2",
    description: "Our latest collection of premium assets for content creators.",
    image: "/placeholder.svg?height=400&width=600",
    price: "€39",
    category: "packs",
    icon: <Package className="h-5 w-5" />,
  },
]

export default function ResourcesSection() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredResources =
    activeTab === "all" ? resources : resources.filter((resource) => resource.category === activeTab)

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            Resources for <span className="gold-text">Content Creators</span>
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create viral, high-quality content
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 w-full max-w-md">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="packs">Packs</TabsTrigger>
              <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="cinematic-card"
                >
                  <Card className="overflow-hidden h-full border bg-card">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={resource.image || "/placeholder.svg"}
                        alt={resource.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <span className="inline-flex items-center rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                          {resource.icon}
                          <span className="ml-1">
                            {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                          </span>
                        </span>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                      <p className="text-muted-foreground">{resource.description}</p>
                    </CardContent>

                    <CardFooter className="p-6 pt-0 flex items-center justify-between">
                      <span className="font-bold text-lg">{resource.price}</span>
                      <Button size="sm">{resource.price === "Free" ? "Watch Now" : "Get Access"}</Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            View All Resources
          </Button>
        </div>
      </div>
    </section>
  )
}

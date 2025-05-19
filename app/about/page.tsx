import AboutPageClient from "@/components/about/AboutPageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - Elevenstoic",
  description: "The story behind Elevenstoic and our cinematic content creation journey.",
}

export default function AboutPage() {
  return <AboutPageClient />
}
 
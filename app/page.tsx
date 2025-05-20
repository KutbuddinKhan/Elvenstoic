"use client"

import HeroSection from "@/components/home/hero-section"
import InstructorSection from "@/components/home/instructor-section"
import PricingSection from "@/components/home/pricing-section"
import FaqSection from "@/components/home/faq-section"
import WhyFailSection from "@/components/home/why-fail-section"
import WhoForSection from "@/components/home/who-for-section"
import WhyDifferentSection from "@/components/home/why-different-section"
import TheFutureContent from "@/components/home/the-future-of-cinematic-createion"
import ReviewSection from "@/components/home/review-section"
import CinematicStudioSection from "@/components/home/cinematic-studio"
import ScrollToTopButton from "@/components/home/scroll-to-top-button"
import ModulesSection from "@/components/home/module-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ReviewSection /> 


      {/* <WhatYouWillLearn /> */}

      {/* <FeaturesSection /> */}

      {/* merge both */}
      {/* <SoundEffectsSection />
      <CinematicToolkitSection /> */}
      <ModulesSection />

      <WhyDifferentSection />
      <InstructorSection />

      <CinematicStudioSection />

      <PricingSection />
      <WhyFailSection />
      <WhoForSection />

      <TheFutureContent />
      <FaqSection />

      <ScrollToTopButton />
    </>
  )
}

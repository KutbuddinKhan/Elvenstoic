import GrowthJourney from "@/components/growth/growth-gallery"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Growth Journey - Elevenstoic",
  description: "Follow our incredible journey from zero to one million followers at Elevenstoic.",
}

export default function GrowthPage() {
  return (
    <div className="pt-16 bg-slate-950 relative overflow-hidden min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5 pointer-events-none"></div>

      {/* Gradient Spots */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-800/30 via-blue-600/20 to-purple-500/10 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gradient-to-tl from-gold/15 to-blue-700/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-900/40 to-blue-600/20 rounded-full blur-xl pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10">
        <GrowthJourney />
      </div>
    </div>
  )
}

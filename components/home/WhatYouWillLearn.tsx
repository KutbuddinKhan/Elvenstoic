"use client"

export default function WhatYouWillLearn() {
  const episodes = [
    { ep: "EP01", title: "Secrets of Documentary Style Video Editing" },
    { ep: "EP02", title: "Digital vs Physical Assets and the Storytelling" },
    { ep: "EP03", title: "Digital vs Physical Sound and the Storytelling" },
    { ep: "EP04", title: "Cuts and the Conspiracy" },
    { ep: "EP05", title: "Wave, Words and the Montage" },
    { ep: "EP06", title: "The Documentary Style Montage" },
    { ep: "EP07", title: "Touch of Journalism to Colours & the Contrast" },
  ]

  return (
    <div className="relative overflow-hidden py-24 text-blue-100">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5 z-0" />
      <div className="absolute inset-0 bg-noise opacity-5 z-0" />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl z-0" />

      <section className="relative z-10 container max-w-4xl mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-12">
          What You Will <span className="text-yellow-400">Learn</span><span className="text-yellow-400">?</span>
        </h2>

        <div className="space-y-6 border-l border-yellow-500/30">
          {episodes.map(({ ep, title }, index) => (
            <div
              key={index}
              className="flex items-start space-x-6 pl-6 py-4 border-t border-yellow-500/20"
            >
              <div className="text-yellow-400 font-bold text-lg w-16">{ep}</div>
              <div className="text-white text-base font-mono tracking-wide uppercase">
                {title}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

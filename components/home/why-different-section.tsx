"use client";

import { Check, Star, Zap } from "lucide-react";

export default function WhyDifferentSection() {
  return (
    <section className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5 z-0"></div>
      <div className="absolute inset-0 bg-noise opacity-5 z-0"></div>
      {/* <div className="absolute top-0 right-0 w-96 h-96 bg-blue-700/30 rounded-full blur-3xl"></div> */}
      <div className="absolute top-2/3 right-1/3 w-96 h-96 bg-purple-800/30 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-900/20 border border-blue-700/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300 tracking-wide">
              THE CINEMATIC STUDIO
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase text-white mb-5">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Cinematic Studio
            </span>{" "}
            Works
          </h2>

          <p className="text-lg md:text-xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed">
            Most courses give you{" "}
            <strong className="text-blue-300">theories</strong>. Cinematic
            Studio gives you{" "}
            <strong className="text-purple-300">the full system</strong> +
            high-end resources to grow faster.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {/* Feature 1 */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 backdrop-blur-sm">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
              <Check className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Complete System
            </h3>
            <p className="text-blue-100/80">
              End-to-end framework covering content creation, growth, and
              monetization - not just piecemeal tactics.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 backdrop-blur-sm">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Premium Resources
            </h3>
            <p className="text-blue-100/80">
              Get all the high-end templates, clips, and tools we use - worth
              thousands if purchased separately.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 backdrop-blur-sm">
            <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Proven Results
            </h3>
            <p className="text-blue-100/80">
              The exact system that helped grow 1M+ followers and generate
              five-figure months consistently.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden backdrop-blur-sm">
          <div className="grid grid-cols-3 border-b border-slate-800">
            <div className="p-4 font-medium text-blue-100/80"></div>
            <div className="p-4 text-center font-bold text-blue-300">
              Other Courses
            </div>
            <div className="p-4 text-center font-bold text-purple-300">
              Cinematic Studio
            </div>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-3 border-b border-slate-800 hover:bg-slate-900/70 transition-colors">
            <div className="p-4 text-blue-100/80">Complete System</div>
            <div className="p-4 text-center text-blue-100/60">❌</div>
            <div className="p-4 text-center text-purple-400">✅</div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-3 border-b border-slate-800 hover:bg-slate-900/70 transition-colors">
            <div className="p-4 text-blue-100/80">Premium Resources</div>
            <div className="p-4 text-center text-blue-100/60">❌</div>
            <div className="p-4 text-center text-purple-400">✅</div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-3 border-b border-slate-800 hover:bg-slate-900/70 transition-colors">
            <div className="p-4 text-blue-100/80">Step-by-Step Tutorials</div>
            <div className="p-4 text-center text-blue-100/60">Partial</div>
            <div className="p-4 text-center text-purple-400">✅ Complete</div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-3 border-b border-slate-800 hover:bg-slate-900/70 transition-colors">
            <div className="p-4 text-blue-100/80">Monetization Strategies</div>
            <div className="p-4 text-center text-blue-100/60">Basic</div>
            <div className="p-4 text-center text-purple-400">✅ Advanced</div>
          </div>

          {/* Row 5 */}
          <div className="grid grid-cols-3 hover:bg-slate-900/70 transition-colors">
            <div className="p-4 text-blue-100/80">Community Support</div>
            <div className="p-4 text-center text-blue-100/60">Limited</div>
            <div className="p-4 text-center text-purple-400">✅ Active</div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import {
  ChevronRight,
  Play,
  Download,
  FileText,
  Film,
  Music,
  Volume2,
  Code,
  Palette,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

// Define module type tags with icons
const ModuleTag = ({
  type,
}: {
  type: "CORE" | "BONUS" | "LIMITED TIME BONUS";
}) => {
  const colors = {
    CORE: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    BONUS: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    "LIMITED TIME BONUS": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full ${colors[type]} border px-4 py-2 text-sm font-medium mb-4`}
    >
      {type}
      <ChevronRight className="w-4 h-4" />
    </div>
  );
};

// Define asset type badges with proper icons
const AssetBadge = ({
  type,
}: {
  type:
  | "VIDEO"
  | "PDF"
  | "TEMPLATES"
  | "CLIPS"
  | "TOOLKIT"
  | "AI PROMPTS"
  | "MUSIC"
  | "SFX";
}) => {
  const icons = {
    VIDEO: <Play className="w-4 h-4" />,
    PDF: <FileText className="w-4 h-4" />,
    TEMPLATES: <Download className="w-4 h-4" />,
    CLIPS: <Film className="w-4 h-4" />,
    TOOLKIT: <Code className="w-4 h-4" />,
    "AI PROMPTS": <span className="text-xs">🤖</span>,
    MUSIC: <Music className="w-4 h-4" />,
    SFX: <Volume2 className="w-4 h-4" />,
  };

  const colors = {
    VIDEO: "bg-red-500/10 text-red-400",
    PDF: "bg-blue-500/10 text-blue-400",
    TEMPLATES: "bg-green-500/10 text-green-400",
    CLIPS: "bg-purple-500/10 text-purple-400",
    TOOLKIT: "bg-yellow-500/10 text-yellow-400",
    "AI PROMPTS": "bg-teal-500/10 text-teal-400",
    MUSIC: "bg-pink-500/10 text-pink-400",
    SFX: "bg-orange-500/10 text-orange-400",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 ${colors[type]} rounded-full px-3 py-2 text-xs font-medium`}
    >
      {icons[type]}
      {type}
    </span>
  );
};

export default function ModulesSection() {
  const modules = [
    {
      id: 1,
      type: "CORE",
      title: "BRAND IDENTITY MASTERY",
      description:
        "Develop a signature style that makes your content instantly recognizable. Build a unique aesthetic that attracts followers and creates a memorable brand.",
      image: "/images/brand-identity-master.png",
      features: [
        "Ready-to-use cinematic font collection",
        "Step-by-step guide to creating a distinctive visual identity",
        "Color palette strategies that reinforce your brand message",
        "Techniques to maintain brand identity across all content",
        "Framework for building a brand that resonates with your personality",
      ],
      assets: ["VIDEO", "PDF", "TEMPLATES"],
    },
    {
      id: 2,
      type: "CORE",
      title: "VIRAL EDITING LAB",
      description:
        "Step-by-step tutorials on creating cinematic content that stops the scroll. Transform basic footage into share-worthy content.",
      image: "/images/viral-editing-lab.png",
      features: [
        "Complete editing tutorials for both Premiere Pro and CapCut",
        "Master short-form videos AND aesthetic static posts",
        "Find viral-worthy content ideas in any niche",
        "Our proven process for creating aesthetic posts",
      ],
      assets: ["VIDEO", "PDF", "TEMPLATES"],
    },
    {
      id: 3,
      type: "CORE",
      title: "PREMIUM CLIP VAULT",
      description:
        "Transform ordinary videos into cinematic masterpieces with our extensive collection of high-quality footage. Never struggle to find the perfect clip again.",
      image: "/images/premium-clip-vault.png",
      features: [
        "700+ ready-to-use cinematic clips",
        "Both horizontal AND vertical formats included",
        "Perfectly organized by category and theme",
        "Complete guide to finding any clip you need",
        "Constantly updated with fresh content",
      ],
      assets: ["VIDEO", "CLIPS"],
    },
    {
      id: 4,
      type: "CORE",
      title: "CINEMATIC TOOLKIT",
      description:
        "The secrets behind our viral content. These resources will give your posts that Hollywood quality everyone's trying to copy - without the complex editing.",
      image: "/images/cinematic-toolkit.png",
      features: [
        "Film burn transitions",
        "Cinematic overlays with perfect grain",
        "SFX sound effects library",
        "Caption animation presets",
        "Curated Music Bank",
      ],
      assets: ["TOOLKIT", "MUSIC", "SFX"],
    },
    {
      id: 5,
      type: "CORE",
      title: "CREATOR MONETIZATION PLAYBOOK",
      description:
        "Transform your cinematic content into multiple income streams. Learn our proven strategies for turning aesthetic content and engaged followers into consistent revenue opportunities.",
      image: "/images/creator-monetization-playbook.png",
      features: [
        "Build and monetize a newsletter that turns followers into customers",
        "Create digital products your audience wants",
        "Generate passive income through affiliate marketing",
        "Attract brand deals and sponsorships",
        "Offer premium services based on your expertise",
      ],
      assets: ["VIDEO", "PDF", "TEMPLATES"],
    },
    {
      id: 6,
      type: "CORE",
      title: "AI ASSISTANT BLUEPRINT",
      description:
        "Unlock the true power of AI. Learn how to delegate smarter, create faster, and think clearer – with ChatGPT as your always-on creative co-pilot.",
      image: "/images/AI Assistant Blueprint Cover.png",
      features: [
        "How I use ChatGPT as a daily assistant for brand, strategy & execution",
        "GPT-powered Idea & Writer Machine for nonstop creative output",
        "How to build your own personal 'AI brain' to speed up every task",
        "Step-by-step setup for using GPT as a business partner (incl. example workflows)",
        "Bonus: My personal 'AI Stack' of tools & plugins",
      ],
      assets: ["VIDEO", "PDF", "AI PROMPTS"],
    },
    {
      id: 7,
      type: "LIMITED TIME BONUS",
      title: "THE 90-DAY SCALE SYSTEM",
      description:
        "Your roadmap to grow, delegate & operate like a real content business. Unlock the exact strategy I'd follow if I had to start from scratch today – broken down into a clear 90-day action plan.",
      image: "/images/Bonus Thumbnail.png",
      features: [
        "In-Depth Strategy Presentation (video-based)",
        "The 90-Day PDF Blueprint",
        "My Delegation Blueprint (how I outsourced editing & scaled output)",
      ],
      assets: ["VIDEO", "PDF", "TEMPLATES"],
      note: "This bonus is included for a limited time - and only available inside this version of Cinematic Studio.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-noise opacity-5 z-0"></div>

      {/* Color Spotlights */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl z-0"></div>
      {/* <div className="absolute top-0 right-0 w-72 h-72 bg-blue/20 rounded-full blur-3xl z-0"></div> */}
      {/* <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl z-0"></div> */}
      <div className="absolute top-2/3 right-1/3 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl z-0"></div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-900/20 border border-blue-700/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <Palette className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300 tracking-wide">
              CINEMATIC STUDIO MODULES
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase text-white mb-5">
            Everything You Get{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Inside
            </span>
          </h2>

          <p className="text-lg md:text-xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed">
            The full blueprint I used to grow 1M+ followers and scale to five
            figures/month — broken down into plug-and-play modules to build,
            edit & monetize your brand.
          </p>
        </div>

        {/* Core Modules Section */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center relative inline-block">
            <span className="relative z-10 px-4">
              CORE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                MODULES
              </span>
            </span>
            <span className="absolute bottom-1 left-0 w-full h-2 bg-blue-500/20 rounded-full -z-0"></span>
          </h3>

          <div className="space-y-16 md:space-y-24">
            {modules
              .filter((m) => m.type === "CORE")
              .map((module, index) => (
                <div
                  key={module.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 0 ? "lg:[&>div:first-child]:order-2" : ""
                    }`}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-800 shadow-xl">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={module.image}
                        alt={module.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex flex-wrap gap-2">
                        {module.assets.map((asset) => (
                          <AssetBadge key={asset} type={asset as any} />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <ModuleTag type={module.type as any} />

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
                      {module.title.split(" ").map((word, i, arr) =>
                        i === arr.length - 1 ? (
                          <span
                            key={i}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
                          >
                            {" "}
                            {word}
                          </span>
                        ) : (
                          <span key={i}> {word}</span>
                        )
                      )}
                    </h2>

                    <p className="text-lg text-blue-100/80 mb-6 leading-relaxed">
                      {module.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {module.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-blue-100/80"
                        >
                          <span className="inline-flex items-center justify-center w-5 h-5 bg-blue-500/10 rounded-full mt-0.5 flex-shrink-0">
                            <ChevronRight className="w-3 h-3 text-blue-400" />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Bonus Modules Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center relative inline-block">
            <span className="relative z-10 px-4">
              BONUS{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-amber-500">
                MODULES
              </span>
            </span>
            <span className="absolute bottom-1 left-0 w-full h-2 bg-purple-500/20 rounded-full -z-0"></span>
          </h3>

          <div className="space-y-16 md:space-y-24">
            {modules
              .filter((m) => m.type !== "CORE")
              .map((module) => (
                <div
                  key={module.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-800 shadow-xl">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={module.image}
                        alt={module.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex flex-wrap gap-2">
                        {module.assets.map((asset) => (
                          <AssetBadge key={asset} type={asset as any} />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <ModuleTag type={module.type as any} />

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
                      {module.title.split(" ").map((word, i, arr) =>
                        i === arr.length - 1 ? (
                          <span
                            key={i}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-amber-500"
                          >
                            {" "}
                            {word}
                          </span>
                        ) : (
                          <span key={i}> {word}</span>
                        )
                      )}
                    </h2>

                    <p className="text-lg text-blue-100/80 mb-6 leading-relaxed">
                      {module.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {module.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-blue-100/80"
                        >
                          <span className="inline-flex items-center justify-center w-5 h-5 bg-purple-500/10 rounded-full mt-0.5 flex-shrink-0">
                            <ChevronRight className="w-3 h-3 text-purple-400" />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {"note" in module && (
                      <div className="text-sm font-medium bg-amber-500/10 border border-amber-500/20 rounded-lg px-4 py-3 text-amber-300">
                        {module.note}
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Final CTA */}
        {/* <div className="text-center pt-16 md:pt-20">
          <div className="inline-flex items-center gap-2 bg-blue-900/20 border border-blue-700/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium text-blue-300 tracking-wide">
              WHAT'S NEXT?
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Transform Your Content?
          </h3>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto mb-8">
            Join 500+ creators who've already transformed their content with
            Cinematic Studio.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-lg">
            Get Instant Access →
          </button>
        </div> */}

        <div className="text-center pt-16 md:pt-20">
          <div className="inline-flex items-center gap-2 bg-blue-900/20 border border-blue-700/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium text-blue-300 tracking-wide">
              WHAT'S NEXT?
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Transform Your Content?
          </h3>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto mb-8">
            Join 500+ creators who've already transformed their content with
            Cinematic Studio.
          </p>

          {/* Updated Button with Glowing Effect */}
          <div className="flex justify-center mt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-500 rounded-md blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <a
                href="https://copecart.com/products/e41a84c4/checkout"
                target="_blank"
              >
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white font-bold px-8 py-6 border border-blue-700/50"
                >
                   Get Instant Access →
                </Button>
              </a>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

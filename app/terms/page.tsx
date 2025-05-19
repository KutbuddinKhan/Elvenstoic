import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms & Conditions - Elevenstoic",
  description: "Terms and conditions for using Elevenstoic's website and services.",
}

export default function TermsPage() {
  return (
    <div className="relative overflow-hidden py-24 bg-slate-950 text-blue-100 min-h-[calc(100vh-64px)]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 z-0" />
      {/* <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl z-0 animate-pulse" /> */}
      {/* <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/40 rounded-full blur-3xl z-0 animate-pulse delay-150" /> */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-800/20 rounded-full blur-3xl z-0" />
      {/* <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl z-0" /> */}

      {/* Page Content */}
      <main className="relative z-10 container px-4 md:px-6 max-w-4xl mx-auto">
        <section className="space-y-12">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Terms of Service
            </h1>
            <div className="mt-4 h-1 w-24 bg-gradient-to-r from-blue-500/50 to-transparent rounded-full" />
          </header>

          <div className="space-y-10 text-blue-200/90 leading-relaxed">
            <article className="space-y-4">
              <p>
                By accessing and purchasing from this website, you agree to the following terms:
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-semibold text-blue-300 bg-gradient-to-r from-blue-400/30 to-transparent w-fit px-2 py-1 rounded-lg">
                Operator Information
              </h2>
              <p>
                This website is operated by <strong>Wealth Club Richard Brunsch</strong>, registered in Germany.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-semibold text-blue-300 bg-gradient-to-r from-blue-400/30 to-transparent w-fit px-2 py-1 rounded-lg">
                Products
              </h2>
              <p>
                We sell digital information products, mainly educational resources and templates.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-semibold text-blue-300 bg-gradient-to-r from-blue-400/30 to-transparent w-fit px-2 py-1 rounded-lg">
                Refund Policy
              </h2>
              <p>
                Once a digital product has been delivered (via download or access link), it is considered consumed and is non-refundable.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-semibold text-blue-300 bg-gradient-to-r from-blue-400/30 to-transparent w-fit px-2 py-1 rounded-lg">
                Usage Restrictions
              </h2>
              <p>
                You are not allowed to redistribute, resell, or share the contents without written permission.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-semibold text-blue-300 bg-gradient-to-r from-blue-400/30 to-transparent w-fit px-2 py-1 rounded-lg">
                Updates to Terms
              </h2>
              <p>
                We reserve the right to update these terms at any time.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-semibold text-blue-300 bg-gradient-to-r from-blue-400/30 to-transparent w-fit px-2 py-1 rounded-lg">
                Governing Law
              </h2>
              <p>
                The governing law is the law of the Federal Republic of Germany.
              </p>
            </article>

            <article className="pt-8 border-t border-blue-900/50 space-y-4">
              <h2 className="text-2xl font-semibold text-blue-300">Contact</h2>
              <p>If you have any issues with your order, please contact us at:</p>
              <Link
                href="mailto:value@betterselfmax.com"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-4 decoration-blue-400/30 hover:decoration-blue-300/50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
                </svg>
                value@betterselfmax.com
              </Link>
            </article>
          </div>
        </section>
      </main>
    </div>
  )
}
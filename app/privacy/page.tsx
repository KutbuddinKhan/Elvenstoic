import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy - Elevenstoic",
  description: "Privacy policy detailing how Elevenstoic collects and uses your data.",
}

export default function PrivacyPage() {
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
              Privacy Policy (GDPR)
            </h1>
            <div className="mt-4 h-1 w-24 bg-gradient-to-r from-blue-500/50 to-transparent rounded-full" />
          </header>

          <p className="text-lg leading-relaxed text-blue-200/90">
            We are committed to protecting your data in line with the General Data Protection Regulation (GDPR).
          </p>

          <div className="space-y-10">
            <article className="space-y-4">
              <h2 className="text-2xl font-semibold text-blue-300 bg-gradient-to-r from-blue-400/30 to-transparent w-fit px-2 py-1 rounded-lg">
                What We Collect
              </h2>
              <ul className="list-disc list-outside space-y-3 ml-6 marker:text-blue-400/60">
                <li className="pl-2">Name, Email, Payment method</li>
                <li className="pl-2">Technical data (IP, browser, usage behavior)</li>
              </ul>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-semibold text-blue-300 bg-gradient-to-r from-blue-400/30 to-transparent w-fit px-2 py-1 rounded-lg">
                How We Use It
              </h2>
              <ul className="list-disc list-outside space-y-3 ml-6 marker:text-blue-400/60">
                <li className="pl-2">To deliver your purchase</li>
                <li className="pl-2">To provide customer support</li>
                <li className="pl-2">To improve our website (analytics)</li>
              </ul>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-semibold text-blue-300 bg-gradient-to-r from-blue-400/30 to-transparent w-fit px-2 py-1 rounded-lg">
                Third-Party Tools
              </h2>
              <ul className="list-disc list-outside space-y-3 ml-6 marker:text-blue-400/60">
                <li className="pl-2">
                  <Link 
                    href="https://stripe.com/privacy" 
                    className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-4 decoration-blue-400/30 hover:decoration-blue-300/50"
                    target="_blank"
                  >
                    Stripe
                  </Link> (payment processing)
                </li>
                <li className="pl-2">
                  <Link
                    href="https://www.framer.com/privacy/"
                    className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-4 decoration-blue-400/30 hover:decoration-blue-300/50"
                    target="_blank"
                  >
                    Framer
                  </Link> (website hosting)
                </li>
                <li className="pl-2">Email marketing tools (for opt-in users only)</li>
              </ul>
            </article>

            <article className="pt-8 border-t border-blue-900/50 space-y-4">
              <h2 className="text-2xl font-semibold text-blue-300 bg-gradient-to-r from-blue-400/30 to-transparent w-fit px-2 py-1 rounded-lg">
                Your Rights
              </h2>
              <p className="leading-relaxed">
                You can request access, correction, or deletion of your personal data at any time by emailing us:
              </p>
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
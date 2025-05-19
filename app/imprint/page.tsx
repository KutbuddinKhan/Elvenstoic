import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Imprint - Elevenstoic",
  description: "Legal information about Elevenstoic.",
};

export default function ImprintPage() {
  return (
    <div className="relative overflow-hidden py-24 text-blue-100 min-h-[calc(100vh-64px)]">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 z-0" />
      <div className="absolute inset-0 bg-noise opacity-10 z-0" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl z-0 animate-pulse" />
      {/* <div className="absolute bottom-0 right-0 w-72 h-72 bg-gold/20 rounded-full blur-3xl z-0 animate-pulse delay-300" /> */}

      {/* Content container */}
      <main className="relative z-10 container px-4 md:px-6 max-w-4xl mx-auto">
        <section className="space-y-8">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Imprint / Legal Notice
            </h1>
            <div className="mt-4 h-1 w-24 bg-gradient-to-r from-blue-500/50 to-transparent rounded-full" />
          </header>

          <div className="space-y-8 text-blue-200/90 leading-relaxed">
            <article className="space-y-4">
              <h2 className="text-xl font-semibold text-blue-300 bg-gradient-to-r from-blue-400/30 to-transparent w-fit px-2 py-1 rounded-lg">
                Legal Disclosure (Impressum)
              </h2>
              <address className="not-italic space-y-1">
                <p className="font-medium">Wealth Club Richard Brunsch</p>
                <p>Binswangersteig 32A</p>
                <p>Germany</p>
              </address>
            </article>

            <article className="space-y-4">
              <h2 className="text-lg font-semibold text-blue-300 bg-gradient-to-r from-blue-400/30 to-transparent w-fit px-2 py-1 rounded-lg">
                Contact Information
              </h2>
              <div className="space-y-2">
                <p>
                  <strong className="font-medium">Owner:</strong> Richard Brunsch
                </p>
                <p>
                  <strong className="font-medium">Email:</strong>{" "}
                  <Link
                    href="mailto:value@betterselfmax.com"
                    className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-4 decoration-blue-400/30 hover:decoration-blue-300/50"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
                    </svg>
                    value@betterselfmax.com
                  </Link>
                </p>
              </div>
            </article>

            <article className="pt-6 border-t border-blue-900/50">
              <p className="text-sm text-blue-200/70">
                <strong className="font-medium">VAT ID:</strong> VAT exempt under 
                German small business regulation (§19 UStG)
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
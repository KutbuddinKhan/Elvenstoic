import Link from "next/link";
import { Instagram, Youtube, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800 bg-slate-950 text-slate-300">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/5 via-slate-950 to-slate-950" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="container relative py-16 md:py-20 z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
          {/* Brand Info */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Image
                src="/brand-profile-pic/Elevenstoic.JPG"
                alt="Elevenstoic Logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full border border-slate-700"
              />
              <h2 className="text-lg font-semibold text-white">Elevenstoic</h2>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Create viral, high-quality cinematic content with our proven
              system.
            </p>
            <div className="flex gap-4 pt-2">
              <Link
                href="https://www.instagram.com/elevenstoic/"
                className="transition hover:text-blue-400 hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:value@betterselfmax.com"
                className="transition hover:text-blue-400 hover:-translate-y-0.5"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Pages Navigation */}
          <div>
            <h3 className="text-base font-semibold text-white mb-5">Pages</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/collaborations", label: "Collaborations" },
                { href: "/wall-of-love", label: "Wall of Love" },
                { href: "/growth", label: "Growth" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h3 className="text-base font-semibold text-white mb-5">Legal</h3>
            <ul className="space-y-3">
              {[
                { href: "/terms", label: "Terms & Conditions" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/imprint", label: "Imprint / Legal Notice" },
                { href: "/refund", label: "Refund Policy" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold text-white mb-5">Contact</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a
                  href="mailto:value@betterselfmax.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  value@betterselfmax.com
                </a>
              </li>
              <li>
                <a
                  href="https://elevenstoic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  elevenstoic.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Attribution */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Elevenstoic. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 mt-2">
            Website designed & developed by{" "}
            <a
              href="https://www.strawhatdevs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              StrawhatDevs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

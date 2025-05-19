import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"
import CookieConsent from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Elevenstoic - Build A Brand People Actually Care About",
  description:
    "The exact system behind Elevenstoic's 1m+ followers - now in your hands. Create cinematic content that builds a brand people care about.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elevenstoic.com",
    title: "Elevenstoic - Build A Brand People Actually Care About",
    description:
      "The exact system behind Elevenstoic's 1m+ followers - now in your hands. Create cinematic content that builds a brand people care about.",
    siteName: "Elevenstoic",
  },
  generator: "Strawhat devs"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}

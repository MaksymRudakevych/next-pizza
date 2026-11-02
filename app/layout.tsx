import { Geist, Geist_Mono, Manrope, Roboto_Slab } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const robotoSlabHeading = Roboto_Slab({
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto-slab",
})

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})
import type { Metadata } from "next"
import Header from "@/components/shared/Header"

export const metadata: Metadata = {
  title: "Pizza Wave",
  description: "Свіжа піца з доставкою",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        manrope.variable,
        robotoSlabHeading.variable
      )}
    >
      <body>
        <ThemeProvider>
          <main className="min-h-screen">
            <Header />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

import type React from "react"
import "@/app/globals.css"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

export const metadata = {
  title: "Shakeel Ahamad | Senior PHP Laravel Developer | Backend Engineer ",
  description: "Frontend Engineer & Full Stack Developer specializing in React, Next.js, Node.js, PostgreSQL and modern web technologies. 2.5+ years building enterprise-grade applications.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}

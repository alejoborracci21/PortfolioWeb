import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { NoiseBackground } from "@/components/background"
import { DarkNavbar } from "@/components/dark-navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Mi portfolio personal",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={inter.className}>
        <NoiseBackground />
        
        <DarkNavbar />
        
        {children}
        
        <div className="vignette" />
      </body>
    </html>
  )
}

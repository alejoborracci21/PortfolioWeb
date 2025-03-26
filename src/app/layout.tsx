import { Lilita_One } from "next/font/google"
import "./globals.css"
import { NoiseBackground } from "@/components/background"
import { DarkNavbar } from "@/components/dark-navbar"

// Importar la fuente Lilita One
const lilitaOne = Lilita_One({
  subsets: ["latin"],
  weight: "400",  // Puedes ajustar el peso si es necesario
})

export const metadata = {
  title: "Alejo Borracci",
  description: "Mi portfolio personal",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={lilitaOne.className}> {/* Aplicar la clase de la fuente */}
        <NoiseBackground />
        
        <DarkNavbar />
        
        {children}
        
        <div className="vignette" />
      </body>
    </html>
  )
}

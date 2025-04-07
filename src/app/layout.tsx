import "./globals.css";
import { NoiseBackground } from "@/components/background";
import { DarkNavbar } from "@/components/dark-navbar";

export const metadata = {
  title: "Alejo Borracci",
  description: "Mi portfolio personal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body>
        <NoiseBackground />
        <DarkNavbar />
        <div id="transition-container">{children}</div>
        <div className="vignette" />
      </body>
    </html>
  );
}
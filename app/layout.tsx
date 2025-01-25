import "./globals.css"
import { Inter } from "next/font/google"
import Favicon from "@/components/Favicon"
import type { Viewport } from "next"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  themeColor: "#00FFFF",
  colorScheme: "dark",
}

export const metadata = {
  title: "Aviral Kaintura - Portfolio",
  description: "Cybersecurity and AI enthusiast, Computer Science student",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Favicon />
      </head>
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>{children}</body>
    </html>
  )
}


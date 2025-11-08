import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "GASTROTOUR 2025 - Experiencia Gastronómica Vegana | Buenos Aires",
  description: "Únete a una experiencia culinaria exclusiva que celebra la innovación y excelencia de la cocina vegana contemporánea. 10 de Noviembre en Gordo Vegano, Buenos Aires.",
  keywords: ["gastrotour", "gastronomía vegana", "buenos aires", "cocina vegana", "evento gastronómico", "gordo vegano", "experiencia culinaria"],
  authors: [{ name: "GASTROTOUR" }],
  creator: "GASTROTOUR",
  publisher: "GASTROTOUR",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "GASTROTOUR 2025 - Experiencia Gastronómica Vegana",
    description: "Evento culinario exclusivo que celebra la innovación de la cocina vegana contemporánea en Buenos Aires. 10 de Noviembre en Gordo Vegano.",
    url: '/',
    siteName: 'GASTROTOUR 2025',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'GASTROTOUR 2025 - Experiencia Gastronómica Vegana',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "GASTROTOUR 2025 - Experiencia Gastronómica Vegana",
    description: "Evento culinario exclusivo en Buenos Aires. 10 de Noviembre en Gordo Vegano.",
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

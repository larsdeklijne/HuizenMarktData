import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Huizen Markt Data',
  description: 'Huizen Markt Data: Alle data over de huizenmarkt op één plek.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar></Navbar>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

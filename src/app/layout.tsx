import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '../styles/custom.css';
import "./globals.css";
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Website Padukuhan Sedayu',
  description: 'Profil Padukuhan Sedayu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

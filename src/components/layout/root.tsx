import * as React from 'react'
import { Sora as FontSans } from 'next/font/google'

type Props = {
  children: React.ReactNode 
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'fallback',
  weight: ['300', '400', '500', '600', '700', '800']
})

export default function RootLayout({children}: Props) {
  return (
    <main className={fontSans.className}>
      <h1>Dinoshop</h1>
      {children}
    </main>
  )
}
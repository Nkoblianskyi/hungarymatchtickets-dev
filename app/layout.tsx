import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'HungaryMatchTickets – Jegyárak összehasonlítása',
  description:
    'Hasonlítsd össze a sportrendezvények jegyárait Magyarországon és Európában. Nem értékesítünk jegyeket – csak megmutatjuk, hol a legkedvezőbb az ár.',
  metadataBase: new URL('https://hungarymatchtickets.com'),
  openGraph: {
    title: 'HungaryMatchTickets – Jegyárak összehasonlítása',
    description:
      'Hasonlítsd össze a sportrendezvények jegyárait Magyarországon és Európában.',
    url: 'https://hungarymatchtickets.com',
    siteName: 'HungaryMatchTickets',
    locale: 'hu_HU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu" className={inter.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}

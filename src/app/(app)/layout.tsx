import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import './globals.css'

import cfg from '@/config'

const inter = Inter({ subsets: ['latin'] })

export const runtime = 'edge'

export const metadata: Metadata = {
  title: cfg.title,
  description: cfg.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

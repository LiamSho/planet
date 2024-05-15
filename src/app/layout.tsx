import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import "@/styles/index.css"

import cfg from '@/config'
import { Providers } from '@/components/providers/providers'

const inter = Inter({ subsets: ['latin'] })

export const runtime = 'edge'

export const metadata: Metadata = {
  title: cfg.meta.title,
  description: cfg.meta.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <Providers>
          <div className="relative h-full max-h-screen overflow-auto p-4 font-sans">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}

import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import '@/styles/index.css'

import { Terminal } from 'lucide-react'

import { Providers } from '@/components/providers/providers'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import cfg from '@/config'

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
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>ATTENTION</AlertTitle>
              <AlertDescription>🚧 本站仍在开发中</AlertDescription>
            </Alert>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}

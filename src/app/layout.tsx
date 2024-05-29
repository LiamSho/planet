import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import '@/styles/index.css'

import { PublicEnvScript } from 'next-runtime-env'

import { ErrorBoundary } from '@/components/common/boundary'
import { DevAlert } from '@/components/dev'
import { Providers } from '@/components/providers'
import cfg from '@/config'
import { FCC } from '@/types'

const inter = Inter({ subsets: ['latin'] })

export const runtime = 'edge'

export const metadata: Metadata = cfg.meta

const RootLayout: FCC = ({ children }) => {
  return (
    <html lang="zh" suppressHydrationWarning>
      <head>
        <PublicEnvScript />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <Providers>
            <div className="relative h-full max-h-screen overflow-auto font-sans">
              <DevAlert />
              {children}
            </div>
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  )
}

export default RootLayout

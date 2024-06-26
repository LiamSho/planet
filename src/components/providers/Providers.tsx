import { ThemeProvider } from 'next-themes'

import { FCC } from '@/types'
import { ClerkProvider } from '@clerk/nextjs'

import { SWRProvider } from './swr-provider'

export const Providers: FCC = ({ children }) => {
  return (
    <>
      <ClerkProvider>
        <ThemeProvider>
          <SWRProvider>{children}</SWRProvider>
        </ThemeProvider>
      </ClerkProvider>
    </>
  )
}

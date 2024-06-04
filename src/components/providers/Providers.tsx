import { ThemeProvider } from 'next-themes'

import { FCC } from '@/types'

import { SWRProvider } from './swr-provider'

export const Providers: FCC = ({ children }) => {
  return (
    <>
      <ThemeProvider>
        <SWRProvider>{children}</SWRProvider>
      </ThemeProvider>
    </>
  )
}

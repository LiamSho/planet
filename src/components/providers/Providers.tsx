import { ThemeProvider } from 'next-themes'

import { FCC } from '@/types'

export const Providers: FCC = ({ children }) => {
  return (
    <>
      <ThemeProvider
        attribute="data-theme"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  )
}

'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { FCC } from '@/types'

export const ThemeProvider: FCC = ({ children }) => {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  )
}

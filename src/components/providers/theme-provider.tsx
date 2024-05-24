'use client'

import * as React from 'react'
import { FC } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

export const ThemeProvider: FC<{ children: React.ReactNode }> = ({
  children,
  ...props
}: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

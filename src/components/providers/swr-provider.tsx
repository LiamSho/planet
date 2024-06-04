'use client'

import { SWRConfig } from 'swr'

import { DefaultFetcher } from '@/lib/req'
import { FCC } from '@/types'

export const SWRProvider: FCC = ({ children }) => {
  return <SWRConfig value={{ fetcher: DefaultFetcher }}>{children}</SWRConfig>
}

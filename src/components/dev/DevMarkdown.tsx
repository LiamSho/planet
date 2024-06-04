'use client'

import { FC } from 'react'
import useSWR from 'swr'

import { RespDevMarkdown } from '@/types'

import { ComponentLoading } from '../layout/loading'
import { Markdown } from '../ui/markdown'

export const DevMarkdown: FC = () => {
  const { data, error, isLoading } =
    useSWR<RespDevMarkdown>('/api/dev/markdown')

  if (error) {
    return <div>Error</div>
  }

  if (isLoading) {
    return (
      <ComponentLoading
        size="lg"
        type="dots"
        className="min-h-[80vh] w-full flex-col"
        before={
          <>
            <p className="text-3xl font-semibold">LOADING</p>
          </>
        }
      />
    )
  }

  return <Markdown value={data!.markdown} />
}

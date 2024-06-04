import { FC } from 'react'
import useSWR from 'swr'

import { RespDevMarkdown } from '@/types'

import { Markdown } from '../ui/markdown'

export const DevMarkdown: FC = () => {
  const { data, error, isLoading } =
    useSWR<RespDevMarkdown>('/api/dev/markdown')

  if (error) {
    return <div>Error</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return <Markdown value={data!.markdown} />
}

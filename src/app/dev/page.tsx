'use client'

import { FC } from 'react'

import { Button } from '@/components/ui/button'

export default function Dev() {
  return (
    <div>
      <DevPageSelector />
    </div>
  )
}

const DevPageSelector: FC = () => {
  return (
    <div className="flex items-center justify-center">
      <Button>
        <a href="/dev/markdown">Markdown</a>
      </Button>
    </div>
  )
}

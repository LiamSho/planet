import { FC } from 'react'

import { cn } from '@/lib/utils'

export const SkeletonTextLoading: FC<{ text: string }> = ({ text }) => {
  const lines = text.split('\n').map((line) => {
    const element = document.createElement('span')
    element.style.visibility = 'hidden'
    element.style.whiteSpace = 'pre'
    element.textContent = line
    document.body.appendChild(element)
    const lengthInPixels = element.offsetWidth
    document.body.removeChild(element)
    return lengthInPixels
  })

  return (
    <div className="space-y-2">
      {lines.map((line, index) => (
        <div key={index} className={cn('skeleton h-4', `w-[${line}px]`)}></div>
      ))}
    </div>
  )
}

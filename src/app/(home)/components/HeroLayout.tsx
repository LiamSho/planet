import { FC, ReactNode } from 'react'

import { HeroContent } from '@/components/layout/container'
import { cn } from '@/lib/utils'

export const HeroLayout: FC<{
  children: [ReactNode, ReactNode]
  className?: string
  leftClassName?: string
  rightClassName?: string
}> = ({ children, className, leftClassName, rightClassName }) => {
  return (
    <HeroContent className={cn('flex-col-reverse lg:flex-row', className)}>
      {children.slice(0, 2).map((child, i) => {
        return (
          <div
            key={i}
            className={cn(
              'flex w-full flex-col items-center justify-center lg:h-auto lg:w-1/2',
              i === 0 ? leftClassName : rightClassName,
            )}
          >
            <div className="relative max-w-full lg:max-w-2xl">{child}</div>
          </div>
        )
      })}
    </HeroContent>
  )
}

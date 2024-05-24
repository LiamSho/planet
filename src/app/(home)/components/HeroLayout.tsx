import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

export const HeroLayout = ({
  children,
  className,
  leftClassName,
  rightClassName,
}: {
  children: [ReactNode, ReactNode]
  className?: string
  leftClassName?: string
  rightClassName?: string
}) => {
  return (
    <div
      className={cn(
        'hero-content relative mx-auto size-full min-w-0 flex-col-reverse lg:flex-row',
        className,
      )}
    >
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
    </div>
  )
}

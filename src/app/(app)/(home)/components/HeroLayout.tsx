import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

const HeroLayout = ({
  children,
  className,
  leftClassName,
  rightClassName,
}: {
  children: [ReactNode, ReactNode] | [ReactNode, ReactNode, ReactNode]
  className?: string
  leftClassName?: string
  rightClassName?: string
}) => {
  return (
    <div
      className={cn(
        'relative mx-auto block size-full min-w-0 max-w-[1800px] flex-col flex-wrap items-center lg:flex lg:flex-row',
        className,
      )}
    >
      {children.slice(0, 2).map((child, i) => {
        return (
          <div
            key={i}
            className={cn(
              'center flex w-full flex-col lg:h-auto lg:w-1/2',
              i === 0 ? leftClassName : rightClassName,
            )}
          >
            <div className="relative max-w-full lg:max-w-2xl">{child}</div>
          </div>
        )
      })}

      {children[2]}
    </div>
  )
}

export default HeroLayout

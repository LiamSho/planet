import { FC } from 'react'

import { cn } from '@/lib/utils'

import { DivProps } from './types'

export const ArticleContainer: FC<DivProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <>
      <div
        className={cn(
          'mx-auto my-8 flex min-h-screen w-auto max-w-[800px] items-center justify-center rounded-lg py-8 shadow-lg',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </>
  )
}

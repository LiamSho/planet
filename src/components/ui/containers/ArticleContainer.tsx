import { FC } from 'react'

import { cn } from '@/lib/utils'
import { HTMLElementProps } from '@/types'

export const ArticleContainer: FC<HTMLElementProps<'div'>> = ({
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

import { FC, ReactNode } from 'react'

import { cn } from '@/lib/utils'

export const ComponentLoading: FC<{
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  type?: 'dots' | 'spinner' | 'infinity' | 'ring'
  before?: ReactNode
  after?: ReactNode
}> = ({ className, size, type, before, after }) => {
  const loadingSize = size ? `loading-${size}` : 'loading-md'
  const loadingType = type ? `loading-${type}` : 'loading-dots'
  return (
    <div className={cn('flex items-center justify-center', className)}>
      {before}
      <span className={cn('loading', loadingType, loadingSize)} />
      {after}
    </div>
  )
}

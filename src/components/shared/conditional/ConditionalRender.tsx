import { ReactNode } from 'react'

import { FCC } from '@/types'

export const ConditionalRender: FCC<{
  fallback?: ReactNode
  status: boolean
}> = ({ children, fallback, status }) => {
  if (status) {
    return <>{children}</>
  }

  if (fallback) {
    return <>{fallback}</>
  }
}

'use client'

import { FC } from 'react'
import { ErrorBoundary as EB, FallbackProps } from 'react-error-boundary'

import { FCC } from '@/types'

export const ErrorBoundary: FCC = ({ children }) => {
  return (
    <EB
      FallbackComponent={ErrorFallback}
      onError={(e) => {
        console.error(e)
      }}
    >
      {children}
    </EB>
  )
}

const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  const tryAgain = () => {
    resetErrorBoundary()
  }

  return (
    <div>
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error}</pre>
      <button onClick={tryAgain}>Try again</button>
    </div>
  )
}

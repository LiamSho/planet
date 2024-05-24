'use client'

import { usePathname } from 'next/navigation'

import { Alert, AlertDescription, AlertTitle } from '../ui/alert'

export const DevAlert = () => {
  const pathname = usePathname()
  return (
    <>
      {!pathname.startsWith('/dev') && (
        <Alert>
          <AlertTitle>🚧 ATTENTION</AlertTitle>
          <AlertDescription>本站仍在开发中</AlertDescription>
        </Alert>
      )}
    </>
  )
}

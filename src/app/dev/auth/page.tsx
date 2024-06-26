'use client'

import { useEffect, useState } from 'react'

import { useAuth } from '@clerk/nextjs'

export default function DevAuthPage() {
  const { getToken, userId, sessionId } = useAuth()

  const [token, setToken] = useState('')

  useEffect(() => {
    const f = async () => {
      const t = await getToken()
      if (t === null) {
        setToken('NULL')
      } else {
        setToken(t)
      }
    }

    f()
  }, [getToken])

  return (
    <>
      <h1>Dev Auth Page</h1>
      <p>userId: {userId}</p>
      <p>sessionId: {sessionId}</p>
      <p>token: {token}</p>
    </>
  )
}

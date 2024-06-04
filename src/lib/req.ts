import { env } from 'next-runtime-env'

export const DefaultFetcher = async (input: string) => {
  const baseURL = env('NEXT_PUBLIC_API_URL') || 'http://localhost:7565'
  const url = `${baseURL}${input}`

  const res = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
    },
  })

  return await res.json()
}

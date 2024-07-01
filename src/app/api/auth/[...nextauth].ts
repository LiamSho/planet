import NextAuth from 'next-auth'
import type { NextApiRequest, NextApiResponse } from 'next'

import config from '@/config'

const getProviders = async () => {
  return Promise.all(
    config.identities.map(async (item) => {
      const p = await import(`next-auth/providers/${item.provider}`)
      return p.default(item.config)
    }),
  )
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  const providers = await getProviders()

  if (req.query.nextauth?.includes('callback') && req.method === 'POST') {
    console.log('Handling callback request from my Identity Provider', req.body)
  }

  return await NextAuth(req, res, {
    providers: providers,
  })
}

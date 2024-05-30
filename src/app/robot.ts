import type { MetadataRoute } from 'next'

import { isProduction } from '@/lib/env'

const RobotsRoute = () => {
  if (!isProduction) {
    return disallowAll
  }

  const robotsTxt: MetadataRoute.Robots = {
    rules: [
      {
        userAgent: '*',
        allow: ['/$'],
      },
      {
        userAgent: 'Googlebot',
        allow: ['/$'],
      },
    ],
  }

  return robotsTxt
}

export default RobotsRoute

const disallowAll: MetadataRoute.Robots = {
  rules: [
    {
      userAgent: '*',
      disallow: '/',
    },
    {
      userAgent: 'Googlebot',
      disallow: '/',
    },
  ],
}

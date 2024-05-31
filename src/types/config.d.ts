import type { Metadata } from 'next'

export type ElementTemplate = {
  type: string
  text?: string
  class?: string
}

export type SocialMedia = {
  hover?: string
  icon: string
  url: string
  theme: string
  buttonLabel?: string
  linkLabel?: string
}

export type URL = {
  name: string
  url: string
}

export type PlanetConfig = {
  meta: Metadata
  home: {
    intro: {
      heading: ElementTemplate[]
      description: ElementTemplate[]
      social: SocialMedia[]
    }
    avatar: string
  }
  footer: {
    copyright: {
      startYear: number
      holder: URL
    }
    icp?: URL
  }
}

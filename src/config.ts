import { isProduction } from './lib/env'
import { PlanetConfig } from './types'

const config: PlanetConfig = {
  meta: {
    metadataBase: new URL('https://alisaqaq.moe'),
    title: '迷いの森',
    description: 'Slient Space',
    keywords: ['Alisa', 'blog'],
    robots: {
      index: isProduction,
      follow: isProduction,
      googleBot: {
        index: isProduction,
        follow: isProduction,
      },
    },
  },
  home: {
    intro: {
      heading: [
        {
          type: 'h1',
          text: "Hi, I'm ",
          class: 'font-light text-4xl',
        },
        {
          type: 'h1',
          text: 'Alisa Akiron',
          class: 'font-medium mx-2 text-4xl',
        },
        {
          type: 'h1',
          text: '👋。',
          class: 'font-light text-4xl',
        },
      ],
      description: [
        {
          type: 'span',
          text: 'Backend Developer',
          class: 'text-lg',
        },
        {
          type: 'span',
          text: 'System Administrator',
          class: 'text-lg',
        },
      ],
      social: [
        {
          hover: '@LiamSho',
          url: 'https://github.com/AlisaAkiron',
          icon: 'FaGithub',
          theme: '#181818',
        },
        {
          hover: '@Alisa_Akiron',
          url: 'https://space.bilibili.com/5627849',
          icon: 'FaBilibili',
          theme: '#00A1D6',
        },
        {
          hover: 'alisa@alisaqaq.moe',
          url: 'mailto:alisa@alisaqaq.moe',
          icon: 'FaEnvelope',
          theme: '#D44638',
        },
        {
          hover: 'Alisa Lab Codebin',
          url: 'https://git.alisaqaq.moe',
          icon: 'FaGitlab',
          theme: '#FC6D26',
        },
      ],
    },
    avatar: 'https://planet.alisaqaq.moe/avatar.webp',
  },
  footer: {
    copyright: {
      startYear: 2024,
      holder: {
        name: 'Alisa',
        url: '/',
      },
    },
    icp: {
      name: '萌 ICP 备 20241270 号',
      url: 'https://icp.gov.moe/?keyword=20241270',
    },
  },
}

export default config

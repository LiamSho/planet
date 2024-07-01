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
  images: {
    avatar: {
      src: 'https://planet.alisaqaq.moe/avatar.webp',
      alt: "Alisa's avatar",
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
          hover: '@AlisaAkiron',
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
  },
  menu: [
    {
      main: {
        name: '首页',
        url: '/',
        newTab: false,
      },
      children: [
        {
          name: '关于',
          url: '/about',
          newTab: false,
        },
      ],
    },
    {
      main: {
        name: '文稿',
        url: '/articles',
      },
      children: [
        {
          name: '技术',
        },
        {
          name: '折腾',
        },
        {
          name: '云',
        },
      ],
    },
    {
      main: {
        name: '更多',
      },
      children: [
        {
          name: '跃迁',
          url: 'https://travel.moe/go.html?travel=on',
        },
      ],
    },
  ],
  footer: {
    moeTravel: true,
    copyright: {
      startYear: 2024,
      holder: {
        name: 'Alisa',
        url: '/',
        newTab: false,
      },
    },
    icp: {
      name: '萌 ICP 备 20241270 号',
      url: 'https://icp.gov.moe/?keyword=20241270',
      newTab: true,
    },
    links: [],
  },
  identities: [
    {
      provider: 'github',
      config: {
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
      },
    },
  ],
}

export default config

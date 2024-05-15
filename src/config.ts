const config = {
  meta: {
    title: '迷いの森',
    description: 'Alisa',
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
          type: 'github',
          url: 'https://github.com/LiamSho',
          icon: 'FaGithub',
          theme: '#181818',
        },
        {
          type: 'bilibili',
          url: 'https://space.bilibili.com/5627849',
          icon: 'FaBilibili',
          theme: '#00A1D6',
        },
        {
          type: 'email',
          url: 'mailto:alisa@alisaqaq.moe',
          icon: 'FaEnvelope',
          theme: '#D44638',
        },
      ],
    },
    avatar: 'https://dummyimage.com/512',
  },
}

export default config

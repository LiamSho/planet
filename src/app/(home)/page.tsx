'use client'

import { FC } from 'react'
import Image from 'next/image'

import { HeroContainer } from '@/components/layout/container'
import { SocialLink } from '@/components/ui/button'
import { PopupTransition, TextPrinter } from '@/components/ui/transitions'
import cfg from '@/config'

import { HeroLayout } from './components/HeroLayout'

const Home: FC = () => {
  return <Hero />
}

export default Home

const Hero: FC = () => {
  const template = cfg.home.intro.heading
  const desc = cfg.home.intro.description

  const titleAnimateD =
    template.reduce((acc, cur) => {
      return acc + (cur.text?.length || 0)
    }, 0) * 0.05

  const descriptionAnimateD =
    desc.reduce((acc, cur) => {
      return acc + (cur.text?.length || 0)
    }, 0) * 0.05

  return (
    <HeroContainer>
      <HeroLayout leftClassName="mt-12 h-[15rem] lg:h-1/2">
        <>
          <div className="relative text-center leading-[4] lg:text-left [&_*]:inline-block">
            <TextPrinter template={template} />
          </div>

          <div className="my-3 text-center lg:text-left">
            <TextPrinter template={desc} initialDelay={titleAnimateD} />
          </div>

          <ul className="mx-[60px] mt-8 flex flex-wrap items-center justify-center gap-4 lg:mx-auto lg:mt-28 lg:justify-start">
            {cfg.home.intro.social.map((item, index) => {
              return (
                <li key={index}>
                  <PopupTransition
                    initialDelay={
                      titleAnimateD + descriptionAnimateD + index * 0.2
                    }
                  >
                    <SocialLink config={item} />
                  </PopupTransition>
                </li>
              )
            })}
          </ul>
        </>

        <div className="mt-24 size-[200px] lg:mt-0 lg:size-[300px]">
          <Image
            src={cfg.home.avatar}
            alt="avatar"
            width={300}
            height={300}
            className="aspect-square w-full rounded-full border border-slate-200 dark:border-neutral-800"
          />
        </div>
      </HeroLayout>
    </HeroContainer>
  )
}

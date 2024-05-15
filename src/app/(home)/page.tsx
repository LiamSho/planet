'use client'

import { FC } from 'react'
import * as Icons from 'react-icons/fa6'
import Image from 'next/image'

import TextPrinter from '@/components/custom/text-printer'
import { Button } from '@/components/ui/button'
import cfg from '@/config'

import HeroLayout from './components/HeroLayout'

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  )
}

const Hero: FC = () => {
  const template = cfg.home.intro.heading

  const titleAnimateD =
    template.reduce((acc, cur) => {
      return acc + (cur.text?.length || 0)
    }, 0) * 0.05

  return (
    <div className="mt-20 min-w-0 max-w-[1800px] overflow-hidden lg:mt-[-4.5rem] lg:h-dvh lg:min-h-[800px]">
      <HeroLayout leftClassName="mt-12 h-[15rem] lg:h-1/2">
        <>
          <div className="relative text-center leading-[4] lg:text-left [&_*]:inline-block">
            <TextPrinter template={template} />
          </div>

          <div className="my-3 text-center lg:text-left">
            <TextPrinter
              template={cfg.home.intro.description}
              delay={titleAnimateD}
            />
          </div>

          <ul className="mx-[60px] mt-8 flex flex-wrap items-center justify-center gap-4 lg:mx-auto lg:mt-28 lg:justify-start">
            {cfg.home.intro.social.map((item, index) => {
              // @ts-ignore
              const Icon = Icons[item.icon]
              return (
                <div key={index}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-0"
                    style={{ backgroundColor: item.theme }}
                  >
                    <a href={item.url} target="_blank">
                      <Icon className="h-5 w-5" color="white" />
                    </a>
                  </Button>
                </div>
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
    </div>
  )
}

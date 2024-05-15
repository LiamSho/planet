'use client'

import { FC } from 'react'
import * as Icons from 'react-icons/fa6'
import Image from 'next/image'

import TextPrinter from '@/components/custom/text-printer'
import { Button } from '@/components/ui/button'
import config from '@/config'
import { cn } from '@/lib/utils'

import HeroLayout from './components/HeroLayout'

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  )
}

const Hero: FC = () => {
  const template = config.home.intro.heading

  const titleAnimateD =
    template.reduce((acc, cur) => {
      return acc + (cur.text?.length || 0)
    }, 0) * 0.05

  return (
    <div className="max-w-screen mt-20 min-w-0 overflow-hidden lg:mt-[-4.5rem] lg:h-dvh lg:min-h-[800px]">
      <HeroLayout>
        <div>
          <div className="group relative text-center leading-[4] lg:text-left [&_*]:inline-block">
            <TextPrinter template={template} />
          </div>

          <div className="my-3 text-center lg:text-left">
            <TextPrinter
              template={config.home.intro.description}
              delay={titleAnimateD}
            />
          </div>

          <ul className="center mx-[60px] mt-8 flex flex-wrap gap-4 lg:mx-auto lg:mt-28 lg:justify-start">
            {config.home.intro.social.map((item, index) => {
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
        </div>
        <div
          className={cn(
            'lg:size-[300px]',
            'size-[200px]',
            'mt-24 lg:mt-0',
            'bg-yellow-200',
          )}
        >
          <Image
            src="https://dummyimage.com/512"
            alt="avatar"
            width={300}
            height={300}
            className={cn(
              'aspect-square rounded-full border border-slate-200 dark:border-neutral-800',
              'w-full',
            )}
          />
        </div>
        <div
          className={cn(
            'center inset-x-0 bottom-0 mt-12 flex flex-col lg:absolute lg:mt-0',
            'center text-neutral-800/80 dark:text-neutral-200/80',
            'bg-pink-200',
          )}
        >
          <span>Area Three</span>
        </div>
      </HeroLayout>
    </div>
  )
}

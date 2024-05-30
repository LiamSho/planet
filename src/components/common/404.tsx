'use client'

import { FC } from 'react'

import { HeroContainer, HeroContent } from '../layout/container'
import { Button } from '../ui/button'

export const Default404: FC = () => {
  return (
    <HeroContainer>
      <HeroContent className="flex-col">
        <h1 className="text-7xl font-bold">404 NOT FOUND</h1>
        <h3 className="text-3xl">这里好像没有东西哦</h3>
        <Button variant="outline" size="md" aria-label="Back to home page">
          <a href="/" aria-label="Hyperlink to home page">
            返回首页
          </a>
        </Button>
      </HeroContent>
    </HeroContainer>
  )
}

import { FC } from 'react'

import { DevMarkdown } from '@/components/dev'
import { ContentContainer } from '@/components/layout/container'

const AboutPage: FC = () => {
  return (
    <>
      <ContentContainer>
        <DevMarkdown />
      </ContentContainer>
    </>
  )
}

export default AboutPage

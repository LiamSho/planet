import { FC } from 'react'
import MJSX from 'markdown-to-jsx'

import { MdxImage } from './elements/image'
import { MdxParagraph } from './elements/paragraph'

export const Markdown: FC<{ mdxText: string }> = ({ mdxText }) => {
  const mdxComponents = {
    p: MdxParagraph,
    img: MdxImage,
  }

  return (
    <article>
      <MJSX>{mdxText}</MJSX>
    </article>
  )
}

'use client'

import { FC } from 'react'
import MJSX, { MarkdownToJSX } from 'markdown-to-jsx'

import { MdxImage, MdxParagraph } from './elements'

export const Markdown: FC<{ mdxText: string }> = ({ mdxText }) => {
  const mdxComponents = {
    p: MdxParagraph,
    img: MdxImage,
  }

  const options: MarkdownToJSX.Options = {
    overrides: mdxComponents,
  }

  return (
    <article>
      <MJSX options={options}>{mdxText}</MJSX>
    </article>
  )
}

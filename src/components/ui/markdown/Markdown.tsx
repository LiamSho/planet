'use client'

import { FC, Suspense } from 'react'

import { CodeBlock } from '@/components/common/block/CodeBlock'
import { FCC } from '@/types'
import MJSX, { compiler, MarkdownToJSX } from '@innei/markdown-to-jsx'

import { MdxImage, MdxParagraph } from './elements'

export const Markdown: FC<{ value: string }> = ({ value }) => {
  const mdxComponents: MarkdownToJSX.Overrides = {
    p: MdxParagraph,
    img: MdxImage,
  }

  const mdxRules: MarkdownToJSX.ExtendsRules = {
    codeInline: {
      react(node, _output, state) {
        return (
          <code
            key={state?.key}
            className="rounded-md bg-zinc-200 px-3 font-mono dark:bg-neutral-800"
          >
            {node.content}
          </code>
        )
      },
    },
    codeBlock: {
      react(node, _output, state) {
        return (
          <CodeBlock
            key={state?.key}
            code={node.content}
            language={node.lang}
          />
        )
      },
    },
    codeFenced: {
      parse(capture) {
        return {
          content: capture[4],
          lang: capture[2] || undefined,
          type: 'codeBlock',

          attrs: capture[3],
        }
      },
    },
  }

  const options: MarkdownToJSX.Options = {
    overrides: mdxComponents,
    wrapper: MarkdownWrapper,
    forceWrapper: false,
    extendsRules: mdxRules,
  }

  const MD = compiler(value, options)

  return <Suspense>{MD}</Suspense>
}

const MarkdownWrapper: FCC = ({ children }) => {
  return <article className="prose">{children}</article>
}

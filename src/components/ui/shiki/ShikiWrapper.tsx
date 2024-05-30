import { FC, useEffect, useState } from 'react'
import githubDark from 'shiki/themes/github-dark.mjs'
import githubLight from 'shiki/themes/github-light.mjs'

import {
  transformerMetaHighlight,
  transformerNotationErrorLevel,
  transformerNotationHighlight,
} from '@shikijs/transformers'

import './styles/shiki.css'

import { getHighlighterCore, HighlighterCore } from 'shiki'
import getWasm from 'shiki/wasm'

export const ShikiWrapper: FC<{
  code: string
  language?: string
}> = ({ code, language }) => {
  const lang = language?.toLocaleLowerCase() || ''
  const [shiki, setShiki] = useState<HighlighterCore | undefined>()

  useEffect(() => {
    const getShiki = async () => {
      const { bundledLanguages } = await import('shiki/langs')
      const shikiLang = (bundledLanguages as any)[lang]

      const highlighterCore = await getHighlighterCore({
        loadWasm: getWasm,
        themes: [githubDark, githubLight],
        langs: [shikiLang],
      })

      setShiki(highlighterCore)
    }

    getShiki()
  }, [lang])

  const html =
    shiki?.codeToHtml(code, {
      themes: {
        dark: 'github-dark',
        light: 'github-light',
      },
      lang: lang,
      transformers: [
        transformerMetaHighlight(),
        transformerNotationHighlight(),
        transformerNotationErrorLevel(),
      ],
    }) || ''

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  )
}

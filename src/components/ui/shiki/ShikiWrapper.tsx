'use client'

import { createContext, useEffect, useState } from 'react'
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

import { FCC } from '@/types'

export const ShikiContext = createContext<{ html: string; language: string }>({
  html: '',
  language: '',
})

export const ShikiWrapper: FCC<{
  code: string
  language?: string
}> = ({ code, language, children }) => {
  const lang = language?.toLocaleLowerCase() || ''
  const [shiki, setShiki] = useState<HighlighterCore | undefined>()
  const [context, setContext] = useState<{ html: string; language: string }>({
    html: '',
    language: '',
  })

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

  useEffect(() => {
    setContext({
      html:
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
        }) || '',
      language: lang,
    })
  }, [code, lang, shiki])

  return (
    <ShikiContext.Provider value={context}>{children}</ShikiContext.Provider>
  )
}

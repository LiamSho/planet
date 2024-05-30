'use client'

import { FC, use } from 'react'

import {
  transformerMetaHighlight,
  transformerNotationErrorLevel,
  transformerNotationHighlight,
} from '@shikijs/transformers'

import { getShiki } from './utils'

export const ShikiWrapper: FC<{
  code: string
  language?: string
}> = ({ code, language }) => {
  const shiki = use(getShiki)
  const lang = language ? language.toLowerCase() : ''

  use(
    (async () => {
      const loadShikiLanguage = async (
        language: string,
        languageModule: any,
      ) => {
        if (!shiki.getLoadedLanguages().includes(language)) {
          await shiki.loadLanguage(await languageModule())
        }
      }
      const { bundledLanguages } = await import('shiki/langs')

      const importFn = (bundledLanguages as any)[lang]
      if (!importFn) {
        return
      }
      return loadShikiLanguage(lang, importFn)
    })(),
  )

  const html = shiki.codeToHtml(code, {
    lang: lang,
    themes: {
      dark: 'github-dark',
      light: 'github-light',
    },
    transformers: [
      transformerMetaHighlight(),
      transformerNotationHighlight(),
      transformerNotationErrorLevel(),
    ],
  })

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  )
}

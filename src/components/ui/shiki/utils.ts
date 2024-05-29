import { getHighlighterCore } from 'shiki'
import githubDark from 'shiki/themes/github-dark.mjs'
import githubLight from 'shiki/themes/github-light.mjs'

export const getShiki = (async () => {
  const getWasm = import('shiki/wasm').then((m) => m.default)

  const highlighter = await getHighlighterCore({
    langs: [],
    themes: [githubDark, githubLight],
    loadWasm: getWasm,
  })

  return highlighter
})()

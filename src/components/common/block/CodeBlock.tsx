import { FC } from 'react'

import { ShikiWrapper } from '@/components/ui/shiki'

type CodeBlockProps = {
  code: string
  language?: string
}

export const CodeBlock: FC<CodeBlockProps> = ({ code, language }) => {
  return (
    <>
      <ShikiWrapper code={code} language={language} />
    </>
  )
}

'use client'

import { FC, useContext, useEffect, useState } from 'react'

import { ComponentLoading } from '@/components/layout/loading'
import { ConditionalRender } from '@/components/shared/conditional'
import { ShikiContext, ShikiWrapper } from '@/components/ui/shiki'

type CodeBlockProps = {
  code: string
  language?: string
}

export const CodeBlock: FC<CodeBlockProps> = ({ code, language }) => {
  return (
    <ShikiWrapper code={code} language={language}>
      <CodeWrapper />
    </ShikiWrapper>
  )
}

const CodeWrapper: FC = () => {
  const shikiContext = useContext(ShikiContext)
  const [codeRef, setCodeRef] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!codeRef) {
      return
    }
    console.log(codeRef.clientHeight, codeRef.scrollHeight)
  }, [codeRef, shikiContext])

  return (
    <div className="">
      <div className=" z-10 flex h-[30px] w-full items-center justify-between rounded-t-xl bg-slate-200 px-5 py-1 text-sm">
        <span className="shrink-0 grow truncate"></span>
        <span className="pointer-events-none shrink-0 grow-0" aria-hidden>
          <ConditionalRender
            status={shikiContext.html !== ''}
            fallback={<ComponentLoading type="infinity" size="xs" />}
          >
            {shikiContext.language.toUpperCase()}
          </ConditionalRender>
        </span>
      </div>
      <div className="not-prose">
        <ConditionalRender
          status={shikiContext.html !== ''}
          fallback={
            <ComponentLoading
              type="dots"
              size="lg"
              className="min-h-[50vh] max-w-full"
            />
          }
        >
          <div
            className="prose prose-sm mx-2 max-h-[50vh] max-w-full overflow-x-hidden overflow-y-hidden"
            ref={setCodeRef}
            dangerouslySetInnerHTML={{
              __html: shikiContext.html,
            }}
          />
        </ConditionalRender>
      </div>
    </div>
  )
}

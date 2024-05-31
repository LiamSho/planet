'use client'

import { FC, useContext, useEffect, useState } from 'react'

import { ComponentLoading } from '@/components/layout/loading'
import { ConditionalRender } from '@/components/shared/conditional'
import { ShikiContext, ShikiWrapper } from '@/components/ui/shiki'
import { cn } from '@/lib/utils'

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
  const [requireExtend, setRequireExtend] = useState(true)
  const [extended, setExtended] = useState(false)

  useEffect(() => {
    if (!codeRef) {
      return
    }

    if (codeRef.scrollHeight > codeRef.clientHeight) {
      setRequireExtend(true)
    } else {
      setRequireExtend(false)
    }
  }, [codeRef, shikiContext, requireExtend])

  return (
    <div>
      <div className="z-10 flex h-[30px] w-full items-center justify-between rounded-t-xl bg-neutral/50 px-5 py-1 text-sm ">
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
      <div className="not-prose rounded-bl-md rounded-br-md">
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
            className={cn(
              'prose prose-sm max-w-full overflow-y-hidden',
              requireExtend ? (extended ? '' : 'max-h-[50vh]') : 'max-h-[50vh]',
              requireExtend
                ? extended
                  ? 'overflow-x-auto'
                  : 'overflow-x-hidden'
                : 'overflow-x-auto',
            )}
            ref={setCodeRef}
            dangerouslySetInnerHTML={{
              __html: shikiContext.html,
            }}
          />
          <ConditionalRender status={requireExtend}>
            <div
              className="flex justify-center p-2 text-neutral-500"
              onClick={() => setExtended(!extended)}
            >
              {extended ? 'Collapse' : 'Expand'}
            </div>
          </ConditionalRender>
        </ConditionalRender>
      </div>
    </div>
  )
}

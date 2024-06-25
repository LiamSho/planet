'use client'

import { FC, useContext, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

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
  const [blockRef, setBlockRef] = useState<HTMLDivElement | null>(null)
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
    <div ref={setBlockRef}>
      <div className="z-10 flex h-[30px] w-full items-center justify-between rounded-t-xl bg-neutral px-5 py-1 text-sm ">
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
              className="min-h-16 max-w-full"
            />
          }
        >
          <AnimatePresence>
            <motion.div
              className={cn(
                'prose prose-sm max-w-full touch-auto overflow-auto',
                extended ? 'min-h-[50vh]' : 'max-h-[50vh]',
              )}
              ref={setCodeRef}
              dangerouslySetInnerHTML={{
                __html: shikiContext.html,
              }}
              transition={{
                duration: 1,
                ease: 'easeInOut',
              }}
              initial={{ maxHeight: '50vh' }}
              animate={{
                maxHeight: extended
                  ? codeRef
                    ? `${codeRef.scrollHeight}px`
                    : `100vh`
                  : '50vh',
              }}
            />
          </AnimatePresence>
          <ConditionalRender status={requireExtend}>
            <div
              className={cn(
                'btn btn-ghost flex justify-center p-2 text-neutral-500',
              )}
              onClick={() => {
                if (extended) {
                  blockRef?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  })
                }

                setExtended(!extended)
              }}
            >
              {extended ? '收起' : '展开'}
            </div>
          </ConditionalRender>
        </ConditionalRender>
      </div>
    </div>
  )
}

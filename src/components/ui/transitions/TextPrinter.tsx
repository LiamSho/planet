'use client'

import React, { createElement } from 'react'
import { motion } from 'framer-motion'
import type { FC } from 'react'

import { TextUpTransition } from './TextUpTransition'

export const TextPrinter: FC<{
  template: {
    type: string
    text?: string
    class?: string
  }[]
  initialDelay?: number
}> = ({ template, initialDelay }) => {
  return (
    <motion.div
      initial={{ opacity: 0.0001, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: initialDelay,
        duration: 0.35,
        type: 'spring',
        stiffness: 120,
        damping: 20,
      }}
    >
      {template.map((t, i) => {
        const { type } = t
        const prevAllTextLength = template.slice(0, i).reduce((acc, cur) => {
          return acc + (cur.text?.length || 0)
        }, 0)
        return createElement(
          type,
          { key: i, className: t.class },
          t.text && (
            <TextUpTransition
              initialDelay={prevAllTextLength * 0.05 + (initialDelay || 0)}
              eachDelay={0.05}
            >
              {t.text}
            </TextUpTransition>
          ),
        )
      })}
    </motion.div>
  )
}

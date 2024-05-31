'use client'

import { FC, useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import NextImage from 'next/image'

import { ComponentLoading } from '@/components/layout/loading'
import { cn } from '@/lib/utils'

type ImageProps = {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export const Image: FC<ImageProps> = (props) => {
  const [reveal, setReveal] = useState(false)
  const visibility = reveal ? '' : 'hidden'
  const loader = reveal ? 'hidden' : ''

  const controls = useAnimation()

  useEffect(() => {
    if (reveal) {
      controls.start({ opacity: 1 })
    }
  }, [reveal, controls])

  return (
    <>
      <ComponentLoading
        type="dots"
        size="lg"
        className={cn(
          loader,
          props.height ? `h-[${props.height}px]` : '',
          props.width ? `w-[${props.width}px]` : '',
          props.className,
        )}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        className={visibility}
      >
        <NextImage
          src={props.src}
          alt={props.alt}
          width={props.width}
          height={props.height}
          loading="eager"
          onLoad={() => setReveal(true)}
          onError={() => setReveal(true)}
          className={props.className}
        />
      </motion.div>
    </>
  )
}

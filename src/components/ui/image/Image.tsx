'use client'

import { FC, useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

type ImageProps = {
  src: string
  alt: string
  loading?: 'lazy' | 'eager'
  className?: string
  loadingclassName?: string
}

export const Image: FC<ImageProps> = (props) => {
  const [isLoading, setLoading] = useState(true)
  const ref = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (ref.current === null) {
      return
    }

    ref.current.onload = () => {
      setLoading(false)
    }

    ref.current.src = props.src
  }, [props.src])

  return (
    <img
      ref={ref}
      alt={props.alt}
      loading={props.loading || 'lazy'}
      className={cn(
        props.className,
        'duration-500 ease-in',
        isLoading
          ? cn(
              'scale-105 bg-gray-400 blur-2xl grayscale',
              props.loadingclassName,
            )
          : 'scale-100 blur-0 grayscale-0',
      )}
    />
  )
}

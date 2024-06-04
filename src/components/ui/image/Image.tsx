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
        'duration-700 ease-in',
        isLoading
          ? cn(' bg-gray-400 blur grayscale', props.loadingclassName)
          : 'blur-0 grayscale-0',
      )}
    />
  )
}

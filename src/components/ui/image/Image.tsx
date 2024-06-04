'use client'

import { FC, useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

type ImageProps = {
  src: string
  alt: string
  className?: string
}

export const Image: FC<ImageProps> = (props) => {
  const [loaded, setLoaded] = useState(false)
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined)

  const controls = useAnimation()

  useEffect(() => {
    if (loaded) {
      controls.start({ opacity: 1 })
    } else {
      setImageSrc(props.src)
    }
  }, [loaded, controls, props.src])

  return (
    <>
      <motion.img
        alt={props.alt}
        src={imageSrc}
        className={props.className}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      />
    </>
  )
}

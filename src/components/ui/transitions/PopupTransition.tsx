import React, { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

export const PopupTransition: FC<{
  children: ReactNode
  initialDelay?: number
}> = ({ children, initialDelay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: initialDelay || 0, duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

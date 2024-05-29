import React from 'react'

import { HTML } from '@/types'

export const MdxParagraph: HTML<'p'> = ({ children, className, ...props }) => {
  return (
    <>
      <p {...props} className="text-md text-base-content">
        {children}
      </p>
    </>
  )
}

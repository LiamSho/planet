import React from 'react'

import { HTML } from '@/types'

export const MdxParagraph: HTML<'p'> = ({ children, className, ...props }) => {
  if (React.Children.count(children) === 1) {
    const child = React.Children.toArray(children)[0]
    if (isImage(child)) {
      return children
    }

    if (isLink(child)) {
      // TODO
    }
  }

  return (
    <>
      <p {...props} className="text-md text-base-content">
        {children}
      </p>
    </>
  )
}

const isImage = (child: any) => {
  if (typeof child === 'object') {
    if ((child as any)?.props?.src) {
      return true
    }
  }
  return false
}

const isLink = (child: any) => {
  if (typeof child === 'object') {
    if (
      (child as any)?.props?.href &&
      (child as any)?.props?.children?.length === 1
    ) {
      return true
    }
  }
  return false
}

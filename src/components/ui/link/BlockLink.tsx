import { FC } from 'react'

export const BlockLink: FC<{
  href: string
}> = ({ href }) => {
  return (
    <span>
      <a href={href}></a>
    </span>
  )
}

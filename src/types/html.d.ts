import { DetailedHTMLProps, ReactHTML } from 'react'

type ReactHTMLProps = {
  [T in keyof ReactHTML]: DetailedHTMLProps<React.ComponentProps<T>, T>
}

export type HTMLElementProps<T extends keyof ReactHTML> = ReactHTMLProps[T]

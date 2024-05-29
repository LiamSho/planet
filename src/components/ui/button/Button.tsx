import { FC } from 'react'

import { cn } from '@/lib/utils'
import { HTMLElementProps } from '@/types'

export const Button: FC<
  HTMLElementProps<'button'> & {
    variant?: 'primary' | 'ghost' | 'outline' | 'default'
    size?: 'icon' | 'sm' | 'md' | 'lg'
  }
> = ({ className, ...props }) => {
  const presets = {
    variant: {
      primary: 'bg-primary text-white',
      ghost: 'bg-transparent text-primary',
      outline: '',
      default: '',
    },
    size: {
      icon: 'p-1',
      sm: 'px-2 py-1',
      md: 'px-3 py-2',
      lg: 'px-4 py-3',
    },
  }

  const variant = props.variant || 'primary'

  return (
    <>
      <button className={cn(presets.variant[variant], className)} {...props}>
        {props.children}
      </button>
    </>
  )
}

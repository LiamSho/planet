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
      default: '',
      primary: 'btn-primary text-white',
      ghost: 'btn-ghost text-primary',
      outline: 'btn-outline',
    },
    size: {
      default: '',
      icon: 'p-1',
      sm: 'btn-sm',
      md: 'btn-md',
      lg: 'btn-lg',
    },
  }

  const variant = props.variant || 'default'
  const size = props.size || 'default'

  return (
    <>
      <button
        className={cn(
          'btn',
          presets.variant[variant],
          presets.size[size],
          className,
        )}
        {...props}
      >
        {props.children}
      </button>
    </>
  )
}

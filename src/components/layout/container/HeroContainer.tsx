import { cn } from '@/lib/utils'
import { HTML } from '@/types'

export const HeroContainer: HTML<'div'> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn('hero min-h-screen', className)} {...props}>
      {children}
    </div>
  )
}

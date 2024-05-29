import { cn } from '@/lib/utils'
import { HTML } from '@/types'

export const ContentContainer: HTML<'div'> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'mx-auto my-14 max-w-3xl px-2 shadow-lg lg:mt-[80px] lg:px-0 2xl:max-w-4xl',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

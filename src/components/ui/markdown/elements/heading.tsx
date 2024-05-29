import { FCC } from '@/types'

export const MdxHeading: FCC<{ level: 1 | 2 | 3 | 4 | 5 | 6 }> = ({
  level,
  children,
}) => {
  const Tag = `h${level}` as const

  if (level === 1) {
    return (
      <>
        <div>
          <Tag>{children}</Tag>
        </div>
      </>
    )
  }

  return <Tag>{children}</Tag>
}

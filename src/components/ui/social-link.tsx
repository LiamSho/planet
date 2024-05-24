import { FC } from 'react'
import * as Fa6Icons from 'react-icons/fa6'

export const SocialLink: FC<{
  config: {
    hover: string
    icon: string
    url: string
    theme: string
  }
}> = ({ config }) => {
  // @ts-ignore
  const Icon = Fa6Icons[config.icon]
  return (
    <>
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full border-0"
        style={{ backgroundColor: config.theme }}
      >
        <a href={config.url} target="_blank">
          <Icon className="h-6 w-6" color="white" />
        </a>
      </button>
    </>
  )
}

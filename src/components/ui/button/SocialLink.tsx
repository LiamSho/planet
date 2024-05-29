import { FC } from 'react'
import * as Fa6Icons from 'react-icons/fa6'
import type { SocialMedia } from '@/types'

export const SocialLink: FC<{
  config: SocialMedia
}> = ({ config }) => {
  // @ts-ignore
  const Icon = Fa6Icons[config.icon]

  const hasTooltip = config.hover !== undefined && config.hover !== ''

  return (
    <>
      <div
        className={hasTooltip ? 'tooltip tooltip-top' : ''}
        data-tip={config.hover}
      >
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border-0"
          style={{ backgroundColor: config.theme }}
          aria-label={
            config.buttonLabel || `Social link button with ${config.icon} icon`
          }
        >
          <a
            href={config.url}
            target="_blank"
            aria-label={
              config.linkLabel ||
              `A link point to an external site ${config.url}`
            }
          >
            <Icon className="h-6 w-6" color="white" />
          </a>
        </button>
      </div>
    </>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'
import { MdComputer } from 'react-icons/md'
import { useTheme } from 'next-themes'

import { cn } from '@/lib/utils'

const themeButtons = [
  {
    icon: <LuMoon />,
    name: 'dark',
  },
  {
    icon: <MdComputer />,
    name: 'system',
  },
  {
    icon: <LuSun />,
    name: 'light',
  },
]

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="join rounded-full border border-base-300">
      {themeButtons.map((item, index) => {
        return (
          <button
            key={index}
            className={cn(
              'btn join-item btn-sm',
              theme === item.name ? '' : 'btn-ghost',
            )}
            onClick={() => setTheme(item.name)}
          >
            {item.icon}
          </button>
        )
      })}
    </div>
  )
}

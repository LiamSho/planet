import { FC } from 'react'

import config from '@/config'
import { cn } from '@/lib/utils'
import { HTMLElementProps, MenuItem as MenuItemType } from '@/types'

export const Menu: FC = () => {
  const menu = config.menu

  return (
    <div className="flex h-8 items-center justify-center space-x-4 rounded-full px-2 shadow">
      {menu.map((item, index) => (
        <MenuDropdown key={index} menu={item} />
      ))}
    </div>
  )
}

const MenuDropdown: FC<{
  menu: {
    main: MenuItemType
    children?: MenuItemType[]
  }
}> = ({ menu }) => {
  return (
    <div className="dropdown dropdown-hover ">
      <MenuItem item={menu.main} />
      {menu.children && (
        <ul
          className={cn(
            'dropdown-content dropdown-bottom rounded-lg text-center shadow',
            'left-1/2 top-full -translate-x-1/2',
            'mt-1 w-28 space-y-3 py-2',
          )}
        >
          {menu.children.map((child, index) => (
            <MenuItem key={index} item={child} />
          ))}
        </ul>
      )}
    </div>
  )
}

const MenuItem: FC<
  {
    item: MenuItemType
  } & HTMLElementProps<'div'>
> = ({ item, className, ...props }) => {
  const target = item.newTab ? '_blank' : '_self'
  return (
    <div {...props} className={cn('text-md pointer-events-auto', className)}>
      <span className="h-2 cursor-pointer px-4 py-2">
        {item.url ? (
          <a href={item.url} target={target}>
            {item.name}
          </a>
        ) : (
          <>{item.name}</>
        )}
      </span>
    </div>
  )
}

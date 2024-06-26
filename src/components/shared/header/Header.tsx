import { FC } from 'react'

import { Menu } from './menu'

export const Header: FC = () => {
  return (
    <header className="fixed top-0 z-[1000] w-full">
      <nav className="navbar px-2 md:px-24 lg:px-48">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl" href="/">
            PLACEHOLDER
          </a>
        </div>
        <div className="navbar-center">
          <Menu />
        </div>
        <div className="navbar-end">PLACEHOLDER</div>
      </nav>
    </header>
  )
}

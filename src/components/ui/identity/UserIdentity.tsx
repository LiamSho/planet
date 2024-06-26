import { FC } from 'react'

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

export const UserIdentity: FC = () => {
  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  )
}

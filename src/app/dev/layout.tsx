import { isProduction } from '@/lib/env'
import { FCC } from '@/types'

const DevLayout: FCC = ({ children }) => {
  if (isProduction) {
    return (
      <>
        <h1>NOT FOR PRODUCTION ENV</h1>
      </>
    )
  }

  return <>{children}</>
}

export default DevLayout

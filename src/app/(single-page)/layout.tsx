import { FCC } from '@/types'

export const runtime = 'edge'

const SinglePageLayout: FCC = ({ children }) => {
  return <div>{children}</div>
}

export default SinglePageLayout

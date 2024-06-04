import { DetailedHTMLProps, FC, ImgHTMLAttributes } from 'react'

import { Image } from '@/components/ui/image'

export const MdxImage: FC<
  DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
> = (props) => {
  const alt = props.alt || ''

  return (
    <div className="flex items-center justify-center">
      <Image
        src={props.src as string}
        alt={alt}
        className="max-h-[75vh]"
        loadingclassName="min-h-[50vh] w-full"
      />
    </div>
  )
}

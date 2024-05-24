import { DetailedHTMLProps, FC, ImgHTMLAttributes } from 'react'
import Image from 'next/image'

export const MdxImage: FC<
  DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
> = (props) => {
  const alt = props.alt || ''

  return (
    <>
      <Image src={props.src as string} alt={alt} width={500} height={500} />
    </>
  )
}

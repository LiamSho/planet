import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

export const MdxParagraph: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
> = (props) => {
  return (
    <>
      <p {...props} className="text-lg text-gray-700">
        {props.children}
      </p>
    </>
  )
}

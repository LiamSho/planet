import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

export const MdxParagraph: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
> = (props) => {
  return (
    <>
      <p {...props} className="text-md text-base-content">
        {props.children}
      </p>
    </>
  )
}

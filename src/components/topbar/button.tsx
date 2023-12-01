import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = ComponentProps<'button'>

const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        'hover:border-1 rounded-full  p-2 transition duration-300 hover:border-neutral-400 hover:bg-neutral-300',
        className
      )}
    />
  )
}

export default Button

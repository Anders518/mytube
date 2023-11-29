import { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'> & { variant?: string }

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`hover:border-1 rounded-full  p-2 transition duration-300 hover:border-slate-400 hover:bg-slate-300 ${props.variant}}`}
      {...props}
    />
  )
}

export default Button

import classNames from 'classnames'
import React, { FC } from 'react'

const weightClasses = {
  300: 'font-extralight',
  400: 'font-light',
  500: 'font-medium',
  600: 'font-semibold',
  700: 'font-bold'
}

const variantStyles = {
  solid_primary: 'bg-black text-white rounded-[4px] hover:bg-gray-80',
  solid_primary_red: 'bg-red-main text-white  rounded-[4px]',
  solid_secondary: 'bg-gray-500 text-white  rounded-[4px]',
  ghost: 'text-black',
  ghost_red: 'text-red-main',
  outline_primary: 'border-black border-2',
  outline_secondary_red:
    'bg-background-red text-red-main border-red-main border-2',
  outline_disable: 'bg-none text-black border-2'
}
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  disable?: boolean
  height?: number
  weight?: keyof typeof weightClasses
  variant?: keyof typeof variantStyles
  className?: string
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({
  children,
  disable,
  height,
  weight,
  variant = 'solid_primary',
  className,
  onClick,
  ...rest
}) => {
  const baseStyles = `text-center text-sm box-border px-3 py-[10px]`

  return (
    <button
      disabled={disable}
      onClick={onClick}
      className={classNames(className, baseStyles, variantStyles[variant], {
        disable: 'cursor-not-allowed bg-gray-20'
      })}
      {...rest}>
      <p className={classNames(weight, 'leading-4')}>{children}</p>
    </button>
  )
}

export default Button

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
  solid_primary: 'bg-black text-white rounded-e hover:bg-gray-80',
  solid_primary_red: 'bg-background-red text-white rounded-e',
  solid_secondary: 'bg-gray-500 text-white rounded-e',
  ghost: 'text-black',
  ghost_red: 'text-red-main',
  outline_primary: 'border-black border-2',
  outline_secondary_red:
    'bg-background-red text-red-main border-red-main border-2'
}
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  disable?: boolean
  height?: number
  weight?: keyof typeof weightClasses
  variant?: keyof typeof variantStyles
  className?: string
}

const Button: FC<ButtonProps> = ({
  children,
  disable,
  height,
  weight,
  variant = 'solid_primary',
  className,
  ...rest
}) => {
  const baseStyles = 'text-center rounded-md text-sm box-border px-3 py-[10px]'

  return (
    <button
      disabled={disable}
      className={classNames(
        className,
        baseStyles,
        variantStyles[variant],
        weight,
        {
          disable: 'cursor-not-allowed bg-gray-20'
        }
      )}
      {...rest}>
      <p className="leading-4">{children}</p>
    </button>
  )
}

export default Button
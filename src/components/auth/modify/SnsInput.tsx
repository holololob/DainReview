import React, { FC, ReactNode } from 'react'
import { FieldErrors, useFormContext } from 'react-hook-form'

import classNames from 'classnames'

interface InputProps {
  id: string
  label?: ReactNode
  type: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  className?: string
  icon?: ReactNode
}

const SnsInput: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  required,
  placeholder,
  className,
  icon
}) => {
  return (
    <div className="relative w-full">
      {icon ? (
        <div className="absolute left-3 top-[10px] flex h-5 w-5 items-center justify-center overflow-hidden rounded-md">
          {icon}
        </div>
      ) : null}
      <input
        id={id}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        className={classNames(
          `${className} ${icon ? 'px-10' : 'px-2'} box-border w-full rounded-[4px] border py-2 shadow-sm transition focus:border-black focus:outline-none focus:ring-1 focus:ring-black disabled:cursor-not-allowed disabled:opacity-70`
        )}
      />
    </div>
  )
}

export default SnsInput

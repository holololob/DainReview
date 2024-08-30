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
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  required,
  placeholder,
  className,
  ...rest
}) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()
  const hasError = errors[id] ? errors[id] : null

  return (
    <div className="w-full">
      <input
        id={id}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        {...register(id, { required: '내용을 입력해주세요' })}
        {...rest}
        className={classNames(
          `${className} box-border w-full rounded-[4px] border p-2 shadow-sm transition focus:border-black focus:outline-none focus:ring-1 focus:ring-black disabled:cursor-not-allowed disabled:opacity-70 ${hasError ? 'focus:border-red-500 focus:ring-red-500' : ''}`
        )}
      />
      {errors ? (
        <p className="text-red-main">{errors[id]?.message?.toString()}</p>
      ) : null}
    </div>
  )
}

export default Input

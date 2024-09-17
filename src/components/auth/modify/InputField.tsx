import { UseFormRegisterReturn } from 'react-hook-form'

interface InputFieldProps {
  id: string
  type: string
  name: string
  placeholder: string
  require: boolean
  description: string
  register: UseFormRegisterReturn
  errors: any
  disable?: boolean
  value?: string
}

const InputField = ({
  id,
  type = 'text',
  name,
  placeholder,
  require = false,
  description = '',
  register,
  errors,
  disable,
  value
}: InputFieldProps) => {
  return (
    <div className={`${name ? 'space-y-2' : ''}`}>
      <label
        htmlFor={id}
        className="block text-base font-medium text-gray-90">
        {name} {require && <span className="text-red-main">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disable}
        value={value}
        className={`${disable === true ? 'bg-gray-10' : ''} focus:ring-primary focus:border-primary block w-full rounded-[4px] border-[1px] px-2 py-2 focus:outline-none`}
        {...register}
      />
      {description && <p className="text-sm text-gray-500">{description}</p>}
      {errors && errors[id] && (
        <p className="text-sm text-red-500">{errors[id]?.message}</p>
      )}
    </div>
  )
}

export default InputField

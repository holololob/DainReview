import React, { useCallback, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import Button from '../shared/Button'
import { Label } from '../shared/Label'
import VerificationIcon from './VerificationIcon'
import classNames from 'classnames'

interface CertifyFieldProps {
  id: string
  name: string
  placeholder: string
  require: boolean
  description?: string
  children: string
  showIcon?: boolean
  validationFunction?: (
    value: string
  ) => Promise<{ isValid: boolean | null; message: string }>
}

const CertifyField: React.FC<CertifyFieldProps> = ({
  id,
  name,
  placeholder,
  require,
  description,
  children,
  showIcon,
  validationFunction
}) => {
  const {
    register,
    formState: { errors },
    setValue,
    watch
  } = useFormContext()
  const [isVerifiedMessage, setisVerifiedMessage] = useState('')
  const [isVerified, setIsVerified] = useState<boolean | null>(null)
  const inputValue = watch(id) // 현재 입력된 값을 동기화

  const handleValidation = useCallback(async () => {
    if (!inputValue) return '값을 입력해주세요.'

    if (validationFunction) {
      const result = await validationFunction(inputValue)
      setIsVerified(result.isValid)
      if (result.isValid === true) {
        setValue(id, inputValue, { shouldValidate: true })
        setisVerifiedMessage(result.message)
        return true // 유효한 경우 true 반환
      } else if (result.isValid === false) {
        setisVerifiedMessage(result.message)
        return result.message || '유효성 검사에 실패했습니다.' // 유효하지 않은 경우 오류 메시지 반환
      }
    }
  }, [inputValue, validationFunction, setValue])

  return (
    <div className="flex w-full flex-col">
      <Label
        id={id}
        name={name}
        require={require}
        description={description}
      />
      <div className="flex place-items-start gap-2">
        <div className="relative w-full">
          <input
            className={classNames(
              `box-border w-full rounded-[4px] border p-2 shadow-sm transition focus:border-black focus:outline-none focus:ring-1 focus:ring-black disabled:cursor-not-allowed disabled:opacity-70 ${isVerified === false ? 'border-red-500 ring-red-500' : ''}`
            )}
            id={id}
            type="text"
            {...register(id, {
              validate: handleValidation
            })}
            placeholder={placeholder}
          />
          {showIcon && <VerificationIcon isVerified={isVerified} />}
        </div>
        <Button
          type="button"
          className="h-[42px] min-w-[74px] rounded-md"
          variant="solid_primary"
          onClick={handleValidation}>
          {children}
        </Button>
      </div>
      <div>
        {errors[id] ? (
          <p className="mt-2 text-sm text-red-500">
            {errors[id]?.message?.toString()}
          </p>
        ) : (
          isVerifiedMessage && (
            <p
              className={`mt-2 text-sm ${isVerified === true ? 'text-green-500' : 'text-red-500'}`}>
              {isVerifiedMessage}
            </p>
          )
        )}
      </div>
    </div>
  )
}

export default CertifyField

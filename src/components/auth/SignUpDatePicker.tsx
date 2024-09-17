import React from 'react'
import type { DatePickerProps } from 'antd'
import { DatePicker } from 'antd'
import type { Dayjs } from 'dayjs'
import { useFormContext } from 'react-hook-form'

const SignUpDatePicker: React.FC = () => {
  const { setValue } = useFormContext()

  const onChange: DatePickerProps<Dayjs[]>['onChange'] = (date, dateString) => {
    setValue('birthdate', dateString)
  }
  return (
    <DatePicker
      className="w-full"
      onChange={onChange}
      needConfirm
    />
  )
}

export default SignUpDatePicker

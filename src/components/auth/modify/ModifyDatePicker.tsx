import React from 'react'
import type { DatePickerProps } from 'antd'
import { DatePicker } from 'antd'
import type { Dayjs } from 'dayjs'
import { Controller } from 'react-hook-form'

interface ModifyDatePickerProps {
  control: any
}

const ModifyDatePicker: React.FC<ModifyDatePickerProps> = ({ control }) => {
  //   const onChange: DatePickerProps<Dayjs[]>['onChange'] = (date, dateString) => {
  //     setValue('birthdate', dateString)
  //   }
  return (
    <Controller
      name="birthdate"
      control={control}
      render={({ field }) => (
        <DatePicker
          className="h-[42px] w-full"
          onChange={field.onChange}
          value={field.value ? field.value : null} // value를 제어된 컴포넌트로 유지
          needConfirm
        />
      )}
    />
  )
}

export default ModifyDatePicker

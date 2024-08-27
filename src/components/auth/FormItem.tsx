import React from 'react'
import { Form } from 'antd'
import { Controller, useFormContext } from 'react-hook-form'

const FormItem = ({ name, label, rules, children }: any) => {
  const {
    control,
    formState: { errors }
  } = useFormContext()

  return (
    <Form.Item
      label={label}
      validateStatus={errors[name] ? 'error' : ''}
      help={errors[name]?.message}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => React.cloneElement(children, { ...field })}
      />
    </Form.Item>
  )
}

export default FormItem

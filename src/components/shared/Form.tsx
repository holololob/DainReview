import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm, FormProvider, FieldValues } from 'react-hook-form'
import { ZodSchema, z } from 'zod'

interface FormProps<T> {
  children: React.ReactNode
  onSubmit: (data: T) => void
  schema: ZodSchema<T>
}

const Form = <T extends FieldValues>({
  children,
  onSubmit,
  schema
}: FormProps<T>) => {
  const methods = useForm<T>({
    resolver: zodResolver(schema)
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  )
}

export default Form

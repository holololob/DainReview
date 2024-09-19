'use client'

import { z } from 'zod'
import Button from '../shared/Button'
import Form from '../shared/Form'
import { InputField } from './InputField'
import CertifyField from './CertifyField'

const findPwSchema = z.object({
  id: z.string().min(7, { message: '아이디를 다시 확인해주세요.' }),
  name: z.string().min(1, { message: '이름을 입력해주세요.' }),
  phone: z
    .string()
    .min(10, { message: '전화번호는 10자 이상이어야 합니다.' })
    .max(11, { message: '전화번호는 11자 이하여야 합니다.' })
    .regex(/^\d+$/, { message: '전화번호는 숫자만 포함해야 합니다.' })
})

export function FindPwForm() {
  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <Form
      onSubmit={onSubmit}
      schema={findPwSchema}>
      <InputField
        id={'id'}
        name={'아이디'}
        require={false}
        type={'text'}
      />

      <InputField
        id={'name'}
        name={'이름'}
        require={false}
        type={'text'}
      />

      <CertifyField
        id={'phone'}
        name={'전화번호'}
        require={false}
        placeholder="‘-’ 없이 숫자만 작성"
        showIcon={false}
        validationFunction={function (
          value: string
        ): Promise<{ isValid: boolean | null; message: string }> {
          throw new Error('Function not implemented.')
        }}>
        인증
      </CertifyField>
      <Button
        className="mt-6 h-[57px] w-full text-lg font-bold"
        variant="solid_primary_red">
        결과보기
      </Button>
    </Form>
  )
}

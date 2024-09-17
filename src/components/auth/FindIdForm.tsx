'use client'

import { z } from 'zod'
import Button from '../shared/Button'
import Form from '../shared/Form'
import { InputField } from './InputField'
import CertifyField from './CertifyField'
import { useRouter } from 'next/navigation'

const findIdSchema = z.object({})

export function FindIdForm() {
  const route = useRouter()
  const onSubmit = (data: any) => {
    console.log(data)
  }

  const handleRoute = () => {
    route.push('/auth/find-pw')
  }
  return (
    <Form
      onSubmit={onSubmit}
      schema={findIdSchema}>
      <Button
        className="mt-6 h-[57px] w-full text-lg font-bold"
        variant="solid_primary_red">
        로그인
      </Button>
      <Button
        className="h-[57px] w-full text-lg font-bold"
        variant="ghost"
        onClick={handleRoute}>
        비밀번호 찾기
      </Button>
    </Form>
  )
}

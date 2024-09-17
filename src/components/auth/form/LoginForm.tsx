'use client'

import Input from '../../shared/Input'

import { z } from 'zod'
import { LoginFormValues } from '@/models/auth'
import Form from '../../shared/Form'
import Button from '../../shared/Button'
import { toast } from 'react-toastify'

/**
 * 유효성검사 에러 메세지 주석
 * 디자인이 안되어 있어서 추후 회의해서
 */

const loginSchema = z.object({
  email: z.string().email('이메일 형식을 입력해주세요.'),
  pw: z
    .string()
    .min(8, { message: '패스워드는 최소 8자 이상이어야 합니다.' })
    .max(15, { message: '패스워드는 최대 15자 이하여야 합니다.' })
    .refine(
      value => {
        // 영문자, 숫자, 특수문자(@) 각각의 정규 표현식
        const hasLetter = /[a-zA-Z]/.test(value)
        const hasNumber = /\d/.test(value)
        const hasSpecialChar = /[@]/.test(value)

        // 세 가지 중 최소 두 가지를 포함해야 함
        const validCombination =
          (hasLetter && hasNumber) ||
          (hasLetter && hasSpecialChar) ||
          (hasNumber && hasSpecialChar)

        return validCombination
      },
      {
        message:
          '영문+숫자+특수문자(@) 조합 중 최소 2가지를 사용해 8~15자리를 입력해주세요.'
      }
    )
})

export function LoginForm() {
  const onSubmit = async (data: LoginFormValues) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/login`, {
        method: 'POST',
        body: JSON.stringify({
          email: data.email,
          pw: data.pw
        }),
        headers: {
          'Access-Control-Allow-Methods': 'true',
          'Access-Control-Allow-Credentials': 'true',
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        // 서버가 에러 응답을 보낸 경우
        const errorData = await response.json()
        toast.error(errorData.data.errorMessage[0], {
          position: 'top-right',
          autoClose: 5000
        })
        console.error('서버 오류:', errorData)
        return
      }

      const result = await response.json()
      console.log('로그인 성공:', result)
      toast.success('로그인 성공!', {
        position: 'top-left',
        autoClose: 3000
      })
      localStorage.setItem('token', result.data.token)
    } catch (error) {
      // 네트워크 오류 또는 다른 문제가 발생한 경우
      console.log(error)
      console.error('요청 실패:', error)
    }
  }

  return (
    <Form
      onSubmit={onSubmit}
      schema={loginSchema}>
      <div className="mb-4 space-y-2">
        <Input
          id="email"
          type="text"
          placeholder="아이디(이메일)"
        />

        <Input
          id="pw"
          type="password"
          placeholder="비밀번호"
        />
      </div>
      <Button
        variant={'solid_primary_red'}
        className="h-[46px] w-full">
        로그인
      </Button>
      <div className="flex items-center justify-end space-x-2">
        <a
          href="/auth/find-id"
          className="text-sm leading-5 text-gray-70">
          아이디 찾기
        </a>
        <div className="h-3 w-[1px] bg-line-neutral"></div>
        <a
          href="find-pw"
          className="text-sm leading-5 text-gray-70">
          비밀번호 찾기
        </a>
      </div>
    </Form>
  )
}

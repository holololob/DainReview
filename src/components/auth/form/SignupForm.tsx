'use client'

import Agreement from '../../shared/Agreement'
import Button from '../../shared/Button'
import { Label } from '../../shared/Label'
import CertifyField from '../CertifyField'
import GenderSelect from '../GenderSelect'
import { InputField } from '../InputField'
import Input from '../../shared/Input'
import Form from '../../shared/Form'
import { z } from 'zod'

import ProfileImage from '@/assets/icons/auth/ProfileImage.svg'
import CameraProfile from '@/assets/icons/auth/CameraProfile.svg'

import SnsLinks from '../SnsLinks'
import SelectSource from '../SelectSource'
import AddressSearch from '../AddressSearch'
import Modal from '../../shared/Modal'
import { useSearchModalStore } from '@/store'
import SignUpDatePicker from '../SignUpDatePicker'
import { useState } from 'react'

const userSchema: z.ZodSchema = z.object({
  email: z.string().email({ message: '이메일 형식을 입력해주세요.' }),
  pw: z
    .string()
    .min(8, { message: '패스워드는 최소 8자 이상이어야 합니다.' })
    .max(15)
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
    ),
  name: z.string().min(1, { message: '이름을 입력해주세요.' }),
  phone: z.string().min(10, { message: '10자리 이상 입력해주세요!' }),
  address: z.string(),
  nickname: z.string(),
  addressDetail: z.string(),
  birthdate: z.string(), // 날짜 형식 검사가 필요할 경우 refine 사용
  blog: z.string().url(),
  gender: z.number({ message: '성별을 선택해주세요' }).int(), // 정수형을 나타내며, 선택적 필드로 설정
  instagram: z.string(),
  other: z.string(),
  postalCode: z.string(),
  profile: z.string(), // 파일 업로드의 경우, URL로 처리하거나 파일 핸들링 방식 설정 필요
  signupSource: z.string(),
  tiktok: z.string(),
  youtube: z.string()
})

const validateEmail = async (email: string) => {
  try {
    const response = await fetch(
      'https://review-server.dain-ad.kr/api/email-verification',
      {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Methods': 'true',
          'Access-Control-Allow-Credentials': 'true',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      }
    )
    const result = await response.json()
    if (result.isDuplicate) {
      return { isValid: false, message: '이미 사용 중인 이메일입니다.' }
    } else {
      return { isValid: true, message: '이메일 중복확인 완료' }
    }
  } catch (error) {
    return { isValid: false, message: '이메일 확인 중 오류가 발생했습니다.' }
  }
}

const validateNumber = async (number: string) => {
  try {
    const response = await fetch(
      'https://review-server.dain-ad.kr/api/email-verification',
      {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Methods': 'true',
          'Access-Control-Allow-Credentials': 'true',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ number })
      }
    )
    const result = await response.json()
    console.log(result)
    if (result.isDuplicate) {
      return { isValid: false, message: '이미 사용 중인 번호입니다.' }
    } else {
      return { isValid: true, message: '번호인증 완료' }
    }
  } catch (error) {
    return { isValid: false, message: '번호 확인 중 오류가 발생했습니다.' }
  }
}

export function SignupForm() {
  const [valid, setValid] = useState({
    email: false,
    phone: false
  })

  // 이메일, 전화번호가 모두 유효한지 확인
  const isFormValid = valid.email && valid.phone

  // 이메일 중복검사 함수
  const handleEmailValidation = async (
    email: string
  ): Promise<{ isValid: boolean | null; message: string }> => {
    const response = await validateEmail(email)
    setValid(prevValues => ({
      ...prevValues,
      email: true
    }))
    console.log('handleEmailValidation', response)
    return response
  }

  // 전화번호 중복검사 함수
  const handlePhoneValidation = async (
    phone: string
  ): Promise<{ isValid: boolean | null; message: string }> => {
    const response = await validateNumber(phone)
    setValid(prevValues => ({
      ...prevValues,
      phone: true
    }))
    return response
  }

  const onSubmit = (data: z.infer<typeof userSchema>) => {
    console.log('SignupForm', data)
  }

  return (
    <Form
      onSubmit={onSubmit}
      schema={userSchema}>
      {/* 추가내용 1 */}
      <div className="mb-9 space-y-2 border-2 bg-white px-10 py-10">
        <CertifyField
          id="email"
          name="아이디(이메일)"
          placeholder="사용하실 아이디를 입력해주세요"
          require={true}
          showIcon={true}
          validationFunction={handleEmailValidation}>
          중복확인
        </CertifyField>

        <InputField
          id="pw"
          type="password"
          name="비밀번호"
          require={true}
          placeholder="8자 이상의 영문, 숫자, 특수문자 2가지 이상"
        />

        <InputField
          id="passwordConfirm" // 추가된 필드로 스키마에서 확인 필요
          type="password"
          name="비밀번호 확인"
          require={true}
        />

        <InputField
          id="name"
          type="text"
          name="이름"
          require={true}
          description="실명으로 등록하지 않을 경우 불이익이 있을 수 있습니다."
        />

        <CertifyField
          id="phone"
          name="전화번호"
          placeholder="‘-’ 없이 숫자만 작성"
          require={true}
          showIcon={true}
          validationFunction={handlePhoneValidation}>
          인증
        </CertifyField>

        <InputField
          id="nickname"
          type="text"
          name="닉네임"
          require={true}
          description="커뮤니티 이용 시 사용할 닉네임을 입력해 주세요."
        />

        <SelectSource />
      </div>

      {/* 추가내용 2 */}
      <div className="mb-10 space-y-2 border-2 bg-white px-10 py-10">
        <Label
          id={'link'}
          name={'SNS'}
          require={true}
          description="1개 이상"
          highlight={true}
        />
        <SnsLinks />
      </div>

      {/* 추가 내용 3 */}
      <div className="mb-10 space-y-6 border-2 bg-white px-10 py-10">
        <AddressSearch />

        <div>
          <Label
            id="profile"
            name="프로필 이미지"
            require={false}
            description="10MB 미만의 이미지를 업로드해주세요."
          />
          <label className="relative block h-[100px] w-[100px]">
            <ProfileImage />
            <div className="absolute bottom-0 right-0">
              <CameraProfile />
            </div>
            <input
              type="file"
              className="hidden"
              id="profile"
            />
          </label>
        </div>
        <div>
          <Label
            id="birthdate"
            name="생년월일"
            require={true}
          />
          {/* datePicker자리 */}
          <SignUpDatePicker />
        </div>
        <GenderSelect id="gender" />
      </div>

      <div className="box-border space-y-4 border-2 bg-white p-10">
        <Agreement>
          <Agreement.Title name="all">전체 동의</Agreement.Title>
          <hr />
          <Agreement.Description
            name="term"
            require={true}
            sub="동의">
            이용약관
          </Agreement.Description>
          <Agreement.Description
            name="privacy"
            require={true}
            sub="동의">
            개인정보 수집 및 이용
          </Agreement.Description>
          <Agreement.Description
            name="marketing"
            require={false}
            sub="동의">
            마케팅 정보 수신
          </Agreement.Description>
        </Agreement>
      </div>

      <div className="my-10">
        <Button
          type="submit"
          variant={
            !isFormValid === true ? 'solid_secondary' : 'solid_primary_red'
          }
          className="h-[57px] w-full"
          disable={!isFormValid}>
          회원가입
        </Button>
      </div>
    </Form>
  )
}

'use client'

import Button from '../../shared/Button'
import { Label } from '../../shared/Label'
// import CertifyField from './CertifyField'

import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import InputField from '../modify/InputField'

import AddressSearch from '../modify/AddressSearch'
import CertifyField from '../modify/CertifyField'
import GenderSelect from '../modify/GenderSelect'
import ModifyDatePicker from '../modify/ModifyDatePicker'
import SnsLinks from '../modify/SnsLinks'
import Profile from '../Profile'

const userSchema = z.object({
  address: z.string().optional(),
  addressDetail: z.string().optional(),
  birthdate: z.string().optional(), // 날짜 형식 검사가 필요할 경우 refine 사용
  blog: z.string().url().optional(),
  email: z.string().email().optional(),
  gender: z.number().int().optional(), // 정수형을 나타내며, 선택적 필드로 설정
  instagram: z.string().optional(),
  name: z.string().min(1, { message: '이름을 입력해주세요.' }),
  nickname: z.string().optional(),
  other: z.string().optional(),
  phone: z.string().optional(), // 전화번호 형식 검사가 필요할 경우 refine 사용
  postalCode: z.string().optional(),
  profile: z.string().optional(), // 파일 업로드의 경우, URL로 처리하거나 파일 핸들링 방식 설정 필요
  pw: z
    .string()
    .min(8, { message: '패스워드는 최소 8자 이상이어야 합니다.' })
    .max(15),
  passwordConfirm: z
    .string()
    .min(8, { message: '패스워드는 최소 8자 이상이어야 합니다.' })
    .max(15),
  signupSource: z.string().optional(),
  tiktok: z.string().optional(),
  youtube: z.string().optional()
})

export type IFormInput = z.infer<typeof userSchema>

function ModifyMyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control
  } = useForm<IFormInput>({
    resolver: zodResolver(userSchema)
    // defaultValues: {}
  })

  const phoneValidation = async (value: string) => {
    // 여기에 전화번호 유효성 검사 로직을 추가하세요
    if (value === '1234567890') {
      return { isValid: true, message: '유효한 전화번호입니다.' }
    } else {
      return { isValid: false, message: '유효하지 않은 전화번호입니다.' }
    }
  }

  const onSubmit = (data: IFormInput) => {
    console.log('submit', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-6">
        <InputField
          id={'email'}
          // value="thdtjdgml415@naver.com"
          type={'text'}
          name={'이메일(아이디)'}
          placeholder={'이메일 입력'}
          require={true}
          description={''}
          // disable={true}
          register={register('email')}
          errors={errors}
        />
        <InputField
          id="pw"
          type="password"
          name="비밀번호"
          placeholder="8자 이상의 영문, 숫자, 특수문자 2가지 이상"
          require={true}
          register={register('pw')}
          errors={errors}
          description={''}
        />

        <InputField
          id="passwordConfirm"
          type="password"
          name="새 비밀번호 확인"
          require={true}
          register={register('passwordConfirm')}
          errors={errors}
          placeholder={''}
          description={''}
        />

        <InputField
          id="name"
          type="text"
          name="이름"
          require={true}
          description="실명으로 등록하지 않을 경우 불이익이 있을 수 있습니다."
          register={register('name')}
          errors={errors}
          placeholder={''}
        />
        <CertifyField
          id="phone"
          name="전화번호"
          placeholder="전화번호 입력"
          require={true}
          description=""
          showIcon={true}
          validationFunction={phoneValidation}
          register={register('phone')}
          errors={errors}
          setValue={setValue}
          watch={watch}>
          인증
        </CertifyField>

        <CertifyField
          id="nickname"
          name="닉네임"
          placeholder="닉네임"
          require={true}
          description=""
          showIcon={true}
          validationFunction={phoneValidation}
          register={register('nickname')}
          errors={errors}
          setValue={setValue}
          watch={watch}>
          중복확인
        </CertifyField>
        <div>
          <div className="my-[108px]">
            <Label
              id={'link'}
              name={'SNS'}
              require={true}
              description="1개 이상"
              highlight={true}
            />
            <SnsLinks />
          </div>
        </div>

        <AddressSearch
          setValue={setValue}
          control={control}
          register={register}
          description={'체험단 응모 시 사용할 주소를 입력해 주세요.'}
          substring={'주소를 설정하면 주변 체험단을 추천해드립니다.'}
        />
        <div>
          <Profile
            name={'profile'}
            control={control}
            label={'profile'}
          />
        </div>
        <div>
          <Label
            id={'birthdate'}
            name={'생년월일'}
            require={false}
          />
          <ModifyDatePicker control={control} />
        </div>

        <GenderSelect
          id={'gender'}
          errors={errors}
          setValue={setValue}
        />
        <div className="space-y-3">
          <div className="my-32 flex w-full flex-col">
            <Button
              type="submit"
              variant="solid_primary_red"
              className="mb-8 h-[57px] text-lg font-[700]">
              저장
            </Button>
            <Button
              variant="ghost"
              className="h-[57px] text-lg font-[700]">
              회원탈퇴
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ModifyMyForm

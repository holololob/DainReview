'use client'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Upload,
  Checkbox,
  Row,
  Col
} from 'antd'
import { UploadOutlined, CameraOutlined } from '@ant-design/icons'

const { Option } = Select

const userSchema = z.object({
  email: z.string().email({ message: '이메일 형식을 입력해주세요.' }),
  pw: z
    .string()
    .min(8, { message: '패스워드는 최소 8자 이상이어야 합니다.' })
    .refine(
      value => {
        const hasLetter = /[a-zA-Z]/.test(value)
        const hasNumber = /\d/.test(value)
        const hasSpecialChar = /[@]/.test(value)
        return (
          (hasLetter && hasNumber) ||
          (hasLetter && hasSpecialChar) ||
          (hasNumber && hasSpecialChar)
        )
      },
      {
        message:
          '영문+숫자+특수문자(@) 조합 중 최소 2가지를 사용해 8~15자리를 입력해주세요.'
      }
    ),
  passwordConfirm: z.string(),
  name: z.string().min(1, { message: '이름을 입력해주세요.' }),
  phone: z.string().optional(),
  nickname: z.string().optional(),
  signupSource: z.string().optional(),
  birthdate: z.string().optional(),
  profile: z.string().optional(),
  gender: z.string().optional(),
  terms: z.boolean().refine(value => value === true, {
    message: '필수 약관에 동의해야 합니다.'
  }),
  privacy: z.boolean().refine(value => value === true, {
    message: '개인정보 수집 및 이용에 동의해야 합니다.'
  }),
  marketing: z.boolean().optional()
})

export function SignupForm() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(userSchema)
  })

  const onSubmit = data => {
    console.log('SignupForm', data)
  }

  return (
    <Form
      onFinish={handleSubmit(onSubmit)}
      layout="vertical">
      {/* Email Field */}
      <div className="border-2 p-10">
        <Form.Item
          style={{ fontFamily: 'Pretandard', fontWeight: 700 }}
          className="font-boldx"
          label="아이디(이메일)"
          validateStatus={errors.email ? 'error' : ''}
          help={errors.email?.message}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="이메일"
                className="h-10 font-light"
              />
            )}
          />
        </Form.Item>

        {/* Password Fields */}
        <Form.Item
          className="font-bold"
          label="비밀번호"
          validateStatus={errors.pw ? 'error' : ''}
          help={errors.pw?.message}>
          <Controller
            name="pw"
            control={control}
            render={({ field }) => (
              <Input.Password
                {...field}
                placeholder="8자 이상의 영문, 숫자, 특수문자 2가지 이상"
                className="h-10 font-light"
              />
            )}
          />
        </Form.Item>

        <Form.Item
          className="font-bold"
          label="비밀번호 확인"
          validateStatus={errors.passwordConfirm ? 'error' : ''}
          help={errors.passwordConfirm?.message}>
          <Controller
            name="passwordConfirm"
            control={control}
            render={({ field }) => (
              <Input.Password
                {...field}
                placeholder="비밀번호 확인"
                className="h-10 font-light"
              />
            )}
          />
        </Form.Item>

        {/* Name Field */}
        <Form.Item
          className="font-bold"
          label="이름"
          validateStatus={errors.name ? 'error' : ''}
          help={errors.name?.message}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="이름"
                className="h-10 font-light"
              />
            )}
          />
        </Form.Item>

        {/* Phone Number */}
        <Form.Item
          className="font-bold"
          label="전화번호"
          validateStatus={errors.phone ? 'error' : ''}
          help={errors.phone?.message}>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="전화번호"
                className="h-10 font-light"
              />
            )}
          />
        </Form.Item>

        {/* Nickname */}
        <Form.Item
          className="font-bold"
          label="닉네임"
          validateStatus={errors.nickname ? 'error' : ''}
          help={errors.nickname?.message}>
          <Controller
            name="nickname"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="닉네임"
                className="h-10 font-light"
              />
            )}
          />
        </Form.Item>

        {/* Signup Source */}
        <Form.Item
          className="font-bold"
          label="가입경로"
          validateStatus={errors.signupSource ? 'error' : ''}
          help={errors.signupSource?.message}>
          <Controller
            name="signupSource"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                placeholder="선택">
                <Option value="search">검색</Option>
                <Option value="sns">SNS</Option>
                <Option value="friend">지인 소개</Option>
              </Select>
            )}
          />
        </Form.Item>
      </div>
      {/* SNS Links - Placeholder for your SNSLinks component */}
      <Form.Item
        className="font-bold"
        label="SNS * 1개 이상">
        {/* Add your SNSLinks component here */}
      </Form.Item>

      {/* Address Field - Placeholder for your AddressField component */}
      <Form.Item
        className="font-bold"
        label="주소">
        {/* Add your AddressField component here */}
      </Form.Item>

      {/* Profile Image Upload */}
      <Form.Item
        className="font-bold"
        label="프로필 이미지">
        <Upload>
          <Button icon={<UploadOutlined />}>이미지 업로드</Button>
        </Upload>
      </Form.Item>

      {/* Birthdate */}
      <Form.Item
        className="font-bold"
        label="생년월일"
        validateStatus={errors.birthdate ? 'error' : ''}
        help={errors.birthdate?.message}>
        <Controller
          name="birthdate"
          control={control}
          render={({ field }) => (
            <DatePicker
              {...field}
              style={{ width: '100%' }}
              className="h-10 font-light"
            />
          )}
        />
      </Form.Item>

      {/* Gender */}
      <Form.Item
        className="font-bold"
        label="성별">
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <Row gutter={8}>
              <Col span={12}>
                <Button
                  className="h-10 font-light"
                  block
                  {...field}
                  value="male"
                  type={field.value === 'male' ? 'primary' : 'default'}>
                  남성
                </Button>
              </Col>
              <Col span={12}>
                <Button
                  block
                  {...field}
                  value="female"
                  type={field.value === 'female' ? 'primary' : 'default'}>
                  여성
                </Button>
              </Col>
            </Row>
          )}
        />
      </Form.Item>

      {/* Agreement Section */}
      <Form.Item className="font-bold">
        <Controller
          name="terms"
          control={control}
          render={({ field }) => (
            <Checkbox {...field}>이용약관 동의 (필수)</Checkbox>
          )}
        />
        className='font-light h-10'
        {errors.terms && (
          <p className="ant-form-explain">{errors.terms.message}</p>
        )}
      </Form.Item>

      <Form.Item className="font-bold">
        <Controller
          name="privacy"
          control={control}
          render={({ field }) => (
            <Checkbox {...field}>개인정보 수집 및 이용 동의 (필수)</Checkbox>
          )}
        />
        className='font-light h-10'
        {errors.privacy && (
          <p className="ant-form-explain">{errors.privacy.message}</p>
        )}
      </Form.Item>

      <Form.Item className="font-bold">
        <Controller
          name="marketing"
          control={control}
          render={({ field }) => (
            <Checkbox {...field}>마케팅 정보 수신 동의 (선택)</Checkbox>
          )}
        />
        className='font-light h-10'
      </Form.Item>

      {/* Submit Button */}
      <Button
        type="primary"
        htmlType="submit"
        block>
        회원가입
      </Button>
    </Form>
  )
}

export default SignupForm

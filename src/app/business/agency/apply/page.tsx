'use client'

import React from 'react'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import PageTitle from '@/components/shared/PageTitle'
import { InputField } from '@/components/auth/InputField'
import CertifyField from '@/components/auth/CertifyField'
import Form from '@/components/shared/Form'
import Input from '@/components/shared/Input'
import ImagePreviewer from '@/components/review/ImagePreviewer'
import { z } from 'zod'

// 대행사 신청: 사업자의 대행사 신청 페이지
// 홈 - 마이페이지(사업자) - 대행사 신청

const schema = z.object({}) // 빈 객체 스키마 (유효성 검사 없음)
const onSubmit = (data: any) => {
  console.log('Form submitted:', data)
}

const onFileSelect = (files: File[]) => {
  console.log('Selected files:', files)
}

const page = () => {
  return (
    <main>
      <Header
        isLogin
        isOnlyBackButton
      />
      <PageTitle
        title="대행사 신청"
        // subtitle=""
        alignment="center"
      />
      <div className="m-auto flex w-full max-w-[1920px] flex-col px-[56px]">
        <div className="my-[80px] flex h-[256px] w-full max-w-[690px] flex-col justify-between rounded-[24px] bg-gradient-to-r from-[#FFECEE] to-[#FED9E2] py-[66px] pl-[64px]">
          <h2 className="text-display-2 font-[700] text-gray-90">
            대행사 인증하면 체험단을 무제한으로
          </h2>
          <h4 className="text-heading-4 font-[300] text-gray-60">
            일반 사업주 회원은 체험단을 최대 5개, <br />
            대행사 사업주 회원은 무제한으로 체험단을 등록할 수 있어요
          </h4>
        </div>
        <Form
          onSubmit={onSubmit}
          schema={schema}>
          <div className="flex flex-col justify-center gap-y-4">
            <InputField
              id="agency"
              type="text"
              name="상호명"
              require={true}
              placeholder=""
            />

            <InputField
              id="agency"
              type="text"
              name="사업자 등록번호"
              require={true}
              placeholder="‘-’ 없이 숫자만 작성"
            />

            <InputField
              id="agency"
              type="text"
              name="대표자명"
              require={true}
              placeholder=""
            />
            <div className="mb-6 space-y-2">
              <CertifyField
                id="address"
                name="사업장 주소"
                placeholder="우편번호"
                // description=""
                require={true}>
                검색
              </CertifyField>
              <Input
                id={'addressDetail1'}
                type={'text'}
                placeholder="기본 주소"
              />
              <Input
                id={'addressDetail2'}
                type={'text'}
                placeholder="상세주소"
              />
              <h1>파일 선택</h1>
              <ImagePreviewer
                onFileSelect={onFileSelect}
                maxFiles={1}
                maxSize={10}
              />
            </div>

            <button
              className="mb-[32px] w-full max-w-[216px] rounded-[4px] bg-red-main px-[20px] py-[12px] text-gray-0"
              type="submit"
              // disabled={isSubmitDisabled}
            >
              등록
            </button>
          </div>
        </Form>
      </div>
      <Footer />
    </main>
  )
}

export default page

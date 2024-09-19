'use client'

import React, { useState } from 'react'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import PageTitle from '@/components/shared/PageTitle'
import ImagePreviewer from '@/components/review/ImagePreviewer'
import BlogIcon from '@/assets/icons/review/blog.svg'
import PointIcon from '@/assets/icons/review/point.svg'

const ExCampaignImage = '/img/campaign.png'
const ExampleImage = '/img/example.png'

// 리뷰 등록: 인플루언서의 체험단 리뷰 등록 및 결과 보고 작성 페이지
// 홈 - 마이페이지(인플루언서) - 리뷰 등록

const Page = () => {
  const [isAgreed, setIsAgreed] = useState(false)
  const [files, setFiles] = useState<File[]>([])

  const handleFileSelect = (selectedFiles: File[]) => {
    setFiles(selectedFiles)
  }

  const handleAgreementChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsAgreed(event.target.checked)
  }

  const isSubmitDisabled = !isAgreed || files.length === 0

  return (
    <main>
      <Header isLogin />
      <PageTitle
        title="리뷰 등록"
        alignment="center"
      />
      <div className="m-auto flex w-full max-w-[1920px] flex-col px-[56px]">
        {/* contents */}
        <div className="m-auto mb-[200px] flex w-full max-w-[1400px] flex-col items-center justify-center lg:flex-row lg:items-start">
          {/* 일단 하드코딩함. 카드 컴포넌트로 교체 예정 */}
          <div className="my-[40px] flex size-full max-h-[494px] max-w-[453px] flex-col items-center justify-center rounded-[8px] bg-background-gray p-[24px]">
            <img
              src={ExCampaignImage}
              alt="Example Campaign"
            />
            <h4 className="mb-[14px] mt-[24px] w-full text-left text-heading-4 font-[700]">
              다인카페 체험단 모집합니다
            </h4>
            <p className="mb-[24px] w-full text-body-2 text-gray-70">
              음료 메뉴 2잔 + 디저트 메뉴 1종 (선택 가능) + 애견 동반 입장료
              무료 (매너벨트 1개 포함)
            </p>
            <hr className="w-full border-[1px] border-line-neutral" />
            <div className="my-[17px] flex">
              <div className="mr-[16px] flex bg-gray-5">
                <PointIcon />
                <p className="pl-[2px] text-body-2 text-gray-70">100,000 P</p>
              </div>
              <div className="mr-[16px] flex">
                <BlogIcon />
                <p className="pl-[4px] text-body-2 text-gray-70">
                  네이버 블로그
                </p>
              </div>
              <div className="mr-[16px] flex text-body-2 text-gray-70">
                방문형/맛집
              </div>
            </div>
            <hr className="w-full border-[1px] border-line-neutral" />
          </div>
          <div className="ml-[20px] mt-[40px] w-full max-w-[927px]">
            <form>
              <h4 className="text-body-1 font-[800]">
                리뷰 URL<strong className="text-red-main">*</strong>
              </h4>
              <p className="mb-[2px] text-body-2 text-gray-60">
                플랫폼에 작성한 리뷰 URL을 입력해 주세요
              </p>
              <input
                required
                maxLength={300}
                className="mb-[26px] h-[38px] w-full rounded-[4px] border border-line-normal pl-[12px]"
              />
              <h4 className="text-body-1 font-[800]">
                파일 선택<strong className="text-red-main">*</strong>
              </h4>
              <p className="mb-[2px] text-body-2 text-gray-60">
                플랫폼에서 본인의 게시물이 나타나는 화면의 캡처 파일을 첨부해
                주세요
                <br />
                10MB 이하의 이미지 파일 10개까지 업로드 가능합니다
              </p>
              <ImagePreviewer
                onFileSelect={handleFileSelect}
                maxFiles={10}
                maxSize={10}
              />
              <p className="my-[5px] text-body-2 text-gray-60">
                <strong className="text-gray-60">예시화면</strong>
                &nbsp;&nbsp;키워드로 검색 시 검색되는 본인의 게시물을 캡처해
                주세요
              </p>
              <img
                src={ExampleImage}
                alt="Example Image"
              />
              <div className="my-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isAgreed}
                    onChange={handleAgreementChange}
                    className="mr-2"
                  />
                  <p className="text-body-2">
                    <span className="text-gray-90 underline">
                      개인정보 수집 및 이용
                    </span>{' '}
                    <span className="">동의</span>{' '}
                    <span className="text-gray-60">(필수)</span>
                  </p>
                </label>
              </div>
              <button
                className="mb-[32px] w-full cursor-pointer rounded-[4px] bg-red-main px-[20px] py-[12px] text-white"
                type="submit"
                disabled={isSubmitDisabled}>
                제출
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Page

'use client'

import React, { useState } from 'react'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import PageTitle from '@/components/shared/PageTitle'
import ImagePreviewer from '@/components/review/ImagePreviewer'
import TextareaCounter from '@/components/campaign/TextareaCounter'

// 체험단 등록: 사업자의 체험단 모집 작성 페이지
// 방문형·포장형으로 구분
// 홈 - 마이페이지(사업자) - 체험단 모집 - 방문형 선택
// 홈 - 마이페이지(사업자) - 체험단 모집 - 구매형/배송형 선택

const onFileSelect = (files: File[]) => {
  console.log('Selected files:', files)
}

const page = () => {
  return (
    <main>
      <Header isLogin />
      <PageTitle
        title="체험단 등록"
        // subtitle=""
        alignment="center"
      />
      <div className="m-auto flex w-full max-w-[1920px] flex-col px-[56px]">
        <form className="m-auto flex w-full max-w-[691px] flex-col bg-white py-32">
          <section className="mb-[100px]">
            <div className="mb-[40px]">
              <h3 className="mb-[12px] text-heading-3 font-[700] text-gray-90">
                광고 영역
              </h3>
              <h5 className="text-heading-5 font-[500] text-gray-60">
                광고를 원하는 플랫폼, 유형, 카테고리를 선택해 주세요
              </h5>
            </div>
            {/* Flexbox 사용하여 반응형으로 배치 */}
            <div className="flex w-full flex-col items-start justify-between space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              <div className="w-full flex-1">
                <p className="mb-[8px] text-body-1 font-[700] text-gray-80">
                  플랫폼
                </p>
                <select className="mt-2 w-full rounded-md border border-gray-300 p-2 text-gray-700">
                  <option value="">선택</option>
                  <option value="naver blog">블로그</option>
                  <option value="instagram">인스타그램</option>
                  <option value="youtube">유튜브</option>
                  <option value="tiktok">틱톡</option>
                  <option value="reels">릴스</option>
                  <option value="shorts">쇼츠</option>
                </select>
              </div>
              <div className="w-full flex-1">
                <p className="mb-[8px] text-body-1 font-[700] text-gray-80">
                  유형
                </p>
                <select className="mt-2 w-full rounded-md border border-gray-300 p-2 text-gray-700">
                  <option value="">선택</option>
                  <option value="visit">방문형</option>
                  <option value="takeout">포장형</option>
                  <option value="delivery">배송형</option>
                </select>
              </div>
              <div className="w-full flex-1">
                <p className="mb-[8px] text-body-1 font-[700] text-gray-80">
                  카테고리
                </p>
                <select className="mt-2 w-full rounded-md border border-gray-300 p-2 text-gray-700">
                  <option value="">선택</option>
                  <option value="food">음식</option>
                  <option value="beauty">뷰티</option>
                  <option value="fashion">패션</option>
                </select>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="mb-[32px] mt-[80px] w-full max-w-[216px] rounded-[4px] border border-gray-80 bg-gray-0 px-[20px] py-[12px] text-body-1 font-[700] text-gray-80">
                다음
              </button>
            </div>
          </section>

          <section className="mb-[100px]">
            <div className="mb-[40px]">
              <h3 className="mb-[12px] text-heading-3 font-[700] text-gray-90">
                상호 정보
              </h3>
              <h5 className="text-heading-5 font-[500] text-gray-60">
                상호명과 썸네일을 등록해 주세요
              </h5>
            </div>
            <p className="mb-[8px] text-body-1 font-[700] text-gray-80">
              상호명
            </p>
            <input
              className="mb-[26px] h-[40px] w-full rounded-[4px] border border-line-normal pl-[12px]"
              required
            />
            <p className="mb-[8px] text-body-1 font-[700] text-gray-80">
              썸네일
            </p>
            <p className="text-body-2 font-[300] text-gray-60">
              10MB 이하 이미지 파일 1개를 첨부해 주세요
            </p>
            <ImagePreviewer
              onFileSelect={onFileSelect}
              maxFiles={1}
              maxSize={10}
            />
            <div className="flex justify-center">
              <button className="mb-[32px] mt-[80px] w-full max-w-[216px] rounded-[4px] border border-gray-80 bg-gray-0 px-[20px] py-[12px] text-body-1 font-[700] text-gray-80">
                다음
              </button>
            </div>
          </section>
          <section className="mb-[100px]">
            <div className="mb-[40px]">
              <h3 className="mb-[12px] text-heading-3 font-[700] text-gray-90">
                제공 내역
              </h3>
              <h5 className="text-heading-5 font-[500] text-gray-60">
                인플루언서에게 제공할 서비스 항목을 입력해 주세요
              </h5>
            </div>
            <p className="mb-[8px] text-body-1 font-[700] text-gray-80">
              서비스 항목
            </p>
            <textarea
              placeholder="서비스 항목을 100자 이내로 입력해 주세요"
              maxLength={100}
              className="h-[167px] w-full rounded-[4px] border border-line-normal p-[9px] pl-[12px]"
              required></textarea>
            {/* 글자수 표시하는 함수 */}
            <div className="flex justify-end">
              <p className="text-caption-1 font-[300] text-gray-30"> 0 / 100</p>
            </div>
            <div className="flex justify-center">
              <button className="mb-[32px] mt-[80px] w-full max-w-[216px] rounded-[4px] border border-gray-80 bg-gray-0 px-[20px] py-[12px] text-body-1 font-[700] text-gray-80">
                다음
              </button>
            </div>
          </section>
          <section className="mb-[100px]"></section>

          <section className="mb-[100px]">
            <div className="mb-[40px]">
              <h3 className="mb-[12px] text-heading-3 font-[700] text-gray-90">
                주소
              </h3>
              <h5 className="text-heading-5 font-[500] text-gray-60">
                방문 체험이 이루어질 장소의 주소를 입력해 주세요
              </h5>
            </div>
            <p className="mb-[8px] text-body-1 font-[700] text-gray-80">
              방문 주소
            </p>
            {/* 주소 검색하는 Input */}
            <div className="flex space-x-[4px]">
              <input
                placeholder="우편번호"
                className="h-[40px] w-full max-w-[613px] rounded-[4px] border border-line-normal pl-[12px]"
                required
              />
              <button
                type="button"
                className="h-[40px] w-[74px] rounded-[4px] border border-gray-90 bg-gray-90 text-body-2 font-[700] text-gray-0">
                검색
              </button>
            </div>
            <input
              placeholder="기본 주소"
              className="h-[40px] w-full rounded-[4px] border border-line-normal pl-[12px]"
              required
            />
            <input
              placeholder="상세 주소"
              className="h-[40px] w-full rounded-[4px] border border-line-normal pl-[12px]"
            />
            <div className="flex justify-center">
              <button className="mb-[32px] mt-[80px] w-full max-w-[216px] rounded-[4px] border border-gray-80 bg-gray-0 px-[20px] py-[12px] text-body-1 font-[700] text-gray-80">
                다음
              </button>
            </div>
          </section>
          <section className="mb-[100px]">
            <div className="mb-[40px]">
              <h3 className="mb-[12px] text-heading-3 font-[700] text-gray-90">
                체험 일정
              </h3>
              <h5 className="text-heading-5 font-[500] text-gray-60">
                체험 일정을 조율할 수 있는 연락처와 요일, 시간을 입력해 주세요
              </h5>
            </div>
            <p className="mb-[8px] text-body-1 font-[700] text-gray-80">
              연락처
            </p>
            <input
              placeholder="‘-’ 없이 숫자만 작성"
              className="mb-[26px] h-[40px] w-full rounded-[4px] border border-line-normal pl-[12px]"
              required
            />
            <div className="mb-[40px]">
              <div className="flex w-full flex-wrap items-center justify-between">
                {/* 일월화수목금토 체크박스 */}
                <div className="">
                  <p className="mb-[8px] text-body-1 font-[700] text-gray-80">
                    체험 가능 요일{' '}
                    <span className="justify-center text-body-2 font-[700] text-status-destructive">
                      * 1개 이상
                    </span>
                  </p>
                  <div className="mt-[8px] flex h-[90px] min-w-[328px] max-w-[335px] flex-1 items-center justify-around space-x-2 rounded-lg border px-[11px]">
                    <label className="flex flex-col items-center">
                      <span>일</span>
                      <input type="checkbox" />
                    </label>
                    <label className="flex flex-col items-center">
                      <span>월</span>
                      <input type="checkbox" />
                    </label>
                    <label className="flex flex-col items-center">
                      <span>화</span>
                      <input type="checkbox" />
                    </label>
                    <label className="flex flex-col items-center">
                      <span>수</span>
                      <input type="checkbox" />
                    </label>
                    <label className="flex flex-col items-center">
                      <span>목</span>
                      <input type="checkbox" />
                    </label>
                    <label className="flex flex-col items-center">
                      <span>금</span>
                      <input type="checkbox" />
                    </label>
                    <label className="flex flex-col items-center">
                      <span>토</span>
                      <input type="checkbox" />
                    </label>
                  </div>
                </div>
                {/* 일월화수목금토 체크박스 */}
                <div className="">
                  <p className="mb-[8px] text-body-1 font-[700] text-gray-80">
                    체험 불가능 요일
                  </p>
                  <div className="mt-[8px] flex h-[90px] min-w-[328px] max-w-[335px] flex-1 items-center justify-around space-x-2 rounded-lg border px-[11px]"></div>
                </div>
              </div>
            </div>
            <p className="mb-[8px] text-body-1 font-[700] text-gray-80">
              체험 가능 시간
            </p>
            <div className="flex justify-center">
              <button className="mb-[32px] mt-[80px] w-full max-w-[216px] rounded-[4px] border border-gray-80 bg-gray-0 px-[20px] py-[12px] text-body-1 font-[700] text-gray-80">
                다음
              </button>
            </div>
          </section>
          <section className="mb-[100px]">
            <div className="mb-[40px]">
              <h3 className="mb-[12px] text-heading-3 font-[700] text-gray-90">
                사업주 미션
              </h3>
              <h5 className="text-heading-5 font-[500] text-gray-60">
                인플루언서에게 요구하는 사항을 자세히 입력해 주세요
              </h5>
            </div>
            <p className="mb-[8px] text-body-1 font-[700] text-gray-80">
              요구 사항
            </p>
            <TextareaCounter
              maxLength={100}
              placeholder="서비스 항목을 100자 내외로 입력해 주세요"
            />
            <div className="flex justify-center">
              <button className="mb-[32px] mt-[80px] w-full max-w-[216px] rounded-[4px] border border-gray-80 bg-gray-0 px-[20px] py-[12px] text-body-1 font-[700] text-gray-80">
                다음
              </button>
            </div>
          </section>
          <section className="mb-[100px]">
            <div className="mb-[40px]">
              <h3 className="mb-[12px] text-heading-3 font-[700] text-gray-90">
                태그 키워드
              </h3>
              <h5 className="text-heading-5 font-[500] text-gray-60">
                해시태그로 사용할 키워드를 10자 이내로 적어 주세요
              </h5>
            </div>
            <p className="mb-[8px] text-body-1 font-[700] text-gray-80">
              홍보용 키워드
            </p>
            <div className="flex flex-wrap justify-between space-x-[20px]">
              <input
                placeholder="키워드 1"
                className="mb-[26px] h-[40px] w-full flex-1 rounded-[4px] border border-line-normal pl-[12px]"
                required
              />
              <input
                placeholder="키워드 2"
                className="mb-[26px] h-[40px] w-full flex-1 rounded-[4px] border border-line-normal pl-[12px]"
                required
              />
              <input
                placeholder="키워드 3"
                className="mb-[26px] h-[40px] w-full flex-1 rounded-[4px] border border-line-normal pl-[12px]"
                required
              />
            </div>
            <div className="flex justify-center">
              <button className="mb-[32px] mt-[80px] w-full max-w-[216px] rounded-[4px] border border-gray-80 bg-gray-0 px-[20px] py-[12px] text-body-1 font-[700] text-gray-80">
                다음
              </button>
            </div>
          </section>
          <section className="mb-[100px]">
            <div className="mb-[40px]">
              <h3 className="mb-[12px] text-heading-3 font-[700] text-gray-90">
                모집 인원 & 지급 포인트
              </h3>
              <h5 className="text-heading-5 font-[500] text-gray-60">
                모집 인원 수와 지급 포인트를 설정하면 총 사용 포인트가
                계산됩니다
              </h5>
            </div>
            <p className="mb-[8px] text-body-1 font-[700] text-gray-80">
              모집 인원 수
            </p>
            <input
              type="number"
              className="mb-[26px] h-[40px] w-full max-w-[216px] rounded-[4px] border border-line-normal pl-[12px]"
            />
            <p className="mb-[8px] text-body-1 font-[700] text-gray-80">
              포인트 지급
            </p>
            <div>
              <button className="h-[40px] w-[106px] rounded-[4px] border border-line-normal pl-[12px] text-body-2 font-[700]">
                예
              </button>{' '}
              <button className="h-[40px] w-[106px] rounded-[4px] border border-line-normal pl-[12px] text-body-2 font-[700]">
                아니오
              </button>
            </div>
            <input
              placeholder="0 P"
              className="mb-[26px] h-[40px] w-full max-w-[216px] rounded-[4px] border border-line-normal pl-[12px]"
            />
            <p className="text-body-2 font-[300] text-gray-60">
              포인트를 지급할 경우 프리미엄 체험단으로 등록되어 양질의
              인플루언서가 지원할 확률이 높아집니다.
            </p>
            <p className="mb-[8px] text-body-1 font-[700] text-gray-80">
              총 사용 포인트
            </p>
            <p className="text-body-2 font-[300] text-gray-60">
              1인당 지급 포인트 × 모집 인원수 × 수수료 20%
            </p>
            <input
              placeholder="0 P"
              className="mb-[26px] h-[40px] w-full max-w-[216px] rounded-[4px] border border-line-normal pl-[12px]"
            />
          </section>
          <div className="flex justify-center">
            <button
              className="mb-[32px] w-full max-w-[216px] rounded-[4px] bg-red-main px-[20px] py-[12px] text-white"
              type="submit"
              // disabled={isSubmitDisabled}
            >
              등록
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </main>
  )
}

export default page

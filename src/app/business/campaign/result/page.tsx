'user client'

import React from 'react'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import PageTitle from '@/components/shared/PageTitle'
import BlogIcon from '@/assets/icons/review/blog.svg'
import PointIcon from '@/assets/icons/review/point.svg'
import ReportChart from '@/components/campaign/ReportChart'
import Image from 'next/image'

const ExCampaignImage = '/img/campaign.png'
const DefaultImage = '/img/default.png'
const data = [
  {
    id: 'Date',
    color: 'red',
    data: [
      { x: '6/17', y: 0 },
      { x: '6/22', y: 2000 },
      { x: '6/27', y: 2500 },
      { x: '7/2', y: 4000 }
    ]
  }
]
// 체험단 결과 보고서: 사업자가 진행한 체험단 종료 후, 결과 보고서 페이지
// 성과 그래프 포함
// 홈 - 마이페이지(사업자) - 체험단 - 결과 보고서

const page = () => {
  return (
    <main>
      <Header
        isLogin={false}
        subtitle={'결과 보고서'}
        isOnlyBackButton
      />
      <PageTitle
        title="결과 보고서"
        subtitle="진행 중인 캠페인의 성과 및 데이터를 확인할 수 있어요"
        alignment="left"
      />

      <div className="flex w-full max-w-[1920px] flex-col bg-gray-0 px-[16px] lg:bg-background-gray">
        <div className="m-auto mb-[200px] mt-[40px] flex w-full max-w-[1400px] flex-col items-center justify-center lg:flex-row lg:items-start">
          {/* 일단 하드코딩함. 카드 컴포넌트로 교체 예정 */}

          <div className="mb-[40px] flex size-full max-w-[453px] flex-col items-center justify-center rounded-[8px] bg-gray-0 p-[24px] lg:w-[453px]">
            <h5 className="mb-[24px] w-full text-left text-heading-5 font-[700]">
              나의 캠페인
            </h5>
            <Image
              src={ExCampaignImage}
              alt="Example Campaign"
              width={405}
              height={248}
            />
            <h4 className="mb-[14px] mt-[24px] w-full text-left text-heading-4 font-[700]">
              다인카페 체험단 모집합니다
            </h4>
            <p className="mb-[24px] w-full text-body-2 text-gray-70">
              음료 메뉴 2잔 + 디저트 메뉴 1종 (선택 가능) + 애견 동반 입장료
              무료 (매너벨트 1개 포함)
            </p>
            <hr className="w-full border border-line-neutral" />
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
            <hr className="w-full border border-line-neutral" />
          </div>

          <div className="mb-[40px] flex w-full flex-col lg:ml-[40px] lg:max-w-[691px]">
            {/* 화면 너비가 1024px 미만일 때 */}
            <div className="mb-[40px] flex h-[85px] w-full max-w-[992px] items-center justify-center rounded-[4px] bg-gray-5 text-center lg:hidden">
              <div className="mx-[20px] w-[66px]">
                <h4 className="text-body-1 font-[700]">300</h4>
                <p className="text-caption-1 font-[500]">신청자 수</p>
              </div>
              <div className="w-[106px] border-x border-gray-40 px-[20px]">
                <h4 className="text-body-1 font-[700]">3</h4>
                <p className="text-caption-1 font-[500]">모집인원</p>
              </div>
              <div className="mx-[20px] w-[66px]">
                <h4 className="text-body-1 font-[700]">3</h4>
                <p className="text-caption-1 font-[500]">등록된 콘텐츠</p>
              </div>
            </div>
            {/* 화면 너비가 1024px 이상일 때 */}
            <div className="mb-[24px] hidden w-full max-w-[907px] rounded-[4px] bg-gray-0 p-[24px] lg:block">
              <h3 className="text-heading-3 font-[700]">결과</h3>
              <div className="mt-[24px] flex w-full flex-col items-start justify-between space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <div className="flex h-[76px] w-full flex-1 items-center justify-between rounded-[4px] border border-background-gray bg-background-gray px-[40px] py-[24px]">
                  <p className="text-body-1 font-[500]">신청자 수</p>
                  <h4 className="text-heading-4 font-[700]">300</h4>
                </div>
                <div className="flex h-[76px] w-full flex-1 items-center justify-between rounded-[4px] border border-background-gray bg-background-gray px-[40px] py-[24px]">
                  <p className="text-body-1 font-[500]">모집인원</p>
                  <h4 className="text-heading-4 font-[700]">3</h4>
                </div>
                <div className="flex h-[76px] w-full flex-1 items-center justify-between rounded-[4px] border border-background-gray bg-background-gray px-[40px] py-[24px]">
                  <p className="text-body-1 font-[500]">등록된 콘텐츠</p>
                  <h4 className="text-heading-4 font-[700]">3</h4>
                </div>
              </div>
            </div>
            <div className="mb-[24px] w-full rounded-[4px] border border-gray-0 bg-gray-0 lg:p-[24px]">
              <h3 className="text-heading-3 font-[700]">기간별 성과</h3>
              <div className="flex gap-x-[20px] py-[24px]">
                <div className="flex size-full max-h-[117px] min-h-[72px] min-w-[104px] max-w-[273px] flex-col items-center justify-center rounded-[4px] border border-red-30 bg-red-30 p-[12px] sm:px-[40px] sm:py-[24px]">
                  <p className="w-full text-left text-caption-1 font-[700] text-gray-0 lg:text-body-1">
                    총 조회수
                  </p>
                  <h4 className="w-full text-left text-heading-5 font-[700] text-gray-0 lg:text-heading-1">
                    4,000
                  </h4>
                </div>
                <div className="flex size-full max-h-[117px] min-h-[72px] min-w-[104px] max-w-[273px] flex-col items-center justify-center rounded-[4px] border border-background-gray bg-background-gray p-[12px] sm:px-[40px] sm:py-[24px]">
                  <p className="w-full text-left text-caption-1 font-[700] text-gray-80 lg:text-body-1">
                    모바일 조회수
                  </p>
                  <h4 className="w-full text-left text-heading-5 font-[700] text-gray-80 lg:text-heading-1">
                    2,000
                  </h4>
                </div>
                <div className="flex size-full max-h-[117px] min-h-[72px] min-w-[104px] max-w-[273px] flex-col items-center justify-center rounded-[4px] border border-background-gray bg-background-gray p-[12px] sm:px-[40px] sm:py-[24px]">
                  <p className="w-full text-left text-caption-1 font-[700] text-gray-80 lg:text-body-1">
                    PC 조회수
                  </p>
                  <h4 className="w-full text-left text-heading-5 font-[700] text-gray-80 lg:text-heading-1">
                    2,000
                  </h4>
                </div>
              </div>
              <div className="aspect-h-9 aspect-w-16 rounded-[4px] border border-gray-0 bg-gray-0">
                <ReportChart data={data} />
              </div>
            </div>
            <div className="mb-[24px] w-full rounded-[4px] border border-gray-0 bg-gray-0 lg:p-[24px]">
              <h3 className="text-heading-3 font-[700]">플랫폼 노출 결과</h3>

              {/* 날짜 선택 Select */}
              <div className="mt-[24px] flex gap-x-[16px] overflow-x-auto">
                {/* <img
                  src={DefaultImage}
                  alt="DefaultImage"
                />
                <img
                  src={DefaultImage}
                  alt="DefaultImage"
                />
                <img
                  src={DefaultImage}
                  alt="DefaultImage"
                /> */}
                <Image
                  src={DefaultImage}
                  alt="Default Image"
                  width={150}
                  height={150}
                />
                <Image
                  src={DefaultImage}
                  alt="Default Image"
                  width={150}
                  height={150}
                />
                <Image
                  src={DefaultImage}
                  alt="Default Image"
                  width={150}
                  height={150}
                />
              </div>
            </div>
            <div className="mb-[24px] w-full rounded-[16px] border border-gray-0 bg-gray-0 lg:p-[24px]">
              <h3 className="text-heading-3 font-[700]">등록된 콘텐츠</h3>
              <div className="mt-[24px]">
                {/* 등록 콘텐츠 리스트 */}
                <li>1</li>
                <li>1</li>
                <li>1</li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default page

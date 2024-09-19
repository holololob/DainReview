'use client'

import ProfileImage from '@/assets/icons/auth/ProfileImage.svg'
import ProfilePoint from '@/assets/icons/auth/ProfilePoint.svg'
import Button from '@/components/shared/Button'

import Setting from '@/assets/icons/my-profile/Setting.svg'

import Arrow from '@/assets/icons/my-profile/Arrow.svg'
import TabMenu from '@/components/shared/TabMenu'
import Footer from '@/components/shared/Footer'

import StateBoard from '../my-page/StateBoard'
import ConnectedSNS from '../my-page/ConnectedSNS'
import { useState } from 'react'

const data = {
  nickname: '하이파이브',
  point: 0,
  instagram: 'instagram.com/highfive',
  blog: 'blog.naver.com/highfive',
  youtube: 'https://youtube.com/example',
  tiktok: ''
}

const MypageClient = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const handleMouseEnter = () => setModalOpen(true)
  const handleMouseLeave = () => setModalOpen(false)

  return (
    <div className="mx-auto w-full">
      <div className="flex h-[250px] w-full justify-center bg-slate-400 max-lg:bg-white">
        {/* 데스크탑 용 */}
        <section className="relative mt-28 box-border flex h-[430px] w-[1400px] items-center justify-center gap-5 rounded-se-2xl rounded-ss-2xl bg-white p-10 shadow-md max-[1400px]:w-full max-lg:hidden">
          <h3 className="absolute left-10 top-10 text-[1.9rem] font-bold">
            MY 프로필
          </h3>
          <div className="flex flex-row flex-wrap">
            <div className="flex">
              <div className="flex">
                <div className="items-cente flex gap-20">
                  <ProfileImage
                    width={200}
                    height={200}
                  />
                  <div className="flex flex-col">
                    <div className="mb-10">
                      <p className="mb-4 flex text-heading-5 font-[400] text-gray-70">
                        인플루언서
                      </p>
                      <p className="mb-2 text-heading-2 font-[400]">
                        <strong className="text-display-2 font-[700]">
                          {data.nickname}님
                        </strong>
                        의 포인트는
                      </p>
                      <p className="flex items-center text-heading-2">
                        <ProfilePoint
                          width={40}
                          height={40}
                        />
                        <strong className="text-display-2 font-[700] text-red-main">
                          {data.point}
                        </strong>
                        입니다.
                      </p>
                    </div>

                    <div className="flex min-w-[350px] flex-wrap items-center justify-center gap-2">
                      <Button
                        variant="solid_primary"
                        className="h-[57px] w-[170px] text-[18px] font-[700]">
                        포인트 출금하기
                      </Button>
                      <Button
                        variant="solid_secondary"
                        className="h-[57px] w-[170px] text-[18px] font-[700]">
                        내정보 수정하기
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <ConnectedSNS isMobile={false} />
            </div>
          </div>
        </section>

        {/* 모바일 반응형 */}
        <div className="hidden w-full p-4 max-lg:block">
          <div className="rounded-lg bg-white p-6">
            <div className="flex items-center">
              <ProfileImage
                width={50}
                height={50}
              />

              <div className="ml-4">
                <h4 className="text-xs font-[400] text-gray-60">인플루언서</h4>
                <div className="flex items-center gap-1">
                  <h2 className="text-lg font-[700]">{data.nickname}님</h2>
                  <Setting
                    width={17}
                    height={16}
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between rounded-[4px] border-[1px] px-4 py-[10px]">
              <div>
                <p className="mb-3 flex items-center text-sm text-gray-90">
                  <ProfilePoint
                    width={20}
                    height={20}
                  />
                  보유 포인트
                </p>
                <p className="text-lg font-bold">
                  {data.point} <span className="text-lg font-normal">P</span>
                </p>
              </div>
              <button className="rounded-md bg-gray-100 px-6 py-2 text-black">
                출금하기
              </button>
            </div>

            <ConnectedSNS isMobile />
          </div>
        </div>
      </div>
      <div className="mt-36 h-3 w-full bg-line-neutral lg:hidden"></div>

      {/* 프로필 */}
      <div className="z-20 mb-28 mt-6 flex w-[1400px] flex-col justify-center max-[1400px]:w-full lg:my-72">
        <div className="mb-10 mt-12 box-border flex h-20 w-full items-center justify-center bg-red-30 text-center text-[24px] font-[700] leading-[80px] text-white max-lg:hidden">
          다인리뷰 신규 회원이라면🐣? 이용가이드 확인하러가기
          <img
            src="/my-profile/bannerImage.png"
            alt=""
          />
          <Arrow
            width={25}
            height={25}
          />
        </div>

        {/* 테이블 */}
        <StateBoard
          isModalOpen={isModalOpen}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />

        <TabMenu />
      </div>
      <Footer />
    </div>
  )
}

export default MypageClient

import ProfileImage from '@/assets/icons/auth/ProfileImage.svg'
import ProfilePoint from '@/assets/icons/auth/ProfilePoint.svg'
import Button from '@/components/shared/Button'

import SocialInstagramLink from '@/assets/icons/auth/SocialInstagramLink.svg'
import SocialTikTokLink from '@/assets/icons/auth/SocialTikTokLink.svg'
import SocialNaverBlogLink from '@/assets/icons/auth/SocialNaverBlogLink.svg'
import SocialYoutubeLink from '@/assets/icons/auth/SocialYoutubeLink.svg'

import NaverMobile from '@/assets/icons/my-profile/NaverMobile.svg'
import TiktokMobile from '@/assets/icons/my-profile/TiktokMobile.svg'
import YoutubeMobile from '@/assets/icons/my-profile/YoutubeMobile.svg'
import InstagramMobile from '@/assets/icons/my-profile/InstagramMobile.svg'

import Premium from '@/assets/icons/my-profile/Premium.svg'
import Luxury from '@/assets/icons/my-profile/Luxury.svg'
import Penalty from '@/assets/icons/my-profile/Penalty.svg'
import Setting from '@/assets/icons/my-profile/Setting.svg'

import Arrow from '@/assets/icons/my-profile/Arrow.svg'
import TabMenu from '@/components/shared/TabMenu'
import Footer from '@/components/shared/Footer'

import BusinessBoard from '@/components/auth/BusinessBoard'

export default function MyProfile() {
  return (
    <>
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
                          하이파이브님
                        </strong>
                        의 포인트는
                      </p>
                      <p className="flex items-center text-heading-2">
                        <ProfilePoint
                          width={40}
                          height={40}
                        />
                        <strong className="text-display-2 font-[700] text-red-main">
                          430,280
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

              <div className="box-border px-20">
                <h4 className="mb-10 text-[22px] font-bold">
                  다인리뷰와 연결된 SNS
                </h4>
                <ul>
                  <li className="flex items-center gap-2">
                    <div className="top-[10px] flex h-5 w-5 items-center justify-center overflow-hidden rounded-md">
                      <SocialInstagramLink
                        width={20}
                        height={20}
                      />
                    </div>
                    <input
                      id="instagram"
                      type="text"
                      placeholder="instagram.com/highfive"
                      value={'instagram.com/highfive'}
                      className="w-[189px] text-[18px]"
                    />
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="top-[10px] flex h-5 w-5 items-center justify-center overflow-hidden rounded-md">
                      <SocialNaverBlogLink
                        width={20}
                        height={20}
                      />
                    </div>
                    <input
                      id="instagram"
                      type="text"
                      placeholder="instagram.com/highfive"
                      value={'instagram.com/highfive'}
                      className="w-[189px] text-[18px]"
                    />
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="top-[10px] flex h-5 w-5 items-center justify-center overflow-hidden rounded-md">
                      <SocialYoutubeLink
                        width={20}
                        height={20}
                      />
                    </div>
                    <input
                      id="instagram"
                      type="text"
                      placeholder="instagram.com/highfive"
                      value={'instagram.com/highfive'}
                      className="w-[189px] text-[18px]"
                    />
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="top-[10px] flex h-5 w-5 items-center justify-center overflow-hidden rounded-md">
                      <SocialTikTokLink
                        width={20}
                        height={20}
                      />
                    </div>
                    <input
                      id="instagram"
                      type="text"
                      placeholder="instagram.com/highfive"
                      value={'instagram.com/highfive'}
                      className="w-[189px] text-[18px]"
                    />
                  </li>
                </ul>
              </div>
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
                  <h2 className="text-lg font-[700]">하이파이브님</h2>
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
                  457,870 <span className="text-lg font-normal">P</span>
                </p>
              </div>
              <button className="rounded-md bg-gray-100 px-6 py-2 text-black">
                출금하기
              </button>
            </div>
            <div className="mt-6 w-full rounded-[4px] border-[1px] pt-4">
              <h3 className="mb-2 border-b px-2 text-center font-[500] text-black">
                다인리뷰와 연결된 SNS
              </h3>
              <div className="box-border flex items-center justify-around px-2 py-2">
                <div className="flex flex-col items-center gap-4">
                  <InstagramMobile
                    width={20}
                    height={20}
                  />
                  <span className="flex items-center gap-1 rounded-[4px] bg-gray-5 px-1 py-[2px] text-[10px]">
                    프리미어
                    <Premium
                      width={16}
                      height={16}
                    />
                  </span>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <YoutubeMobile
                    width={20}
                    height={20}
                  />
                  <span className="flex items-center gap-1 rounded-[4px] bg-gray-5 px-1 py-[2px] text-[10px]">
                    고급
                    <Luxury
                      width={16}
                      height={16}
                    />
                  </span>
                </div>
                <div className="w text-gray-500">
                  <NaverMobile
                    width={20}
                    height={20}
                  />
                </div>
                <div className="w text-gray-500">
                  <TiktokMobile
                    width={20}
                    height={20}
                  />
                </div>
                <div className="w text-gray-500">
                  <YoutubeMobile
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
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
        {/* <MyActivityDashboard /> */}
        <BusinessBoard />
        <TabMenu />
      </div>
      <Footer />
    </>
  )
}

import SocialInstagramLink from '@/assets/icons/auth/SocialInstagramLink.svg'
import SocialTikTokLink from '@/assets/icons/auth/SocialTikTokLink.svg'
import SocialNaverBlogLink from '@/assets/icons/auth/SocialNaverBlogLink.svg'
import SocialYoutubeLink from '@/assets/icons/auth/SocialYoutubeLink.svg'

import NaverMobile from '@/assets/icons/my-profile/NaverMobile.svg'
import TiktokMobile from '@/assets/icons/my-profile/TiktokMobile.svg'
import YoutubeMobile from '@/assets/icons/my-profile/YoutubeMobile.svg'
import InstagramMobile from '@/assets/icons/my-profile/InstagramMobile.svg'

const data = {
  nickname: '하이파이브',
  point: 0,
  instagram: 'instagram.com/highfive',
  blog: 'blog.naver.com/highfive',
  youtube: 'https://youtube.com/example',
  tiktok: ''
}

interface Props {
  isMobile: boolean
}

const ConnectedSNS = ({ isMobile }: Props) => {
  if (isMobile) {
    return (
      <div className="mt-6 w-full rounded border px-4 py-[10px] lg:hidden">
        <h3 className="mb-2 border-b px-2 font-[500] text-black">
          다인리뷰와 연결된 SNS
        </h3>
        <div className="box-border flex items-center justify-around px-2 py-2">
          <div className="flex flex-col items-center gap-4">
            <InstagramMobile
              width={24}
              height={24}
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <YoutubeMobile
              width={24}
              height={24}
            />
          </div>
          <div className="w text-gray-500">
            <NaverMobile
              width={24}
              height={24}
            />
          </div>
          <div className="w text-gray-500">
            <TiktokMobile
              width={24}
              height={24}
            />
          </div>
          <div className="w text-gray-500">
            <YoutubeMobile
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="box-border hidden px-20 lg:block">
        <h4 className="mb-10 text-[22px] font-bold">다인리뷰와 연결된 SNS</h4>
        <ul className="flex flex-col gap-[10px] text-heading-5 text-gray-80">
          <li className="flex items-center gap-2">
            <span className="top-[10px] flex h-5 w-5 items-center justify-center overflow-hidden rounded-md">
              <SocialInstagramLink
                width={20}
                height={20}
              />
            </span>
            <span className="w-[189px]">
              {data.instagram ? (
                data.instagram
              ) : (
                <span className="text-gray-40">틱톡 계정을 연결해주세요</span>
              )}
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center overflow-hidden rounded-md">
              <SocialNaverBlogLink
                width={20}
                height={20}
              />
            </span>
            <span className="w-[189px]">
              {data.blog ? (
                data.blog
              ) : (
                <span className="text-gray-40">블로그 계정을 연결해주세요</span>
              )}
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="top-[10px] flex h-5 w-5 items-center justify-center overflow-hidden rounded-md">
              <SocialYoutubeLink
                width={20}
                height={20}
              />
            </span>
            <span className="w-[189px]">
              {data.youtube ? (
                data.youtube
              ) : (
                <span className="text-gray-40">유튜브 계정을 연결해주세요</span>
              )}
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="top-[10px] flex h-5 w-5 items-center justify-center overflow-hidden rounded-md">
              <SocialTikTokLink
                width={20}
                height={20}
              />
            </span>
            <span className="w-[189px]">
              {data.tiktok ? (
                data.tiktok
              ) : (
                <span className="text-gray-40">틱톡 계정을 연결해주세요</span>
              )}
            </span>
          </li>
        </ul>
      </div>
    )
  }
}

export default ConnectedSNS

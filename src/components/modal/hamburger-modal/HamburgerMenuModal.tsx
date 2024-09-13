import { useHamburgerModalStore } from '@/store'
import Image from 'next/image'
import ArrowRight from '@/assets/icons/home/mobile/mobile-arrow-right.svg'
import Link from 'next/link'

const HamburgerMenuModal = () => {
  const isLogin = true
  const { HamburderCloseModal } = useHamburgerModalStore()

  const handleLinkClick = () => {
    HamburderCloseModal() // 모달 닫기
  }

  return (
    <div className="fixed inset-0 z-40 bg-black bg-opacity-40">
      <div className="fixed inset-y-0 z-50 min-w-[360px] max-w-[520px] overflow-y-auto bg-white">
        <section className="relative flex h-[186px] flex-col items-center justify-center py-10">
          <button
            onClick={HamburderCloseModal}
            className="absolute right-4 top-4 px-[2px] py-[5px] text-body-1">
            닫기
          </button>
          <Image
            alt="star"
            width={60}
            height={60}
            src="/img/menu-star.png"
            priority
          />
          <div className="py-3 text-body-1 font-bold text-gray-80">
            {isLogin ? (
              <>
                <span>하이파이브</span>
                <span className="font-medium">님 환영합니다</span>
              </>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <button>로그인/회원가입</button>
                <ArrowRight />
              </div>
            )}
          </div>
        </section>

        <section className="px-4 text-body-1 font-medium text-gray-90">
          <Link
            onClick={handleLinkClick}
            href="/campaign">
            <div className="border-b border-line-neutral py-5">체험단</div>
          </Link>
          <div className="border-b border-line-neutral py-5">포인트</div>
          <div>
            <p className="border-b border-line-neutral py-5">게시판</p>
            <ul className="text-body-2 font-normal text-gray-70">
              <Link
                onClick={handleLinkClick}
                href="/board">
                <li className="py-[10px]">공지사항</li>
              </Link>
              <Link
                onClick={handleLinkClick}
                href="/board/community">
                <li className="py-[10px]">커뮤니티</li>
              </Link>
              <li className="border-b border-line-neutral py-[10px]">
                맞팔/서이추
              </li>
            </ul>
          </div>
          <div>
            <p className="border-b border-line-neutral py-5">이용안내</p>
            <ul className="text-body-2 font-normal text-gray-70">
              <li className="py-[10px]">인플루언서 이용안내</li>
              <li className="py-[10px]">사업주 이용안내</li>
              <li className="border-b border-line-neutral py-[10px]">
                등급 안내
              </li>
            </ul>
          </div>
          <Link
            onClick={handleLinkClick}
            href="/business/agency/apply">
            <div className="border-b border-line-neutral py-5">대행사 신청</div>
          </Link>
        </section>
        {isLogin && (
          <button className="text-b1 mb-[34px] mt-10 w-full px-4 text-center text-gray-40">
            로그아웃
          </button>
        )}
      </div>
    </div>
  )
}

export default HamburgerMenuModal

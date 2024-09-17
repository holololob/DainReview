import Link from 'next/link'

interface Props {
  productId?: number
  onClick?: () => void | undefined
  isApplyPage?: boolean
  desktopSize?: boolean
  recruiter?: number
}

const ButtonAndInfo = ({
  productId,
  onClick,
  isApplyPage,
  desktopSize,
  recruiter
}: Props) => {
  return (
    <div className="relative w-full">
      {isApplyPage ? (
        <button
          onClick={onClick}
          className="h-[46px] w-full rounded-md bg-red-main px-4 py-3 text-white"
          type="button">
          신청하기
        </button>
      ) : (
        <Link href={`/product/${productId}/apply`}>
          <button
            className={`h-[46px] w-full rounded-md bg-red-main px-4 py-3 text-white ${desktopSize && 'h-[57px] text-heading-5 font-bold'} `}
            type="button">
            신청하기
          </button>
        </Link>
      )}
      <div
        className={`absolute -top-14 flex w-full justify-center ${desktopSize && '-top-[81px]'} `}>
        <div
          className={`h-[38px] w-[198px] rounded-lg bg-white px-8 py-2 text-black shadow-xl ${desktopSize && 'h-[49px] w-[217px] px-10 py-3'} `}>
          <svg
            className="absolute bottom-[-13px] left-1/2 -translate-x-1/2"
            width="17"
            height="14"
            viewBox="0 0 17 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.5 14L0.705774 0.499999L16.2942 0.5L8.5 14Z"
              fill="white"
            />
          </svg>
          <div className="text-center">
            🔥 신청 <span className="font-bold text-red-main">0</span>
            {' / 모집 '}
            <span className="font-bold text-red-main">{recruiter}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ButtonAndInfo

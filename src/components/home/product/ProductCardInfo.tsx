import { calculateRemainingDays } from '@/utils/calculateRemainingDays'
import PlatformType from './PlatformType'
import ReviewType from './ReviewType'

const ProductCardInfo = ({
  title = '신제품 체험단 모집합니다',
  service = '스킨케어set',
  type = '배송형',
  platform = '인스타그램',
  applicationEndDate = '2024-10-09 00:00:00.0',
  recruiter = 3
}) => {
  const remainingDays = calculateRemainingDays(applicationEndDate)

  let textColor = 'text-gray-70'
  if (remainingDays <= 7) {
    textColor = 'text-red-main'
  }

  return (
    <div className="mt-[4px] flex flex-col gap-1 lg:mt-[12px] lg:gap-3">
      <div>
        <p className="text-caption-1 text-gray-60 lg:mb-[4px] lg:text-body-2">
          서울 종로구
        </p>
        <h4 className="mb-[2px] truncate text-body-2 font-bold text-gray-90 lg:text-heading-5">
          {title}
        </h4>
        <p className="truncate text-caption-1 text-gray-60 lg:text-body-2">
          {service}
        </p>
      </div>
      {type ? (
        <PlatformType
          labelType={type as '기자단' | '방문형' | '배송형' | '카테고리'}
          platform={
            platform as '블로그' | '유튜브' | '인스타그램' | '틱톡' | '쇼츠'
          }
        />
      ) : (
        <ReviewType
          snsType="naver"
          labelType="방문형"
        />
      )}

      <div className="border border-line-neutral" />
      <div className="flex h-[14px] items-center justify-between text-caption-1 md:h-[22px] lg:text-body-1">
        <div>
          <span className="font-[700] text-gray-80">0명&nbsp;</span>
          <span className="font-[500] text-gray-60">/ {recruiter}명</span>
        </div>
        {remainingDays < 1 ? (
          <span className={`font-[700] text-gray-70`}>8일남음</span>
        ) : (
          <span className={`font-[700] ${textColor}`}>
            {remainingDays}일남음
          </span>
        )}
      </div>
    </div>
  )
}

export default ProductCardInfo

import ProductCardInfo from '../home/product/ProductCardInfo'
import Flag from '../home/product/Flag'

interface Props {
  flag: 'pick' | 'premium' | null
}

const CampaignCard = ({ flag }: Props) => {
  return (
    <article className="relative h-[235px] w-full md:h-[354px] md:w-[calc(46.3vw)] lg:h-[365px] lg:w-[22.7vw] desktop:h-[444px] desktop:w-[335px]">
      {/* 이미지 대용 */}
      <div className="h-[117px] w-full min-w-[156px] overflow-hidden rounded-t-lg bg-gray-300 md:h-[232px] lg:h-[173px] desktop:h-[252px]" />
      <div className="mt-[12px]" />
      지역 이름
      <Flag flag={flag} />
      <ProductCardInfo />
    </article>
  )
}

export default CampaignCard

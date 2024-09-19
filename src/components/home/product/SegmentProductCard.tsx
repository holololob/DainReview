import ProductCardInfo from './ProductCardInfo'
import Heart from './Heart'
import Segment from './Segment'
import Link from 'next/link'
import { CampaignProps } from '@/models/campaignList'

const SegmentProductCard = ({ data }: { data: CampaignProps }) => {
  return (
    <Link href={`/product/${data.seq}`}>
      <article className="relative h-[235px] w-full md:h-[354px] md:w-[calc(46.3vw)] lg:h-[365px] lg:w-[22.7vw] desktop:h-[444px] desktop:w-[335px]">
        <img
          src={data.image}
          className="h-[117px] w-full min-w-[156px] overflow-hidden rounded-t-lg object-cover md:h-[232px] lg:h-[173px] desktop:h-[252px]"
        />
        <div className="mt-[12px]" />
        <Segment segment={data.segment} />
        <Heart />
        <ProductCardInfo
          title={data.title}
          service={data.service}
          type={data.type}
          platform={data.platform}
          applicationEndDate={data.applicationEndDate}
          recruiter={data.recruiter}
        />
      </article>
    </Link>
  )
}

export default SegmentProductCard

import SearchFilterBox from '../modal/search-modal/SearchFilterBox'
import DropdownFilter from '../modal/search-modal/DropdownFilter'
import SegmentProductCard from '../home/product/SegmentProductCard'
import { CampaignProps } from '@/models/campaignList'

interface Props {
  keyword: string
  data: CampaignProps[]
}

const MobileSearchResult = ({ keyword, data }: Props) => {
  return (
    <div className="w-full px-4 pb-[74px]">
      {keyword !== '' && (
        <p className="mt-4 text-body-1 text-gray-90">
          <span className="font-medium text-red-main">{`'${keyword}'의 `}</span>
          검색결과
        </p>
      )}
      <div className="mt-4 flex gap-2">
        <SearchFilterBox title="지역" />
        <SearchFilterBox title="필터" />
        <DropdownFilter />
      </div>
      <section>
        <p className="mb-[6px] mt-10 text-caption-1 text-gray-80">
          {data.length}개의 체험단
        </p>

        {data.length === 0 ? (
          <div className="mt-24 text-center">
            <p className="mb-4 text-heading-4 font-medium text-gray-90">
              찾으시는 체험단이 없어요.
            </p>
            <p className="text-body-1 text-gray-60">
              적용한 필터나 키워드를 변경하여 찾아 보세요.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-4 gap-y-[10px]">
            {data.map((campaign: any) => (
              <SegmentProductCard
                data={campaign}
                key={campaign.seq}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default MobileSearchResult

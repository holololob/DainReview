import SearchFilterBox from '../modal/search-modal/SearchFilterBox'
import DropdownFilter from '../modal/search-modal/DropdownFilter'
import MobileSearchResultCard from '../modal/search-modal/MobileSearchResultCard'

interface Props {
  keyword: string
}

const MobileSearchResult = ({ keyword }: Props) => {
  return (
    <div className="w-full overflow-y-auto px-4">
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
          12개의 체험단
        </p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-[10px]">
          <MobileSearchResultCard />
          <MobileSearchResultCard />
        </div>
      </section>
    </div>
  )
}

export default MobileSearchResult
'use client'

import { useRouter } from 'next/navigation'
import { useSearchFilterBoxStore } from '@/store'
import useThreeFilter from '@/hooks/useThreeFilter'
import { filterOptions } from '@/data/filterOptions'
import RefreshIcon from '@/assets/icons/home/mobile/mobile-refresh.svg'
import XIcon from '@/assets/icons/home/mobile/mobile-x-icon.svg'

const FilterModal = ({ keyword }: { keyword: string }) => {
  const router = useRouter()
  const { closeFilterModal } = useSearchFilterBoxStore()

  const {
    selectedFilter,
    selectedFilters,
    handleFilterClick,
    handleFilterItemClick,
    handleRemoveItemClick,
    handleReset
  } = useThreeFilter()

  const handleSubmit = () => {
    closeFilterModal()

    const { category, platform, type } = selectedFilters

    const queryParams = new URLSearchParams()
    queryParams.append('keyword', keyword) // 필터 적용 시 키워드 유지
    queryParams.append('category', category ? category : '')
    queryParams.append('platform', platform ? platform : '')
    queryParams.append('type', type ? type : '')

    const queryString = queryParams.toString()
    router.push(`/search?${queryString}`)
  }

  return (
    <div className="fixed inset-0 z-40 flex items-end bg-black bg-opacity-40 lg:hidden">
      <div className="relative z-50 min-h-[480px] w-full min-w-[360px] rounded-t-3xl bg-white">
        <div className="flex h-20 max-w-[520px] items-center justify-center border-b border-line-neutral text-gray-80 520:w-[97vw]">
          지역설정
        </div>
        <div className="flex">
          <ul className="max-h-[282px] min-w-20 overflow-y-auto border-r border-line-neutral">
            {filterOptions.map(option => (
              <li
                onClick={() => handleFilterClick(option.category)}
                key={option.category}
                className={`py-4 text-center text-body-1 ${selectedFilter === option.category && 'bg-red-main text-white'}`}>
                {option.category}
              </li>
            ))}
          </ul>
          <ul className="max-h-[282px] w-full overflow-y-auto border-r border-line-neutral">
            {filterOptions
              .find(option => option.category === selectedFilter)
              ?.items.map(item => (
                <li
                  onClick={() => handleFilterItemClick(item)}
                  key={item}
                  className={`p-4 text-body-1 ${
                    (selectedFilter === '카테고리' &&
                      selectedFilters.category === item) ||
                    (selectedFilter === 'SNS' &&
                      selectedFilters.platform === item) ||
                    (selectedFilter === '유형' && selectedFilters.type === item)
                      ? 'text-red-main'
                      : ''
                  } `}>
                  {item}
                </li>
              ))}
          </ul>
        </div>
        {/* 선택된 요소 */}
        <ul className="flex h-[36px] gap-1 overflow-x-auto px-4 pt-2 shadow-topCustom">
          {['카테고리', 'SNS', '유형'].map(filter => {
            const selectedItem =
              filter === '카테고리'
                ? selectedFilters.category
                : filter === 'SNS'
                  ? selectedFilters.platform
                  : selectedFilters.type
            return (
              selectedItem && (
                <li
                  key={selectedItem}
                  className="flex items-center gap-[7px] rounded-2xl border px-3 py-[2px]">
                  <span className="min-w-min whitespace-nowrap text-body-2 text-gray-40">
                    {selectedItem}
                  </span>
                  <button onClick={() => handleRemoveItemClick(filter)}>
                    <XIcon />
                  </button>
                </li>
              )
            )
          })}
        </ul>
        <div className="flex justify-between gap-[10px] p-4">
          <div className="flex items-center gap-[10px] font-bold">
            <button
              onClick={handleReset}
              className="min-h-[50px] min-w-10 rounded-md px-2">
              <RefreshIcon />
            </button>
            <button
              onClick={closeFilterModal}
              className="min-h-[50px] min-w-[109px] rounded-md bg-gray-5 text-center text-heading-5">
              닫기
            </button>
          </div>
          <button
            onClick={handleSubmit}
            className="min-h-[50px] w-full rounded-md bg-red-main text-heading-5 text-white">
            확인
          </button>
        </div>
      </div>
    </div>
  )
}

export default FilterModal

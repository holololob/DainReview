'use client'

import Penalty from '@/assets/icons/my-profile/Penalty.svg'
import PenaltyModal from './PenaltyModal'

const data = {
  신청: 0,
  선정: 0,
  진행: 0,
  취소: 0,
  패널티: 0
}

interface Props {
  isModalOpen: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}
const StateBoard = ({ isModalOpen, onMouseEnter, onMouseLeave }: Props) => {
  return (
    <div className="mb-12 box-border w-full max-lg:px-5">
      {/* Large Screen Layout */}
      <div className="hidden grid-cols-4 rounded-lg border-2 bg-white lg:grid">
        <div className="box-border flex flex-col items-start justify-between border-r border-gray-200 p-5">
          <span className="text-gray-500">신청</span>
          <span className="text-2xl font-bold">{data.신청}</span>
        </div>
        <div className="box-border flex flex-col items-start justify-between border-r border-gray-200 p-5">
          <span className="text-gray-500">선정</span>
          <span className="text-2xl font-bold">{data.선정}</span>
        </div>
        <div className="box-border flex flex-col items-start justify-between border-r border-gray-200 p-5">
          <span className="text-gray-500">진행</span>
          <span className="text-2xl font-bold">{data.진행}</span>
        </div>
        <div className="flex flex-col justify-center bg-gray-100">
          <div className="box-border flex justify-between border-b p-5">
            <span className="text-gray-500">취소</span>
            <span className="text-lg font-semibold">{data.취소}회</span>
          </div>
          <div className="group relative box-border flex justify-between p-5">
            <span className="flex items-center gap-2 text-gray-500">
              패널티
              <Penalty
                width={17}
                height={17}
              />
            </span>
            <span className="text-lg font-semibold">{data.패널티}회</span>

            {/* 패널티 호버시 모달 */}
            <div className="absolute right-[-2px] top-0 z-20 hidden rounded-lg bg-white p-2 shadow-lg group-hover:block">
              <PenaltyModal />
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Layout */}
      <div className="w-full rounded-lg border-[1px] bg-white lg:hidden">
        <div className="grid h-20 grid-cols-3 border-b border-gray-200">
          <div className="flex flex-col items-center justify-center border-r border-gray-200">
            <span className="text-gray-500">신청</span>
            <span className="text-2xl font-bold">{data.신청}</span>
          </div>
          <div className="flex flex-col items-center justify-center border-r border-gray-200">
            <span className="text-gray-500">선정</span>
            <span className="text-2xl font-bold">{data.선정}</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-gray-500">진행</span>
            <span className="text-2xl font-bold">{data.진행}</span>
          </div>
        </div>
        <div className="grid h-20 grid-cols-2">
          <div className="flex items-center justify-between border-r bg-gray-100 px-[10px]">
            <span className="text-gray-500">취소</span>
            <span className="text-lg font-semibold">{data.취소}회</span>
          </div>

          <div className="group relative flex items-center justify-between border-r bg-gray-100 px-[10px]">
            <span className="flex items-center gap-2 text-gray-500">
              패널티
              <Penalty
                width={17}
                height={17}
              />
            </span>
            <span className="text-lg font-semibold">{data.패널티}회</span>

            {/* 패널티 호버시 모달 */}
            <div className="absolute right-[-2px] top-0 z-20 hidden rounded-lg bg-white p-2 shadow-lg group-hover:block">
              <PenaltyModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StateBoard

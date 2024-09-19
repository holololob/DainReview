import React from 'react'
import Penalty from '@/assets/icons/my-profile/Penalty.svg'
import Arrow from '@/assets/icons/my-profile/Arrow.svg'

const ManagementBoard = () => {
  return (
    <>
      <div className="mb-10 flex w-full justify-between border-[1px] max-lg:hidden">
        {/* 진행 Section */}
        <div className="] box-border flex w-full items-center justify-between p-5">
          <div className="w-1/3">
            <div className="mb-4 text-xl text-gray-60">진행</div>
            <div className="text-[26px] font-bold text-gray-80">2</div>
          </div>
          {/* 버튼 Section */}
          <div className="box-border flex w-1/3 flex-shrink border-l p-5">
            <button className="box-border flex h-1/2 w-full items-center justify-center rounded-lg px-5 py-3 text-center text-xl">
              체험단 등록하기
              <Arrow
                width={20}
                height={20}
              />
            </button>
          </div>
          <div className="box-border flex w-1/3 flex-shrink border-l p-5">
            <button className="box-border flex h-1/2 w-full items-center justify-center rounded-lg px-5 py-3 text-center text-xl">
              체험단 관리하기
              <Arrow
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>

        {/* 페널티 Section */}
        <div className="box-border flex w-[246px] items-center justify-between bg-gray-10 p-5">
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="mr-1 text-xs text-gray-60">페널티</span>
              <Penalty
                width={24}
                height={24}
              />
            </div>
          </div>
          <div className="mt-2 text-xl font-bold lg:mt-0">0회</div>
        </div>
      </div>

      {/* 모바일 */}
      <div className="grid grid-cols-2 grid-rows-1 gap-4 rounded-lg bg-white p-4 lg:hidden">
        {/* Left Section: 진행 및 페널티 */}
        <div className="row-span-1 rounded-lg border">
          {/* 진행 Section */}
          <div className="box-border p-2 text-center">
            <div className="text-gray-600">진행</div>
            <div className="text-3xl font-bold">2</div>
          </div>
          {/* 페널티 Section */}
          <div className="box-border flex items-center justify-between bg-gray-5 p-[10px]">
            <div className="flex items-center text-gray-600">
              <span className="mr-1 text-sm">페널티</span>
              <Penalty
                width={24}
                height={24}
              />
            </div>
            <div className="text-sm font-bold">0회</div>
          </div>
        </div>
        {/* Right Section: 버튼들 */}
        <div className="col-span-1 flex flex-col justify-between gap-4">
          <button className="box-border flex h-1/2 w-full items-center justify-center rounded-lg border px-5 py-3 text-center hover:bg-gray-200">
            체험단 등록
            <Arrow
              width={20}
              height={20}
            />
          </button>
          <button className="box-border flex h-1/2 w-full items-center justify-center rounded-lg border px-5 py-3 text-center hover:bg-gray-200">
            체험단 관리
            <Arrow
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </>
  )
}

export default ManagementBoard

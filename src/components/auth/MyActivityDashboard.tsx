import React from 'react'
import Penalty from '@/assets/icons/my-profile/Penalty.svg'

const MyActivityDashboard = () => {
  return (
    <div className="mb-12 box-border w-full max-lg:px-5">
      {/* Large Screen Layout */}
      <div className="hidden grid-cols-4 rounded-lg border-2 bg-white lg:grid">
        <div className="box-border flex flex-col items-start justify-between border-r border-gray-200 p-5">
          <span className="text-gray-500">신청</span>
          <span className="text-2xl font-bold">2</span>
        </div>
        <div className="box-border flex flex-col items-start justify-between border-r border-gray-200 p-5">
          <span className="text-gray-500">선정</span>
          <span className="text-2xl font-bold">1</span>
        </div>
        <div className="box-border flex flex-col items-start justify-between border-r border-gray-200 p-5">
          <span className="text-gray-500">진행</span>
          <span className="text-2xl font-bold">2</span>
        </div>
        <div className="flex flex-col justify-center bg-gray-100">
          <div className="box-border flex justify-between border-b p-5">
            <span className="text-gray-500">취소</span>
            <span className="text-lg font-semibold">1회</span>
          </div>
          <div className="box-border flex justify-between p-5">
            <span className="flex items-center gap-2 text-gray-500">
              패널티
              <Penalty
                width={17}
                height={17}
              />
            </span>
            <span className="text-lg font-semibold">0회</span>
          </div>
        </div>
      </div>

      {/* Responsive Layout */}
      <div className="w-full rounded-lg border-[1px] bg-white lg:hidden">
        <div className="grid h-20 grid-cols-3 border-b border-gray-200">
          <div className="flex flex-col items-center justify-center border-r border-gray-200">
            <span className="text-gray-500">신청</span>
            <span className="text-2xl font-bold">2</span>
          </div>
          <div className="flex flex-col items-center justify-center border-r border-gray-200">
            <span className="text-gray-500">선정</span>
            <span className="text-2xl font-bold">1</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-gray-500">진행</span>
            <span className="text-2xl font-bold">2</span>
          </div>
        </div>
        <div className="grid h-20 grid-cols-2">
          <div className="flex items-center justify-between border-r bg-gray-100 px-[10px]">
            <span className="text-gray-500">취소</span>
            <span className="text-lg font-semibold">1회</span>
          </div>
          <div className="flex items-center justify-between border-r bg-gray-100 px-[10px]">
            <span className="flex items-center gap-2 text-gray-500">
              패널티
              <Penalty
                width={17}
                height={17}
              />
            </span>
            <span className="text-lg font-semibold">0회</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyActivityDashboard

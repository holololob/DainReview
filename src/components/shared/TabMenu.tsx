'use client'
import React, { useState } from 'react'

const TabMenu = () => {
  const [activeMainTab, setActiveMainTab] = useState('내 체험단')
  const [activeSubTab, setActiveSubTab] = useState('전체')

  const mainTabs = ['내 체험단', '내가 찜한 체험단']
  const subTabs = ['전체', '신청', '선정', '진행', '완료']

  return (
    <div className="max-lg:px-4">
      {/* Main Tabs */}
      <span className="flex space-x-4 border-b-[1px]">
        {mainTabs.map(tab => (
          <button
            key={tab}
            className={`mb-[-1px] w-[200px] rounded-t-[4px] border-b-[1px] py-2 text-sm font-semibold ${
              activeMainTab === tab
                ? 'border-b-black bg-white font-bold text-black'
                : 'bg-white text-gray-60'
            }`}
            onClick={() => setActiveMainTab(tab)}>
            {tab}
          </button>
        ))}
      </span>

      {/* Sub Tabs */}
      <span className="mt-4 flex space-x-4">
        {subTabs.map(tab => (
          <button
            key={tab}
            className={`rounded-full px-3 py-1 text-sm font-[400] ${
              activeSubTab === tab
                ? 'border-[1px] border-red-main text-red-main'
                : 'border-[1px] border-line-normal text-gray-600'
            }`}
            onClick={() => setActiveSubTab(tab)}>
            {tab}
          </button>
        ))}
      </span>

      {/* Tab Content */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Example content - Replace with actual content */}
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col justify-between rounded-lg bg-white p-4 shadow">
            <h2 className="text-lg font-bold">{`${activeMainTab} - ${activeSubTab}`}</h2>
            <p className="text-sm text-gray-500">Content {index + 1}</p>
            <div className="mt-2 flex justify-between">
              <button className="font-semibold text-red-500">신청취소</button>
              <button className="font-semibold text-black">리뷰등록</button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination (example) */}
      {/* <div className="mt-4 flex justify-center">
        <nav className="inline-flex space-x-2">
          <button className="rounded-md bg-gray-100 px-3 py-1 text-gray-600">
            1
          </button>
          <button className="rounded-md bg-gray-100 px-3 py-1 text-gray-600">
            2
          </button>
          <button className="rounded-md bg-gray-100 px-3 py-1 text-gray-600">
            3
          </button>
          <button className="rounded-md bg-gray-100 px-3 py-1 text-gray-600">
            ...
          </button>
          <button className="rounded-md bg-gray-100 px-3 py-1 text-gray-600">
            14
          </button>
        </nav>
      </div> */}
    </div>
  )
}

export default TabMenu

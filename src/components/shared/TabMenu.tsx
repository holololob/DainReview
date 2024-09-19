'use client'
import React, { useState } from 'react'
import ProductCard from '../home/product/ProductCard'

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
      <span className="my-6 flex space-x-4">
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
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-10">
        {/* Example content - Replace with actual content */}
        {[...Array(2)].map((_, index) => (
          <ProductCard
            key={index}
            flag={'premium'}
          />
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

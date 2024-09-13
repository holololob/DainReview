'use client'

import React, { useState } from 'react'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import PageTitle from '@/components/shared/PageTitle'
import ProductCard from '@/components/home/product/ProductCard'
import CampaignCard from '@/components/campaign/CampaignCard'
import ProductCardContainer from '@/components/home/product/ProductCardContainer'
import CampaignCardContainer from '@/components/campaign/CampaignCardContainer'
import ProductCardInfo from '@/components/home/product/ProductCardInfo'
import SearchForm from '@/components/search/SearchForm'

const page = () => {
  return (
    <main>
      <Header
        isLogin={false}
        subtitle={'체험단 관리'}
        isOnlyBackButton
      />
      <PageTitle
        title="체험단 관리"
        subtitle="진행 중인 체험단의 일정을 관리하고 결과보고서를 작성할 수 있어요"
        alignment="left"
      />
      <div className="m-auto flex w-full max-w-[1920px] flex-col bg-background-gray">
        <section className="mb-[10px] flex w-full max-w-[1400px] flex-col bg-gray-0 p-[24px]">
          <div className="flex space-x-[4px]">
            <input
              type="text"
              name="keyword"
              placeholder="키워드를 입력해 주세요"
              className="mb-[6px] h-[40px] w-full rounded-[4px] border border-line-normal pl-[12px]"
            />
            <button
              type="button"
              className="h-[40px] w-[74px] rounded-[4px] border border-gray-90 bg-gray-90 text-body-2 font-[700] text-gray-0">
              검색
            </button>
          </div>
          <div className="flex w-full items-center justify-between space-x-2">
            <select
              required
              className="mt-2 w-full rounded-md border border-gray-300 p-2 text-gray-700">
              <option value="">플랫폼</option>
              <option value="naver blog">블로그</option>
              <option value="instagram">인스타그램</option>
              <option value="youtube">유튜브</option>
              <option value="tiktok">틱톡</option>
              <option value="reels">릴스</option>
              <option value="shorts">쇼츠</option>
            </select>

            <select
              required
              className="mt-2 w-full rounded-md border border-gray-300 p-2 text-gray-700">
              <option value="">선택</option>
              <option value="visit">방문형</option>
              <option value="takeout">포장형</option>
              <option value="delivery">배송형</option>
            </select>
          </div>
        </section>
        <section className="bg-gray-0 p-[24px]">
          <CampaignCardContainer />
        </section>
      </div>

      <Footer />
    </main>
  )
}

export default page

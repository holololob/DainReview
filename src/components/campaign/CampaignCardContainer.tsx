'use client'

import React from 'react'
import { useMediaQuery } from 'react-responsive'
import CampaignCard from './CampaignCard'
import MoreButton from '../home/product/MoreButton'
import { useEffect, useState } from 'react'

const CampaignCardContainer = () => {
  const [desktop, setDesktop] = useState(false)
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' })
  const displayedProducts = Array(8).fill(null)

  useEffect(() => {
    if (isMobile) {
      setDesktop(false)
    } else {
      setDesktop(true)
    }
    return () => {}
  }, [isMobile])

  // 웹 크기에서 8개 노출, 모바일 4개 노출
  const visibleCards = desktop ? 8 : 4

  return (
    <>
      <div className="mx-auto flex max-w-[1400px] flex-col">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-10">
          {displayedProducts.slice(0, visibleCards).map((_, i) => (
            <CampaignCard
              flag={null}
              status={status}
              key={i}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default CampaignCardContainer

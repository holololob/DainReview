'use client'

import { useMediaQuery } from 'react-responsive'
import ProductCard from './ProductCard'
import MoreButton from './MoreButton'

const ProductCardContainer = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' })
  const displayedProducts = Array(8).fill(null)

  // 웹 크기에서 8개 노출, 모바일 4개 노출
  const visibleCards = isMobile ? 4 : 8

  return (
    <>
      <div className="mx-auto flex max-w-[1400px] flex-col">
        <section className="mb-[16px] flex justify-between lg:mb-[20px]">
          <p className="text-heading-5 font-[700] lg:text-[22px]">
            인기 체험단 ⭐
          </p>
          <MoreButton />
        </section>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-10">
          {displayedProducts.slice(0, visibleCards).map((_, i) => (
            <ProductCard
              flag={null}
              key={i}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default ProductCardContainer

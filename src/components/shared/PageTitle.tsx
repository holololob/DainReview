import React from 'react'
import DecoLeft from '@/assets/icons/review/deco_left.svg'
import DecoRight from '@/assets/icons/review/deco_right.svg'

interface PageHeaderProps {
  title?: string // 페이지 타이틀
  subtitle?: string // 페이지 설명
  alignment?: 'left' | 'center' | 'right' // 텍스트 정렬 방식
}

const PageTitle: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  alignment = 'center'
}) => {
  const alignmentClass = {
    left: 'items-start text-left',
    right: 'items-end text-right',
    center: 'items-center text-center'
  }[alignment || 'center']

  const containerHeightClass = subtitle ? 'h-[240px]' : 'h-[200px]'

  return (
    <div>
      {/* Larger screens: Display full header */}
      <div
        className={`hidden max-h-[240px] w-full bg-gradient-to-b from-[#040404] to-[#505156] lg:flex ${containerHeightClass}`}>
        <div className="relative mx-auto flex w-full max-w-[1400px] flex-col justify-end px-[56px]">
          <DecoLeft className="absolute left-0 top-0 z-10 h-full" />
          <DecoRight className="absolute right-0 top-0 z-10 h-full" />

          <div
            className={`relative z-20 flex w-full flex-col justify-center pb-[40px] ${alignmentClass}`}>
            {title && (
              <h2 className="text-display-2 font-[700] text-gray-0">{title}</h2>
            )}
            {subtitle && (
              <p className="mt-[16px] text-heading-2 font-[300] text-gray-0">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageTitle

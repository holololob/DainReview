'use client'

import React from 'react'

type StatusType = '검수중' | '모집중' | '모집완료' | '리뷰마감'

const statusStyles: { [key in StatusType]: string } = {
  검수중: 'bg-gray-40',
  모집중: 'bg-red-main',
  모집완료: 'bg-red-main',
  리뷰마감: 'bg-gray-90'
}

interface CampaignStatusLabelProps {
  status: StatusType
}

const CampaignStatusLabel: React.FC<CampaignStatusLabelProps> = ({
  status
}) => {
  return (
    <div
      className={`absolute bottom-0 left-0 w-full p-2 text-center text-body-2 font-[700] text-gray-0 ${statusStyles[status]} bg-opacity-80`}>
      {status}
    </div>
  )
}

export default CampaignStatusLabel

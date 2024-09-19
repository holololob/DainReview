import React from 'react'
import InputCheckedIcon from '@/assets/icons/auth/InputCheckedIcon.svg'
import InputCheckedErrorIcon from '@/assets/icons/auth/InputCheckedErrorIcon.svg'

interface VerificationIconProps {
  isVerified: boolean | null
}

const VerificationIcon: React.FC<VerificationIconProps> = ({ isVerified }) => {
  if (isVerified === null) return null // null일 경우 아이콘을 표시하지 않음

  return (
    <div className="absolute right-2 top-3">
      {isVerified ? <InputCheckedIcon /> : <InputCheckedErrorIcon />}
    </div>
  )
}

export default VerificationIcon

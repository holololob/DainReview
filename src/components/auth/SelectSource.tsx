import React, { ChangeEvent, SelectHTMLAttributes } from 'react'
import { Label } from '../shared/Label'
import { useFormContext } from 'react-hook-form'

const SelectSource = () => {
  const { register, setValue } = useFormContext()

  return (
    <>
      <Label
        id="signupSource"
        name="가입경로"
        require={true}
      />
      <select
        className="h-10 w-full rounded-e border-2"
        {...register('signupSource')}
        name="signupSource"
        id="signupSource">
        <option value="search">포털 검색</option>
        <option value="social">SNS</option>
        <option value="match">지인 소개</option>
        <option value="other">기타</option>
      </select>
    </>
  )
}
export default SelectSource

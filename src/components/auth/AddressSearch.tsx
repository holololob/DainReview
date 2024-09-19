'use client'

import React, { useState } from 'react'
import DaumPostcode from 'react-daum-postcode'
import Button from '../shared/Button'
import Input from '../shared/Input'
import { Controller, useFormContext } from 'react-hook-form'

const AddressSearch = () => {
  const { control, setValue } = useFormContext()
  const [isOpen, setIsOpen] = useState(false)
  const [address, setAddress] = useState('')

  const handleComplete = (data: any) => {
    console.log('address', data)
    let fullAddress = data.address
    let zoneCode = data.zonecode
    let extraAddress = ''

    setValue('postalCode', zoneCode)

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : ''
    }

    setValue('address', fullAddress)

    setIsOpen(false)
  }

  return (
    <div className="">
      <h2 className="mb-4 text-base font-semibold">주소</h2>
      <div className="space-y-1">
        <div className="flex gap-1">
          <Controller
            name="postalCode"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                {...field}
                placeholder="우편번호"
                className="box-border h-[42px] w-full rounded-[4px] border px-2 shadow-sm transition focus:border-black focus:outline-none focus:ring-1 focus:ring-black disabled:cursor-not-allowed disabled:opacity-70"
              />
            )}
          />
          <Button
            onClick={() => setIsOpen(true)}
            className="h-[42px] w-[74px]">
            주소
          </Button>
        </div>
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <input
              type="text"
              {...field}
              placeholder="기본주소"
              className="box-border h-[39px] w-full rounded-[4px] border p-2 shadow-sm transition focus:border-black focus:outline-none focus:ring-1 focus:ring-black disabled:cursor-not-allowed disabled:opacity-70"
            />
          )}
        />

        <Input
          id={'addressDetail'}
          type={'text'}
          placeholder="상세주소"
        />
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-lg rounded-md bg-white p-6 shadow-md">
            <button
              className="mb-4 text-right text-gray-500 hover:text-gray-700"
              onClick={() => setIsOpen(false)}>
              닫기
            </button>
            <DaumPostcode onComplete={handleComplete} />
          </div>
        </div>
      )}
    </div>
  )
}

export default AddressSearch

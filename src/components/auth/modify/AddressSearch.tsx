'use client'

import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'

import React, { useState } from 'react'
import DaumPostcode from 'react-daum-postcode'

import { Controller } from 'react-hook-form'
import InputField from './InputField'

const AddressSearch = ({
  control,
  setValue,
  register,
  description,
  substring
}: any) => {
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
      <div className="mb-4 flex items-center gap-2">
        <h2 className="text-base font-semibold">주소</h2>
        <p className="text-[14px] text-gray-60">{description}</p>
      </div>
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
                className="box-border h-[42px] w-full rounded-[4px] border px-2 transition focus:border-black focus:outline-none focus:ring-1 focus:ring-black disabled:cursor-not-allowed disabled:opacity-70"
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
              className="box-border h-[42px] w-full rounded-[4px] border px-2 transition focus:border-black focus:outline-none focus:ring-1 focus:ring-black disabled:cursor-not-allowed disabled:opacity-70"
            />
          )}
        />

        <InputField
          id={'addressDetail'}
          type={'text'}
          placeholder="상세주소"
          name={''}
          require={false}
          description={''}
          register={register}
          errors={undefined}
        />
      </div>
      <p className="my-2 text-[14px] text-gray-60">{substring}</p>
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

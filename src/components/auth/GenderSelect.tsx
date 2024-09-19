import React, { useState } from 'react'
import { Label } from '../shared/Label'
import Button from '../shared/Button'
import { useFormContext } from 'react-hook-form'

const GenderSelect = ({ id }: { id: string }) => {
  const {
    setValue,
    formState: { errors }
  } = useFormContext()
  const [selectedGender, setSelectedGender] = useState(null)

  const handleGenderSelect = (gender: any) => {
    setSelectedGender(gender)
    setValue(id, gender)
  }

  return (
    <div className="my-4">
      <Label
        id={id}
        name="성별"
        require={true}
      />
      {errors && (
        <p className="mt-2 text-sm text-red-500">
          {errors[id]?.message?.toString()}
        </p>
      )}
      <div className="flex w-full gap-2">
        <Button
          type="button"
          variant={
            selectedGender === 1 ? 'outline_secondary_red' : 'outline_disable'
          }
          className="flex-1"
          onClick={() => handleGenderSelect(1)}>
          남성
        </Button>
        <Button
          type="button"
          variant={
            selectedGender === 2 ? 'outline_secondary_red' : 'outline_disable'
          }
          className="flex-1"
          onClick={() => handleGenderSelect(2)}>
          여성
        </Button>
      </div>
    </div>
  )
}

export default GenderSelect

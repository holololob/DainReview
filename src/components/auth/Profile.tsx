import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Label } from '../shared/Label'

import CameraProfile from '@/assets/icons/auth/CameraProfile.svg'
import ProfileImage from '@/assets/icons/auth/ProfileImage.svg'

interface ImageUploadProps {
  name: string
  control: any
  label: string
}

const Profile: React.FC<ImageUploadProps> = ({ name, control, label }) => {
  const [preview, setPreview] = useState<string | null>(null)

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (file: File) => void
  ) => {
    const file = e.target.files?.[0]
    if (file) {
      onChange(file) // react-hook-form으로 파일 전달
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="flex flex-col space-y-2">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <Label
              id="profile"
              name="프로필 이미지"
              require={false}
              description="10MB 미만의 이미지를 업로드해주세요."
            />

            {preview !== null ? (
              <div className="relative h-[100px] w-[100px]">
                <img
                  src={preview}
                  alt="Preview"
                  className="mt-2 h-full w-full overflow-hidden rounded-full object-cover"
                />
                <div className="absolute bottom-0 right-0">
                  <CameraProfile />
                </div>
              </div>
            ) : (
              <label className="relative block h-[100px] w-[100px]">
                <ProfileImage
                  width={100}
                  height={100}
                />
                <div className="absolute bottom-0 right-0">
                  <CameraProfile />
                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="profile"
                  onChange={e => handleImageChange(e, field.onChange)}
                />
              </label>
            )}

            {/* <input
              type="file"
              accept="image/*"
              onChange={e => handleImageChange(e, field.onChange)}
            /> */}
            {/* {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-2 h-48 w-48 object-cover"
              />
            )} */}
          </>
        )}
      />
    </div>
  )
}

export default Profile

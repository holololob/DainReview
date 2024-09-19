'use client'

import ImagePreviewe from '@/components/cancel/ImagePreview'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import PageTitle from '@/components/shared/PageTitle'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface FormValues {
  reason: string
  description: string
  photo?: FileList
}

const CancelPage = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors }
  } = useForm<FormValues>()

  const description = watch('description', '')

  const [files, setFiles] = useState<File[]>([])

  const handleFileSelect = (selectedFiles: File[]) => {
    setFiles(selectedFiles)
  }

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <>
      <Header
        isLogin={true}
        subtitle="체험단 취소"
      />
      <PageTitle
        title="체험단 취소"
        alignment="center"
      />
      <div className="mx-auto mb-[197px] w-full max-w-[926px] lg:py-10">
        <form className="flex flex-col gap-6 p-4 lg:p-0">
          <section className="flex flex-col gap-2">
            <p className="text-body-1 font-bold text-gray-90">구분</p>
            <select
              className="border px-2 py-2 lg:w-[335px]"
              {...register('reason', { required: '취소 사유를 선택하세요' })}>
              <option
                disabled
                selected>
                선택
              </option>
              <option value="협의">협의 취소(취소 횟수 없음)</option>
              <option value="단순">단순 취소(취소 횟수 부과)</option>
            </select>
          </section>
          <section className="flex flex-col gap-2">
            <p className="text-body-1 font-bold text-gray-90">취소 사유</p>
            <textarea
              {...register('description', {
                required: '사유를 입력하세요',
                maxLength: 500
              })}
              maxLength={499}
              placeholder="취소 사유를 입력해주세요"
              className="h-[167px] resize-none rounded border border-line-normal px-3 py-[9px] focus:outline-none"
            />
            <div className="ml-auto text-caption-1 text-gray-30">
              {description.length}/500
            </div>
          </section>
          <section className="flex flex-col gap-2">
            <p className="text-body-1 font-bold text-gray-90">협의 내용</p>
            <p className="mb-[2px] text-body-2 text-gray-60">
              10MB 이하의 JPG, PNG, BMP, GIF, PDF 파일 3개까지 업로드 가능합니다
            </p>
            <ImagePreviewe onFileSelect={handleFileSelect} />
          </section>
          <button
            className="w-full rounded bg-red-main px-[28px] py-4 text-heading-5 font-bold text-white"
            type="submit">
            제출
          </button>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default CancelPage

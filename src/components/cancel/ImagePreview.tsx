'use client'

import React, { useState, useCallback } from 'react'
import { useDropzone, FileRejection } from 'react-dropzone'

import ClipImage from '@/assets/icons/review/clip.svg'
import ButtonRemove from '@/assets/icons/review/remove.svg'

interface ImagePrevieweProps {
  onFileSelect: (files: File[]) => void
  maxFiles?: number // 최대 파일 개수
  maxSize?: number // 최대 파일 크기 (MB 단위)
}

const ImagePreviewe: React.FC<ImagePrevieweProps> = ({
  onFileSelect,
  maxFiles = 3,
  maxSize = 10 // 기본값 10MB
}) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length + selectedFiles.length > maxFiles) {
        setErrorMessage('파일은 최대 10개까지 첨부할 수 있습니다.')
        return
      }

      setSelectedFiles(prevFiles => {
        const newFiles = [...prevFiles, ...acceptedFiles].slice(0, maxFiles)
        onFileSelect(newFiles)
        return newFiles
      })
      setErrorMessage(null)
    },
    [maxFiles, selectedFiles.length, onFileSelect]
  )

  const onDropRejected = useCallback((rejectedFiles: FileRejection[]) => {
    rejectedFiles.forEach(rejection => {
      if (rejection.errors.some(e => e.code === 'file-too-large')) {
        setErrorMessage('10MB 이하의 파일만 업로드할 수 있습니다.')
      }
    })
  }, [])

  const removeFile = (index: number) => {
    setSelectedFiles(prevFiles => {
      const newFiles = prevFiles.filter((_, i) => i !== index)
      onFileSelect(newFiles)
      return newFiles
    })
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected,
    accept: { 'image/': [] },
    maxSize: maxSize * 1024 * 1024 // 최대 파일 크기 설정
  })

  return (
    <div>
      <div
        {...getRootProps()}
        className="cursor-pointer rounded border-2 lg:border-dashed lg:p-4">
        <input {...getInputProps()} />
        {isDragActive && (
          <div className="text-body1r flex h-[68px] w-full items-center justify-center rounded-[4px] text-gray-40">
            <ClipImage className="mr-[5px]" />
            <p>드래그한 파일을 이곳에 놓으세요</p>
          </div>
        )}
        {!isDragActive && (
          <div className="flex min-h-[68px] w-full items-center justify-center rounded-[4px] bg-background-gray text-body-1 text-gray-40 lg:h-[83px] lg:bg-white">
            <ClipImage className="mr-[5px]" />
            <p className="hidden lg:block">
              이미지를 드래그 앤 드롭하거나 클릭하여 파일을 선택하세요
            </p>
            <p className="lg:hidden">파일 첨부하기</p>
          </div>
        )}
      </div>
      {errorMessage && <p className="mt-2 text-red-500">{errorMessage}</p>}
      <div className="mt-4 flex flex-wrap gap-2">
        {selectedFiles.map((file, index) => (
          <div
            key={index}
            className="relative w-[32%] rounded border border-gray-300">
            <img
              src={URL.createObjectURL(file)}
              alt={`Preview ${index}`}
              className="aspect-square object-contain"
            />
            <button
              type="button"
              className="absolute right-0 top-0 p-1 text-red-500"
              onClick={e => {
                e.stopPropagation() // 이벤트 버블링 방지
                removeFile(index)
              }}>
              <ButtonRemove />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImagePreviewe

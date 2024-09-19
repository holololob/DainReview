'use client'

import React, { useState, useCallback, useEffect } from 'react'
import { useDropzone, FileRejection } from 'react-dropzone'
import Image from 'next/image'

import ClipImage from '@/assets/icons/review/clip.svg'
import ButtonRemove from '@/assets/icons/review/remove.svg'

interface ImagePreviewerProps {
  onFileSelect: (files: File[]) => void
  maxFiles: number // 최대 파일 개수
  maxSize: number // 최대 파일 크기 (MB 단위)
}

const ImagePreviewer: React.FC<ImagePreviewerProps> = ({
  onFileSelect,
  maxFiles,
  maxSize
}) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [previewUrls, setPreviewUrls] = useState<string[]>([]) // 미리보기 URL
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length + selectedFiles.length > maxFiles) {
        setErrorMessage(`파일은 최대 ${maxFiles}개까지 첨부할 수 있습니다.`)
        return
      }

      const newFiles = [...selectedFiles, ...acceptedFiles].slice(0, maxFiles)
      setSelectedFiles(newFiles)
      onFileSelect(newFiles)
      setErrorMessage(null)
    },
    [maxFiles, selectedFiles, onFileSelect]
  )

  const onDropRejected = useCallback(
    (rejectedFiles: FileRejection[]) => {
      rejectedFiles.forEach(rejection => {
        if (rejection.errors.some(e => e.code === 'file-too-large')) {
          setErrorMessage(`${maxSize}MB 이하의 파일만 업로드할 수 있습니다.`)
        }
      })
    },
    [maxSize]
  )

  const removeFile = useCallback(
    (index: number) => {
      const newFiles = selectedFiles.filter((_, i) => i !== index)
      setSelectedFiles(newFiles)
      onFileSelect(newFiles)
    },
    [selectedFiles, onFileSelect]
  )

  // 미리보기 URL 생성 및 메모리 해제
  useEffect(() => {
    const newPreviews = selectedFiles.map(file => URL.createObjectURL(file))
    setPreviewUrls(newPreviews)

    return () => {
      newPreviews.forEach(url => URL.revokeObjectURL(url))
    }
  }, [selectedFiles])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected,
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/bmp': [],
      'image/gif': [],
      'image/tiff': [],
      'image/webp': [],
      'image/svg+xml': []
    },
    maxSize: maxSize * 1024 * 1024 // 최대 파일 크기 설정
  })

  return (
    <div>
      <div
        {...getRootProps()}
        className="my-3 cursor-pointer rounded border-2 border-dashed p-4">
        <input {...getInputProps()} />
        <div className="flex h-[68px] w-full items-center justify-center rounded-[4px] text-body-1 text-gray-40">
          <ClipImage className="mr-[5px] flex-shrink-0" />
          <p className="text-left text-body-1 text-gray-40">
            {isDragActive
              ? '드래그한 파일을 이곳에 놓으세요'
              : '이미지를 드래그 앤 드롭하거나 클릭하여 파일을 선택하세요'}
          </p>
        </div>
      </div>

      {errorMessage && <p className="mt-2 text-red-500">{errorMessage}</p>}

      <div className="flex overflow-x-auto">
        {previewUrls.map((previewUrl, index) => (
          <div
            key={index}
            className="relative mr-4 flex-shrink-0"
            style={{ width: '180px' }}>
            <Image
              src={previewUrl}
              alt={`Preview ${index}`}
              width={180}
              height={150}
              className="rounded border border-gray-300"
            />
            <button
              type="button"
              className="absolute right-0 top-0 p-1 text-red-500"
              onClick={e => {
                e.stopPropagation()
                removeFile(index)
              }}
              style={{ zIndex: 10 }}>
              <ButtonRemove />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImagePreviewer

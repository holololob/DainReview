import React, { useState } from 'react'

interface TextareaCounterProps {
  maxLength: number
  placeholder: string
}

const TextareaCounter: React.FC<TextareaCounterProps> = ({
  maxLength,
  placeholder
}) => {
  const [text, setText] = useState<string>('')

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length <= maxLength) {
      setText(event.target.value)
    }
  }

  return (
    <div>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder={placeholder}
        className="h-[167px] w-full resize-none rounded-[4px] border border-line-normal p-[9px] pl-[12px]"
      />
      <div className="flex justify-end text-caption-1 font-[300] text-gray-30">
        {text.length} / {maxLength}
      </div>
    </div>
  )
}

export default TextareaCounter

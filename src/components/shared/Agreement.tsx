import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import Text from './Text'

function Agreement({ children }: { children: React.ReactNode }) {
  return <div className="space-y-4">{children}</div>
}

function AgreementTitle({
  children,
  name
}: {
  children: React.ReactNode
  name: string
}) {
  const { control } = useFormContext()
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div
          onClick={() => field.onChange(!field.value)}
          className="flex">
          <IconCheck
            checked={field.value}
            withCircle={true}
          />
          <Text
            size="t5"
            weight={500}
            color="red"
            className="ml-2">
            {children}
          </Text>
        </div>
      )}
    />
  )
}

function AgreementDescription({
  children,
  name,
  require,
  sub
}: {
  children: React.ReactNode
  name: string
  require: boolean
  sub: string
}) {
  const { control } = useFormContext()
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex">
          <div
            className="flex items-center"
            onClick={() => field.onChange(!field.value)}>
            <IconCheck checked={field.value} />
            <Text
              size="t6"
              weight={700}
              color="black"
              className="ml-2 underline">
              {children}
            </Text>
            <Text
              size="t6"
              weight={500}
              color="black"
              className="ml-2 no-underline">
              {sub}
            </Text>
            {require === true ? (
              <Text
                size="t6"
                weight={400}
                color="gray40"
                className="text-body2 ml-3">
                (필수)
              </Text>
            ) : (
              <Text
                size="t6"
                weight={400}
                color="gray40"
                className="text-body2 ml-3">
                (선택)
              </Text>
            )}
          </div>
        </div>
      )}
    />
  )
}

function IconCheck({ checked }: { checked: boolean; withCircle?: boolean }) {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_4830_266112)">
        {checked === true ? (
          <rect
            x="2.16797"
            y="2.66699"
            width="15.6667"
            height="15.6667"
            rx="1.5"
            fill="#FF394E"
          />
        ) : null}
        <rect
          x="2.16797"
          y="2.66699"
          width="15.6667"
          height="15.6667"
          rx="1.5"
          stroke="#D32C3E"
        />
        {checked === true ? (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.7602 7.41532C15.0832 7.74309 15.0794 8.27072 14.7517 8.59381L9.67922 13.5938C9.36826 13.9003 8.87344 13.9148 8.54504 13.6271L5.28417 10.77C4.93801 10.4667 4.90327 9.94017 5.20657 9.59401C5.50987 9.24785 6.03636 9.2131 6.38252 9.51641L9.06083 11.8631L13.5817 7.40685C13.9094 7.08376 14.4371 7.08755 14.7602 7.41532Z"
            fill="white"
          />
        ) : null}
      </g>
      <defs>
        <clipPath id="clip0_4830_266112">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

Agreement.Title = AgreementTitle
Agreement.Description = AgreementDescription

export default Agreement
